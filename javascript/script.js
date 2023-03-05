let jogada_escolha = document.querySelectorAll(".mao")
let data_num,data_voce,data_robo, v_sorteado

function jogada_voce(){
jogada_escolha.forEach((jogada)=>{
    jogada.addEventListener("click",()=>{
        data_num = jogada.getAttribute("data-num")
    })
})
}

function jogada_robo(){
    v_sorteado = Math.random()
}

jogada_voce()
jogada_robo()