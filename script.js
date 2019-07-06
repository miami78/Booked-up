import { bookList } from './database.js';

const listDiv = document.querySelector('#book-list');

for (let i in bookList) {
    const item = document.createElement('div');
    const flex = document.createElement('div');
    const form = document.createElement('div');
    const title = document.createElement('h5');
    const pages = document.createElement('small');
    const description = document.createElement('p');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const author = document.createElement('h6');

    item.setAttribute('id', 'book' + i);
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'input' + i);
    input.setAttribute('placeholder', 'Current page')
    button.setAttribute('id', 'button' + i);
    pages.setAttribute('id', 'pages' + i);

    item.classList.add('list-group-item', 'w-100');
    if (bookList[i].read) {
        item.classList.add('list-group-item-success');
    }
    description.classList.add('mb-1');
    flex.classList.add('d-flex', 'w-100', 'justify-content-between');
    title.classList.add('mb-1');
    form.classList.add('d-flex', 'w-100', 'justify-content-end');
    button.classList.add('btn', 'btn-primary');
    author.classList.add('text-muted', 'font-italic');

    title.innerText = bookList[i].title;
    author.innerText = bookList[i].author;
    pages.innerText = 'Page ' + bookList[i].currentPage + ' of ' + bookList[i].pages;
    description.innerText = bookList[i].description;
    button.innerText = 'Update';

    button.addEventListener('click', () => {
        updateBook(i);
    });

    flex.append(title);
    flex.append(pages);
    form.append(input);
    form.append(button);
    item.append(flex);
    item.append(author);
    item.append(description);
    item.append(form);
    listDiv.append(item);
}

const updateBook = (i) => {
    const input = document.querySelector('#input' + i);
    const value = input.value;
    bookList[i].readBook(value);
    document.querySelector('#pages' + i).innerText = 'Page ' + bookList[i].currentPage + ' of ' + bookList[i].pages;
    if (bookList[i].read) {
        document.querySelector('#book' + i).classList.add('list-group-item-success');
    }
    input.value = null;
}
