function loadCategories() {
  //   fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //   convert promise to json
    .then((response) => response.json())
    // sent data to display
    .then((data) => displayCategories(data.categories)); //returns an array of object
}

function displayCategories(categories) {
  //   get the container
  const categoryContainer = document.getElementById("category-container");
  // loop operation in array of object
  for (let cat of categories) {
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();
