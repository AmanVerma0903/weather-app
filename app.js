let search_box=document.querySelector("#search_box");
let search_btn=document.querySelector("#search_btn");
let weather_img=document.querySelector(".weather_img");
let tempele=document.querySelector(".temp");
let hum=document.querySelector("#hum");
let h=document.querySelector("#h");
let win=document.querySelector("#win");
let w=document.querySelector("#w");
let loc=document.querySelector(".location");





 async function checkweather(city){
    const key="906842771f14a54ef5545f457b51593f";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    
    const weather_data= await fetch(`${url}`)
       .then(response=>{
          return response.json();
       });
       console.log(weather_data);
     tempele.innerHTML=`${Math.round(weather_data.main.temp-273.15)}&#176;C`;
       loc.innerHTML=`${weather_data.name}`;
       win.innerHTML=`${weather_data.wind.speed} Km/h `;
       hum.innerHTML=`${weather_data.main.humidity} %`;
       if(weather_data.weather[0].main==='Clouds'){
          weather_img.src="cloud.png";
       }
        else if(weather_data.weather[0].main==='Clear'){
        weather_img.src="clear.png";
     }
       else if(weather_data.weather[0].main==='Rain'){
        weather_img.src="rain.png";
     }
      else  if(weather_data.weather[0].main==='Snow'){
        weather_img.src="snow.png";
     }
       else  if(weather_data.weather[0].main==='Mist'){
        weather_img.src="mist.png";
     }
     else  if(weather_data.weather[0].main==='Smoke'){
        weather_img.src="mist.png";
     }
     else{
        weather_img.src="404.png";
     }
    }
     

search_btn.addEventListener("click",()=>{
    checkweather(search_box.value);
});
 