const searchIcon = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const profile = document.querySelector(".profile-settings");
const naV = document.querySelector(".nav-wrapper")
const filterIcon = document.querySelector('.filter-icon');

searchIcon.addEventListener('click',() => {
    search.classList.toggle('mobile-search')
    filterIcon.classList.toggle('filter-icon-show')
})

profile.addEventListener('click', () => {
    naV.classList.toggle('show')
})