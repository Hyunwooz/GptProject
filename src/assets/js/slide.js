const $nextButton = $modal.querySelector(".md_next");
const $prevButton = $modal.querySelector(".md_prev");
const $md_content = document.querySelector(".md_content")
const content_Els = $md_content.querySelectorAll('div');
const cicles = document.querySelectorAll('.md_circle > div');

// 슬라이드의 위치 기본값은 0
let curr_index = 0;

// 현재 슬라이드의 위치를 표시해주는 div 색상 초기화
const resetCircle = () => {
    [...cicles].forEach(cicles => {
        cicles.classList.remove('bg-blue-400')
        cicles.classList.add('bg-gray-400')
    })
}

// 현재 슬라이드의 위치를 알려줌
const whereEl = () => {
    const here = cicles[curr_index]
    resetCircle()
    here.classList.toggle('bg-gray-400')
    here.classList.toggle('bg-blue-400')
}

// 슬라이드의 Next 기능
const handleNext = () => {
    if (curr_index < content_Els.length - 1) {
        const curr = content_Els[curr_index]

        curr_index += 1

        const next = content_Els[curr_index]

        curr.classList.toggle("hidden")
        next.classList.toggle("hidden")
        whereEl()
    } 
}

// 슬라이드의 Prev 기능
const handlePrev = () => {
    if (content_Els.length - 1 >= curr_index && curr_index > 0) {
        const curr = content_Els[curr_index]

        curr_index -= 1

        const prev = content_Els[curr_index]

        curr.classList.toggle("hidden")
        prev.classList.toggle("hidden")
        whereEl()
    }
}

$nextButton.addEventListener("click",handleNext)
$prevButton.addEventListener("click",handlePrev)