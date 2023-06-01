const $campaignGoal = document.querySelector(".campaignGoal");
const $campaignType = document.querySelector(".campaignType");
const $category = document.querySelector(".campaignCategory");
const $age = document.querySelector(".targetAge");
const $location = document.querySelector(".targetLocation");
const $gender = document.querySelector(".targetGender");
const $form = document.querySelector("form");

let gptSetting = JSON.parse(localStorage.getItem("gptSetting"));
gptSetting = [];

const nextQuestion = (event) => {
    let curr = event.target;

    while (curr.tagName != "SECTION") {
        curr = curr.parentNode;
    }

    const parent = curr.id.split("__");
    const nextID = "#question__" + (parseInt(parent[1]) + 1).toString();
    const next = document.querySelector(nextID);
    next.classList.remove("hidden");
};

[...$campaignGoal.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

[...$campaignType.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

[...$category.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

[...$age.querySelectorAll("input")].forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

// Next 버튼 클릭시
$form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newCampaignGoal,
        newCampaignType,
        newCategory,
        newAge,
        newLocation,
        newGender;

    [...$campaignGoal.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCampaignGoal = e.value;
        }
    });

    [...$campaignType.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCampaignType = e.value;
        }
    });

    [...$category.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCategory = e.value;
        }
    });

    [...$age.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newAge = e.value;
        }
    });

    [...$location.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newLocation = e.value;
        }
    });

    [...$gender.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newGender = e.value;
        }
    });

    gptSetting.push({
        newCampaignGoal,
        newCampaignType,
        newCategory,
        newAge,
        newGender,
        newLocation,
    });

    // 로컬스토리지(DB에 저장)
    localStorage.setItem("gptSetting", JSON.stringify(gptSetting));

    // 다음 페이지 Render
    location.href = location.href.replace("question.html", "service.html");
});
