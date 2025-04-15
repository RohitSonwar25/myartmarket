let searchForm = document.querySelector('.search_form');

document.querySelector('#search_btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.signout');
document.querySelector('#logout_btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu_btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
        
}



window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    




    var swiper = new Swiper(".product_slider", {
        loop:true,
        spaceBetween: 20,

        autoplay:{
            Delay: 7500,
            disableInteraction: false,
        },
        
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
            
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
      });
