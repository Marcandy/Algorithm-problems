// =========================================== 346 - Moving Average from Data Stream ====================

/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
Example:
MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

class MovingAverage {
    constructor(size) {
        this.sum = 0;
        this.queue = [];
        this.size = size; // we can specify the moving average
    }


    next(val) {

        this.queue.push(val)
        this.sum += val
        if (this.queue.length > this.size) {
            const removed = this.queue.shift()
            this.sum -= removed
        }

        return this.sum / this.queue.length;

    }
}

// initial attempt

var MovingAverage = function(size) {
    this.average = []
    this.currIndex = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    // if (this.average.length < 3) {
    //     this.average.push(val)
    // } else {
    //     
    // }
    this.average[this.currIndex] = val;
    if(this.currIndex === 2) {
        this.currIndex = 0;
    } else {
        this.currIndex += 1;
    }
    
    let total = this.average.reduce((a, b) => a + b)
    return total / this.average.length;
};