// // create backgrond-video:
// let backgroundVideo = document.createElement("video");
// backgroundVideo.classList.add("background-video");
// backgroundVideo.autoplay = true;
// backgroundVideo.muted = true;
// backgroundVideo.loop = true;
// backgroundVideo.playsInline = true;
// let videoSource = document.createElement("source");
// videoSource.src = "Vedeos/12649331_1920_1080_30fps.mp4";
// videoSource.type = "video/mp4";
// backgroundVideo.appendChild(videoSource);
// document.body.prepend(backgroundVideo);
window.history.scrollRestoration = "manual";
window.onload = function(){
    scrollTo(0,0);
};
// create navbar:
let navBar = document.createElement("nav");
navBar.classList.add("navbar");
let myName = document.createElement("h1");
myName.classList.add("my-name");
let spanChar1 = document.createElement("span");
spanChar1.classList.add("char-one");
spanChar1.innerText = "A";
myName.appendChild(spanChar1);
let spanChar2 = document.createElement("span");
spanChar2.classList.add("char-two");
spanChar2.innerText = "M";
myName.appendChild(spanChar2);
let spanChar3 = document.createElement("span");
spanChar3.classList.add("char-three");
spanChar3.innerText = "A";
myName.appendChild(spanChar3)
let spanChar4 = document.createElement("span");
spanChar4.classList.add("char-four");
spanChar4.innerText = "L";
myName.appendChild(spanChar4);
navBar.appendChild(myName);
let navButton = document.createElement("button");
navButton.classList.add("nav-button");
let barIcon = document.createElement("i");
barIcon.classList.add("fa-solid","fa-bars");
navButton.appendChild(barIcon);
navBar.appendChild(navButton);
document.body.appendChild(navBar);

navButton.onclick = function(){
    sideBar.classList.toggle("apparent"); 
};
document.addEventListener("click", function(event){

    if (!sideBar.contains(event.target) && !navButton.contains(event.target)) {
        sideBar.classList.remove("apparent");
    }

});
// create side bar :
let sideBar = document.createElement("nav");
sideBar.classList.add("side-bar");
let homeLink = document.createElement("a");
homeLink.href = "#HOME";
homeLink.onclick = function(){
    sideBar.classList.remove("apparent");
};
let homeLinkContent = document.createTextNode("HOME");
homeLink.appendChild(homeLinkContent);
let aboutLink = document.createElement("a");
aboutLink.href = "#ABOUT";   
aboutLink.onclick = function(){
    sideBar.classList.remove("apparent"); 
};
let aboutLinkContent = document.createTextNode("ABOUT");
aboutLink.appendChild(aboutLinkContent);
let skillsLink = document.createElement("a");
skillsLink.href = "#SKILLS";
skillsLink.onclick = function(){
    sideBar.classList.remove("apparent");
};
let skillsLinkContent = document.createTextNode("SKILLS");
skillsLink.appendChild(skillsLinkContent);
let projectsLink = document.createElement("a");
projectsLink.href = "#PROJECTS";
projectsLink.onclick = function(){
    sideBar.classList.remove("apparent");
}
let projectsLinkContent = document.createTextNode("PROJECTS");
projectsLink.appendChild(projectsLinkContent);
let contactLink = document.createElement("a");
contactLink.href = "#CONTACT";
contactLink.onclick = function(){
    sideBar.classList.remove("apparent");
}
contactLink.classList.add("contact-link");
let contactLinkContent = document.createTextNode("CONTACT");
contactLink.appendChild(contactLinkContent);
sideBar.appendChild(homeLink);
sideBar.appendChild(aboutLink);
sideBar.appendChild(skillsLink);
sideBar.appendChild(projectsLink);
sideBar.appendChild(contactLink);
document.body.prepend(sideBar);

