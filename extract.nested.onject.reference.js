// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
//
// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };



// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  let obj = this // saving the context obj
  let arr = string.split('.'); //turn the string into an array of prop
  for(var i = 0; i < arr.length; i++) {
    if(obj.hasOwnProperty([arr[i]])) {// if it has it, set obj to that prop
      obj = obj[arr[i]]; // continue to so till last nested prop
    }
    else {
      return undefined;
    }
  }
  return obj;
}


obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined


//other weay

Object.prototype.hash = function(string) {
  var obj = this;
  string.split(".").forEach(function(el) {
    try {
      obj = obj[el];
    }
    catch(e) {
      obj = undefined;
    }
  });
  return obj;
}
