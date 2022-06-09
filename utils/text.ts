export function toText(node: any) {
  const tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

export function shortenText(
  text: string,
  startingPoint: number,
  maxLength: number
) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

export function shortenAddress(address: string) {
  if (address) {
    const prefix = address.slice(0, 5);
    const suffix = address.slice(-5);
    return prefix + "..." + suffix;
  }
  return "";
}
