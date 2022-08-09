import { getBooks } from './fetch-utils.js';
import { renderBookThumbnail } from './render-utils.js';

const bookListContainerEl = document.querySelector('#book-list-container');

loadData();

async function loadData() {
    
    const books = await getBooks();

    for (let book of books) {
        const newBook = renderBookThumbnail(book);
        bookListContainerEl.append(newBook);
    }
}