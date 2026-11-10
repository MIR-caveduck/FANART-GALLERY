const MEMBERS=[
{id:"eri",name:"최애리",en:"CHOI ERI",mark:"🍒",p:"#AB3E1A",s:"#D2B595",open:true,hero:"images/eri/hero-v12.webp",date:"VABLUE ACADEMY",quote:"“붉은 달 아래에서도, 무대의 빛은 애리에게.”"},
{id:"nunyo",name:"눈요",en:"NUNYO",mark:"❄️🐇",p:"#F0FDFC",s:"#77A0FD",open:true,hero:"images/nunyo/hero-v12.webp",date:"VABLUE ACADEMY",quote:"“포근한 겨울의 한 페이지, 아랑과 함께.”"},
{id:"yeowuyeon",name:"여우연",en:"YEO WOOYEON",mark:"💎🦊",p:"#C9DFEA",s:"#F0F8FD",open:true,hero:"images/yeowuyeon/hero-v10.webp",date:"VABLUE ACADEMY",quote:"“산과 계절, 그리고 너. 항상 여기 있어.”"},
{id:"seolhong",name:"설홍",en:"SEOLHONG",mark:"🌺",p:"#B64659",s:"#FF92A7",open:true,hero:"images/seolhong/hero-v12.webp",date:"VABLUE ACADEMY",quote:"“매화 향이 머무는 곳에, 오늘의 이야기도.”"},
{id:"nano",name:"나노",en:"NANO",mark:"✖️🖤",p:"#E06064",s:"#373543",open:true,hero:"images/nano/hero-v11.webp",date:"2025.09.06 —",quote:"“달콤한 유혹은, 언제나 너로부터.”"}
];

