
export function toText(node: any) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}


export function shortenText(text: string, startingPoint: number, maxLength: number) {
  return text.length > maxLength
    ? text.slice(startingPoint, maxLength)
    : text;
}

export function shortenAddress(address: string) {
  if (address) {
    let prefix = address.slice(0, 5);
    let suffix = address.slice(-5)
    return prefix + "..." + suffix;
  }
  return "";
}