import img9gag from "./public/assets/img/9gag.svg";
import imgMeowed from "./meowed.svg";
import imgBarked from "./barked.svg";
import imgNathanwpylestrangeplanet from "./nathanwpylestrangeplanet.svg";
import imgWawawicomics from "./wawawicomics.svg";
import imgRespondeai from "./respondeai.svg";
import imgFilomoderna from "./filomoderna.svg";
import imgMemeriagourmet from "./memeriagourmet.svg";

export default function Stories(){
    return(
        <div class="stories">
            <div class="story">
            <div class="imagem">
                <img src={img9gag} />
            </div>
            <div class="usuario">
                9gag
            </div>
            </div>

            <div class="story">
            <div class="imagem">
                <img src={imgMeowed} />
            </div>
            <div class="usuario">
                meowed
            </div>
            </div>

            <div class="story">
            <div class="imagem">
                <img src={imgBarked} />
            </div>
            <div class="usuario">
                barked
            </div>
            </div>

            <div class="story">
            <div class="imagem">
                <img src={imgNathanwpylestrangeplanet} />
            </div>
            <div class="usuario">
                nathanwpylestrangeplanet
            </div>
            </div>

            <div class="story">
            <div class="imagem">
                <img src={imgWawawicomics} />
            </div>
            <div class="usuario">
                wawawicomics
            </div>
            </div>
            
            <div class="story">
            <div class="imagem">
                <img src={imgRespondeai} />
            </div>
            <div class="usuario">
                respondeai
            </div>
            </div>

            <div class="story">
            <div class="imagem">
                <img src={imgFilomoderna} />
            </div>
            <div class="usuario">
                filomoderna
            </div>
            </div>

            <div class="story">
            <div class="imagem">
                <img src={imgMemeriagourmet} />
            </div>
            <div class="usuario">
                memeriagourmet
            </div>
            </div>

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>    
    )
}