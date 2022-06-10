const msg = document.querySelector('textarea');
const count = document.querySelector('.char-count');

msg.addEventListener('keyup', (e) => {
  let countText = count.innerText;
  let countNum = countText.split('/')[0];
  countNum = msg.value.length;
  count.innerText = `${countNum}/${countText.split('/')[1]}`;
})