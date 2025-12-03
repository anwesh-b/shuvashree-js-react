console.log("Hello")

let x = 1;
const z = 1;

console.log(x,z);

x = 2;

console.log(x,z);


const a = [1,2,3];
const names = ["Ram", "Shyam", "Hari"];

const b = { name: "Ram", age: 20}
const c = {  ...b, name: "Shyam"}
const d = b;
d.name = "Hari";
const e = {...c, name: "Gita"}
const copyOfC = {...c}

console.log(a)
console.log("start")
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log("end")


for(let name of names){
    console.log(name)
}

for(let index in names){
    console.log(index)
    console.log(names[index])
}

for (let i=0; i< names.length; i++){
    console.log(names[i])
}


const myButton = document.getElementById("my-button");

const myList = document.getElementById("list-id");

myButton.addEventListener("click", function(){
    console.log("clicked")
    const newElement = document.createElement("li");
    newElement.textContent = "New Item";
    myList.appendChild(newElement);
});
