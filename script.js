var estados ={
"estados":[
  {"sigla":"AC", "nome":"Acre", "regiao":"Norte", "areaUrbanizada": 49.5, "areaTotal": 164123.040, "porcTotal": 1.92},
  {"sigla":"AL", "nome":"Alagoas", "regiao":"Nordeste", "areaUrbanizada": 202.1, "areaTotal": 27778.506, "porcTotal": 0.33},
  {"sigla":"AP", "nome":"Amapá", "regiao":"Norte", "areaUrbanizada": 69.3, "areaTotal": 142828.521, "porcTotal": 1.68},
  {"sigla":"AM", "nome":"Amazonas", "regiao":"Norte", "areaUrbanizada": 395.1, "areaTotal": 1559159.148, "porcTotal": 18.31},
  {"sigla":"BA", "nome":"Bahia", "regiao":"Nordeste", "areaUrbanizada": 762.9, "areaTotal": 564733.177, "porcTotal": 6.63},
  {"sigla":"CE", "nome":"Ceará", "regiao":"Nordeste", "areaUrbanizada": 471.2, "areaTotal": 148920.472, "porcTotal": 1.74 },
  {"sigla":"DF", "nome":"Distrito Federal", "regiao":"Centro-Oeste", "areaUrbanizada": 621.2, "areaTotal": 5779.999, "porcTotal": 0.07},
  {"sigla":"ES", "nome":"Espírito Santo", "regiao":"Sudeste", "areaUrbanizada": 427.6, "areaTotal": 46095.583, "porcTotal": 0.54},
  {"sigla":"GO", "nome":"Goiás", "regiao":"Centro-Oeste", "areaUrbanizada": 1113.6, "areaTotal": 340111.783, "porcTotal": 3.99},
  {"sigla":"MA", "nome":"Maranhão", "regiao":"Nordeste", "areaUrbanizada": 512.3, "areaTotal": 331937.450, "porcTotal": 3.90},
  {"sigla":"MT", "nome":"Mato Grosso", "regiao":"Centro-Oeste", "areaUrbanizada": 519.7, "areaTotal": 903366.192, "porcTotal": 10.61},
  {"sigla":"MS", "nome":"Mato Grosso do Sul", "regiao":"Centro-Oeste", "areaUrbanizada": 441.3, "areaTotal": 357145.532, "porcTotal": 4.19},
  {"sigla":"MG", "nome":"Minas Gerais", "regiao":"Sudeste", "areaUrbanizada": 2525.8, "areaTotal": 586522.122, "porcTotal": 6.89},
  {"sigla":"PA", "nome":"Pará", "regiao":"Norte", "areaUrbanizada": 730.6, "areaTotal": 1247954.666, "porcTotal": 14.65},
  {"sigla":"PB", "nome":"Paraíba", "regiao":"Nordeste", "areaUrbanizada": 319.6, "areaTotal": 56585.000, "porcTotal": 0.66},
  {"sigla":"PR", "nome":"Paraná", "regiao":"Sul", "areaUrbanizada": 1603.7, "areaTotal": 199307.922, "porcTotal": 2.34},
  {"sigla":"PE", "nome":"Pernambuco", "regiao":"Nordeste", "areaUrbanizada": 622.3, "areaTotal": 98311.616, "porcTotal": 1.15},
  {"sigla":"PI", "nome":"Piauí", "regiao":"Nordeste", "areaUrbanizada": 277.1, "areaTotal": 251577.738, "porcTotal": 2.95},
  {"sigla":"RJ", "nome":"Rio de Janeiro", "regiao":"Sudeste", "areaUrbanizada": 1479.9, "areaTotal": 43780.172, "porcTotal": 0.51},
  {"sigla":"RN", "nome":"Rio Grande do Norte", "regiao":"Nordeste", "areaUrbanizada": 269.6, "areaTotal": 52811.047, "porcTotal": 0.62},
  {"sigla":"RS", "nome":"Rio Grande do Sul", "regiao":"Sul", "areaUrbanizada": 1647, "areaTotal": 281730.223, "porcTotal": 3.31},
  {"sigla":"RO", "nome":"Rondônia", "regiao":"Norte", "areaUrbanizada": 226.1, "areaTotal": 237590.547, "porcTotal": 2.79},
  {"sigla":"RR", "nome":"Roraima", "regiao":"Norte", "areaUrbanizada": 40.6, "areaTotal": 224300.506, "porcTotal": 2.63},
  {"sigla":"SC", "nome":"Santa Catarina", "regiao":"Sul", "areaUrbanizada": 878.2, "areaTotal": 95736.165, "porcTotal": 1.12},
  {"sigla":"SP", "nome":"São Paulo", "regiao":"Sudeste", "areaUrbanizada": 4971, "areaTotal": 248222.362, "porcTotal": 2.91},
  {"sigla":"SE", "nome":"Sergipe", "regiao":"Nordeste", "areaUrbanizada": 118.7, "areaTotal": 21915.116, "porcTotal": 0.26},
  {"sigla":"TO", "nome":"Tocantins", "regiao":"Norte", "areaUrbanizada": 99.6, "areaTotal": 277720.520, "porcTotal": 3.26}
]
};

//{"sigla":"", "nome":"", "regiao":"", "areaUrbanizada": , "areaTotal":, "porcTotal": },

var tabela = document.getElementById("tabela");

for(var i = estados.estados.length-1; i>=0; i--){
var header = tabela.createTHead();
var row = header.insertRow (1);
var sigla = row.insertCell (0);
var nome = row.insertCell (1);
var regiao = row.insertCell (2);

if(i % 2 == 1) row.style["background-color"] = "#def4ff";
else row.style["background-color"] = "#c1e3f5";

sigla.innerHTML = estados.estados[i].sigla;
nome.innerHTML = estados.estados[i].nome;
regiao.innerHTML = estados.estados[i].regiao;

var createClickHandler = function(index) {
      return function() {
        Painel(estados.estados[index].sigla, estados.estados[index].nome, estados.estados[index].regiao,
           estados.estados[index].areaUrbanizada, estados.estados[index].areaTotal, estados.estados[index].porcTotal);
      };
    };
    row.onclick = createClickHandler(i);
}

function Painel(siglaP, nomeP, regiaoP, areaUrbanizadaP, areaTotalP, porcTotalP){
  var tituloP = document.getElementById("tituloP");
  var valAreaUrb = document.getElementById("valAreaUrb");
  var valAreaTotal = document.getElementById("valAreaTotal");
  var valTotalBr = document.getElementById("valTotalBr");

  tituloP.innerHTML = siglaP + " - " + nomeP + " - " + regiaoP;
  valAreaUrb.innerHTML = areaUrbanizadaP.toLocaleString('br') + "Km²";
  valAreaTotal.innerHTML = areaTotalP.toLocaleString('br') + "Km²";
  valTotalBr.innerHTML = porcTotalP.toLocaleString('br') + "%";

}
