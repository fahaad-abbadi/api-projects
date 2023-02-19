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

            console.log(obj.data[ind].country);
            console.log(obj.data[ind].name);

            console.log(obj.data[ind].latitude);
            console.log(obj.data[ind].longitude);

            country.innerText = obj.data[ind].country;
            address.innerText = obj.data[ind].name;
            latitude.innerText = obj.data[ind].latitude;
            longitude.innerText = obj.data[ind].longitude;

        })
        .catch(err => console.error(err));
}

window.addEventListener("load", getGeoData);