




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
        reject("Андрій прибіг першим")
    }, 2000)
})


const ostap = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Остап прибіг першим")
    }, 5000)
})


const katerina = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Катерина прибіг першим")
    }, 1500)
})



Promise.race([andrij, ostap, katerina])
.then((winner) => {
console.log("переможець" , winner);
})
.catch((error) => {
console.log("error" ,error);
console.log();
})












































































































































































































































































































































































































































































































































































































































































































































































































