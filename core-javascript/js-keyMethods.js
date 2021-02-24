// ====================== Strings key methods =================

let str = 'good hello';

str.slice(1, 4) // => 'ood'
// stop at the 4th index
/* compare substrings and slice */


str.split("") // turn into array




str.indexOf('h') // => 5

str.lastIndexOf('o') // => 9




str.includes('od') // => true


str.replace('oo', 'ii') // replace  subsequence



str.charAt(0) // find the specific index

let testStr = 'reading';

testStr = testStr.replace('read', '<b>read<b>');


console.log(testStr, 'HERE----');




//=========================== array ==============================

let arr = [1, 'two', 'bold', [4]];

arr.map((elm) => console.log(elm)); // iterate and return new // use map instead of forEach


arr.filter(elm =>  elm === 1); // filter based on condition


arr.reduce((a, b) =>  a + b);


arr.flat() // flat with just one level

arr.flatMap( elm =>  elm ) // iterate and flat the return array




//======================== objects ========================

const obj = { 
  first: 'good',
  prop: 'working'
}


obj.hasOwnProperty('first') // => true


// iterating for in  or for of
for( let k of Object.keys(obj)) { }


obj.toString() // turn properties into array of strings



// ==================== Classes =============================


class Test {
  constructor(prop1, prop2) {
  
    this.prop1 = 'good'
    this.prop2 = 'working'
  }
  
  load(param) {
    console.log('working')
  }
}

const newClass = new Test();

newClass.load();

