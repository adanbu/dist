const l=document.getElementById("categoryButton"),E=document.getElementById("dropdown"),a=document.getElementById("questionMark"),r=document.getElementById("infoMessage"),s=document.getElementById("money-label"),L=document.getElementById("profile-pic-button"),i=document.getElementById("confirm-screen"),p=document.getElementById("modal"),I=document.getElementById("category-type-in-model"),B=document.getElementById("amount-of-money-in-model"),h=document.getElementById("amount-of-payments-in-model"),f=document.getElementById("add-expense-button"),v=document.querySelectorAll(".dropdown-link");a.addEventListener("mouseover",()=>{r.classList.remove("hidden")});a.addEventListener("mouseout",()=>{r.classList.add("hidden")});const u=()=>{E.classList.toggle("hidden")};let n="Category";l.addEventListener("click",u);v.forEach(e=>{e.addEventListener("click",y=>{y.preventDefault(),l.innerHTML=e.textContent+`<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>`,u(),e.textContent==="Loan"?s.textContent="Amount Of Borrowed Money":s.textContent="Amount Spent",n=e.textContent})});document.getElementById("menuBtn").addEventListener("click",()=>{document.getElementById("popupmenu").classList.toggle("hidden")});L.addEventListener("click",()=>{document.getElementById("profile-pic-dropdown").classList.toggle("hidden")});const t=()=>{i.classList.toggle("hidden"),p.classList.toggle("hidden"),I.textContent=n,B.textContent=document.getElementById("amount-of-money").value,h.textContent=document.getElementById("number-of-payments").value};f.addEventListener("click",e=>{e.preventDefault(),n!=="Category"&&t()});i.addEventListener("click",()=>{t()});document.getElementById("yes-button").addEventListener("click",()=>{t(),document.getElementById("amount-of-money").value="",document.getElementById("number-of-payments").value="1"});document.getElementById("no-button").addEventListener("click",()=>{t()});const o=document.querySelector(".sun"),d=document.querySelector(".moon"),c=localStorage.getItem("theme"),k=window.matchMedia("(prefers-color-scheme: dark)").matches,m=()=>{d.classList.toggle("display-none"),o.classList.toggle("display-none")},w=()=>{if(c==="dark"||!c&&k){document.documentElement.classList.add("dark"),d.classList.add("display-none");return}o.classList.add("display-none")},g=()=>{if(document.documentElement.classList.contains("dark")){document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),m();return}document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),m()};o.addEventListener("click",()=>{g()});d.addEventListener("click",()=>{g()});w();