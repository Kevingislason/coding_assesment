function visitDescendants(elem, fn) {
  fn(elem);
  const children = Array.from(elem.children);
  children.forEach(childElem => visitDescendents(childElem, fn));
}
