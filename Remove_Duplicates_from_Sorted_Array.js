var removeDuplicates = function(nums) {
    var duplicates = 0
    nums.forEach(element => {
        let count = 0;
        for (var i = 0; i < nums.length; i++) {
            if(element == nums[i]){
                count++;
            }
        }
        if(count > 1){
            duplicates++;
            nums.splice(nums.indexOf(element), count - 1);
        }
    });
    return nums.slice(0, nums.length).join(",");
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
