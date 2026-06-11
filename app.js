const API_URL =
  "https://script.google.com/macros/s/AKfycbyRUuCzBOvG2kwGLStWK79w9WwgI-Uk7vZaKpPEex6SPmh1KdhiC3eU7ic3TUnUvnq9Bw/exec";

async function loadData() {
  try {
    const res = await fetch(API_URL);

    const data = await res.json();

    document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error(err);
  }
}
