import React from 'react';
import ReactDOM from 'react-dom';
import CatCategoryRow from './CatCategoryRow.jsx';


class CatTable extends React.Component{

  GetType(category){
    const type=this.props.kitties.filter(cat =>{
      return cat.category ===category;
  });



    const rows=type.map( cat=>{

      const style={
        color:this.props.color,
      };
      if (!cat.likesKids){
        style.color="red";
      }
      return(

              <tr key={cat.name} style={style}>
                <td>{cat.name}</td>
                <td>{cat.age}</td>
              </tr>
      )
    });

return rows;
  }
      render(){
        const resultMale = this.GetType('male');
        const resultFemale = this.GetType('female');
    return <tbody>
                <CatCategoryRow category="male"/>
                {resultMale}
                <CatCategoryRow category="female"/>
                {resultFemale}
           </tbody>



}
}
export default CatTable;
