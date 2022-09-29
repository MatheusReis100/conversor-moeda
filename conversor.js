const converter = document.getElementById('btn');
const limparMoeda = document.getElementById('limparMoeda');

const conversaoDeMoeda = () =>{
    const opcaoMoeda1 = document.getElementById('opcaoMoeda1').value;
    const opcaoMoeda2 = document.getElementById('opcaoMoeda2').value;
    const corversaoDe = document.getElementById('corversaoDe');
    const valorConvertido = document.getElementById('valorConvertido');
    const conversaoPara = document.getElementById('conversaoPara');
    const resultadoConversao = document.getElementById('resultadoConversao');
    const valorMoeda = document.getElementById('valorMoeda').value;

    let real = 1;

    if (valorMoeda == '') {
        alert('Por favor preencha o campo!');
    }else{
        corversaoDe.innerHTML = ` ${opcaoMoeda1}`;
        conversaoPara.innerHTML = ` ${opcaoMoeda2}`;
        
    }

    const calcularMoedasReal = () =>{
    if (opcaoMoeda1 == 'Dolar' && opcaoMoeda2 == 'Real') {
        fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorReal = Number((corpo.USDBRL.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` R$${valorReal}`;
        });

        valorConvertido.innerHTML = ` $ ${valorMoeda}`;
        
        }

    if (opcaoMoeda1 == 'Euro' && opcaoMoeda2 == 'Real') {
        fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorReal = Number((corpo.EURBRL.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` R$${valorReal}`;
        });

        valorConvertido.innerHTML = ` ${valorMoeda} €`;

        }
      
    if (opcaoMoeda1 == 'Libra' && opcaoMoeda2 == 'Real') {
        fetch('https://economia.awesomeapi.com.br/json/last/GBP-BRL')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorReal = Number((corpo.GBPBRL.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` R$${valorReal}`;
        });

        valorConvertido.innerHTML = ` £ ${valorMoeda}`;
        }

    if (opcaoMoeda1 == 'Real' && opcaoMoeda2 == 'Real') {
            let calculo = valorMoeda;
            valorConvertido.innerHTML = ` R$${valorMoeda}`;
            resultadoConversao.innerHTML = ` R$${calculo}`;
            }      

    }

    const calcularMoedasDolar = () =>{
        if (opcaoMoeda1 == 'Real' && opcaoMoeda2 == 'Dolar') {
            fetch('https://economia.awesomeapi.com.br/json/last/BRL-USD')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorDolar = Number((corpo.BRLUSD.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` $ ${valorDolar}`;
            });

            valorConvertido.innerHTML = ` R$${valorMoeda}`;

        }

       if (opcaoMoeda1 == 'Euro' && opcaoMoeda2 == 'Dolar') {
            fetch('https://economia.awesomeapi.com.br/json/last/EUR-USD')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorDolar = Number((corpo.EURUSD.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` $ ${valorDolar}`;
            });

            valorConvertido.innerHTML = ` ${valorMoeda} €`;

            }

         if (opcaoMoeda1 == 'Libra' && opcaoMoeda2 == 'Dolar') {
            fetch('https://economia.awesomeapi.com.br/json/last/GBP-USD')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorDolar = Number((corpo.GBPUSD.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = `$ ${valorDolar}`;
            });

            valorConvertido.innerHTML = ` £ ${valorMoeda}`;
            }
            
        if (opcaoMoeda1 == 'Dolar' && opcaoMoeda2 == 'Dolar') {
            let calculo = valorMoeda;
            valorConvertido.innerHTML = ` $ ${valorMoeda}`;
            resultadoConversao.innerHTML = ` $ ${calculo}`;
            }      
    }

    const calcularMoedasLibra = () =>{
        if (opcaoMoeda1 == 'Real' && opcaoMoeda2 == 'Libra') {
            fetch('https://economia.awesomeapi.com.br/json/last/BRL-GBP')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorLibra = Number((corpo.BRLGBP.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` R$${valorLibra}`;
            });

            valorConvertido.innerHTML = ` £ ${valorMoeda}`;

            }

        if (opcaoMoeda1 == 'Dolar' && opcaoMoeda2 == 'Libra') {
            fetch('https://economia.awesomeapi.com.br/json/last/USD-GBP')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorLibra = Number((corpo.USDGBP.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` $ ${valorLibra}`;
            });

            valorConvertido.innerHTML = ` £ ${valorMoeda}`;

            }

        if (opcaoMoeda1 == 'Euro' && opcaoMoeda2 == 'Libra') {
            fetch('https://economia.awesomeapi.com.br/json/last/EUR-GBP')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorLibra = Number((corpo.EURGBP.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` ${valorLibra} €`;
            });

            valorConvertido.innerHTML = ` £ ${valorMoeda}`;

            }

        if (opcaoMoeda1 == 'Libra' && opcaoMoeda2 == 'Libra') {
            let calculo = valorMoeda;
            valorConvertido.innerHTML = ` £ ${valorMoeda}`;
            resultadoConversao.innerHTML = ` £ ${calculo}`;
            }      
            
    }

    const calcularMoedasEuro = () =>{
        if (opcaoMoeda1 == 'Real' && opcaoMoeda2 == 'Euro') {
            fetch('https://economia.awesomeapi.com.br/json/last/BRL-EUR')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorEuro = Number((corpo.BRLEUR.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` ${valorEuro} €`;
            });

            valorConvertido.innerHTML = ` R$ ${valorMoeda}`;

            }

        if (opcaoMoeda1 == 'Dolar' && opcaoMoeda2 == 'Euro') {
            fetch('https://economia.awesomeapi.com.br/json/last/USD-EUR')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorEuro = Number((corpo.USDEUR.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` ${valorEuro} €`;
            });

            valorConvertido.innerHTML = ` $ ${valorMoeda}`;

            }

        if (opcaoMoeda1 == 'Libra' && opcaoMoeda2 == 'Euro') {
            fetch('https://economia.awesomeapi.com.br/json/last/GBP-EUR')
            .then( response => {
                return response.json();
            }).then(corpo => {
                valorEuro = Number((corpo.GBPEUR.bid * valorMoeda).toFixed(2));
                resultadoConversao.innerHTML = ` ${valorEuro} €`;
            });

            valorConvertido.innerHTML = ` £ ${valorMoeda}`;

            }

        if (opcaoMoeda1 == 'Euro' && opcaoMoeda2 == 'Euro') {
            let calculo = valorMoeda;
            valorConvertido.innerHTML = ` ${valorMoeda} €`;
            resultadoConversao.innerHTML = ` ${calculo} €`;
            }          
    }

    calcularMoedasEuro();
    calcularMoedasLibra();
    calcularMoedasDolar();
    calcularMoedasReal();

}

const limparEspacos = () =>{
    window.location.reload();
}

converter.addEventListener('click', conversaoDeMoeda);
limparMoeda.addEventListener('click', limparEspacos);