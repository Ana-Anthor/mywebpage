console.log("Hello World");
console.log("Hello");
const myanimallist = [];
let animal = { name: 'Rambo', animal: 'Hund', type: 'Bichon Frise', age: 9 };
myanimallist.push(animal);
animal = { name: 'Pelle', animal: 'Katt', type: 'Huskatt', age: 7 };
myanimallist.push(animal);
console.log("Name: ", animal.name);

console.log(myanimallist);
console.log("Goodbye");

function ShowCurtain(curtainNumber, prize) {
    alert("You opened curtain number " + curtainNumber + ", You won " + prize);
}
