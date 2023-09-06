# ChatGPT Project

-   ChatGPT를 이용한 개인 프로젝트 Repo입니다.

## 1. 목표와 기능

### 1.1 목표

-   ChatGPT를 이용하여 업무의 생산성을 높일 수 있는 서비스 개발

### 1.2 기능

-   chatGPT API 를 이용해서 광고 스크립트를 자동 생성
-   광고의 유형별 다른 템플릿으로 답변 제공

## 2. 개발 환경 및 배포 URL

### 2.1 개발 환경

-   서비스 배포 환경
    -   GitHub Page

### 2.2 배포 URL

-   https://hyunwooz.github.io/OrmiProject/

## 3. 프로젝트 구조와 개발 일정

### 3.1 프로젝트 구조

```
OrmiProject
|   index.html
|   
\---src
    +---assets
    |   +---css
    |   |       style.css
    |   |       
    |   +---img
    |   |       display_sample.png
    |   |       sample.png
    |   |       sample_banner.png
    |   |       search_sample.png
    |   |       video_sample.png
    |   |       
    |   +---js
    |   |       answer.js
    |   |       connect.js
    |   |       data.js
    |   |       display.js
    |   |       menu.js
    |   |       modal.js
    |   |       openAPI.js
    |   |       question.js
    |   |       sectionScroll.js
    |   |       slide.js
    |   |       
    |   \---video
    |           sample.mp4
    |           
    \---view
            question.html
            service.html
```

### 3.2 개발 일정

#### 개발 일정

2023.05.30 ~ 2023.06.12

#### 기술 스택

-   tailwind CSS
-   바닐라 JS
-   HTML
-   chatGPT API

## 4. 전체 페이지

