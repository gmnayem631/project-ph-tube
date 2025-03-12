function loadCategories() {
  //   fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //   convert promise to json
    .then((response) => response.json())
    // sent data to display
    .then((data) => displayCategories(data.categories)); //returns an array of object
}

// load videos
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
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

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videos.forEach((video) => {
    // create element
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>
      A card component has a figure, a body part, and inside body there are
      title and actions parts
    </p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    // appending the element
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideos();
