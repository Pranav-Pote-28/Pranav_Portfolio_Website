function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var moonIcon=document.getElementById("moon-icon");
var moonIconMedia=document.getElementById("moon-icon-media");

var linkedinIcon=document.getElementById("linkedin-icon");
var linkedinIcon2=document.getElementById("linkedin-icon-2")
var githubIcon=document.getElementById("github-icon");
var mailIcon=document.getElementById("mail-icon");
var gradIcon=document.getElementById("grad-cap");



function toggleDarkMode(){
    
    console.log("clicked")
  
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        moonIcon.src="./assets/sun.png";
        moonIcon.title="light mode";
        
        linkedinIcon.src="./assets/linkedin_dark.png";
        linkedinIcon2.src="./assets/linkedin_dark.png";
        githubIcon.src="./assets/github_dark.png";
        mailIcon.src="./assets/mail_dark.png";
        gradIcon.src="./assets/grad-dark.png";
        
        
        
    }else{
        moonIcon.src="./assets/moon.png";
        linkedinIcon.src="./assets/linkedin.png";
        linkedinIcon2.src="./assets/linkedin.png";
        githubIcon.src="./assets/github.png";
        mailIcon.src="./assets/email.png";
        gradIcon.src="./assets/education.png";
        
    }
}


moonIcon.onclick=toggleDarkMode;
moonIconMedia.onclick=toggleDarkMode;