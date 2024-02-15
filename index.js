let ited = {
    1: 2,
    3: 4,
    Serge: "Albert",
    'Russia': "Moskow",
}
console.log(ited);
console.log(ited.Russia);
console.log(ited[1]);

let sunday = "Russia"
console.log(ited[sunday]);

let a1 = { "one": 15, "two": 16, "five": 20 };
let Task1 = document.getElementById("Funktion")
console.log(Task1);
Task1.onclick = () => {
    let Container1 = document.getElementById("Container1")
    Container1.innerHTML = a1.two
}

let a2 = { "one": "hello", "two": "mahai", "five": "hi" };
let Task2 = document.getElementById("Funktion1")
console.log(Task2);
Task2.onclick = () => {
    let Container2 = document.getElementById("Container2")
    Container2.innerHTML = a2.five
}

let a3 = { "Привет": 1 };
let Task3 = document.getElementById("Funktion2")
console.log(Task3);
Task3.onclick = () => {
    let Container3 = document.getElementById("Container3")

    console.log(Object.entries(a2));
    Object.entries(a2).forEach((element) => {
        console.log(element);
        Container3.innerHTML += element[0] + " " + element[1] + "<br>"
    })
}

let arr = [1, 2, 3]
arr.forEach(element => {
    console.log(element);
});