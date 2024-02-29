class Computador{
    tipo //desktop ou notebook
    processador // ex Ryzen 5
    video // Integrado ou Dedicado
    armazenamento // GB de memória
    memoriaRam // GB de memória
    ssd // True or false

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
    this.tipo = tipo 
    this.processador = processador
    this.video = video
    this.armazenamento = armazenamento
    this.memoriaRam = memoriaRam
    this.ssd = ssd
    }
}

let tipoComp = prompt("Qual tipo do seu computador, desktop ou notebook")
let tipoProcessador = prompt("Qual seu processador")
let tipoVideo = prompt("Qual seu tipo de video, dedicado ou integrado")
let tipoArmazenamento = prompt("Quantos GB você tem de armazenamento")
let tipoMemoriaRam = prompt("Quantos GB de memória ram você tem")
let tipoSSD = prompt("Você tem SSD no computador ")

let comp = new Computador(tipoComp, tipoProcessador, tipoVideo, tipoArmazenamento, tipoMemoriaRam, tipoSSD)
console.log(comp)