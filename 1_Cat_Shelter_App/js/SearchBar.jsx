import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{


  render (){
    return <header>
              <form>
                <label><input type="text" value={this.props.filterText}
                onChange={this.props.onTextChange}/></label><br/>
                
                <label><input type="checkbox" checked={this.props.likesKids} value="1"
                onChange={this.props.onCheckboxChange}/> Only show cats that like kids</label>
              </form>
          </header>

}
}
export default SearchBar;
