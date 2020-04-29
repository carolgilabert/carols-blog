const fetch = require('node-fetch');

const GitHubToken = process.env.GITHUB_TOKEN;

const getFileContents = async path => {
    const fileResponse = await fetch(
        `https://api.github.com/repos/carolgilabert/carols-blog/contents/${path}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GitHubToken}`
            }
        }
    );
    const fileContentRaw = await fileResponse.json();
    return {
        fileContent: Buffer.from(fileContentRaw.content, 'base64').toString(
            'ascii'
        ),
        fileSha: fileContentRaw.sha
    };
};

const updateFile = async (path, newContent, fileSha) => {
    const updateFileResponse = await fetch(
        `https://api.github.com/repos/carolgilabert/carols-blog/contents/${path}`,
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
                content: Buffer.from(newContent).toString('base64'),
                sha: fileSha
            })
        }
    );

    return updateFileResponse.json();
};

module.exports = {
    getFileContents,
    updateFile
};
