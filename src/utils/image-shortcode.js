const Image = require("@11ty/eleventy-img");

module.exports = async (src, alt, sizes) => {
    let metadata = await Image(src, {
        widths: [600, 900],
        formats: ["avif", "webp", "jpeg"],
        urlPath: "/images/",
        outputDir: "./dist/images/",
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline",
    });
};
