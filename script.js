function indexOfIgnoreCase(s1, s2) {
  // write your code here
	// If null → return -1
  if (s1 == null || s2 == null) return -1;

  // Convert both to lowercase for case-insensitive comparison
  const lower1 = s1.toLowerCase();
  const lower2 = s2.toLowerCase();

  // Use indexOf on lowercase strings
  return lower1.indexOf(lower2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
