"use strict";
const categoriesCount = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesCount.length}`);

categoriesCount.forEach((category) => {
    const headingText = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;
    console.log(`Category: ${headingText}`);
    console.log(`Elements: ${itemsCount}`);
});
