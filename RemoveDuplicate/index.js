/* var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(1);
mySet.add(5);
mySet.add(1);
mySet.add(6);
mySet.add(3);
mySet.add(7); 
console.log(mySet); */ //ignores the duplicate value

var inputArray = [1,2,1,3,4,2,5,6,1,7]
  var uniqueValue = Array.from(new Set(inputArray))
  console.log(uniqueValue)