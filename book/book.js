import { renderBookDetail } from '../render-utils.js.';
import { getBook } from '../fetch-utils.js';

const bookContainerEl = document.querySelector('#book-detail-container');

const params = new URLSearchParams(window.location.search);

loadData();

async function loadData() {
    const book = await getBook(params.get('id'));
    const bookDiv = renderBookDetail(book);
    bookContainerEl.append(bookDiv);
}