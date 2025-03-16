let link = document.querySelector ('a')
link.addEventListener('click',  function(event) {
     this.textContent = prompt();
     event.preventDefault();
});