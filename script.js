const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");
form.addEventListener("change", save);
button.addEventListener("click", add);
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);
  if (dayExists == true) {
    alert("dia ja incluso");
    return;
  }
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || [];
nlwSetup.setData(data);
nlwSetup.load();
