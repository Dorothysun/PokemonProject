function functSubmit(event) {
  var msg = document.getElementById("myInput").value;
  alert(msg);
  // format the url
  url = "http://pokeapi.co/api/v2/pokemon/" + msg + "/"
  console.log(url)
  fetch(url)
    .then((r) => {
      console.log(r.json())
    })

}

// renderFromPoke = (url) => {
//   fetch(url)
//   .then(r => {r.json(); console.log(r);})
//   .then(pokes => {console.log(pokes); renderPoke(pokes);})
// }
//
// renderPoke = (data) => {
//   let name = data["forms"][0]["name"]
//   document.getElementById('response').innerText = name
// }
