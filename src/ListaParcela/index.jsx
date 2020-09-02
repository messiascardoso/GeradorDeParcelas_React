import React, { Component } from 'react';
import './style.css';

class ListaParcela extends Component{

    constructor(props){
        super(props)
        console.log('props', this.props)
    }
    render(){
        return(
           <table className="gerador-parcela">
               <thead>
                    <tr>
                        <th>Parcela</th>
                        <th>Taxa</th>
                        <th>valor</th>
                    </tr>
               </thead>
               <tbody>
                    {this.props.listaParcelas.map((parcela, index )=> 
                    <tr key={index}>
                        <td>{parcela.parcela}</td>
                        <td>{parcela.taxa}</td>
                        <td>{parcela.valor}</td>
                    </tr>
                    )
                    }
               </tbody>
           </table> 
       )}
}

export default ListaParcela;