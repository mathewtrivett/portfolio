function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};

function kebabCase(str) {
  return str.toLowerCase().split(/[\s-_]/).map((word) => word).join('-')
};

module.exports = {
  kebabCase,
  titleCase
}