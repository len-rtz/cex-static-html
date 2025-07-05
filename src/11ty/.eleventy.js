module.exports = function(eleventyConfig) {
  // Add JSON data support
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));
  
  // Filters
  eleventyConfig.addFilter("findById", function(array, id) {
    if (!Array.isArray(array)) return null;
    return array.find(item => item.id === id);
  });
  
  eleventyConfig.addFilter("where", function(array, key, value) {
    if (!Array.isArray(array)) return [];
    return array.filter(item => item[key] === value);
  });
  
  eleventyConfig.addFilter("includes", function(array, value) {
    if (!Array.isArray(array)) return false;
    return array.includes(value);
  });
  
  return {
    dir: {
      input: "src",
      includes: "_includes", 
      data: "_data",
      output: "_site"
    },
    // Set template formats and engines
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};