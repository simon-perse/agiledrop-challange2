//active link

const siteRegions = [];

siteRegions[0] = document.querySelector("#block-top-content-header");
siteRegions[1] = document.querySelector("#block-adchallenge-content");
siteRegions[2] = document.querySelector("#block-latest-event");
siteRegions[3] = document.querySelector("#block-about-me");

var headerNavigationContainer = document.querySelector('#block-adchallenge-main-menu');
var menuListItemNodes = headerNavigationContainer.querySelectorAll('.menu-item a');

menuListItemNodes[0].classList.add("active"); //home is active by deafult
window.addEventListener('scroll', () => {
    var current = ""
    siteRegions.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;        
        if (scrollY >= sectionTop-sectionHeight/3) {
            current = section.getAttribute("id");  
        }
    })     
    menuListItemNodes.forEach(li => {
        li.classList.remove("active")        
        if (li.getAttribute("href").includes(current)) {            
            li.classList.add("active");
        }
    })
})










