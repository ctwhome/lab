var BookView = function(book) {
  var bookDiv = $('<div class="book">');
  var bookLink = $('<a>');
  bookLink.attr('href', book.url);
  var bookCover = $('<img>');
  bookCover.attr('src', book.thumbnail);
  bookLink.append(bookCover);
  bookDiv.append(bookLink);

  // Attach event listeners
  return bookDiv;
};

var BookShelfView = function(books) {
  var shelfDiv = $('<div>');
  for (var i = 0; i < books.items.length; i++) {
    var book = books.items[i];
    shelfDiv.append(new BookView(book));
  }
  return shelfDiv;
};