import imgBad from "./assets/bad.vibes.memes.svg";
import imgChibidart from "./assets/chibirdart.svg";
import imgAdorable from "./assets/adorable_animals.svg";
import imgRazoes from "./assets/razoesparaacreditar.svg";
import imgSmall from "./assets/smallcutecats.svg";


export default function Sugestoes(){

    const usuarios = [
      {imagem: imgBad, renderName: 'bad.vibes.memes' }, 
      {imagem: imgChibidart, renderName: 'chilbirdart'}, 
      {imagem: imgAdorable, renderName: 'adorable_animals'}, 
      {imagem: imgRazoes, renderName: 'razoesparaacreditar'}, 
      {imagem: imgSmall,  renderName: 'smallcutecats'}
  ];
        return(
    <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
              <div>Ver tudo</div>
            </div>
                {usuarios.map((path) =>
              <div class="sugestao">
                <div class="usuario">
                    <img src={path.imagem}/>
                </div>
                <div class="texto">
                  <div class="nome">{path.renderName}</div>
                  <div class="razao">Segue você</div>
                </div>
                <div class="seguir">
                  Seguir
                </div>
                </div>
              )} 
    </div>
        )
    }