let jogada_escolha = document.querySelectorAll(".mao")
let imagens_container = document.querySelector (".imagens_container")
let joquepo_container = document.querySelector(".joquepo_container")
let lado_esquerdo_voce = document.querySelector(".joquepo1")
let lado_direito_robo = document.querySelector(".joquepo2")
let quadrim_voce = document.querySelectorAll(".quadradim")
let quadrim_robo = document.querySelectorAll(".quadrim_baixo")
let data_num,data_voce,data_robo, v_sorteado, valor_voce, valor_robo, varvoce = "", varrobo = "", contador = 0, img_voce, img_robo, contador2=0


function jogada_voce(){
jogada_escolha.forEach((jogada)=>{
    jogada.addEventListener("click",()=>{
        data_num = jogada.getAttribute("data-num")
        valorescolhido_voce(data_num)
        jogada_robo()

        imagens_container.style.display = "none"
        joquepo_container.style.display = "flex"
        
    })
})
}

function jogada_robo(){
    v_sorteado = Math.floor(Math.random() * (3-0)+ 0)
    valorescolhido_robo(v_sorteado)
}
function valorescolhido_voce(valor_voce) {
   if (valor_voce == 0){
    lado_esquerdo_voce = "./imagens/pedra_direita-removebg-preview.png"
        setTimeout(()=>{
            img_voce.src = "./imagens/ilustracao-de-desenho-animado-com-a-mao-fechada-pop-art-ilustracao_244307-535-removebg-preview.png"
            quadrim_voce[contador].appendChild(img_voce)
            contador++
        },'100')
   }
   if (valor_voce == 1){
    lado_esquerdo_voce.src = "./imagens/Meu projeto.png"
    setTimeout(()=>{
        img_voce.src = "./imagens/dsBuffer.bmp.png"
        quadrim_voce[contador].appendChild(img_voce)
        contador++
    },'100')
   }
   if (valor_voce == 2){
    lado_esquerdo_voce.src = "./imagens/tesoura_esquerda-removebg-preview.png"
    setTimeout(()=>{
        img_voce.src = "./imagens/mao-com-dois-dedos-para-cima-vitoria-ou-simbolo-de-paz-letra-v-em-gesto-de-tesoura-de-linguagem-gest.png"
        quadrim_voce[contador].appendChild(img_voce)
        contador++
    },'100')
    if (contador == 9){
        contador = 0
    }
   }
}
function valorescolhido_robo(valor_robo) {
    if(valor_robo == 0){
        lado_direito_robo.src = "./imagens/pedra_direita-removebg-preview.png"
        setTimeout(()=>{
            img_robo.src = "./imagens/ilustracao-de-desenho-animado-com-a-mao-fechada-pop-art-ilustracao_244307-535-removebg-preview.png"
            quadrim_robo[contador2].appendChild(img_robo)
            contador2++
        },'100')
        
    }
    if(valor_robo == 1){
        lado_direito_robo.src = "./imagens/papel_direito-removebg-preview.png"
        setTimeout(()=>{
            img_robo.src = "./imagens/dsBuffer.bmp.png"
            quadrim_robo[contador2].appendChild(img_robo)
            contador2++
        },'100')
    }
    if(valor_robo == 2){
        lado_direito_robo.src = "./imagens/tesoura_direita-removebg-preview.png"
        setTimeout(()=>{
            img_robo.src = "./imagens/mao-com-dois-dedos-para-cima-vitoria-ou-simbolo-de-paz-letra-v-em-gesto-de-tesoura-de-linguagem-gest.png"
            quadrim_robo[contador2].appendChild(img_robo)
            contador2++
        },'100')
        
    }
}
function criando_img (){
    img_voce = document.createElement("img")
    img_voce.classList.add("img_pequenininha")
    img_robo = document.createElement("img")
    img_robo.classList.add("img_pequenininha")
    
}
jogada_voce()
criando_img ()
