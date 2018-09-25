Array.prototype.all = function (p) {
 return this.filter(p).length == this.length;
};

Array.prototype.none = function (p) {
 return this.filter(p).length == 0;
};

Array.prototype.any = function (p) {
 return this.filter(p).length > 0;
};

function highAndLow(numbers){
 var arr = numbers.split(' ')
 arr.sort(function(a, b){
 return a - b;
 })
 return (arr[arr.length - 1].toString() + ' ' + arr[0].toString())
}

function disemvowel(str) {
 var newString = ''
 var v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
 for(var i = 0; i < str.length; i++){
   if(v.indexOf(str[i]) === -1){
     newString += str[i]
   }
 }
 return newString
}
