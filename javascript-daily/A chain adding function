We want to create a function that will add numbers together when called in succession.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15

function add(num1) {
	function helper(num1){
		return function(num2){
			if(num2 === undefined){
				num2 = 0;
			} else {
				return helper(num1 + num2)
			}
			return num1+ num2			
		}		
	}
	return helper(num1);
}

let add = (a) => { // Curried solution
  let fn = (x) => add(a+x);
  fn.valueOf = () => a;
  return fn;
};
