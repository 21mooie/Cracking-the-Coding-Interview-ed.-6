// Social Network: How would you design the data structures for a very large social network like Facebook or Linkedln?
// Describe how you would design an algorithm to show the shortest path between two people
// (e.g., Me -> Bob -> Susan -> Jason -> You).


// I would implement this as a NoSql database with a user collection and posts collection.
// The users collections will have documents based on the areas the users are from.
// If the users are in east coast they will be added to east coast document,
// european users will be added to european document, etc.
// The fields stored would be username, hashed pwd, profile, friends, id, posts.
// The posts collection will store all the documents containing posts.
// The information stored would be user who posted, content, metadata, vitality, comments.

// The algorithm I would design to get find the shortest path would be to use a bfs of the friends
// between the two users.
// A doubly sided bfs would help in this scenario because you would meet in the middle
// of the graph instead of waiting to get all the way from one vertex to the destination vertex.
// This will be helpful because in a highly connected graph this would take a lot longer time.
