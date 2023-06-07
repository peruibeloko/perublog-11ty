const slugify = s => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));

const footnote = require('markdown-it-footnote');
const anchor = require('markdown-it-anchor');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior('copy');
  eleventyConfig.addPassthroughCopy('src/styles');

  eleventyConfig.amendLibrary('md', mdLib => mdLib.use(footnote));
  eleventyConfig.amendLibrary('md', mdLib =>
    mdLib.use(anchor, {
      level: 2,
      slugify,
      permalink: anchor.permalink.linkInsideHeader({
        symbol: '🔗',
        class: 'heading-anchor',
        placement: 'after'
      })
    })
  );
  eleventyConfig.addPlugin(syntaxHighlight);

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
