document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is loaded')
  console.log('This app uses Semantic UI for styling, see link in html')
  fetchHobbies()
  fetchCats()
  document.querySelector("form").addEventListener('submit', createCat)
})


