// Duplicate URLs: You have 10 billion URLs. How do you detect the duplicate documents? In this
// case, assume "duplicate" means that the URLs are identical.

// The simple way to do this problem is to use a hashtable that says whether the current url
// has been visited or not. This may not be ideal because the number of urls are so large that
// it can't be loaded into memory simulataneously. A solution here would be to store the urls in
// different text files and then load each one into memory and use a hashtable for each file you
// will eventually process.