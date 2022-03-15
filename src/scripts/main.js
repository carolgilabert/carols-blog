function toggleSubNav() {
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = this.nextElementSibling;
    menu.hidden = !menu.hidden;
}

document.addEventListener("DOMContentLoaded", function () {
    let subNavButton = document.getElementById('stuff-subnav');
    subNavButton.addEventListener('click', toggleSubNav);
});