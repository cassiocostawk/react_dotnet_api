import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <main>
        <div className="bd-masthead mb-3" id="content">
          <div className="container px-4 px-md-3">
            <div className="row align-items-lg-center">
              <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5"></div>
              <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                <h1 className="mb-3">App criado com React JS e .Net.</h1>
                <p className="lead mb-4">
                  Pensando mais a longo prazo, o desenvolvimento contínuo de
                  distintas formas de atuação afeta positivamente a correta
                  previsão do impacto na agilidade decisória.
                </p>

                <div className="d-flex flex-column flex-md-row">
                  <Link to="/clientes" className="btn btn-lg btn-bd-primary mb-3 me-md-3">Cadastrar Clientes</Link>                  
                </div>
                <p className="text-muted mb-0">
                  Versão <strong>v0.0.1</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Body;
