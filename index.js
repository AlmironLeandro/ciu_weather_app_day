var imagenes=[]
  imagenes.push('/Imagenes/cielo claro.png')
  imagenes.push('/Imagenes/5.png')
  imagenes.push('/Imagenes/4.png')
  imagenes.push('/Imagenes/2.png')
var temperatura
consultarApi = ()=> {
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.5708&lon=-58.6243&units=metric&lang=es&exclude=&appid=3308174914784dd48843498552674b5a';
  fetch(url)
    .then(respuesta => respuesta.json())
      .then(resultado => {
        var datoActual = new Date()
        document.getElementById("daytime").innerHTML = `<img class="imagenes" src="/Imagenes/daytime.png"><p>${new Date(resultado.current.dt).toString().substr(15,10)}</br><span class="gris">daytime</span></p>`,
        document.getElementById("data").innerHTML =`<p>${datoActual.toString().substr(0,21)}</p>`,
        document.getElementById("timezone").innerHTML =`<p class="localidad">Tesei, Buenos Aires  <img class="gps" src="Imagenes/gps.png"> </p> `,
        document.getElementById("tiempo").innerHTML =`<p><img class="imagenes" src="Imagenes/tiempo.png"></br>${resultado.current.weather[0].description}</p>`,
        document.getElementById("imagen_dia").innerHTML=`<img class="imagen_dia" src="Imagenes/cielo claro.png">`
        document.getElementById("temp").innerHTML =`<p class="temperatura">${parseInt(resultado.current.temp)}<span class="zgrado ">°C</span></p>`,
        document.getElementById("humedad").innerHTML = `<img class="imagenes" src="Imagenes/humedad.png"><p> ${parseInt(resultado.current.humidity)}% </br><span class="gris">Humidity</span></p>`,
        document.getElementById("presion").innerHTML =`<img class="imagenes" src="Imagenes/presion.png"><p>${parseInt(resultado.current.pressure)}mBar</br><span class="gris">Pressure</span> </p>`,
        document.getElementById("viento").innerHTML =`<img class="imagenes" src="Imagenes/viento.png"><p>${parseFloat(resultado.current.wind_speed).toString().substr(0,3)} Km/h </br><span class="gris">Wind</span></p>`,
        document.getElementById("maxima").innerHTML = `</br><p class="maxmin">${parseInt(resultado.daily[0].temp.max)}°C↑    </br>     ${parseInt(resultado.daily[0].temp.min)}°C↓</p>`,
        document.getElementById("sunrise").innerHTML =`<img class="imagenes" src="Imagenes/sunrise.png"><p>${new Date(resultado.current.sunrise).toString().substr(15,10)}AM</p>`,
        document.getElementById("sunset").innerHTML = `<img class="imagenes" src="Imagenes/sunset.png"><p>${new Date(resultado.current.sunset * 1000).toString().substr(15,10)}PM</p>`
        //TODO:Acompañar con el dia ICON
        
      })}
      apiNextDay= ()=>{
        const url = ` https://api.openweathermap.org/data/2.5/forecast?lat=-34.5708&lon=-58.6243&units=metric&lang=es&exclude=&appid=3308174914784dd48843498552674b5a`
        fetch(url)
          .then(respuesta => respuesta.json())
            .then(resultado => { 
              document.getElementById("diaSiguiente1").innerHTML = `<p>${resultado.list[1].main.temp_min}</br>${resultado.list[1].main.temp_max}</p><p>${new Date(resultado.list[1].dt_txt).toString().substr(0,10)}</p> `
            document.getElementById("diaSiguiente2").innerHTML = `<p>${resultado.list[10].main.temp_min}</br>${resultado.list[10].main.temp_max}</p><p>${new Date(resultado.list[10].dt_txt).toString().substr(0,10)}</p>`
            document.getElementById("diaSiguiente3").innerHTML = `<p>${resultado.list[20].main.temp_min}</br>${resultado.list[20].main.temp_max}</p><p>${new Date(resultado.list[20].dt_txt).toString().substr(0,10)}</p>`}

        
            )
      }

      consultarApi();
      apiNextDay();
