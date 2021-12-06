import img9gag from "./assets/9gag.svg";
import imgMeowed from "./assets/meowed.svg";
import imgBarked from "./assets/barked.svg";
import imgNathanwpylestrangeplanet from "./assets/nathanwpylestrangeplanet.svg";
import imgWawawicomics from "./assets/wawawicomics.svg";
import imgRespondeai from "./assets/respondeai.svg";
import imgFilomoderna from "./assets/filomoderna.svg";
import imgMemeriagourmet from "./assets/memeriagourmet.svg";

export default function Story(){

const avatares = [
    {imagem:img9gag, renderName: '9gag' }, 
    {imagem: imgMeowed, renderName: 'Meowed'}, 
    {imagem: imgBarked, renderName: 'Barked'}, 
    {imagem: imgNathanwpylestrangeplanet, renderName: 'Nathanwpylestrangeplanet'}, 
    {imagem: imgWawawicomics,  renderName: 'Wawawicomics'},
    {imagem: imgRespondeai,  renderName: 'Respondeai'},
    {imagem: imgFilomoderna, renderName: 'Filomoderna'},
    {imagem: imgMemeriagourmet, renderName: 'Memeriagourmet'}
];

    return(
        <div class = "stories"> 
        
                    {avatares.map(path => 
                    <div class="story">
                        <div class="imagem">
                        <img src = {path.imagem}/>
                        </div>
                        <div class="usuario">
                        <p>{path.renderName}</p>
                    </div> 
                    <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                  </div>
                    </div> 
                    )}
        </div>

    )
}