/*  The following is a template provided by: http://www.jsmadeeasy.com/javascripts/Page%20Details/Last%20Modified/index.htm

This page was last updated on: Wednesday, March 20, 2024.
© JSMadeEasy.com. All Rights Reserved. 

{<CENTER>
<SCRIPT LANGUAGE="JavaScript">
<!-- Begin
var days = new Array(8);
days[1] = "Sunday";
days[2] = "Monday";
days[3] = "Tuesday";
days[4] = "Wednesday";
days[5] = "Thursday";
days[6] = "Friday";
days[7] = "Saturday";
var months = new Array(13);
months[1] = "January";
months[2] = "February";
months[3] = "March";
months[4] = "April";
months[5] = "May";
months[6] = "June";
months[7] = "July";
months[8] = "August";
months[9] = "September";
months[10] = "October";
months[11] = "November";
months[12] = "December";
var dateObj = new Date(document.lastModified)
var wday = days[dateObj.getDay() + 1]
var lmonth = months[dateObj.getMonth() + 1]
var date = dateObj.getDate()
var fyear = 1900 + dateObj.getYear()
document.write(wday + ", " + lmonth + " " + date + ", " + fyear)
// End -->
</SCRIPT>
</CENTER> } */

function updateLastModifiedDate() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var dateObj = new Date(document.lastModified);
    var weekDay = days[dateObj.getDay()];
    var currentMonth = months[dateObj.getMonth()];
    var date = dateObj.getDate();
    var year = dateObj.getFullYear(); // Directly get the full year
    
    // Construct the date string
    var dateString = `${weekDay}, ${currentMonth} ${date}, ${year}`;
    
    // Update the HTML content of the #lastModified span
    document.getElementById("lastModified").textContent = dateString;
}

// Call the function when the window has finished loading
window.onload = updateLastModifiedDate;



