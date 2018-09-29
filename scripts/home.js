/* INIT HOME */
window.addEventListener('load', function(){
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      center:true,
      autoPlay: 4000,
      autoWidth:true,
      loop:true,
      items : 3,
      pagination : false,
    })
  })
})

/* PARALLAX EFFECT ANIMATION */
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
  window.ondevicemotion = function (e){
    let conceptBloc = document.querySelector('.concept')
    let layerOne = document.querySelector('.concept-text')
    let layerTwo = document.querySelector('.concept-animation')
    conceptBloc.addEventListener('mousemove', function (e) {
      let pageX = e.accelerationIncludingGravity.x
      let pageY = e.accelerationIncludingGravity.y
      layerOne.style.webkitTransform = 'translateX(' + pageX / 170 + '%) translateY(' + pageY / 70 + '%)';
      layerOne.style.transform = 'translateX(' + pageX / 170 + '%) translateY(' + pageY / 70 + '%)';
      layerTwo.style.webkitTransform = 'translateX(-' + pageX / 200 + '%) translateY(-' + pageY / 350 + '%)';
      layerTwo.style.transform = 'translateX(-' + pageX / 200 + '%) translateY(-' + pageY / 350 + '%)';
    })
  }
}
else{
  window.onload = function (){
    let conceptBloc = document.querySelector('.concept')
    let layerOne = document.querySelector('.concept-text')
    let layerTwo = document.querySelector('.concept-animation')
    conceptBloc.addEventListener('mousemove', function (e) {
      let pageX = e.clientX
      let pageY = e.clientY
      layerOne.style.webkitTransform = 'translateX(' + pageX / 170 + '%) translateY(' + pageY / 70 + '%)';
      layerOne.style.transform = 'translateX(' + pageX / 170 + '%) translateY(' + pageY / 70 + '%)';
      layerTwo.style.webkitTransform = 'translateX(-' + pageX / 200 + '%) translateY(-' + pageY / 350 + '%)';
      layerTwo.style.transform = 'translateX(-' + pageX / 200 + '%) translateY(-' + pageY / 350 + '%)';
    })
  }
}


/* FACTS SLIDER GENERATION */
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

/* PRODUCT PART CARDS GENERATION */
let productImages=JSON.stringify(product.images)
let productNames=JSON.stringify(product.names)
let productTitles=JSON.stringify(product.titles)
let productDescriptions=JSON.stringify(product.descriptions)
let productColors=JSON.stringify(product.colors)
let elementsContainer=document.querySelector('.product-view')
productImages=JSON.parse(productImages)
productNames=JSON.parse(productNames)
productTitles=JSON.parse(productTitles)
productDescriptions=JSON.parse(productDescriptions)
productColors=JSON.parse(productColors)
for(let i=0;i<productImages.length;i++){
  let element=document.createElement('div')
  let imageContainer=document.createElement('div')
  let imageElement=document.createElement('img')
  let textElement=document.createElement('div')
  let h4Element=document.createElement('h4')
  let descriptionElement=document.createElement('p')
  element.classList.add('row', 'container-fluid', 'element')
  elementsContainer.appendChild(element)
  imageContainer.classList.add('col-lg-6', 'image-element')
  element.appendChild(imageContainer)
  imageContainer.style.backgroundColor=productColors[i]
  if(i%2 != 0){
    imageContainer.style.order='1'
  }
  imageElement.setAttribute('src',productImages[i])
  imageElement.setAttribute('alt',productNames[i])
  imageContainer.appendChild(imageElement)
  textElement.classList.add('col-lg-6','text-element')
  element.appendChild(textElement)
  h4Element.innerHTML=productTitles[i]
  textElement.appendChild(h4Element)
  descriptionElement.innerHTML=productDescriptions[i]
  textElement.appendChild(descriptionElement)
}
