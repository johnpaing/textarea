let iB = document.querySelector(".container"),
 ta = iB.querySelector("textarea"),
 cn = iB.querySelector(".num");
  
 ta.addEventListener("keyup" , () => {
    let vl = ta.value.length;
    cn.innerText = vl;
    (vl > 0) ? iB.classList.add("active") : iB.classList.remove("active");
    (vl > 250) ? iB.classList.add("error") : iB.classList.remove("error");
    
 })
