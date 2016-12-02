var fruit = 'apple';

function makePie() {
    var fruit = 'strawberry';  // Is a new variable local to makePie. Hides outer variable
    // if there were no 'var' it would have changed the variable globoly
}

makePie();
(fruit == 'apple');            // true
//fruit is still equal to apple


function outer () {

    var num1 = 5;

    function inner() {

        var num2 = 10;
        (num1 + num2);    // 15, num1 is in parent scope and accessible

    }

    function inner2() {

        var num3 = 20;
        (num2 + num3);    // NaN - num2 is NOT in parent scope

    }

    (num1 + num2);        // NaN - num2 is local to inner and not accessible
}

(num1 + num2);            // NaN - num1 and num2 are not accessible

//--------------------------------------------------------------
//
function capitalizeName(name) {

    function capitalizeFirstLetter(name) {
        name = 'Bob';
        var firstLetter = name[0].toUpperCase();  // Name is visible because
                                                  // parameter is in parent scope
        return firstLetter;
    }

    name = capitalizeFirstLetter(name) + name.slice(1);

    return name;
}

var name1 = capitalizeName('Jared');   // name1 is 'Bared'


//---------------------------------------
//function shoot(damage, status) {
  var mod = 1;
  function basic(damage) {
    return mod * damage
  }
  function boost(damage) {
    mod = 1.5;
    return mod * damage;
  }

  function superBoost(damage) {
    mod = 2;
    return mod * damage;
  }

  if( status === 'boost') {
    return boost(damage);
  }
  else if( status === 'superBoost') {
    return superBoost(damage);
  }
  else {
    return basic(damage);
  }
}

shoot(8, 'boost');

//---------------------------------------

function createGumballMachine(color){
    function gumballMachine(){
        console.log("here is a " + color + " gumball");
    }

  return gumballMachine;
}

var redMachine = createGumballMachine("Red");
redMachine('grey'); // will still be red even when passed a different color
redMachine();
redMachine();
redMachine();

var blueMachine = createGumballMachine("blue");
blueMachine();
blueMachine();
blueMachine();
