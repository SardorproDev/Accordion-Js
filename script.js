"use strict";

const accordionHeader = document.querySelectorAll(".accordion-item__header");

accordionHeader.forEach((item) => {
  item.addEventListener("click", (e) => {
    const currentlyActive = document.querySelector(
      ".accordion-item__header.active"
    );
    console.log(currentlyActive);
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.toggle("active");
      currentlyActive.nextElementSibling.style.maxHeight = 0;
    }
    item.classList.toggle("active");
    const accordionItemBody = item.nextElementSibling;
    if (item.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
