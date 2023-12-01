const cba = document.querySelector("#cba");
cba.addEventListener("change", (e) => {
  console.log(e);
  const value = e.target.checkded;
  // const log = `체크박스는 ${value}변경되었습니다.`
  // document.querySelector('.log'.innerText= log)

  if (value) {
    
    log.innerText = `체크가 되었습니다.`;
  } else {
    log.innerText = `체크가 해제 되었습니다.`;
  }
});
