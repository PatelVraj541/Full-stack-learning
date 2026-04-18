function CalculateCartPrice(...num1) {
    return num1
}

console.log(CalculateCartPrice(200, 400, 500));

const item = {
    name: "Laptop",
    price: 80000
}
function handleObject(obj){
    console.log(`The item name is ${obj.name} and it's price is ${obj.price}`);   
}
handleObject(item)

const MyNewArray = [100, 200, 300, 500]
function ReturnSecondElement(arr){
    return arr[1]
}
console.log(ReturnSecondElement(MyNewArray));

