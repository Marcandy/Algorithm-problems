// Create a complement to the Object.freeze function, Object.deepFreeze
//
// This method should apply the Object.freeze function to an object and, recursively, all of its properties that are objects.
//
// The freeze operation should prevent objects from being modified.

Object.deepFreeze = function (object) {

if( typeof(object) === 'object') { // checking to see if parameter is actually an object
  Object.freeze(object); //freeze it
}

  for(var prop in object) {
        if( typeof(object[prop] === 'object' && object[prop] !== null) ) { // loop through
           Object.deepFreeze(object[prop]); // and recusively freeze it
           }
      }
      return object;
}


//  other way  -------------

Object.deepFreeze = function (object) {

 // checking to see if parameter is actually an object
   //freeze it
   if(typeof(object) !== 'object') {
     return;
   }


  for(var prop in object) {
        if( typeof(object[prop] === 'object') ) { // loop through
            Object.deepFreeze(object[prop]); // and recusively freeze it
           }
      }
      return Object.freeze(object);
}
