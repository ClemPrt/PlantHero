/* STORY SLIDER GENERATION */
let year = JSON.stringify(story.year)
let month = JSON.stringify(story.month)
let descriptions = JSON.stringify(story.descriptions)
let illustrations = JSON.stringify(story.illustrations)
let names = JSON.stringify(story.names)
let storyContainer = document.querySelector('.story-slideshow')
year = JSON.parse(year)
month = JSON.parse(month)
descriptions = JSON.parse(descriptions)
illustrations = JSON.parse(illustrations)
names = JSON.parse(names)
for (let i=0;i<descriptions.length;i++) {
  let slideContainer=document.createElement('div')
  let textContainer=document.createElement('div')
  let textStory=document.createElement('div')
  let yearSpan=document.createElement('span')
  let monthSpan=document.createElement('span')
  let descriptionP=document.createElement('p')
  let picStory=document.createElement('div')
  let imageStory=document.createElement('img')
  slideContainer.classList.add('col-lg-8','pic-text-story')
  storyContainer.appendChild(slideContainer)
  textContainer.classList.add('text-story-container')
  slideContainer.appendChild(textContainer)
  textStory.classList.add('text-story')
  textContainer.appendChild(textStory)
  yearSpan.innerHTML=year[i]
  textStory.appendChild(yearSpan)
  monthSpan.innerHTML=month[i]
  textStory.appendChild(monthSpan)
  descriptionP.innerHTML=descriptions[i]
  textStory.appendChild(descriptionP)
  picStory.classList.add('pic-story')
  slideContainer.appendChild(picStory)
  imageStory.setAttribute('src',illustrations[i])
  imageStory.setAttribute('alt',names[i])
  picStory.appendChild(imageStory)
}

/* STORY SCROLL & TEXT CORRESPONDANCE */
let images = document.querySelectorAll('.pic-story img')
let textStory=document.querySelectorAll('.text-story')
let imgPositions = [0]
let viewportHeight = window.innerHeight
for (let i=0;i<images.length;i++){
  if (i==0){
    imgPositions.push(images[0].offsetHeight)
  }
  else if (i > 0){
      imgPositions.push(imgPositions[i]+images[i].offsetHeight)
  }
}
console.log(imgPositions)
document.addEventListener('scroll',function(){
  let scroll=window.scrollY
  for(let i=0;i<imgPositions.length;i++){
    if(scroll>(imgPositions[i]-20) && scrollY<(imgPositions[i]+20)){
      for(let k=0;k<textStory.length;k++){
        textStory[k].classList.remove('is-active')
      }
      textStory[i++].classList.add('is-active')
    }
  }
})
