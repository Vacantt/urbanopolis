$(document).ready(function() {
  $('#anketa').submit(function(event) {
    event.preventDefault();
    
    var pitanje1 = parseInt($('#pitanje1').val());
    var pitanje2 = parseInt($('#pitanje2').val());
    var pitanje3 = parseInt($('#pitanje3').val());

    var prosecnaOcena = (pitanje1 + pitanje2 + pitanje3) / 3;

    var statistika = $('#rezultat');
    statistika.html('<h3>Statistika</h3>');
    statistika.append('<p>Prosečna ocena: ' + prosecnaOcena.toFixed(2) + '</p>');

    if (prosecnaOcena >= 3.5) {
      statistika.addClass('zelena').removeClass('zuta crvena');
    } else if (prosecnaOcena >= 2.5) {
      statistika.addClass('zuta').removeClass('zelena crvena');
    } else {
      statistika.addClass('crvena').removeClass('zuta zelena');
    }
  });
});