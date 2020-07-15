const URL = "http://localhost:8000/heroes";
const popup = document.getElementById("hero-details-popup");

console.log("hello");

function getAllHeroes() {
    axios
        .get(URL + "?_sort=id&_order=asc")
        .then((apiRes) => {
            const heroes = apiRes.data;
            displayAllHeroes(heroes);
        })
        .catch((apiErr) => console.error(apiErr));
}


function getOneHero(id) {
    axios
        .get(`${URL}/${id}`)
        .then((apiRes) => {
            const heroes = apiRes.data;
            console.log(heroes);
            displayOneHero(heroes);
        })
        .catch((apiErr) => console.error(apiErr));
}


function displayOneHero(hero) {
    const wrapper = document.createElement("div");
    popup.appendChild(wrapper);

    wrapper.outerHTML = `
    <div id="infos-hero">
        <h3>
          <span contenteditable class="first">${hero.name}</span>
          <span contenteditable class="full">${hero.biography.full-name}</span>
        </h3>
    </div>`;

    // popup.querySelector(".first").onblur = () => updateUser(user.id);
    // popup.querySelector(".last").onblur = () => updateUser(user.id);
    // popup.querySelector(".email").onblur = () => updateUser(user.id);
    // popup.querySelector(".gender").onblur = () => updateUser(user.id);

    popup.classList.remove("is-hidden");
}



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
           <figure> <img src="${hero.image.url}"> </figure> 
            <div class="buttons">
                <button class="btn remove">remove</button>
                <button class="btn details">details</button>
            </div>`;
        // get the btn as an element object
        const btnDetails = li.querySelector(".btn.details");
        const btnRemove = li.querySelector(".btn.remove");

        // setup event listeners on the btn
        btnDetails.onclick = () => {
            getOneHero(hero.id);
        };

        btnRemove.onclick = () => {
            deleteOneUser(hero.id);
        };

        ul.appendChild(li);
    });
}


getAllHeroes();