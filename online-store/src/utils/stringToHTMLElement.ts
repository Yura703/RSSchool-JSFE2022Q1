export function stringToHTMLElement(HTMLString: string) {
    const template = document.createElement('template');
    template.innerHTML = HTMLString;

    return template.content.firstChild;
}
