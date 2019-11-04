function fetchHobbies(){
    fetch('http://localhost:3000/hobbies')
    .then(res => res.json())
    .then(hobbiesArray => {
      hobbiesArray.forEach(hobby => renderHobby(hobby))
    })
}

function renderHobby(hobby){//taking a hobby and rendering it to the DOM
    let ul = document.querySelector("#hobbies")
    let li = document.createElement("li")
    li.innerText = `${hobby.name}: ${hobby.description}`
    ul.appendChild(li)
}