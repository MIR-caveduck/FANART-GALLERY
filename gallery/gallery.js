const id=document.body.dataset.member,base="../../";let all=[],active=[],selected=0,currentKey="";
const $=x=>document.getElementById(x);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const memberNames={seolhong:"설홍",eri:"최애리",nunyo:"눈요",yeowuyeon:"여우연",nano:"나노",rabu:"라브"};
const niceOrder=["nano_swim","seolhong_astra","seolhong_yixuan","eri_menhera","yeowuyeon_school","nunyo_witch","nano_home","nano_nurse","nano_school","nano_date","nunyo_pajama","yeowuyeon_princess","eri_nun","eri_swim","eri_uniform","rabu_senjougahara","rabu_daily","martial","bikini","swimwear","activewear","zzz","bold_hanbok","fantasy_new","hanbok_new"];
let groups=[];
fetch(base+"data/gallery.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("데이터를 불러오지 못했습니다");return r.json()}).then(data=>{
 all=data.items.filter(x=>x.owner===id);
 groups=Object.entries(data.categories).filter(([key])=>all.some(x=>x.collection===key)).sort(([a],[b])=>{
  if(a==="fragments"&&b!=="fragments")return 1;if(b==="fragments"&&a!=="fragments")return -1;
  return (niceOrder.indexOf(a)<0?99:niceOrder.indexOf(a))-(niceOrder.indexOf(b)<0?99:niceOrder.indexOf(b));
 });
 if(!groups.length)groups=[["fragments",data.categories.fragments]];
 const params=new URLSearchParams(location.search);const key=params.get("collection");
 if(key&&groups.some(([k])=>k===key))showCollection(key,false);else showLanding(false);
 window.addEventListener("popstate",()=>{const k=new URLSearchParams(location.search).get("collection");if(k&&groups.some(([x])=>x===k))showCollection(k,false);else showLanding(false)});
}).catch(e=>{$("landing").innerHTML='<div class="empty">갤러리 데이터를 불러오지 못했어요. GitHub Pages에서 확인해 주세요.</div>';console.error(e)});
function setUrl(key){const u=new URL(location.href);if(key)u.searchParams.set("collection",key);else u.searchParams.delete("collection");history.pushState({},"",u)}
function showLanding(push=true){if(push)setUrl(null);currentKey="";$("landing").hidden=false;$("collectionView").hidden=true;$("landingCards").replaceChildren();
 groups.forEach(([key,c])=>{const list=all.filter(x=>x.collection===key);const card=document.createElement("button");card.type="button";card.className="collection-card"+(key==="fragments"?" historic":"");const cover=list[0]?.src;
 card.innerHTML=`<span class="collection-cover">${cover?`<img src="${base+encodeURI(cover)}" alt="" loading="lazy">`:""}<span class="cover-shade"></span><span class="collection-count">${list.length} WORKS</span></span><span class="collection-info"><small>${esc(c.subtitle||"COLLECTION")}</small><strong>${esc(c.title)}</strong><span>${esc(c.description||"")}</span><em>전시관 입장 ↗</em></span>`;
 card.onclick=()=>showCollection(key);$("landingCards").append(card)});
 $("landingCount").textContent=all.length+" ARTWORKS · "+groups.length+" COLLECTIONS";window.scrollTo(0,0)}
function showCollection(key,push=true){const found=groups.find(([k])=>k===key);if(!found)return showLanding(push);if(push)setUrl(key);const c=found[1];currentKey=key;$("landing").hidden=true;$("collectionView").hidden=false;active=all.filter(x=>x.collection===key);
 $("sectionTitle").textContent=c.title;$("sectionLabel").textContent=c.subtitle||"COLLECTION";$("description").textContent=c.description||"";$("total").textContent=active.length+" WORKS";$("works").replaceChildren();
 active.forEach((x,i)=>{const card=document.createElement("article");card.className="work";card.tabIndex=0;card.setAttribute("role","button");card.setAttribute("aria-label",x.title+" 확대");card.innerHTML=`<img loading="lazy" src="${base+encodeURI(x.src)}" alt="${esc(x.title)}"><div class="info"><h3>${esc(x.title)}</h3><p>${esc(x.memo||"")}</p>${x.maesil_pick?`<div class="pick-preview">🍒 매실이픽 · ${esc(x.maesil_pick)}</div>`:""}<time>${esc(x.date||"")}</time></div>`;card.onclick=()=>show(i);card.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();show(i)}};$("works").append(card)});
 window.scrollTo(0,0)}
function show(i){if(!active.length)return;selected=(i+active.length)%active.length;const x=active[selected];$("large").src=base+encodeURI(x.src);$("large").alt=x.title;$("artTitle").textContent=x.title;$("memo").textContent=x.memo||"";const picks=$("picks");picks.replaceChildren();for(const [label,value] of [["🍒 매실이픽",x.maesil_pick],["✒️ 제작자픽",x.creator_pick]]){if(value){const el=document.createElement("div");el.className="pick-line";const strong=document.createElement("strong");strong.textContent=label;const span=document.createElement("span");span.textContent=value;el.append(strong,span);picks.append(el)}}$("date").textContent=x.date||"";$("original").href=base+encodeURI(x.src);$("viewer").showModal()}
$("toLanding").onclick=()=>showLanding();$("close").onclick=()=>$("viewer").close();$("prev").onclick=()=>show(selected-1);$("next").onclick=()=>show(selected+1);document.addEventListener("keydown",e=>{if(!$("viewer").open)return;if(e.key==="ArrowLeft")show(selected-1);if(e.key==="ArrowRight")show(selected+1)});$("viewer").onclick=e=>{if(e.target===$("viewer"))$("viewer").close()};
