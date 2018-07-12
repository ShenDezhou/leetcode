a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
target = 3.5
function search(nums, start, end, target) {
    let index = start + Math.floor((end - start) / 2);
    console.log(index)
    if (nums[index] <= target) {
        if (index + 1 <= end) {
            let x = search(nums, index + 1, end, target);
            if (x != -1)
                return x
        }
    }
    else {
        if (start <= index - 1) {
            let x = search(nums, start, index - 1, target);
            if (x != -1)
                return x
        }
    }
    return index + 1
}

let result = search(a, 0, a.length - 1, target);
// return how many items larger than the target number.
console.log(a.length - result);
