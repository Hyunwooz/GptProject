const $nextButton = $modal.querySelector(".md_next");
const $prevButton = $modal.querySelector(".md_prev");
const $md_content = document.querySelector(".md_content")
const childs = $md_content.querySelectorAll('div');
const cicles = document.querySelectorAll('.md_circle > div');

// 현재 위치 기본값은 0
let curr_index = 0;

// 현재 위치를 표시해주는 Circle div 색상 초기화
const resetCircle = () => {
    [...cicles].forEach(cicles => {
        cicles.classList.remove('bg-blue-400')
        cicles.classList.add('bg-gray-400')
    })
}

// 현재 위치를 알려줌
const whereEl = () => {
    const here = cicles[curr_index]
    resetCircle()
    here.classList.toggle('bg-gray-400')
    here.classList.toggle('bg-blue-400')
}

// 슬라이드 Next 기능
const handleNext = () => {
    if (curr_index < childs.length - 1) {
        const curr = childs[curr_index]

        curr_index += 1

        const next = childs[curr_index]

        curr.classList.toggle("hidden")
        next.classList.toggle("hidden")
        whereEl()
    } 
}

// 슬라이드 Prev 기능
const handlePrev = () => {
    if (childs.length - 1 >= curr_index && curr_index > 0) {
        const curr = childs[curr_index]

        curr_index -= 1

        const prev = childs[curr_index]

        curr.classList.toggle("hidden")
        prev.classList.toggle("hidden")
        whereEl()
    }
}

$nextButton.addEventListener("click",handleNext)
$prevButton.addEventListener("click",handlePrev)