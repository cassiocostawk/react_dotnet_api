import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

class Clientes extends Component {
 

  state = {
    
    clientes: [],
  };

  componentDidMount() {
    this.lista();
  }

  lista = () => {
    // Faz uma requisição a um usuarío com um ID expecifico   
    const axios = require('axios');

    axios
      .get("https://localhost:44398/cliente")
      .then((response) => {
        // manipula o sucesso da requisição
        const clientes = response.data;
        this.setState({ clientes });
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .then(function () {
        // sempre será executado
      });
  };

  excluir = (cliente) => {
    if (window.confirm("Deseja realmente excluir?")) {
      axios.delete(`https://localhost:44398/cliente/${cliente.id}`).then((response) => {
        this.lista();
      });
    }
  };

  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <div className="bd-masthead mb-3" id="content">
            <div className="container px-4 px-md-3">
              <div className="row align-items-lg-center">
                <div className="col-12 mx-auto col-md-4 order-md-2 col-lg-5"></div>
                <div className="col-md-12 order-md-1 col-lg-7 text-center text-md-start">
                  <h1 className="mb-3">Clientes</h1>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Ativo</th>
                        <th>
                          <span className="badge rounded-pill bg-primary">{this.state.clientes.length}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.clientes.map((cliente, index) => (
                        <tr key={index}>
                          <td>{cliente.nome}</td>
                          <td>{cliente.cpf}</td>
                          <td>{cliente.dataNascimento}</td>
                          <td>{cliente.id}</td>
                          <td>
                            <Link className="btn btn-outline-primary" to={`/clientes/${cliente.id}`}>
                              Editar
                            </Link>
                          </td>
                          <td>
                            {/* usar arrow function senao ele vai executar esse método ao renderizar 1x para cada registro */}
                            <button className="btn btn-outline-danger" onClick={() => {this.excluir(cliente) }} >Excluir</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Link className="btn btn-outline-primary" to={`/clientes/novo`}>
                    Novo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Clientes;
