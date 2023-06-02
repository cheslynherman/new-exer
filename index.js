let person = []
function addToArray(){
    let input = document.getElementById("array").value
    person.push (input)
    document.getElementById("newArray").innerHTML= person
}

let people= []
function addToObject(){
    let name = document.getElementById("firstName").value
    let surname = document.getElementById("lastName").value
    people.push (name, surname)
    document.getElementById("result").innerHTML= people
}

// let person= [
//     {name: "Grant"},
//     {name: "Nigel"},
//     {name: "Henry"}
// ]