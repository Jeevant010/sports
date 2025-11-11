const api_id = "225008eb";

const api_key = "180043898e6fe8ad6b165f9dec4b3530";

// const string = '2*8*10-2';
// const result = eval(string);
// console.log(result);

const query = document.querySelector('header.search input');
const search = document.querySelector("header.search button");

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
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(searchTerm)}&app_id=${api_id}&app_key=${api_key}`;
    const response = await fetch(url, {
      headers: {
        "Edamam-Account-User": "Jeevant" // use your actual Edamam username/email
      }
    });

    console.log("Response object:", response);
    const text = await response.text(); // get raw text instead of JSON
    console.log("Raw response text:", text);

    // don’t parse yet — just display it
    document.body.insertAdjacentHTML("beforeend", `<pre>${text}</pre>`);

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