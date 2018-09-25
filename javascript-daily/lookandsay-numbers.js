// There exists a sequence of numbers that follows the pattern
//
//           1
//          11
//          21
//         1211
//        111221
//        312211
//       13112221
//      1113213211
//           .
//           .
//           .
// Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".
//
// Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

function lookAndSay(data,len){
  let resultArr = [], workIt = data;

  //This for loop controls how many times we will
  //iterate this input.  Each time we iterate, we will write an element
  //into the result array.  (this element will be an array)

  for(let i=1; i<=len; i++){
    let thisResult = [], counter=0, theChar = '', workStr = '';

    //Work on the input string from data.
    for(let j=0; j<workIt.length; j++){
      if(j === 0){
        //set the counter & track the element
        theChar = workIt[j];
        counter=1;
      }else{
        // See if the element changes.
        if (workIt[j] !== theChar){
          //add this calculation & keep processing
          workStr += counter.toString() + theChar;
          counter =1;
          theChar = workIt[j];
        }else counter+=1;
      }
    }
    //This above block ends the current string analysis

    workStr += counter.toString() + theChar;
    thisResult.push(workStr);
    resultArr.push(thisResult);
    workIt = workStr;

  }
  //This above block ends that last iteration.
  return resultArr;
}

// ------------------- other way

function lookAndSay(data,len){
  var ansStr = [];
  var its = 0;


  function sayNums(string){
   var newStr = '';
   var count = 1;

   if(its == len) return ansStr;

   for(i = 0; i < string.length; i++){
      if(string[i] == string[i+1]){
        count++;
     }else{
       newStr+=count+string[i];
       count = 1;
       }
   }
   its++;
   ansStr.push(newStr);
   return sayNums(newStr);
  }

  return sayNums(data);



}
