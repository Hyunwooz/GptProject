# OrmiProject

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

![tree](https://github.com/Hyunwooz/OrmiProject/assets/107661525/2ef50f32-6194-4d03-99ea-408af5ab4519)

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
    ![main](https://github.com/Hyunwooz/OrmiProject/assets/107661525/a8ba751d-8733-4872-a20d-36f23017e6d0)
    

> 사용자가 각 광고의 목표 , 유형 , 카테고리 , 메인 키워드 , 타겟팅에 대한 질문에 대답을 한 후
맞는 정보를 입력하였는지 확인합니다.

> 그 후 '생성 하기!'를 누르면 사용자가 대답한 '광고 유형'에 따라 다른 탬플릿으로 답변을 출력합니다.

-   chatGPT API 를 이용한 광고 스크립트를 자동 생성
-   광고의 유형별 다른 템플릿으로 답변을 제공 합니다.
    1.  검색 광고
        ![serach](https://github.com/Hyunwooz/OrmiProject/assets/107661525/668a59ec-56ac-42b2-a176-37bd22370cb2)
    2.  디스플레이 광고
        ![display](https://github.com/Hyunwooz/OrmiProject/assets/107661525/53f730f3-4063-4d4c-9ea7-5d421c65ef98)
    3.  동영상 광고
        ![video](https://github.com/Hyunwooz/OrmiProject/assets/107661525/0d505d8a-7e8b-4db1-b640-958cff3b450b)

-   추가 요청사항을 ChatGpt에게 요청할 수 있습니다.
    ![option](https://github.com/Hyunwooz/OrmiProject/assets/107661525/e92d82c9-b53c-49b1-adbb-1a81a44531f9)


> 답변 출력 후 수정 사항이나 추가할 내용이 있을 경우 AgAs에게 수정 요청을 할 수 있습니다.


### 5.2 세부 기능

1.  반응형 웹사이트 구현
    -   반응형 사이트 전체
        ![Responsive](https://github.com/Hyunwooz/OrmiProject/assets/107661525/05c1ab76-029a-4573-94e6-456e274282d1)
    -   데스크탑
        ![데스크탑](https://github.com/Hyunwooz/OrmiProject/assets/107661525/2a607b14-7266-4dcb-8725-b6a75a2a5c92)
    -   태블릿
        ![태블릿](https://github.com/Hyunwooz/OrmiProject/assets/107661525/eb8f581a-faea-4cea-9d6d-9b1da6599112)
    -   모바일
        ![모바일](https://github.com/Hyunwooz/OrmiProject/assets/107661525/acc0a7e4-533c-4e8a-a1c3-dcce26cb17f2)

> 사용기기의 따른 반응형 웹페이지를 구현했습니다.

2.  메인 페이지 Scroll event 이용 섹션 이동 구현
    ![scroll](https://github.com/Hyunwooz/OrmiProject/assets/107661525/c1cb363a-2227-417d-997d-2c21b423ed12)
> 메인 화면에서 scroll event를 감지하여 메인 Section Elemet들을 이동 하도록 하였습니다.

> 스크롤 이벤트의 경우 스크롤링 할 때마다 발생하는데, 그 때마다 같은 작업을 실행하게 되면 성능 문제가 발생할 수 있습니다. 그래서 쓰로틀링을 사용하여 이런 상황이 발생하지 않도록 하였습니다.
 
3.  Modal 및 slide 구현
    ![modal](https://github.com/Hyunwooz/OrmiProject/assets/107661525/6f0c554a-3038-485c-8033-155d11b6c606)

> 광고 유형에 대한 설명을 Modal을 이용하여 구현하였습니다.

4.  질문지 진행률 표시 기능
    ![q_progress](https://github.com/Hyunwooz/OrmiProject/assets/107661525/0b47f231-eb56-4657-ae54-e77028955897)

> 각 질문에 대해 대답이 추가될 경우 Header 밑 Progress bar가 변경되도록 하였습니다.

5.  API 통신을 기다리는 Loading spinner 기능
    ![apiLoading](https://github.com/Hyunwooz/OrmiProject/assets/107661525/38116fbf-a647-4c36-824e-92e27cf9e8c4)

> API와 통신 중일 경우 로딩 스피너가 표시됩니다. 이때 사용자는 추가 질문 기능이 비활성화되며, 통신이 끝난 후 답변이 출력된 이후에 로딩 스피너가 사라지고 추가 질문 기능이 다시 활성화됩니다.

## 6. 개발하며 느낀점

### 전체적인 느낀점

처음으로 진행한 chatGPT API를 연동하는 프로젝트 였습니다. 

이번 프로젝트는 처음으로 진행하는 개인 프로젝트였기 때문에 많은 어려움이 있었습니다. 

JavaScript를 이용하여 DOM을 컨트롤하는 부분과 여러 기능들을 구현하는 것, 웹사이트 디자인 등 여러 어려움이 많았지만  선배 개발자분들의 코드 리뷰와 여러 노력 등으로 프로젝트를 성공적으로 마칠 수 있었습니다.

또한 개인 프로젝트를 진행하며 발생하는 에러 사항들을 해결하려다 보니 여러가지 기법들에 대해서 많은 것을 알 수 있었습니다.

### 클린 코드와 파일 분리

기능 구현을 최우선 목표로 개발을 진행하다 보니 코드들이 뒤죽박죽 이였습니다. 
중복되는 기능을 하는 함수들도 많았으며 , 쓸데없는 변수가 사용되었으며 , 하나의 파일안에 Datasets과 API와 통신을 하는 함수가 동시에 존재하는 등.. 정리가 안되어 있었습니다.

하지만 코드 리뷰를 통해 얻은 피드백으로 클린 코드를 위한 함수를 위해 **하나의 함수에는 하나의 기능만** 포함되도록 작성하는 법과 **각 기능별 파일을 분리**하는 법에 대해서 익힐 수 있었습니다.

데이터의 경우 문자열 형식이 아닌 객체 형식을 이용한다면 더욱 관리가 쉬워진다는 점 또한 배웠습니다. 

### 주석 달기

tailwind CSS를 이용하여 디자인을 하는 방식을 채용하다보니 DOM을 이용한 Element 컨트롤이 엄청 복잡했습니다. 

tailwind의 경우 className으로 CSS를 적용하는 라이브러리다 보니, 내가 원하는 디자인을 위해서는 DOM 생성시 classList가 엄청 길어지는 상황들이 벌어졌습니다.

이렇게 복잡한 코드들을 정리하려다 보니 **'주석의 중요성'** 이 몸으로 확 와닿았습니다.

무분별한 주석의 사용이 아닌 적절한 주석의 사용은 **코드의 가독성**을 높일 수 있다는 것을 배웠습니다.

### 쓰로틀링과 디바운싱

메인 페이지에서 Scroll event를 감지하여 Section elements끼리 이동시키는 기능을 구현 하였지만, 함수가 1초에 여러번 실행되는 결과가 나와버렸습니다. 

위의 결과로 인해 성능 저하의 원인이 될 수도 있겠다는 생각이 들었습니다. 그러하여 여러 방면으로 찾아보았습니다.

2가지 프로그래밍 기법에 대해 알게되었습니다. 바로 **쓰로틀링과 디바운싱** 이였습니다.
위의 2가지를 간단히 말하자면, 

- 쓰로틀링 : 이미 이벤트 호출 되었다면 일정 시간 동안은 이벤트가 호출되지 않도록 하는 것.
- 디바운싱 : 연이어 호출되는 함수들 중 마지막 함수만 호출하도록 하는 것.

이였습니다.

### 요소의 정렬 (반응형 웹사이트)

저의 경우 반응형을 염두에 두지 않고 웹사이트를 개발 하였습니다. 

- 초기 웹사이트 화면
