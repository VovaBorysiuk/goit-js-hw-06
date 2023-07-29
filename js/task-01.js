// const categoriesList = document.getElementById("categories");
// const items = categoriesList.children.length;
// console.log(`Number of categories: ${items}`);

// const textOne = categoriesList.firstElementChild.firstElementChild.textContent;
// console.log(`  $(textOne)`);
// const itemsTwo = categoriesList.firstElementChild.lastElementChild.children.length;

// console.log(itemsTwo);




const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const numbersitemTitle = item.querySelectorAll("li").length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${numbersitemTitle}`);
});
