function twoSum(nums: number[], target: number): number[] {
    
    const seen = new Map<number,number>();
//single pass
    for(let i=0;i<nums.length;i++)
    {
        const x=nums[i]; //current value
        const need= target -x; // complement that will complete the sum

        //check if we have seen the complement
        if(seen.has(need))
        {
            const j = seen.get(need)!
            return[j,i]; // return pair of indices 
        }
        seen.set(x,i);
    }
    throw new Error("No solution exists for the given input.");
};