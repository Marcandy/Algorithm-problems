//
// Return the inputted numerical year in century format. For example 2014, would return 21st.
//
// The input will always be a 4 digit string. So there is no need for year string validation
//
// Examples:
// Input: 1999 Output: 20th
// Input: 2011 Output: 21st
// Input: 2154 Output: 22nd
// Input: 2259 Output: 23rd
// Input: 1124 Output: 12th
// Input: 2000 Output: 20th

function whatCentury(year)
{
  // code must go here
  let num = year.split('');
  num.splice(2, 0, '.')
  num = num.join('');
  num = Number(num);

   num  = Math.ceil(num);
  console.log(num)

  if(num <= 20) {
    return num + 'th';
  }
  switch (num % 10) {
    case 1:
    num += 'st';
    break;

    case 2:
    num += 'nd';
    break;
    case 3:
    num += 'rd';
    break;
    default:
    num += 'th';
  }
  return num;
}

//-------------other


function whatCentury(year)
{
if(year === '2000') {
  return '20th'
} else{
    var century = String(year).slice(0, 2) * 1  + 1 + ""
  if(century * 1 === 21){
    return century + "st"
  } else if(century * 1 === 22){
    return century + "nd"
  } else if(century * 1 === 23){
    return century + "rd"
  } else {
    return century + "th"
  }
}

}
