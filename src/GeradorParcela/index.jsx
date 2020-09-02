import React, { Component } from "react";
import ListaParcela from "../ListaParcela";

class GeradorParcelo extends Component {
  constructor() {
    super();
    this.state = {
      valorProduto: "",
      valorTaxa: "",
      numeroParcelas: "",
      listaParcelas: []
    };
  }

  onHandleInput(event) {
    const key = event.target.id;
    this.setState({ [key] : event.target.value });
  }

  calcularParcelas(event){
      event.preventDefault();
      let { valorProduto, valorTaxa, numeroParcelas } = this.state;
      numeroParcelas = Number(numeroParcelas);
      numeroParcelas++;
      const _listaParcelas = [];  
      while (numeroParcelas > 1 ) {
          numeroParcelas--;
          let valorSemJuros = Number(valorProduto) / numeroParcelas;
          let valorComJuros = (valorSemJuros + (valorSemJuros * (Number(valorTaxa)/ 100)));
          _listaParcelas.push({ parcela: numeroParcelas, taxa: valorTaxa,  valor: valorComJuros.toFixed(2) });
      }
      this.setState({
        listaParcelas: _listaParcelas 
      })
  }

  render() {
    return (
      <div className="">
        <form onSubmit={ (event)=> this.calcularParcelas(event) }>
            <h1>Gerador de Parcela</h1>
            <div>
                <div>
                    <label htmlFor="valorProduto">Valor produto: </label>
                    <input
                        type="text"
                        id="valorProduto"
                        onChange={ (event)=> this.onHandleInput(event) }
                        value={ this.state.valorProduto }
                    />
                </div>
                <div>
                    <label htmlFor="valorTaxa">Taxa mês: </label>
                    <input 
                        type="text"
                        id="valorTaxa"
                        onChange={ (event)=> this.onHandleInput(event) } 
                        value={ this.state.valorTaxa }
                    />
                </div>
                <div>
                <label htmlFor="numeroParcelas">Numero e parcelas: </label>
                <input 
                    type="text" 
                    id="numeroParcelas"
                    onChange={ (event)=> this.onHandleInput(event) } 
                    value={ this.state.numeroParcelas }
                    />
            </div>
            </div>
            <button>Calcular</button>
        </form>  
        <ListaParcela listaParcelas={this.state.listaParcelas}> </ListaParcela>
      </div>
    );
  }
}

export default GeradorParcelo;