const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    img: "./img/Book/FictionBook.jpg",
    desc: "A novel about a library that contains an infinite number of books, each one the story of another reality.",
    rating: 4.8
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    img: "./img/Book/HistoryBook.png",
    desc: "A groundbreaking book that explores the history of our species from the Stone Age up to the present day.",
    rating: 4.7
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    img: "./img/Book/ClassicBook.jpg",
    desc: "A classic of modern American literature, this novel explores the injustices of the American South through the eyes of a young girl.",
    rating: 4.9
  },
  {
    id: 4,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    img: "./img/Book/Science-Book.jpg",
    desc: "A landmark volume in science writing, it has become an international publishing phenomenon.",
    rating: 4.6
  },
  {
    id: 5,
    title: "Becoming",
    author: "Michelle Obama",
    img: "./img/Book/BiographyBook.jpg",
    desc: "The inspiring and deeply personal memoir of the former First Lady of the United States.",
    rating: 4.8
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    img: "./img/Book/MysteryBook.jpg",
    desc: "A shocking psychological thriller of a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    rating: 4.5
  },
];

let choosenBook = books[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductAuthor = document.querySelector(".productAuthor");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductRating = document.querySelector(".productRating");

const borrowBookTitleInput = document.getElementById("borrowBookTitle");
const borrowBookIDInput = document.getElementById("borrowBookID");
const borrowBookIDDisplay = document.getElementById("borrowBookIDDisplay");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenBook = books[index];
    currentProductTitle.textContent = choosenBook.title;
    currentProductAuthor.textContent = choosenBook.author;
    currentProductDesc.textContent = choosenBook.desc;
    currentProductImg.src = choosenBook.img;
    currentProductRating.textContent = `Avg Rating: ${choosenBook.rating}/5`;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  borrowBookTitleInput.value = choosenBook.title;
  borrowBookIDInput.value = choosenBook.id;
  borrowBookIDDisplay.value = choosenBook.id;
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});