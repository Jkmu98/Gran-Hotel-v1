const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// const popover = new bootstrap.Popover('.popover-dismiss', {
//     trigger: 'focus'
//     })
    

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


