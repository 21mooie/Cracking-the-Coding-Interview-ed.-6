// Web Crawler: If you were designing a web crawler, how would you avoid getting into infinite loops?


// To avoid infinite loops, you need a way of tracking which websites have been visited.
// This can be done by coming up with a measure of what it means to “visit” a website
// using a combination of the url and its contents such as urls from that page
// and also key content on the page like headings, etc. 
// Save this information into a map, db of some kind then continue with search.
// When you come across a page that is high enough in similarity to another than you skip it in your search.
// This will continue until you end the program or if the search is being done on a small enough sample size to have a finite end(intranet).