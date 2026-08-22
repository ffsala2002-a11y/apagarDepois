const rootList = document.querySelector('.rootList');
const spinner = document.querySelector('.sk-folding-cube');
const fundoSpinner = document.querySelector('.fundoSpinner');
const fundoModalUser = document.querySelector(".fundoModalUser");
const rootModal = document.querySelector(".rootModal");
const modalContainer = document.querySelector(".modalUser");

let timeId;
let tempo = 3000;
let users = [];

document.addEventListener('DOMContentLoaded', () => {
    fundoSpinner.classList.add("active");
    spinner.classList.add("active");

    clearTimeout(timeId);

    timeId = setTimeout(() => {
        fundoSpinner.classList.remove("active");
        spinner.classList.remove("active");
    }, tempo);

    searchApi()
})


const key = 'https://randomuser.me/api/?results=10';

async function searchApi() {
    const req = await fetch(key);

    try {
        const reqFormat = await req.json();

        const data = reqFormat.results;

        renderUsers(data);

        users.push(...data);

        console.log(users);
    } catch (erro) {
        console.log(erro)
    }
}

function createCard(user) {
    return `
    
    <div class="user-card" data-id="${user.login.uuid}">
      <img src="${user.picture.large}" alt="Foto de ${user.name.first}">
      <h1>${user.name.first}</h1>
    </div>
    
    `
}

function renderUsers(users) {
    rootList.innerHTML = users.map(us => createCard(us)).join("")
}

function createModal(user) {
    return `
    
    <div class="modal-card">
      <h2>${user.name.first}</h2>
    </div>
    
    `
}

fundoModalUser.addEventListener('click', () => {
    modalContainer.classList.remove("active");
    fundoModalUser.classList.remove("active")
})


rootList.addEventListener('click', (e) => {
    const cardUser = e.target.closest(".user-card");

    if (!cardUser) return;

    const idUser = cardUser.dataset.id;

    const resultUser = users.find(us => us.login.uiid = idUser);

    rootModal.innerHTML = createModal(resultUser);

    modalContainer.classList.add("active");

    fundoModalUser.classList.add("active");


    //console.log(resultUser)
})