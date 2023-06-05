//필요한 엘리먼트들을 선택한다.
const openButton = document.querySelector(".md_open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".md_overlay");
const closeButton = modal.querySelector(".md_close");

//동작함수
const handleModal = (e) => {
    e.preventDefault();
    modal.classList.toggle("hidden");
    const body = document.querySelector('body')
};

//클릭 이벤트
openButton.addEventListener('click',handleModal)
closeButton.addEventListener("click", handleModal);
