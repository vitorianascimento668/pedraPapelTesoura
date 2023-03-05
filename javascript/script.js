let jogada_escolha = document.querySelectorAll(".mao")
let imagens_container = document.querySelector (".imagens_container")
let joquepo_container = document.querySelector(".joquepo_container")
let data_num,data_voce,data_robo, v_sorteado, valor_voce, valor_robo, varvoce = "", varrobo = ""


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
   console.log(valor_voce)
}
function valorescolhido_robo(valor_robo) {
   console.log(valor_robo)
}

jogada_voce()
