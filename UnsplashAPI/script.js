let result = document.querySelectorAll('result');


let getRhymes = () => {
    fetch('https://api.unsplash.com/search/photos?query=loft&client_id=YABnaVUbgiVbAARovvno2xEdvYpf9lw2ai1gm-CDoOo')
	.then(response => response.json())
	.then(data => 
        {
            console.log(data);
            console.log(data.results)
            console.log(data.results[0])
            console.log(data.results[0].description)
            console.log(data.results[0].urls)
            console.log(data.results[0].urls.full)

            console.log(data.results[2].urls.small)

            // result.innerHTML = `<img src=${data.results[2].urls.small}></img>`;

            let arr = data.results;

            for(let i = 0; i<=8; i++)
            {
                if(i == 4)
                    continue;
                    
                const para = document.createElement("img");
                para.classList.add("image");

                // para.style.padding = "10px";

                para.setAttribute("src", `${arr[i].urls.full}`);
                document.getElementById("result").appendChild(para);
            }
        })
	.catch(err => console.error(err));
}

window.addEventListener("load", getRhymes);

