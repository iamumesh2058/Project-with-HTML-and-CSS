const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav_link = document.querySelector('.nav-links');

    burger.addEventListener("click", () => {
        nav_link.classList.toggle('nav-active');
    });
}
navSlide();


// For toggling between dark theme and light theme
const theme = () => {
    document.querySelector('body').classList.toggle('dark');
}


dark.addEventListener('click', theme);