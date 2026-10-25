const C=window.CATALOG||[],app=document.getElementById('app');let audio=new Audio(),autoplay=true;
function home(){audio.pause();app.innerHTML=`<header><h1>시후의 그리스로마신화</h1><p>⚡ 탐험가 시후와 떠나는 신들의 모험 ⚡</p></header><div class="grid">${C.map(e=>`<a class="card" href="#${e.id}"><img src="${e.base+e.cover}" alt=""><div class="b"><span class="n">${e.number}화</span><h2>${e.title}</h2><p>${e.subtitle||''}</p></div></a>`).join('')}<div class="card soon">다음 이야기 준비 중… 🚧</div></div>`}
function play(src){audio.pause();if(!src)return;audio=new Audio(src);audio.play().catch(()=>{})}
function viewer(e,i){const N=e.scenes.length,last=i>=N;let body;
 if(!last){const s=e.scenes[i];body=(s.video?`<div class="vwrap"><video id="vid" src="${e.base+s.video}" poster="${e.base+s.image}" muted autoplay loop playsinline webkit-playsinline preload="auto"></video><span class="vbadge">🎬 영상</span></div>`:`<img src="${e.base+s.image}" alt="">`)+`<div class="txt">${s.text}</div>`}
 else body=`<div class="msg"><h2>🌟 ${e.message.title} 🌟</h2><ul>${e.message.points.map(p=>`<li>${p}</li>`).join('')}</ul>${(e.quiz||[]).map((q,k)=>`<div class="q"><h3>퀴즈 ${k+1}. ${q.q}</h3>${q.options.map((o,j)=>`<button class="opt" data-k="${k}" data-j="${j}">${o}</button>`).join('')}</div>`).join('')}</div>`;
 app.innerHTML=`<div class="viewer"><div class="top"><a href="#">🏠</a><div class="t">${e.number}화 ${e.title}</div><span class="btn" id="snd">🔊</span></div><div class="stage">${body}</div><div class="nav"><span class="btn" id="pv">◀</span><span class="dots">${last?'⭐':(i+1)+' / '+N}</span><span class="btn" id="nx">${last?'🏠':'▶'}</span></div></div>`;
 const go=d=>{const j=i+d;if(j<0)return;if(j>N){location.hash='';return}location.hash=e.id+'/'+j};
 pv.onclick=()=>go(-1);nx.onclick=()=>go(1);
 const src=last?(e.message.audio&&e.base+e.message.audio):e.base+e.scenes[i].audio;
 snd.onclick=()=>play(src);const vd=document.getElementById('vid');if(vd){vd.play().catch(()=>{});vd.onclick=()=>vd.paused?vd.play():vd.pause()}if(autoplay)play(src);
 document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const q=e.quiz[b.dataset.k];b.classList.add(+b.dataset.j===q.answer?'ok':'no');if(+b.dataset.j===q.answer)b.textContent+=' ⭕ 정답!';else b.textContent+=' ❌ 다시 생각해 봐!'});
 let x0=null;const v=document.querySelector('.viewer');v.addEventListener('touchstart',t=>x0=t.touches[0].clientX,{passive:true});
 v.addEventListener('touchend',t=>{if(x0===null)return;const dx=t.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)go(dx<0?1:-1);x0=null});
 document.onkeydown=k=>{if(k.key=='ArrowRight')go(1);if(k.key=='ArrowLeft')go(-1)};}
function route(){const [id,n]=location.hash.slice(1).split('/');const e=C.find(x=>x.id===id);e?viewer(e,+(n||0)):home()}
addEventListener('hashchange',route);route();
