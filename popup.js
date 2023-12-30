const popupLinks = document.querySelectorAll(".popup-link")
const body = document.querySelector("body")
const lockPaddings = document.querySelectorAll(".lock-padding")
const timeout = 800

let unlock = true

if (popupLinks.length > 0) {
	popupLinks.forEach((popupLink) => {
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '')
			const currentPopup = document.getElementById(popupName)
			popupOpen(currentPopup)
			e.preventDefault()
		})
	})
}

const popupCloseIcons = document.querySelectorAll(".close-popup")
if (popupCloseIcons.length > 0) {
	popupCloseIcons.forEach((popupCloseIcon) => {
		popupCloseIcon.addEventListener('click', function (e) {
			popupClose(popupCloseIcon.closest('.popup'))
			e.preventDefault()
		})
	})
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector(".popup.open")
		if (popupActive) {
			popupClose(popupActive, false)
		} else {
			bodyLock()
		}
		currentPopup.classList.add('open')
		currentPopup.addEventListener('click', function (e) {
			if (!e.target.closest(".popup__content")) {
				popupClose(e.target.closest('.popup'))
			}
		})
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open')
		if (doUnlock) {
			bodyUnLock()
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

	if (lockPaddings.length > 0) {
		lockPaddings.forEach((lockPadding) => {
			lockPadding.style.paddingRight = lockPaddingValue
		})
	}
	body.style.paddingRight = lockPaddingValue
	body.classList.add('lock')

	unlock = false
	setTimeout(() => {
		unlock = true
	}, timeout);
}

function bodyUnLock() {
	setTimeout(() => {
		if (lockPaddings.length > 0) {
				lockPaddings.forEach((lockPadding) => {
				lockPadding.style.paddingRight = '0px'
			})
		}

		body.style.paddingRight = '0px'
		body.classList.remove('lock')
	}, timeout);

	unlock = false
	setTimeout(() => {
		unlock = true
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open')
		popupClose(popupActive)
	}
})