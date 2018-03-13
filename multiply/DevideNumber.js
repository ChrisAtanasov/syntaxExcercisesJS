

function multipleDevideNum(nums) {

    let a =Number(nums[0]);
    let b =Number(nums[1]);
    if (b>=a) {
        return a * b;
    }else {
        return a/b;
    }
}
console.log(multipleDevideNum([`3`,`2`]));
