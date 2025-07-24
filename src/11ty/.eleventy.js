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

  // Add date filter for formatting dates
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (format === "MMM dd, yyyy") {
      return d.toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
      });
    }
    return d.toLocaleDateString();
  });

  // Add striptags filter to remove HTML tags
  eleventyConfig.addFilter("striptags", function(content) {
    return content.replace(/<[^>]*>/g, '');
  });

  // Add truncate filter
  eleventyConfig.addFilter("truncate", function(str, length, useWordBoundary, suffix) {
    if (!str || str.length <= length) return str;
    
    const subString = str.substr(0, length);
    const result = useWordBoundary 
      ? subString.substr(0, subString.lastIndexOf(' ')) 
      : subString;
    
    return result + (suffix || '...');
  });

  // Add slice filter for arrays
  eleventyConfig.addFilter("slice", function(array, start, end) {
    if (!Array.isArray(array)) return [];
    return array.slice(start, end);
  });

  // News collection with debugging
  eleventyConfig.addCollection("news", function (collectionApi) {
    const newsItems = collectionApi.getFilteredByTag("news");
    console.log("Found news items:", newsItems.length);
    newsItems.forEach(item => {
      console.log("- News item:", item.inputPath, "Date:", item.date, "Tags:", item.data.tags);
    });
    return newsItems.reverse();
  });

  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};