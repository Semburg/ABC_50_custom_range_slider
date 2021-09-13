const range = document.getElementById('range')
const numbr = document.getElementById('number-visible')

range.addEventListener('input', (e) => {
    const value = +e.target.value

    const range_width = getComputedStyle(e.target).getPropertyValue('width')

    const label_width = getComputedStyle(numbr).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    // MOVING the result window with changes:
    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2


    numbr.style.left = `${left}px`

    numbr.innerHTML = value

})