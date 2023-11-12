import Logo from "../../imgs/logo_inclui+.png";
import "./sass.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="section">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <div className="section">
          <h3 className="text">Navegação</h3>
          <ul className="ul">
            <li className="li">
              <a href="/">Página inicial</a>
            </li>
            <li className="li">
              <a href="company"> Empresa </a>
            </li>
            <li className="li">
              <a href="places"> Viajem </a>
            </li>
            <li className="li">
              <a href="about"> Sobre </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3 className="text">Contato</h3>
          <p className="paragraph">Email: exemplo@inclui+.com</p>
          <p className="paragraph">Telefone: (99) 9999-9999</p>
        </div>
      </div>
      <div className="copy">
        <p className="paragraph">
          Todos os direitos reservados a Inclui+ &copy; - 2023
        </p>
      </div>
    </div>
  );
}
