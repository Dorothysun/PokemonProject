function functSubmit(event) {
  var msg = document.getElementById("myInput").value;
  alert(msg);
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
