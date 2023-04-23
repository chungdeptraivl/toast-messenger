function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.querySelector('#toast')
    if (main) {
        const toast = document.createElement('div')
        
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);

        toast.addEventListener('click', (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        })

        const icons = {
            success: 'fa-circle-check',
            info: 'fa-info-circle',
            warning: "fa-triangle-exclamation",
            error: 'fa-exclamation-circle'
        }

        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)

        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft 0.5s ease, fadeOut 1s linear ${delay}s forwards`
        toast.innerHTML =
            `
            <div class="toast__icon">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast)
    }
}

const successBtn = document.querySelector('.btn--success')
const infoBtn = document.querySelector('.btn--info')
const warningBtn = document.querySelector('.btn--warning')
const errorBtn = document.querySelector('.btn--error')

successBtn.addEventListener('click', () => {
    toast({
        title: 'Success ',
        message: 'Connect success with your internet',
        type: 'success',
        duration: 3000
    })
})

infoBtn.addEventListener('click', () => {
    toast({
        title: 'Info ',
        message: 'What about you need in my website',
        type: 'info',
        duration: 3000
    })
})

warningBtn.addEventListener('click', () => {
    toast({
        title: 'Warning ',
        message: 'Your connection is weak',
        type: 'warning',
        duration: 3000
    })
})

errorBtn.addEventListener('click', () => {
    toast({
        title: 'Error ',
        message: 'Connect fail with your internet, try again here',
        type: 'error',
        duration: 3000
    })
})