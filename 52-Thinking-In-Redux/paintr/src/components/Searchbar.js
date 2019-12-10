import React from "react";
import {connect} from 'react-redux'
import {changeSearch} from '../redux/actions'

const Searchbar = props => {
  return (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
)}

//searchbar have a prop called value that is mapped to store/state's serachText
const mapStateToProps = (state) => ({value: state.searchText})

//searchbar have a props called onChange that is mapped to a function that dispatches to the store
const mapDispatchToProps = (dispatch) => {
  return {onChange: (newSearchTerm) => dispatch( changeSearch(newSearchTerm) ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
