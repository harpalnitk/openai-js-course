import './style.css'

const form = document.querySelector('form');

form.addEventListener('submit', async(e)=>{
  //prevent refresh of page
  e.preventDefault();
  const data = new FormData(form);

  const response = await fetch('http://localhost:8080/dream');
  
})
