import MenuPrincipal from "../componentes/MenuPrincipal/MenuPrincipal";
import NavBar from "../componentes/NavBar";
import Titulo from "../componentes/Titulo";
import ImageFundo from '../imagens/img-empresa01.jpg';

export default function Empresa(){
    return(
        <div>
            <NavBar/>
            <MenuPrincipal
                background={ImageFundo}
            />

            <Titulo
                titulo="Faça parte da mudança, seja nosso parceiro!"
            />
        </div>
    )
}