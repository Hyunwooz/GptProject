import { createSearch_AD } from "./answer.js";

const $chatList = document.querySelector(".answerSection");
const $input = document.querySelector(".input_question");
const $connectBtn = document.querySelector("#connect");
const $disconnectBtn = document.querySelector("#disconnect");
const $loading = document.querySelector("#loading > .spinner");
const $addQuestion = document.querySelector("#addQuestion");

// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 사용자의 질문
let question;

// 질문과 답변 저장
let data = [
    {
        role: "system",
        content: "assistant는 유능한 광고 콘텐츠 제작자이다.",
    },
    {
        role: "assistant",
        content:
            "판매란 온라인, 앱, 전화, 매장을 통한 판매를 촉진하는 것입니다.",
    },
    {
        role: "user",
        content: "광고의 제작 목표의 판매란 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "판매란 온라인, 앱, 전화, 매장을 통한 판매를 촉진하는 것입니다.",
    },
    {
        role: "user",
        content: "광고의 제작 목표의 리드란 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "리드란 고객의 액션을 유도하여 리드 및 다른 전환를 늘리는 것입니다.",
    },
    {
        role: "user",
        content: "광고의 제작 목표의 웹사이트 트래픽이란 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "웹사이트 트래픽이란 관련성이 높은 사용자가 웹사이트를 방문하도록 유도합니다.",
    },
    {
        role: "user",
        content: "광고의 제작 목표의 앱 프로모션이란 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "앱 프로모션은 앱의 설치 수, 참여도 및 사전 등록을 늘리는 것입니다.",
    },
    {
        role: "user",
        content: "광고의 유형의 검색은 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "검색이란 검색에서 구매 의도가 높은 고객에게 노출하는 것입니다.",
    },
    {
        role: "user",
        content: "광고의 유형의 디스플레이는 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "디스플레이란 눈에 잘 띄는 광고 소재로 사이트와 앱을 통해 고객에게 도달하는 것입니다.",
    },
    {
        role: "user",
        content: "광고의 유형의 쇼핑은 무엇인가요? ",
    },
    {
        role: "assistant",
        content:
            "쇼핑이란 쇼핑객이 구매할 제품을 살펴볼 때 나의 상품을 표시하는 것입니다.",
    },
    {
        role: "user",
        content:
            "광고의 제목 , 설명, 이미지에 대한 대답을 해주고, 답변을 Json 형식으로 해줘 설명은 30자이상으로 해주고 메인 키워드와 관련된 추천 키워드 3개와 현재 광고 유형을 알려줘.",
    },
    {
        role: "assistant",
        content: JSON.stringify({
            ad_title: "광고 제목",
            ad_description: "설명",
            ad_image_url: "이미지 url",
            ad_Main_keyword: "메인 키워드",
            ad_keyword: "추천 키워드1, 추천 키워드2, 추천 키워드3",
            ad_type: "광고 유형",
            ad_category: "카테고리",
        }),
    },
    {
        role: "user",
        content:
            "무조건 위와 같은 형식으로 답변해줘, 위의 형식을 벗어나면 안돼",
    },
    {
        role: "assistant",
        content: JSON.stringify({
            ad_title: "광고 제목",
            ad_description: "설명",
            ad_image_url: "이미지 url",
            ad_Main_keyword: "메인 키워드",
            ad_keyword: "추천 키워드1, 추천 키워드2, 추천 키워드3",
            ad_type: "광고 유형",
            ad_category: "카테고리",
        }),
    },
    {
        role: "user",
        content: "ad_type은 디스플레이, 검색 , 쇼핑 이 세개로만 대답해줘",
    },
];

// 화면에 뿌려줄 데이터, 질문들
let questionData = [];

// 사용자의 질문을 객체를 만들어서 push
const sendQuestion = (question) => {
    if (question) {
        data.push({
            role: "user",
            content: question,
        });
        questionData.push({
            role: "user",
            content: question,
        });
    }
};

// 답변을 저장해주는 함수
const answerSave = (answer) => {
    if (data) {
        data.push({
            role: "assistant",
            content: answer,
        });
    }
};

// 화면에 답변 그려주는 함수
const printAnswer = (answer) => {
    const gpt_answer = JSON.parse(answer);

    if (gpt_answer.ad_type == "디스플레이") {
        let textarea = document.createElement("p");
        textarea.classList =
            "answer border border-slate-300 rounded-xl w-full h-full py-3 px-3 my-3";
        textarea.innerText = answer;
        $chatList.appendChild(textarea);
    } else if (gpt_answer.ad_type == "검색") {
        const ad = createSearch_AD(gpt_answer);
        $chatList.appendChild(ad);
    } else if (gpt_answer.ad_type == "쇼핑") {
        let textarea = document.createElement("p");
        textarea.classList =
            "answer border border-slate-300 rounded-xl w-full h-full py-3 px-3 my-3";
        textarea.innerText = answer;
        $chatList.appendChild(textarea);
    }
};

// 화면에 질문 그려주는 함수
const printQuestion = async () => {
    if (question) {
        let textarea = document.createElement("p");
        textarea.classList =
            "answer border border-slate-300 rounded-xl w-full h-full py-3 px-3 my-3 resize-none";
        questionData.map((el) => {
            textarea.innerText = el.content;
        });
        $chatList.appendChild(textarea);
        questionData = [];
        question = false;
    }
};

// api 요청보내는 함수

const apiPost = async () => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            answerSave(res.choices[0].message.content);
            printAnswer(res.choices[0].message.content);
        })
        .catch((err) => {
            console.log(err);
        });
    $loading.style.display = "none";
};

// Api 와 처음 통신 !

const connectApi = (event) => {
    if (event.target.id == "connect") {
        question = `광고 목표 : ${gptSetting[0].newCampaignGoal} , 광고 유형 : ${gptSetting[0].newCampaignType} \n 카테고리 : ${gptSetting[0].newCategory} , 메인 키워드 : ${gptSetting[0].newKeyword} , 연령대 : ${gptSetting[0].newAge} , 성별 : ${gptSetting[0].newGender}`;
        sendQuestion(question);
        $loading.style.display = "block";
        apiPost();
        $addQuestion.classList.remove("hidden");
    } else if (event.target.id == "disconnect") {
        location.href = location.href.replace("service.html", "setting.html");
    }
};

// reconnect Api !

const reconnectApi = (event) => {
    event.preventDefault();

    question = $input.value;
    $input.value = null;

    sendQuestion(question);
    $loading.style.display = "block";
    apiPost();
    printQuestion();
};

$connectBtn.addEventListener("click", connectApi);
$disconnectBtn.addEventListener("click", connectApi);
$addQuestion.addEventListener("submit", reconnectApi);
