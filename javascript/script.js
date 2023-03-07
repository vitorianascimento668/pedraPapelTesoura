let jogada_escolha = document.querySelectorAll(".mao")
let imagens_container = document.querySelector (".imagens_container")
let joquepo_container = document.querySelector(".joquepo_container")
let limpar_jogo = document.querySelector(".limpar_jogo_placar")
let textorobo = document.querySelector(".robo_azul")
let textovoce = document.querySelector(".vc_ver")
let lado_esquerdo_voce = document.querySelector(".joquepo1")
let lado_direito_robo = document.querySelector(".joquepo2")
let quemGanhou = document.querySelector(".quemGanhou")
let imagem = document.querySelectorAll(".imagem")
let imagem_robo = document.querySelectorAll(".imagem_robo")
let novarN = document.querySelector(".jogaNovamente")
let data_num,data_voce,data_robo, v_sorteado, valor_voce, valor_robo, varvoce = "", varrobo = "", contador = 0, contador2=0, robo_pontos = 0, voce_pontos = 0, cont_quemGanhou=0


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
    lado_esquerdo_voce.src = "./imagens/pedra_esquerda-removebg-preview.png"
        setTimeout(()=>{
            imagem[contador].src = "./imagens/ilustracao-de-desenho-animado-com-a-mao-fechada-pop-art-ilustracao_244307-535-removebg-preview.png"
            imagem[contador].style.display = "flex"
            contador++
        },'100')
   }
  
   if (valor_voce == 1){
    lado_esquerdo_voce.src = "./imagens/Meu_projeto.png"
    setTimeout(()=>{
            imagem[contador].src = "./imagens/dsBuffer.bmp.png"
            imagem[contador].style.display = "flex"
            contador++
    },'100')
   }
   if (valor_voce == 2){
    lado_esquerdo_voce.src = "./imagens/tesoura_esquerda-removebg-preview.png"
    setTimeout(()=>{
        imagem[contador].src = "./imagens/mao-com-dois-dedos-para-cima-vitoria-ou-simbolo-de-paz-letra-v-em-gesto-de-tesoura-de-linguagem-gest.png"
            imagem[contador].style.display = "flex"
            contador++
    },'100')
    if (contador == 10){
        contador = 0
    }
   }
   

}
function valorescolhido_robo(valor_robo) {
    
    if(valor_robo == 0){
        lado_direito_robo.src = "./imagens/pedra_direita-removebg-preview.png"
        setTimeout(()=>{
            imagem_robo[contador2].src = "./imagens/ilustracao-de-desenho-animado-com-a-mao-fechada-pop-art-ilustracao_244307-535-removebg-preview.png"
            imagem_robo[contador2].style.display = "flex"
            contador2++
        },'100')
        
    }
    if(valor_robo == 1){
        lado_direito_robo.src = "./imagens/papel_direito-removebg-preview.png"
        setTimeout(()=>{
            imagem_robo[contador2].src = "./imagens/dsBuffer.bmp.png"
            imagem_robo[contador2].style.display = "flex"
            contador2++
        },'100')
    }
    if(valor_robo == 2){
        lado_direito_robo.src = "./imagens/tesoura_direita-removebg-preview.png"
        setTimeout(()=>{
            imagem_robo[contador2].src = "./imagens/mao-com-dois-dedos-para-cima-vitoria-ou-simbolo-de-paz-letra-v-em-gesto-de-tesoura-de-linguagem-gest.png"
            imagem_robo[contador2].style.display = "flex"
            contador2++
        },'100')
        
    }
    if (contador2 == 10){
        contador2 = 0
    }

    QuemGanhou()
}
function QuemGanhou(){
        v_sorteado = Number(v_sorteado)
        data_num = Number(data_num)
        if ( v_sorteado == data_num){
            quemGanhou.innerHTML= "EMPATOOU !"
        }
        if (v_sorteado == 0 && data_num == 1 ){
            quemGanhou.innerHTML= "VOCÊ GANHOU !"
            voce_pontos++
            textovoce.innerHTML = `VOCÊ: ${voce_pontos}`
        }
        if (v_sorteado == 1 && data_num == 0 ){
            quemGanhou.innerHTML= "ROBO GANHOU !"
            robo_pontos++
            textorobo.innerHTML = `ROBO: ${robo_pontos}`
        }
        if (v_sorteado == 2 && data_num == 0 ){
            quemGanhou.innerHTML= "VOCÊ GANHOU !"
            voce_pontos++
            textovoce.innerHTML = `VOCÊ: ${voce_pontos}`
            
        }
        if (v_sorteado == 0 && data_num == 2 ){
            quemGanhou.innerHTML= "ROBO GANHOU !"
            robo_pontos++
            textorobo.innerHTML = `ROBO: ${robo_pontos}`
        }
        if (v_sorteado == 1 && data_num == 2 ){
            quemGanhou.innerHTML= "VOCÊ GANHOU !"
            voce_pontos++
            textovoce.innerHTML = `VOCÊ: ${voce_pontos}`
        }
        if (v_sorteado == 2 && data_num == 1 ){
            quemGanhou.innerHTML= "ROBO GANHOU !"
            robo_pontos++
            textorobo.innerHTML = `ROBO: ${robo_pontos}`
        }
       
        cont_quemGanhou ++
        if (cont_quemGanhou == 10){
            if(voce_pontos > robo_pontos){
                quemGanhou.innerHTML = "PARABENS!! VOCÊ GANHOU O JOGO"
            }
            if (robo_pontos > voce_pontos){
                quemGanhou.innerHTML = "SINTO MUITO, O ROBO GANHOU E VOCÊ PERDEU !!!"
            }
            if (robo_pontos == voce_pontos){
                quemGanhou.innerHTML = "O PLACAR DA JOGO FICOU EMPATADO!!!"

            }
            robo_pontos = 0
            voce_pontos = 0
        }


}
function  novarNovamente(){
    novarN.addEventListener('click',()=>{
        imagens_container.style.display = "flex"
        joquepo_container.style.display = "none"
    })
}
function limpa(){
    limpar_jogo.addEventListener("click",()=>{
        
    })
   
}
novarNovamente()
jogada_voce()
limpa()


