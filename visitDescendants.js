function visitDescendants(elem, fn) {
  fn(elem);
  let children = Array.from(elem.children);
  children.forEach(childElem => visitDescendents(childElem, fn));
}
