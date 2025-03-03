array = [3,2,2,3];

var removeElement = function(nums, val) {
    for(var i=0; i<nums.length; i++){
    if( nums[i] == val){
        nums.splice(i,1)
        i--; // decrement i to compensate for the removed element
    }
}
return nums;
};
console.log(removeElement([0,1,2,2,3,0,4,2],2))