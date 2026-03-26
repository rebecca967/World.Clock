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

updateTime();
setInterval(updateTime, 1000);