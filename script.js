let introSidebar = document.getElementById('intro-sidebar');
document.getElementById('intro-sidebar-open-btn').addEventListener('click', (e) => {
    introSidebar.classList.add('active');
    e.preventDefault();
});
document.getElementById('intro-sidebar-close-btn').addEventListener('click', (e) => {
    introSidebar.classList.remove('active');
    e.preventDefault();
});

let sidebar = document.getElementById('sidebar'),
    menuBtn = document.getElementById('hamburger-menu-btn');
menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
    e.preventDefault();
});

const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')
})
