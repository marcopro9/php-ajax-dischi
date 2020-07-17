//richiedo jquery e handlebars
var $ = require( "jquery" );
const Handlebars = require("handlebars");

// attendo il caricamento del documento
$(document).ready(
  function() {
    // chiamata ajax per prendere i dati dal database php
    chiamataAlbum();
    function chiamataAlbum(album) {
      $.ajax({
        url: 'http://localhost:8888/php-ajax-dischi/my-app/album-server.php',
        type: 'GET',
        success: function (album) {
          stampaAlbum(album);
          artisti();
        },
        error: function () {
          alert('Errore');
        }
      })
    }

    // funzione che stampa i risultati tramite handlebars
    function stampaAlbum(album) {
      var source = $("#album-template").html();
      var template = Handlebars.compile(source);

      // ciclo per prendere i singoli valori del database
      album.forEach(function(disco) {
          var context = {
              poster: disco.poster,
              titolo: disco.title,
              autore: disco.author,
              anno: disco.year,
            };

          var html = template(context);
          $(".dischi").append(html);
        }
      );
    };

    // creo una funzione per il sort by genere al change su option
    function artisti(){
      $("select").change(function () {
        // creo una variabile che prende il valore dell'opzione cliccata....
        var selected = $(this).val();
        // ...e a seconda dell'opzione mostro e nascondo
        $(".album").hide();
        $(".album." + selected).show();
        if (selected === "Tutti") {
          // ...mostra tutti gli album
          $(".album").show();
        }
      });
    }
  }
);
