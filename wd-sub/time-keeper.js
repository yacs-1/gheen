let initDate;
let timeDiff = 0;
let hasInitDate = false;

cookieArr = document.cookie.split(";"); 

for(const element of cookieArr){
if (element.split("=")[0] == "init-date"){
hasInitDate = true;
initDate = element.split("=")[1];
}
}

if (!hasInitDate) {
document.cookie = "init-date=" + new Date() + "; max-age=3153600000";
} else {
let now = new Date();
document.cookie = "new-date" + now + "; max-age=3153600000";
timeDiff = now.getTime() - initDate.getTime(); //gets diff in milleseconds from first access until now
}

let timeSpent = document.getElemendById("time-spent";)
let numHours = Math.floor(timeDiff / 360000);
let numMins = Math.floor((timeDiff % 360000) * 60);
let diffStr = numHours + ":" + numMins;
timeSpent.innerText = diffStr;
