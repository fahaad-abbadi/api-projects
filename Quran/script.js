let verse = document.getElementById("arabic-script");
let translation = document.getElementById("translation");

let submit = document.getElementById("btn");

let surah = document.getElementById("surah-number");
let aayah = document.getElementById("aayah-number");

var getVerse = () => {
    let surah_number = surah.value;
    let aayah_number = aayah.value;


    fetch(`http://api.alquran.cloud/v1/ayah/${surah_number}:${aayah_number}/editions/quran-uthmani,en.asad`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);

            console.log(result.data[0].text)
            console.log(result.data[1].text)

            verse.innerText = result.data[0].text;
            translation.innerText = result.data[1].text;
        })
}

submit.addEventListener("click", getVerse);