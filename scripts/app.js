/*let images=document.querySelectorAll('.pic-element img')
let i=0
let textZone=document.querySelector('.text-story')
function inViewport(textZone){
  let images=document.querySelectorAll('.pic-element img')
  let viewport=images[0].getBoundingClientRect()
  console.log(textZone)
  if(viewport.top>=50 && viewport.bottom<=900){
    console.log('yes')
    document.querySelector('.text-story').style.backgroundColor='#8ACDAC'
    }
   else{
    console.log('nope')
    document.querySelector('.text-story').style.backgroundColor='#E9464B'
  }
}

document.addEventListener('scroll', inViewport)*/

window.addEventListener('load', function(){
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      center:true,
      autoPlay: 4000,
      autoWidth:true,
      loop:true,
      items : 3,
      pagination : false,
    });
  });
})


let imgPositions = [0]
let images = document.querySelectorAll('.pic-element img')
let imgDescription = ['#8ACDAC', '#EAE1D8', '#23A06A', '#E9464B']
let textZone = document.querySelector('.text-story')
let timelineElements = document.querySelectorAll('.timeline-element')
let viewportHeight = window.innerHeight
console.log(viewportHeight)
for (i = 0; i < images.length; i++) {
    if (i == 0) {
        imgPositions.push(images[i].offsetHeight + (viewportHeight / 10))
    }
    else if (i > 0) {
        imgPositions.push(imgPositions[i] + images[i].offsetHeight + (viewportHeight / 10))
    }
    console.log(imgPositions)
}
function storyTextChanger(timelineElements, k) {
    timelineElements[k - 1].classList.toggle('is-active')
    timelineElements[k].classList.toggle('is-active')
}
function storyImgChanger(imgPositions, imgDescription, textZone, timelineElements, k) {
    let scrollY = window.scrollY
    if (scrollY >= 0 && scrollY < imgPositions[1]) {
        textZone.style.backgroundColor = imgDescription[0]
        storyTextChanger(timelineElements, 0)
    }
    else if (scrollY >= imgPositions[1] && scrollY < imgPositions[2]) {
        textZone.style.backgroundColor = imgDescription[1]
        storyTextChanger(timelineElements, 1)
    }
    else if (scrollY >= imgPositions[2] && scrollY < imgPositions[3]) {
        textZone.style.backgroundColor = imgDescription[2]
        storyTextChanger(timelineElements, 2)
    }
    else if (scrollY >= imgPositions[3] && scrollY < imgPositions[4]) {
        textZone.style.backgroundColor = imgDescription[3]
        storyTextChanger(timelineElements, 3)
    }
    else if (scrollY >= imgPositions[4]) {
        textZone.style.backgroundColor = imgDescription[4]
        storyTextChanger(timelineElements, 4)
    }
    //console.log(scrollY)
}
document.addEventListener('scroll', function () {
    storyImgChanger(imgPositions, imgDescription, textZone, timelineElements)
})


/* Parallax effect animation */
window.onload = function () {
    let conceptBloc = document.querySelector('.concept'),
        layerOne = document.querySelector('.concept-text'),
        layerTwo = document.querySelector('.concept-animation');
        sliderContainer = document.querySelector('.slider');
        sliderList = document.querySelector('.slideshow');

    conceptBloc.addEventListener('mousemove', function (e) {
        let pageX = e.clientX,
            pageY = e.clientY;
        layerOne.style.webkitTransform = 'translateX(' + pageX / 170 + '%) translateY(' + pageY / 70 + '%)';
        layerOne.style.transform = 'translateX(' + pageX / 170 + '%) translateY(' + pageY / 70 + '%)';
        layerTwo.style.webkitTransform = 'translateX(-' + pageX / 200 + '%) translateY(-' + pageY / 350 + '%)';
        layerTwo.style.transform = 'translateX(-' + pageX / 200 + '%) translateY(-' + pageY / 350 + '%)';
    })

}


// FACTS SLIDER GENERATION
let sliderIllustrations=JSON.stringify(slider.illustrations)
let sliderIcons=JSON.stringify(slider.icons)
let sliderNames=JSON.stringify(slider.names)
let sliderH3=JSON.stringify(slider.h3)
let sliderDescriptions=JSON.stringify(slider.descriptions)
let sliderContainer=document.querySelector('.clients-carousel')
sliderIllustrations=JSON.parse(sliderIllustrations)
sliderIcons=JSON.parse(sliderIcons)
sliderNames=JSON.parse(sliderNames)
sliderH3=JSON.parse(sliderH3)
sliderDescriptions=JSON.parse(sliderDescriptions)
for(let i=0; i<sliderIllustrations.length; i++){
  let liSlide=document.createElement('li')
  let illustrationSlide=document.createElement('img')
  let iconSlide=document.createElement('img')
  let h3Slide=document.createElement('h3')
  let pSlide=document.createElement('p')
  liSlide.classList.add('slide')
  sliderContainer.appendChild(liSlide)
  illustrationSlide.setAttribute('src',sliderIllustrations[i])
  illustrationSlide.setAttribute('alt',sliderNames[i])
  illustrationSlide.classList.add('slide-illustration')
  liSlide.appendChild(illustrationSlide)
  iconSlide.setAttribute('src',sliderIcons[i])
  iconSlide.setAttribute('alt',sliderNames[i])
  iconSlide.classList.add('icon')
  liSlide.appendChild(iconSlide)
  h3Slide.innerHTML=sliderH3[i]
  liSlide.appendChild(h3Slide)
  pSlide.classList.add('slide-description')
  pSlide.innerHTML=sliderDescriptions[i]
  liSlide.appendChild(pSlide)
}


// HOW IT WORKS GENERATION
let howitworksH3 = JSON.stringify(howitworks.h3)
let howitworksH2 = JSON.stringify(howitworks.h2)
let howitworksDescriptions = JSON.stringify(howitworks.descriptions)
let howitworksIllustrations = JSON.stringify(howitworks.illustrations)
let howitworksContainer = document.querySelector('.module-howitworks')
howitworksH3 = JSON.parse(howitworksH3)
howitworksH2 = JSON.parse(howitworksH2)
howitworksDescriptions = JSON.parse(howitworksDescriptions)
howitworksIllustrations = JSON.parse(howitworksIllustrations)
for (let i = 0; i < howitworksIllustrations.length; i++) {
    let h2Slides = document.createElement('h2')
    let h3Slides = document.createElement('h3')
    let pSlides = document.createElement('p')
    liSlides=document.querySelector('li')
    liSlides.classList.add('slides')
    howitworksContainer.appendChild(liSlides)
    h3Slides.innerHTML = howitworksH3[i]
    liSlides.appendChild(h3Slides)
}
