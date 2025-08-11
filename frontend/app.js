const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    img: "./img/book_fiction.png",
    desc: "A novel about a library that contains an infinite number of books, each one the story of another reality."
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    img: "./img/book_history.png",
    desc: "A groundbreaking book that explores the history of our species from the Stone Age up to the present day."
  },
// **新增条目**
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    img: "./img/book_classic.png", // **您需要提供这张图片**
    desc: "A classic of modern American literature, this novel explores the injustices of the American South through the eyes of a young girl."
  },
  {
    id: 4, // ID 需要更新
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    img: "./img/book_science.png",
    desc: "A landmark volume in science writing, it has become an international publishing phenomenon."
  },
  {
    id: 5, // ID 需要更新
    title: "Becoming",
    author: "Michelle Obama",
    img: "./img/book_biography.png",
    desc: "The inspiring and deeply personal memoir of the former First Lady of the United States."
  },
  {
    id: 6, // ID 需要更新
    title: "The Silent Patient",
    author: "Alex Michaelides",
    img: "./img/book_mystery.png",
    desc: "A shocking psychological thriller of a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive."
  },
];

let choosenBook = books[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductAuthor = document.querySelector(".productAuthor");
const currentProductDesc = document.querySelector(".productDesc");
const borrowBookTitleInput = document.getElementById("borrowBookTitle");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen book
    choosenBook = books[index];

    // Change texts of the current book
    currentProductTitle.textContent = choosenBook.title;
    currentProductAuthor.textContent = choosenBook.author;
    currentProductDesc.textContent = choosenBook.desc;
    currentProductImg.src = choosenBook.img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  // Set the book title in the hidden form field
  borrowBookTitleInput.value = currentProductTitle.textContent;
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});