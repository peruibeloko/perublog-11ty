module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('splendor.css');
  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      output: 'docs'
    }
  };
};
