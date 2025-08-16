function searchInsert(nums: number[], target: number): number {
  
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // middle index.
    const mid = Math.floor((left + right) / 2);

    // if target is mid
    if (nums[mid] === target) {
      return mid;
    }

    // target smaller then search left half.
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      // target larger then search right half.
      left = mid + 1;
    }
  }

  return left;
}
