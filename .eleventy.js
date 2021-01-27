const navigationPlugin = require("@11ty/eleventy-navigation");
const imageShortcode = require("./src/utils/image-shortcode");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(navigationPlugin);

    // Images
    eleventyConfig.addNunjucksAsyncShortcode("Image", imageShortcode);

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
