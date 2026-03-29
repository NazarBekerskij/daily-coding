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




////////////////////////////////////////////////////////////











// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.



const delay = ms => {
  const promise = new Promise((resolve) => {
    
    setTimeout(() => {
      resolve(ms);
    }, ms);
    
  });

  return promise;
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); 
delay(1000).then(logger); 
delay(3000).then(logger);
delay(1500).then(logger);
































