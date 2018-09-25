function range(start, step, stop) {
  let arr = [];
  if(start && step && stop) {
    for(let i = start; i < stop; i += step) {
      arr.push(i);
    }
  }
  else if(start && step) {
    for(let i = start; i <= step; i++) {
      arr.push(i);
    }
  }
  else if(start) {
    for(let i = 1; i <= start; i++) {
      arr.push(i);
    }
  }
  return arr;
}

function range(start, step, stop) {
  let arr = [];
  if(arguments.length == 1) {
  for(let i = 1; i <= start; i++) {
      arr.push(i);
    }
  }
  else if(arguments.length == 2) {
    for(let i = start; i <= step; i++) {
      arr.push(i);
    }
  }
  else {
    for(let i = start; i <= stop; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
