import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import axios from "axios";

class Cliente extends Component {
  state = {
    cliente: {
      id: 0,
      nome: "",
      cpf: "",
      dataNascimento: "",
      ativo: true,
    },
  };

  componentDidMount() {
    debugger;
    let id = this.props.id ? this.props.match.params.id : 0;

    if (id) {
      axios.get(`https://localhost:44398/cliente/${id}`).then((response) => {
        const cliente = response.data;
        this.setState({ cliente });
      });
    }
  }

  onChange = (e) => {
    let cliente = this.state.cliente;

    cliente[e.target.name] = e.target.value;
    this.setState({ cliente: cliente });
  };

  // funcao sem acesso ao state
  salvar(cliente) {
    if (cliente && cliente.id && cliente.id > 0) {
      axios.put(`https://localhost:44398/cliente/${cliente.id}`, cliente).then((response) => {
        // window.location.href = "/clientes";  // redirect com refresh
        this.props.history.push("/clientes");
      });
    } else {
      axios.post(`https://localhost:44398/cliente`, cliente).then((response) => {
        this.props.history.push("/clientes");
      });
    }
  }

  // funcao com acesso ao state, com arrow function
  salvar2 = (cliente) => {
    if (this.state.cliente.id > 0) {
      axios.put(`https://localhost:44398/cliente/${this.state.cliente.id}`, this.state.cliente).then((response) => {
        window.location.href = "/clientes";  // redirect com refresh
        //this.props.history.push("/clientes"); // deu erro
      });
    } else {
      axios.post(`https://localhost:44398/cliente`, this.state.cliente).then((response) => {
        this.props.history.push("/clientes");
      });
    }
  };

  cancelar(){
    window.location.href = "/clientes";
  }

  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <div className="bd-masthead mb-3" id="content">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto col-md-8">
                  <h1 className="mb-3">Cliente</h1>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label htmlFor="nome" className="form-label">
                        Nome
                      </label>
                      <input type="text" className="form-control" id="nome" name="nome" value={this.state.cliente.nome} onChange={this.onChange} placeholder="Digite o nome"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cpf" className="form-label">
                        CPF
                      </label>
                      <input type="text" className="form-control" id="cpf" name="cpf" value={this.state.cliente.cpf} onChange={this.onChange} placeholder="Digite o CPF"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="dataNascimento" className="form-label">
                        Data de Nascimento
                      </label>
                      <input type="date" className="form-control" id="dataNascimento" name="dataNascimento" value={this.state.cliente.dataNascimento} onChange={this.onChange} placeholder="Digite o Data de Nascimento"></input>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" className="form-check-input" id="ativo" value={this.state.cliente.ativo ? true : false} onChange={this.onChange}></input>
                      <label className="form-check-label" htmlFor="ativo">
                        Ativo
                      </label>
                    </div>
                    <div>
                      {/* SALVAR - onClick executa a arrow function que executa a função com o parametro */}
                      {/* <button type="button" onClick={() => { this.salvar(this.state.cliente); }} className="btn btn-primary">Salvar</button>  */}
                      {/* SALVAR2 */}
                      <button type="button" onClick={this.salvar2} className="btn btn-primary">Salvar</button>
                      <button type="button" onClick={this.cancelar} className="btn btn-danger">Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
              <hr />
              <div className="col-md-12 order-md-1 text-center text-md-left pr-md-5">
                <p className="text-muted mb-0">
                  Versão <strong>v0.0.1</strong>
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Cliente;
