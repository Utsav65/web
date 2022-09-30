/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Utsav Patel
 *      Student ID: 156587206
 *      Date:       21/07/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

var nav = document.getElementById("menu");
window.onload = function () {
  categories.forEach((category) => {
    var btn = document.createElement("button");
    btn.onclick = function () {
      display(category);
    };
    btn.innerHTML = category.name;
    nav.appendChild(btn);
  });
  display(categories[0]);
};

var heading = document.getElementById("selected-category");
var body = document.getElementById("category-products");

function display(category) {
  heading.innerHTML = category.name;
  body.innerHTML = "";
  var filter = products.filter(
    (product) => product.categories.includes(category.id) && !product.discontinued
  );
  function currency(price) {
    const pr_cost = price;
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(pr_cost);
  }
  filter.forEach((table) => {
    var row = document.createElement("tr");
    row.onclick = function () {
      console.log(table);
    };
    var Name = document.createElement("td");
    var Des = document.createElement("td");
    var Price = document.createElement("td");
    Name.innerHTML = table.title;
    Des.innerHTML = table.description;
    Price.innerHTML = currency(table.price);
    row.appendChild(Name);
    row.appendChild(Des);
    row.appendChild(Price);
    body.appendChild(row);
  });
}
