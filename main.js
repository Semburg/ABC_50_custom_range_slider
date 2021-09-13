const range = document.getElementById('range')
const numbr = document.getElementById('number-visible')        

range.addEventListener('input', (e) => {
    const value = e.target.value

    const range_width = getComputedStyle(e.target).getPropertyValue('width')

    const label_width = getComputedStyle(numbr).getPropertyValue('width')
    console.log( range_width, )


    numbr.innerHTML = value

})