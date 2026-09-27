let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss[<small>]A[</small>]",
);

let singaporeElement = document.querySelector("#singapore");
let singaporeDateElement = singaporeElement.querySelector(".date");
let singaporeTimeElement = singaporeElement.querySelector(".time");
let singaporeTime = moment().tz("Asia/Singapore");

singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
singaporeTimeElement.innerHTML = singaporeTime.format(
  "h:mm:ss[<small>]A[</small>]",
);
