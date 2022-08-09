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

export function renderBookDetail(book) {
    const bookEl = document.createElement('div');
    const bookTitleEl = document.createElement('h1');
    const bookDetailsEl = document.createElement('p');

    const genres = book.Genres;
    let genreString = '';
    for (let i = 0; i < genres.length; i++) {
        if (i < genres.length - 1) {
            genreString = genreString + ' ' + genres[i] + ',';
        } else {
            genreString = genreString + ' and ' + genres[i];
        }
    }

    bookTitleEl.textContent = book.Title;
    bookDetailsEl.textContent = `${book.Title} was written by ${book.Author}. It was published in ${book.Published} and is classified as ${genreString}.`;

    bookEl.append(bookTitleEl, bookDetailsEl);

    return bookEl;
}