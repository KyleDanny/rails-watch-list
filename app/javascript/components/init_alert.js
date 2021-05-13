import Swal from 'sweetalert2'

const AddSweetAlertToElement = (elememt) => {
  element.addEventListener('click', () => {
    Swal.fire(
      'Good job!',
      'Thank you for your review!',
      'success')
  })
}

export { AddSweetAlertToElement };
