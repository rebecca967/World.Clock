function updateTime() {
  // Los Angeles
  let laElement = document.querySelector("#los-angeles");
  let laDate = laElement.querySelector(".date");
  let laTime = laElement.querySelector(".time");

  let laNow = moment().tz("America/Los_Angeles");
  laDate.innerHTML = laNow.format("MMMM Do YYYY");
  laTime.innerHTML = laNow.format("h:mm:ss [<small>]A[</small>]");

  // Edmonton
  let edElement = document.querySelector("#edmonton");
  let edDate = edElement.querySelector(".date");
  let edTime = edElement.querySelector(".time");

  let edNow = moment().tz("America/Edmonton");
  edDate.innerHTML = edNow.format("MMMM Do YYYY");
  edTime.innerHTML = edNow.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
    let selectedOption = event.target.selectedOptions[0]; 
    let cityTimeZone = selectedOption.value; 
    let cityDisplayName = selectedOption.text; 

    if (!cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    if (!cityTimeZone) {
        document.querySelector("#cities").innerHTML = "";
        return;
    }
     
    let citiesElement = document.querySelector("#cities");

    let cityTime = moment().tz(cityTimeZone);

    citiesElement.innerHTML = ` 
        <div class="city">
            <div>
                <h2>${cityDisplayName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
    `;
  }
  
updateTime();
setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");
let citiesElement = document.querySelector("#cities")
let cityInterval;

citiesSelectElement.addEventListener("change", updateCity);