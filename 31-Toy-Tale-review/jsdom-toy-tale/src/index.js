let addToy = false
const toyUrl = 'http://localhost:3000/toys'
let likesObj = {}

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })
  fetchToys()
  form = getToyForm()
  form.addEventListener('submit', addNewToy)
})

function fetchToys() {
  fetch(toyUrl)
  .then(response => response.json())
  .then(toyData => toyData.forEach( toy => displayToy(toy) )) 
}

function displayToy(toy) {
  const toyDiv = document.createElement('div')
  toyDiv.className = 'card'

  const toyHeader = document.createElement('h2')
  toyHeader.innerText = toy.name
  const toyImage = document.createElement('img')
  toyImage.classList.add('toy-avatar')
  toyImage.src = toy.image
  const toyPara = document.createElement('p')
  toyPara.innerText = `${toy.likes} Likes`
  const likesButton = document.createElement('button')
  likesButton.addEventListener('click', addLikes)
  likesButton.id = `toy-${toy.id}`
  likesButton.classList.add('like-btn')
  likesButton.innerText = "Like <3"

  toyDiv.append(toyHeader, toyImage, toyPara, likesButton)

  getToyCollection().append(toyDiv)
}

// function that return DOM nodes
function getToyCollection() {
  return document.getElementById('toy-collection')
}

function getToyForm() {
  return document.getElementsByClassName('add-toy-form')[0]
}

function addNewToy(event) {
  event.preventDefault()
  const newName = event.target.name.value
  const newImage = event.target.image.value

  fetch(toyUrl, {
    "method": 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: newName,
      image: newImage,
      likes: 100
    })
  })
  .then(response => response.json())
  .then(newToy => displayToy(newToy) )
}

function addLikes() {
  const toyId = event.target.id.split('-')[1]
  
  let newLikes = parseInt(event.target.previousElementSibling.innerText.split(' ')[0])
  newLikes++
  fetch(`${toyUrl}/${toyId}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify( { likes: newLikes})
  })
  .then(response => response.json())
  .then(result => updateToy(result))
}

function updateToy(toy) {
  const toyButton = document.getElementById(`toy-${toy.id}`)
  pTag = toyButton.previousElementSibling
  pTag.innerText = `${toy.likes} Likes`
}
