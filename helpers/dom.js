export function cssToDom(css) {
  const node = document.createElement("style");
  node.textContent = css;
  return node;
}
