const carousel01 = document.querySelector('#carousel01')
const carousel02 = document.querySelector('#carousel02')
const carousel03 = document.querySelector('#carousel03')
const carousel04 = document.querySelector('#carousel04')
const videosCar01 = document.querySelectorAll('.caru01')
const videosCar02 = document.querySelectorAll('.caru02')
const videosCar03 = document.querySelectorAll('.caru03')
const videosCar04 = document.querySelectorAll('.caru04')


const startVideo = (carusel, list) => {

    carusel.addEventListener('slide.bs.carousel', function () {
        for (let i = 0; i < videosCar01.length; i++) {
            list[i].currentTime = 0;
        }
    });
}

startVideo(carousel01, videosCar01)
startVideo(carousel02, videosCar02)
startVideo(carousel03, videosCar03)
startVideo(carousel04, videosCar04)