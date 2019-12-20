const body = document.querySelector('body')
const input_R = document.querySelector('#range-R input')
const input_G = document.querySelector('#range-G input')
const input_B = document.querySelector('#range-B input')
const hexCodeSpan = document.querySelector('#hex-code span')

function convertRadixTenToRadixSixteen(radixTen) {
  radixTen = Number(radixTen)
  // number.toString(radix): 10 進制的 number >> radix 進制 (2~36)
  return radixTen.toString(16).padStart(2, '0') // 若只有一位數，左邊要補 0
}

// 若用 change 會變移動完到定點後才觸發，改用 change
document.addEventListener('input', () => {
  let hexCode_R = convertRadixTenToRadixSixteen(input_R.value)
  let hexCode_G = convertRadixTenToRadixSixteen(input_G.value)
  let hexCode_B = convertRadixTenToRadixSixteen(input_B.value)
  let hexCode = `#${hexCode_R}${hexCode_G}${hexCode_B}`

  // 1. change target span value
  event.target.nextElementSibling.textContent = event.target.value

  // 2. change HTML hex color code
  hexCodeSpan.textContent = hexCode

  // 3. change background color
  body.style.background = hexCode
})