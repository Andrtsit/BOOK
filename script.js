"use strict";

const modal = document.querySelector(`.modal`);
const bookTitle = document.querySelector(`#book-title`);
const author = document.querySelector(`#author`);
const pages = document.querySelector(`#pages`);
const readStatus = document.querySelector(`#read`);
const container = document.querySelector(`.book-container`);

const overlay = document.querySelector(`.overlay`);
const btnShow = document.querySelector(`#btn-show`);
const btnCloseModal = document.querySelector(`#btn-close-modal`);
const btnSumbit = document.querySelector(`#btn-submit`);

let btnDelete = document.querySelectorAll(`.btn-delete`);

const showModal = function () {
  modal.style.display = `grid`;
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.style.display = `none`;
  overlay.classList.add(`hidden`);
};

const deleteBook = function () {};

// =========== EVENT LISTENERS FOR MODAL SHOW/HIDE
btnShow.addEventListener(`click`, showModal);

btnSumbit.addEventListener(`click`, closeModal);

btnCloseModal.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && modal.style.display === `grid`) {
    closeModal();
  }
});
document.addEventListener(`keydown`, function (e) {
  if (
    e.key === `Enter` &&
    modal.style.display === `grid` &&
    author.value !== `` &&
    bookTitle.value !== `` &&
    pages.value !== 0
  ) {
    let div = document.createElement(`div`);
    let btn = document.createElement(`button`);
    let btnContent = document.createTextNode(`DELETE`);
    div.setAttribute(`class`, `book-example`);
    btn.setAttribute(`class`, `btn-delete`);
    btn.appendChild(btnContent);
    div.appendChild(btn);
    div.insertAdjacentHTML(
      "beforeend",
      `<h2>TITLE
      <br>
      ${bookTitle.value}
      </h2>
      <p class="author">AUTHOR 
      <br>
      ${author.value}
      </p>
      <p class="pages">PAGES
      <br>
      ${pages.value}
      </p>`
    );
    container.appendChild(div);

    bookTitle.value = ``;
    pages.value = ``;
    author.value = ``;
    //
    //
    // ===Delete book event listener =====//
    //
    //
    btn.addEventListener(`click`, function (e) {
      e.target.parentElement.remove();
    });
    closeModal();
  }
});

//============== EVENT LISTENER FOR SUMBIT A BOOK AND SHOW ON UI

btnSumbit.addEventListener(`click`, function () {
  if (pages.value <= 0) {
    alert(`Negative number pages(or 0)isn't accepted`);
    bookTitle.value = ``;
    pages.value = 0;
    author.value = ``;
    return;
  } else {
    let div = document.createElement(`div`);
    let btn = document.createElement(`button`);
    let btnContent = document.createTextNode(`DELETE`);
    div.setAttribute(`class`, `book-example`);
    btn.setAttribute(`class`, `btn-delete`);
    btn.appendChild(btnContent);
    div.appendChild(btn);
    div.insertAdjacentHTML(
      "beforeend",
      `<h2>TITLE
      <br>
      ${bookTitle.value}
      </h2>
      <p class="author">AUTHOR 
      <br>
      ${author.value}
      </p>
      <p class="pages">PAGES
      <br>
      ${pages.value}
      </p>`
    );
    container.appendChild(div);

    bookTitle.value = ``;
    pages.value = ``;
    author.value = ``;
    //
    //
    // ===Delete book event listener =====//
    //
    //
    btn.addEventListener(`click`, function (e) {
      e.target.parentElement.remove();
    });
  }
});
