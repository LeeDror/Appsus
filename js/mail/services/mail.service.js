"use strict";
import { Utils } from "./utils.service.js";

var gBooks = (() => {
    var books = Utils.loadFromStorage('books');
    if (!books) {
        books = _createDefaultBooks();
        Utils.storeToStorage('books', books);
    }
    return books;
})();

export const bookService = {
    getBooks,
    getBookById,
    addReview,
    removeReview
};

function getBooks() {
    return Promise.resolve(gBooks);
}

function removeReview(bookId, reviewIdx) {
    let currBook = gBooks.find((book) => book.id === bookId)
    currBook.reviews.splice(reviewIdx, 1);
    Utils.storeToStorage('books', gBooks);
}

function getBookById(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return Promise.resolve(book)
}

function addReview(bookId, review) {
    const book = gBooks.find(book => book.id === bookId);
    if (!book.reviews) book.reviews = [];
    book.reviews.unshift(review);
    Utils.storeToStorage('books', gBooks);
}

{{msgItem.to}}
{{msgItem.cc}}
{{msgItem.text}}
{{msgItem.styles.fontFam}}
{{msgItem.styles.fontSize}}
{{msgItem.styles.txtColor}}
{{msgItem.styles.bgColor}}
{{msgItem.sentAt}}


function _createMails() {

    return [{
            id: "OXeMG8wNskc",
            to: "da da",
            cc: "du du",
            title: "titel 1",
            text: "ma nishma ? lama ? ha ha ha",
            styles: {fontFam:"arial",fontSize:"12",txtColor:"blue",bgColor:"white"},
            sentAt:""
        },
        {
            id: "11111111",
            to: "stam mishehu",
            cc: "",
            title: "title 2",
            text: "stam text kolshehu",
            styles: {fontFam:"curier",fontSize:"14",txtColor:"black",bgColor:"lightblue"},
            sentAt:""
        },
        {
            id: "989898989",
            to: "da da",
            cc: "du du",
            title: "titel 1",
            text: "ma nishma ? lama ? ha ha ha",
            styles: {fontFam:"arial",fontSize:"12",txtColor:"blue",bgColor:"white"},
            sentAt:""
        },
        {
            id: "stamstam",
            to: "da da",
            cc: "du du",
            title: "titel 1",
            text: "ma nishma ? lama ? ha ha ha",
            styles: {fontFam:"arial",fontSize:"12",txtColor:"blue",bgColor:"white"},
            sentAt:""
        }]
  
}