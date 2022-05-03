import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bd-footer py-5 mt-5 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">
                  Designed by Cássio
                </li>
              </ul>
            </div>                    
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
