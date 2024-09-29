document.querySelector('.no').checked = false

var composition = (e) => {

    if (e.target.classList.contains('no')) {
        document.querySelector('.nav').classList.toggle('nav-2')
        document.querySelector('.header').classList.toggle('header-2')
        document.querySelector('.header__links--btn').classList.toggle('header__links--btn-2')
        document.querySelector('.main').classList.toggle('main-2')
        document.querySelector('.footer').classList.toggle('footer-2')
        document.querySelector('.section__p').classList.toggle('section__p-2')
    }
    
}

document.addEventListener('click', composition)




  

var arr = ['coffee.png', 'coffee1.png', 'coffee2.png', 'coffee3.png' , 'coffee4.png', 'coffee5.png']
var arr2 = ['Weshop.png', 'Weshop1.png', 'Weshop2.png', 'Weshop3.png' , 'Weshop4.png', 'Weshop5.png']
var arr3 = ['Delicious.png', 'Delicious1.png', 'Delicious2.png', 'Delicious3.png' , 'Delicious5.png', 'Delicious4.png']
  

async function next(delayTime, e) {
  for (let i = 0; i < e; i++) {
    i > 5 ? i = 0 : i
    document.querySelector('.project-image--1').src = '/img2/' + arr[i]
        document.querySelector('.project-image--2').src = '/img2/' + arr2[i]
        document.querySelector('.project-image--3').src = '/img2/' + arr3[i]
      await new Promise((resolve) => setTimeout(resolve, delayTime));
    }
    
  }




  next(3000, Infinity)






