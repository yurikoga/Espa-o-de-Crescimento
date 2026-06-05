let index = 0;
const cards = document.querySelectorAll(".slider .card");

setInterval(() => {
  cards.forEach(c => c.classList.remove("active"));
  index = (index + 1) % cards.length;
  cards[index].classList.add("active");
}, 3000);
