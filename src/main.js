VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});

TwinkleStar.init(document.querySelector('.scene'))


window.addEventListener('scroll', () => {
    const page0 = document.querySelector('#page0')

	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	let windowHeight = window.innerHeight; // 스크린 창
	let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

    console.log(scrollLocation, windowHeight, fullHeight)

    if(scrollLocation*2 > windowHeight) {
        page0.style.animation = "fadein 1s forwards "

    }
    else {
        page0.style.animation = "fadeout 1s forwards "
    }
})

