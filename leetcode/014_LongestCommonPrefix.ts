function longestCommonPrefix(strs: string[]): string {
     // if the input array is empty, no prefix exists.
  if (strs.length === 0) return "";

  let prefix = strs[0];
  // Compare prefix with every other string in the array.
  for (let i = 1; i < strs.length; i++) {
    const current = strs[i];  // current word we’re checking
    
    // Keep trimming prefix from the end until it matches or becomes empty.
    while (!current.startsWith(prefix)) {
      // Remove the last character from prefix.
      prefix = prefix.slice(0, prefix.length - 1);

      // If prefix becomes empty, no common prefix exists.
      if (prefix === "") return "";
    }
  }

  return prefix;
};