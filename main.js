var cache, main;
cache = [];
main = function(size){
  if (cache[size]) {
    return cache[size];
  } else {
    cache[size] = new Array(size).fill(" ").join("");
    return cache[size];
  }
};
module.exports = main;