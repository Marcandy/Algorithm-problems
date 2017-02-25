
// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:
//
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1


function nextBigger(n){
  var d = n.toString().split('');

  // find the pivot, the point (from right) where i > i-1
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }

  // if we are unable to find the pivot, skip
  if (p == -1) return p;

  // splice the digits in the pivot
  var right = d.splice(p);

  // extract pivot
  var pv = right.splice(0, 1)[0];

  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();

  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;

  return ret;
}

// other way

function nextBigger(n){
  //your code here
  var str = n.toString().split('');
  for(var i=str.length-1; i>=0; i--) {
    if(str[i] > str[i-1]) {
        var temp = str[i];
        var tempind = i;
        for(var j = i+1; j < str.length; j++) {
           if(str[j] < temp && str[i-1] < str[j]) {
               temp = str[j];
               tempind = j;
           }
        }
        [str[i-1],str[tempind]] = [str[tempind],str[i-1]];
        return parseInt(str.slice(0,i).join('')+str.slice(i,str.length).sort().join(''));
      }
    }
    return -1;
}
