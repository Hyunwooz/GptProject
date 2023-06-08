const html = document.querySelector("html");

// 스크롤 이벤트 발생을 지연시키는 함수
/**
 * @param {Function} func 함수 타입 : 실행될 Func
 * @param {int} delay int 타입 : 딜레이 시킬 시간 (밀리세컨드 ms)
 */
const eventDelay = (func, delay) => {
    let timer;
    return (event) => {
    // 이미 타이머가 있다면 실행 X , 타이머가 없다면 함수를 실행하고 일정 시간 후 타이머 초기화
        if (timer) {
            return
        };
        timer = setTimeout(() => {
            func(event);
            timer = null;
        }, delay);
    };
};

let page = 1

// 스크롤 입력시 Element로 이동
const scrollMoveToEl = (e) => {

    if (e.deltaY > 1) { 
        if (page == 4) {return}
        page += 1
    } else if (e.deltaY < 1) {  
        if (page == 1) {return}
        page -= 1
    };

    let $curr;
    const name = '#section'
    const section = name + page.toString()

    if (page == 4) {
        $curr = document.querySelector('footer')
    } else {
        $curr = document.querySelector(section)
    }

    $curr.scrollIntoView({behavior: "smooth", block: "start"});
}

// 스크롤 이벤트 정지
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

window.addEventListener('wheel',eventDelay(scrollMoveToEl, 350))





