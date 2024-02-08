
const btn = document.querySelector('.arrow-wrapper')
const selectDropdown = document.querySelector('.select-dropdown')
const inputMask = document.querySelector('.engineering-form__input-mask')
const selectOptions = document.querySelectorAll('.select-dropdown__option')
const serviceInput = document.getElementById('service-input')

btn && btn.addEventListener('click', (e) => {
  btn.classList.toggle('rotate-arrow')
  selectDropdown.classList.toggle('disabled')
})

selectOptions.forEach((selectOption) => {
  selectOption.addEventListener('click', () => {
    inputMask.textContent = selectOption.textContent
    serviceInput.value = selectOption.textContent
    btn.classList.toggle('rotate-arrow')
    selectDropdown.classList.toggle('disabled')

    console.log(serviceInput.value)
  })
})

const projectsDisabled = document.querySelectorAll('.our-projects__item--disabled')
const projectsEnabled = document.querySelectorAll('.our-projects__item')

projectsDisabled.forEach((project) => {
  project.addEventListener('click', () => {
    projectsEnabled.forEach((projectEnabled) => {
      projectEnabled.classList.add('our-projects__item--disabled')
    })
    project.classList.toggle('our-projects__item--disabled')
    if (document.documentElement.clientWidth <= 768) {
      project.scrollIntoView({behavior: "smooth", block: "end", inline: "center"})
    }
  })
})

const test = document.querySelectorAll('.test')