//create hero section:
let heroSection = document.createElement("section");
heroSection.classList.add("hero-section");
heroSection.id = "HOME";
let textDiv = document.createElement("div");
textDiv.classList.add("text-div");
let mainTitle = document.createElement("h1");
mainTitle.classList.add("main-title");
let mainTitleContent = document.createTextNode("Hi, I'm Amal");
mainTitle.appendChild(mainTitleContent);
textDiv.appendChild(mainTitle);
let subTitle = document.createElement("h2");
subTitle.classList.add("sub-title");
let subTitleContent = document.createTextNode("And I'm Junior ");
subTitle.appendChild(subTitleContent);
let frontEnd = document.createElement("span");
frontEnd.classList.add("highlight");
frontEnd.innerText = "Front-End Developer";
subTitle.appendChild(frontEnd);
textDiv.appendChild(subTitle);
let heroParagraph = document.createElement("P");
heroParagraph.classList.add("hero-paragraph");
let heroParagraphContent = document.createTextNode("I'm a Biomedical Informatics Engineering graduate passionate about Front-End Development. I'm currently building my skills in HTML, CSS, and JavaScript to create modern and responsive websites.");
heroParagraph.appendChild(heroParagraphContent);
textDiv.appendChild(heroParagraph);
let myImageDiv = document.createElement("div");
myImageDiv.classList.add("myImage-div");
let myImage = document.createElement("img");
myImage.classList.add("my-image");
myImageDiv.appendChild(myImage);
myImage.src = "Images/hero-imag.jpeg";
let viewButton  = document.createElement("button");
viewButton.classList.add("view-button");
let viewButtonContent = document.createTextNode("View My Work"); 
viewButton.appendChild(viewButtonContent);
heroSection.appendChild(textDiv);
heroSection.appendChild(myImageDiv);
heroSection.appendChild(viewButton);
document.body.appendChild(heroSection);
viewButton.onclick = function(){
    projectsSection.scrollIntoView({
        behavior:"smooth",
    })
};
//create about section:
let aboutSection = document.createElement("section");
aboutSection.id = "ABOUT";
aboutSection.classList.add("about-section");
let aboutTitle = document.createElement("h2");
aboutTitle.classList.add("about-title");
let aboutTitleContent = document.createTextNode("About Me");
aboutTitle.appendChild(aboutTitleContent);
let aboutParagraph = document.createElement("p");
aboutParagraph.classList.add("about-paragraph");
let aboutParagraphContent = document.createTextNode("I hold a bachelor's degree in Biomedical Informatics Engineering from Yarmouk University. I’m passionate about technology and web development, and I’m currently focusing on Front-End Development. I’m developing my skills in HTML, CSS, and JavaScript while building practical projects to improve my experience. I enjoy learning new technologies, solving problems, and continuously improving my skills.");
aboutParagraph.appendChild(aboutParagraphContent);
aboutSection.appendChild(aboutTitle);
aboutSection.appendChild(aboutParagraph);
document.body.appendChild(aboutSection);
// create skills section:
let skillsSection = document.createElement("section");
skillsSection.id = "SKILLS";
skillsSection.classList.add("skills-section");
let sectionTitle = document.createElement("h2");
let sectionTitleContent = document.createTextNode("My Skills");
sectionTitle.classList.add("title-section");
sectionTitle.appendChild(sectionTitleContent);
let skillsContainer = document.createElement("div");
skillsContainer.classList.add("skills-container");
let skillsCardOne = document.createElement("div");
skillsCardOne.classList.add("card-one");
let cardOneIcon = document.createElement("i");
cardOneIcon.classList.add("fa-brands", "fa-html5");
skillsCardOne.appendChild(cardOneIcon);
let cardOneTitle = document.createElement("h3");
cardOneTitle.classList.add("cardOne-title")
let cardOneTitleContent = document.createTextNode("HTML5");
cardOneTitle.appendChild(cardOneTitleContent);
let cardOneDescription = document.createElement("p");
cardOneDescription.classList.add("cardOne-desc")
let cardOneDescriptionContent = document.createTextNode("I use HTML to build semantic, organized, and accessible web page structures, creating a strong foundation for modern websites.");
cardOneDescription.appendChild(cardOneDescriptionContent);
skillsCardOne.appendChild(cardOneTitle);
skillsCardOne.appendChild(cardOneDescription);
let skillsCardTwo = document.createElement("div");
skillsCardTwo.classList.add("card-two");
let cardTwoIcon = document.createElement("i");
cardTwoIcon.classList.add("fa-brands", "fa-css3-alt");
skillsCardTwo.appendChild(cardTwoIcon);
let cardTwoTitle = document.createElement("h3");
cardTwoTitle.classList.add("cardTwo-title");
let cardTwoTitleContent = document.createTextNode("CSS3");
cardTwoTitle.appendChild(cardTwoTitleContent);
let cardTwoDescription = document.createElement("p");
cardTwoDescription.classList.add("cardTwo-desc");
let cardTwoDescriptionContent = document.createTextNode("I use CSS to create clean, modern, and responsive designs that provide a consistent and enjoyable experience across different screen sizes.");
cardTwoDescription.appendChild(cardTwoDescriptionContent);
skillsCardTwo.appendChild(cardTwoTitle);
skillsCardTwo.appendChild(cardTwoDescription);
let skillsCardThree = document.createElement("div");
skillsCardThree.classList.add("card-three");
let cardThreeIcon = document.createElement("i");
cardThreeIcon.classList.add("fa-brands","fa-square-js");
skillsCardThree.appendChild(cardThreeIcon);
let cardThreeTitle = document.createElement("h3");
cardThreeTitle.classList.add("cardThree-title");
let cardThreeTitleContent = document.createTextNode("JavaScript");
cardThreeTitle.appendChild(cardThreeTitleContent);
let cardThreeDescription = document.createElement("p");
cardThreeDescription.classList.add("cardThree-desc");
let cardThreeDescriptionContent = document.createTextNode("I use JavaScript to add interactivity and dynamic functionality to websites, making pages more engaging and responsive to user actions.");
cardThreeDescription.appendChild(cardThreeDescriptionContent);
skillsCardThree.appendChild(cardThreeTitle);
skillsCardThree.appendChild(cardThreeDescription);
skillsSection.appendChild(sectionTitle);
skillsContainer.appendChild(skillsCardOne);
skillsContainer.appendChild(skillsCardTwo);
skillsContainer.appendChild(skillsCardThree);
skillsSection.appendChild(skillsContainer);
document.body.appendChild(skillsSection);
// create projects section:
let projectsSection = document.createElement("section");
projectsSection.id = "PROJECTS";
projectsSection.classList.add("project-section");
let projectsSectionTitle = document.createElement("h2");
projectsSectionTitle.classList.add("section-title");
let projectsSectionTitleContent = document.createTextNode("My Projects");
projectsSectionTitle.appendChild(projectsSectionTitleContent);
let cardsProjectsContainer = document.createElement("div");
cardsProjectsContainer.classList.add("cards-container");
//card 1
let cardProjectOne = document.createElement("div");
let projectOneImage = document.createElement("img");
projectOneImage.src = "Images/card1-Image.png";
let projectOneTitle = document.createElement("h3");
let projectOneTitleContent = document.createTextNode("MedAnalyzer System");
projectOneTitle.appendChild(projectOneTitleContent);
let projectOneDesc = document.createElement("p");
let projectOneDescContent = document.createTextNode("Developed MedAnalyzer, a full-stack medical data analysis platform using HTML, CSS, JavaScript, Python Flask, and SQLite. Enables patient data entry and CSV upload, performs health metric calculations, visualizes trends, and integrates machine learning for risk prediction and reporting.");
projectOneDesc.appendChild(projectOneDescContent);
let projectOneButton = document.createElement("button");
let projectOneButtonContent = document.createTextNode("View Project");
projectOneButton.appendChild(projectOneButtonContent);
projectOneButton.onclick = function(){
    location.href = "https://github.com/amalalawadi-dev/Graduation-Project";
};
cardProjectOne.appendChild(projectOneImage);
cardProjectOne.appendChild(projectOneTitle);
cardProjectOne.appendChild(projectOneDesc);
cardProjectOne.appendChild(projectOneButton);
cardsProjectsContainer.appendChild(cardProjectOne);
// card 2 
let cardProjectTwo = document.createElement("div");
let projectTwoImage = document.createElement("img");
projectTwoImage.src = "Images/card2-image.png";
let projectTwoTitle = document.createElement("h3");
let projectTwoTitleContent = document.createTextNode("Secured Easy Server Landing Page");
projectTwoTitle.appendChild(projectTwoTitleContent);
let projectTwoDesc = document.createElement("p");
let projectTwoDescContent = document.createTextNode("Developed a landing page website project using HTML and CSS. The website included a header, landing page, features, services, projects, about us, contact us, and footer sections.");
projectTwoDesc.appendChild(projectTwoDescContent);
let projectTwoButton = document.createElement("button");
let projectTwoButtonContent = document.createTextNode("View Project");
projectTwoButton.appendChild(projectTwoButtonContent);
projectTwoButton.onclick = function(){
    location.href = "https://github.com/amalalawadi-dev/secured-easy-server-landing";
}
cardProjectTwo.appendChild(projectTwoImage);
cardProjectTwo.appendChild(projectTwoTitle);
cardProjectTwo.appendChild(projectTwoDesc);
cardProjectTwo.appendChild(projectTwoButton);
cardsProjectsContainer.appendChild(cardProjectTwo);
projectsSection.appendChild(projectsSectionTitle);
projectsSection.appendChild(cardsProjectsContainer);
document.body.appendChild(projectsSection);
// create contact section:
let contactSection = document.createElement("section");
contactSection.id = "CONTACT";
contactSection.classList.add("contact-section");
let contactSectionTitle = document.createElement("h2");
let contactSectionTitleContent = document.createTextNode("Contact Me");
contactSectionTitle.appendChild(contactSectionTitleContent);
let contactSectionDesc = document.createElement("p");
let contactSectionDescContent = document.createTextNode("I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out.");
contactSectionDesc.appendChild(contactSectionDescContent);
let formSection = document.createElement("section");
formSection.classList.add("form-section");
let form = document.createElement("form");
let nameLable = document.createElement("label");
nameLable.htmlFor = "name-input";
nameLable.innerText = "Your Name";
form.appendChild(nameLable);
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name-input";
form.appendChild(nameInput);
let emailLable = document.createElement("label");
emailLable.innerText = "Your Email";
emailLable.htmlFor = "email-input"
let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email-input";
form.appendChild(emailLable);
form.appendChild(emailInput);
let messageAreaLable = document.createElement("label");
messageAreaLable.innerText = "Your Message";
messageAreaLable.htmlFor = "messg-area";
form.appendChild(messageAreaLable);
let messageArea = document.createElement("textarea");
messageArea.id = "messg-area";
form.appendChild(messageArea);
let contactButton = document.createElement("button");
contactButton.classList.add("contact-button");
let contactButtonContent = document.createTextNode("Send Message");
contactButton.appendChild(contactButtonContent);
form.appendChild(contactButton);
let errorMessage = document.createElement("div");
errorMessage.classList.add("error-message");
form.appendChild(errorMessage);
formSection.appendChild(form);
let backButton = document.createElement("button");
backButton.classList.add("back-button");
let backButtonContent = document.createTextNode("Back To Top");
backButton.appendChild(backButtonContent);
window.onscroll = function(){
    if (window.scrollY >= 3970){
        backButton.style.display = "flex";
    }
    else{
        backButton.style.display = "none";
    }
}
backButton.onclick = function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth", 
    });  
};
let namePattern = /^[A-Za-z ]+$/;
let emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/;
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(nameInput.value.trim() == "" && emailInput.value.trim() == "" && messageArea.value.trim() == "" ){
        errorMessage.innerText = "Please fill in all fields before submitting the form";
        errorMessage.style.display = "flex";
        return;
    }
    if(nameInput.value.trim() == ""){
        errorMessage.innerText = "Please Enter Your Name";
        errorMessage.style.display = "flex";
        return;
    }
    if(!namePattern.test(nameInput.value.trim())){
        errorMessage.innerText = "Please Enter a Valid Name";
        errorMessage.style.display = "flex";
        return;
    }
    
    if(emailInput.value.trim() == ""){
        errorMessage.innerText = "Please Enter Your Email";
        errorMessage.style.display = "flex";
        return;
    }
    if(!emailPattern.test(emailInput.value.trim())){
        errorMessage.innerText = "Please Enter a Valid Email";
        errorMessage.style.display = "flex";
        return
    }

    if(messageArea.value.trim() == ""){
        errorMessage.innerText = "Please Enter Your Message";
        errorMessage.style.display = "flex";
        return;
    }

    if(messageArea.value.length < 10){
        errorMessage.innerText = "Please enter a longer message";
        errorMessage.style.display = "flex";
        return;
    }

    else{
        errorMessage.innerText = "Your message has been sent successfully!";
        errorMessage.style.display = "flex";
        return;
    }
}); 
    




