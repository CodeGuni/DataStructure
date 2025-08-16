function removeElement(nums: number[], val: number): number {
  // n to track effective lenght of the array
  let n = nums.length;

  let i = 0;
  while (i < n) {
    
    if (nums[i] === val) {
      
      nums[i] = nums[n - 1];

      n--;// shrink because we owerwrite val with last element

    } else {
      // If nums[i] is not val
      i++;
    }
  }

  return n;
}
