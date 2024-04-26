document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});