function loadList() {
  fetch(`http://raw.zachauten.com/paste/`)
    .then(res => res.json())
    .then(data => {
      const pastes = data.map(x => x.name)
      pastes.forEach(x => {
        const list = document.getElementById("list");
        let node = document.createElement("li");
        let a = document.createElement("a");
        let text = document.createTextNode(x);
        a.appendChild(text);
        a.href = `?paste=${x}`;
        a.title = x;
        node.appendChild(a);
        list.appendChild(node);
      })
    })
    .catch(err => console.log(err))
}

function loadText() {
  const params = new URLSearchParams(window.location.search)
  if (params.has('paste')) {
    const id = params.get('paste');
    let ta = document.getElementById("text");
    fetch(`http://raw.zachauten.com/paste/${id}`)
    .then(res => res.text())
    .then(data => {
      ta.innerText = data;
    })
    .catch(err => console.log(err))
  }
}
loadList();
loadText();
