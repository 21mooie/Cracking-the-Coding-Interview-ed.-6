// Stock Data: Imagine you are building some sort of service that will be called by up to 1,000 client applications
// to get simple end-of-day stock price information (open, close, high, low).
// You may assume that you already have the data, and you can store it in any format you wish.
// How would you design the client-facing service that provides the information to client applications?
// You are responsible for the development, rollout, and ongoing monitoring and maintenance of the feed.
// Describe the different methods you considered and why you would recommend your approach.
// Your service can use any technologies you wish, and can distribute the information to the client applications in any mechanism you choose.

// I will implement this as a rest application which stores the data in a noSQL DB.
// This db will be stored in a way where the companies are the collection and each company has its own document.
// On each company document, there will be an object representing the current day with the open, close, high, and low stock price. I will implement a few calls for the REST client.
// Get - company & date - Gives the stock info for a company given the company name and date
// Get - all companies over/under threshold for time period - Gives all the companies who have a price over/under threshold for the specified number of days
// Get - return all dates company were over/under threshold - Given a company and a threshold, this will return the days the company was over/under said threshold.