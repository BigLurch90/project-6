const popupAdd = () => {
    const membershipButton = document.querySelector('#membership')
    const closeButton = document.querySelector('#close')
    
    const openAdd = () => {
        setTimeout( function open(){
                document.querySelector('.popup').style.display = 'flex';
            }, 5000)
    }
    
    const closeAdd = () => {
        document.querySelector('.popup').style.display = 'none';
    }
    
    window.addEventListener('load', openAdd);
    
    membershipButton.addEventListener('click', closeAdd);
    
    closeButton.addEventListener('click', closeAdd);


}

popupAdd()
