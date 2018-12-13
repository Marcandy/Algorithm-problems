var rob = function(nums) {
    
    var vMissed = 0;
    var vChosen = 0;
    var temp;
    
    for(var i = 0; i < nums.length; i++){
        temp = Math.max(vMissed, vChosen);
            
        vChosen = vMissed + nums[i];
        vMissed = temp;
    }

    return Math.max(vMissed, vChosen);
};

return nums.reduce(function(p, n) { 
    return [p[1], Math.max(p[0] + n, p[1])]; 
}, [0,0])[1];


const rob = function(nums) {
    if (nums.length === 0) { return 0; }
    if (nums.length === 1) { return nums[0]; }
    const totals = [nums[0], Math.max(nums[0], nums[1])];  
    for (let i = 2; i < nums.length; i++) {
        totals.push(Math.max(nums[i] + totals[i - 2], totals[i - 1]));
    }
    return totals[totals.length - 1];
};