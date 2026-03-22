// setInterval(() => {
//    const date = new Date()
//    console.log(date);  
// }, 1000);





// const date = new Date(2026, 4, 10, 12,12,12)


// setInterval(() => {
//     const currentDate = new Date()
//     console.log(date - currentDate);
// }, 1000)

// console.log(date);  

// console.log(currentDate);  

// console.log(date - currentDate);






//const date3 = Date.now() //unix час, кількість мілісекунд пройденого часу з моменту 1 січня 1970 року

// console.log(date3);



   //               0           1            2          3         4         5         6
// const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "пятниця", "субота",];

// const months = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень",];

// const currentDate = new Date() // поточна дата

// console.log(currentDate);
// console.log("отримати рік",currentDate.getFullYear());
// console.log("отримати день", days[currentDate.getDay()]);  // get day повертає 6 поточний день тижжня
// console.log("отримати сьогоднішню дату", currentDate.getDate());
// console.log("отримати місяць", months[currentDate.getMonth()]);
// console.log("отримати час", currentDate.getHours());
// console.log("отримати хвилини", currentDate.getMinutes());
// console.log("отримати секунди", currentDate.getSeconds()); 
// }, 1000);









// const year = document.querySelector(".yer");
// const day = document.querySelector(".day");
// const date = document.querySelector(".date");
// const month = document.querySelector(".month");
// const hours = document.querySelector(".hours");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");


// const happyDays = new Date(2027, 0, 1, 0,0,0)
// console.log(happyDays);


// setInterval(() => {
// const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "пятниця", "субота",];
// const months = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень",];


// const currentDate = new Date() // поточна дата
// const time = (happyDays - currentDate);


// const day1 = Math.floor(time / (1000 * 60 * 60 * 24));

// const hours1 = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// const secs = Math.floor((time % (1000 * 60)) / 1000);



// // console.log(currentDate);
// // console.log("отримати рік",currentDate.getFullYear());
// // console.log("отримати день", days[currentDate.getDay()]);  // get day повертає 6 поточний день тижжня
// // console.log("отримати сьогоднішню дату", currentDate.getDate());
// // console.log("отримати місяць", months[currentDate.getMonth()]);
// // console.log("отримати час", currentDate.getHours());
// // console.log("отримати хвилини", currentDate.getMinutes());
// // console.log("отримати секунди", currentDate.getSeconds()); 


// // year.textContent = currentDate.getFullYear();
// // day.textContent = day1;
// // date.textContent = currentDate.getDate();
// // month.textContent = months[currentDate.getMonth()];
// // hours.textContent = hours1;
// // minute.textContent = mins;
// // second.textContent = secs;

// }, 1000);






/* time — це різниця між цільовою датою і поточною в мілісекундах 
*/

// Дні: ділимо на мілісекунди в одній добі
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// Години: беремо залишок від днів і ділимо на мілісекунди в одній годині
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// Хвилини: беремо залишок від годин і ділимо на мілісекунди в одній хвилині
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// Секунди: беремо залишок від хвилин і ділимо на 1000 мілісекунд
// const secs = Math.floor((time % (1000 * 60)) / 1000);






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const data = new Date()
// console.log(data);






const year = document.querySelector(".yer");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const hours = document.querySelector(".hours");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "пятниця", "субота",];
const months = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень",];


const happyDays = new Date(2026, 2,24,10,29,30)

const id = setInterval(() => {
const currentDate = new Date();
const time = happyDays - currentDate;


if(time < 0){
   clearInterval(id)
   return;
}


const daysLeft = Math.floor(time / (1000 * 60 * 60 * 24));
const hours1 = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);


// console.log("отримати рік",currentDate.getFullYear());
// console.log("отримати день", days[currentDate.getDay()]);  // get day повертає 6 поточний день тижжня
// console.log("отримати сьогоднішню дату", currentDate.getDate());
// console.log("отримати місяць", months[currentDate.getMonth()]);
// console.log("отримати час", currentDate.getHours());
// console.log("отримати хвилини", currentDate.getMinutes());
// console.log("отримати секунди", currentDate.getSeconds()); 




day.textContent = daysLeft;
hours.textContent = hours1;
minute.textContent = mins;
second.textContent = secs;
}, 1000);


























