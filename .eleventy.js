const navigationPlugin = require("@11ty/eleventy-navigation");
const imageShortcode = require("./src/utils/image-shortcode");
const dateFilter = require("./src/utils/date-filter");
const isoDateFilter = require("./src/utils/iso-date-filter");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(navigationPlugin);

    // Shortcodes
    eleventyConfig.addNunjucksAsyncShortcode("Image", imageShortcode);

    // Filters
    eleventyConfig.addFilter("date", dateFilter);
    eleventyConfig.addFilter("isoDate", isoDateFilter);

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
