import imgMeowed from "./assets/meowed.svg";
import imgGato from "./assets/gato-telefone.svg";
import imgRespondeai from "./assets/respondeai.svg";
import imgBarked from "./assets/barked.svg";
import imgDog from "./assets/dog.svg";
import imgAdorable from "./assets/adorable_animals.svg"

export default function Post(){
    const post = [
        {imagem: imgMeowed, imagemPost: imgGato, nomePerfil: 'meowed', imagemCurtida: imgRespondeai},
        {imagem: imgBarked, imagemPost: imgDog, nomePerfil: 'barked', imagemCurtida: imgAdorable}
    ];
    return(
        
        <div class="posts">
            {post.map(postagem=> 
                <div class="post">

            
                <div class="topo">
                    <div class="usuario">
                    <img src={postagem.imagem} />
                    {postagem.nomePerfil}
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                    <img src={postagem.imagemPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={postagem.imagemCurtida} />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>)}
        </div>
    )}