window.addEventListener('load', function(){
    setTimeout(
        function open(event){
            document.querySelector('.popup').style.display = 'flex';
        },
        5000 
    )
});

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
});

document.querySelector('#closeTo').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
});