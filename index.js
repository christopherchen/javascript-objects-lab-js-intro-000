function updateObjectWithKeyAndValue(object, k, v) {
  var newObj = Object.assign({}, object);
  newObj.k = v;
 return newObj; 
}