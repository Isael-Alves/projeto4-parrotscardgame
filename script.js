let AmountCards = 0;
const ArrayPictures = ["bobrossparrot", "bobrossparrot", "explodyparrot", "explodyparrot", "fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot", "revertitparrot", "revertitparrot", "tripletsparrot", "tripletsparrot", "unicornparrot", "unicornparrot"];
let NewArrayPictures = [];
let ArrayPicturesShuffled = [];
StartGame();

function StartGame() {
    AmountCards = prompt("Com quantas cartas vc quer jogar?");
    for (i = 0; i < AmountCards; i++) {
        NewArrayPictures.push(ArrayPictures[i]);
    }

    if (AmountCards > 3 && AmountCards < 15 && AmountCards % 2 === 0) {
        shuffleArray(NewArrayPictures);
        for (i = 0; i < AmountCards; i++) {
            document.querySelector("ul").innerHTML +=
                `<li onclick = "RotateCard(this)">
                <img class="FrontFace" src="/img/front.png" alt="">
                <img class="BackFace" src="/img/${ArrayPicturesShuffled[i]}.gif" alt="">
            </li>`
        }

    } else {
        alert("Quantidade não permitida, escolha um valor par entre 4 e 14.");
        StartGame();
    }
}

function RotateCard(elemento) {
    elemento.querySelector(".FrontFace").classList.toggle("Rotate-front-face");
    elemento.querySelector(".BackFace").classList.toggle("Rotate-back-face");
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    ArrayPicturesShuffled = arr;
}