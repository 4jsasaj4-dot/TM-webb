function scrollProjects(){

    document
    .getElementById("projects")
    .scrollIntoView({
      behavior:"smooth"
    });
  
  }
  
  function openModal(
  title,
  image,
  desc,
  github,
  demo
  ){
  
    document
    .getElementById("modal")
    .style.display = "flex";
  
    document
    .getElementById("modal-title")
    .innerText = title;
  
    document
    .getElementById("modal-desc")
    .innerText = desc;
  
    document
    .getElementById("modal-image")
    .src = image;
  
    document
    .getElementById("github-btn")
    .href = github;
  
    document
    .getElementById("demo-btn")
    .href = demo;
  
  }
  
  function closeModal(){
  
    document
    .getElementById("modal")
    .style.display = "none";
  
  }