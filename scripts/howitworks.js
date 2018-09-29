window.addEventListener('load', function(){
  AOS.init({
    durant: 2000,
  })
})

/* HOW IT WORKS GENERATION */
let howitworksH3 = JSON.stringify(howitworks.h3)
let howitworksH2 = JSON.stringify(howitworks.h2)
let howitworksDescriptions = JSON.stringify(howitworks.descriptions)
let howitworksIllustrations = JSON.stringify(howitworks.illustrations)
let howitworksContainer = document.querySelector('main')
howitworksH3 = JSON.parse(howitworksH3)
howitworksH2 = JSON.parse(howitworksH2)
howitworksDescriptions = JSON.parse(howitworksDescriptions)
howitworksIllustrations = JSON.parse(howitworksIllustrations)
for (let i = 0; i < howitworksIllustrations.length; i++) {
  let sectionHowitworks=document.createElement('section')
  let row=document.createElement('div')
  let containerText=document.createElement('div')
  let containerImage=document.createElement('div')

  let imageHowitworks=document.createElement('img')
  let titleH2=document.createElement('h2')
  let titleH3=document.createElement('h3')
  let textHowitworks=document.createElement('p')
  sectionHowitworks.classList.add('bg')
  howitworksContainer.appendChild(sectionHowitworks)
  row.classList.add('row')
  sectionHowitworks.appendChild(row)
  containerText.classList.add('col-md-6','col-xs-12','text')
  containerText.setAttribute('data-aos','fade-right')
  containerText.setAttribute('data-aos-anchor-placement','top-bottom')
  row.appendChild(containerText)
  titleH2.innerHTML=howitworksH2[i]
  containerText.appendChild(titleH2)
  titleH3.innerHTML=howitworksH3[i]
  containerText.appendChild(titleH3)
  textHowitworks.innerHTML=howitworksDescriptions[i]
  containerText.appendChild(textHowitworks)
  containerImage.classList.add('col-md-6','col-xs-12','image')
  containerImage.setAttribute('data-aos','fade-left')
  containerImage.setAttribute('data-aos-anchor-placement','top-bottom')
  row.appendChild(containerImage)
  imageHowitworks.setAttribute('src',howitworksIllustrations[i])
  imageHowitworks.setAttribute('alt',howitworksH2[i])
  containerImage.appendChild(imageHowitworks)
}

/* SCROLL TO NEXT SECTION */
/*let slideNumber=0
window.addEventListener('wheel',function(e){
  let scrollDirection=e.deltaY
  let slides=document.querySelectorAll('section')
  if(scrollDirection>=4 && slideNumber<slides.length){
    slides[slideNumber+1].scrollIntoView({
      behavior: 'smooth'
    });
    slideNumber++
  }
  else if(scrollDirection<=4 && slideNumber>0){
    slides[slideNumber-1].scrollIntoView({
      behavior: 'smooth'
    });
    slideNumber--
  }
})*/
