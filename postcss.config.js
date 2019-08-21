const tailwindcss = require('tailwindcss');
const purecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.vue',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss,
    ...process.env.NODE_ENV === 'production'
      ? [purecss]
      : [],
  ],
};
