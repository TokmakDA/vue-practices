let interval

const mouseover = (e) => {
  e.target.style.fontWeight = '900'
}

const mouseout = (e) => {
  e.target.style.fontWeight = '500'
}

export default {
  mounted(el, binding) {
    console.log('mounted = el => ', el)
    console.log('mounted = binding => ', binding)

    // el.style.color = binding.value
    el.style[binding.arg] = binding.value
    if (binding.modifiers.blink) {
      let flag = true
      interval = setInterval(() => {
        el.style.color = flag ? 'orange' : 'green'
        flag = !flag
      }, 500)
    }
    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },

  updated(el, binding) {
    console.log('updated = el => ', el)
    console.log('updated = binding => ', binding)

    // el.style.color = binding.value
    el.style[binding.arg] = binding.value
  },

  unmounted(el) {
    if (interval) {
      clearTimeout(interval)
    }

    el.removeEventListener('mouseover', mouseover)
    el.removeEventListener('mouseout', mouseout)
  }
}
