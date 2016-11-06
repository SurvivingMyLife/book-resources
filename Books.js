$(document).ready(function () {

    var Book = function () {
        this.model = ko.observable();
        this.price = ko.observable();
    };
    
    
    var bookresources = (function () {

        var getBooks = function () {
            var books = [];
            books.push(new Book()
                .model(onlyOne).price(600)
                );
            books.push(new Book()
                .model(onlyTwo).price(850)
                );
            return books;
        };

        var bookresources = {
            getBooks: getBooks
        };
        return bookresources;
    })();

    
    var vm = (function () {
        var data = bookresources.getBooksI();
        var books = ko.observableArray(data);

        var vm = {
            books: books
        };

        return vm;
    })();

    ko.applyBindings(vm);
    });
