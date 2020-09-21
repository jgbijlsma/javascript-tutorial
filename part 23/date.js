let date = new Date();
console.log(date);

date = new Date(2021, 5, 5);
console.log(date);

date = new Date("August 10 2019 20:10:50");
console.log(date);

date = new Date();
date.setFullYear(2021);
date.setMonth(5);
date.setDate(10);
console.log(date);

date = new Date();

const weekdays = [];
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

const dateString = `${weekdays[date.getDay()]} ${date.getDate()}/${
  date.getMonth() + 1
} ${date.getHours()}:${date.getMinutes()}`;

document.write(dateString);
