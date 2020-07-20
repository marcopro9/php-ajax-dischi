//richiedo jquery e handlebars
var $ = require( "jquery" );
const Handlebars = require("handlebars");

// attendo il caricamento del documento
$(document).ready(
  function() {
    selectAutori();
    chiamataAlbum('');

    // creo una funzione per il sort by artista al change su option
    $('.select').change(function(){
      var selected = $(this).val();
      chiamataAlbum(selected);
    });

    // chiamata ajax per prendere i dati dal database php
    function chiamataAlbum(autoriFiltrati) {
      $('.dischi').html('');

      $.ajax({
        url: 'http://localhost:8888/php-ajax-dischi/my-app/album-server.php',
        method: 'GET',
        data: {
          author: autoriFiltrati
        },
        success: function (album) {
          stampaAlbum(album);
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

    function selectAutori() {
      $.ajax(
        {
          url: 'http://localhost:8888/php-ajax-dischi/my-app/album-server.php',
          method: 'GET',
          data: {
            'author-list': 'true'
          },
          success: function(dataResponse) {
            var source = $('#opzioni-autore-template').html();
            var template = Handlebars.compile(source);

            for (var i = 0; i < dataResponse.length; i++) {
              var thisAuthor = dataResponse[i];
              console.log(thisAuthor);
              var context = {
                author: thisAuthor
              };
              var html = template(context);

              $('.select-artisti').append(html);
            }
          },
          error: function() {
            alert('Errore caricamento autori');
          }
        }
      );
    }
  }
);
