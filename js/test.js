const makeOrder = (dish) => {

const promise = new Promise((onRes, onRej) => {
     const random = Math.random() > 0.5 // true | false

      setTimeout(() => {
        if(random){
            onRes(`Ось ваше блюдо ${dish}`)
        }else{
            onRej("Ви залишетись голодні, продукити закінчилися")
        }
    }, 1000)
})

return promise
} 



makeOrder("періжок").then(onMakeOrderSucses).catch(onMakeOrderError)


function onMakeOrderSucses(result) {
    console.log("виклик функції onMakeOrderSucses:" ,result);
    
}


function onMakeOrderError(error) {
    console.log("виклик функції onMakeOrderError:" ,error);
    
}








































