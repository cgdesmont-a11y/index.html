"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Guitel Desmont
   Date:  11/22/2026

*/
/*Execute the Function to run and display the countdown clock*/
runClock();
setInterval("runClock()", 1000);

/*Function to run and Display the Countdown Clock*/
function runClock() {

   /* Store the current date and time*/
var currentDay = new Date();
var dateStr = currentDay.toLocaleString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */

document.getElementById("dateNow").innerHTML = currentDay.toLocaleString();
document.getElementById("timeNow").innerHTML = timeStr;
/* Calculate the days until January 1st */
var newYear = new Date(" January 1, 2027 ");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

/* Calculate the hours left in the curret day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
/* Calculate the minutes and seconds left in the current hour */
var minutesLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minutesLeft);
document.getElementById("secs").textContent = Math.floor(secondsLeft);

window.alert("Welcome to Tulsa");


}
