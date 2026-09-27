let losAngelesElement = document.querySelector(#"los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().format("dddd MM DD YYYY");
losAngelesTimeElement.innerHTML = "4:06:15 <small>AM</small>"
