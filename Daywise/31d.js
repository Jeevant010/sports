const api_id = "225008eb";

const api_key = "180043898e6fe8ad6b165f9dec4b3530";

// const string = '2*8*10-2';
// const result = eval(string);
// console.log(result);

const query = document.querySelector('header.search input');
const search = document.querySelector("header.search button");
const container = document.querySelector(".recipies");

// const handleSearch = async () => {
//   const searchTerm = query.value.trim();
//   if (!searchTerm) return alert("Please enter a search term!");

//   try {
//     // const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`;
//     // const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

//     const response = await fetch(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`,
//     {
//       headers: { "Edamam-Account-User": "Jeevant" },
//     });
//     // const wrapped = await response.json();
//     // const data = JSON.parse(wrapped.contents);

//     console.log(response);
//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//   }
// };

const handleSearch = async () => {
  const searchTerm = query.value.trim();
  if (!searchTerm) {
    alert("Please enter a search term!");
    return;
  }

  try {
    container.innerHTML = "";
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`;
    const response = await fetch(url, {
      headers: {
        "Edamam-Account-User": "Jeevant" 
      }
    });

    const text = await response.text(); 

    let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          resultsSection.innerHTML = `<pre>${text}</pre>`;
          return;
        }
    // console.log(data);
    const {hits} = await data;
    // console.log(hits);
    // console.log("Raw response text:", text);

    hits.map(({recipe}) => {
        console.log(recipe);
        // const dot = document.createElement('img');
        // dot.src = recipe.image;
        // dot.style = `width:150px;margin:50px`
        
        // console.log(dot);
        const { image, label, url, calories } = recipe;
        const dot = document.createElement('div');
        dot.innerHTML = `
            <div class="recipe"> 
                <h2> ${label} </h2>
                <img src="${image}" width="150px" alt="${label}">
                <h3> ${calories} </h3>
                <a href="${url}" target="_blank"> View Recipe</a> 
            </div>
        `
        container.appendChild(dot);
    })



  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};


query.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

search.addEventListener("click", handleSearch);