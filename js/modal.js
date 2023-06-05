
const $openButton = document.querySelector(".md_open");
const $modal = document.querySelector(".modal");
const $closeButton = $modal.querySelector(".md_close");
const $showSearch = $modal.querySelector(".show_search");
const $showDisplay = $modal.querySelector(".show_display");
const $showVideo = $modal.querySelector(".show_video");
const $searchDiv = $modal.querySelector(".explanation_Search")
const $displayDiv = $modal.querySelector(".explanation_Display")
const $videoDiv = $modal.querySelector(".explanation_Video")

const handleModal = (e) => {
    e.preventDefault();
    $modal.classList.toggle("hidden");
};

const handleShowSearch = () => {
    $showDisplay.classList.remove('bg-blue-400')
    $showDisplay.classList.add('bg-gray-400')
    
    $showSearch.classList.remove('bg-gray-400')
    $showSearch.classList.add('bg-blue-400')

    $showVideo.classList.remove('bg-blue-400')
    $showVideo.classList.add('bg-gray-400')

    $searchDiv.classList.remove('hidden')
    $videoDiv.classList.add('hidden')
    $displayDiv.classList.add('hidden')
}

const handleShowDisplay = () => {
    $showVideo.classList.remove('bg-blue-400')
    $showVideo.classList.add('bg-gray-400')

    $showSearch.classList.remove('bg-blue-400')
    $showSearch.classList.add('bg-gray-400')

    $showDisplay.classList.remove('bg-gray-400')
    $showDisplay.classList.add('bg-blue-400')

    $searchDiv.classList.add('hidden')
    $videoDiv.classList.add('hidden')
    $displayDiv.classList.remove('hidden')
}

const handleShowVideo = () => {
    $showDisplay.classList.remove('bg-blue-400')
    $showDisplay.classList.add('bg-gray-400')
    
    $showSearch.classList.remove('bg-blue-400')
    $showSearch.classList.add('bg-gray-400')

    $showVideo.classList.remove('bg-gray-400')
    $showVideo.classList.add('bg-blue-400')

    $searchDiv.classList.add('hidden')
    $videoDiv.classList.remove('hidden')
    $displayDiv.classList.add('hidden')
}

$openButton.addEventListener("click",handleModal)
$closeButton.addEventListener("click", handleModal);
$showSearch.addEventListener("click",handleShowSearch)
$showDisplay.addEventListener("click",handleShowDisplay)
$showVideo.addEventListener("click",handleShowVideo)