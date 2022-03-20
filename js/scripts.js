

/* abrir menu */
    const navMenu = document.getElementById('nav-menu'),
        navTog = document.getElementById('nav-tog'),
        navClose = document.getElementById('nav-close')


    if(navTog){
        navTog.addEventListener('click', () =>{
                navMenu.classList.add('show-menu')
        })
    }

    /* fechar menu */   if(navClose){
        navClose.addEventListener('click', () =>{
                navMenu.classList.remove('show-menu')
        })

    }const navLink = document.querySelectorAll('nav_link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        /* seleção remover*/
        navMenu.classList.remove('show-menu')
    }
        navLink.forEach(n => n.addEventListener('click', linkAction))