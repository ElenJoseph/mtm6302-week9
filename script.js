const fruits = ['apples', 'bananas', 'cherries']
const colors = ['red', 'green', 'blue', 'purple', 'orange']

//find the h1 tag
const $header = document.getElementById
('header')
console.log([$header])
$header.textContent = 'Hello'
$header.classList.add ('highlight')
$header.style.color ='red'
$header.style.backgroundColor = 'yellow'



//find the buttons

const $buttons =
document.querySelectorAll('.button')
console.log ($buttons)

for (const $button of $buttons){
    $button.style.backgroundColor ='blue'
}

//find the "bread" list item

const $list = document.getElementById ('list')
console.log($list.children[1])

const $item = document.querySelector ('li')
console.log($item.nextElementSibling)

const $bread = document.querySelector ('li:nth-of-type(2)')
console.log($bread)