// 화면에 검색 광고 스크립트를 그려주는 함수
export const createSearch_AD = (data) => {

    let search_Div = document.createElement("div");
    let sponser_P = document.createElement("p");
    let desc_Wrap = document.createElement("div");
    let desc_Img = document.createElement("img");
    let desc_Title_Div = document.createElement("div");
    let desc_Title_P = document.createElement("p");
    let desc_Url_A = document.createElement("a");
    let ad_Div = document.createElement("div");
    let ad_Title_A = document.createElement("a");
    let ad_Desc_P = document.createElement("p");
    let ad_Keyword_A = document.createElement("a");

    search_Div.classList =
        "border border-slate-300 rounded-xl w-4/5 h-full mx-auto py-3 px-[6rem] my-3 shadow-md";
    sponser_P.innerText = "스폰서";
    sponser_P.classList = "font-bold text-sm";

    desc_Wrap.classList = "flex items-center mt-2";
    desc_Img.classList = "w-8 h-8 bg-gray-800 rounded-full";
    desc_Img.setAttribute("src", "../img/sample_banner.png");
    desc_Title_Div.classList = "text-xs ml-3";
    desc_Title_P.classList = "text-sm";
    desc_Title_P.innerText = "Your Site";
    desc_Url_A.innerText = "https://Your_Web_Site.com";
    desc_Url_A.setAttribute("href", "#");

    ad_Div.classList = "mt-1";
    ad_Title_A.classList = "text-lg text-blue-700";
    ad_Title_A.innerText = data.ad_title;
    ad_Title_A.setAttribute("href", "#");
    ad_Desc_P.classList = "mt-1 text-sm";
    ad_Desc_P.innerText = data.ad_description;
    ad_Keyword_A.classList = "mt-1 text-xs text-blue-700";
    ad_Keyword_A.innerText = data.ad_keyword;
    ad_Keyword_A.setAttribute("href", "#");

    desc_Title_Div.append(desc_Title_P, desc_Url_A);
    desc_Wrap.append(desc_Img, desc_Title_Div);
    ad_Div.append(ad_Title_A, ad_Desc_P, ad_Keyword_A);
    search_Div.append(sponser_P, desc_Wrap, ad_Div);

    return search_Div;
};

// 화면에 디스플레이 광고 스크립트를 그려주는 함수

export const createDisplay_AD = (data) => {

    let display_Wrap = document.createElement("div");
    let display_Div = document.createElement("div");
    let diplay_Img = document.createElement("img");
    let ad_wrap = document.createElement("div");
    let ad_banner = document.createElement("img");
    let ad_Div = document.createElement("div");
    let ad_Title_A = document.createElement("a");
    let ad_Desc_P = document.createElement("p");
    let ad_Arrow = document.createElement("div");
    let ad_Arrow_icon = document.createElement("i");

    display_Wrap.classList =
        "border border-slate-300 rounded-xl w-4/5 h-full mx-auto py-3 px-[2rem] my-3 shadow-md";
    display_Div.classList = "border-2 border-gray-600"
    ad_wrap.classList = "flex items-center bg-white p-3 pb-5 mx-auto justify-center items-center";
    ad_banner.classList = "w-[5.5rem] h-[5.5rem] bg-gray-800 mr-6";
    ad_Div.classList = "mt-1 w-2/3"
    ad_Title_A.classList = "text-2xl font-bold text-gray-800"
    ad_Title_A.innerText = data.ad_title;
    ad_Desc_P.classList = "mt-2 text-sm"
    ad_Desc_P.innerText = data.ad_description;
    ad_Arrow.classList = "w-[3.5rem] h-[3.5rem] ml-3 bg-blue-600 rounded-full flex justify-center items-center"
    ad_Arrow_icon.classList = "fa-solid fa-chevron-right text-white text-4xl"
    
    diplay_Img.setAttribute("src", "../img/sample.png")
    ad_banner.setAttribute("src", "../img/sample_banner.png");
    ad_Div.append(ad_Title_A,ad_Desc_P)
    ad_Arrow.append(ad_Arrow_icon)
    ad_wrap.append(ad_banner,ad_Div,ad_Arrow)
    display_Div.append(diplay_Img,ad_wrap)
    display_Wrap.append(display_Div)

    return display_Wrap;
};

