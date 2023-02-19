let result = document.getElementsByClassName("result");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a60762eebmsh46ca143e01dc634p1e9fc1jsn50c23eb5f2ea',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

let getGeoData = () => {
    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
        .then(response => response.json())
        .then((obj) =>
        {
            let ind = Math.floor(Math.random() * 5);

            console.log(obj.data[4].country);
            console.log(obj.data[ind].name);

            console.log(obj.data[ind].latitude);
            console.log(obj.data[ind].longitude);

            const para = document.createElement("h2");

            result.innerHTML = `
                <h2>Country : ${obj.data[ind].country}</h2>

                <h3>Lattitude : ${obj.data[ind].latitude}</h3>
                <h3>Longitude :${obj.data[ind].longitude}</h3>

                <h4>Place : ${obj.data[ind].name}</h4>
            `

            document.getElementById("result").appendChild(para);
        })
        .catch(err => console.error(err));
}

window.addEventListener("load", getGeoData);