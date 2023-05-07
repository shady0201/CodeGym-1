let alertDm = document.querySelector('.dm');
alertDm.addEventListener('click', function() {
  alert('Chưa làm xong hí hí');
})

let alertPage = document.getElementById('page');
alertPage.addEventListener('click', function() {
  alert('Làm màu thôi');
})

let body = document.querySelector('body');
let sidebar = body.querySelector('.sidebar');
let toggle = body.querySelector('.toggle');
let searchSidebar = body.querySelector('.search-box');
toggle.addEventListener('click', function() {
    sidebar.classList.toggle('close');
});

searchSidebar.addEventListener('click', function() {
    sidebar.classList.remove('close');
});

window.addEventListener('load', function() {
    sidebar.classList.remove('close');
})

let logoutTrigger = document.querySelector('.logout-mode')
let logoutLive = document.querySelector('.toast')
if (logoutTrigger) {
  let toastBootstrap = bootstrap.Toast.getOrCreateInstance(logoutLive)
  logoutTrigger.addEventListener('click', function() {
    toastBootstrap.show()
  })
}

let logoutYes = document.querySelector('.yes')
logoutYes.addEventListener('click', function() {
    window.location.href = '../product-management/myhtml/signin.html';
})

let codePart1 = document.getElementById('code-part1');
let codePart2 = document.getElementById('code-part2');
let codePart3 = document.getElementById('code-part3');
let codePart4 = document.getElementById('code-part4');

[codePart1, codePart2, codePart3, codePart4].forEach((part, index, parts) => {
  part.addEventListener('input', () => {
    if (part.value.length === part.maxLength) {
      if (index < parts.length - 1) {
        parts[index + 1].focus();
      } else {
        parts.map((part) => part.value).join('');
      }
    }
  });

  part.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && part.value.length === 0 && index > 0) {
      parts[index - 1].focus();
    }
  });
});

