const $campaignGoal = document.querySelector(".campaignGoal");
const $campaignType = document.querySelector(".campaignType");
const $category = document.querySelector(".campaignCategory");
const $keyword = document.querySelector(".campaignKeyword");
const $age = document.querySelector(".targetAge");
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

$keyword.addEventListener("change", nextQuestion);
$age.addEventListener("change", nextQuestion);

// Next 버튼 클릭시
$form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newCampaignGoal,
        newCampaignType,
        newCategory,
        newKeyword,
        newAge,
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

    newKeyword = $keyword.value;
    newAge = $age.value;
    newGender = $gender.value;

    gptSetting.push({
        newCampaignGoal,
        newCampaignType,
        newCategory,
        newKeyword,
        newAge,
        newGender,
    });

    // 로컬스토리지(DB에 저장)
    localStorage.setItem("gptSetting", JSON.stringify(gptSetting));

    // 다음 페이지 Render
    location.href = "service.html";
});
