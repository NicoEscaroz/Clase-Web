function sumar() {
  let total = 0;
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    total += Number(input.value);
  });
  document.querySelector("#resultado").textContent = total;
}

function agregar() {
  let i = document.querySelectorAll("input").length;
  let input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Número " + (i + 1);
  input.onkeyup = "sumar();";
  input.oninput = sumar;
  document.querySelector("#inputs").appendChild(input);
  sumar();
}

function color() {
  var body = document.body;
  body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
}
