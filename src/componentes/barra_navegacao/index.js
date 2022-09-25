import './../../Main.scss';
function BarraNavegacao() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="index.html">
          <img src="https://bulma.io/images/placeholders/1280x960.png" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu is-active">
        <div className="navbar-start">
          <a className="navbar-item" href="index.html">
            Início
          </a>

          <a className="navbar-item" href="contato.html">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}

export default BarraNavegacao;