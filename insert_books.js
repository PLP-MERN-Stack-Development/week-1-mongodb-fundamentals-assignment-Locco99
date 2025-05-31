// Task 2: Basic CRUD Operations
// insert_use plp_bookstore
use plp_bookstore
db.createCollection("books")


// Sample book data for MongoDB bookstore
db.books.insertMany([
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        published_year: 1937,
        price: 14.99,
        in_stock: true,
        pages: 310,
        publisher: "Allen & Unwin"
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Self-Help",
        published_year: 1997,
        price: 19.99,
        in_stock: true,
        pages: 336,
        publisher: "Warner Books"
    },
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "Self-Help",
        published_year: 2020,
        price: 24.99,
        in_stock: true,
        pages: 256,
        publisher: "Harriman House"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        published_year: 2018,
        price: 21.99,
        in_stock: true,
        pages: 320,
        publisher: "Avery"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        published_year: 1988,
        price: 16.99,
        in_stock: true,
        pages: 208,
        publisher: "HarperOne"
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Self-Help",
        published_year: 1937,
        price: 12.99,
        in_stock: false,
        pages: 238,
        publisher: "Ralston Society"
    },
    {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        genre: "Self-Help",
        published_year: 1989,
        price: 18.99,
        in_stock: true,
        pages: 432,
        publisher: "Free Press"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 9.99,
        in_stock: true,
        pages: 180,
        publisher: "Scribner"
    },
    {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "Self-Help",
        published_year: 1997,
        price: 15.99,
        in_stock: true,
        pages: 236,
        publisher: "New World Library"
    },
    {
        title: "The Four Agreements",
        author: "Don Miguel Ruiz",
        genre: "Self-Help",
        published_year: 1997,
        price: 13.99,
        in_stock: true,
        pages: 160,
        publisher: "Amber-Allen Publishing"
    }
]);