// 화면에 동영상 광고 스크립트를 그려주는 함수

export const createVideo_AD = (data) => {

    let video_Wrap = document.createElement("div");
    let video_Div = document.createElement("div");
    let video_Display_Div = document.createElement("div");
    let video_Display_Block_1 = document.createElement("div");
    let video_Display_Block_2 = document.createElement("div");
    let video_Display_Block_3 = document.createElement("div");
    let video_Display_Img = document.createElement("img");
    
    let video_Display_Skip = document.createElement("div");
    let video_Display_Ad = document.createElement("div");
    let video_Display_Ad_Img = document.createElement("img");
    let video_Display_Ad_desc = document.createElement("div");
    let video_Display_Ad_Title = document.createElement("a");
    let video_Display_Ad_WebSite = document.createElement("p");
    let video_Display_Ad_Btn = document.createElement("div");

    let recommand_Div = document.createElement("div");
    let recommand_title = document.createElement("p");
    let recommand_Desc = document.createElement("p");
    
    video_Wrap.classList = "border border-slate-300 rounded-xl w-full h-full mx-auto py-3 px-[2rem] my-3 shadow-md"
    video_Div.classList = "p-4 bg-black"
    video_Display_Div.classList ="relative"
    video_Display_Img.setAttribute("src", "../img/sample.png")

    video_Display_Skip.classList = "absolute right-0 bottom-8 flex w-1/6 h-10 justify-center items-center bg-black opacity-70 text-xl text-white"
    video_Display_Skip.innerText = "Skip ad"

    video_Display_Ad.classList = "absolute left-0 bottom-6 flex w-[38%] h-14 items-center bg-white opacity-90 text-xl p-2"
    video_Display_Ad_Img.classList = "w-12 h-12 bg-gray-800 border border-slate-300"
    video_Display_Ad_Img.setAttribute("src", "../img/sample_banner.png");
    video_Display_Ad_desc.classList = "flex flex-col ml-2 w-2/3"
    video_Display_Ad_Title.classList = "text-[0.7rem] font-bold text-gray-800 mb-[-0.5rem]"
    video_Display_Ad_Title.setAttribute("href","#")
    video_Display_Ad_Title.innerText = data.ad_Main_keyword;

    video_Display_Ad_WebSite.classList = "text-[0.5rem]"
    video_Display_Ad_WebSite.innerText = "https://website.com"

    video_Display_Ad_Btn.classList = "w-1/4 h-8 text-[0.6rem] bg-blue-600 rounded flex justify-center items-center text-white font-bold border border-slate-300"
    video_Display_Ad_Btn.innerText = "바로가기"

    video_Display_Block_1.classList ="mt-6 bg-gray-700 h-4 w-2/3"
    video_Display_Block_2.classList ="mt-2 bg-gray-700 h-4 w-1/4"
    video_Display_Block_3.classList ="mt-6 bg-gray-700 h-8 w-1/4"

    recommand_Div.classList = "mt-6 font-bold"
    recommand_title.innerText = "추천 제목 : "+data.ad_title;
    recommand_Desc.innerText = "추천 스크립트 : "+data.ad_description;


    video_Display_Ad_desc.append(video_Display_Ad_Title,video_Display_Ad_WebSite)
    video_Display_Ad.append(video_Display_Ad_Img,video_Display_Ad_desc,video_Display_Ad_Btn)
    video_Display_Div.append(video_Display_Img,video_Display_Skip,video_Display_Ad)
    video_Div.append(video_Display_Div,video_Display_Block_1,video_Display_Block_2,video_Display_Block_3)
    recommand_Div.append(recommand_title,recommand_Desc)
    video_Wrap.append(video_Div,recommand_Div)

    return video_Wrap;
};