// Write MongoDB queries to:


// Find all books in a specific genre
db.books.find({ genre: "Self-Help" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author
db.books.find({ author: "Robert Kiyosaki" })

// Update the price of a specific book
db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 15.99 } })

// Delete a book by its title
db.books.deleteOne({ title: "The Hobbit" })

// Task 3: Advanced Queries

// Find all books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } }, { title: 1, author: 1, price: 1 })

// Use projection to return only the title, author, and price fields in your queries
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort books by price in ascending order
db.books.find({}).sort({ price: 1 })

// Sort books by price in descending order
db.books.find({}).sort({ price: -1 })

// Implement pagination (5 books per page)
db.books.find({}).limit(5).skip(0)

// Implement pagination (5 books per page)
db.books.find({}).limit(5).skip(5)


// Task 4: Aggregation Pipeline

// Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Find the author with the most books in the collection    
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Implement a pipeline that groups books by publication decade and counts them


// Task 5: Indexing


// Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 })

// Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 })

// Use the `explain()` method to demonstrate the performance improvement with your indexes
db.books.explain("executionStats").find({ title: "The Hobbit" })