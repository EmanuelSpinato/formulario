var input = document.getElementById('username');
input.oninvalid = function(event) {event.target.setCustomValidity('Username should only contain lowercase letters or numbers. e.g. john123');}