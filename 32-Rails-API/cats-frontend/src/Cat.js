function fetchCats(){
    fetch('http://localhost:3000/cats')
        .then(res => res.json())
        .then(catsArray => {
            catsArray.forEach(cat => renderCat(cat))
        })
}

function renderCat(cat){
    //render cat to the DOM
    console.log(cat)
    let catContainer = document.querySelector("#cats")
    let catDiv = document.createElement("div")
    catContainer.appendChild(catDiv)
    catDiv.classList.add("ui", "card")
    catDiv.innerHTML = `
        <div class="image">
            <img src="${cat.image}">
        </div>
        <div class="content">
            <a class="header">${cat.name}</a>
            <div class="meta">
            <span class="date">${cat.breed} owned by ${cat.parent_name}</span>
        </div>
        <ul class="extra-content">
        </ul>`
    let extraContent = catDiv.querySelector(".extra-content")
    cat.hobbies.forEach(hobby => {
        let li = document.createElement("li")
        extraContent.append(li)
        li.innerText = hobby.name
    })
}

function createCat(event){
    event.preventDefault()
    fetch('http://localhost:3000/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": event.target.name.value,
            "breed": event.target.breed.value,
            "image": event.target.image.value, 
            'parent_name': event.target.parent.value  
        })
    })
    .then(res => res.json())
    .then(newCat => {
        // console.log("new cat, who di?", newCat)
        renderCat(newCat)
    })
}