"use strict";
const images = [
    {"id": "1", "url": "./assets/dragonball.jpg"},
    {"id": "2", "url": "./assets/yu-gi-oh.jpg"},
    {"id": "3", "url": "./assets/pokemon.jpg"},
    {"id": "4", "url": "./assets/cavaleiros.jpg"},
]
const containerItems = document.querySelector ("#container-items"); 

const loadImages = (images, container) => {
    //foreach passa por todas as imagens e pega uma
    images.forEach (image => {
        // inseri a imagem e concatena com a anterior (+=)
        container.innerHTML += 
        //cria uma div dentro do container-items do html
        // e coloca as imagens
        `
        <div class="item">
            <img src= "${image.url}">
        </div>
        `
    })
}



// pega as imagens acima e o container
loadImages(images, containerItems); 
// trasforma a div de cima em um a var
let items = document.querySelectorAll(".item");

const previous = () => {
    //adiciona o primeiro item do container no final da lista
    containerItems.appendChild(items[0]);
    //recarrega a lista de itens mostrando um item novo
    items = document.querySelectorAll(".item");
}
const next = () => {
    // pega todos os itens -1, ou seja, coloca o item no fim da lista
    const lastItem = items[items.length - 1];
    // contrario do appendchild, adiciona o ultimoo item ao inicio
    containerItems.insertBefore(lastItem, items[0]);
    //recarrega a lista de itens mostrando um item novo
    items = document.querySelectorAll(".item");
}
//chama as funcoes acima
document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
