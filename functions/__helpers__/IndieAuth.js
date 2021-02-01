const fetch = require('node-fetch');
const querystring = require('querystring');

const validateToken = async token => {
    const params = querystring.stringify({
        grant_type: 'authorization_code',
        me: 'https://carol.gg',
        redirect_uri: 'https://carol.gg',
        client_id: 'https://carol.gg',
        code: token
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

    return response.json();
};

module.exports = {
    validateToken
};
