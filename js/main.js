const elCloseBtn = document.querySelector('.btn-clickme')
const elModal = document.querySelector('.modal')

setTimeout(() => {
  elCloseBtn.addEventListener('click', function () {
    elModal.classList.add('modal-close')
  })
}, 5000)
