
// code taken from boostrap form example

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  let display_alert = document.getElementById('alert');

  function alert () {
      let display_alert = document.getElementById('alert');
      return display_alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert-msg">Some fields are missing.</div>';

  }
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          alert()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

let reset_btn = document.getElementById("reset-btn")

function refresh() {
    window.location.reload();
}