const ITEMS=[{"cat":"nano","title":"창밖을 바라보는 나노","src":"images/nano/main/01-window.webp","memo":"잠깐 멈춘 시선 끝에, 나노만의 조용한 시간이 흐른다.","date":"2026.09.15"},{"cat":"nano","title":"벚꽃 아래 생각에 잠긴 나노","src":"images/nano/main/02-cherry-blossom.webp","memo":"흩날리는 봄 사이, 오늘은 무슨 생각을 하고 있을까.","date":"2026.09.15"},{"cat":"nano","title":"칠판에 낙서하는 나노","src":"images/nano/main/03-blackboard.webp","memo":"지각은 했어도 낙서는 못 참지. 역시 나노답다.","date":"2026.09.15"},{"cat":"species","title":"붉은 달 아래 타락한 서큐버스 수녀","src":"images/eri/main-v12/01.webp","memo":"붉은 달이 비추는 밤, 성스러운 수녀복 아래 감춰진 서큐버스의 매혹적인 날개.","date":"2026.09.15","owner":"eri"},{"cat":"eri","title":"서큐버스 날개 연습 교실","src":"images/eri/main-v12/02.webp","memo":"작은 날갯짓부터 천천히. 서큐버스로서의 연습도 애리답게.","date":"2026.09.15"},{"cat":"eri","title":"비밀스러운 성당의 고해성사","src":"images/eri/main-v12/03.webp","memo":"조용한 성당 안, 오늘의 비밀은 여기까지만.","date":"2026.09.15"},{"cat":"eri","title":"최애리의 네온 고딕 아이돌 콘서트","src":"images/eri/main-v12/04.webp","memo":"네온이 번지는 무대 위, 오늘만큼은 시선이 전부 애리에게.","date":"2026.09.15"},{"cat":"nunyo","title":"겨울 아이스크림을 고르는 토끼소녀","src":"images/nunyo/main-v12/01.webp","memo":"추워도 아이스크림은 못 참지. 고민은 맛을 고를 때뿐.","date":"2026.09.15"},{"cat":"nunyo","title":"눈 내리는 창가의 토끼 친구","src":"images/nunyo/main-v12/02.webp","memo":"창밖의 눈을 바라보며 아랑과 나란히 보내는 시간.","date":"2026.09.15"},{"cat":"nunyo","title":"눈토끼와 함께한 겨울날","src":"images/nunyo/main-v12/03.webp","memo":"눈으로 만든 작은 친구와 보내는 새하얀 하루.","date":"2026.09.15"},{"cat":"nunyo","title":"복실복실 아랑이 케어 타임","src":"images/nunyo/main-v12/04.webp","memo":"빗질 한 번에 두 배로 복슬해진 아랑.","date":"2026.09.15"},{"cat":"nunyo","title":"비 오는 날의 토끼 친구들","src":"images/nunyo/main-v12/05.webp","memo":"처음 보는 빗방울도 친구들과 함께라면 신기한 구경거리.","date":"2026.09.15"},{"cat":"nunyo","title":"토끼 굿즈 천국의 설렘간식","src":"images/nunyo/main-v12/06.webp","memo":"어딜 봐도 토끼뿐. 눈요에게는 천국 같은 하루.","date":"2026.09.15"},{"cat":"nunyo","title":"토끼 테마의 겨울 게이밍 룸","src":"images/nunyo/main-v12/07.webp","memo":"폭신한 토끼방에서도 게임만큼은 진심.","date":"2026.09.15"},{"cat":"nunyo","title":"포근한 겨울 아침, 5분만 더","src":"images/nunyo/main-v12/08.webp","memo":"이불 밖은 아직 너무 추워. 정말 딱 5분만 더.","date":"2026.09.15"},{"cat":"nunyo","title":"포근한 겨울 코코아 시간","src":"images/nunyo/main-v12/09.webp","memo":"두 손 가득 따뜻한 코코아, 겨울엔 이 정도면 충분해.","date":"2026.09.15"},{"cat":"nunyo","title":"포근한 토끼 카페의 행복한 하루","src":"images/nunyo/main-v12/10.webp","memo":"따뜻한 카페 한구석, 토끼들과 함께라 더 포근하게.","date":"2026.09.15"},{"cat":"seolhong","title":"매화 주막의 달빛 한 잔","src":"images/seolhong/main-v12/01.webp","memo":"매화 향과 달빛 사이, 설홍이 건네는 느긋한 한 잔.","date":"2026.09.15"},{"cat":"seolhong","title":"매화를 쫒는 명탐정 설홍","src":"images/seolhong/main-v12/02.webp","memo":"갓을 눌러쓰고, 오늘의 단서는 매화 끝에서.","date":"2026.09.15"},{"cat":"yeowuyeon","title":"벚꽃 곁 여우 소녀의 공부 시간","src":"images/yeowuyeon/main-v12/01.webp","memo":"꽃잎이 흩날려도 오늘만큼은 모범생 모드.","date":"2026.09.15"},{"cat":"yeowuyeon","title":"벚꽃 아래 고양이와 여우소녀","src":"images/yeowuyeon/main-v12/02.webp","memo":"벚꽃 아래서 만난 작은 친구와 잠깐의 봄 산책.","date":"2026.09.15"},{"cat":"yeowuyeon","title":"벚꽃 아래 여우 소녀의 셀카","src":"images/yeowuyeon/main-v12/03.webp","memo":"봄빛이 좋은 날, 짱돌에게 남기는 한 장.","date":"2026.09.15"},{"cat":"yeowuyeon","title":"복슬복슬 꼬리 손질 시간","src":"images/yeowuyeon/main-v12/04.webp","memo":"풍성한 꼬리는 그냥 만들어지는 게 아니니까.","date":"2026.09.15"},{"cat":"yeowuyeon","title":"비 오는 날의 여우 소녀","src":"images/yeowuyeon/main-v12/05.webp","memo":"빗소리를 들으며 천천히 걷는 조금 다른 산책.","date":"2026.09.15"},{"cat":"yeowuyeon","title":"심야 라면과 여우소녀의 작은 행복","src":"images/yeowuyeon/main-v12/06.webp","memo":"늦은 밤 라면 한 그릇이면 충분히 행복한 순간.","date":"2026.09.15"},{"cat":"nano","title":"PC방의 나노 승리를 위한 한판","src":"images/nano/main-v12/01.webp","memo":"평소의 여유는 잠시 접어두고, 이번 판은 반드시 이긴다.","date":"2026.09.15"},{"cat":"nano","title":"밤에 몰래 편의점에서 아이스크림 사먹는 나노","src":"images/nano/main-v12/02.webp","memo":"한밤중의 작은 일탈. 오늘의 유혹은 아이스크림.","date":"2026.09.15"},{"cat":"nano","title":"서큐버스 나노는 야시장이 신기하다","src":"images/nano/main-v12/03.webp","memo":"인간들의 밤은 생각보다 반짝이고, 먹을 것도 많다.","date":"2026.09.15"},{"cat":"nano","title":"할로윈 축제의 나노와 악마 코스튬 인간들","src":"images/nano/main-v12/04.webp","memo":"진짜 악마 앞에서 악마 분장이라니. 나노는 조금 어이없다.","date":"2026.09.15"},{"cat":"fantasy","owner":"nano","title":"나노의 몽환적인 꿈의 도서관","src":"images/nano/fantasy-v13/01.webp","memo":"책장을 넘길수록 현실보다 달콤한 꿈이 가까워진다.","date":"2026.09.16"},{"cat":"fantasy","owner":"nano","title":"붉은 달 아래 피코 군단과 나노","src":"images/nano/fantasy-v13/02.webp","memo":"붉은 달이 뜬 밤, 오늘은 피코 군단과 함께.","date":"2026.09.16"},{"cat":"fantasy","owner":"nano","title":"천국에 온 귀여운 서큐버스","src":"images/nano/fantasy-v13/03.webp","memo":"천국까지 와버린 서큐버스. 그런데 생각보다 꽤 마음에 든다.","date":"2026.09.16"},{"cat":"seolhong","owner":"seolhong","title":"달빛 아래 설홍의 매화 정령(본모습)","src":"images/seolhong/main-v13/01.webp","memo":"달빛과 매화가 겹치는 밤, 가장 설홍다운 모습으로.","date":"2026.09.16"},{"cat":"seolhong","owner":"seolhong","title":"매화가 피는 한옥 바의 밤","src":"images/seolhong/main-v13/02.webp","memo":"매화 향이 번지는 한옥 바에서 천천히 깊어지는 밤.","date":"2026.09.16"},{"cat":"seolhong","owner":"seolhong","title":"설홍, 벚꽃 아래 여검객","src":"images/seolhong/main-v13/03.webp","memo":"꽃잎 사이를 걷는 여검객. 봄날에도 기품은 그대로.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"달빛 아래 매화 검성","src":"images/seolhong/fantasy-v13/01.webp","memo":"달빛 아래 한 번의 검격, 흩날리는 건 매화뿐.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"매화 마법사의 손길","src":"images/seolhong/fantasy-v13/02.webp","memo":"손끝에서 피어나는 마법은 언제나 매화의 모양을 닮았다.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"매화 정령의 엘프 숲 초대","src":"images/seolhong/fantasy-v13/03.webp","memo":"낯선 숲에서도 매화 향을 따라가면 설홍을 만날 수 있다.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"매화나무의 영원한 수호자 설홍","src":"images/seolhong/fantasy-v13/04.webp","memo":"오랜 세월 한자리에서 봄의 기억을 지켜온 수호자.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"매화선녀 설홍의 천계 연회","src":"images/seolhong/fantasy-v13/05.webp","memo":"구름 위 연회에도 은은한 매화 향을 남기는 선녀.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍 몰락한 용의 매화 선율","src":"images/seolhong/fantasy-v13/06.webp","memo":"몰락한 용에게 닿은 해금 한 소절, 그리고 다시 피는 매화.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍 폐허에 핀 마지막 매화","src":"images/seolhong/fantasy-v13/07.webp","memo":"모든 것이 무너진 자리에도 마지막 매화는 피어 있었다.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍, 매화의 기사단장","src":"images/seolhong/fantasy-v13/08.webp","memo":"검 끝에 매화를 품은 기사단의 선두.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍, 영원의 매화 뱀파이어","src":"images/seolhong/fantasy-v13/09.webp","memo":"영원한 밤 속에서도 시들지 않는 한 송이 매화.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍, 영원한 매화나무의 수호자","src":"images/seolhong/fantasy-v13/10.webp","memo":"계절이 지나도 그 나무 곁을 지키는 오래된 약속.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍, 천 년의 봄이 피어나다","src":"images/seolhong/fantasy-v13/11.webp","memo":"천 년을 기다린 봄이 설홍의 곁에서 다시 피어난다.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍과 매화룡의 계약자","src":"images/seolhong/fantasy-v13/12.webp","memo":"매화와 용이 맺은 계약, 그 중심에 선 설홍.","date":"2026.09.16"},{"cat":"fantasy","owner":"seolhong","title":"설홍의 백귀야행 연주회","src":"images/seolhong/fantasy-v13/13.webp","memo":"백귀가 모인 밤에도 해금 선율만큼은 맑게 울려 퍼진다.","date":"2026.09.16"}];

const BASE_CATS=[
["member","✦","MEMBER","MEMBER"],
["species","🐾","RACES & FORMS","종족"],
["jobs","⚓","JOBS & ROLES","직업"],
["fantasy","🔮","FANTASY","판타지"],
["outfit","👗","OUTFITS","의상"],
["anniversary","🎂","ANNIVERSARY","기념일"],
["broadcast","🎮","STREAM & GAME","방송 & 게임"],
["special","✦","SPECIAL","스페셜"]
];

let currentMember=null;
let currentCats=[];
const albums=document.querySelector("#albums");

MEMBERS.forEach((m,i)=>{
  const d=document.createElement("article");
  d.className="album "+(m.open?"open":"");
  d.style.setProperty("--p",m.p); d.style.setProperty("--s",m.s);
  d.innerHTML=`<span class=num>0${i+1}</span><div class=mark>${m.mark}</div><h3>${m.name}</h3><em>${m.en}</em><div class=state>${m.open?"OPEN ARCHIVE":"ARCHIVE PREPARING..."}</div>`;
  if(m.open)d.onclick=()=>openMember(m,i);
  albums.append(d);
});
openCount.textContent=MEMBERS.filter(m=>m.open).length;

const RABU={id:"rabu",name:"라브",en:"RABU",mark:"👻",p:"#8E74B7",s:"#2A2238",hero:"images/rabu/hero-v12.webp",date:"SPECIAL ARCHIVE · GHOST_007",quote:"“책장 밖에 떨어진, 조금 다른 유령의 기록.”"};
const ghost=document.getElementById('secretWisp');
const ghostSpots=[[8,18],[23,12],[47,9],[76,14],[92,24],[12,65],[37,72],[66,61],[89,77],[51,42]];
const ghostSpot=ghostSpots[Math.floor(Math.random()*ghostSpots.length)];
ghost.style.left=ghostSpot[0]+'%';ghost.style.top=ghostSpot[1]+'%';
let ghostTaps=0;let ghostReset;
ghost.addEventListener('click',()=>{
  ghostTaps++;ghost.classList.remove('pulse');void ghost.offsetWidth;ghost.classList.add('pulse');
  ghost.setAttribute('aria-label',`비밀 유령불 ${ghostTaps}/5`);
  clearTimeout(ghostReset);ghostReset=setTimeout(()=>{ghostTaps=0;ghost.setAttribute('aria-label','작은 유령불')},3500);
  if(ghostTaps>=5){ghostTaps=0;openRabu()}
});
function openRabu(){
  document.body.classList.add("rabu-transitioning");
  const rt=document.getElementById("rabuTransition"); rt.classList.add("show");
  setTimeout(()=>{rt.classList.remove("show");document.body.classList.remove("rabu-transitioning");archive.classList.remove("active");member.classList.add("active");applyRabu();scrollTo(0,0)},1550);
}
function applyRabu(){
  currentMember=RABU;
  document.documentElement.style.setProperty("--member-primary",RABU.p);document.documentElement.style.setProperty("--member-secondary",RABU.s);
  albumNumber.textContent="SPECIAL ARCHIVE · GHOST_007";memberTitle.textContent="RABU";memberTitle.style.color="#262129";memberHeroImage.src=RABU.hero;memberHeroImage.alt="라브";memberDate.textContent=RABU.date;memberQuote.textContent=RABU.quote;content.hidden=true;
  cats.innerHTML=""; currentCats=[];
  content.hidden=true;
  const locked=[['👻','GHOST_007','유령의 기록'],['📼','SIGNAL LOST','방송 기록'],['🗝️','LOCKED MEMORY','비공개 기억'],['✦','UNKNOWN','미확인 기록'],['📁','ARCHIVE ERROR','분류 불명'],['…','NO SIGNAL','아직 열리지 않음']];
  locked.forEach((c,i)=>{const d=document.createElement('button');d.className='cat rabu-locked';d.disabled=true;d.innerHTML=`<i>${c[0]}</i><b>${c[2]}</b><small>${c[1]}</small><span>🔒 LOCKED</span>`;cats.append(d)});
  title.textContent="GHOST_007";kick.textContent="SPECIAL ARCHIVE";count.textContent="NO SIGNAL";photos.innerHTML='<div class="empty rabu-static">아직 복원되지 않은 기록입니다.<br><small>▒▒ SIGNAL LOST · ARCHIVE LOCKED ▒▒</small></div>';
}


function openMember(m,index){
  currentMember=m;
  transitionMark.textContent=m.mark;
  transitionName.textContent=m.en;
  transitionBook.style.setProperty("--p",m.p);
  transitionBook.style.setProperty("--s",m.s);
  transition.style.display="grid";
  setTimeout(()=>{
    transition.style.display="none";
    archive.classList.remove("active");
    member.classList.add("active");
    applyMember(m,index);
    scrollTo(0,0);
  },1350);
}

function applyMember(m,index){
  document.documentElement.style.setProperty("--member-primary",m.p);
  document.documentElement.style.setProperty("--member-secondary",m.s);
  albumNumber.textContent=`MEMORY ALBUM · ${String(index+1).padStart(2,"0")}`;
  memberTitle.textContent=m.en;
  memberTitle.style.color="#262129";
  memberTitle.style.webkitTextFillColor="#262129";
  memberTitle.style.textShadow="none";
  memberDate.textContent=m.date||"VABLUE MEMORY ARCHIVE";
  memberQuote.textContent=m.quote||"“기억하고 싶은 장면들을 한 권에.”";
  memberHeroImage.src=m.hero;
  memberHeroImage.alt=m.name;
  content.hidden=true;
  // Gallery categories live on the dedicated gallery page.
}

function buildCategories(m){
  cats.innerHTML="";
  currentCats=BASE_CATS.map((c,i)=>[i===0?m.id:c[0],c[1],i===0?m.en:c[2],i===0?m.name:c[3]]);
  currentCats.forEach(c=>{
    const n=getItems(c[0]).length;
    const d=document.createElement("button");
    d.className="cat";
    d.innerHTML=`<i>${c[1]}</i><b>${c[3]}</b><small>${c[2]}</small><span>${n} ${n===1?"MEMORY":"MEMORIES"}</span>`;
    d.onclick=()=>render(c);
    cats.append(d);
  });
  render(currentCats[0]);
}

function getItems(cat){
  if(!currentMember) return [];
  if(cat===currentMember.id) return ITEMS.filter(x=>x.cat===currentMember.id);
  return ITEMS.filter(x=>x.cat===cat && x.owner===currentMember.id);
}

back.onclick=()=>{
  member.classList.remove("active");
  archive.classList.add("active");
  content.hidden=true;
  scrollTo(0,0);
};

enter.onclick=()=>{if(!currentMember)return;window.location.href="gallery/"+currentMember.id+"/";};

function render(c){
  title.textContent=c[3];
  kick.textContent=c[2];
  const a=getItems(c[0]);
  count.textContent=`${a.length} ${a.length===1?"memory":"memories"}`;
  photos.innerHTML="";
  if(!a.length){
    photos.innerHTML='<div class="empty">아직 기록되지 않은 페이지.<br><small>이미지가 추가되면 이곳에 차곡차곡 쌓입니다.</small></div>';
    return;
  }
  a.forEach((x,i)=>{
    const d=document.createElement("article");
    d.className="memory m"+(i%5);
    d.innerHTML=`<img loading="lazy" src="${x.src}"><h4>${x.title}</h4><p>${x.memo}</p><time>${x.date}</time>`;
    d.onclick=()=>show(x);
    photos.append(d);
  });
  document.querySelector(".ghead").scrollIntoView({behavior:"smooth"});
}

function show(x){
  lbimg.src=x.src;
  lbdate.textContent=x.date;
  lbtitle.textContent=x.title;
  lbmemo.textContent=x.memo;
  lightbox.classList.add("show");
}

const closeLightbox=document.getElementById("close");
closeLightbox.addEventListener("click",(e)=>{e.stopPropagation();lightbox.classList.remove("show")});
lightbox.addEventListener("click",(e)=>{if(e.target===lightbox)lightbox.classList.remove("show")});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape"&&lightbox.classList.contains("show"))lightbox.classList.remove("show")});
