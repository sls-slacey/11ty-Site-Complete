const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const purgeCssPlugin = require("eleventy-plugin-purgecss");

module.exports = function(eleventyConfig) {
  // Add the SASS plugin to compile SCSS files
  eleventyConfig.addPlugin(eleventySass);
  
  // Add PurgeCSS plugin for production builds
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addPlugin(purgeCssPlugin, {
      config: "./purgecss.config.js",
      quiet: false
    });
  }

  // Copy images and other static assets to the output directory
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy any JavaScript files if they exist
  eleventyConfig.addPassthroughCopy("src/js");
  
  // Copy Bootstrap Icons font files
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/font/fonts": "fonts"
  });
  
  // Copy favicon and other root assets
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Set the input and output directories
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}; 