function power(a, b) {
    let result = 1;

    function multiply(counter) {
        if(counter === b) {
            return;                                                                                                                         
        }

        sounter = counter * a;
        multiply(counter + 1);
    }

    multiply(0);

    return result;
}