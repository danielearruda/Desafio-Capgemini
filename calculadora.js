/* 1ª Parte - Considere os seguintes critérios fictícios para desenvolver a calculadora de alcance de anúncio:

Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados:

a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
cada compartilhamento nas redes sociais gera 40 novas visualizações.
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)



Crie um script em sua linguagem de programação preferida que receba o valor investido em reais e retorne uma projeção
aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos) */


import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let anuncios = new Array;
let firstRun = false


class Anuncio {
    constructor(nome, inicio, fim, cliente, investDiario) {
        this.nome = nome
        this.inicio = this.formatarData(inicio)
        this.fim = this.formatarData(fim)
        this.investDiario = Number(investDiario)
        this.cliente = cliente
        this.engajamento;
        this.key = [[this.inicio, this.fim], this.cliente]

    }

    formatarData(data) {
        data = data.split("/")
        let ano = [...data[2]]
        if (ano.length !== 4) {
            return data
        } else if (ano.length === 4) {

            for (let i = 0; i < ano.length; i++) {
                ano.shift()
            }
            ano = ano.join("")
            data.pop()
            data.push(ano)
            return data
        }
    }

    calcularData(dataInicio, dataFim) {
        let dia = [dataInicio[0], dataFim[0]]
        let mes = [dataInicio[1], dataFim[1]]
        let ano = [dataInicio[2], dataFim[2]]
        let dias;
        let dif;
        if (dia[0] > dia[1] || mes[0] > mes[1] || ano[0] < ano[1]) {
            return -1
        }
        if (ano[0] !== ano[1]) {
            dif = ano[0] - ano[1]
            dias += 365 * dif

        }
        if (mes[0] !== mes[1]) {
            dif = mes[0] - mes[1]
            dias += 30 * dif
        }
        if (dia[0] !== dia[1]) {
            dif = ano[0] - ano[1]
            dias += 1 * dif
        }
        return dias

    }

    calcularInvestimento() {
        if (this.calcularData(this.inicio, this.fim)) {
            this.investTotal = this.calcularData(this.inicio, this.fim) * this.investDiario
        }
    }
    calcularEngajamento(views) {
        views.totalViews;
        views.clicks = views * 0.12
        views.compartilhamentos = clicks * 0.15
        views.totalViews = share(views.totalViews)
        views.clicks = views.totalViews * 0.12
    }
    share(views, compartilhar) {
        for (let i = 0; i < 4; i++) {
            views += 40
        }
        return views * Math.floor(compartilhar)
    }

}
/*   let viewsInvest = this.investTotal * 30
    let clicks = viewsInvest * 0.12
    let share = clicks * 0.15
    let totalViews = viewsInvest + share * 40 */

async function qualNome() {
    return new Promise((resolve) => {
        rl.question("Qual nome do anuncio? ", (answer) => {
            sair(answer)
            resolve(answer)
        });
    })
}

async function qualCliente() {
    return new Promise((resolve) => {
        rl.question("Qual o nome do cliente? ", (answer) => {
            sair(answer)
            resolve(answer)
        });
    })
}

const qualData = async () => {
    return new Promise((resolve) => {
        rl.question("Entre quais datas deseja iniciar o anuncio? (Separar por vírgulas) ", (answer) => {
            sair(answer)
            resolve(answer)
        });
    })
}

const investimento = async () => {
    return new Promise((resolve) => {
        rl.question("Quanto deseja investir diariamente? ", (answer) => {
            sair(answer)
            resolve(answer)
        });
    })
}
const relatorios = [async () => {
    return new Promise((resolve) => {
        rl.question("Deseja ver relatórios? ", (answer) => {
            sair(answer)
            resolve(answer)
        });
    })
}, () => {
    rl.question("Deseja ver relatórios? (Data de inicio, fim e nome do cliente separados por vírgula) ", (answer) => {

    });
}
]

const perguntar = async () => {
    console.log("Digite '0' a qualquer momento para sair")
    let nomeAnuncio = await qualNome()
    let data = await qualData()
    let cliente = await qualCliente()
    let investDiario = await investimento()
    let anuncio = new Anuncio(data, cliente, nomeAnuncio, investDiario)
    anuncios.push(anuncio)
    firstRun = true

}

const sair = (valor) => {
    if (valor === "0") {
        rl.close()
        console.log("Obrigada por usar meu programa <3")
    }
}

const filtrar = (inicio, fim, cliente) => {
    let lista;
    if (!inicio && !fim & !cliente) {
        return anuncios
    }
    for (let i = 0; i < anuncios.length; i++) {
        let filtroData = anuncios[i].key[0].filter(data => data[0] <= inicio && data[1] >= fim)
        let filtroCliente = anuncios[i].key[1].filter(nomeCliente === cliente)
        if (filtroData && filtroCliente) {
            lista.push(anuncio[i])
        }
    }
    return lista
}


const main = () => {

    if (firstRun) {
        perguntar()
    } else {
        let resp = relatorios[0]
        if (resp) {
            filtrar()
        } else {
            main()
        }
    }
}

main()

/* console.log(anunciotop) */
/* A cada 100 visualizações 12 clicam no anuncio, das que clicam 3 em cada 20 compartilham e cada compartilhamento gera 40 visualizações  */
/* Preço de visualização R$ 1,00 */ /* Anuncio só pode ser compartilhado 3 vezes por cada compartilhação */



/* Crie um sistema que permita o cadastro de anúncios.O anúncio deverá conter os seguintes dados:

nome do anúncio

cliente

data de início

data de término

investimento por dia



O sistema fornecerá os relatórios de cada anúncio contendo:

valor total investido

quantidade máxima de visualizações

quantidade máxima de cliques

quantidade máxima de compartilhamentos



Os relatórios poderão ser filtrados por intervalo de tempo e cliente.


 */


/*

 */