-   전체 페이지 UI
    ![ui_1](https://github.com/Hyunwooz/OrmiProject/assets/107661525/e25c4cf5-bad9-47cf-9659-652cc9215861)
    ![ui_2](https://github.com/Hyunwooz/OrmiProject/assets/107661525/a7c84a5d-6a88-47f0-935f-e1d609c5711e)

## 5. 기능

### 5.1 메인 기능

-   사용자들에게 필요한 정보 수집 후 ChatGpt API와 통신하여 그에 대한 답을 그려주는 기능
    ![main](https://github.com/Hyunwooz/OrmiProject/assets/107661525/8c270471-7c6f-4e4c-bdbb-26beda6fa739)
    

```
사용자가 각 광고의 목표 , 유형 , 카테고리 , 메인 키워드 , 타겟팅에 대한 질문에 대답을 한 후
질문에 대한 대답을 정확히 입력하였는지 확인합니다.

그 후 '생성 하기!'를 누르면 사용자가 대답한 '광고 유형'에 따라 다른 탬플릿으로 답변을 출력합니다.
```

-   chatGPT API 를 이용한 광고 스크립트를 자동 생성하기, 광고의 유형별 다른 템플릿으로 답변을 제공 합니다.
    1.  검색 광고
        ![serach](https://github.com/Hyunwooz/OrmiProject/assets/107661525/668a59ec-56ac-42b2-a176-37bd22370cb2)
    2.  디스플레이 광고
        ![display](https://github.com/Hyunwooz/OrmiProject/assets/107661525/53f730f3-4063-4d4c-9ea7-5d421c65ef98)
    3.  동영상 광고
        ![video](https://github.com/Hyunwooz/OrmiProject/assets/107661525/0d505d8a-7e8b-4db1-b640-958cff3b450b)

-   추가 요청사항을 ChatGpt에게 요청할 수 있습니다.
    ![option](https://github.com/Hyunwooz/OrmiProject/assets/107661525/51ad191a-2d47-4794-894d-b71415f2ae7b)


```
답변 출력 후 수정 사항이나 추가할 내용이 있을 경우 AgAs에게 수정 요청을 할 수 있습니다.
```

### 5.2 세부 기능

1.  반응형 웹사이트 구현
    -   반응형 사이트 전체
        ![responsive](https://github.com/Hyunwooz/OrmiProject/assets/107661525/17441194-c750-4a19-825e-98b0cd395031)
    -   데스크탑
        ![데스크탑](https://github.com/Hyunwooz/OrmiProject/assets/107661525/2a607b14-7266-4dcb-8725-b6a75a2a5c92)
    -   태블릿
        ![태블릿](https://github.com/Hyunwooz/OrmiProject/assets/107661525/eb8f581a-faea-4cea-9d6d-9b1da6599112)
    -   모바일
        ![모바일](https://github.com/Hyunwooz/OrmiProject/assets/107661525/acc0a7e4-533c-4e8a-a1c3-dcce26cb17f2)

```
사용기기의 따른 반응형 웹페이지를 구현했습니다.
```

2.  메인 페이지 Scroll event 이용 섹션 이동 구현
    ![scroll](https://github.com/Hyunwooz/OrmiProject/assets/107661525/74fc45fb-423a-4eb0-9ede-0c6810813c9d)
```
메인 화면에서 scroll event를 감지하여 Section Elemet들을 이동하도록 하였습니다.

스크롤 이벤트의 경우 스크롤링 할 때마다 발생하는데, 
그 때마다 같은 작업을 실행하게 되면 성능 문제가 발생할 수 있습니다. 
그래서 쓰로틀링을 사용하여 이런 상황이 발생하지 않도록 하였습니다.
```
 
3.  Modal 및 slide 구현
    ![modal](https://github.com/Hyunwooz/OrmiProject/assets/107661525/ab4843cd-6315-49ae-9698-d4ea32ff0f75)

```
광고 유형에 대한 설명을 Modal을 이용하여 구현하였습니다.
```

4.  질문지 진행률 표시 기능
    ![q_p](https://github.com/Hyunwooz/OrmiProject/assets/107661525/f63efa14-a9c0-41ef-a6b8-5526f57f7fd0)

```
각 질문에 대해 대답이 추가될 경우 Header 밑 Progress bar가 변경되도록 하였습니다.
```

5.  API 통신을 기다리는 Loading spinner 기능
    ![apiLoading](https://github.com/Hyunwooz/OrmiProject/assets/107661525/ea5bca74-db09-4200-95ea-2dfb00298ec6)

```
API와 통신 중일 경우 로딩 스피너가 표시됩니다. 
이때 사용자는 추가 질문 기능이 비활성화되며, 
통신이 끝난 후 답변이 출력된 이후에 로딩 스피너가 사라지고 추가 질문 기능이 다시 활성화됩니다.
```

## 6. 개발하며 느낀점

### 클린 코드와 파일 분리

기능 구현을 최우선 목표로 개발을 진행하다 보니 코드들이 뒤죽박죽 이였습니다. 

중복되는 기능을 하는 함수들도 많았으며, 쓸데없는 변수가 사용되었으며, 하나의 파일안에 Datasets과 API와 통신을 하는 함수가 동시에 존재하는 등.. 코드들의 정리가 하나도 안되어 있었습니다.

하지만 코드 리뷰를 통해 얻은 피드백으로 클린 코드를 위해 **하나의 함수에는 하나의 기능만** 포함되도록 작성하는 법과 **각 기능별 파일을 분리**하는 법에 대해서 익힐 수 있었습니다.

데이터의 경우 문자열 형식이 아닌 객체 형식을 이용한다면 더욱 관리가 쉬워진다는 점 또한 배웠습니다. 

### 주석 달기

tailwind CSS를 이용하여 디자인을 하는 방식을 채용하다보니 DOM을 이용한 Element 컨트롤이 엄청 복잡했습니다. 

tailwind의 경우 classList로 CSS를 적용하는 라이브러리다 보니, 내가 원하는 디자인을 위해서 DOM 생성시 classList가 엄청 길어지는 상황들이 벌어졌습니다.

이렇게 복잡한 코드들을 정리하려다 보니 **'주석의 중요성'** 이 몸으로 확 와닿았습니다.

무분별한 주석의 사용이 아닌 적절한 주석의 사용은 **코드의 가독성**을 높일 수 있다는 것을 배웠습니다.

### 쓰로틀링과 디바운싱

메인 페이지에서 Scroll event를 감지하여 Section elements끼리 이동시키는 기능을 구현 하였지만, 함수가 1초에 여러번 실행되는 결과가 나와버렸습니다. 

위의 결과로 인해 성능 저하의 원인이 될 수도 있겠다는 생각이 들었습니다. 

그러하여 검색을 한 결과 2가지 프로그래밍 기법에 대해 알게되었습니다. 
바로 **쓰로틀링과 디바운싱** 이였습니다.

위의 2가지를 간단히 말하자면, 

- 쓰로틀링 : 이미 이벤트 호출 되었다면 일정 시간 동안은 이벤트가 호출되지 않도록 하는 것.
- 디바운싱 : 연이어 호출되는 함수들 중 마지막 함수만 호출하도록 하는 것.

입니다.

### 반응형 웹 사이트 (요소의 정렬)

저는 개발 초기에 PC화면만을 기준으로 웹 사이트를 개발하였습니다.

- 개발 초기 웹 사이트
    ![prevWeb](https://github.com/Hyunwooz/OrmiProject/assets/107661525/a1ecfe00-6321-4038-8587-5ae656e835b0)

기능 구현이 어느 정도 마무리된 후 코드 리뷰를 받았고, 사이트의 고도화를 위해 반응형 웹 사이트로 작업하는 것을 추천해주셨습니다.

반응형에 대해서 잘 알지도 못했고, 도전해보고 싶어 제 사이트를 반응형으로 변경하려고 마음을 먹었습니다.

근데 정말! 까다로웠습니다.

폰트의 크기며, 요소의 위치, 디바이스 크기별 요소의 정렬 등등 신경써야 할 것들이 정말 많았습니다.

큰 화면을 먼저 작업하다보니 화면이 점점 작아지면서 작은 박스에 큰 요소들이 구겨서 넣어지게 되는 현상들이 많이 발생하였습니다.

반응형 웹의 중요성에 대해 찾아본 결과 현재 웹 사이트의 트래픽은 크게 총 3가지의 기기(모바일,태블릿,데스크탑)에서 나온다는 것을 알 수 있었으며 이로 인해 각 기기의 화면에 맞는 사이트를 보여줌으로써 사용자들에게 좋은 경험을 줘야 좋은 서비스가 된다는 것을 배울 수 있었습니다.

### 마치며

처음으로 진행한 chatGPT API를 연동하는 프로젝트 였습니다. 

이번 프로젝트는 처음으로 진행하는 개인 프로젝트였기 때문에 많은 어려움이 있었습니다. 

JavaScript를 이용하여 DOM을 컨트롤하는 부분과 여러 기능들을 구현하는 것, 웹사이트 디자인 등 여러 어려움이 많았지만 선배 개발자분들의 코드 리뷰와 여러 노력 등으로 프로젝트를 성공적으로 마칠 수 있었습니다.

또한 개인 프로젝트를 진행하며 발생하는 에러 사항들을 해결하려다 보니 여러가지 기법들이나 사용자들의 경험에 대해서 많은 것을 알 수 있었습니다.

정말 재밌는 프로젝트였으며 앞으로도 여러 프로젝트를 통해 많은 것들을 해보고싶습니다.

읽어주셔서 감사합니다. :)
