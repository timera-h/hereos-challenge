const URL = "http://localhost:8000/heroes";

console.log(hello)
function getAllHeroes() {
    axios
        .get(URL + "?_sort=id&_order=asc")
        .then((apiRes) => {
            const users = apiRes.data;
            displayAllHeroes(users);
        })
        .catch((apiErr) => console.error(apiErr));
}


//lister les heroes dans un li 
function displayAllHeroes(list) {
    const ul = document.getElementById("listAllHeroes");
    ul.innerHTML = "";
    list.forEach((hero) => {

        // create li element object
        const li = document.createElement("li");
        li.classList.add("hero");
        li.setAttribute("data-hero-id", hero.id);
        // setup li's markup
        li.innerHTML = `
              <h3>${hero.name} </h3>
             <figure> <img src="${hero.image}"> </figure> 
              <div class="buttons">
                  <button class="btn remove">remove</button>
                  <button class="btn details">details</button>
              </div>`
    })
};


getAllHeroes()