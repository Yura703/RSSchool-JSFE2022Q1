const HIDDEN_CLASS = 'hidden';

export function switchPages(flag: boolean) {
  const garage = document.querySelector('.garage');
  const winners = document.querySelector('.winners');

  if (flag) {
    garage?.classList.remove(HIDDEN_CLASS);
    winners?.classList.add(HIDDEN_CLASS);
  } else {
    garage?.classList.add(HIDDEN_CLASS);
    winners?.classList.remove(HIDDEN_CLASS);
  }
}
