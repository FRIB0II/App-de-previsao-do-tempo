const apiKey = "9f62989dc6654cfa3812cbdeb44e1310";

function colocarDadosNaTela(dados){ 
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`; 
    document.querySelector(".temperatura").innerHTML = `${Math.floor(dados.main.temp)} °C`; 
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`; 
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
