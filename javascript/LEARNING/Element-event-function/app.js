// querySelector는 element를 CSS방식으로 검색할 수 있음
// querySelectorAll은 Array로 반환
// getElementById를 querySelector(#hello)로 대체할 수 있음
/**
 * title.addEventListener("click",handleTitleClick)
 * 여기서 handleTitleClick에 ()을 붙여주지 않는게 정말 중요하다. 
 * 우리는 JavaScript에 function만을 넘겨주고, 유저가 click이라는 행위를 할 경우에 JS가 실행버튼을 눌러주길 바라는 거다. 
 */
const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "skyblue";
}

function handleMouseEnter() {
  title.innerText = 'Mouse is here!'
}

function handleMouseLeave() {
  title.innerText = 'Mouse is gone'
}

function handleResize() {
  document.body.style.backgroundColor = "tomato"
}

function handleCopy() {
  alert('copier!')
}

function windowOfflineWifi() {
  alert('와이파이를 연결해 주세요.')
}

function windowOnlineWifi() {
  alert('와이파이 연결 성공!')
}
// 2가지 방법이 있음
// addEventListener를 더 선호하는 이유는 나중에 removeEventListener를 통해서 event listener를 제거할 수 있기 때문
title.onclick =  handleTitleClick;
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleResize);
window.addEventListener('copy', handleCopy);
// wifi 연결 유무 확인 이벤트
window.addEventListener('offline', windowOfflineWifi)
window.addEventListener('online', windowOnlineWifi)