contactSection.appendChild(contactSectionTitle);
contactSection.appendChild(contactSectionDesc);
contactSection.appendChild(formSection);
contactSection.appendChild(backButton);
document.body.appendChild(contactSection);
// create footer section:
let footerSection = document.createElement("footer");
footerSection.classList.add("footer-section")
let footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container");
let footerTitle = document.createElement("h3");
let footerTitleContent = document.createTextNode("AMAL");
footerTitle.appendChild(footerTitleContent);
footerContainer.appendChild(footerTitle);
let footerParagraph = document.createElement("P");
let footerParagraphContent = document.createTextNode("Junior Front-End Developer");
footerParagraph.appendChild(footerParagraphContent);
footerContainer.appendChild(footerParagraph);
let footerSocialLinksContainer = document.createElement("div");
footerSocialLinksContainer.classList.add("links-container")
let socialLinkLinkedIn = document.createElement("a");
socialLinkLinkedIn.onclick = function(){
    location.href = "https://www.linkedin.com/in/amalalawadi-dev";
};
let linkedInIcon = document.createElement("i");
linkedInIcon.classList.add("fa-brands", "fa-linkedin");
socialLinkLinkedIn.appendChild(linkedInIcon);
let socialLinkGitHub = document.createElement("a");
socialLinkGitHub.onclick = function(){
    location.href = "https://github.com/amalalawadi-dev";
};
let gitHubIcon = document.createElement("i");
gitHubIcon.classList.add("fa-brands", "fa-github");
socialLinkGitHub.appendChild(gitHubIcon);
let socialLinkEmail = document.createElement("a");
socialLinkEmail.onclick = function(){
    location.href = "mailto:amalalawadi2001@gmail.com";
};
let emailIcon = document.createElement("i");
emailIcon.classList.add("fa-solid", "fa-envelope");
socialLinkEmail.appendChild(emailIcon);
footerSocialLinksContainer.appendChild(socialLinkLinkedIn);
footerSocialLinksContainer.appendChild(socialLinkGitHub);
footerSocialLinksContainer.appendChild(socialLinkEmail);
let copyRight = document.createElement("small");
copyRight.innerText = "© 2026 Amal. All Rights Reserved.";
footerSection.appendChild(footerContainer);
footerContainer.appendChild(footerSocialLinksContainer);
footerContainer.appendChild(copyRight);
document.body.appendChild(footerSection);