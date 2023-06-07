const $campaignGoal = document.querySelector(".campaignGoal");
const $campaignType = document.querySelector(".campaignType");
const $category = document.querySelector(".campaignCategory");
const $keyword = document.querySelector(".campaignKeyword");
const $age = document.querySelector(".targetAge");
const $gender = document.querySelector(".targetGender");
const $form = document.querySelector("form");

// localStorage Data 가져오기
let gptSetting = JSON.parse(localStorage.getItem("gptSetting"));

// 기존 Data는 없애기 
gptSetting = [];

// 질문의 진행률을 보여주는 함수
const quetsionProgress = (data) => {
    const progress = document.querySelector('.progress_bar')
    const old_Progress = "w-"+(data - 1).toString()+"/5"
    const curr_Progress = "w-"+data.toString()+"/5"

    progress.classList.remove("hidden")
    progress.classList.remove(old_Progress)
    progress.classList.add(curr_Progress)
}

// 다음 질문을 그려주는 함수
const nextQuestion = (event) => {
    let curr = event.target;

    while (curr.tagName != "SECTION") {
        curr = curr.parentNode;
    }
    
    const parent = curr.id.split("__");
    const nextID = "#question__" + (parseInt(parent[1]) + 1).toString();
    const next = document.querySelector(nextID);

    quetsionProgress(parseInt(parent[1]))
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

    // 광고 목표의 Checked된 벨류값 가져오기
    [...$campaignGoal.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCampaignGoal = e.value;
        }
    });

    // 광고 유형의 Checked된 벨류값 가져오기
    [...$campaignType.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCampaignType = e.value;
        }
    });

    // 광고 카테고리의 Checked된 벨류값 가져오기
    [...$category.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCategory = e.value;
        }
    });

    // 각 질문에 대한 벨류값 가져오기
    newKeyword = $keyword.value;
    newAge = $age.value;
    newGender = $gender.value;

    // gptSetting array에 Push
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
