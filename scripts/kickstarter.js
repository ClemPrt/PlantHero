let kickstarterButton=document.querySelector('header .kickstarter-button')
let body=document.querySelector('body')
let beforeElement=document.querySelector('main')
kickstarterButton.addEventListener('mouseover', function(){
  let gifContainer=document.createElement('div')
  gifContainer.classList.add('hello-gif')
  body.insertBefore(gifContainer,beforeElement)
})
kickstarterButton.addEventListener('mouseleave', function(){
  let gifContainer=document.querySelector('.hello-gif')
  gifContainer.style.opacity='0'
  setTimeout(function(){gifContainer.remove()}, 200)
})
