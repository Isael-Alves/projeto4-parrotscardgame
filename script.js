let AmountCards = 0;
let AmountClicks = 0;
const ArrayPictures = ["bobrossparrot", "bobrossparrot", "explodyparrot", "explodyparrot", "fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot", "revertitparrot", "revertitparrot", "tripletsparrot", "tripletsparrot", "unicornparrot", "unicornparrot"];
let NewArrayPictures = [];
let ArrayPicturesShuffled = [];
let click1;
let click2;
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
    AmountClicks += 1;
    elemento.querySelector(".FrontFace").classList.add("Rotate-front-face");
    elemento.querySelector(".BackFace").classList.add("Rotate-back-face");

    if (click1 === undefined) {
        click1 = elemento.querySelector(".BackFace");
    } else {
        click2 = elemento.querySelector(".BackFace");
    }


    if (click2 !== undefined) {
        
        if (click1.src == click2.src) {
            click1.parentNode.setAttribute("onclick", "null");
            click2.parentNode.setAttribute("onclick", "null");
            click1 = undefined;
            click2 = undefined;
        } else {
            setTimeout(() => {
                click1.parentNode.querySelector(".FrontFace").classList.remove("Rotate-front-face");
                click1.parentNode.querySelector(".BackFace").classList.remove("Rotate-back-face");
                click2.parentNode.querySelector(".FrontFace").classList.remove("Rotate-front-face");
                click2.parentNode.querySelector(".BackFace").classList.remove("Rotate-back-face");
                click1 = undefined;
                click2 = undefined;
            }, 1000);
        }
        FinishGame();
    }
}

function FinishGame() {
    let rotateAll = document.querySelectorAll(".Rotate-front-face").length;
    console.log(rotateAll);
    if (rotateAll === Number(AmountCards)) {
        setTimeout(() => {
            alert(`"Você ganhou em ${AmountClicks} jogadas!"`);
        }, 1000);
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    ArrayPicturesShuffled = arr;
}