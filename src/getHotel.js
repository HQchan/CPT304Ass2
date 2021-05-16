const getHotelsettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=Nanning&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

var hotelist;
function getHotels() {
    var city = document.getElementById("city").value
    $.ajax(getHotelsettings).done(function (response) {

        getHotelsettings.url = "https://hotels4.p.rapidapi.com/locations/search?query="+city+"&locale=en_US",
        //let obj = JSON.parse(response.suggestions[1]);
        hotelist = JSON.stringify(response.suggestions[1],null,4);
    	console.log(hotelist);
    	document.getElementById("hotellist").innerHTML= "holidaylist:\n" + hotelist;
        return hotelist;
    });
}
