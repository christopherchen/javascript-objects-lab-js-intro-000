function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
 return newObj; 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object, object);
  newObj[key] = value;
  return newObj;
}

function deleteFromObjectByKey(object, key) {
  
}