const prev = document.querySelector(".arrow.left")
const next = document.querySelector(".arrow.right")
const nowShowing = document.querySelector(".theater2__showing img");
const roomNum = document.querySelector(".theater2__room")
const movieTitle = document.querySelector(".movie__title")
const moviePoster = document.querySelector("#moviePoster")
const movieOpen = document.querySelector(".movie__release p")
const movieScore = document.querySelector(".movie__grade p")
const movieStory = document.querySelector(".story__info")
let movieNum = 0
const movies = [
  {
    image: 'about_time',
    title: '어바웃 타임',
    openDate: '2013.12.05',
    score: '9.30',
    story: '모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다. 바로 시간을 되돌릴 수 있는 능력이 있다는 것 ! 그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수는 없지만, 여자친구는 만들어 줄 순 있으리.. 꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다.그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀. 어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이! 꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다. 하지만 그와 그녀의 사랑이 완벽해질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고, 예상치 못한 사건들이 여기저기 나타나기 시작하는데… 어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?'
  },
  {
    image: 'greenbook',
    title: '그린 북',
    openDate: '2019.01.09',
    score: '9.55',
    story: '1962년 미국, 입담과 주먹만 믿고 살아가던 토니 발레롱가(비고 모텐슨)는 교양과 우아함 그 자체인 천재 피아니스트 돈 셜리(마허샬라 알리) 박사의 운전기사 면접을 보게 된다. 백악관에도 초청되는 등 미국 전역에서 콘서트 요청을 받으며 명성을 떨치고 있는 돈 셜리는 위험하기로 소문난 미국 남부 투어 공연을 떠나기로 결심하고, 투어 기간 동안 자신의 보디가드 겸 운전기사로 토니를 고용한다. 거친 인생을 살아온 토니 발레롱가와 교양과 기품을 지키며 살아온 돈 셜리 박사. 생각, 행동, 말투, 취향까지 달라도 너무 다른 두 사람은 그들을 위한 여행안내서 ‘그린북’에 의존해 특별한 남부 투어를 시작하는데…'
  },
  {
    image: 'again',
    title: '베일리 어게인',
    openDate: '2018.11.22',
    score: '9.42',
    story: '귀여운 소년 ‘이든’의 단짝 반려견 ‘베일리’는 행복한 생을 마감한다. 하지만 눈을 떠보니 다시 시작된 견생 2회차, 아니 3회차?! 1등 경찰견 ‘엘리’에서 찰떡같이 마음을 알아주는 소울메이트 ‘티노’까지! 다시 태어날 때마다 성별과 생김새, 직업(?)에 이름도 바뀌지만, 여전히 영혼만은 사랑 충만! 애교 충만! 주인바라기 ‘베일리’ 어느덧 견생 4회차, 방랑견이 되어 떠돌던 ‘베일리’는 마침내 자신이 돌아온 진짜 이유를 깨닫고 어딘가로 달려가기 시작하는데…'
  },
]
const totalNum = movies.length

window.onload = function () {
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
}

function ChangeFunc() {
  roomNum.textContent = movieNum + 1
  nowShowing.setAttribute('src', `./img/${movies[movieNum].image}.jpg`)
  moviePoster.setAttribute('src', `./img/${movies[movieNum].image}.jpg`)
  movieTitle.textContent = movies[movieNum].title
  movieOpen.textContent = movies[movieNum].openDate
  movieScore.innerHTML = `<span>&starf;</span> ${movies[movieNum].score}`
  movieStory.textContent = movies[movieNum].story
}