// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:

// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

// " Hello World " => "#HelloWorld"

function hashtag(str) {
	
	if(str === '') {
		return false;
	}
	strResult = str.split(' ');
	for(var i = 0; i < strResult.length; i++) {
		strResult[i][0].toUppercase();
	}
	strResult.join('').shift('#');
	
	if(strResult.length > 139 ) {
		return false;
	}
	return strResult;
}

function generateHashtag(str) {
  if(str.length === 0) {
    return false;
    }
    
    const result = '#' + str.split(' ').map(function(word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join('');
    
    return result.length < 140 ? result : false;
}
