let person = []
function addToArray(){
    let input = document.getElementById("array").value
    person.push (input)
    document.getElementById("newArray").innerHTML= person

    
    console.log()
}

let people= []
function addToObject(){
    // let name = document.getElementById("firstName").value
    // let surname = document.getElementById("lastName").value
    // let age = document.getElementById("ages").value
    // people.push (name, surname, age)

    let person = {
        name: document.getElementById("firstName").value, 
        surname: document.getElementById("lastName").value,
        age: document.getElementById("ages").value
    }
    people.push(person);
    
    let table = document.querySelector(".table");
    table.innerHTML= "";
    people.forEach((data)=> {
        table.innerHTML +=
        `
        <tbody>
        <tr>
          <td>${data.name}</td>
          <td>${data.surname}</td>
          <td>${data.age}</td><br>
        </tr>
        </tbody>`

        localStorage.setItem("name", JSON.stringify(people));
    })
}

