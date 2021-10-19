/*

09 - Programas de TV

Você foi a pessoa designada para escrever um algoritmo que classifica programas de TV para telespectadores.

Você irá receber um objeto com 3 atributos: idade (int), país (string), gostaDeEsportes (bool).

Caso a pessoa goste de Esportes, tem 16 anos ou mais e mora no Brasil, retorne:
------
"UFC."
------

Caso ela tenha o mesmo perfil do UFC, porém não gosta de Esportes, retorne:
---------------
"The Simpsons."
---------------

Caso a pessoa tenha menos de 16 anos, more no Chile e não goste de Esportes, retorne:
-----------------------------
"The Penguins of Madagascar."
-----------------------------

Caso a pessoa tenha menos de 16 anos, goste de Esportes e more em um país que não seja o Chile, retorne:
----------------
"Sport Fishing."
----------------

Caso a pessoa não se enquadre nessas categorias acima, retorne:
------------------------------------------------
"Não foi possível dizer o que ela deve assistir."
------------------------------------------------

*/

function viewerTvShows(dataViewer){
  let {age, country, likeSports} = dataViewer
  let message = {
    ufc: "UFC.",
    simpsons: "The Simpsons.",
    madagascar: "The Penguins of Madagascar.",
    fishing: "Sport Fishing.",
    notFound: "Não foi possível dizer o que ela deve assistir.",
  }
  let checkedCountry = {
    brasil : country.toLowerCase() == 'brasil',
    chile : country.toLowerCase() == 'chile'
  }

  
  if (age >= 16 && checkedCountry.brasil){
    if (likeSports) return message.ufc
    else return message.simpsons
  }
  if (age < 16){
    if (!likeSports && checkedCountry.chile) return message.madagascar
    if (likeSports && !checkedCountry.chile) return message.fishing
  }
  return message.notFound
}

module.exports = viewerTvShows;
