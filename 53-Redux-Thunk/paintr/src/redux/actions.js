// action creators

const URL = "http://localhost:3000/paintings"

function fetchedPaintings(paintings) {
  return {type: "FETCH_PAINTINGS", payload: paintings}
}

function fetchingPaintings() {
  return (dispatch) => {
    fetch(URL)
  .then(resp => resp.json())
  .then(result => 
     { dispatch(fetchedPaintings(result))}
    )
  } 
}

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function vote(paintingId) {
  return { type: "INCREASE_VOTES", payload: paintingId };
}

function updatePainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday, paintingId}
  };
}

function updatingPainting(info){
  console.log("paintingId", info)
  return (dispatch) => {
    fetch(`${URL}/${info.paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: info.title,
        artist: {
          name: info.name,
          birthday: info.birthday,
          deathday: info.deathday
        }
      })
    })
    .then(resp => resp.json())
    .then(result => dispatch(updatePainting(info)))
  }
}

export { changeSearchText, vote, updatePainting, fetchedPaintings, fetchingPaintings, updatingPainting };
