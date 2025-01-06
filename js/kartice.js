document.getElementById("kartica").addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var tipKartice = document.querySelector('input[name="tip-kartice"]:checked').value;

  if (!name || !email || !tipKartice) {
    alert("Popunite sva polja.");
    return;
  }
})