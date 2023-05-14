const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav_link = document.querySelector('.nav-links');

    burger.addEventListener("click", () => {
        nav_link.classList.toggle('nav-active');
    });
}

navSlide()