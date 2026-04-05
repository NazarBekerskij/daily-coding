




//                         успішне  | не успішне
// const promise = new Promise((resolve, reject) => {   

// setTimeout(() => {
// const random = Math.random() > 0.5 // true | false

// if(random){
//     resolve("Yesssssssss")
// }else{
//     reject("Nooooooooo")
// }
    
// },1000) 

    
// })

// console.log(promise);

// promise
// .then((res) => {console.log(res)}) //успішне
// .catch((error) => {console.log(error)}) //помилка
// .finally(() => {console.log("виконуєця завжди не залежно від результату");
// }) 





////////////////////////////////////////////////////////////////////////////////////////////////////////


// const makeOrder = (dish, onSucses, onError) => {
//     const random = Math.random() > 0.5 // true | false
//     setTimeout(() => {
//         if(random){
//             onSucses(`Ось ваше блюдо ${dish}`)
//         }else{
//             onError("Ви залишетись голодні, продукити закінчилися")
//         }
//     }, 1000)
    
// }



// makeOrder("періжок", onMakeOrderSucses, onMakeOrderError)


// function onMakeOrderSucses(result) {
//     console.log("виклик функції onMakeOrderSucses:" ,result);
    
// }


// function onMakeOrderError(error) {
//     console.log("виклик функції onMakeOrderError:" ,error);
    
// }







//////////////////////////////////////////////////////////////////////////////////////

//                         успішон  | не успішно(помилка)
// const andrij = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Aндрій створив розмітку header")
//     }, 2000)
// })


// const ostap = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Остап нестилізував розмітку")
//     }, 5000)
// })


// const katerina = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Катерина запушила код на git hub")
//     }, 1500)
// })



// Promise.all([andrij, ostap, katerina])
// .then((result) => {
// console.log("result" ,result);
// console.log("проект виконано успішно");
// })
// .catch((error) => {
// console.log(error);
// console.log();
// })




// const andrij = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Андрій прибіг першим")
//     }, 2000)
// })


// const ostap = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Остап прибіг першим")
//     }, 5000)
// })


// const katerina = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Катерина прибіг першим")
//     }, 1500)
// })



// Promise.race([andrij, ostap, katerina])
// .then((winner) => {
// console.log("переможець" , winner);
// })
// .catch((error) => {
// console.log("error" ,error);
// console.log();
// })





const andrij = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Андрій прибіг першим")
    }, 2000)
})


const ostap = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("остап Не побігт")
    }, 3000)
})


const katerina = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Катерина прибіг першим")
    }, 1500)
})



Promise.allSettled([andrij, ostap, katerina])
.then((winner) => {
console.log("переможець" , winner);
})
.catch((error) => {
console.log("error" ,error);
console.log();
})





// Promise.all
// Promise.allSettled
// Promise.any
// Promise.race




//////////////////////////////////////////////////////////



// "Порівняння кількох промісів"



// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.



// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.



// function delayedPromise (value, ms){
//    return new Promise((resolve, reject) => {
//     const ms = Math.floor(Math.random() * (5000 - 1000) + 1000)
//     setTimeout(() => {
//         resolve(`проміс ${value} виконався за ${ms} мілісекунд`)
//     }, ms)
//    })
// }



// const arrayPromise = [
//     delayedPromise("promise1", 1000), 
//     delayedPromise("promise2", 2000),
//     delayedPromise("promise3", 3000), 
//     delayedPromise("promise4", 4000), 
//     delayedPromise("promise5", 5000), 
// ];





// Promise.all(arrayPromise).then((result) => {console.log(result);
// })


////////////////////////////////////////////////////////


// Завдання 2

// "Змагання промісів"



// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.



// Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.





function randomDelay(value) {
    return new Promise((resolve) => {
        const ms = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
        
        setTimeout(() => {
            resolve(`Проміс ${value} виграв забіг за ${ms} мс`);
        }, ms);
    });
}

const arrayPromis = [
    randomDelay("1"), 
    randomDelay("2"),
    randomDelay("3"), 
    randomDelay("4"), 
    randomDelay("5"), 
];

Promise.race(arrayPromis)
    .then((winner) => {
        console.log("Результат змагання:");
        console.log(winner);
    })
    .catch((error) => console.error("Помилка:", error));













































































































































































































































































































































































































































































































































































































































































































































































