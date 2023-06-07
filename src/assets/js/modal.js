
const $openButton = document.querySelector(".md_open");
const $modal = document.querySelector(".modal");
const $closeButton = $modal.querySelector(".md_close");

// Modal on/off
const handleModal = (e) => {
    e.preventDefault();
    $modal.classList.toggle("hidden");
};

$openButton.addEventListener("click",handleModal)
$closeButton.addEventListener("click", handleModal);
