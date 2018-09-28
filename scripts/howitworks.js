window.addEventListener('load', function(){
  AOS.init({
    durant: 2000,
  })
})

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
