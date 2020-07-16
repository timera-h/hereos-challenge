const URL = "http://localhost:8000/heroes";
const popup = document.getElementById("hero-details-popup");
const btnMarvel = document.getElementById("img-marvel");
const btnDc = document.getElementById("img-dc-commics");
const formPost = document.getElementById("form-post-hero");


console.log("hello");

// créer un hero


async function createHero() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector("input:checked").value;
    const work = document.getElementById("work").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const combat = document.getElementById("combat").value;
    const fullName = document.getElementById("full-name").value;
    const alises = document.getElementById("aliases").value;
    const publisher = document.getElementById("publisher").value;
    

    try {
        
        await axios.post(URL, {
            name,
            gender,
            work,
            height,
            weight,
            combat,
            fullName,
            alises,
            publisher
        }); 
        
        getAllHeroes();
        console.log(createHero);
    } catch(err){
        console.error(err);
    }
}


// afficher tous les heros
function getAllHeroes(biography) {
    axios
        .get(URL + "?_sort=id&_order=asc&biography.publisher=Marvel+Comics&biography.publisher=DC+Comics")
        .then((apiRes) => {
            const heroes = apiRes.data;
            displayAllHeroes(heroes);
        })
        .catch((apiErr) => console.error(apiErr));
    }
    
    // details de l'hero
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

// afficher detail de hero
function displayOneHero(hero) {
    const wrapper = document.createElement("div");
    popup.appendChild(wrapper);

    wrapper.outerHTML = `
    <div id="infos-hero">
        <h3>
          <span contenteditable class="name">${hero.name}</span>
          <span contenteditable class="full-name">${hero.full-name}</span>
          <span contenteditable class="aliases">${hero.aliases}</span>
        </h3>
        <ul class="list-details">
        <li contenteditable class="height">${hero.height}</li>
        <li contenteditable class="weight">${hero.weight}</li>
        <li contenteditable class="gender">${hero.gender}</li>
        <li contenteditable class="race">${hero.race}</li>
        <li contenteditable class="work">${hero.work}</li>
        <li contenteditable class="combat">${hero.pawerstats.combat}</li>
        </ul>
    </div>`;

    // popup.querySelector(".first").onblur = () => updateHero(hero.id);
    // popup.querySelector(".last").onblur = () => updateHero(hero.id);
    // popup.querySelector(".email").onblur = () => updateHero(hero.id);
    // popup.querySelector(".gender").onblur = () => updateHero(hero.id);

    popup.classList.remove("is-hidden");
}

// supprimer un hero
async function deleteOnehero(id) {
    try {
        await axios.delete(`${URL}/${id}`);
        removeHeroFromDocument(id);

    } catch (err) {
        console.error(err);
    }
}

// async function updateHero(id){
//     const 
// }

// supprimer un hero de la vue
function removeHeroFromDocument(idHero) {
    const cartToRemove = document.querySelector(`[data-hero-id="${idHero}"]`);
    cartToRemove.remove();
}

// afficher les hero dans la vue 
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

        // bouton supprime un hero
        btnRemove.onclick = () => {
            deleteOnehero(hero.id);
        };

        // ul parent de li 
        ul.appendChild(li);
    });
}


// execute le getAllHero au clique et efface l'image
btnMarvel.onclick = function () {
    btnMarvel.style.visibility = "hidden";
    getAllHeroes();
}

formPost.querySelector(".btn").onclick = createHero;