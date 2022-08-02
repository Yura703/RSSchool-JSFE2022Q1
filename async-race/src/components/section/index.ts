export function createSection(target: HTMLElement | string, typeSection: string, clases?: string[]) {
  try {
    const targetBody: HTMLElement | null = typeof target === 'string' ? document.querySelector(target) : target;
    if (!targetBody) throw new Error();

    const section = document.createElement(typeSection);
    if (clases) section.classList.add(...clases);

    targetBody.append(section);

    return section;
  } catch (error) {
    throw new Error(`Error target or type for create ${typeSection}`);
  }
}
