/*jslint browser: true*/
/*global $, jQuery, alert*/

var pageNumber = 1;
function loadPokemons() {
  var index = (pageNumber-1)*20+1;
  console.log(pageNumber);
  (function (index) {

    var xhr = new XMLHttpRequest();
    var img = [];

    function pokemonArrivedEventListener(e) {

      if (xhr.readyState == 4 && xhr.status == 200) {

        var pokemons = JSON.parse(xhr.responseText);

        var i = index;

        pokemons.results.forEach( function(pokemon) {
          var tbody = document.getElementById('intable');
          var row = tbody.insertRow(tbody.rows.length);
          var cell0 = row.insertCell(0);
          var cell1 = row.insertCell(1);
          var cell2 = row.insertCell(2);
          var cell3 = row.insertCell(3);

          cell0.innerHTML = i;

          img[i] = new Image();
          img[i].src = "https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg";
          img[i].alt = pokemon.name;
          cell1.appendChild(img[i]);

          cell2.innerHTML = pokemon.name;

          var alink = document.createElement("A");
          var text = document.createTextNode("More");
          var hyperlink = "index2.html#btn" + i;
          alink.setAttribute('href', hyperlink);
          alink.setAttribute('type', "button");
          alink.setAttribute('target', "_blank");
          alink.setAttribute('class', "btn btn-info");
          alink.appendChild(text);
          cell3.appendChild(alink);

          i++;
        })


      }
    }
    xhr.onreadystatechange = pokemonArrivedEventListener;
    var offset = index - 1;
    var url = "https://pokeapi.co/api/v2/pokemon/?offset=" + offset;
    xhr.open("GET", url, true);
    xhr.send(null);

  })(index);
  pageNumber++;
}


loadPokemons();
