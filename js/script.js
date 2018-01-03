function functSubmit(event) {
  var msg = document.getElementById("myInput").value;
  alert(msg);
  // format the url
  url = "http://pokeapi.co/api/v2/pokemon/" + msg + "/"
  console.log(url)
  // fetch the data
  // display the name in a tag
}

renderFromPoke = () => {
  fetch('https://pokeapi.co/')
  .then(r => r.json())
  .then(pokes => renderPoke(pokes))
}

renderPoke = (data) => {
  let name = data["forms"][0]["name"]
  document.getElementById('response').innerText = name
}
