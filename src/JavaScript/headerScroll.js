const headarScroll = () => {
    
    const header = document.querySelector('.site-header')
    

    const toggleHeaderClass = () => {
        

        if ( window.scrollY > 70 ) {
            header.classList.add('site-header--scroll')
        } else {
            header.classList.remove('site-header--scroll')
        }
    }

    window.addEventListener('scroll', toggleHeaderClass)

}

headarScroll()