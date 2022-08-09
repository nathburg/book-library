export function renderBookThumbnail(book) {
    const bookEl = document.createElement('div');
    const titleEl = document.createElement('div');
    const bookLinkEl = document.createElement('a');
    
    titleEl.textContent = book.Title;
    bookLinkEl.href = `/book/?id=${book.id}`;

    bookLinkEl.append(titleEl);
    bookEl.append(bookLinkEl);

    return bookEl;
}