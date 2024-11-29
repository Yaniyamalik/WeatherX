const apikey="ed5fced6474b30f58dabe179517adcb4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherimg=document.querySelector(".weather-icon");

async function weathercheck(city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    


    console.log(data);

   
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".city").innerHTML=data.name;

    if(data.weather[0].main=="Clouds"){
        weatherimg.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherimg.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherimg.src="images/rain.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherimg.src="images/mist.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherimg.src="images/drizzle.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
}

searchbtn.addEventListener("click" ,() =>{
    weathercheck(searchbox.value);
})
