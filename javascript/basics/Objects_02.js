const tinderUser = new Object();

tinderUser.id = 123456789;
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "john@example.com",
    fullname: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

console.log(regularUser.fullname); // { userFullName: { firstName: 'John', lastName: 'Doe' } }
console.log(regularUser.fullname.userFullName); // { firstName: 'John', lastName: 'Doe' }
console.log(regularUser.fullname.userFullName.firstName); // John

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 

const obj3 = {...obj1, ...obj2};
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
       id: 1,
       email: "e1@example.com" 
    },
    {
       id: 2,
       email: "e2@example.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));
