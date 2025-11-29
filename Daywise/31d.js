const api_id = "225008eb";
const api_key = "180043898e6fe8ad6b165f9dec4b3530";

const query = document.querySelector('header.search input');
const search = document.querySelector("header.search button");
const container = document.querySelector(".recipies");

// inject styles to make cards inline-block with equal size and internal scroller
const style = document.createElement("style");
style.textContent = `
  .recipies {
    white-space: normal; /* allow wrapping */
  }
  .recipe-card {
    display: inline-block;
    vertical-align: top;
    width: 280px;         /* set a fixed width */
    height: 420px;        /* equal height for all cards */
    margin: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;     /* clip overflow to the card */
    background: #fff;
  }
  .recipe-card aside {
    height: 160px;        /* fixed media area */
    position: relative;
  }
  .recipe-card aside img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .recipe-card aside .button {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
  .recipe-card article {
    height: calc(420px - 160px); /* remainder of card */
    display: flex;
    flex-direction: column;
  }
  .recipe-card article .scroll {
    overflow-y: auto;     /* scroller inside the card */
    padding: 10px 12px;
  }
  .recipe-card h2, .recipe-card h3 {
    margin: 0 0 6px 0;
  }
  .recipe-card ul {
    display: flex;
    gap: 8px;
    margin: 0 0 8px 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
  }
  .recipe-card .ingredients span {
    display: inline-block;
    margin-right: 6px;
    white-space: nowrap;
  }
`;
document.head.appendChild(style);

const generatedCards = (image, label, mealType, time, link, calories, ingredients) =>  `
  <div class="recipe-card">
    <aside>
      <img src="${image}" alt="${label}" />
      <a href="${link}" class="button"><span class="icon icon-play"></span></a>
    </aside>
    <article>
      <div class="scroll">
        <h2>${label}</h2>
        <h3>${mealType}</h3>
        <ul>
          <li><span class="icon icon-users"></span><span>1</span></li>
          <li><span class="icon icon-clock"></span><span>${time}</span></li>
          <li><span class="icon icon-level"></span><span>Beginner level</span></li>
          <li><span class="icon icon-calories"></span><span>${calories}</span></li>
        </ul>
        <p class="ingredients"><span>Ingredients:&nbsp;</span>${ingredients.map(i => `<span>${i.text ? i.text : i}</span>`).join('')}</p>
      </div>
    </article>
  </div>
`;

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
      headers: { "Edamam-Account-User": "Jeevant" }
    });

    const data = await response.json();
    const { hits = [] } = data;

    hits.forEach(({ recipe }) => {
      const { image, label, url, calories, mealType = [], totalTime, ingredients = [] } = recipe;
      const mealTypeLabel = mealType[0] || 'Unknown';
      const dot = document.createElement('div');
      dot.innerHTML = generatedCards(
        image,
        label,
        mealTypeLabel,
        totalTime || 'N/A',
        url,
        Math.round(calories),
        ingredients
      );
      container.appendChild(dot.firstElementChild);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

query.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});
search.addEventListener("click", handleSearch);

// demo element
const el = document.createElement("h1");
el.innerHTML = "history";
el.classList.add("random");
document.body.appendChild(el);





// const api_id = "225008eb";

// const api_key = "180043898e6fe8ad6b165f9dec4b3530";

// // const string = '2*8*10-2';
// // const result = eval(string);
// // console.log(result);

// const query = document.querySelector('header.search input');
// const search = document.querySelector("header.search button");
// const container = document.querySelector(".recipies");

// // const handleSearch = async () => {
// //   const searchTerm = query.value.trim();
// //   if (!searchTerm) return alert("Please enter a search term!");

// //   try {
// //     // const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`;
// //     // const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

// //     const response = await fetch(
// //     `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`,
// //     {
// //       headers: { "Edamam-Account-User": "Jeevant" },
// //     });
// //     // const wrapped = await response.json();
// //     // const data = JSON.parse(wrapped.contents);

// //     console.log(response);
// //   } catch (error) {
// //     console.error("Error fetching recipes:", error);
// //   }
// // };

// const handleSearch = async () => {
//   const searchTerm = query.value.trim();
//   if (!searchTerm) {
//     alert("Please enter a search term!");
//     return;
//   }

//   try {
//     container.innerHTML = "";
//     const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`;
//     const response = await fetch(url, {
//       headers: {
//         "Edamam-Account-User": "Jeevant" 
//       }
//     });

//     const text = await response.text(); 

//     let data;
//         try {
//           data = JSON.parse(text);
//         } catch (e) {
//           resultsSection.innerHTML = `<pre>${text}</pre>`;
//           return;
//         }
//     // console.log(data);
//     const {hits} = await data;
//     // console.log(hits);
//     // console.log("Raw response text:", text);

//     hits.map(({recipe}) => {
//         console.log(recipe);
//         // const dot = document.createElement('img');
//         // dot.src = recipe.image;
//         // dot.style = `width:150px;margin:50px`
        
//         // console.log(dot);
//         const { image, label, url, calories } = recipe;
//         const dot = document.createElement('div');
//         dot.innerHTML = `
//             <div class="recipe"> 
//                 <h2> ${label} </h2>
//                 <img src="${image}" width="150px" alt="${label}">
//                 <h3> ${calories} </h3>
//                 <a href="${url}" target="_blank"> View Recipe</a> 
//             </div>
//         `
//         container.appendChild(dot);
//     })



//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//   }
// };


// query.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     handleSearch();
//   }
// });

// search.addEventListener("click", handleSearch);


// const el = document.createElement("h1");
// el.innerHTML = "history";
// el.classList.add("random")
// console.log(el);
// document.body.appendChild(el);