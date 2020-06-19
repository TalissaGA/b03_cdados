document.addEventListener('DOMContentLoaded', function() {
    let params = coDesExtract()
    let value = params['key']
    let value2 = document.querySelector(".slides-icon-slide")
    value2.src="assets/img/" + value + ".jpeg"
  })
