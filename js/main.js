const prev = document.querySelector(".arrow.left")
const next = document.querySelector(".arrow.right")
const nowShowing = document.querySelector(".theater2__showing img");
const roomNum = document.querySelector(".theater2__room")
const movieTitle = document.querySelector(".movie__title")
const moviePoster = document.querySelector("#moviePoster")
const movieOpen = document.querySelector(".movie__release p")
const movieScore = document.querySelector(".movie__grade.internet__grade p")
const movieScoreMy = document.querySelector(".movie__grade.my__grade p")
const movieStory = document.querySelector(".story__info")
const enterBtn = document.querySelector(".door")
const theaterSection = document.querySelector(".theater")
const backToTop = document.querySelector(".backToTop")
const movieClips = document.querySelectorAll(".clip__pic img")
let movieNum = 0

const totalNum = movies.length

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0)
  }, 0)


  prev.addEventListener('click', function () {
    if (movieNum > 0) {
      movieNum--
    } else {
      movieNum = totalNum - 1;
    }
    ChangeFunc()
  })

  next.addEventListener('click', function () {
    if (movieNum < totalNum - 1) {
      movieNum++
    } else {
      movieNum = 0;
    }
    ChangeFunc()
  })
  movieNum = Math.floor(Math.random() * (totalNum))
  ChangeFunc()


  // enterBtn.addEventListener('click', function () {
  //   window.scrollTo({
  //     top: theaterSection.offsetTop,
  //     behavior: 'smooth'
  //   })
  // })
  enterBtn.addEventListener('click', function () {
    TweenMax.to(window, 1.5, {
      scrollTo: {
        y: ".theater",
        autoKill: true,
      },
      ease: Power3.easeInOut
    })
    TweenMax.from(".theater", 1.8, {
      opacity: 0,
      x: -50,
      delay: .8
    })
    TweenMax.to(".door", 1.5, {
      opacity: 0,
      scale: 4,
      yoyo: true,
      repeat: 1
    })
  })
}

// backToTop.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   })
// })
backToTop.addEventListener("click", function () {
  TweenMax.to(window, 1.5, {
    scrollTo: {
      y: 0,
      autoKill: true,
    },
    ease: Power3.easeInOut
  })
})


function ChangeFunc() {
  roomNum.textContent = movieNum + 1
  nowShowing.setAttribute('src', `./img/${movies[movieNum].image}.jpg`)
  moviePoster.setAttribute('src', `./img/${movies[movieNum].image}.jpg`)
  movieTitle.textContent = movies[movieNum].title
  movieOpen.textContent = movies[movieNum].openDate
  movieScore.innerHTML = `<span>&starf;</span> ${movies[movieNum].score}`
  movieScoreMy.innerHTML = `<span>&starf;</span> ${movies[movieNum].myscore}`
  movieStory.textContent = movies[movieNum].story
  movieClips.forEach((el, index) => {
    el.setAttribute('src', `./img/${movies[movieNum].image}_clip${index + 1}.jpg`)
  })
}