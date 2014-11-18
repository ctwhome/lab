/**
 * Model
 */
var BookModel = function (bookJSON){
	this.title 		= bookJSON.title  || "Untitled";
	this.author 	= bookJSON.author || "Uknown author";
	this.asin 		= bookJSON.asin;
	this.thumbnail 	= bookJSON.thumbnail;
	this.rating 	= bookJSON.rating;
	this.review 	= bookJSON.review || "";
	this.url       = 'http://www.amazon.com/gp/product/'
      + this.asin + '?tag=amazonsimilar-20';
}


/**
 * Collection
 */
 var BookCollection = function(booksJSON){
 	this.items = [];
 	for (var i in booksJSON){
 		this.items.push(new BookModel(booksJSON[i]));
 	}
 };

/**
 * Creates an array of Models and provides sorts.
 */
 BookCollection.prototype.sort = function(){
 	this.items.sort (function(bookA, bookB){
 		return (bookA.rating - bookB,rating);
 	});
 };




// New book
var book = new BookModel({
	title: "1984",
    author: "George Orwell",
    asin: "0451524934",
    thumbnail: "http://images.amazon.com/images/P/0451524934.01.ZTZZZZZZ.jpg",
    rating: 4
})

var books = new BookCollection(booksJSON);