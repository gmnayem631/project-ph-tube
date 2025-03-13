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

function loadCategoryVideos(id) {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      clickedButton.classList.add("active");
      displayVideos(data.category);
    });
}

function displayCategories(categories) {
  //   get the container
  const categoryContainer = document.getElementById("category-container");
  // loop operation in array of object
  for (let cat of categories) {
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  if (videos.length === 0) {
    videoContainer.innerHTML = `
          <div
        class="col-span-full text-center flex flex-col justify-center items-center py-20 gap-8"
      >
        <img class="w-[140px]" src="./assets/Icon.png" alt="" />
        <h2 class="text-3xl text-[#171717] font-bold">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
    `;
    return;
  }

  videos.forEach((video) => {
    // create element
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
<div class="card bg-base-100 shadow-sm">
        <figure class="relative">
          <img class="w-full h-[200px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-white bg-[#171717] px-2 text-sm rounded-md p-1"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-[#171717B3] flex gap-1">
              ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png"
                alt=""
              />
            </p>
            <p class="text-sm text-[#171717B3]">${video.others.views}</p>
          </div>
        </div>
      </div>
    `;
    // appending the element
    videoContainer.append(videoCard);
  });
};

loadCategories();
