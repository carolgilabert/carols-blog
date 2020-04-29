const { validateToken } = require('./__helpers__/IndieAuth');
const { getFileContents, updateFile } = require('./__helpers__/GitHubRepo');

exports.handler = async event => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // 1. Get data from request body
        const requestData = JSON.parse(event.body);

        // 2. Validate token by making a call to tokens endpoint
        const data = await validateToken(requestData.token);
        if ('error' in data) {
            return {
                statusCode: 500,
                body: data.error
            };
        }
        delete requestData.token;

        // 3. Generate JSON for new event
        const eventData = JSON.parse(JSON.stringify(requestData));

        // 4. Edit the events JSON file
        // 4a. Get RSVPs file contents
        const rsvpFilePath = 'src/data/rsvps.json';
        const { fileContent, fileSha } = await getFileContents(rsvpFilePath);

        // 4b. Add new RSVP to old content
        const rsvpsArray = JSON.parse(fileContent);
        rsvpsArray.push(eventData);

        const newRsvpsContent = JSON.stringify(rsvpsArray);

        // 5. Stage & commit changes
        await updateFile(rsvpFilePath, newRsvpsContent, fileSha);

        // 6. Done!
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
