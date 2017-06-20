(function () {
  var btn = window.location.href;
  var btnNumber;
  if ((btn.charAt(btn.length - 3) != "n") && (btn.charAt(btn.length - 3) != "t")) {
    btnNumber = btn.charAt(btn.length - 3) + btn.charAt(btn.length - 2) + btn.charAt(btn.length - 1);
  }
  else if(btn.charAt(btn.length - 2) != "n") {
    btnNumber = btn.charAt(btn.length - 2) + btn.charAt(btn.length - 1);
  }
  else {
    btnNumber = btn.charAt(btn.length - 1);
  }

  var xhr = new XMLHttpRequest();
  var img = new Image();
  function pokemonArrivedEventListener(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var pokemon = JSON.parse(xhr.responseText);
      document.getElementById("name").innerHTML = pokemon.forms[0].name;

      var attackStatObject = pokemon.stats.find(x => x.stat.name === "attack");
      var attack = attackStatObject.base_stat;
      document.getElementById("attack").innerHTML = attack;

      var speedStatObject = pokemon.stats.find(x => x.stat.name === "speed");
      var speed = speedStatObject.base_stat; 
      document.getElementById("speed").innerHTML = speed;

      var defenseStatObject = pokemon.stats.find(x => x.stat.name === "defense");
      var defense = defenseStatObject.base_stat; 
      document.getElementById("defense").innerHTML = defense;

      var hpStatObject = pokemon.stats.find(x => x.stat.name === "hp");
      var hp = hpStatObject.base_stat; 
      document.getElementById("hp").innerHTML = hp;
      
      img.src = "https://img.pokemondb.net/artwork/" + pokemon.forms[0].name + ".jpg";
      img.alt = pokemon.forms[0].name;
      document.getElementById("poke-image").appendChild(img);

    }
  }
  xhr.onreadystatechange = pokemonArrivedEventListener; 
  var url = "https://pokeapi.co/api/v2/pokemon/" + btnNumber;
  xhr.open("GET", url, true);
  xhr.send(null);

  /*
  var xhr2 = new XMLHttpRequest();
  function pokemonArrivedEventListener2(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var form = JSON.parse(xhr.responseText);
      for(var i=0; i<form.length;i++) {
        if(?)
        document.getElementById("evolution-forms").appendchild = "<li class="list-group-item"> ? </li>";
      }
    }
  }
  xhr2.onreadystatechange = pokemonArrivedEventListener2; 
  var url2 = "http://pokeapi.co/api/v2/evolution-chain/" + btnNumber;
  xhr2.open("GET", url, true);
  xhr2.send(null);*/
})();
