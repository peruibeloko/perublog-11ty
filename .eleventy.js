/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior('copy');
  eleventyConfig.addPassthroughCopy('src/styles');

  eleventyConfig.addFilter('toISODateString', date => date.toISOString());
  eleventyConfig.addFilter('toLocaleDateString', date =>
    Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(date)
  );

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      output: 'docs'
    }
  };
};
