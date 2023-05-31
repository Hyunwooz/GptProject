const $form = document.querySelector("form");

let newCampaignGoal,
    newCampaignType,
    newCategory,
    newAge,
    newLocation,
    newGender;

// submit
$form.addEventListener("submit", (e) => {
    e.preventDefault();

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

    gptSetting = [];
    gptSetting.push({
        newCampaignGoal,
        newCampaignType,
        newCategory,
        newAge,
        newGender,
        newLocation,
    });

    localStorage.setItem("gptSetting", JSON.stringify(gptSetting));
    location.href = location.href.replace("setting.html", "service.html");
});
