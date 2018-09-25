// (Code length limit: 80 chars)
// Task:
//
// Find out "B"(Bug) in a lot of "A"(Apple).
//
// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
//
// input: string Array apple
//
// output: Location of "B", [x,y]
// Code length calculation
//
// In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.
//
// For example:
//
// If you typed sc=x=>x+1
// after compile, it will be:sc=function(x){return x+1;}

function sc(a){
  for(i =0;a[i];i++)//squezing as much code as possible
    for(j=0;a[i][j];j++)
      if(a[i][j] == "B") return [i, j]
}

//other way

function sc(a) {
  for(var i=0;;i++){
   let r=a[i].indexOf('B');
    if(r>-1)
      return[i, r]
  }
}
