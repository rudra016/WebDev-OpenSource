const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5d1150382dmsh8148168445631d9p19de75jsn7af80ac1db5d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        cityName.innerHTML = city
        console.log(response)
        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

       
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("New York")


// GSAP Animations
// nav-anim
// header-anim
// card-1 card-2 card-3
// name-anim


TweenMax.from(".nav-anim" , 0.8 , {
    delay : 0,
    opacity : 0,
    y : -20,
    ease: Expo.easeInOut
})


TweenMax.from(".header-anim" , 0.9 , {
    delay : 0,
    opacity : 0,
    y : -20,
    ease: Expo.easeInOut
})


TweenMax.from(".card-1" , 0.9 , {
    delay : 0.3,
    opacity : 0,
    y : 20,
    ease: Expo.easeInOut
})


TweenMax.from(".card-2" , 0.9 , {
    delay : 0.5,
    opacity : 0,
    y : 40,
    ease: Expo.easeInOut
})


TweenMax.from(".card-3" , 0.9 , {
    delay : 0.7,
    opacity : 0,
    y : 60,
    ease: Expo.easeInOut
})

TweenMax.from(".name-anim" , 0.9 , {
    delay : 0.7,
    opacity : 0,
    y : 60,
    ease: Expo.easeInOut
})