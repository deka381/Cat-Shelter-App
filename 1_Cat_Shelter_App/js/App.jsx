import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import CatHead from './CatHead.jsx';
import CatTable from "./CatTable.jsx";


class App extends React.Component{
constructor(){
  super(...arguments);
  this.state={
    filterText:'',
    likesKids:false,
    color:"green",
  }
}

handleTextChange=event=>{
  this.setState({
    filterText:event.target.value,
  });
}

handleCheckChange = event =>{
  this.setState({
    likesKids:event.target.checked,
  });
}
  render (){
    const kitties= this.props.kitties.filter(cat =>{
      if (this.state.likesKids && !cat.likesKids){
      return false;
    }

      if( this.state.filterText.length > 0 && cat.name.indexOf(this.state.filterText)===-1){
      return false;
    }


    return true;
    })


    return <section>
              <SearchBar onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckChange}  filterText={this.state.filterText} likesKids={this.state.likesKids}/>
          <section>
          <table>
              <CatHead/>
              <CatTable kitties={kitties} color={this.state.color}/>

          </table>
          </section>
          </section>
        }
      }
      export default App;
