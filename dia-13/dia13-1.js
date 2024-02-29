class Carro{
    Nome //equipe
    Potencia //n° de cavalos
    VelocidadeMaxima 
    Aceleracao // 0-100 do carro

    constructor(Nome, Potencia, VelocidadeMaxima, Aceleracao){
    this.Nome = Nome
    this.Potencia = Potencia
    this.VelocidadeMaxima = VelocidadeMaxima
    this.Aceleracao = Aceleracao
    }

    TempoMedio(distancia) {
        let tempo = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return tempo
    }
}


class Corrida{
    Nome // nome do local da corrida 
    Tipo // F1, StockCar, Rally
    Distancia // total em metros da corrida 
    Participantes // um array de objetos da classe carro
    Vencedor // nome da equipe que ganhou

    constructor(Nome, Tipo, Distancia, Participantes, Vencedor ){
        this.Nome = Nome
        this.Tipo = Tipo
        this.Distancia = Distancia
        this.Participantes = []
        this.Vencedor = ""
    }


    AchandoVencedor(){
        let MenorTempo = this.Participantes[0].TempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let i = 1; i < this.Participantes.length; i++) {
            let tempo = this.Participantes[i].TempoMedio(this.Distancia)
            if (tempo < MenorTempo) {
                MenorTempo = tempo
                vencedor = this.Participantes[i]
            }
            
        }
        return this.Vencedor = vencedor
    }
    
    MostrarVencedor(){
        console.log("O vencedor é " + this.Vencedor.Nome)
    }


}



let corrida = new Corrida ("Monza", "Formula 1", 50000)

corrida.Participantes[0] = new Carro ("BMW", 300, 240, 4)
corrida.Participantes[0] = new Carro ("Meca", 350, 280, 4)
corrida.Participantes[0] = new Carro ("P1", 500, 300, 3)
corrida.Participantes[0] = new Carro ("f1", 700, 380, 2.3)

corrida.AchandoVencedor()
corrida.MostrarVencedor()
    




