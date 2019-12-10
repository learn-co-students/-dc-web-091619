
function updatePaintingInfo(information){
  return {type:"UPDATE_PAINTING_INFO", payload: information}
}

function changeSearch(newSearchTerm){
  return {type: "CHANGE_SEARCH", payload: newSearchTerm}
}

export {updatePaintingInfo, changeSearch}
