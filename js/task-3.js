  //               0           1            2          3         4         5         6
// const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "пятниця", "субота",];

// 1 Поточна дата та час

// function getCurrentDateTime() {
//   return new Date();
// }
// console.log(getCurrentDateTime());



// 2 Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).

// function weekend() {
//   let currentDay = "";
//   const date = new Date().getDay(); 



//   if (date === 0 || date === 6) {
//     currentDay = "сьогодні вихідний"
//   } else {
//     currentDay = "Сьогодні робочий день";
//   }
//   return currentDay
// }


// console.log(weekend());




// 3 Напишіть функцію, яка обчислює вік на основі заданої дати народження.



// function calculateAge(dataBirth) {
//   const dateNow = new Date();
//   const difInMs = dateNow - dataBirth;
//   const days = Math.floor(difInMs / (1000 * 60 * 60 * 24));

//   const years = Math.floor(days / 365);

//   return `Вік: ${years} р. (це приблизно ${days} днів)`;
// }

// const myBirth = new Date(2010, 8, 30); 
// console.log(calculateAge(myBirth));



/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);


/////////////////////////////////////


// Напишіть функцію, яка обчислює скільки днів залишилося до наступного Дня народження на основі заданої дати народження.




// function daysUntilNextBirthday(birthMonth, birthDay) {
//   const today = new Date();
//   const currentYear = today.getFullYear();

//   let nextBirthday = new Date(currentYear, birthMonth, birthDay);

//   if (today > nextBirthday) {
//     nextBirthday.setFullYear(currentYear + 1);
//   }

//   const diff = nextBirthday - today;

//   const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

//   return daysLeft;
// }

// console.log(daysUntilNextBirthday(9, 30));



////////////////////////////////////////////////////////




// function weeksUniteMove(targetDate){
//   const today = new Date();
//   const target = new Date(targetDate);

//   const time = target - today


//   const msInWeek = 1000 * 60 * 60 * 24 * 7
  
//   const weeks = Math.floor(time / msInWeek)   


//   return weeks
// }

// console.log("до переїзду залишилося:", weeksUniteMove("2027-09-01"));


//////////////////////////////////////////////////


// Напиши функцію, яка приймає кількість годин на день і каже, скільки це буде хвилин за тиждень (7 днів).

// function weekCodujngMinutes (hoursDay) {
// const hoursPerWeek = hoursDay * 7;

// const minutesWeek = hoursPerWeek * 60

// return minutesWeek
// }
// console.log(weekCodujngMinutes(2));


/////////////////////////////////////////////


// function terminalYear (peapleYear, abonoment){
//   if(peapleYear >= 18 && abonoment === true){
//     return "проходь далі";
//   }else{
//     return "тобі сюда не можна";
//   }
// }

// console.log(terminalYear(23, true));



/////////////////////////////////////////////


// function canIWithdrawMoney(unlockDateString){
// const today = new Date();
// const unlockDate = new Date(unlockDateString)

// if(today >= unlockDate){
//   return "гроші розблоковано"
// }else{
//   return "ще рано"
// }
// }

// console.log(canIWithdrawMoney("2026-2-01"));


////////////////////////////////////////////


// Уяви, що ти розробляєш сайт для оренди квартир у місті, куди ти збираєшся переїхати. Власник квартири дає знижку, якщо людина бронює житло мінімум за 30 днів до заїзду.

// function arendHome(checkInDateString){
// const today = new Date()
// const action = new Date(checkInDateString)

// const diffInMs = action - today;

// const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

// if(daysLeft >= 30){
//   return `до заїзду ${daysLeft} днів залишилося ви отримали знижку`
// }else{
//   return `до заїзду ${daysLeft} днів залишилося ви не отримали знижку`
// }
// }


// console.log(arendHome("2026-05-01"));


////////////////////////////////////////////


// Уяви, що ти приходиш у свій зал, прикладаєш картку, і система має перевірити, чи не закінчився твій абонемент сьогодні.


// function gumAbonoment(abonoment){
// const today = new Date();
// const lastDayAbonoment = new Date(abonoment)

// const diff = lastDayAbonoment - today

// const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));



// if(daysLeft >= 0){
//   return `Абонемент доступний! Залишилося ${daysLeft} днів.`;
// }else{
//   return `Абонемент не доступний. Термін закінчився ${Math.abs(daysLeft)} днів тому.`;
// }
// }

// console.log(gumAbonoment("2026-12-31")); 
// console.log(gumAbonoment("2024-01-01")); 


/////////////////////////////////////

// Уяви, що ти проходиш курс із React. У тебе є дедлайн для здачі фінального проєкту. Якщо ти здаєш його за 3 дні до дедлайну або раніше, ти отримуєш бонусні бали за швидкість.




// function reactProject(project){
//   const today = new Date();
//   const lastDayProject = new Date(project);

//   const diff = lastDayProject - today

//   const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

