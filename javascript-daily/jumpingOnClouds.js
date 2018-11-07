function jumpingOnClouds(c) {
    let steps = 0;
    let index = 0;

    while (index < c.length - 1) {
        if ((index + 2 < c.length) && c[index + 2] != 1) {
            index = index + 2;
        } else {
            index = index + 1;
        }
        steps += 1;
    }
    return steps
}