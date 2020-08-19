import App from "./app";
import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = App();
  element.classList.add("text-red-600");

  return element;
}

document.getElementById("app").appendChild(component());