//   if(daysLeft >= 3){
//     return "ти отримаєш боносні бали"
//   }else{
//     return "ти не отримаєш боносні бали"
//   }
// }
// console.log(reactProject("2026-02-01"));


/////////////////////////////////////////



// Уяви, що піцерія обіцяє доставку за 45 хвилин. Тобі приходить час замовлення (orderTime) і час прибуття кур'єра (arrivalTime). Якщо різниця більше 45 хв — піца безкоштовна.



// function isPizzaFree(orderTimeString, arrivalTimeString){
//   const order = new Date(orderTimeString)
//   const arrive = new Date(arrivalTimeString)

//   const diffInMs = arrive - order;
//   const minutes = diffInMs / (1000 * 60)

//   if(minutes > 45){
//     return "безкоштовно"
//   }else{
//     return "оплатіть замовлення"
//   }
// }

// console.log(isPizzaFree("2026-03-24T15:00:00", "2026-03-24T15:50:00"));



//////////////////////////////////////////////

// Тобі потрібно написати скрипт, який порахує, скільки годин, хвилин та секунд залишилося рівно до півночі сьогоднішнього дня ($00:00:00$ наступної доби).




// function checkTimeToEndOfDay() {
//   const now = new Date(); 
  
//   const tomorrow = new Date();
//   tomorrow.setHours(24, 0, 0, 0); 

//   const diff = tomorrow - now;

//   // Твої нові формули:
//   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//   console.log(`До кінця дня: ${hours}г ${minutes}хв ${seconds}с`);
// }

// checkTimeToEndOfDay(); 




///////////////////////////////////////////////////


// Уяви, що ти відкрив депозит на машину. Тобі треба написати функцію, яка рахує, скільки повних днів минуло з моменту відкриття рахунку до сьогодні.


// const deposit = document.querySelector(".deposit")


// function daysSavings(startDate){
// const today = new Date()
// const start = new Date(startDate)

// const diff = today - start

// const days = Math.floor(diff / (1000 * 60 * 60 * 24));

// return deposit.textContent = days
// }
// console.log(daysSavings("2026-01-01"));



/////////////////////////////////////////////////////




// Уяви, що ти робиш сайт, де доступ до контенту (наприклад, твоїх уроків з IT) платний. Тобі треба написати функцію, яка перевіряє, чи не закінчився термін доступу у користувача.

// function checkPremium(expireDate) {
//   const today = new Date();
//   const expire = new Date(expireDate);


//   if (expire > today) {
//     return "Підписка діє";
//   } else {
//     return "Підписка закінчилась";
//   }
// }

// console.log(checkPremium('2026-05-01'));


// Уяви, що на твоєму сайті діє акція: якщо людина купує щось вночі (з 22:00 до 06:00 ранку), вона отримує знижку 20%. В інший час ціна звичайна.

// function calculatorPrice(basePrice){
//   const now = new Date()
//   const hours = now.getHours()

//  if (hours >= 22 || hours < 6) {
//     const discountPrice = basePrice * 0.8; // -20%
//     return `Нічна знижка! Ціна: ${discountPrice} грн (замість ${basePrice})`;
//   } else {
//     return `Денна ціна: ${basePrice} грн`;
//   }
// }

// console.log(calculatorPrice(1000));



// function calculatorPrice(basePrice){
//   const now = new Date()
//   const hours = now.getHours()

//  if (hours >= 22 || hours < 6) {
//     const discountPrice = basePrice * 0.8; // -20%
//     return `Нічна знижка! Ціна: ${discountPrice} грн (замість ${basePrice})`;
//   } else {
//     return `Денна ціна: ${basePrice} грн`;
//   }
// }

// console.log(calculatorPrice(5000));


// function calculatorPrice(basePrice){
//   const now = new Date()
//   const hours = now.getHours()

//  if (hours >= 22 || hours < 6) {
//     const discountPrice = basePrice * 0.8; // -20%
//     return `Нічна знижка! Ціна: ${discountPrice} грн (замість ${basePrice})`;
//   } else {
//     return `Денна ціна: ${basePrice} грн`;
//   }
// }

// console.log(calculatorPrice(6000));


const first = document.querySelector('.firs-input')
const second = document.querySelector('.second-input')
const save = document.querySelector('.save')

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

save.addEventListener("click", () => {
const newContacts = {
  firstName: first.value,
  lastName: second.value,
}
contacts.push(newContacts)

localStorage.setItem("contacts", JSON.stringify(contacts))

first.value = ""
second.value = ""
})

//////////////////////////////////////////


const timerRef = document.querySelector('.timer')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const clear = document.querySelector(".clear")


let value = 0;
let id = null


start.addEventListener("click", () => {
 if (id) return;
  timerRef.textContent = value
  value ++
 id = setInterval(() => {
  timerRef.textContent = value
  value ++
  }, 1000)
})

stop.addEventListener("click", () => {
  clearInterval(id)
  id = null;
})

clear.addEventListener("click", () => {
  value = 0;
  timerRef.textContent = 0
  clearInterval(id)
  id = null;
})