(()=>{"use strict";const e=(e,t="00:00:00",l="000")=>{let n=t?Number(t.substring(0,2)):0,r=t?Number(t.substring(3,5)):0,a=t?Number(t.substring(6,8)):0,s=t&&t.length>8?Number(t.substring(9,t.length)):0;l&&(s=Number(l));let o=Number(e.substring(0,2)),i=Number(e.substring(3,5))-1,c=Number(e.substring(6,e.length));return Date.parse(new Date(c,i,o,n,r,a))+s},t=e=>{let t=e.length,l=Number(e.substring(0,t-6)),n=Number(e.substring(t-5,t-3)),r=Number(e.substring(t-2,t));return Number(3600*l+60*n+r)},l=document.querySelector("#crash"),n=document.querySelector("#app > div > div > div.col-md-4 > div"),r=document.createElement("div"),a=e=>`${e.split(":")[0]}:${e.split(":")[1]}`,s=e=>e.replace(".","").split(""),o=(t,l)=>a(new Date(e((new Date).toLocaleDateString(),t)+60*s(l).reduce(((e,t)=>e+1*t),0)*1e3).toLocaleTimeString()),i=(t,l)=>a(new Date(e((new Date).toLocaleDateString(),t)+60*(1*s(l)[s(l).length-1]==0?1:1*s(l)[s(l).length-1])*1e3).toLocaleTimeString());function c(){const n=Number(document.querySelector("#vela_start").value),r=Number(document.querySelector("#vela_end").value),s=document.querySelector("#list_data");if(n<=0)return s.innerHTML=`<div style="color: #dc3545">Value error... Invalid Vela Init = ${n}!!!</div>`;if(r<n)return s.innerHTML=`<div style="color: #dc3545">Value error... Invalid Vela Ini = ${n} > Vela End = ${r}!!!</div>`;const c=((e,n)=>Array.from(l.querySelectorAll("div.candle.green")).reduce(((t,l)=>(Number(l.innerText.match(/[0-9]{1,}[.]{1}[0-9]{2}/gi)[0])>=Number(e)&&Number(l.innerText.match(/[0-9]{1,}[.]{1}[0-9]{2}/gi)[0])<=Number(n)&&t.push({number:l.innerText.match(/[0-9]{1,}[.]{1}[0-9]{2}/gi)[0],time:l.nextElementSibling.innerText}),t)),[]).sort(((e,l)=>t(e.time)>t(l.time)?1:t(e.time)<t(l.time)?-1:0)))(n,r);if(0==c.length)return s.innerHTML='<div style="color: #dc3545">Please try again... There is no data for these values!!!';let m='<table class="table table-dark table-sm">\n        <thead>\n        <tr>\n        <th><small>Velas<small></th>\n        <th scope="col" style="color: #0062cc;"><small>Time 10x</small></th>\n        <th scope="col" style="color: green"><small>Time 5x</small></th>\n        <th scope="col" style="color: grey"><small>Sun total</small></th>\n        <th scope="col" style="color: #dc3545"><small>Sun end</small></th>\n        </tr>\n        </thead>\n        <tbody>';for(const t of c)m+=`<tr>\n        <td><small>${t.number}</small></td>\n        <td style="color: #0062cc"><small>${a(t.time)}</small></td>\n        <td style="color: green"><small>${d=t.time,a(new Date(e((new Date).toLocaleDateString(),d)+36e5).toLocaleTimeString())}</small></td>\n        <td style="color: grey"><small>${o(t.time,t.number)}</small></td>\n        <td style="color: #dc3545"><small>${i(t.time,t.number)}</small></td>\n        </tr>`;var d;m+="</tbody></table>",s.innerHTML=m}const m=async()=>await fetch("https://raw.githubusercontent.com/cleziomarcos/Crash/main/public/users.json").then((e=>e.json())),d=async()=>{localStorage.mail||function(){const e=document.createElement("div");document.body.append(e),e.classNames="toast center",e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.innerHTML='<div>\n        <div class="toast-body">\n        <div class="mt-2 pt-2 border-top">\n            <label for="mail">Wnter your registered email: </label>\n            <input type="email" name="mail" id="mail" placeholder="name@mail.com" required>\n        </div>\n        <div class="alert alert-danger" role="alert" style="display: none;">\n        Please... enter valid e-mail!\n        </div>\n        <div class="mt-2 pt-2 border-top">\n            <button type="button" class="btn btn-primary btn-sm">Confirm</button>\n            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Cancel</button>\n        </div>\n        </div>';const t=e.querySelector("#mail"),l=e.querySelector(".alert alert-danger"),n=e.querySelector(".btn btn-secondary btn-sm");t.addEventListener("focus",r),n.addEventListener("click",(function e(){(t.textContent=1!=t.textContent.trim().match(a).length)&&(l.style.display=""),localStorage.setItem("mail",t.textContent.trim().toLocaleLowerCase()),removeEventListener("click",e),removeEventListener("focus",r)}));const r=()=>l.style.display="none",a=/^(\w){1}(\d|\w|\.|-|_)+@(\w|\d)+\.(\w|\.|\d){3,}$/i}();const e=setInterval((async()=>{if(localStorage.mail)return clearInterval(e),m.filter((e=>e.mail==localStorage.mail)).length>0&&function(){if(!n)return console.log("Not elemNode!!!");n.append(r),r.className="container text-center",r.style="margin-top: 12px",r.innerHTML='<div class="row mb-3">\n        <label for="vela_start" class="col-sm-4 col-form-label col-form-label-sm" style="color: white; text-align: start">Vela init: </label>\n        <div class="col-sm-7">\n        <input type="number" name="vela_start" id="vela_start" min="1" value="1" style="color: blue; width: inherit">\n        </div>\n        </div>\n        <div class="row mb-3">\n        <label for="vela_end" class="col-sm-4 col-form-label col-form-label-sm" style="color: white; text-align: start">Vela end: </label>\n        <div class="col-sm-7">\n        <input type="number" name="vela_end" id="vela_end" min="0" value="1" style="color: blue; width: inherit">\n        </div>\n        </div>\n        <div class="row">\n        <div class="col-md-12 center">\n        <button id="show_data" type="button" class="btn btn-primary" style="width: 160px; margin-bottom: 15px;">Show Data</button>\n        </div>\n        </div>\n        <div class="table-responsive table-sm" style="margin-left = 5px" id="list_data">\n        </div>',document.querySelector("#show_data").addEventListener("click",c)}(),console.log("Not User!!!")}),1e3)};function u(){if(!l)return console.log("Not Crash!!!");d()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",u):u()})();