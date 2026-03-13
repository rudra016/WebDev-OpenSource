const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });
});

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
}); 

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
}); 
iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
}); 