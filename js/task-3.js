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




function daysUntilNextBirthday(birthMonth, birthDay) {
  const today = new Date();
  const currentYear = today.getFullYear();

  let nextBirthday = new Date(currentYear, birthMonth, birthDay);

  if (today > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const diff = nextBirthday - today;

  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return daysLeft;
}

console.log(daysUntilNextBirthday(9, 30));




