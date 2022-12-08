export function createButton(target: HTMLElement | string, text: string, clases?: string[]) {
  const targetBody: HTMLElement | null = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetBody) throw new Error('Error target for create button');

  const btn = document.createElement('button');
  btn.innerText = text;
  if (clases) btn.classList.add(...clases);

  targetBody.append(btn);

  return btn;
}
