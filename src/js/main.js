window.onload = function () {
  let user, pass, login = elem('#login-btn') || null

  if (user = elem('#user')) {
    login.setAttribute("disabled", "")

    user.oninput = function () {
      labelAnimation(this)
      pass.value.trim().length >= 6 && this.value
        ? login.removeAttribute("disabled")
        : login.setAttribute("disabled", "")
    }
  }

  if (pass = elem('#password')) {
    pass.oninput = function () {
      labelAnimation(this)
      user.value.trim() && this.value.length >= 6
        ? login.removeAttribute("disabled")
        : login.setAttribute("disabled", "")
    }
  }

  if (elem('#search')) {
    elem('#search').oninput = function () {
      labelAnimation(this)
    }
  }
}

function elem(elem) {
  return document.querySelector(elem)
}

function labelAnimation(input) {
  input.value 
    ? input.parentElement.classList.add('up')
    : input.parentElement.classList.remove('up')
}