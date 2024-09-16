// Variáveis
let nomeHeroi = "Wouk"
let xp = 5500
let nivelDoHeroi = ""

//Calcuando o nivel com if-else
if(xp <= 1000){
    nivelDoHeroi = "Ferro"
} else if (xp <= 2000){
    nivelDoHeroi = "Bronze"
} else if (xp <= 5000){
    nivelDoHeroi = "Prata"
} else if (xp <= 7000){
    nivelDoHeroi = "Ouro"
} else if (xp <= 8000){
    nivelDoHeroi = "Platina"
} else if (xp <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (xp <= 10000){
    nivelDoHeroi = "Imortal"
} else {
    nivelDoHeroi = "Radiante"
}

//Mensagem de nivel do Heroi
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelDoHeroi + ".")