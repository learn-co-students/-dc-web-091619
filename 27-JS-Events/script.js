document.addEventListener("DOMContentLoaded", ()=>{
  //grab the form, then .addEventListener on it
  let form  = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmit)

  //I can code stuff that depends on the DOM being loaded
  let emailElements = document.querySelectorAll(".email")
  emailElements.forEach((element) => {
    element.addEventListener("click", onClickOfEmail)
  })
})

function handleFormSubmit(event){
  event.preventDefault()
  let firstName = document.querySelector("#firstNameInput").value
  let lastName = document.querySelector("#lastNameInput").value
  let email = document.querySelector("#emailInput").value
  addInstructor(firstName, lastName, email)
  //event.target is our form
  event.target.reset()
}

function onClickOfEmail(event){
  alert(`Sending email to ${event.target.innerText}`)
}

function addInstructor(firstName, lastName, email){
  //creating my <tr>
  var trElement = document.createElement("tr")
  var tBodyEl = document.querySelector("tbody")
  tBodyEl.appendChild(trElement) //appending it to the <tbody>

  var firstNameEl = document.createElement("td")//creating the <td>
  firstNameEl.innerText = firstName//updating the <td> to have a innerText of Jane

  var lastNameEl = document.createElement("td")//creating the <td>
  lastNameEl.innerText = lastName//updating the <td> to have a innerText of Jane

  var emailEl = document.createElement("td")//creating the <td>
  emailEl.innerText = email//updating the <td> to have a innerText of Jane
  emailEl.addEventListener("click", onClickOfEmail)

  trElement.append(firstNameEl, lastNameEl, emailEl)//appending to the tbody
}

// function addInstructor(firstName, lastName, email){
//   var tBodyEl = document.querySelector("tbody")
//   tBodyEl.innerHTML = tBodyEl.innerHTML + `<tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }
