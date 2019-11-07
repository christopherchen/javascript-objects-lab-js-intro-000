function updateObjectWithKeyAndValue(object, k, v) {
  var newObj = Object.assign({}, object, {k: v});
 return newObj; 
}