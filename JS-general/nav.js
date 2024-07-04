const mobile_nav_button = document.getElementById('mo-nav-button');
const mo_nav_button_close = document.getElementById('mo-nav-button-close');
const navBar = document.getElementById('nav-bar');
 
//Make the mobile nave button open the nav bar
mobile_nav_button.addEventListener('click', ()=> {
    navBar.style.display = 'flex';
    mobile_nav_button.style.display = 'none';
    mo_nav_button_close.style.display = 'block';
})
//Make the mobile nave button close the nav bar
mo_nav_button_close.addEventListener('click', ()=> {
    navBar.style.display = 'none';
    mobile_nav_button.style.display = 'block';
    mo_nav_button_close.style.display = 'none';
})

//reset the normal width defaults

window.addEventListener('resize', () => {
    let pageWidth = window.innerWidth;
    if(pageWidth >= 1020){
        navBar.style.display = 'flex';
        mobile_nav_button.style.display = 'none';
        mo_nav_button_close.style.display = 'none';
    }else{
        mobile_nav_button.style.display = 'block';
        mo_nav_button_close.style.display = 'none';
    }
});
