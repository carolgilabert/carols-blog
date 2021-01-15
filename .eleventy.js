const navigationPlugin = require("@11ty/eleventy-navigation");
const pageAssetsPlugin = require("eleventy-plugin-page-assets");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(navigationPlugin);
    eleventyConfig.addPlugin(pageAssetsPlugin, {
        mode: "parse",
        postsMatching: "src/posts/*/*.md",
    });

    // Copy
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
            includes: "partials",
            layouts: "layouts",
            data: "data",
        },
    };
};
