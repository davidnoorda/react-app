import App from "./app";

function component() {
  const element = document.createElement("div");

  element.innerHTML = App();

  return element;
}

document.getElementById("app").appendChild(component());
