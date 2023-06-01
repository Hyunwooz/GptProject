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
        "border border-slate-300 rounded-xl w-full h-full py-3 px-[6rem] my-3";
    sponser_P.innerText = "스폰서";
    sponser_P.classList = "font-bold text-sm";

    desc_Wrap.classList = "flex items-center mt-2";
    desc_Img.classList = "w-8 h-8 bg-gray-800 rounded-full";
    desc_Img.setAttribute("src", "../img/search_banner.png");
    desc_Title_Div.classList = "text-xs ml-3";
    desc_Title_P.classList = "text-sm";
    desc_Title_P.innerText = "Yout Site";
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
