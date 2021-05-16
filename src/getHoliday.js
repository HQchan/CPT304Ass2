const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://public-holiday.p.rapidapi.com/2019/US",
	"dataType": 'JSON',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "public-holiday.p.rapidapi.com"
	}
};





function getholiday() {
    var year = document.getElementById("year").value;
    var countrycode = document.getElementById("Countrycode").value;
    var obj;
    var text;
    var obj2;
    settings.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countrycode;
    $.ajax(settings).done(function (response) {
    	console.log(JSON.stringify(response,null,4));
    	obj2 = response;
    	var text = JSON.stringify(response,null,4);
    	if (JSON.parse(text)){
    	console.log("true");
    	}else{
    	console.log("false");
    	}
    	console.log(text);
    	console.log(obj2);
    	document.getElementById("holidaylist").innerHTML= "holidaylist:\n" + text;
        return text;
    });

}