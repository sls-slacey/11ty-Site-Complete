const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function(eleventyConfig) {
  // Add the SASS plugin to compile SCSS files
  eleventyConfig.addPlugin(eleventySass);

  // Copy images and other static assets to the output directory
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy any JavaScript files if they exist
  eleventyConfig.addPassthroughCopy("src/js");
  
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