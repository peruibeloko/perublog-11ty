/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy('src/styles')
  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      output: 'docs'
    }
  };
};
