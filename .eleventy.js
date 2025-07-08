import markdownIt from "markdown-it";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
