import './style.css'
import defaultImage from './example/cat1.png'

document.querySelector('#app').innerHTML = `
  <div class="content">
    <h1>Avatar Designer</h1>
    <p>Try one of the provided options:</p>

    <img src="${defaultImage}" id="avatar-image" class="" alt="" />

    <div class="image-buttons">
      <button id="image1" type="button" data-image="./example/cat1.png">Image 1</button>
      <button id="image2" type="button" data-image="./example/cat2.jpg">Image 2</button>
      <button id="image3" type="button" data-image="./example/cat3.png">Image 3</button>
    </div>

    <div class="editor">
      <label for="border-radius">Border radius:</label>
      <input type="range" id="border-radius" name="border-radius" min="0" max="500" />
    </div>

    <div class="editor">
      <label for="border-color">Border color:</label>
      <input type="color" id="border-color" name="border-color" value="#e66465" />
    </div>
  </div>
`

const border_radius = document.querySelector('#border-radius')
const border_color = document.querySelector('#border-color')
const avatar_image = document.querySelector('#avatar-image')

const saved_border_radius = localStorage.getItem('borderRadius')
const saved_border_color = localStorage.getItem('borderColor')

if (saved_border_radius) {
  avatar_image.style.borderRadius = `${saved_border_radius}px`
  border_radius.value = saved_border_radius //restore value
}

if (saved_border_color) {
  avatar_image.style.borderColor = `${saved_border_color}`
  border_color.value = saved_border_color //restore value
}

border_radius.addEventListener("change", () => {
  avatar_image.style.borderRadius = `${border_radius.value}px`
  localStorage.setItem('borderRadius', border_radius.value) //set to local storage
})

border_color.addEventListener("change", () => { 
  avatar_image.style.borderColor = `${border_color.value}`
  localStorage.setItem('borderColor', border_color.value) //set to local storage
})

const image_buttons = document.querySelectorAll('button') //all image buttons

image_buttons.forEach(image_button => { //for each image button
  image_button.addEventListener("click", () => { //when you click an image button
    image_buttons.forEach(image_button => image_button.classList.remove('active')) //remove active from all buttons
    image_button.classList.add('active') //add active to clicked button
    avatar_image.src = image_button.dataset.image //change avatar image to clicked image button
  })
})

