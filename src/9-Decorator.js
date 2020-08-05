const Book = function(title, author, price){
    this._title = title;
    this._author = author;
    this.price = price;

    this.getDetails = function(){
        return this._title + " by " + this._author;
    }
      
}
  
// DECORATOR 1
function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = function() {
        return "Unwrapped " + book.getDetails();
    };

    return book;
}
  
// DECORATOR 1
function hardbindBook(book) {
    book.isHardbound = true;
    book.price += 5;
    return book;
}

const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10));
console.log(alchemist.isGiftWrapped); // true
console.log(alchemist.unwrap()); // 'Unwrapped The Alchemist by Paulo Coelho'

const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15));
console.log(inferno.isHardbound); // true
console.log(inferno.price); // 20