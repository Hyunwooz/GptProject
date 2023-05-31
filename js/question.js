const $campaignGoal = document.querySelector(".campaignGoal");
const $campaignType = document.querySelector(".campaignType");
const $category = document.querySelector(".campaignCategory");
const $age = document.querySelector(".targetAge");
const $location = document.querySelector(".targetLocation");
const $gender = document.querySelector(".targetGender");

let gptSetting = JSON.parse(localStorage.getItem("gptSetting"));

// 만약 이미 gptSetting Data가 있다면 보여주기

// if (gptSetting) {
//     const q2 = document.querySelector(".question__2");
//     const q3 = document.querySelector(".question__3");
//     const q4 = document.querySelector(".question__4");
//     const q5 = document.querySelector(".question__5");

//     q2.classList.remove("hidden");
//     q3.classList.remove("hidden");
//     q4.classList.remove("hidden");
//     q5.classList.remove("hidden");
// }

[...$campaignGoal.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", () => {
        const q2 = document.querySelector(".question__2");
        q2.classList.remove("hidden");
    });
});

[...$campaignType.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", () => {
        const q3 = document.querySelector(".question__3");
        q3.classList.remove("hidden");
    });
});

[...$category.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", () => {
        const q4 = document.querySelector(".question__4");
        q4.classList.remove("hidden");
    });
});

[...$age.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", () => {
        const q5 = document.querySelector(".question__5");
        q5.classList.remove("hidden");
    });
});
