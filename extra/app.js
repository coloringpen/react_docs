const eventTypeCheckBtn = document.querySelector('#checkEventType');

function checkingEventType(e) {
  e.preventDefault();
  console.log(e);
  // mouseleave 이벤트라고 type에 명시됨
}

eventTypeCheckBtn.addEventListener('mouseleave', checkingEventType);
