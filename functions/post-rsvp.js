exports.handler = async event => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const fetch = require('node-fetch');
        const querystring = require('querystring');

        // 1. Get data from request body
        const requestData = JSON.parse(event.body);

        // 2. Validate token by making a call to tokens endpoint
        const params = querystring.stringify({
            grant_type: 'authorization_code',
            me: 'https://carolgilabert.me',
            redirect_uri: 'https://carolgilabert.me',
            client_id: 'https://carolgilabert.me',
            code: requestData.token
        });

        const response = await fetch(
            `https://tokens.indieauth.com/token?${params}`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Accept-Charset': 'utf-8'
                }
            }
        );

        const data = await response.json();
        if ('error' in data) {
            return {
                statusCode: 500,
                body: data.error
            };
        }

        // 3. Generate JSON for new event
        const eventData = JSON.parse(JSON.stringify(requestData));
        delete eventData.token;

        // 4. Get GitHub API keys from env & initialise GitHub client
        const GitHubToken = process.env.GITHUB_TOKEN;

        // 5. Edit the events JSON file
        // 5a. Get RSVPs file contents
        const getFileResponse = await fetch(
            `https://api.github.com/repos/carolgilabert/carols-blog/contents/src/data/rsvps.json`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${GitHubToken}`
                }
            }
        );
        const rsvpsFile = await getFileResponse.json();

        // 5b. Add new RSVP to old content
        const rsvpsArray = JSON.parse(
            Buffer.from(rsvpsFile.content, 'base64').toString('ascii')
        );
        rsvpsArray.push(eventData);

        const newRsvpsContent = JSON.stringify(rsvpsArray);

        // 6. Stage & commit changes
        const updateFileResponse = await fetch(
            `https://api.github.com/repos/carolgilabert/carols-blog/contents/src/data/rsvps.json`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${GitHubToken}`
                },
                body: JSON.stringify({
                    message: 'Adding new event from micropub endpoint.',
                    branch: 'master',
                    committer: {
                        name: 'Carolina Gilabert',
                        email: 'carolgilabert@gmail.com'
                    },
                    content: Buffer.from(newRsvpsContent).toString('base64'),
                    sha: rsvpsFile.sha
                })
            }
        );

        await updateFileResponse.json();

        // 8. Done!
        return {
            statusCode: 200,
            body: `RSVP added successfully :)`
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: err
        };
    }
};
