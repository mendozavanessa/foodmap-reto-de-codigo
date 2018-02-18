$(document).ready(function() {
  var distrito = $('#input-distrito');
  var ubicacion = $('#ubicacion');
  var primero = $('#primero');
  var segundo = $('#segundo');
  var img1 = $('#img1');
  var img2 = $('#img2');
  var datos = Object.keys(data);
  console.log(datos);
  distrito.on('keyup', buscar);
  function buscar() {
    event.preventDefault();
    var encontro = false;
    for (var i = 0; i < datos.length; i++) {
      if (distrito.val().toUpperCase() === datos[i].toUpperCase()) {
        encontro = true;
        if (event.keyCode === 13) {
          $('#ubicacion').text('RESTAURANTES EN ' + ' ' + datos[i].toUpperCase());
          var restaurant = Object.keys(data[datos[i]]);
          var comidas1 = Object.keys(data[datos[i]][restaurant[0]]);
          var comidas2 = Object.keys(data[datos[i]][restaurant[1]]);
          console.log(comidas1[0]);
          $('#primero').text(restaurant[0].toUpperCase());
          primero.on('click', function(event) {
            img1.attr('src', '../assets/img/' + comidas1[0] + '.jpg');
            img2.attr('src', '../assets/img/' + comidas1[1] + '.jpg');
          });
          $('#segundo').text(restaurant[1].toUpperCase());
          segundo.on('click', function(event) {
            img1.attr('src', '../assets/img/' + comidas2[0] + '.jpg');
            img2.attr('src', '../assets/img/' + comidas2[1] + '.jpg');
          });
          $('.restaurantes').show();
          distrito.val(' ');
        }
      }
    }
    console.log(encontro);
    if (encontro === false) {
      $('#error').show();
    } else {
      $('#error').hide();
    }
  }
});
