// Get all elements with the class 'card-icon'
const cardIcons = document.getElementsByClassName("card-wrapper");

const child = document.getElementById("tab-child");
const women = document.getElementById("tab-women");
const men = document.getElementById("tab-man");

const childSection = document.querySelector("#children");
const womenSection = document.querySelector("#women");
const manSection = document.querySelector("#man");


for (let i = 0; i < cardIcons.length; i++) {
  cardIcons[i].addEventListener("mouseover", function() {
    cardIcons[i].classList.add("actives");
  });

  cardIcons[i].addEventListener("mouseout", function() {
    cardIcons[i].classList.remove("actives");
  });
}

function addChild() {
    childSection.style.display = "flex";
    womenSection.style.display = "none";
    manSection.style.display = "none";

    child.classList.add("tab-active")
    men.classList.remove("tab-active")
    women.classList.remove("tab-active")
}

function addWomen() {
    childSection.style.display = "none";
    womenSection.style.display = "flex";
    manSection.style.display = "none";

    women.classList.add("tab-active")
    men.classList.remove("tab-active")
    child.classList.remove("tab-active")
}

function addMen() {
    childSection.style.display = "none";
    womenSection.style.display = "none";
    manSection.style.display = "flex";

    men.classList.add("tab-active")
    child.classList.remove("tab-active")
    women.classList.remove("tab-active")
}

child.addEventListener("click", addChild);
women.addEventListener("click", addWomen);
men.addEventListener("click", addMen);


//  Select the timeline wrapper
const timelineWrapper = document.getElementById("timeline-wrapper_cyberfirefly");

// Add an event listener for the 'wheel' event
timelineWrapper.addEventListener("wheel", (event) => {
  // Calculate the maximum horizontal scroll position
  const maxScrollLeft = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;

  // Determine if we're at the start or end of horizontal scrolling
  const atStart = timelineWrapper.scrollLeft === 0;
  const atEnd = timelineWrapper.scrollLeft === maxScrollLeft;

  if (!(atStart && event.deltaY < 0) && !(atEnd && event.deltaY > 0)) {
    // Allow horizontal scrolling within bounds
    event.preventDefault();
    timelineWrapper.scrollLeft += event.deltaY;
  }

  // Log the current scroll position for debugging
  console.log("Horizontal scroll position:", timelineWrapper.scrollLeft);
});