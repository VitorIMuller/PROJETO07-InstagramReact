import imgCatana from "./assets/catanacomics.svg";
import Sugestoes from "./Sugestoes";



function Users(props){
  return (

      <div class="usuario">
        <img src={imgCatana} />
        <div class="texto">
        <strong>catanacomics</strong>
          Catana
        </div>
      </div>
    )
}

export default function Sidebar(){
    return(
        <div class="sidebar">
            <Users /> 
            <Sugestoes />
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>
          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}