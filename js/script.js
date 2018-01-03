function functSubmit(event) {
  var msg = document.getElementById("myInput").value;
  url = "https://pokeapi.co/api/v2/pokemon/" + msg + "/"
  console.log(url)
  fetch(url)
  .then(r => r.json())
  .then( poke_json => renderPoke(poke_json) )
}

function renderPoke(data) {
    console.log(data)

}

// async function get_pokemon_from_api(url) {
//     try {
//         let response = await fetch(url, {mode: 'no-cors'})
//         let pokemon_json = await response.json()
//         console.log(pokemon_json)
//     } catch (e) {
//         console.log(e)
//     }
// }

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
