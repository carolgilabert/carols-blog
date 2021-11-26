module.exports = {
    getWebmentionsForUrl: (webmentions, url) => {
        return webmentions.children.filter(entry => entry['wm-target'] === url)
    },
    size: (mentions) => {
        return !mentions ? 0 : mentions.length
    },
    webmentionsByType: (mentions, mentionType) => {
        return mentions.filter(entry => !!entry[mentionType])
    }
}