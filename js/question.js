if (gptSetting) {
    const q2 = document.querySelector(".question__2");
    q2.classList.remove("hidden");
    const q3 = document.querySelector(".question__3");
    q3.classList.remove("hidden");
    const q4 = document.querySelector(".question__4");
    q4.classList.remove("hidden");
    const q5 = document.querySelector(".question__5");
    q5.classList.remove("hidden");
}

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
