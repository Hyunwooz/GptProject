let gptSetting = JSON.parse(localStorage.getItem("gptSetting"));
gptSetting = gptSetting ?? [];

render();

function createDiv(value, text) {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    div.classList = "flex flex-col px-6 mb-2";
    label.classList = "text-xs font-bold mb-1";
    input.classList = "border border-slate-300 rounded px-3 py-1";

    input.value = value;
    input.readOnly = true;
    label.innerText = text;
    div.append(label, input);

    return div;
}

function render() {
    const show = document.querySelector(".showSetting");
    show.innerHTML = "";

    const goal = createDiv(gptSetting[0].newCampaignGoal, "캠페인 목표");
    const type = createDiv(gptSetting[0].newCampaignType, "캠페인 유형");
    const category = createDiv(gptSetting[0].newCategory, "카테고리");
    const age = createDiv(gptSetting[0].newAge, "연령대");
    const gender = createDiv(gptSetting[0].newGender, "성별");
    const location = createDiv(gptSetting[0].newLocation, "지역");

    show.append(goal, type, category, age, gender, location);
}
