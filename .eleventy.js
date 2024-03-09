const fs = require("fs");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyPluginOgImage = require('eleventy-plugin-og-image');
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const imageShortcode = require("./src/utils/image-shortcode");
const { isoDateFilter, readableDateFilter, readableDateAndTimeFilter } = require("./src/utils/date-filters");
const { getWebmentionsForUrl, size, webmentionsByType } = require("./src/utils/webmention-filters")

module.exports = function (eleventyConfig) {
  // Extra files to watch
  eleventyConfig.addWatchTarget("./src/styles/");

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(eleventyPluginOgImage, {
    generateHTML: (outputUrl) => outputUrl,
    satoriOptions: {
      fonts: [
        {
          name: 'Briston',
          data: fs.readFileSync('./src/fonts/briston.woff'),
          weight: 700,
          style: 'normal'
        }
      ]
    },
    outputDir: './dist/og-images/',
    htmlPath: '/og-images/',
  });
  eleventyConfig.addPlugin(pluginWebc, {
    components: './src/components',
  });

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("Image", imageShortcode);

  // Filters
  eleventyConfig.addFilter("readableDate", readableDateFilter);
  eleventyConfig.addFilter("isoDate", isoDateFilter);
  eleventyConfig.addFilter("readableDateAndTime", readableDateAndTimeFilter);
  eleventyConfig.addFilter("size", size);
  eleventyConfig.addFilter("webmentionsByType", webmentionsByType);
  eleventyConfig.addFilter("getWebmentionsForUrl", getWebmentionsForUrl);

  // Collections
  eleventyConfig.addCollection("latest", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")]
      .reverse()
      .slice(0, 3);
  });

  // Passthrough copy for static files
  eleventyConfig.addPassthroughCopy({ "./src/static/**/*": "/" });
  eleventyConfig.addPassthroughCopy({ "./src/styles/**/*": "/styles" });
  eleventyConfig.addPassthroughCopy({ "./src/scripts/**/*": "/scripts" });
  eleventyConfig.addPassthroughCopy({ "./src/fonts/**/*": "/fonts" });

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
