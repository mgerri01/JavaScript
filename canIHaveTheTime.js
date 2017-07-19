var hour = 7;
var minute = 15;
var period = "PM";
var timeOfDay ="";

if (period == "AM") {
timeOfDay="In the morning"
}
else {
  timeOfDay="In the evening"
}
if (minute>30) {
  console.log("Almost ", hour+1, timeOfDay);
}
else {
    console.log("Just after", hour, timeOfDay);
}
