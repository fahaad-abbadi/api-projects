let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        quote.innerText = data.content;
        author.innerText = data.author;
    })
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);