document.addEventListener('DOMContentLoaded', function() {
    let params = coDesExtract()
    let value = params['key']
    let value2 = document.querySelector(".slides-icon-slide")
    value2.src="assets/img/" + value + ".jpeg"
    let value3 = document.querySelector(".link1")
    value3.href="slide-logo.html?key=" + value
  })

