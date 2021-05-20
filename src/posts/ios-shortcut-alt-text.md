---
title: "I made my first iOS Shortcut 🎉"
subtitle: "First one that's more than one step, that is."
author: Carolina Gilabert
date: 2021-05-18
readingTime: 3 min
---

As I'm sure everyone is aware, I'm on Twitter a lot 👀

And one of the things that bugs me on the daily is that you can't tell whether an image has alt text if you're in the app. So I built myself a tiny tool to help 🤓

It was an afternoon's project, so it's a little rough, but here's a quick run down of what I did:

## Part 1: Netlify function

To get the alt text out of Twitter, I opted for a Netlify function, because:

1. I'm lazy
2. I do enough on AWS in my day job 😅
3. They have [great docs](https://functions.netlify.com/) and [local development experience](https://docs.netlify.com/cli/get-started/) 🙌🏼

The function receives a tweet ID as query string parameter, makes a call to the Twitter API to get the tweet's details, and then it loops the image metadata for the tweet, returning an array of strings with the alt text of all the images.

```js
const fetch = require('node-fetch');
const { BEARER_TOKEN } = process.env;

exports.handler = async (event, context) => {
    try{
        const tweetId = event.queryStringParameters.id;
        const rawResponse = await fetch(`https://api.twitter.com/1.1/statuses/lookup.json?id=${tweetId}&include_ext_alt_text=true&trim_user=true&tweet_mode=extended`, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`
            }
        });
        const tweetData = await rawResponse.json();
        const images = tweetData[0] && tweetData[0].extended_entities && tweetData[0].extended_entities.media;
        
        if (images) {
            const alts = [];
            images.forEach(image => {
                if ('ext_alt_text' in image) {
                    alts.push(image.ext_alt_text);
                }
            });

            return {
                statusCode: 200,
                body: JSON.stringify(alts)
            };
        }
        
        return {
            statusCode: 204
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: `Whoops! Something went wrong -> ${err}`
        }
    }
};
```
There were a few stumbles along the way, that I ended up working around, but they're worth mentioning as it might save someone somewhere some pain 😌

1. I found that when running my function locally using the `functions:serve` and `functions:invoke` commands, it didn't pull in my environment variables correctly. However, when running `netlify dev` it was all good ✌🏼
2. Unfortunately, the Twitter API v2 does not return the alt text in the tweet metadata, so I had to use the v1 API, in particular, this endpoint: [GET statuses/lookup](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-lookup).
3. If you set the `include_ext_alt_text` parameter but still don't get the alt text back, make sure you also set `tweet_mode` to `extended` as helpfully documented [in this obscure comment thread](https://twittercommunity.com/t/retrieve-alt-text-with-api-v2/147267/12) 🙃
4. When I first deployed the function, I got an error because I'd used the optional chaining operator, and even though I set an .nvmrc specifying node 14 and confirmed in the deployment log that node 14 was being used, Netlify still didn't like it 🤷🏼‍♀️

Despite those, I got the function working, so hooray ✨

## Part 2: iOS Shorcut

This part was a little different, but pretty straightforward. The docs weren't particularly helpful to me in all honesty, but I did find [this reddit thread full of great links](https://www.reddit.com/r/shortcuts/comments/gzjgbr/list_of_helpful_links_for_shortcuts_information/) 🎉

This is what the flow ended up looking like:

{% Image "src/images/posts/ios-shortcut-alt-text/shortcut-1.jpg", "Screenshot of the shortcut editor screen, in this you can see the first three blocks: the first one is a Text Match block, and it's trying to match a RegEx onto the shortcut input to get out the tweet id; the second one is a Get Group From Match block, that lets you pick the content of a capture group from the step before; the third one is a simple text block, where I'm setting the URL to my Netlify function.", "(max-width: 600px) 90vw, 40vw" %}

{% Image "src/images/posts/ios-shortcut-alt-text/shortcut-2.jpg", "Another screenshot of the rest of the shortcut editor screen, in this one you can see the last three blocks: the fourth one is a Combine Text block, where I'm combining the URL from the previous step with the ID we got out of the RegEx back in step two; the fifth one is a Get Contents block, which makes a get request to our combined URL; and the final block is a Show Result block, which displays the response from our get request.", "(max-width: 600px) 90vw, 40vw" %}

Here's what the blocks are doing:

1. Match text: does regex matching on the input (regex flavour is [ICU](http://userguide.icu-project.org/strings/regexp)).
2. Get group in matches: allows you to pick the output of a regex capture group, in our case, the tweet ID.
3. Text: sets up the URL for our Netlify function.
4. Combine text: allows us to concatenate the URL and the tweet ID.
5. Get contents: fires a GET request to the combined URL.
6. Show result: shows the body of the response in a modal.

Top tip: while you're adjusting the blocks and variables in the shortcut, scattering a few `Show result` blocks around might help to see what you're working with.

After I got all the blocks in order, I enabled my shortcut on the share sheet and took it for a spin.

## Part 3: Profit

And it (miraculously) works! 🎉

{% Image "src/images/posts/ios-shortcut-alt-text/execution-1.jpg", "Screenshot of my share sheet, the last option is Get Alt Text.", "(max-width: 600px) 90vw, 40vw" %}
{% Image "src/images/posts/ios-shortcut-alt-text/execution-2.jpg", "Screenshot of the the shortcut running, essentially a banner notification with the name of the shortcut: Get Alt Text and a progress spinner halfway through.", "(max-width: 600px) 90vw, 40vw" %}
{% Image "src/images/posts/ios-shortcut-alt-text/execution-3.jpg", "Screenshot of the result, the banner notification now shows the alt text retrieved from twitter.", "(max-width: 600px) 90vw, 40vw" %}
{% Image "src/images/posts/ios-shortcut-alt-text/execution-4.jpg", "Screenshot of the completed shortcut: the banner notification now has a tick on it.", "(max-width: 600px) 90vw, 40vw" %}

There's tonnes of improvements that could be made, but I think I'll probably leave it there for now and go work on my other 35472 small projects 😅

Bye! 👋🏼