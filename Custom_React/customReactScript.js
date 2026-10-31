function render(reactElement, container) {
  domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (let prop in reactElement.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  console.log("domElemnt: ", domElement);

  container.appendChild(domElement);
}

const customElement = {
  type: "a",
  props: {
    href: "https://uat.optiex.co.in",
    target: "_blank",
  },
  children: "Go To the Optiex",
};

const root = document.getElementById("root");

console.log("root", root);

render(customElement, root);
