const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// set initial count
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = "0";
      counter.style.color = "black";
    } else if (styles.contains("increase")) {
      count++;
    }
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else if (count === 0) {
      counter.style.color = "black";
    }

    counter.textContent = count; // change text of the element
  });
});
