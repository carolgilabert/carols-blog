const navigationPlugin = require("@11ty/eleventy-navigation");
const imageShortcode = require("./src/utils/image-shortcode");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(navigationPlugin);

    // Images
    eleventyConfig.addNunjucksAsyncShortcode("Image", imageShortcode);

    // Collections
    eleventyConfig.addCollection("latest", (collection) => {
        return [...collection.getFilteredByGlob("./src/posts/*.md")]
            .reverse()
            .slice(0, 3);
    });

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
