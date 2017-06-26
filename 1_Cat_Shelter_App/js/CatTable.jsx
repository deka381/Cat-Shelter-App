import React from 'react';
import ReactDOM from 'react-dom';


class CatTable extends React.Component{


  render (){
    return   <tbody>
                <tr>
                <th colSpan="2"> male </th>
                </tr>
                <tr>
                <td>filemon</td>
                <td>20</td>
                </tr>
                <tr>
                <td>Fidel</td>
                <td>4</td>
                </tr>
                <tr>
                <th colSpan="2">female</th>
                </tr>
                <tr>
                <td>Yude</td>
                <td>4</td>
                </tr>
            </tbody>


}
}
export default CatTable;
