import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{


  render (){
    return <header>
              <form>
                <label><input type="text"/></label><br/>
                <label><input type="checkbox"/> Only show cats that like kids</label>
              </form>
          </header>

}
}
export default SearchBar;
