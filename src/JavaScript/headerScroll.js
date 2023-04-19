const headarScroll = () => {
    
    // Get element from DOM
    const header = document.querySelector('.site-header')
    

    // Toggle Header Class
    const toggleHeaderClass = () => {
        
        // If window has scrolled mor then 200px, add a class
        // else remove it
        if ( window.scrollY > 70 ) {
            header.classList.add('site-header--scroll')
        } else {
            header.classList.remove('site-header--scroll')
        }
    }

    // Add event to window scroll
    window.addEventListener('scroll', toggleHeaderClass)

}

headarScroll()