<script>
  const sections=document.querySelectorAll('section');
  const links=document.querySelectorAll('nav a');

  window.addEventListener('scroll',()=>{
    let current='';
    sections.forEach(sec=>{
      if(window.scrollY>=sec.offsetTop-150) current=sec.id;
    });
    links.forEach(a=>{
      a.classList.remove('active');
      if(a.getAttribute('href')==='#'+current) a.classList.add('active');
    });
  });

  function sendMessage(e){
    e.preventDefault();
    alert('Message sent successfully!');
  }
</script>