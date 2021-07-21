// Online Book Reader: Design the data structures for an online book reader system

class DisplayBook {
    constructor(title, author, numPages){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
    }
}

class Book extends DisplayBook{
    constructor(title, author, numPages){
        super(title, author, numPages);
        this.page = 0;
        this.isFinished = false;
    }

    getPage(){
        return this.page;
    }

    turnPage(){
        if(!this.isFinished()){
            this.page++;
        } else {
            this.isFinished = true;
            return false;
        }
    }

    isFinished(){
        this.isFinished = this.page === this.numPages;
        return this.isFinished;
    }

    
}

class Library {
    constructor(){
        
        this.contents = [
            new DisplayBook('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 100),
            new DisplayBook('The Catcher In The Rye', 'J.D. Salinger', 200),
            new DisplayBook('Naruto', 'Masashi Kishimoto', 300)
        ];
    }

    showContents(){
        return this.contents;
    }
}

class User {
    constructor(username, pwd){
        //logic to check if username exists or pwd is a good pwd
        this.username = username;
        this.pwd = pwd;
        this.currentlyReading = [];
        this.wishlist = [];
        this.finished = [];
    }

    login(){}

    logout(){}

    pickBook(library){
        console.log(library.showContents());
        
        //if user makes one selection add to currently reading
        let wishOrRead;
        while(wishOrRead !== 'w' && wishOrRead !== 'r'){
            wishOrRead = prompt('Do you want to wishlish or read a book? Choose w for wishlish and r for read.');
        }
        let list;
        if(wishOrRead === 'w'){
           list =  this.wishlist;
        } else {
            list = this.currentlyReading
        }
        const title = prompt('Which book do you want to read?');
        const displayBook = library.showContents().find(book => book.title === title);
        const book = new Book(displayBook.title, displayBook.author, displayBook.numPages);
        if(wishOrRead === 'w'){
            this.addBookToReadingList(book);
        } else {
            this.addBookToWishlish(book);
        }
    }

    addBookToReadingList(book){
        if(this.currentlyReading.find(currBooks => currBooks.title === book.title)){
            return  'You are already reading this book.';
        }
        this.currentlyReading.push(book);
        return true;
    }

    addBookToWishlish(book){
        if(this.currentlyReading.find(currBooks => currBooks.title === book.title)){
            return 'You have already wishlished this book.';
        }
        this.wishlist.push(book);
        return true;
    }

    readBook(book, numPagesToRead){
        while(book.turnPage() && numPagesToRead>0){
            numPagesToRead--;
        }
        if(book.isFinished()){
            this.finished.push(book);
            let idx = this.currentlyReading.findIndex(search => search.title === book.title && search.author === book.author);
            this.currentlyReading.splice(idx, 1);
        }
        
    }
}

exports.User = User;
exports.Library = Library;




