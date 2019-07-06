class Book {
    constructor(title, author, maxPages, description) {
        this.title = title;
        this.author = author;
        this.pages = maxPages;
        this.description = description;
        this.currentPage = 1;
        this.read = false;
    };
    readBook(pageNum) {
        if (pageNum > this.pages) {
            alert("Please enter a valid page");
        } else if (pageNum == this.pages) {
            this.read = true
            alert("read");
        } else {
            this.currentPage = pageNum
        }
    };
};
export { Book };
