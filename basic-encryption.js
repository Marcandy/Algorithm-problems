// The most basic encryption method is to map a char to another char by a certain math rule. Because every char has an ASCII value, we can manipulate this value with a simple math expression. For example 'a' + 1 would give us 'b', because 'a' value is 97 and 'b' value is 98.
//
// You will need to write a method which does exactly that -
//
// get a string as text and an int as the rule of manipulation, and should return encrypted text. for example:
//
// encrypt("a",1) = "b"
//
// Full ascii table is used on our question (256 chars) - so 0-255 are the valid values.

function encrypt(text, rule) {
  return text.split("").map(function(elm) {//split the string
    return String.fromCharCode((elm.charCodeAt(0) + rule) % 256)// do conversion
  }).join("");
};


// toher weay
function encrypt(text, rule) {
    var char = [];
    for (var i in text) {
        var t = text.charCodeAt(i) + rule
        if (t > 255) {
            t = t % 256;
        }
        char.push(String.fromCharCode(t));
    }
    return char.join("");
}
