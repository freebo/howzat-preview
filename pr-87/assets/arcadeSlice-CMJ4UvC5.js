var hf=Object.defineProperty;var df=(s,e,t)=>e in s?hf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Y=(s,e,t)=>df(s,typeof e!="symbol"?e+"":e,t);import{D as uf,t as ff}from"./day03-CNJ7LGOP.js";import{_ as On}from"./game-DaDgGdxu.js";import"./rng-VQFrfh1t.js";import"./mikeTuning04-CiRA-iJ7.js";import"./previewBuild-BRfFpSbg.js";const Pt=(s,e,t)=>Math.max(e,Math.min(t,s)),wt=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),bn={minX:-22,maxX:22,minZ:.2,maxZ:25},ke={rows:4,rowDepth:2.2,rowRise:.4,back:8.8,minX:-19.5,maxX:19.5,aisles:[{x:-13,half:1},{x:0,half:1.2},{x:13,half:1}],benchDepth:.5,benchOffset:1.65,seatSpacing:.85};function on(s){if(s.z>=ke.back)return 0;const e=-.4*ke.rows;if(Qo(s.x))return e+-e*Pt(s.z/ke.back,0,1);const t=Pt(Math.floor(s.z/ke.rowDepth),0,ke.rows-1);return-.4*(ke.rows-t)}function Qo(s){return ke.aisles.some(e=>Math.abs(s-e.x)<=e.half)}function Pa(s){return s*ke.rowDepth+ke.benchOffset}function pf(){const s=[];let e=0;for(let t=0;t<ke.rows;t++)for(let n=ke.minX+.6;n<=ke.maxX-.6;n+=ke.seatSpacing)ke.aisles.some(i=>Math.abs(n-i.x)<=i.half+.35)||s.push({id:e++,row:t,x:Math.round(n*100)/100,z:Pa(t)});return s}const Bn={x:2.4,z:Pa(1)},Gd={x:3.25,z:Pa(1)},Zr={x:3.3,z:1*ke.rowDepth+.75},Ye={bar:{facility:"bar",label:"The Twelfth Man",minX:-18,maxX:-7,minZ:20,maxZ:25,counter:{x:-12.5,z:19.3},queueDir:{x:0,z:-1},zone:{minX:-17,maxX:-8,minZ:12.5,maxZ:20}},food:{facility:"food",label:"Beefy’s Burgers",minX:-3,maxX:3,minZ:20,maxZ:24,counter:{x:0,z:19.3},queueDir:{x:0,z:-1},zone:{minX:-3.4,maxX:3.4,minZ:12.5,maxZ:20}},toilet:{facility:"toilet",label:"Fine Leg Toilets",minX:8,maxX:18,minZ:20,maxZ:25,counter:{x:11.5,z:19.3},queueDir:{x:0,z:-1},zone:{minX:7.6,maxX:17,minZ:12.5,maxZ:20}}},wi={centre:{x:2.9,z:1*ke.rowDepth+.75},radius:1.7},$r=.82;function Hl(s,e,t=0){const n=Ye[s];if(e<=0)return{x:n.counter.x+t,z:n.counter.z};const i=Math.min(e,7),a={x:n.counter.x+n.queueDir.x*i*$r,z:n.counter.z+n.queueDir.z*i*$r+.15};if(e>7){const r=e-7,o=s==="toilet"?-1:1;a.x+=o*r*$r}return a}const Gn=[{x:-21.5,z:15},{x:21.5,z:15},{x:-21.5,z:11},{x:21.5,z:11}],un={tables:[{x:-6.3,z:15},{x:6.3,z:15},{x:-19,z:18.5},{x:19.5,z:13.5}],bins:[{x:-6.6,z:18.8},{x:6.2,z:18.8},{x:20.5,z:18.8}],planters:[{x:-10,z:10.4},{x:10,z:10.4},{x:-3.2,z:10.4},{x:3.2,z:10.4}],poles:[{x:-20,z:9.6},{x:-6.8,z:9.6},{x:6.8,z:9.6},{x:20,z:9.6}]};function mf(){const s=Object.values(Ye).map(e=>({minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ}));for(const e of un.tables)s.push({minX:e.x-1.1,maxX:e.x+1.1,minZ:e.z-.8,maxZ:e.z+.8});for(const e of un.bins)s.push({minX:e.x-.35,maxX:e.x+.35,minZ:e.z-.35,maxZ:e.z+.35});for(const e of un.planters)s.push({minX:e.x-.7,maxX:e.x+.7,minZ:e.z-.5,maxZ:e.z+.5});for(const e of un.poles)s.push({minX:e.x-.2,maxX:e.x+.2,minZ:e.z-.2,maxZ:e.z+.2});for(let e=0;e<ke.rows;e++){const t=Pa(e),n=Hd();for(const[i,a]of n)s.push({minX:i,maxX:a,minZ:t-ke.benchDepth/2,maxZ:(e+1)*ke.rowDepth+.05})}return s}function Hd(){const s=[ke.minX,...ke.aisles.flatMap(t=>[t.x-t.half,t.x+t.half]),ke.maxX],e=[];for(let t=0;t<s.length;t+=2)e.push([s[t],s[t+1]]);return e}const Ti={minX:-18,maxX:18,minZ:.4,maxZ:8.6},gf=1.8,bf=.2,Qr=3.4,xf=.35,Vl=1.6,_f=.13,vf=(s,e)=>s.x>=e.minX&&s.x<=e.maxX&&s.z>=e.minZ&&s.z<=e.maxZ;function Mf(s){if(wt(s,wi.centre)<=wi.radius)return"seats";for(const e of["bar","food","toilet"])if(vf(s,Ye[e].zone))return e;return s.z<ke.back?"stand":"concourse"}function yf(s){if(wt(s,wi.centre)<=wi.radius)return"seats";let e="bar",t=1/0;for(const n of["bar","food","toilet"]){const i=Math.abs(s.x-Ye[n].counter.x);i<t&&(t=i,e=n)}return e}const vn={seatedAtStart:56,wanderers:2,maxAgents:82,walkSpeed:1,shuffleSpeed:.7,jbErrandSpeed:2.2,animScale:.85,visibleFanShare:.12,queueVisibleMax:4,fromSeatChance:.3,backToSeatChance:.7,toiletStayInsideChance:.6,wanderPause:[7,16],seatedLook:{amount:.22,period:[9,18]},reactions:{six:{stand:!0,radius:6.5,chance:.6,duration:[1.6,2.2],ripple:.07},wicket:{stand:!0,radius:5.5,chance:.5,duration:[1.4,2],ripple:.07},catch:{stand:!0,radius:7.5,chance:.7,duration:[1.8,2.4],ripple:.06},four:{stand:!1,radius:9,chance:.35,duration:[.9,1.4],ripple:.05}},standUpTimeScale:1.1},eo={speechSeconds:6,missedToastGap:20,maxToasts:3},Sf=9,gt={firstAfter:75,gapMinutes:[60,120],lateFrom:270,lateFactor:.7,vomitShare:.55,vomitMinPints:4,focusFalloff:12,openFloorWeight:3,vomit:{stagger:1.6,heave:1.5,recover:1},fall:{stagger:.9,down:.45,lie:1.8,up:1.1},puddleRadius:.95,puddleLife:150,steward:{delay:[4,8],mop:4.5,speed:1.4},slipKick:2.6,slipCooldown:1.5},ys={drinkRates:[0,.3,.6,.9,1.3],startPints:1.5,bladderPerPint:20,bladderPerHour:6,hungerPerHour:9},Pi=.35,Ba=.22;class wf{constructor(e=mf()){Y(this,"cols");Y(this,"rows");Y(this,"blocked");this.cols=Math.ceil((bn.maxX-bn.minX)/Pi),this.rows=Math.ceil((bn.maxZ-bn.minZ)/Pi),this.blocked=new Uint8Array(this.cols*this.rows);for(const t of e){const n=this.col(t.minX-Ba),i=this.col(t.maxX+Ba),a=this.row(t.minZ-Ba),r=this.row(t.maxZ+Ba);for(let o=Math.max(0,a);o<=Math.min(this.rows-1,r);o++)for(let c=Math.max(0,n);c<=Math.min(this.cols-1,i);c++)this.blocked[o*this.cols+c]=1}}col(e){return Math.floor((e-bn.minX)/Pi)}row(e){return Math.floor((e-bn.minZ)/Pi)}centre(e,t){return{x:bn.minX+(e+.5)*Pi,z:bn.minZ+(t+.5)*Pi}}open(e,t){return e>=0&&t>=0&&e<this.cols&&t<this.rows&&!this.blocked[t*this.cols+e]}walkable(e){return this.open(this.col(e.x),this.row(e.z))}snap(e){const t=Math.max(0,Math.min(this.cols-1,this.col(e.x))),n=Math.max(0,Math.min(this.rows-1,this.row(e.z)));if(this.open(t,n))return{x:Math.max(bn.minX,Math.min(bn.maxX,e.x)),z:Math.max(bn.minZ,Math.min(bn.maxZ,e.z))};for(let i=1;i<40;i++){let a=null,r=1/0;for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){if(Math.max(Math.abs(o),Math.abs(c))!==i||!this.open(t+c,n+o))continue;const l=this.centre(t+c,n+o),h=Math.hypot(l.x-e.x,l.z-e.z);h<r&&(r=h,a=l)}if(a)return a}return e}lineOfSight(e,t){const n=Math.hypot(t.x-e.x,t.z-e.z),i=Math.max(1,Math.ceil(n/(Pi*.5)));for(let a=0;a<=i;a++){const r=a/i;if(!this.walkable({x:e.x+(t.x-e.x)*r,z:e.z+(t.z-e.z)*r}))return!1}return!0}findPath(e,t){const n=this.walkable(e)?e:this.snap(e),i=this.snap(t);if(this.lineOfSight(n,i))return[i];const a=this.col(n.x),r=this.row(n.z),o=this.col(i.x),c=this.row(i.z),l=this.cols*this.rows,h=new Float32Array(l).fill(1/0),d=new Int32Array(l).fill(-1),u=new Uint8Array(l),f=[],g=(_,A)=>{f.push([_,A]);let C=f.length-1;for(;C>0;){const L=C-1>>1;if(f[L][0]<=f[C][0])break;[f[L],f[C]]=[f[C],f[L]],C=L}},v=()=>{const _=f[0],A=f.pop();if(f.length){f[0]=A;let C=0;for(;;){const L=2*C+1,I=L+1;let O=C;if(L<f.length&&f[L][0]<f[O][0]&&(O=L),I<f.length&&f[I][0]<f[O][0]&&(O=I),O===C)break;[f[O],f[C]]=[f[C],f[O]],C=O}}return _},m=(_,A)=>{const C=Math.abs(_-o),L=Math.abs(A-c);return C+L+(Math.SQRT2-2)*Math.min(C,L)},p=r*this.cols+a;h[p]=0,g(m(a,r),p);const M=c*this.cols+o;let w=!1;for(;f.length;){const[,_]=v();if(u[_])continue;if(u[_]=1,_===M){w=!0;break}const A=_%this.cols,C=_/this.cols|0;for(let L=-1;L<=1;L++)for(let I=-1;I<=1;I++){if(!L&&!I)continue;const O=A+I,D=C+L;if(!this.open(O,D)||L&&I&&(!this.open(A+I,C)||!this.open(A,C+L)))continue;const B=D*this.cols+O;if(u[B])continue;const K=h[_]+(L&&I?Math.SQRT2:1);K<h[B]&&(h[B]=K,d[B]=_,g(K+m(O,D),B))}}if(!w)return null;const x=[];for(let _=M;_!==p&&_>=0;_=d[_])x.push(this.centre(_%this.cols,_/this.cols|0));x.reverse(),x[x.length-1]=i;const S=[];let E=n,R=0;for(;R<x.length;){let _=R;for(let A=x.length-1;A>R;A--)if(this.lineOfSight(E,x[A])){_=A;break}S.push(x[_]),E=x[_],R=_+1}return S}}const yi={perfect:[.78,.9],good:[.64,.95],overflowAbove:.97},Tf=4.5;function Ef(s){return s>=yi.overflowAbove?"overflow":s>=yi.perfect[0]&&s<=yi.perfect[1]?"perfect":s>=yi.good[0]&&s<=yi.good[1]?"good":"poor"}class Af{constructor(e=0){Y(this,"elapsed",0);Y(this,"result",null);this.intoxication=e}get speed(){return .75+.45*Pt(this.intoxication,0,1)}level(){const e=this.elapsed*this.speed%2,t=e<=1?e:2-e,n=Pt(this.intoxication,0,1)*.03*Math.sin(this.elapsed*23);return Pt(t+n,0,1)}update(e){return this.result?this.result:(this.elapsed+=Math.max(0,e),this.elapsed>=Tf&&(this.result="poor"),this.result)}stop(){return this.result||(this.result=Ef(this.level())),this.result}}function Rf(s,e){const t=e%97*.37,n=e%89*.53,i=e%83*.71;return Math.sin(1.7*s+t)+.6*Math.sin(3.1*s+n)+.35*Math.sin(5.3*s+i)}const Qn={spillAt:1,resetAfterSpill:.35,graceAfterSpill:.8,control:4.2,damping:1.6,soberDrift:.18,drunkDrift:1.9,walkDrift:.45,soberCentring:1.4};class Cf{constructor(e=1){Y(this,"tilt",0);Y(this,"velocity",0);Y(this,"time",0);Y(this,"grace",0);this.seed=e}update(e,t,n,i){const a=Math.max(0,e);this.time+=a,this.grace=Math.max(0,this.grace-a);const r=Pt(t,0,1),o=(Qn.soberDrift+Qn.drunkDrift*r+Qn.walkDrift*Pt(n,0,1))*Rf(this.time,this.seed),c=-this.tilt*Qn.soberCentring*(1-r),l=o+c+Pt(i,-1,1)*Qn.control-this.velocity*Qn.damping;if(this.velocity+=l*a,this.tilt+=this.velocity*a,Math.abs(this.tilt)>=Qn.spillAt){const h=Math.sign(this.tilt);if(this.tilt=h*Qn.resetAfterSpill,this.velocity=0,this.grace<=0)return this.grace=Qn.graceAfterSpill,!0}return!1}isLevel(){return Math.abs(this.tilt)<.25}}const Tn={duration:2.8,windowFrom:.6,reach:1.25,intoStandChance:.6,nearMike:5};function to(s,e){let t=Math.imul(s^2654435769,2246822507)^Math.imul(e+1663821227,3266489909);return t^=t>>>15,t=Math.imul(t,739982445),t^=t>>>12,t=Math.imul(t,695872825),t^=t>>>15,(t>>>0)/4294967296}const Pf=s=>s.x>=Ti.minX&&s.x<=Ti.maxX&&s.z>=Ti.minZ&&s.z<=Ti.maxZ;function Lf(s,e,t,n,i=a=>a){if(to(s,e)>=Tn.intoStandChance)return null;const a=to(s*7+3,e^23505)*Math.PI*2,r=(.35+.65*to(s*13+1,e^707))*Tn.nearMike,o=Pf(t)?t:n,c={x:Pt(o.x+Math.cos(a)*r,Ti.minX,Ti.maxX),z:Pt(o.z+Math.sin(a)*r*.6,Ti.minZ,Ti.maxZ)};return{eventId:s,target:i(c),elapsed:0,resolved:null}}function Pr(s){return Pt(s.elapsed/Tn.duration,0,1)}function Wl(s,e){return Pr(s)<Tn.windowFrom?"too-early":wt(e,s.target)<=Tn.reach?"caught":"out-of-reach"}function If(s,e){return s.resolved||(s.elapsed+=Math.max(0,e),s.elapsed>=Tn.duration&&(s.resolved="missed")),s.resolved}const Li={pour:{perfect:150,good:75,poor:15,overflow:5},deliverPerPint:100,perfectPintBonus:100,witness:{four:50,six:80,wicket:120,milestone:150},catch:500,relief:30,burger:20},Df=5;class Nf{constructor(){Y(this,"points",0);Y(this,"combo",1);Y(this,"bestCombo",1);Y(this,"log",[]);Y(this,"spills",0);Y(this,"catches",0);Y(this,"delivered",0)}award(e,t,n,i){const a=this.combo,r=Math.round(n*a);this.points+=r;const o={kind:e,label:t,base:n,combo:a,points:r};return this.log.push(o),i&&this.bump(),o}pour(e){const t=e==="perfect"?"Perfect pour!":e==="good"?"Good pour":e==="overflow"?"Frothy mess":"Rushed pour";return this.award("pour",t,Li.pour[e],e==="perfect")}deliver(e,t){this.delivered+=e;const n=e*Li.deliverPerPint+(t?Li.perfectPintBonus:0);return this.award("deliver",t?`Perfect pint${e>1?"s":""} delivered!`:`Delivered ${e} pint${e>1?"s":""}`,n,!0)}witness(e){const t=e==="six"?"Saw the six!":e==="four"?"Saw the four":e==="wicket"?"Saw the wicket!":"Saw the milestone!";return this.award("witness",t,Li.witness[e],!1)}catchBall(){return this.catches++,this.award("catch","CAUGHT IT! Crowd goes wild",Li.catch,!0)}relief(){return this.award("relief","Sweet relief",Li.relief,!1)}burger(){return this.award("burger","Burger fuel",Li.burger,!1)}spill(){this.spills++,this.combo=1}breakCombo(){this.combo=1}bump(){this.combo=Math.min(Df,this.combo+1),this.bestCombo=Math.max(this.bestCombo,this.combo)}}function Ff(s){return Math.max(0,Math.round(s))*5}function Uf(s=30326){const e=new uf(s);return e.showOpponent(),e.showBet(),e.placeBet("England"),e.showToss(),e.startMatch(),e}function na(s){const e=s.state.mike.activity;return!!e&&e.kind!=="eating"}function kf(s,e){const t=s.state,n=t.mike;return t.phase!=="match"||na(s)?!1:(n.travelling=null,n.place===e||(n.place=e,t.jeopardy.rescue&&t.jeopardy.rescue.destination!==e&&(t.jeopardy.rescue=null)),!0)}function Of(s){const e=s.state.mike;return e.carriedPints>0?(e.carriedPints--,"carried"):e.heldPints>0?(e.heldPints--,"held"):null}function bs(s){return Pt(s.effectiveBac("mike")/_f,0,1)}function Xl(s){if(s.sharedRoundAvailability().allowed)return"pint-2";const e=s.state.mike;return e.heldPints+e.drinking+e.carriedPints<.01?"pint-1":null}function Bf(s,e,t){const n=s.state.jb;n.awaitingRoundChoice&&(n.roundChoiceSecondsLeft+=e/(s.state.speed*.28)-t),s.advanceMinutes(e)}function zf(s){const e=s.state.mike.activity;return!e||e.kind!=="service"||e.facility!=="bar"?!1:(e.left=Math.max(e.left,.5),!0)}function Gf(s){const e=s.state.mike.activity;e&&e.kind==="service"&&e.facility==="bar"&&(e.left=Math.min(e.left,.01))}function Hf(s){const e=s.state.jb.travelling;return!e||s.state.phase!=="match"?!1:(e.left=Math.max(e.left,.5),!0)}let Vf=null;function Wf(){return Vf??(Vf=new wf)}function ql(s,e=vn.visibleFanShare){if(!s.startsWith("fan-"))return!0;const t=Number(s.slice(4))||0;return(Math.imul(t^1540483477,2654435761)>>>0)%1e3/1e3<e}function Hr(s,e){const t=s.state.queues[e],n=t.serving.map(r=>r.patron).filter(r=>ql(r)),i=t.patrons.filter(r=>ql(r)),a=Math.max(vn.queueVisibleMax,i.indexOf("mike")+1,i.indexOf("jb")+1);return{serving:n,waiting:i.slice(0,a)}}function ec(s,e,t){const n=Hr(s,e),i=n.serving.indexOf(t);if(i>=0)return Hl(e,0,(i-(n.serving.length-1)/2)*.9);const a=n.waiting.indexOf(t);return a>=0?Hl(e,a+1):null}function Xf(s,e){return Math.max(0,Hr(s,e).waiting.indexOf("mike"))}const qf=s=>Math.hypot(s.move.x,s.move.z);class Kf{constructor(e=30326){Y(this,"day");Y(this,"score",new Nf);Y(this,"nav",Wf());Y(this,"mike",{...Zr});Y(this,"heading",Math.PI);Y(this,"walking",0);Y(this,"path",[]);Y(this,"pour",null);Y(this,"pourPurchase",null);Y(this,"intent",null);Y(this,"lastPour",null);Y(this,"tray",null);Y(this,"ball",null);Y(this,"realTime",0);Y(this,"finished",!1);Y(this,"feedback",[]);Y(this,"lastPourDone",!1);Y(this,"seenEvents",0);Y(this,"trayCount",0);Y(this,"hazards",null);Y(this,"slipCooldown",0);Y(this,"intentSeats",!1);this.seed=e,this.day=Uf(e)}get zone(){return Mf(this.mike)}get carrying(){return this.day.state.mike.carriedPints}get speed(){return Qr*(1-xf*bs(this.day))*(this.tray?.8:1)}drainFeedback(){const e=this.feedback;return this.feedback=[],e}emit(e){this.feedback.push(e)}award(e){this.emit({type:"award",award:e})}chooseJBRound(e){return this.day.chooseJBBarOrder(e)}callItADay(){this.day.endGame()}walkTo(e,t=null){if(this.finished||na(this.day)||this.pour)return!1;const n=this.nav.findPath(this.mike,e);return n?(this.path=n,this.intent=t==="seats"?null:t,this.intentSeats=t==="seats",!0):!1}goTo(e){const t=e==="seats"?Zr:{x:Ye[e].counter.x,z:16.5};return this.walkTo(t,e)}get ballInPlay(){if(!this.ball)return!1;const e=this.zone;return e==="stand"||e==="seats"||wt(this.mike,this.ball.target)<=Sf}update(e,t){if(this.finished)return;const n=Pt(e,0,.1);this.realTime+=n;const i=this.day.state;if(t.action&&this.act(),qf(t)>.01&&(this.intent=null,this.intentSeats=!1),this.move(n,t),this.intent&&!this.path.length){const o=this.intent;this.intent=null,this.zone===o&&!na(this.day)&&!this.ballInPlay&&this.act()}this.intentSeats&&!this.path.length&&(this.intentSeats=!1,this.zone==="seats"&&!this.ballInPlay&&this.day.talk());const a=i.mike.activity;if((a==null?void 0:a.kind)==="service"&&a.facility==="bar"?(!this.pour&&!this.lastPourDone&&(this.pour=new Af(bs(this.day)),this.pourPurchase=a.purchase,this.emit({type:"pour-start"})),this.pour&&zf(this.day)):this.lastPourDone=!1,this.pour){const o=this.pour.update(n);o&&this.finishPour(o)}const r={carried:i.mike.carriedPints,held:i.mike.heldPints+i.mike.drinking,toilets:i.mike.toilets,burgers:i.mike.burgers,spend:i.mike.totalSpend};Bf(this.day,n*gf*(this.pour?bf:1),n),this.afterSim(r),this.slipCooldown=Math.max(0,this.slipCooldown-n),this.tray&&this.hazards&&this.walking>.15&&this.slipCooldown<=0&&this.hazards.puddleAt(this.mike)&&(this.tray.velocity+=(this.tray.tilt>=0?1:-1)*gt.slipKick,this.slipCooldown=gt.slipCooldown,this.emit({type:"slip"}),this.emit({type:"toast",text:"Whoa! Mind the sick!"})),this.tray&&(i.mike.carriedPints<=0?this.tray=null:i.mike.place!=="seats"&&!na(this.day)&&this.tray.update(n,bs(this.day),this.walking,t.tray)&&this.spill()),this.ball&&If(this.ball,n)==="missed"&&(this.ballInPlay&&(this.emit({type:"catch-missed"}),this.emit({type:"toast",text:"Dropped in the stand. So close!"})),this.ball=null),i.phase==="result"&&(this.finished=!0)}stepTowards(e,t){const n=e.x-this.mike.x,i=e.z-this.mike.z,a=Math.hypot(n,i);if(a<1e-4)return 0;const r=Math.min(a,t);return this.mike={x:this.mike.x+n/a*r,z:this.mike.z+i/a*r},this.heading=Math.atan2(n,i),r}move(e,t){const n=this.day.state.mike.activity;if(n&&n.kind!=="eating"){this.path=[];const o=ec(this.day,n.facility,"mike")??Ye[n.facility].counter,c=this.stepTowards(o,Vl*e);this.walking=c>1e-4?Vl/Qr:0,c||(this.heading=Math.atan2(-Ye[n.facility].queueDir.x,-Ye[n.facility].queueDir.z));return}if(this.pour){this.walking=0;return}const i=this.speed,a=Math.hypot(t.move.x,t.move.z);let r=0;if(a>.01){this.path=[];const o={x:t.move.x/a,z:t.move.z/a},c=i*e,l=g=>this.nav.walkable(g),h={x:this.mike.x+o.x*c,z:this.mike.z+o.z*c},d={x:this.mike.x+o.x*c,z:this.mike.z},u={x:this.mike.x,z:this.mike.z+o.z*c},f=l(h)?h:l(d)&&Math.abs(o.x)>.2?d:l(u)&&Math.abs(o.z)>.2?u:null;f&&(r=wt(f,this.mike),this.mike=f),this.heading=Math.atan2(o.x,o.z)}else if(this.path.length){let o=i*e;for(;o>1e-5&&this.path.length;){const c=this.stepTowards(this.path[0],o);if(r+=c,o-=c,wt(this.mike,this.path[0])<.02&&this.path.shift(),!c)break}}this.walking=e>0?Pt(r/e/Qr,0,1):0,kf(this.day,yf(this.mike))}act(){var n;const e=this.day.state;if(e.phase!=="match")return;if(this.pour&&!(this.ball&&this.ballInPlay&&Wl(this.ball,this.mike)==="caught")){this.finishPour(this.pour.stop());return}if(this.ball&&this.ballInPlay&&Pr(this.ball)>=Tn.windowFrom*.5){const i=Wl(this.ball,this.mike);if(i==="caught"){const a=((n=this.tray)==null?void 0:n.isLevel())??!0;this.award(this.score.catchBall()),this.emit({type:"catch"}),this.tray&&!a&&(this.spill(),this.emit({type:"toast",text:"Caught it… but the tray didn’t survive."})),this.ball=null;return}if(i==="too-early")return}if(na(this.day))return;const t=this.zone;if(t==="bar"){const i=Xl(this.day);if(!i){this.emit({type:"toast",text:e.mike.carriedPints>0?"Take JB his pint first.":"Finish your pint first."});return}if(this.path=[],!this.day.joinQueue(i)){this.emit({type:"toast",text:e.notice});return}this.pourPurchase=i}else t==="toilet"?(this.path=[],this.day.joinQueue("toilet")||this.emit({type:"toast",text:e.notice})):t==="food"?(this.path=[],this.day.joinQueue("burger")||this.emit({type:"toast",text:e.notice})):t==="seats"&&this.day.talk()}finishPour(e){this.pour=null,this.pourPurchase=null,this.lastPour=e,this.lastPourDone=!0,this.award(this.score.pour(e)),this.emit({type:"pour-end",quality:e}),Gf(this.day)}spill(){const e=Of(this.day);e&&(this.score.spill(),this.emit({type:"spill",who:e}),this.emit({type:"toast",text:e==="carried"?"Spilt JB’s pint! Combo lost.":"Spilt your pint! Combo lost."}),this.day.state.mike.carriedPints<=0&&(this.tray=null))}afterSim(e){const t=this.day.state,n=t.mike,i=n.totalSpend-e.spend,a=n.carriedPints-e.carried+n.heldPints+n.drinking-e.held;if(i>.001&&a>.5){const r=Math.round(a);this.emit({type:"purchase",amount:i,pints:r,text:`£${i.toFixed(2)} · ${r} ${r===1?"pint":"pints"}${n.carriedPints>0?" · take JB his":""}`})}n.toilets>e.toilets&&this.award(this.score.relief()),n.burgers>e.burgers&&this.award(this.score.burger()),n.carriedPints>e.carried&&(this.tray=new Cf(this.seed+ ++this.trayCount*31),this.emit({type:"tray-start"})),e.carried>0&&n.carriedPints===0&&n.place==="seats"&&(this.award(this.score.deliver(e.carried,this.lastPour==="perfect")),this.tray=null);for(const r of t.events.slice(this.seenEvents))this.onCricket(r);this.seenEvents=t.events.length,t.jeopardy.failure&&this.score.breakCombo()}onCricket(e){this.emit({type:"ball-bowled",kind:e.kind});const t=e.kind==="six"||e.kind==="four"||e.kind==="wicket"||e.importance>=4;if(e.kind==="six"){const n=this.ball?null:Lf(e.id,this.seed,this.mike,Zr,i=>this.nav.snap(i));n&&(this.ball=n),this.emit({type:"six",ball:n,eventId:e.id})}else e.kind==="four"?this.emit({type:"four",eventId:e.id}):e.kind==="wicket"&&this.emit({type:"wicket",eventId:e.id});if(t)if(e.mikeSaw){const n=e.importance>=4&&e.kind!=="six"&&e.kind!=="four"&&e.kind!=="wicket"?"milestone":e.kind;this.award(this.score.witness(n))}else this.emit({type:"toast",text:e.kind==="wicket"?"A wicket! You missed it.":"A roar from the stand. You missed it."})}prompt(){const e=this.day.state,t=e.mike;if(this.finished||e.phase!=="match")return{label:"Day over",enabled:!1,urgent:!1};if(this.ball&&this.ballInPlay){const a=Pr(this.ball)>=Tn.windowFrom,r=wt(this.mike,this.ball.target)<=Tn.reach;return this.pour&&!(a&&r)?{label:"Stop the pour on the line",enabled:!0,urgent:!0}:{label:a?r?"CATCH!":"Get under it!":"SIX! Get under the shadow",enabled:a&&r,urgent:!0}}if(this.pour)return{label:"Stop the pour on the line",enabled:!0,urgent:!0};const n=t.activity;if((n==null?void 0:n.kind)==="queued"){const a=Xf(this.day,n.facility),r=n.facility==="bar"?n.purchase==="pint-1"?" for a pint":` for ${n.purchase.slice(-1)} pints`:"";return{label:a?`Queueing${r}… ${a} ahead`:`Queueing${r}… nearly there`,enabled:!1,urgent:!1}}if((n==null?void 0:n.kind)==="service")return{label:n.facility==="bar"?"Paying up…":n.facility==="toilet"?"Ahhh…":"Being served…",enabled:!1,urgent:!1};const i=this.zone;if(i==="bar"){const a=Xl(this.day);return a?{label:a==="pint-2"?"Queue for a round (2 pints · £12.40)":"Queue for a pint (£6.20)",enabled:!0,urgent:!1}:{label:t.carriedPints>0?"Take JB his pint":"Finish your pint first",enabled:!1,urgent:!1}}return i==="toilet"?{label:"Join the toilet queue",enabled:!0,urgent:t.bladder>=70}:i==="food"?{label:(n==null?void 0:n.kind)==="eating"?"Eating…":"Queue for a burger (£7.50)",enabled:!n,urgent:t.hunger>=75}:i==="seats"?{label:"Chat to JB",enabled:!0,urgent:!1}:this.tray?{label:"Keep the tray level · take it to JB",enabled:!1,urgent:!1}:t.carriedPints>0?{label:"Take JB his pint",enabled:!1,urgent:!1}:{label:wt(this.mike,Bn)>6?"Click the ground to walk · JB’s on the bench":"Bar, burgers and loos are up the concourse",enabled:!1,urgent:!1}}hud(){const e=this.day.state,t=this.day.scoreboard(),n=e.mike;return{score:this.score.points,combo:this.score.combo,team:t.team,runs:t.runs,wickets:t.wickets,overs:t.overs,target:t.target,clock:ff(e.minute),bladder:n.bladder,hunger:n.hunger,alcohol:Math.round(bs(this.day)*100),sobriety:this.day.sobriety("mike"),pintsDrunk:e.jeopardy.mikePintsDrunk,carrying:n.carriedPints,holding:n.heldPints+(n.drinking>.01?1:0),spend:n.totalSpend,speech:e.speech,speechImportant:/round|thanks|warning|delivered/.test(e.speechCategory??""),notice:e.notice,prompt:this.prompt(),roundChoice:e.jb.awaitingRoundChoice,roundChoiceSeconds:Math.ceil(e.jb.roundChoiceSecondsLeft),pour:this.pour?{level:this.pour.level()}:null,tilt:this.tray?this.tray.tilt:null,warnings:this.day.criticalWarnings()}}results(){var i;const e=this.day.state,t=this.day.dayScore(),n=Ff(t.total);return{title:((i=e.jeopardy.failure)==null?void 0:i.title)??e.result??"Stumps",matchResult:e.jeopardy.failure?e.jeopardy.failure.message:e.result,arcadePoints:this.score.points,dayRating:t.total,dayBonus:n,total:this.score.points+n,bestCombo:this.score.bestCombo,catches:this.score.catches,delivered:this.score.delivered,spills:this.score.spills,reasons:t.reasons}}}function jf(s){const e=gt.vomit,t=gt.fall;return s==="vomit"?e.stagger+e.heave+e.recover:t.stagger+t.down+t.lie+t.up}function Jf(s,e){if(s==="vomit"){const n=gt.vomit;return e<n.stagger?"stagger":e<n.stagger+n.heave?"heave":"recover"}const t=gt.fall;return e<t.stagger?"stagger":e<t.stagger+t.down?"down":e<t.stagger+t.down+t.lie?"lie":"up"}class Yf{constructor(e,t){Y(this,"puddles",[]);Y(this,"steward",{id:-2,pos:{...Gn[0]},heading:0,mode:"gone",moving:0,path:[],job:null,phase:"off",wait:0});Y(this,"nextAt");Y(this,"focus",{x:1,z:9});Y(this,"log",[]);Y(this,"nextPuddle",1);Y(this,"lastMinute",0);this.rng=e,this.nav=t,this.nextAt=gt.firstAfter+this.gap(0)}gap(e){const[t,n]=gt.gapMinutes,i=e>=gt.lateFrom?gt.lateFactor:1;return(t+(n-t)*this.rng())*i}due(e,t){if(this.lastMinute=e,e<this.nextAt)return null;const n=t.filter(d=>d.eligible);if(!n.length)return this.nextAt=e+5,null;const a=this.rng()<gt.vomitShare?n.filter(d=>d.open!==!1&&d.pints>=gt.vomitMinPints):[],r=a.length?a:n,o=r.map(d=>(.4+d.pints*d.pints)*Math.exp(-wt(d.pos,this.focus)/gt.focusFalloff)*(d.open===!1?1:gt.openFloorWeight));let c=this.rng()*o.reduce((d,u)=>d+u,0),l=r[r.length-1];for(let d=0;d<r.length;d++)if(c-=o[d],c<=0){l=r[d];break}const h=a.length?"vomit":"fall";return this.nextAt=e+this.gap(e),this.log.push({kind:h,id:l.id,minute:e}),{id:l.id,kind:h}}start(e){return{kind:e,t:0,phase:"stagger",length:jf(e),puddle:null}}step(e,t,n,i){e.t+=t,e.phase=Jf(e.kind,e.t);const a=gt.vomit;if(e.kind==="vomit"&&e.puddle===null&&e.t>=a.stagger+.35){const r=this.nav.snap({x:n.x+Math.sin(i)*.55,z:n.z+Math.cos(i)*.55});e.puddle=this.addPuddle(r)}return e.t>=e.length}addPuddle(e){const t={id:this.nextPuddle++,pos:{...e},age:0,mopped:0,life:gt.puddleLife};return this.puddles.push(t),t.id}update(e){for(const t of this.puddles)t.age+=e,t.life-=e;for(let t=this.puddles.length-1;t>=0;t--)(this.puddles[t].life<=0||this.puddles[t].mopped>=1)&&this.puddles.splice(t,1);this.updateSteward(e)}puddleAt(e,t=0){for(const n of this.puddles)if(n.mopped<.85&&wt(e,n.pos)<=gt.puddleRadius+t)return n;return null}updateSteward(e){const t=this.steward,n=gt.steward,i=t.job!==null?this.puddles.find(r=>r.id===t.job)??null:null;if(t.phase==="off"){const r=this.puddles.find(o=>o.mopped<1);r&&(t.job=r.id,t.phase="waiting",t.wait=n.delay[0]+(n.delay[1]-n.delay[0])*this.rng()),t.moving=0;return}if(t.phase==="waiting"){if(t.wait-=e,!i){t.phase="off",t.job=null;return}if(t.wait<=0){const r=[...Gn,{x:Ye.toilet.counter.x+2,z:Ye.toilet.counter.z}],o=r.reduce((c,l)=>wt(l,i.pos)<wt(c,i.pos)?l:c,r[0]);t.pos={...o},t.mode="walk",t.path=this.nav.findPath(t.pos,this.mopSpot(i))??[this.mopSpot(i)],t.phase="walking"}return}if(t.phase==="walking"){if(!i){this.leave();return}const r=this.walk(t,e,n.speed);t.path.length||(t.phase="mopping",t.mode="stand",t.heading=Math.atan2(i.pos.x-t.pos.x,i.pos.z-t.pos.z)),t.moving=e>0?r/e/n.speed:0;return}if(t.phase==="mopping"){if(t.moving=0,!i){this.leave();return}if(i.mopped=Math.min(1,i.mopped+e/n.mop),i.mopped>=1){const r=this.puddles.find(o=>o.id!==i.id&&o.mopped<1);r?(t.job=r.id,t.path=this.nav.findPath(t.pos,this.mopSpot(r))??[this.mopSpot(r)],t.phase="walking",t.mode="walk"):this.leave()}return}const a=this.walk(t,e,n.speed);t.moving=e>0?a/e/n.speed:0,t.path.length||(t.mode="gone",t.phase="off",t.job=null,t.moving=0)}mopSpot(e){return this.nav.snap({x:e.pos.x+.75,z:e.pos.z+.3})}leave(){const e=this.steward,t=Gn.reduce((n,i)=>wt(i,e.pos)<wt(n,e.pos)?i:n,Gn[0]);e.job=null,e.phase="leaving",e.mode="walk",e.path=this.nav.findPath(e.pos,t)??[t]}walk(e,t,n){let i=n*t,a=0;for(;i>1e-5&&e.path.length;){const r=e.path[0],o=r.x-e.pos.x,c=r.z-e.pos.z,l=Math.hypot(o,c);if(l<.02){e.path.shift();continue}const h=Math.min(l,i);e.pos={x:e.pos.x+o/l*h,z:e.pos.z+c/l*h},e.heading=Math.atan2(o,c),a+=h,i-=h}return a}get minute(){return this.lastMinute}}const Zf=[s=>`${s} has had one too many. Steward to the stand, please!`,s=>`${s} has said goodbye to lunch. Mind your step.`,s=>`Oh dear. ${s} has redecorated the floor.`,s=>`${s} looks a bit green. Too late. Mop required.`],$f=[s=>`${s} has gone over! Back up to a round of applause.`,s=>`${s} tripped over thin air. Nobody saw. Everybody saw.`,s=>`${s} took a tumble. Nine out of ten from the judges.`,s=>`Timber! ${s} is down… and up again. Fine. Totally fine.`];function Qf(s,e,t){const n=s==="vomit"?Zf:$f;return n[Math.abs(t)%n.length](e)}const Kl=["Dave","Gaz","Bev","Sue","Kev","Tez","Shaz","Barry","Linda","Mo","Raj","Priya","Tom","Jess","Big Steve","Nige","Wendy","Dougie","Clive","Babs","Ken","Pat","Lee","Donna","Rob","Carol","Ade","Gemma","Stu","Anj"],jl=["Hartlepool","Stockton","Durham","Sunderland","Gateshead","Darlington","Leeds","Hexham","Bishop Auckland","Consett","Whitley Bay","Middlesbrough","Yarm","Morpeth","Ashington","Redcar"];function Jl(s){const e=Rs(s*2654435+99),t=`${Kl[Math.floor(e()*Kl.length)]} from ${jl[Math.floor(e()*jl.length)]}`,n=ys.drinkRates[Math.floor(e()*ys.drinkRates.length)],i=n>0?Math.round(e()*ys.startPints*10)/10:0;return{name:t,pints:i,rate:n,bladder:10+e()*30,hunger:15+e()*30,lastPint:-e()*60}}function ep(s,e,t=null){if((t==null?void 0:t.kind)==="vomit")return{status:t.phase==="recover"?"Feels much better, actually":"Being sick. Lovely.",mood:.15};if((t==null?void 0:t.kind)==="fall")return{status:t.phase==="up"?"Dusting themselves off":"Fell over. Fine. Totally fine.",mood:.3};const n=s.rate>0&&e-s.lastPint>60/Math.max(.3,s.rate);let i="Loving the cricket";s.pints>=6?i="Absolutely steaming":s.bladder>=75?i="Needs the loo":s.hunger>=75?i="Starving":s.pints>=4?i="Merry":n?i="Thirsty":s.rate===0&&(i="On the lemonade");const a=Math.max(0,Math.min(1,.85-Math.max(0,s.bladder-60)/100-Math.max(0,s.hunger-60)/120-(n?.15:0)+Math.min(.15,s.pints*.03)-Math.max(0,s.pints-5)*.08));return{status:i,mood:a}}const jt=vn;function Rs(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const tp=["bar","food","toilet"],za=s=>({x:s.x,z:s.z-.75});class np{constructor(e,t){Y(this,"agents",[]);Y(this,"jb");Y(this,"rng");Y(this,"seats");Y(this,"taken",new Set);Y(this,"nextId",1);Y(this,"jbHeld",0);Y(this,"incidents");Y(this,"lastMinute",null);this.nav=t,this.rng=Rs(e^40503),this.incidents=new Yf(Rs(e^20932),t),this.seats=pf().filter(i=>wt(i,Bn)>.6&&wt(i,Gd)>.6);const n=this.seats.map(i=>({seat:i,w:this.rng()*(1.6-Math.min(1,Math.abs(i.x)/20))})).sort((i,a)=>a.w-i.w);for(const{seat:i}of n.slice(0,jt.seatedAtStart))this.sit(this.spawn(za(i)),i);for(let i=0;i<jt.wanderers;i++){const a=this.spawn(this.randomConcoursePoint());a.goal="wander",a.mode="stand",a.wait=this.rng()*jt.wanderPause[1]}this.jb={...this.blank(-1,{...Bn}),goal:"jb"},this.jb.mode="seated",this.jb.heading=Math.PI}blank(e,t){return{id:e,look:e,pos:t,heading:Math.PI,mode:"stand",moving:0,path:[],patron:null,facility:null,seat:null,goal:null,speed:jt.walkSpeed*(.85+.3*this.rng()),wait:0,carry:null,cheerDelay:0,cheerLeft:0,cheerStand:!1,repath:0,fan:Jl(e),incident:null}}spawn(e){const t=this.blank(this.nextId++,{...e});return this.agents.push(t),t}sit(e,t){e.seat=t,this.taken.add(t.id),e.pos={x:t.x,z:t.z},e.mode="seated",e.heading=Math.PI,e.path=[],e.goal=null,e.moving=0,e.carry=null}stand(e){e.seat&&(this.taken.delete(e.seat.id),e.pos=za(e.seat),e.seat=null),e.mode="stand"}randomConcoursePoint(){const e=[...un.tables.map(n=>({x:n.x+1.6,z:n.z})),...un.bins.map(n=>({x:n.x,z:n.z-1.2})),{x:-8,z:11.5},{x:8,z:11.5},{x:0,z:12},{x:-16,z:12},{x:16,z:12},{x:-20,z:13},{x:20,z:16}],t=e[Math.floor(this.rng()*e.length)];return this.nav.snap({x:t.x+(this.rng()-.5)*2,z:t.z+(this.rng()-.5)*1.5})}freeSeatNear(e){let t=null,n=1/0;for(let i=0;i<24;i++){const a=this.seats[Math.floor(this.rng()*this.seats.length)];if(this.taken.has(a.id))continue;const r=wt(a,e)+this.rng()*8;r<n&&(n=r,t=a)}return t}react(e,t){const n=jt.reactions[e],i=t??{x:(this.rng()-.5)*(ke.maxX-ke.minX)*.7,z:ke.back*.5};let a=0;for(const o of this.agents){if(o.mode!=="seated"&&o.mode!=="stand"||o.cheerLeft>0||o.incident)continue;const c=wt(o.pos,i);c>n.radius||this.rng()>n.chance||(o.cheerDelay=c*n.ripple+this.rng()*.25,o.cheerLeft=n.duration[0]+this.rng()*(n.duration[1]-n.duration[0]),o.cheerStand=n.stand,a++)}const r=this.jb;return(r.mode==="seated"||r.mode==="stand")&&(r.cheerDelay=.15,r.cheerLeft=n.duration[1],r.cheerStand=n.stand),a}update(e,t){const n=t.state.minute,i=this.lastMinute===null?0:Math.max(0,n-this.lastMinute);if(this.lastMinute=n,this.syncPatrons(t),i>0)for(const a of this.agents)this.ageFan(a.fan,i,n);this.updateIncidents(e,n);for(const a of this.agents)this.updateAgent(a,e,t);this.updateJB(e,t)}ageFan(e,t,n){const i=t/60,a=e.rate*i;if(a>0){const r=Math.floor(e.pints);e.pints+=a,Math.floor(e.pints)>r&&(e.lastPint=n)}e.bladder=Math.min(100,e.bladder+a*ys.bladderPerPint+i*ys.bladderPerHour),e.hunger=Math.min(100,e.hunger+i*ys.hungerPerHour)}updateIncidents(e,t){const n=this.incidents.due(t,this.agents.map(i=>({id:i.id,pos:i.pos,pints:i.fan.pints,heading:i.heading,eligible:!i.incident&&(i.mode==="seated"||i.mode==="stand"||i.mode==="walk")&&i.cheerLeft<=0,open:i.mode!=="seated"&&(i.pos.z>=ke.back-.2||Qo(i.pos.x))})));if(n){const i=this.agents.find(a=>a.id===n.id);if(i){if(i.mode==="seated"){const a=i.seat;this.stand(i),i.goal="seat",a&&(i.seat=a,this.taken.add(a.id)),i.path=[],i.heading=Math.PI}i.pos.z<ke.back&&!Qo(i.pos.x)&&(i.heading=this.rng()<.5?Math.PI/2:-Math.PI/2),i.incident=this.incidents.start(n.kind)}}for(const i of this.agents)i.incident&&this.incidents.step(i.incident,e,i.pos,i.heading)&&(i.incident.kind==="vomit"&&(i.fan.pints=Math.max(0,i.fan.pints-1.5)),i.incident=null,i.goal==="seat"&&i.seat&&!i.path.length&&this.go(i,za(i.seat)));this.incidents.update(e)}syncPatrons(e){const t=new Map;for(const i of tp){const a=Hr(e,i);for(const r of[...a.serving,...a.waiting])r.startsWith("fan-")&&t.set(r,i)}for(const i of this.agents){if(!i.patron||t.has(i.patron))continue;const a=i.facility;if(i.patron=null,i.facility=null,a==="toilet"&&(i.fan.bladder=3),a==="toilet"&&wt(i.pos,Ye.toilet.counter)<2.5&&this.rng()<jt.toiletStayInsideChance){i.mode="gone",i.goal=null,i.path=[],i.carry=null;continue}i.carry=a==="bar"?"pint":a==="food"?"burger":null,a==="bar"&&(i.fan.pints+=1,i.fan.lastPint=this.lastMinute??0),a==="food"&&(i.fan.hunger=5);const r=this.rng()<jt.backToSeatChance?this.freeSeatNear(i.pos):null;r?(i.goal="seat",i.seat=r,this.taken.add(r.id),this.go(i,za(r))):(i.goal="gate",this.go(i,Gn[Math.floor(this.rng()*Gn.length)]))}const n=new Set(this.agents.map(i=>i.patron).filter(Boolean));for(const[i,a]of t){if(n.has(i))continue;const r=this.recruit(a);if(!r)break;r.patron=i,r.facility=a,r.goal="queue",r.carry=null,r.repath=0}}recruit(e){const t=this.agents.filter(a=>a.mode==="seated"&&a.cheerLeft<=0&&!a.incident);if(t.length>20&&this.rng()<jt.fromSeatChance){const a=t[Math.floor(this.rng()*t.length)];return this.stand(a),a}const n=this.agents.find(a=>a.mode==="gone");if(n){const a=Gn[Math.floor(this.rng()*Gn.length)];return n.pos={...a},n.mode="stand",n.path=[],n.look=this.nextId++,n.fan=Jl(n.look),n.incident=null,n}if(this.agents.length<jt.maxAgents){const a=Gn[e==="toilet"?1:e==="bar"?0:Math.floor(this.rng()*2)];return this.spawn(a)}const i=this.agents.find(a=>a.goal==="wander"&&!a.incident);if(i)return i;if(t.length){const a=t[Math.floor(this.rng()*t.length)];return this.stand(a),a}return null}go(e,t){e.path=this.nav.findPath(e.pos,t)??[t],e.mode="walk"}stepAlong(e,t,n){let i=n*t,a=0;for(;i>1e-5&&e.path.length;){const r=e.path[0],o=r.x-e.pos.x,c=r.z-e.pos.z,l=Math.hypot(o,c);if(l<.02){e.path.shift();continue}const h=Math.min(l,i);e.pos={x:e.pos.x+o/l*h,z:e.pos.z+c/l*h},e.heading=Math.atan2(o,c),a+=h,i-=h}return a}updateAgent(e,t,n){if(e.cheerDelay>0?e.cheerDelay=Math.max(0,e.cheerDelay-t):e.cheerLeft>0&&(e.cheerLeft=Math.max(0,e.cheerLeft-t)),e.mode==="gone"||e.mode==="seated"){e.moving=0;return}if(e.incident){e.moving=0,e.mode="stand";return}let i=0;if(e.goal==="queue"&&e.patron&&e.facility){const a=ec(n,e.facility,e.patron)??Ye[e.facility].counter;wt(e.pos,a)>2.2?(e.repath-=t,(!e.path.length||e.repath<=0)&&(e.path=this.nav.findPath(e.pos,a)??[a],e.repath=1.5),i=this.stepAlong(e,t,e.speed)):(e.path=[a],i=this.stepAlong(e,t,jt.shuffleSpeed),i<1e-4&&(e.heading=Math.atan2(-Ye[e.facility].queueDir.x,-Ye[e.facility].queueDir.z))),e.mode=i>1e-4?"walk":"stand"}else e.goal==="seat"||e.goal==="gate"?(i=this.stepAlong(e,t,e.speed),e.path.length||(e.goal==="seat"&&e.seat?this.sit(e,e.seat):(e.mode="gone",e.goal=null,e.carry=null))):e.goal==="wander"?e.path.length?(i=this.stepAlong(e,t,e.speed*.8),e.mode="walk",e.path.length||(e.mode="stand",e.wait=jt.wanderPause[0]+this.rng()*(jt.wanderPause[1]-jt.wanderPause[0]))):(e.wait-=t)<=0&&this.go(e,this.randomConcoursePoint()):(e.goal="wander",e.wait=1);e.moving=t>0?Math.min(1.4,i/t/jt.walkSpeed):0}updateJB(e,t){const n=this.jb,i=t.state.jb;n.cheerDelay>0?n.cheerDelay=Math.max(0,n.cheerDelay-e):n.cheerLeft>0&&(n.cheerLeft=Math.max(0,n.cheerLeft-e));const a=i.activity;let r,o=!1;if(i.departed)r=Gn[1];else if(a&&a.kind!=="eating")r=ec(t,a.facility,"jb")??Ye[a.facility].counter;else if((a==null?void 0:a.kind)==="eating")r={x:Ye.food.zone.maxX+.8,z:15.5};else{const d=i.travelling?i.travelling.to:i.place;d==="seats"?(r=Bn,o=!0):r={x:Ye[d].counter.x+2.2,z:Ye[d].counter.z-2.5}}if(n.mode==="seated"&&o){n.moving=0;return}n.mode==="seated"&&(n.mode="stand",n.pos={x:Bn.x,z:Bn.z-.75});const c=o?{x:Bn.x,z:Bn.z-.75}:r;n.repath-=e,wt(n.pos,c)>.05&&(n.repath<=0||!n.path.length)&&(n.path=this.nav.findPath(n.pos,c)??[c],n.repath=1.2);const l=!!a&&a.kind!=="eating"&&wt(n.pos,c)<2.2,h=this.stepAlong(n,e,l?jt.shuffleSpeed:jt.jbErrandSpeed);n.moving=e>0?Math.min(2.4,h/e/jt.walkSpeed):0,n.mode=h>1e-4?"walk":"stand",n.carry=(a==null?void 0:a.kind)==="eating"?"burger":i.carriedPints>0||i.heldPints>0||i.drinking>.01?"pint":null,i.travelling&&wt(n.pos,c)>.5&&this.jbHeld<60?(Hf(t),this.jbHeld+=e):this.jbHeld=0,o&&wt(n.pos,c)<.06?(n.pos={...Bn},n.mode="seated",n.heading=Math.PI,n.path=[]):a&&a.kind!=="eating"&&h<1e-4&&(n.heading=Math.atan2(-Ye[a.facility].queueDir.x,-Ye[a.facility].queueDir.z))}visibleQueue(e){return this.agents.filter(t=>t.goal==="queue"&&t.facility===e).length}}const no={bar:"at the bar",food:"at Beefy’s",toilet:"in the loo queue"};function ip(s,e,t){var d,u,f,g;const n=e.day,i=n.state;if(s.kind==="mike"){const v=i.mike,m=[`${n.sobriety("mike")} · ${i.jeopardy.mikePintsDrunk.toFixed(1)} pints today`];return v.bladder>=70?m.push("Needs the loo. Badly."):v.hunger>=70&&m.push("Could eat a horse"),v.carriedPints>0&&m.push(`Carrying ${v.carriedPints===1?"JB’s pint":`${v.carriedPints} pints`}`),((d=v.activity)==null?void 0:d.kind)==="queued"&&m.push(`Queueing ${no[v.activity.facility]}`),m.push(`Spent £${v.totalSpend.toFixed(2)}`),{title:"Mike",subtitle:"That’s you",lines:m.slice(0,4),mood:v.mood/100}}if(s.kind==="jb"){const v=i.jb,m=[n.sobriety("jb")];return((u=v.activity)==null?void 0:u.kind)==="queued"||((f=v.activity)==null?void 0:f.kind)==="service"?m.push(`Queueing ${no[v.activity.facility]}`):((g=v.activity)==null?void 0:g.kind)==="eating"?m.push("Eating a burger. Messily."):v.travelling?m.push("On an errand"):i.mike.carriedPints>0?m.push("Waiting on his pint"):v.heldPints+v.drinking>.01?m.push("Pint in hand. Content."):m.push("Thirsty. Looking at you."),v.bladder>=70&&m.push("Needs the loo"),{title:"JB",subtitle:"Your mate",lines:m,mood:v.mood/100}}if(s.kind==="fan"){const v=t.agents.find(S=>S.id===s.id);if(!v||v.mode==="gone")return null;const m=v.fan,{status:p,mood:M}=ep(m,i.minute,v.incident),w=Math.floor(m.pints),x=[p];return m.rate>0||w>0?x.push(`${w} ${w===1?"pint":"pints"} so far`):p!=="On the lemonade"&&x.push("Soft drinks only"),v.incident||(m.bladder>=60&&p!=="Needs the loo"?x.push("Could do with the loo"):m.hunger>=60&&p!=="Starving"&&x.push("Peckish")),v.goal==="queue"&&v.facility&&x.push(`Queueing ${no[v.facility]}`),{title:m.name,subtitle:"Spectator",lines:x.slice(0,3),mood:M}}if(s.kind==="steward"){const v=t.incidents.steward;return{title:"Steward",subtitle:"Riverside staff",lines:[v.phase==="mopping"?"Mopping up. Again.":v.phase==="walking"?"On the way with a mop":"Off for a cuppa","Not paid enough for this"]}}if(s.kind==="puddle"){const v=t.incidents.puddles.find(p=>p.id===s.id);if(!v)return null;const m=t.incidents.steward;return{title:"Sick",subtitle:"Slippery!",lines:[m.job===v.id&&m.phase==="mopping"?"Being mopped up":"A steward’s on the way","Don’t carry a tray through it"]}}const a=Ye[s.facility],r=Hr(n,s.facility).waiting.length,o=s.facility==="bar"?"Pint £6.20 · round of two £12.40":s.facility==="food"?"Burger £7.50":"Free. The queue isn’t.",c=s.facility==="bar"?"Bar":s.facility==="food"?"Burger stand":"Toilets",l=bs(n),h=s.facility==="bar"&&l>.7?"The barman is giving you a look":"Click to walk over and queue";return{title:a.label,subtitle:c,lines:[r?`Queue: ${r}`:"No queue!",o,h]}}const Bt={elevation:Math.PI/6,yaws:[Math.PI*.75,Math.PI*1.25],zoomLevels:[.6,1,1.6],defaultZoom:1,baseDivisor:30,baseClamp:[14,40],edgePx:14,edgeBottomPx:5,edgeSpeed:640,keySpeed:560,bounds:{minX:-30,maxX:30,minZ:-30,maxZ:27},start:{x:2,z:-7}};function Vd(s){return{right:{x:Math.cos(s),z:-Math.sin(s)},forward:{x:-Math.sin(s),z:-Math.cos(s)}}}function sp(s,e,t){const n=Pt(Math.sqrt(Math.max(1,s*e))/Bt.baseDivisor,Bt.baseClamp[0],Bt.baseClamp[1]),i=Pt(Math.round(t),0,Bt.zoomLevels.length-1);return n*Bt.zoomLevels[i]}function ap(s,e){return Pt(Math.round(s)+Math.sign(e),0,Bt.zoomLevels.length-1)}function Yl(s,e,t,n){const{right:i,forward:a}=Vd(t),r=s/n,o=-e/(n*Math.sin(Bt.elevation));return{x:i.x*r+a.x*o,z:i.z*r+a.z*o}}function rp(s){const e=Bt.bounds;return{x:Pt(s.x,e.minX,e.maxX),z:Pt(s.z,e.minZ,e.maxZ)}}function op(s,e,t,n,i=Bt.edgePx,a=Bt.edgeBottomPx){if(s<0||e<0||s>t||e>n)return{x:0,y:0};const r=s<i?-1:s>t-i?1:0,o=e<i?-1:e>n-a?1:0;return{x:r,y:o}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="186",cp=0,Zl=1,lp=2,oa=1,hp=2,ia=3,Ei=0,tn=1,Gt=2,ci=0,ca=1,$l=2,Ql=3,eh=4,dp=5,ms=100,up=101,fp=102,pp=103,mp=104,gp=200,bp=201,xp=202,_p=203,Wd=204,Xd=205,vp=206,Mp=207,yp=208,Sp=209,wp=210,Tp=211,Ep=212,Ap=213,Rp=214,tc=0,nc=1,ic=2,ma=3,sc=4,ac=5,rc=6,oc=7,Vr=0,Cp=1,Pp=2,Xn=0,qd=1,Kd=2,jd=3,Jd=4,Yd=5,Zd=6,$d=7,th="attached",Lp="detached",Qd=300,Gi=301,Cs=302,io=303,so=304,Wr=306,Hi=1e3,Vn=1001,Lr=1002,Nt=1003,eu=1004,sa=1005,Ht=1006,yr=1007,ri=1008,fn=1009,tu=1010,nu=1011,ga=1012,$c=1013,qn=1014,wn=1015,Kn=1016,Qc=1017,el=1018,ba=1020,iu=35902,su=35899,au=1021,ru=1022,an=1023,hi=1026,Oi=1027,tl=1028,nl=1029,Vi=1030,il=1031,sl=1033,Sr=33776,wr=33777,Tr=33778,Er=33779,cc=35840,lc=35841,hc=35842,dc=35843,uc=36196,fc=37492,pc=37496,mc=37488,gc=37489,Ir=37490,bc=37491,xc=37808,_c=37809,vc=37810,Mc=37811,yc=37812,Sc=37813,wc=37814,Tc=37815,Ec=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Lc=37821,Ic=36492,Dc=36494,Nc=36495,Fc=36283,Uc=36284,Dr=36285,kc=36286,Oc=2200,ou=2201,Ip=2202,xa=2300,_a=2301,ao=2302,nh=2303,xs=2400,_s=2401,Nr=2402,al=2500,Dp=2501,Np=0,cu=1,Bc=2,Fp=3200,Ps=0,Up=1,Si="",It="srgb",mn="srgb-linear",Fr="linear",dt="srgb",ro=7680,kp=519,Op=512,Bp=513,zp=514,rl=515,Gp=516,Hp=517,ol=518,Vp=519,lu=35044,ih="300 es",Wn=2e3,va=2001;function Wp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ma(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qp(){const s=Ma("canvas");return s.style.display="block",s}const sh={};function Ur(...s){const e="THREE."+s.shift();console.log(e,...s)}function hu(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Le(...s){s=hu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=hu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ss(...s){const e=s.join(" ");e in sh||(sh[e]=!0,Le(...s))}function Kp(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const jp={[tc]:nc,[ic]:rc,[sc]:oc,[ma]:ac,[nc]:tc,[rc]:ic,[oc]:sc,[ac]:ma};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ah=1234567;const la=Math.PI/180,Ls=180/Math.PI;function En(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function cl(s,e){return(s%e+e)%e}function Jp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Yp(s,e,t){return s!==e?(t-s)/(e-s):0}function ha(s,e,t){return(1-t)*s+t*e}function Zp(s,e,t,n){return ha(s,e,1-Math.exp(-t*n))}function $p(s,e=1){return e-Math.abs(cl(s,e*2)-e)}function Qp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function em(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nm(s,e){return s+Math.random()*(e-s)}function im(s){return s*(.5-Math.random())}function sm(s){s!==void 0&&(ah=s);let e=ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function am(s){return s*la}function rm(s){return s*Ls}function om(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function cm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hm(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),d=a((e-n)/2),u=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dm={DEG2RAD:la,RAD2DEG:Ls,generateUUID:En,clamp:Ze,euclideanModulo:cl,mapLinear:Jp,inverseLerp:Yp,lerp:ha,damp:Zp,pingpong:$p,smoothstep:Qp,smootherstep:em,randInt:tm,randFloat:nm,randFloatSpread:im,seededRandom:sm,degToRad:am,radToDeg:rm,isPowerOfTwo:om,ceilPowerOfTwo:cm,floorPowerOfTwo:lm,setQuaternionFromProperEuler:hm,normalize:ut,denormalize:Ln},Al=class Al{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;let ue=Al;class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=a[r+0],f=a[r+1],g=a[r+2],v=a[r+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(a/2),u=c(n/2),f=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(a-l)*f,this._z=(r-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(a+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(a-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-i)/f,this._x=(a+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-a*c,this._y=i*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rl=class Rl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-a*i),d=2*(a*n-r*t);return this.x=t+c*l+r*d-o*h,this.y=n+c*h+o*l-a*d,this.z=i+c*d+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rl.prototype.isVector3=!0;let P=Rl;const oo=new P,rh=new nn,Cl=class Cl{constructor(e,t,n,i,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l)}set(e,t,n,i,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],M=i[1],w=i[4],x=i[7],S=i[2],E=i[5],R=i[8];return a[0]=r*v+o*M+c*S,a[3]=r*m+o*w+c*E,a[6]=r*p+o*x+c*R,a[1]=l*v+h*M+d*S,a[4]=l*m+h*w+d*E,a[7]=l*p+h*x+d*R,a[2]=u*v+f*M+g*S,a[5]=u*m+f*w+g*E,a[8]=u*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+i*a*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*r-o*l,u=o*c-h*a,f=l*a-r*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*r)*v,e[3]=u*v,e[4]=(h*t-i*c)*v,e[5]=(i*a-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(co.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(co.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cl.prototype.isMatrix3=!0;let Ge=Cl;const co=new Ge,oh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){const s={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===dt&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===dt&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Fr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mn]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:oh,fromXYZ:ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:oh,fromXYZ:ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const et=um();function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ki;class fm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Ma("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=li(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pm=0;class ll{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(lo(i[r].image)):a.push(lo(i[r]))}else a=lo(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let mm=0;const ho=new P;class Wt extends Ri{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Vn,i=Vn,a=Ht,r=ri,o=an,c=fn,l=Wt.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=En(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Qd;Wt.DEFAULT_ANISOTROPY=1;const Pl=class Pl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,x=(f+1)/2,S=(p+1)/2,E=(h+u)/4,R=(d+v)/4,_=(g+m)/4;return w>x&&w>S?w<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(w),i=E/n,a=R/n):x>S?x<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),n=E/i,a=_/i):S<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(S),n=R/a,i=_/a),this.set(n,i,a,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pl.prototype.isVector4=!0;let pt=Pl;class gm extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},a=new Wt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends gm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class du extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bm extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gr=class Gr{constructor(e,t,n,i,a,r,o,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l,h,d,u,f,g,v,m)}set(e,t,n,i,a,r,o,c,l,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),a=1/ji.setFromMatrixColumn(e,1).length(),r=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=r*h,f=r*d,g=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=r*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u-v*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=v-u*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=o*h,v=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const u=r*c,f=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=r*c,f=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,_m)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),pi.crossVectors(n,cn),pi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),pi.crossVectors(n,cn)),pi.normalize(),Ga.crossVectors(cn,pi),i[0]=pi.x,i[4]=Ga.x,i[8]=cn.x,i[1]=pi.y,i[5]=Ga.y,i[9]=cn.y,i[2]=pi.z,i[6]=Ga.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],w=n[7],x=n[11],S=n[15],E=i[0],R=i[4],_=i[8],A=i[12],C=i[1],L=i[5],I=i[9],O=i[13],D=i[2],B=i[6],K=i[10],V=i[14],te=i[3],Z=i[7],ne=i[11],q=i[15];return a[0]=r*E+o*C+c*D+l*te,a[4]=r*R+o*L+c*B+l*Z,a[8]=r*_+o*I+c*K+l*ne,a[12]=r*A+o*O+c*V+l*q,a[1]=h*E+d*C+u*D+f*te,a[5]=h*R+d*L+u*B+f*Z,a[9]=h*_+d*I+u*K+f*ne,a[13]=h*A+d*O+u*V+f*q,a[2]=g*E+v*C+m*D+p*te,a[6]=g*R+v*L+m*B+p*Z,a[10]=g*_+v*I+m*K+p*ne,a[14]=g*A+v*O+m*V+p*q,a[3]=M*E+w*C+x*D+S*te,a[7]=M*R+w*L+x*B+S*Z,a[11]=M*_+w*I+x*K+S*ne,a[15]=M*A+w*O+x*V+S*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*f-l*u,w=o*f-l*d,x=o*u-c*d,S=r*f-l*h,E=r*u-c*h,R=r*d-o*h;return t*(v*M-m*w+p*x)-n*(g*M-m*S+p*E)+i*(g*w-v*S+p*R)-a*(g*x-v*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(a*h-o*c)+i*(a*l-r*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*o-n*r,w=t*c-i*r,x=t*l-a*r,S=n*c-i*o,E=n*l-a*o,R=i*l-a*c,_=h*v-d*g,A=h*m-u*g,C=h*p-f*g,L=d*m-u*v,I=d*p-f*v,O=u*p-f*m,D=M*O-w*I+x*L+S*C-E*A+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return e[0]=(o*O-c*I+l*L)*B,e[1]=(i*I-n*O-a*L)*B,e[2]=(v*R-m*E+p*S)*B,e[3]=(u*E-d*R-f*S)*B,e[4]=(c*C-r*O-l*A)*B,e[5]=(t*O-i*C+a*A)*B,e[6]=(m*x-g*R-p*w)*B,e[7]=(h*R-u*x+f*w)*B,e[8]=(r*I-o*C+l*_)*B,e[9]=(n*C-t*I-a*_)*B,e[10]=(g*E-v*x+p*M)*B,e[11]=(d*x-h*E-f*M)*B,e[12]=(o*A-r*L-c*_)*B,e[13]=(t*L-n*A+i*_)*B,e[14]=(v*w-g*S-m*M)*B,e[15]=(h*S-d*w+u*M)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,d=o+o,u=a*l,f=a*h,g=a*d,v=r*h,m=r*d,p=o*d,M=c*l,w=c*h,x=c*d,S=n.x,E=n.y,R=n.z;return i[0]=(1-(v+p))*S,i[1]=(f+x)*S,i[2]=(g-w)*S,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(u+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+w)*R,i[9]=(m-M)*R,i[10]=(1-(u+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),c=ji.set(i[8],i[9],i[10]).length();a<0&&(r=-r),Rn.copy(this);const l=1/r,h=1/o,d=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,a,r,o=Wn,c=!1){const l=this.elements,h=2*a/(t-e),d=2*a/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,v;if(c)g=a/(r-a),v=r*a/(r-a);else if(o===Wn)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===va)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=Wn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,v;if(c)g=1/(r-a),v=r/(r-a);else if(o===Wn)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===va)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gr.prototype.isMatrix4=!0;let Ve=Gr;const ji=new P,Rn=new Ve,xm=new P(0,0,0),_m=new P(1,1,1),pi=new P,Ga=new P,cn=new P,lh=new Ve,hh=new nn;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const dh=new P,Ji=new nn,ei=new Ve,Ha=new P,zs=new P,Mm=new P,ym=new nn,uh=new P(1,0,0),fh=new P(0,1,0),ph=new P(0,0,1),mh={type:"added"},Sm={type:"removed"},Yi={type:"childadded",child:null},uo={type:"childremoved",child:null};class yt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new jn,n=new nn,i=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(ph,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(zs,Ha,this.up):ei.lookAt(Ha,zs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(ei),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mh),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mh),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ct extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=cl(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=po(r,a,e+1/3),this.g=po(r,a,e),this.b=po(r,a,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(a){a!==void 0&&parseFloat(a)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return et.workingToColorSpace(Zt.copy(this),e),Math.round(Ze(Zt.r*255,0,255))*65536+Math.round(Ze(Zt.g*255,0,255))*256+Math.round(Ze(Zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,a=Zt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-a)/d+(i<a?6:0);break;case i:c=(a-n)/d+2;break;case a:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=It){et.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Va);const n=ha(mi.h,Va.h,t),i=ha(mi.s,Va.s,t),a=ha(mi.l,Va.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Fe;Fe.NAMES=uu;class Tm extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new P,ti=new P,mo=new P,ni=new P,Zi=new P,$i=new P,gh=new P,go=new P,bo=new P,xo=new P,_o=new pt,vo=new pt,Mo=new pt;class yn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Cn.subVectors(i,t),ti.subVectors(n,t),mo.subVectors(e,t);const r=Cn.dot(Cn),o=Cn.dot(ti),c=Cn.dot(mo),l=ti.dot(ti),h=ti.dot(mo),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(r*h-o*c)*u;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,i,a,r,o,c){return this.getBarycoord(e,t,n,i,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ni.x),c.addScaledVector(r,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,n,i,a,r){return _o.setScalar(0),vo.setScalar(0),Mo.setScalar(0),_o.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(_o,a.x),r.addScaledVector(vo,a.y),r.addScaledVector(Mo,a.z),r}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),ti.subVectors(e,t),Cn.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;Zi.subVectors(i,n),$i.subVectors(a,n),go.subVectors(e,n);const c=Zi.dot(go),l=$i.dot(go);if(c<=0&&l<=0)return t.copy(n);bo.subVectors(e,i);const h=Zi.dot(bo),d=$i.dot(bo);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Zi,r);xo.subVectors(e,a);const f=Zi.dot(xo),g=$i.dot(xo);if(g>=0&&f<=g)return t.copy(a);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector($i,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return gh.subVectors(a,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(gh,o);const p=1/(m+v+u);return r=v*p,o=u*p,t.copy(n).addScaledVector(Zi,r).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Pn):Pn.fromBufferAttribute(a,r),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Xa.subVectors(this.max,Gs),Qi.subVectors(e.a,Gs),es.subVectors(e.b,Gs),ts.subVectors(e.c,Gs),gi.subVectors(es,Qi),bi.subVectors(ts,es),Ii.subVectors(Qi,ts);let t=[0,-gi.z,gi.y,0,-bi.z,bi.y,0,-Ii.z,Ii.y,gi.z,0,-gi.x,bi.z,0,-bi.x,Ii.z,0,-Ii.x,-gi.y,gi.x,0,-bi.y,bi.x,0,-Ii.y,Ii.x,0];return!yo(t,Qi,es,ts,Xa)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,Qi,es,ts,Xa))?!1:(qa.crossVectors(gi,bi),t=[qa.x,qa.y,qa.z],yo(t,Qi,es,ts,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Wa=new pn,Qi=new P,es=new P,ts=new P,gi=new P,bi=new P,Ii=new P,Gs=new P,Xa=new P,qa=new P,Di=new P;function yo(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Di.fromArray(s,a);const o=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ot=new P,Ka=new ue;let Em=0;class Vt extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class dl extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fu extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Am=new pn,Hs=new P,So=new P;class Yn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Am.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(So)),this.expandByPoint(Hs.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rm=0;const xn=new Ve,wo=new yt,ns=new P,ln=new pn,Vs=new pn,Kt=new P;class Et extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?fu:dl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ge().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(ln.min,Vs.min),ln.expandByPoint(Kt),Kt.addVectors(ln.max,Vs.max),ln.expandByPoint(Kt)):(ln.expandByPoint(Vs.min),ln.expandByPoint(Vs.max))}ln.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)Kt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(e,l),Kt.add(ns)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new P,c[_]=new P;const l=new P,h=new P,d=new P,u=new ue,f=new ue,g=new ue,v=new P,m=new P;function p(_,A,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,C),u.fromBufferAttribute(a,_),f.fromBufferAttribute(a,A),g.fromBufferAttribute(a,C),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[_].add(v),o[A].add(v),o[C].add(v),c[_].add(m),c[A].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){const C=M[_],L=C.start,I=C.count;for(let O=L,D=L+I;O<D;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new P,x=new P,S=new P,E=new P;function R(_){S.fromBufferAttribute(i,_),E.copy(S);const A=o[_];w.copy(A),w.sub(S.multiplyScalar(S.dot(A))).normalize(),x.crossVectors(E,A);const L=x.dot(c[_])<0?-1:1;r.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,A=M.length;_<A;++_){const C=M[_],L=C.start,I=C.count;for(let O=L,D=L+I;O<D;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,a=new P,r=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Vt(u,h,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],d=a[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lu,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Qt=new P;class ya{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const To=new P,Cm=new P,Pm=new Ge;class vi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(To),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pm.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Lm=0;class rn extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=En(),this.name="",this.type="Material",this.blending=ca,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=Xd,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new vi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mu extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const Ws=new P,ss=new P,as=new P,rs=new ue,Xs=new ue,gu=new Ve,ja=new P,qs=new P,Ja=new P,bh=new ue,Eo=new ue,xh=new ue;class Im extends yt{constructor(e=new mu){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pu(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new ya(n,3,0,!1)),is.setAttribute("uv",new ya(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),gu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-as.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;Ya(ja.set(-.5,-.5,0),as,r,ss,i,a),Ya(qs.set(.5,-.5,0),as,r,ss,i,a),Ya(Ja.set(.5,.5,0),as,r,ss,i,a),bh.set(0,0),Eo.set(1,0),xh.set(1,1);let o=e.ray.intersectTriangle(ja,qs,Ja,!1,Ws);if(o===null&&(Ya(qs.set(-.5,.5,0),as,r,ss,i,a),Eo.set(0,1),o=e.ray.intersectTriangle(ja,Ja,qs,!1,Ws),o===null))return;const c=e.ray.origin.distanceTo(Ws);c<e.near||c>e.far||t.push({distance:c,point:Ws.clone(),uv:yn.getInterpolation(Ws,ja,qs,Ja,bh,Eo,xh,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ya(s,e,t,n,i,a){rs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Xs.x=a*rs.x-i*rs.y,Xs.y=i*rs.x+a*rs.y):Xs.copy(rs),s.copy(e),s.x+=Xs.x,s.y+=Xs.y,s.applyMatrix4(gu)}const si=new P,Ao=new P,Za=new P,$a=new P;class La{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ao.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),$a.copy(this.origin).sub(Ao);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Za),o=$a.dot(this.direction),c=-$a.dot(Za),l=$a.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*c-o,u=r*o-c,g=a*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*o)+u*(r*d+u+2*c)+l}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*c)+l;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-a,-c),a),f=u*(u+2*c)+l):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+u*(u+2*c)+l);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ao).addScaledVector(Za,u),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,a){const r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-r.x,u=e.y-r.y,f=e.z-r.z,g=t.x-r.x,v=t.y-r.y,m=t.z-r.z,p=n.x-r.x,M=n.y-r.y,w=n.z-r.z,x=Math.abs(c),S=Math.abs(l),E=Math.abs(h);let R,_,A,C,L,I,O,D,B,K,V,te;if(x>=S&&x>=E?(A=c,I=d,B=g,te=p,c>=0?(R=l,_=h,C=u,L=f,O=v,D=m,K=M,V=w):(R=h,_=l,C=f,L=u,O=m,D=v,K=w,V=M)):S>=E?(A=l,I=u,B=v,te=M,l>=0?(R=h,_=c,C=f,L=d,O=m,D=g,K=w,V=p):(R=c,_=h,C=d,L=f,O=g,D=m,K=p,V=w)):(A=h,I=f,B=m,te=w,h>=0?(R=c,_=l,C=d,L=u,O=g,D=v,K=p,V=M):(R=l,_=c,C=u,L=d,O=v,D=g,K=M,V=p)),A===0)return null;const Z=R/A,ne=_/A,q=1/A,_e=C-Z*I,Me=L-ne*I,tt=O-Z*B,G=D-ne*B,oe=K-Z*te,H=V-ne*te,Q=oe*G-H*tt,le=_e*H-Me*oe,Ue=tt*Me-G*_e;if(i){if(Q<0||le<0||Ue<0)return null}else if((Q<0||le<0||Ue<0)&&(Q>0||le>0||Ue>0))return null;const re=Q+le+Ue;if(re===0)return null;const Se=q*(Q*I+le*B+Ue*te);return(re>0?Se<0:Se>0)?null:this.at(Se/re,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _h=new Ve,Ni=new La,Qa=new Yn,vh=new P,er=new P,tr=new P,nr=new P,Ro=new P,ir=new P,Mh=new P,sr=new P;class de extends yt{constructor(e=new Et,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){ir.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],d=a[c];h!==0&&(Ro.fromBufferAttribute(d,e),r?ir.addScaledVector(Ro,h):ir.addScaledVector(Ro.sub(t),h))}t.add(ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(a),Ni.copy(e.ray).recast(e.near),!(Qa.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Qa,vh)===null||Ni.origin.distanceToSquared(vh)>(e.far-e.near)**2))&&(_h.copy(a).invert(),Ni.copy(e.ray).applyMatrix4(_h),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=r[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=w;x<S;x+=3){const E=o.getX(x),R=o.getX(x+1),_=o.getX(x+2);i=ar(this,p,e,n,l,h,d,E,R,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);i=ar(this,r,e,n,l,h,d,M,w,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=r[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=w;x<S;x+=3){const E=x,R=x+1,_=x+2;i=ar(this,p,e,n,l,h,d,E,R,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,w=m+1,x=m+2;i=ar(this,r,e,n,l,h,d,M,w,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Dm(s,e,t,n,i,a,r,o){let c;if(e.side===tn?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,e.side===Ei,o),c===null)return null;sr.copy(o),sr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sr);return l<t.near||l>t.far?null:{distance:l,point:sr.clone(),object:s}}function ar(s,e,t,n,i,a,r,o,c,l){s.getVertexPosition(o,er),s.getVertexPosition(c,tr),s.getVertexPosition(l,nr);const h=Dm(s,e,t,n,er,tr,nr,Mh);if(h){const d=new P;yn.getBarycoord(Mh,er,tr,nr,d),i&&(h.uv=yn.getInterpolatedAttribute(i,o,c,l,d,new ue)),a&&(h.uv1=yn.getInterpolatedAttribute(a,o,c,l,d,new ue)),r&&(h.normal=yn.getInterpolatedAttribute(r,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};yn.getNormal(er,tr,nr,u.normal),h.face=u,h.barycoord=d}return h}const Ks=new pt,yh=new pt,Sh=new pt,Nm=new pt,wh=new Ve,rr=new P,Co=new Yn,Th=new Ve,Po=new La;class ul extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=th,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rr),this.boundingBox.expandByPoint(rr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rr),this.boundingSphere.expandByPoint(rr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),e.ray.intersectsSphere(Co)!==!1&&(Th.copy(i).invert(),Po.copy(e.ray).applyMatrix4(Th),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yh.fromBufferAttribute(i.attributes.skinIndex,e),Sh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ks.copy(t),t.set(0,0,0,0)):(Ks.set(...t,1),t.set(0,0,0)),Ks.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const r=Sh.getComponent(a);if(r!==0){const o=yh.getComponent(a);wh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Nm.copy(Ks).applyMatrix4(wh),r)}}return t.isVector4&&(t.w=Ks.w),t.applyMatrix4(this.bindMatrixInverse)}}class bu extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ia extends Wt{constructor(e=null,t=1,n=1,i,a,r,o,c,l=Nt,h=Nt,d,u){super(null,r,o,c,l,h,i,a,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new Ve,Fm=new Ve;class fl{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:Fm;Eh.multiplyMatrices(o,t[a]),Eh.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ia(t,e,e,an,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const a=e.bones[n];let r=t[a];r===void 0&&(Le("Skeleton: No bone found with UUID:",a),r=new bu),this.bones.push(r),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class kr extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Ve,Ah=new Ve,or=[],Rh=new pn,Um=new Ve,js=new de,Js=new Yn;class xu extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Um)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Rh.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Js.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,os),Ah.multiplyMatrices(n,os),js.matrixWorld=Ah,js.raycast(e,or);for(let r=0,o=or.length;r<o;r++){const c=or[r];c.instanceId=a,c.object=this,t.push(c)}or.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ia(new Float32Array(i*this.count),i,this.count,tl,wn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return a[c]=o,a.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fi=new Yn,km=new ue(.5,.5),cr=new P;class pl{constructor(e=new vi,t=new vi,n=new vi,i=new vi,a=new vi,r=new vi){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],h=a[4],d=a[5],u=a[6],f=a[7],g=a[8],v=a[9],m=a[10],p=a[11],M=a[12],w=a[13],x=a[14],S=a[15];if(i[0].setComponents(l-r,f-h,p-g,S-M).normalize(),i[1].setComponents(l+r,f+h,p+g,S+M).normalize(),i[2].setComponents(l+o,f+d,p+v,S+w).normalize(),i[3].setComponents(l-o,f-d,p-v,S-w).normalize(),n)i[4].setComponents(c,u,m,x).normalize(),i[5].setComponents(l-c,f-u,p-m,S-x).normalize();else if(i[4].setComponents(l-c,f-u,p-m,S-x).normalize(),t===Wn)i[5].setComponents(l+c,f+u,p+m,S+x).normalize();else if(t===va)i[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=km.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cr.x=i.normal.x>0?e.max.x:e.min.x,cr.y=i.normal.y>0?e.max.y:e.min.y,cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _u extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Or=new P,Br=new P,Ch=new Ve,Ys=new La,lr=new Yn,Lo=new P,Ph=new P;class ml extends yt{constructor(e=new Et,t=new _u){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Or.fromBufferAttribute(t,i-1),Br.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Or.distanceTo(Br);e.setAttribute("lineDistance",new nt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=a,e.ray.intersectsSphere(lr)===!1)return;Ch.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(Ch);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),M=h.getX(v+1),w=hr(this,e,Ys,c,p,M,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=hr(this,e,Ys,c,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=l){const p=hr(this,e,Ys,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=hr(this,e,Ys,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function hr(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if(Or.fromBufferAttribute(o,i),Br.fromBufferAttribute(o,a),t.distanceSqToSegment(Or,Br,Lo,Ph)>n)return;Lo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Lo);if(!(l<e.near||l>e.far))return{distance:l,point:Ph.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const Lh=new P,Ih=new P;class Om extends ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)Lh.fromBufferAttribute(t,i),Ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lh.distanceTo(Ih);e.setAttribute("lineDistance",new nt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bm extends ml{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vu extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new Ve,zc=new La,dr=new Yn,ur=new P;class zm extends yt{constructor(e=new Et,t=new vu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=a,e.ray.intersectsSphere(dr)===!1)return;Dh.copy(i).invert(),zc.copy(e.ray).applyMatrix4(Dh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);ur.fromBufferAttribute(d,m),Nh(ur,m,c,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,v=f;g<v;g++)ur.fromBufferAttribute(d,g),Nh(ur,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Nh(s,e,t,n,i,a,r){const o=zc.distanceSqToPoint(s);if(o<t){const c=new P;zc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Mu extends Wt{constructor(e=[],t=Gi,n,i,a,r,o,c,l,h){super(e,t,n,i,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Da extends Wt{constructor(e,t,n,i,a,r,o,c,l){super(e,t,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sa extends Wt{constructor(e,t,n=qn,i,a,r,o=Nt,c=Nt,l,h=hi,d=1){if(h!==hi&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Gm extends Sa{constructor(e,t=qn,n=Gi,i,a,r=Nt,o=Nt,c,l=hi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,a,r,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yu extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sn extends Et{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(v,m,p,M,w,x,S,E,R,_,A){const C=x/R,L=S/_,I=x/2,O=S/2,D=E/2,B=R+1,K=_+1;let V=0,te=0;const Z=new P;for(let ne=0;ne<K;ne++){const q=ne*L-O;for(let _e=0;_e<B;_e++){const Me=_e*C-I;Z[v]=Me*M,Z[m]=q*w,Z[p]=D,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(_e/R),d.push(1-ne/_),V+=1}}for(let ne=0;ne<_;ne++)for(let q=0;q<R;q++){const _e=u+q+B*ne,Me=u+q+B*(ne+1),tt=u+(q+1)+B*(ne+1),G=u+(q+1)+B*ne;c.push(_e,Me,G),c.push(Me,tt,G),te+=6}o.addGroup(f,te,A),f+=te,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gl extends Et{constructor(e=1,t=1,n=4,i=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),a=Math.max(1,Math.floor(a));const r=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+a,v=i+1,m=new P,p=new P;for(let M=0;M<=g;M++){let w=0,x=0,S=0,E=0;if(M<=n){const A=M/n,C=A*Math.PI/2;x=-h-e*Math.cos(C),S=e*Math.sin(C),E=-e*Math.cos(C),w=A*d}else if(M<=n+a){const A=(M-n)/a;x=-h+A*t,S=e,E=0,w=d+A*u}else{const A=(M-n-a)/n,C=A*Math.PI/2;x=h+e*Math.sin(C),S=e*Math.cos(C),E=e*Math.sin(C),w=d+u+A*d}const R=Math.max(0,Math.min(1,w/f));let _=0;M===0?_=.5/i:M===g&&(_=-.5/i);for(let A=0;A<=i;A++){const C=A/i,L=C*Math.PI*2,I=Math.sin(L),O=Math.cos(L);p.x=-S*O,p.y=x,p.z=S*I,o.push(p.x,p.y,p.z),m.set(-S*O,E,S*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+_,R)}if(M>0){const A=(M-1)*v;for(let C=0;C<i;C++){const L=A+C,I=A+C+1,O=M*v+C,D=M*v+C+1;r.push(L,I,O),r.push(I,D,O)}}}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Na extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new P,h=new ue;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rt extends Et{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function M(){const x=new P,S=new P;let E=0;const R=(t-e)/n;for(let _=0;_<=a;_++){const A=[],C=_/a,L=C*(t-e)+e;for(let I=0;I<=i;I++){const O=I/i,D=O*c+o,B=Math.sin(D),K=Math.cos(D);S.x=L*B,S.y=-C*n+m,S.z=L*K,d.push(S.x,S.y,S.z),x.set(B,R,K).normalize(),u.push(x.x,x.y,x.z),f.push(O,1-C),A.push(g++)}v.push(A)}for(let _=0;_<i;_++)for(let A=0;A<a;A++){const C=v[A][_],L=v[A+1][_],I=v[A+1][_+1],O=v[A][_+1];(e>0||A!==0)&&(h.push(C,L,O),E+=3),(t>0||A!==a-1)&&(h.push(L,I,O),E+=3)}l.addGroup(p,E,0),p+=E}function w(x){const S=g,E=new ue,R=new P;let _=0;const A=x===!0?e:t,C=x===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const L=g;for(let I=0;I<=i;I++){const D=I/i*c+o,B=Math.cos(D),K=Math.sin(D);R.x=A*K,R.y=m*C,R.z=A*B,d.push(R.x,R.y,R.z),u.push(0,C,0),E.x=B*.5+.5,E.y=K*.5*C+.5,f.push(E.x,E.y),g++}for(let I=0;I<i;I++){const O=S+I,D=L+I;x===!0?h.push(D,D+1,O):h.push(D+1,D,O),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bi extends Rt{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Bi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bl extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],r=[];o(i),l(n),h(),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(a.slice(),3)),this.setAttribute("uv",new nt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new P,x=new P,S=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],x),f(t[E+2],S),c(w,x,S,M)}function c(M,w,x,S){const E=S+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const A=M.clone().lerp(x,_/E),C=w.clone().lerp(x,_/E),L=E-_;for(let I=0;I<=L;I++)I===0&&_===E?R[_][I]=A:R[_][I]=A.clone().lerp(C,I/L)}for(let _=0;_<E;_++)for(let A=0;A<2*(E-_)-1;A++){const C=Math.floor(A/2);A%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function l(M){const w=new P;for(let x=0;x<a.length;x+=3)w.x=a[x+0],w.y=a[x+1],w.z=a[x+2],w.normalize().multiplyScalar(M),a[x+0]=w.x,a[x+1]=w.y,a[x+2]=w.z}function h(){const M=new P;for(let w=0;w<a.length;w+=3){M.x=a[w+0],M.y=a[w+1],M.z=a[w+2];const x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;r.push(x,1-S)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const w=r[M+0],x=r[M+2],S=r[M+4],E=Math.max(w,x,S),R=Math.min(w,x,S);E>.9&&R<.1&&(w<.2&&(r[M+0]+=1),x<.2&&(r[M+2]+=1),S<.2&&(r[M+4]+=1))}}function u(M){a.push(M.x,M.y,M.z)}function f(M,w){const x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){const M=new P,w=new P,x=new P,S=new P,E=new ue,R=new ue,_=new ue;for(let A=0,C=0;A<a.length;A+=9,C+=6){M.set(a[A+0],a[A+1],a[A+2]),w.set(a[A+3],a[A+4],a[A+5]),x.set(a[A+6],a[A+7],a[A+8]),E.set(r[C+0],r[C+1]),R.set(r[C+2],r[C+3]),_.set(r[C+4],r[C+5]),S.copy(M).add(w).add(x).divideScalar(3);const L=m(S);v(E,C+0,M,L),v(R,C+2,w,L),v(_,C+4,x,L)}}function v(M,w,x,S){S<0&&M.x===1&&(r[w]=M.x-1),x.x===0&&x.z===0&&(r[w]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.vertices,e.indices,e.radius,e.detail)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(a-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),c=t||(r.isVector2?new ue:new P);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],a=[],r=[],o=new P,c=new Ve;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(i[f],a[f])}if(t===!0){let f=Math.acos(Ze(a[0].dot(a[e]),-1,1));f/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xl extends Zn{constructor(e=0,t=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hm extends xl{constructor(e,t,n,i,a,r){super(e,t,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function _l(){let s=0,e=0,t=0,n=0;function i(a,r,o,c){s=a,e=o,t=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){i(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,d){let u=(r-a)/l-(o-a)/(l+h)+(o-r)/h,f=(o-r)/h-(c-r)/(h+d)+(c-o)/d;u*=h,f*=h,i(r,o,u,f)},calc:function(a){const r=a*a,o=r*a;return s+e*a+t*r+n*o}}}const Fh=new P,Uh=new P,Io=new _l,Do=new _l,No=new _l;class Vm extends Zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,a=i.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%a]:(Uh.subVectors(i[0],i[1]).add(i[0]),l=Uh);const d=i[o%a],u=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(Fh.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=Fh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Io.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),Do.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),No.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Do.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),No.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Io.calc(c),Do.calc(c),No.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kh(s,e,t,n,i){const a=(n-e)*.5,r=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+a+r)*c+(-3*t+3*n-2*a-r)*o+a*s+t}function Wm(s,e){const t=1-s;return t*t*e}function Xm(s,e){return 2*(1-s)*s*e}function qm(s,e){return s*s*e}function da(s,e,t,n){return Wm(s,e)+Xm(s,t)+qm(s,n)}function Km(s,e){const t=1-s;return t*t*t*e}function jm(s,e){const t=1-s;return 3*t*t*s*e}function Jm(s,e){return 3*(1-s)*s*s*e}function Ym(s,e){return s*s*s*e}function ua(s,e,t,n,i){return Km(s,e)+jm(s,t)+Jm(s,n)+Ym(s,i)}class Su extends Zn{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ua(e,i.x,a.x,r.x,o.x),ua(e,i.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zm extends Zn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ua(e,i.x,a.x,r.x,o.x),ua(e,i.y,a.y,r.y,o.y),ua(e,i.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wu extends Zn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends Zn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tu extends Zn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(da(e,i.x,a.x,r.x),da(e,i.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qm extends Zn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(da(e,i.x,a.x,r.x),da(e,i.y,a.y,r.y),da(e,i.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,a=(i.length-1)*e,r=Math.floor(a),o=a-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(kh(o,c.x,l.x,h.x,d.x),kh(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var Oh=Object.freeze({__proto__:null,ArcCurve:Hm,CatmullRomCurve3:Vm,CubicBezierCurve:Su,CubicBezierCurve3:Zm,EllipseCurve:xl,LineCurve:wu,LineCurve3:$m,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:Qm,SplineCurve:Eu});class eg extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Oh[i.type]().fromJSON(i))}return this}}class Bh extends eg{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wu(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const a=new Tu(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,a,r){const o=new Su(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Eu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,a,r),this}absarc(e,t,n,i,a,r){return this.absellipse(e,t,n,n,i,a,r),this}ellipse(e,t,n,i,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,a,r,o,c),this}absellipse(e,t,n,i,a,r,o,c){const l=new xl(e,t,n,i,a,r,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vl extends Bh{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bh().fromJSON(i))}return this}}function tg(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let a=Au(s,0,i,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l;if(n&&(a=rg(s,e,a,t)),s.length>80*t){o=s[0],c=s[1];let h=o,d=c;for(let u=t;u<i;u+=t){const f=s[u],g=s[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return wa(a,r,t,o,c,l,0),r}function Au(s,e,t,n,i){let a;if(i===bg(s,e,t,n)>0)for(let r=e;r<t;r+=n)a=zh(r/n|0,s[r],s[r+1],a);else for(let r=t-n;r>=e;r-=n)a=zh(r/n|0,s[r],s[r+1],a);return a&&Is(a,a.next)&&(Ea(a),a=a.next),a}function Wi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Is(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wa(s,e,t,n,i,a,r){if(!s)return;!r&&a&&dg(s,n,i,a);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(a?ig(s,n,i,a):ng(s)){e.push(c.i,s.i,l.i),Ea(s),s=l.next,o=l.next;continue}if(s=l,s===o){r?r===1?(s=sg(Wi(s),e),wa(s,e,t,n,i,a,2)):r===2&&ag(s,e,t,n,i,a):wa(Wi(s),e,t,n,i,a,1);break}}}function ng(s){const e=s.prev,t=s,n=s.next;if(Dt(e,t,n)>=0)return!1;const i=e.x,a=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,a,r),d=Math.min(o,c,l),u=Math.max(i,a,r),f=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&aa(i,o,a,c,r,l,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ig(s,e,t,n){const i=s.prev,a=s,r=s.next;if(Dt(i,a,r)>=0)return!1;const o=i.x,c=a.x,l=r.x,h=i.y,d=a.y,u=r.y,f=Math.min(o,c,l),g=Math.min(h,d,u),v=Math.max(o,c,l),m=Math.max(h,d,u),p=Gc(f,g,e,t,n),M=Gc(v,m,e,t,n);let w=s.prevZ,x=s.nextZ;for(;w&&w.z>=p&&x&&x.z<=M;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==i&&w!==r&&aa(o,h,c,d,l,u,w.x,w.y)&&Dt(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&aa(o,h,c,d,l,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==i&&w!==r&&aa(o,h,c,d,l,u,w.x,w.y)&&Dt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&aa(o,h,c,d,l,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sg(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Is(n,i)&&Cu(n,t,t.next,i)&&Ta(n,i)&&Ta(i,n)&&(e.push(n.i,t.i,i.i),Ea(t),Ea(t.next),t=s=i),t=t.next}while(t!==s);return Wi(t)}function ag(s,e,t,n,i,a){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&pg(r,o)){let c=Pu(r,o);r=Wi(r,r.next),c=Wi(c,c.next),wa(r,e,t,n,i,a,0),wa(c,e,t,n,i,a,0);return}o=o.next}r=r.next}while(r!==s)}function rg(s,e,t,n){const i=[];for(let a=0,r=e.length;a<r;a++){const o=e[a]*n,c=a<r-1?e[a+1]*n:s.length,l=Au(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(fg(l))}i.sort(og);for(let a=0;a<i.length;a++)t=cg(i[a],t);return t}function og(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function cg(s,e){const t=lg(s,e);if(!t)return e;const n=Pu(t,s);return Wi(n,n.next),Wi(t,t.next)}function lg(s,e){let t=e;const n=s.x,i=s.y;let a=-1/0,r;if(Is(s,t))return t;do{if(Is(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>a&&(a=d,r=t.x<t.next.x?t:t.next,d===n))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0;t=r;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ru(i<l?n:a,i,c,l,i<l?a:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Ta(t,s)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&hg(r,t)))&&(r=t,h=d)}t=t.next}while(t!==o);return r}function hg(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function dg(s,e,t,n){let i=s;do i.z===0&&(i.z=Gc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ug(i)}function ug(s){let e,t=1;do{let n=s,i;s=null;let a=null;for(e=0;n;){e++;let r=n,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;n=r}a.nextZ=null,t*=2}while(e>1);return s}function Gc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function fg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ru(s,e,t,n,i,a,r,o){return(i-r)*(e-o)>=(s-r)*(a-o)&&(s-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(i-r)*(n-o)}function aa(s,e,t,n,i,a,r,o){return!(s===r&&e===o)&&Ru(s,e,t,n,i,a,r,o)}function pg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!mg(s,e)&&(Ta(s,e)&&Ta(e,s)&&gg(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||Is(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Is(s,e){return s.x===e.x&&s.y===e.y}function Cu(s,e,t,n){const i=pr(Dt(s,e,t)),a=pr(Dt(s,e,n)),r=pr(Dt(t,n,s)),o=pr(Dt(t,n,e));return!!(i!==a&&r!==o||i===0&&fr(s,t,e)||a===0&&fr(s,n,e)||r===0&&fr(t,s,n)||o===0&&fr(t,e,n))}function fr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function pr(s){return s>0?1:s<0?-1:0}function mg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Cu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ta(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function gg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,a=(s.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&i<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Pu(s,e){const t=Hc(s.i,s.x,s.y),n=Hc(e.i,e.x,e.y),i=s.next,a=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function zh(s,e,t,n){const i=Hc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ea(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bg(s,e,t,n){let i=0;for(let a=e,r=t-n;a<t;a+=n)i+=(s[r]-s[a])*(s[a+1]+s[r+1]),r=a;return i}class xg{static triangulate(e,t,n=2){return tg(e,t,n)}}class fa{static area(e){const t=e.length;let n=0;for(let i=t-1,a=0;a<t;i=a++)n+=e[i].x*e[a].y-e[a].x*e[i].y;return n*.5}static isClockWise(e){return fa.area(e)<0}static triangulateShape(e,t){const n=[],i=[],a=[];Gh(e),Hh(n,e);let r=e.length;t.forEach(Gh);for(let c=0;c<t.length;c++)i.push(r),r+=t[c].length,Hh(n,t[c]);const o=xg.triangulate(n,i);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Gh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Hh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fa extends bl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fa(e.radius,e.detail)}}class Mn extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*u-r;for(let w=0;w<l;w++){const x=w*d-a;g.push(x,-M,0),v.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const w=M+l*p,x=M+l*(p+1),S=M+1+l*(p+1),E=M+1+l*p;f.push(w,x,E),f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class zi extends Et{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new P,g=new ue;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const M=p+m,w=M,x=M+n+1,S=M+n+2,E=M+1;o.push(w,x,E),o.push(x,S,E)}}this.setIndex(o),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Aa extends Et{constructor(e=new vl([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],a=[],r=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(r,2));function l(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const g=u.holes;fa.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];fa.isClockWise(M)===!0&&(g[m]=M.reverse())}const v=fa.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];i.push(M.x,M.y,0),a.push(0,0,1),r.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){const M=v[m],w=M[0]+d,x=M[1]+d,S=M[2]+d;n.push(w,x,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _g(t,e)}static fromJSON(e,t){const n=[];for(let i=0,a=e.shapes.length;i<a;i++){const r=t[e.shapes[i]];n.push(r)}return new Aa(n,e.curveSegments)}}function _g(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ai extends Et{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],d=new P,u=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],w=p/n,x=r+w*o,S=e*Math.cos(x),E=Math.sqrt(e*e-S*S);let R=0;p===0&&r===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const A=_/t,C=i+A*a;d.x=-E*Math.cos(C),d.y=S,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+R,1-w),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const w=h[p][M+1],x=h[p][M],S=h[p+1][M],E=h[p+1][M+1];(p!==0||r>0)&&f.push(w,x,E),(p!==n-1||c<Math.PI)&&f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends Et{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],u=new P,f=new P,g=new P;for(let v=0;v<=n;v++){const m=r+v/n*o;for(let p=0;p<=i;p++){const M=p/i*a;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const p=(i+1)*v+m-1,M=(i+1)*(v-1)+m-1,w=(i+1)*(v-1)+m,x=(i+1)*v+m;c.push(p,M,x),c.push(M,w,x)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ds(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Vh(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Vh(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();e[t][n]=a}else e[t][n]=i.slice();else e[t][n]=i}}return e}function en(s){const e={};for(let t=0;t<s.length;t++){const n=Ds(s[t]);for(const i in n)e[i]=n[i]}return e}function Vh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Lu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Mg={clone:Ds,merge:en};var yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(i.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wg extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yl extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends yl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tg extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ns extends rn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Vc extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eg extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ag extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ar(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Rg(s){function e(i,a){return s[i]-s[a]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wh(s,e,t){const n=s.length,i=new s.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)i[r++]=s[o+c]}return i}function Cg(s,e,t,n){let i=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[i++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push(...r)),a=s[i++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=s[i++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=s[i++];while(a!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=a,a=t[--n-1],e>=a)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let r=0;r!==i;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Pg extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,r=e+1,o=i[a],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case _s:a=e,o=2*t-n;break;case Nr:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _s:r=e,c=2*n-t;break;case Nr:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let S=0;S!==o;++S)a[S]=p*r[h+S]+M*r[l+S]+w*r[c+S]+x*r[d+S];return a}}class Iu extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)a[u]=r[l+u]*d+r[c+u]*h;return a}}class Lg extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ig extends Fs{interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const g=(n-t)/(i-t),v=1-g;for(let m=0;m!==o;++m)a[m]=r[l+m]*v+r[c+m]*g;return a}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const v=r[l+g],m=r[c+g],p=f*u+g*2,M=d[p],w=d[p+1],x=e*u+g*2,S=h[x],E=h[x+1],R=Ng(n,t,M,S,i);a[g]=Du(R,v,w,E,m)}return a}}function Du(s,e,t,n,i){const a=1-s;return a*a*a*e+3*a*a*s*t+3*a*s*s*n+s*s*s*i}function Dg(s,e,t,n,i){const a=1-s;return 3*a*a*(t-e)+6*a*s*(n-t)+3*s*s*(i-n)}function Ng(s,e,t,n,i){let a=(s-e)/(i-e);for(let r=0;r<8;r++){const o=Du(a,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const c=Dg(a,e,t,n,i);if(Math.abs(c)<1e-10)break;a=Math.max(0,Math.min(1,a-o/c))}return a}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mi(t,this.TimeBufferType),this.values=Mi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mi(e.times,Array),values:Mi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ar(e.settings)&&(n.settings={inTangents:Mi(e.settings.inTangents,Array),outTangents:Mi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ig(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break;case nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ar(this.settings)&&(Xh(this.settings.inTangents,e),Xh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let a=0,r=i-1;for(;a!==i&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==i){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){ze("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&Xp(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ao,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const v=t[d+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const d=o*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ar(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Xh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=_a;class Us extends Dn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=xa;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Nu extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Nu.prototype.ValueTypeName="color";class Ra extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Ra.prototype.ValueTypeName="number";class Fg extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(a,0,r,l-o,r,l,c);return a}}class Ca extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Fg(this.times,this.values,this.getValueSize(),e)}}Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Dn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=xa;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}zr.prototype.ValueTypeName="vector";class Wc{constructor(e="",t=-1,n=[],i=al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(kg(n[r]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=n.length;a!==r;++a)t.push(Dn.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Rg(c);c=Wh(c,1,h),l=Wh(l,1,h),!i&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new Ra(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ug(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ra;case"vector":case"vector2":case"vector3":case"vector4":return zr;case"color":return Nu;case"quaternion":return Ca;case"bool":case"boolean":return Us;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ug(s.type);if(s.times===void 0){const n=[],i=[];Cg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ar(s.settings)&&(t.settings={inTangents:Mi(s.settings.inTangents,Float32Array),outTangents:Mi(s.settings.outTangents,Float32Array)}),t}const oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(qh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!qh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function qh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Og{constructor(e,t,n){const i=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bg=new Og;class Os{constructor(e){this.manager=e!==void 0?e:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class zg extends Error{constructor(e,t){super(e),this.response=t}}class Fu extends Os{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=oi.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ai[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:w,value:x})=>{if(w)p.close();else{v+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,R=h.length;E<R;E++){const _=h[E];_.onProgress&&_.onProgress(S)}p.enqueue(x),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new zg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{oi.add(`file:${e}`,l);const h=ai[e];delete ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cs=new WeakMap;class Gg extends Os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=oi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let d=cs.get(r);d===void 0&&(d=[],cs.set(r,d)),d.push({onLoad:t,onError:i})}return r}const o=Ma("img");function c(){h(),t&&t(this);const d=cs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}cs.delete(this),a.manager.itemEnd(e)}function l(d){h(),i&&i(d),oi.remove(`image:${e}`);const u=cs.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}cs.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Hg extends Os{constructor(e){super(e)}load(e,t,n,i){const a=new Wt,r=new Gg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Xr extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vg extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Fo=new Ve,Kh=new P,jh=new P;class Sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fo,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,c=i?i.x/a.x:0,l=i?i.y/a.y:0;e.coordinateSystem===va||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mr=new P,gr=new nn,Un=new P;class Uu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mr,gr,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mr,gr,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mr,gr,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mr,gr,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new P,Jh=new ue,Yh=new ue;class sn extends Uu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,Yh),t.subVectors(Yh,Jh)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wg extends Sl{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Xg extends Xr{constructor(e,t,n=0,i=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Wg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qg extends Sl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kg extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ua extends Uu{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jg extends Sl{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ku extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new jg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Uo=new WeakMap;class Jg extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=oi.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{Uo.has(r)===!0?(i&&i(Uo.get(r)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Uo.set(c,l),oi.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,c),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=-90,hs=1;class Yg extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(ls,hs,e,t);i.layers=this.layers,this.add(i);const a=new sn(ls,hs,e,t);a.layers=this.layers,this.add(a);const r=new sn(ls,hs,e,t);r.layers=this.layers,this.add(r);const o=new sn(ls,hs,e,t);o.layers=this.layers,this.add(o);const c=new sn(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new sn(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $g{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,a,r;switch(t){case"quaternion":i=this._slerp,a=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,a=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,a=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=a,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,a=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[a+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,a,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,a=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-a,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let a=n,r=i;a!==r;++a)t[a]=t[i+a%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,a){if(i>=.5)for(let r=0;r!==a;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,a){const r=this._workIndex*a;nn.multiplyQuaternionsFlat(e,r,e,t,e,n),nn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,a){const r=1-i;for(let o=0;o!==a;++o){const c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,a){for(let r=0;r!==a;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const wl="\\[\\]\\.:\\/",Qg=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",e0="[^"+wl.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Tl),n0=/(WCOD+)?/.source.replace("WCOD",e0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),s0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),a0=new RegExp("^"+t0+n0+i0+s0+"$"),r0=["material","materials","bones","map"];class o0{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(e){const t=a0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);r0.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=o0;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class c0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const a=t.tracks,r=a.length,o=new Array(r),c={endingStart:xs,endingEnd:xs};for(let l=0;l!==r;++l){const h=a[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ou,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,a=e._clip.duration,r=a/i,o=i/a;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,a=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=a,c[1]=a+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const c=(e-a)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Dp:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case al:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,a=this._loopCount;const r=n===Ip;if(e===0)return a===-1?i:r&&(a&1)===1?t-i:i;if(n===Oc){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,a+=Math.abs(o);const c=this.repetitions-a;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=a,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=a,this.time=i;if(r&&(a&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:xs:i.endingStart=Nr,t?i.endingEnd=this.zeroSlopeAtEnd?_s:xs:i.endingEnd=Nr)}_scheduleFading(e,t,n){const i=this._mixer,a=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,c=r.sampleValues;return o[0]=a,c[0]=t,o[1]=a+e,c[1]=n,this}}const l0=new Float32Array(1);class Ou extends Ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,a=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==a;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[d]=g;else{if(g=r[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new $g(ht.create(n,f,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),r[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,a=this._actionsByClip[i];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,a=this._actionsByClip;let r=a[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,r=this._actionsByClip,o=r[a],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete r[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,a=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,a=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[a],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Iu(new Float32Array(2),new Float32Array(2),1,l0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,a=t[i];e.__cacheIndex=i,t[i]=e,a.__cacheIndex=n,t[n]=a}clipAction(e,t,n){const i=t||this._root,a=i.uuid;let r=typeof e=="string"?Wc.findByName(i,e):e;const o=r!==null?r.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=al),c!==void 0){const d=c.actionByRoot[a];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new c0(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,a),h}existingAction(e,t){const n=t||this._root,i=n.uuid,a=typeof e=="string"?Wc.findByName(n,e):e,r=a?a.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,a=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,a,r);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,a=i[n];if(a!==void 0){const r=a.knownActions;for(let o=0,c=r.length;o!==c;++o){const l=r[o];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,a=i[t];if(a!==void 0)for(const r in a){const o=a[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Zh=new Ve;class h0{constructor(e,t,n=0,i=1/0){this.ray=new La(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(e,t=!0,n=[]){return Xc(e,this,n,t),n.sort($h),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)Xc(e[i],this,n,t);return n.sort($h),n}}function $h(s,e){return s.distance-e.distance}function Xc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)Xc(a[r],e,t,!0)}}const Ll=class Ll{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=i,this}};Ll.prototype.isMatrix2=!0;let Qh=Ll;function ed(s,e,t,n){const i=d0(n);switch(t){case au:return s*e;case tl:return s*e/i.components*i.byteLength;case nl:return s*e/i.components*i.byteLength;case Vi:return s*e*2/i.components*i.byteLength;case il:return s*e*2/i.components*i.byteLength;case ru:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case sl:return s*e*4/i.components*i.byteLength;case Sr:case wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:case dc:return Math.max(s,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(s,8)*Math.max(e,8)/2;case uc:case fc:case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pc:case Ir:case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Dc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fc:case Uc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dr:case kc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(s){switch(s){case fn:case tu:return{byteLength:1,components:1};case ga:case nu:case Kn:return{byteLength:2,components:1};case Qc:case el:return{byteLength:2,components:4};case qn:case $c:case wn:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bu(){let s=null,e=!1,t=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),t(a,r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function u0(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ob=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,db=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:b0,alphatest_pars_fragment:x0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:M0,batching_vertex:y0,begin_vertex:S0,beginnormal_vertex:w0,bsdfs:T0,iridescence_fragment:E0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:I0,color_pars_fragment:D0,color_pars_vertex:N0,color_vertex:F0,common:U0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:G0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:K0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:ab,envmap_vertex:J0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:$0,fog_pars_fragment:Q0,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:sb,lights_toon_fragment:rb,lights_toon_pars_fragment:ob,lights_phong_fragment:cb,lights_phong_pars_fragment:lb,lights_physical_fragment:hb,lights_physical_pars_fragment:db,lights_fragment_begin:ub,lights_fragment_maps:fb,lights_fragment_end:pb,lightprobes_pars_fragment:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:_b,map_fragment:vb,map_pars_fragment:Mb,map_particle_fragment:yb,map_particle_pars_fragment:Sb,metalnessmap_fragment:wb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Eb,morphcolor_vertex:Ab,morphnormal_vertex:Rb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Pb,normal_fragment_begin:Lb,normal_fragment_maps:Ib,normal_pars_fragment:Db,normal_pars_vertex:Nb,normal_vertex:Fb,normalmap_pars_fragment:Ub,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:zb,opaque_fragment:Gb,packing:Hb,premultiplied_alpha_fragment:Vb,project_vertex:Wb,dithering_fragment:Xb,dithering_pars_fragment:qb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:Yb,shadowmap_vertex:Zb,shadowmask_pars_fragment:$b,skinbase_vertex:Qb,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:ax,tonemapping_pars_fragment:rx,transmission_fragment:ox,transmission_pars_fragment:cx,uv_pars_fragment:lx,uv_pars_vertex:hx,uv_vertex:dx,worldpos_vertex:ux,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:bx,cube_frag:xx,depth_vert:_x,depth_frag:vx,distance_vert:Mx,distance_frag:yx,equirect_vert:Sx,equirect_frag:wx,linedashed_vert:Tx,linedashed_frag:Ex,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Ix,meshnormal_vert:Dx,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:Ux,meshphysical_vert:kx,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:zx,points_vert:Gx,points_frag:Hx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},be={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Hn={basic:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:en([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:en([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:en([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:en([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:en([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:en([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:en([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:en([be.lights,be.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Hn.physical={uniforms:en([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const br={r:0,b:0,g:0},Kx=new Ve,zu=new Ge;zu.set(-1,0,0,0,1,0,0,0,1);function jx(s,e,t,n,i,a){const r=new Fe(0);let o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const x=M.backgroundBlurriness>0;w=e.get(w,x)}return w}function g(M){let w=!1;const x=f(M);x===null?m(r,o):x&&x.isColor&&(m(x,1),w=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,w){const x=f(w);x&&(x.isCubeTexture||x.mapping===Wr)?(l===void 0&&(l=new de(new Sn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ds(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zu),l.material.toneMapped=et.getTransfer(x.colorSpace)!==dt,(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Mn(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ds(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(br,Lu(s)),t.buffers.color.setClear(br.r,br.g,br.b,w,a)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(M,w=1){r.set(M),o=w,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(r,o)},render:g,addToRenderList:v,dispose:p}}function Jx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(L,I,O,D,B){let K=!1;const V=d(L,D,O,I);a!==V&&(a=V,l(a.object)),K=f(L,D,O,B),K&&g(L,D,O,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,x(L,I,O,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,I,O,D){const B=D.wireframe===!0;let K=n[I.id];K===void 0&&(K={},n[I.id]=K);const V=L.isInstancedMesh===!0?L.id:0;let te=K[V];te===void 0&&(te={},K[V]=te);let Z=te[O.id];Z===void 0&&(Z={},te[O.id]=Z);let ne=Z[B];return ne===void 0&&(ne=u(c()),Z[B]=ne),ne}function u(L){const I=[],O=[],D=[];for(let B=0;B<t;B++)I[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,I,O,D){const B=a.attributes,K=I.attributes;let V=0;const te=O.getAttributes();for(const Z in te)if(te[Z].location>=0){const q=B[Z];let _e=K[Z];if(_e===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),q===void 0||q.attribute!==_e||_e&&q.data!==_e.data)return!0;V++}return a.attributesNum!==V||a.index!==D}function g(L,I,O,D){const B={},K=I.attributes;let V=0;const te=O.getAttributes();for(const Z in te)if(te[Z].location>=0){let q=K[Z];q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));const _e={};_e.attribute=q,q&&q.data&&(_e.data=q.data),B[Z]=_e,V++}a.attributes=B,a.attributesNum=V,a.index=D}function v(){const L=a.newAttributes;for(let I=0,O=L.length;I<O;I++)L[I]=0}function m(L){p(L,0)}function p(L,I){const O=a.newAttributes,D=a.enabledAttributes,B=a.attributeDivisors;O[L]=1,D[L]===0&&(s.enableVertexAttribArray(L),D[L]=1),B[L]!==I&&(s.vertexAttribDivisor(L,I),B[L]=I)}function M(){const L=a.newAttributes,I=a.enabledAttributes;for(let O=0,D=I.length;O<D;O++)I[O]!==L[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function w(L,I,O,D,B,K,V){V===!0?s.vertexAttribIPointer(L,I,O,B,K):s.vertexAttribPointer(L,I,O,D,B,K)}function x(L,I,O,D){v();const B=D.attributes,K=O.getAttributes(),V=I.defaultAttributeValues;for(const te in K){const Z=K[te];if(Z.location>=0){let ne=B[te];if(ne===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const q=ne.normalized,_e=ne.itemSize,Me=e.get(ne);if(Me===void 0)continue;const tt=Me.buffer,G=Me.type,oe=Me.bytesPerElement,H=G===s.INT||G===s.UNSIGNED_INT||ne.gpuType===$c;if(ne.isInterleavedBufferAttribute){const Q=ne.data,le=Q.stride,Ue=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let re=0;re<Z.locationSize;re++)p(Z.location+re,Q.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<Z.locationSize;re++)m(Z.location+re);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let re=0;re<Z.locationSize;re++)w(Z.location+re,_e/Z.locationSize,G,q,le*oe,(Ue+_e/Z.locationSize*re)*oe,H)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<Z.locationSize;Q++)p(Z.location+Q,ne.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<Z.locationSize;Q++)m(Z.location+Q);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Q=0;Q<Z.locationSize;Q++)w(Z.location+Q,_e/Z.locationSize,G,q,_e*oe,_e/Z.locationSize*Q*oe,H)}}else if(V!==void 0){const q=V[te];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(Z.location,q);break;case 3:s.vertexAttrib3fv(Z.location,q);break;case 4:s.vertexAttrib4fv(Z.location,q);break;default:s.vertexAttrib1fv(Z.location,q)}}}}M()}function S(){A();for(const L in n){const I=n[L];for(const O in I){const D=I[O];for(const B in D){const K=D[B];for(const V in K)h(K[V].object),delete K[V];delete D[B]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const I=n[L.id];for(const O in I){const D=I[O];for(const B in D){const K=D[B];for(const V in K)h(K[V].object),delete K[V];delete D[B]}}delete n[L.id]}function R(L){for(const I in n){const O=n[I];for(const D in O){const B=O[D];if(B[L.id]===void 0)continue;const K=B[L.id];for(const V in K)h(K[V].object),delete K[V];delete B[L.id]}}}function _(L){for(const I in n){const O=n[I],D=L.isInstancedMesh===!0?L.id:0,B=O[D];if(B!==void 0){for(const K in B){const V=B[K];for(const te in V)h(V[te].object),delete V[te];delete B[K]}delete O[D],Object.keys(O).length===0&&delete n[I]}}}function A(){C(),r=!0,a!==i&&(a=i,l(a.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Yx(s,e,t){let n;function i(c){n=c}function a(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Zx(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==an&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&R!==wn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:S,samples:E}}function $x(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new vi,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||a&&!m)a?h(null):l();else{const M=a?0:n,w=M*4;let x=p.clippingState||null;c.value=x,x=h(g,u,w,f);for(let S=0;S!==w;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==v;++w,x+=4)r.copy(d[w]).applyMatrix4(M,o),r.normal.toArray(m,x),m[x+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const vs=4,Qx=6,e_=20,t_=256,Zs=new Ua,td=new Fe;let ko=null,Oo=0,Bo=0,zo=!1;const n_=new P,Ui=new P;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=n_}=a;ko=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Oo,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Kn,format:an,colorSpace:mn,depthBuffer:!1},i=id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=i_(a)),this._blurMaterial=a_(a,e,t),this._ggxMaterial=s_(a,e,t)}return i}_compileMaterial(e){const t=new de(new Et,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,i,a){const c=new sn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(td),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Sn,new Tt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(td),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[w],a.y,a.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[w],a.z)):(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[w]));const S=this._cubeSize;ds(i,x*S,w>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gi||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const a=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-vs?n-g+vs:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ds(a,m,p,3*v,2*v),i.setRenderTarget(a),i.render(o,Zs),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-n,ds(e,m,p,3*v,2*v),i.setRenderTarget(e),i.render(o,Zs)}_blur(e,t,n,i){const a=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,r),this._blurPass(a,e,n,n,r)}_blurPass(e,t,n,i,a){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-vs?i-this._lodMax+vs:0),u=4*(this._cubeSize-h);ds(t,d,u,3*h,2*h),r.setRenderTarget(t),r.render(c,Zs)}}function i_(s){const e=[],t=[];let n=s;const i=s-vs+1+Qx;for(let a=0;a<i;a++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,w=p>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(x,f*u*p);for(let S=0;S<u;S++){const E=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?Ui.set(1,R,E):p===1?Ui.set(-E,1,-R):p===2?Ui.set(-E,R,1):p===3?Ui.set(-1,R,-E):p===4?Ui.set(-E,-1,R):Ui.set(E,R,-1),Ui.toArray(v,(p*u+S)*f)}}const m=new Et;m.setAttribute("position",new Vt(g,f)),m.setAttribute("outputDirection",new Vt(v,f)),t.push(new de(m,null)),n>vs&&n--}return{lodMeshes:t,sizeLods:e}}function id(s,e,t){const n=new In(s,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function s_(s,e,t){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function a_(s,e,t){return new Jn({name:"SphericalGaussianBlur",defines:{SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function sd(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ad(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sn(5,5,5),a=new Jn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ci});a.uniforms.tEquirect.value=t;const r=new de(i,a),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=Ht),new Yg(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}function r_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===io||f===so)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Gu(g.height);return v.fromEquirectangularTexture(s,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const f=u.mapping,g=f===io||f===so,v=f===Gi||f===Cs;if(g||v){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new nd(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new nd(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===io?u.mapping=Gi:f===so&&(u.mapping=Cs),u}function c(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function o_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ss("WebGLRenderer: "+n+" extension not supported."),i}}}function c_(s,e,t,n){const i={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const f=a.get(u);f&&(e.remove(f),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let w=0,x=M.length;w<x;w+=3){const S=M[w+0],E=M[w+1],R=M[w+2];u.push(S,E,E,R,R,S)}}else{const M=g.array;v=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const S=w+0,E=w+1,R=w+2;u.push(S,E,E,R,R,S)}}const m=new(g.count>=65535?fu:dl)(u,1);m.version=v;const p=a.get(d);p&&e.remove(p),a.set(d,m)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function l_(s,e,t){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,u){s.drawElements(n,u,a,d*r),t.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,a,d*r,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function h_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:ze("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function d_(s,e,t){const n=new WeakMap,i=new pt;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let x=o.attributes.position.count*w,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*S*4*d),R=new du(E,x,S,d);R.type=wn,R.needsUpdate=!0;const _=w*4;for(let C=0;C<d;C++){const L=m[C],I=p[C],O=M[C],D=x*S*4*C;for(let B=0;B<L.count;B++){const K=B*_;f===!0&&(i.fromBufferAttribute(L,B),E[D+K+0]=i.x,E[D+K+1]=i.y,E[D+K+2]=i.z,E[D+K+3]=0),g===!0&&(i.fromBufferAttribute(I,B),E[D+K+4]=i.x,E[D+K+5]=i.y,E[D+K+6]=i.z,E[D+K+7]=0),v===!0&&(i.fromBufferAttribute(O,B),E[D+K+8]=i.x,E[D+K+9]=i.y,E[D+K+10]=i.z,E[D+K+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new ue(x,S)},n.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function u_(s,e,t,n,i){let a=new WeakMap;function r(l){const h=i.render.frame,d=l.geometry,u=e.get(l,d);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const f_={[qd]:"LINEAR_TONE_MAPPING",[Kd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[Jd]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[$d]:"NEUTRAL_TONE_MAPPING",[Yd]:"CUSTOM_TONE_MAPPING"};function p_(s,e,t,n,i,a){const r=new In(e,t,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Et;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));const h=new wg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new de(l,h),u=new Ua(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,M=[],w=!1;this.setSize=function(x,S){r.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let E=0;E<M.length;E++){const R=M[E];R.setSize&&R.setSize(x,S)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;const S=r.width,E=r.height;M.length>0&&o===null&&(o=new In(S,E,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new In(S,E,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(S,E)}},this.begin=function(x,S){if(v||x.toneMapping===Xn&&M.length===0)return!1;if(p=S,S!==null){const E=S.width,R=S.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return w===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=Xn,!0},this.hasRenderPass=function(){return w},this.end=function(x,S){x.toneMapping=m,v=!0;let E=r,R=o;for(let _=0;_<M.length;_++){const A=M[_];A.enabled!==!1&&(A.render(x,R,E,S),A.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},et.getTransfer(f)===dt&&(h.defines.SRGB_TRANSFER="");const _=f_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Hu=new Wt,qc=new Sa(1,1),Vu=new du,Wu=new bm,Xu=new Mu,rd=[],od=[],cd=new Float32Array(16),ld=new Float32Array(9),hd=new Float32Array(4);function Bs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=rd[i];if(a===void 0&&(a=new Float32Array(i),rd[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Kr(s,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function m_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),qt(t,e)}}function b_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),qt(t,e)}}function x_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),qt(t,e)}}function __(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;hd.set(n),s.uniformMatrix2fv(this.addr,!1,hd),qt(t,n)}}function v_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;ld.set(n),s.uniformMatrix3fv(this.addr,!1,ld),qt(t,n)}}function M_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;cd.set(n),s.uniformMatrix4fv(this.addr,!1,cd),qt(t,n)}}function y_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function S_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),qt(t,e)}}function w_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),qt(t,e)}}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),qt(t,e)}}function E_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function A_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),qt(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),qt(t,e)}}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),qt(t,e)}}function P_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=t.isReversedDepthBuffer()?ol:rl,a=qc):a=Hu,t.setTexture2D(e||a,i)}function L_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wu,i)}function I_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xu,i)}function D_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vu,i)}function N_(s){switch(s){case 5126:return m_;case 35664:return g_;case 35665:return b_;case 35666:return x_;case 35674:return __;case 35675:return v_;case 35676:return M_;case 5124:case 35670:return y_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return E_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return D_}}function F_(s,e){s.uniform1fv(this.addr,e)}function U_(s,e){const t=Bs(e,this.size,2);s.uniform2fv(this.addr,t)}function k_(s,e){const t=Bs(e,this.size,3);s.uniform3fv(this.addr,t)}function O_(s,e){const t=Bs(e,this.size,4);s.uniform4fv(this.addr,t)}function B_(s,e){const t=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function z_(s,e){const t=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function G_(s,e){const t=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function H_(s,e){s.uniform1iv(this.addr,e)}function V_(s,e){s.uniform2iv(this.addr,e)}function W_(s,e){s.uniform3iv(this.addr,e)}function X_(s,e){s.uniform4iv(this.addr,e)}function q_(s,e){s.uniform1uiv(this.addr,e)}function K_(s,e){s.uniform2uiv(this.addr,e)}function j_(s,e){s.uniform3uiv(this.addr,e)}function J_(s,e){s.uniform4uiv(this.addr,e)}function Y_(s,e,t){const n=this.cache,i=e.length,a=Kr(t,i);Xt(n,a)||(s.uniform1iv(this.addr,a),qt(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=qc:r=Hu;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,a[o])}function Z_(s,e,t){const n=this.cache,i=e.length,a=Kr(t,i);Xt(n,a)||(s.uniform1iv(this.addr,a),qt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Wu,a[r])}function $_(s,e,t){const n=this.cache,i=e.length,a=Kr(t,i);Xt(n,a)||(s.uniform1iv(this.addr,a),qt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Xu,a[r])}function Q_(s,e,t){const n=this.cache,i=e.length,a=Kr(t,i);Xt(n,a)||(s.uniform1iv(this.addr,a),qt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Vu,a[r])}function ev(s){switch(s){case 5126:return F_;case 35664:return U_;case 35665:return k_;case 35666:return O_;case 35674:return B_;case 35675:return z_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return K_;case 36295:return j_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Q_}}class tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=N_(t.type)}}class nv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ev(t.type)}}class iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function dd(s,e){s.seq.push(e),s.map[e.id]=e}function sv(s,e,t){const n=s.name,i=n.length;for(Go.lastIndex=0;;){const a=Go.exec(n),r=Go.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){dd(t,l===void 0?new tv(o,s,e):new nv(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new iv(o),dd(t,d)),t=d}}}class Rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);sv(o,c,this)}const i=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ud(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const av=37297;let rv=0;function ov(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const fd=new Ge;function cv(s){et._getMatrix(fd,et.workingColorSpace,s);const e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Fr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+ov(s.getShaderSource(e),o)}else return a}function lv(s,e){const t=cv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hv={[qd]:"Linear",[Kd]:"Reinhard",[jd]:"Cineon",[Jd]:"ACESFilmic",[Zd]:"AgX",[$d]:"Neutral",[Yd]:"Custom"};function dv(s,e){const t=hv[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new P;function uv(){et.getLuminanceCoefficients(xr);const s=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function pv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function ra(s){return s!==""}function md(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(s){return s.replace(gv,xv)}const bv=new Map;function xv(s,e){let t=Je[e];if(t===void 0){const n=bv.get(e);if(n!==void 0)t=Je[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kc(t)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(s){return s.replace(_v,vv)}function vv(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function xd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Mv={[oa]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function yv(s){return Mv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sv={[Gi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function wv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tv={[Cs]:"ENVMAP_MODE_REFRACTION"};function Ev(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Av={[Vr]:"ENVMAP_BLENDING_MULTIPLY",[Cp]:"ENVMAP_BLENDING_MIX",[Pp]:"ENVMAP_BLENDING_ADD"};function Rv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Av[s.combine]||"ENVMAP_BLENDING_NONE"}function Cv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pv(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=yv(t),l=wv(t),h=Ev(t),d=Rv(t),u=Cv(t),f=fv(t),g=pv(a),v=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(m=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Xn?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),r=Kc(r),r=md(r,t),r=gd(r,t),o=Kc(o),o=md(o,t),o=gd(o,t),r=bd(r),o=bd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+r,x=M+p+o,S=ud(i,i.VERTEX_SHADER,w),E=ud(i,i.FRAGMENT_SHADER,x);i.attachShader(v,S),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(L){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(v)||"",O=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(E)||"",B=I.trim(),K=O.trim(),V=D.trim();let te=!0,Z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,S,E);else{const ne=pd(i,S,"vertex"),q=pd(i,E,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+ne+`
`+q)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(K===""||V==="")&&(Z=!1);Z&&(L.diagnostics={runnable:te,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(S),i.deleteShader(E),_=new Rr(i,v),A=mv(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,av)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let Lv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dv(e),t.set(e,n)),n}}class Dv{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}}function Nv(s){return s===Vi||s===Ir||s===Dr}function Fv(s,e,t,n,i,a){const r=new hl,o=new Iv,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,A,C,L,I,O){const D=L.fog,B=I.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||K,V),Z=te&&te.mapping===Wr?te.image.height:null,ne=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=q!==void 0?q.length:0;let Me=0;B.morphAttributes.position!==void 0&&(Me=1),B.morphAttributes.normal!==void 0&&(Me=2),B.morphAttributes.color!==void 0&&(Me=3);let tt,G,oe,H;if(ne){const vt=Hn[ne];tt=vt.vertexShader,G=vt.fragmentShader}else{tt=_.vertexShader,G=_.fragmentShader;const vt=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,vt,ct),oe=vt.id,H=ct.id}const Q=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,re=I.isBatchedMesh===!0,Se=!!_.map,bt=!!_.matcap,He=!!te,Ke=!!_.aoMap,at=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,it=!!_.displacementMap,At=!!_.emissiveMap,_t=!!_.metalnessMap,Lt=!!_.roughnessMap,F=_.anisotropy>0,zt=_.clearcoat>0,rt=_.dispersion>0,y=_.retroreflectivity>0,b=_.iridescence>0,N=_.sheen>0,z=_.transmission>0,j=F&&!!_.anisotropyMap,ae=zt&&!!_.clearcoatMap,ce=zt&&!!_.clearcoatNormalMap,$=zt&&!!_.clearcoatRoughnessMap,ee=b&&!!_.iridescenceMap,he=b&&!!_.iridescenceThicknessMap,Ie=N&&!!_.sheenColorMap,ge=N&&!!_.sheenRoughnessMap,fe=!!_.specularMap,De=!!_.specularColorMap,Be=!!_.specularIntensityMap,Xe=z&&!!_.transmissionMap,k=z&&!!_.thicknessMap,pe=!!_.gradientMap,ie=!!_.alphaMap,me=_.alphaTest>0,ye=!!_.alphaHash,se=!!_.extensions;let Ne=Xn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const Ce={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:G,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:re,batchingColor:re&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Se,matcap:bt,envMap:He,envMapMode:He&&te.mapping,envMapCubeUVHeight:Z,aoMap:Ke,lightMap:at,bumpMap:We,normalMap:xt,displacementMap:it,emissiveMap:At,normalMapObjectSpace:xt&&_.normalMapType===Up,normalMapTangentSpace:xt&&_.normalMapType===Ps,packedNormalMap:xt&&_.normalMapType===Ps&&Nv(_.normalMap.format),metalnessMap:_t,roughnessMap:Lt,anisotropy:F,anisotropyMap:j,clearcoat:zt,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:$,dispersion:rt,retroreflection:y,iridescence:b,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:N,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:fe,specularColorMap:De,specularIntensityMap:Be,transmission:z,transmissionMap:Xe,thicknessMap:k,gradientMap:pe,opaque:_.transparent===!1&&_.blending===ca&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:me,alphaHash:ye,combine:_.combine,mapUv:Se&&g(_.map.channel),aoMapUv:Ke&&g(_.aoMap.channel),lightMapUv:at&&g(_.lightMap.channel),bumpMapUv:We&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:it&&g(_.displacementMap.channel),emissiveMapUv:At&&g(_.emissiveMap.channel),metalnessMapUv:_t&&g(_.metalnessMap.channel),roughnessMapUv:Lt&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:ae&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(_.sheenRoughnessMap.channel),specularMapUv:fe&&g(_.specularMap.channel),specularColorMapUv:De&&g(_.specularColorMap.channel),specularIntensityMapUv:Be&&g(_.specularIntensityMap.channel),transmissionMapUv:Xe&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:ie&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||F),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Se||ie),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Me,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Se&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:At&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(A,_),M(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function w(_){const A=f[_.type];let C;if(A){const L=Hn[A];C=Mg.clone(L.uniforms)}else C=_.uniforms;return C}function x(_,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new Pv(s,A,_,i),l.push(C),h.set(A,C)),C}function S(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:R}}function Uv(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,c){s.get(r)[o]=c}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function kv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function _d(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vd(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let M=s[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:r(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},s[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=r(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);const w=o(u,f,g,v,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function l(u,f,g,v,m,p){const M=o(u,f,g,v,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||kv),n.length>1&&n.sort(f||_d),i.length>1&&i.sort(f||_d)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:c,unshift:l,finish:d,sort:h}}function Ov(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new vd,s.set(n,[r])):i>=a.length?(r=new vd,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function zv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Gv=0;function Hv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vv(s){const e=new Bv,t=zv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,a=new Ve,r=new Ve;function o(l){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,w=0,x=0,S=0,E=0,R=0,_=0,A=0,C=0;l.sort(Hv);for(let I=0,O=l.length;I<O;I++){const D=l[I],B=D.color,K=D.intensity,V=D.distance;let te=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vi?te=D.shadow.map.texture:te=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*K,d+=B.g*K,u+=B.b*K;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],K);C++}else if(D.isSunLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[g]=q,n.sunShadowMap[g]=te;const _e=ne.getViewportCount();for(let Me=0;Me<_e;Me++)n.sunShadowMatrix[v+Me]=ne.getMatrix(Me),n.sunShadowCascade[v+Me]=ne._cascadeData[Me];v+=_e,g++}n.sun[f]=Z,f++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=Z,m++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar(K),Z.distance=V,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[M]=Z;const ne=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,ne.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[M]=ne.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=te,R++}M++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(B).multiplyScalar(K),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=Z,w++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=Z,p++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(K),Z.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[x]=Z,x++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==x||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=x,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=C,n.version=Gv++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const x=l[M];if(x.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(x.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),r.identity(),a.copy(x.matrixWorld),a.premultiply(p),r.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Md(s){const e=new Vv(s),t=[],n=[],i=[];function a(u){d.camera=u,t.length=0,n.length=0,i.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function Wv(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new Md(s),e.set(i,[o])):a>=r.length?(o=new Md(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],jv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],yd=new Ve,$s=new P,Ho=new P;function Jv(s,e,t){let n=new pl;const i=new ue,a=new ue,r=new pt,o=new Eg,c=new Ag,l={},h=t.maxTextureSize,d={[Ei]:tn,[tn]:Ei,[Gt]:Gt},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===hp&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);const A=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(ci),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=E.length;D<B;D++){const K=E[D],V=K.shadow;if(V===void 0){Le("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();i.multiply(te),a.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/te.x),i.x=a.x*te.x,V.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/te.y),i.y=a.y*te.y,V.mapSize.y=a.y));const Z=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Z,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ia){if(K.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new In(i.x,i.y,{format:Vi,type:Kn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Sa(i.x,i.y,wn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt}else K.isPointLight?(V.map=new Gu(i.x),V.map.depthTexture=new Gm(i.x,qn)):(V.map=new In(i.x,i.y),V.map.depthTexture=new Sa(i.x,i.y,qn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=hi,this.type===oa?(V.map.depthTexture.compareFunction=Z?ol:rl,V.map.depthTexture.minFilter=Ht,V.map.depthTexture.magFilter=Ht):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const ne=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,_);for(let q=0;q<ne;q++){const _e=V.getCamera(q);if(K.isPointLight){const Me=V.camera,tt=V.matrix,G=K.distance||Me.far;G!==Me.far&&(Me.far=G,Me.updateProjectionMatrix()),$s.setFromMatrixPosition(K.matrixWorld),Me.position.copy($s),Ho.copy(Me.position),Ho.add(Kv[q]),Me.up.copy(jv[q]),Me.lookAt(Ho),Me.updateMatrixWorld(),tt.makeTranslation(-$s.x,-$s.y,-$s.z),yd.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yd,Me.coordinateSystem,Me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,q),s.clear();else{q===0&&(s.setRenderTarget(V.map),s.clear());const Me=V.getViewport(q);r.set(a.x*Me.x,a.y*Me.y,a.x*Me.z,a.y*Me.w),I.viewport(r)}n=V.getFrustum(q),x(R,_,_e,K,this.type)}V.isPointLightShadow!==!0&&this.type===ia&&M(V,_),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(A,C,L)};function M(E,R){const _=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new In(i.x,i.y,{format:Vi,type:Kn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,_,f,v,null)}function w(E,R,_,A){let C=null;const L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=C.uuid,O=R.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let B=D[O];B===void 0&&(B=C.clone(),D[O]=B,R.addEventListener("dispose",S)),C=B}if(C.visible=R.visible,C.wireframe=R.wireframe,A===ia?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=s.properties.get(C);I.light=_}return C}function x(E,R,_,A,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ia)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const O=e.update(E),D=E.material;if(Array.isArray(D)){const B=O.groups;for(let K=0,V=B.length;K<V;K++){const te=B[K],Z=D[te.materialIndex];if(Z&&Z.visible){const ne=w(E,Z,A,C);E.onBeforeShadow(s,E,R,_,O,ne,te),s.renderBufferDirect(_,null,O,ne,E,te),E.onAfterShadow(s,E,R,_,O,ne,te)}}}else if(D.visible){const B=w(E,D,A,C);E.onBeforeShadow(s,E,R,_,O,B,null),s.renderBufferDirect(_,null,O,B,E,null),E.onAfterShadow(s,E,R,_,O,B,null)}}const I=E.children;for(let O=0,D=I.length;O<D;O++)x(I[O],R,_,A,C)}function S(E){E.target.removeEventListener("dispose",S);for(const _ in l){const A=l[_],C=E.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function Yv(s,e){function t(){let k=!1;const pe=new pt;let ie=null;const me=new pt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!k&&(s.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){k=ye},setClear:function(ye,se,Ne,Ce,vt){vt===!0&&(ye*=Ce,se*=Ce,Ne*=Ce),pe.set(ye,se,Ne,Ce),me.equals(pe)===!1&&(s.clearColor(ye,se,Ne,Ce),me.copy(pe))},reset:function(){k=!1,ie=null,me.set(-1,0,0,0)}}}function n(){let k=!1,pe=!1,ie=null,me=null,ye=null;return{setReversed:function(se){if(pe!==se){const Ne=e.get("EXT_clip_control");se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(se){se?Q(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(se){ie!==se&&!k&&(s.depthMask(se),ie=se)},setFunc:function(se){if(pe&&(se=jp[se]),me!==se){switch(se){case tc:s.depthFunc(s.NEVER);break;case nc:s.depthFunc(s.ALWAYS);break;case ic:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case sc:s.depthFunc(s.EQUAL);break;case ac:s.depthFunc(s.GEQUAL);break;case rc:s.depthFunc(s.GREATER);break;case oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=se}},setLocked:function(se){k=se},setClear:function(se){ye!==se&&(ye=se,pe&&(se=1-se),s.clearDepth(se))},reset:function(){k=!1,ie=null,me=null,ye=null,pe=!1}}}function i(){let k=!1,pe=null,ie=null,me=null,ye=null,se=null,Ne=null,Ce=null,vt=null;return{setTest:function(ct){k||(ct?Q(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(ct){pe!==ct&&!k&&(s.stencilMask(ct),pe=ct)},setFunc:function(ct,An,Nn){(ie!==ct||me!==An||ye!==Nn)&&(s.stencilFunc(ct,An,Nn),ie=ct,me=An,ye=Nn)},setOp:function(ct,An,Nn){(se!==ct||Ne!==An||Ce!==Nn)&&(s.stencilOp(ct,An,Nn),se=ct,Ne=An,Ce=Nn)},setLocked:function(ct){k=ct},setClear:function(ct){vt!==ct&&(s.clearStencil(ct),vt=ct)},reset:function(){k=!1,pe=null,ie=null,me=null,ye=null,se=null,Ne=null,Ce=null,vt=null}}}const a=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,x=null,S=null,E=null,R=null,_=new Fe(0,0,0),A=0,C=!1,L=null,I=null,O=null,D=null,B=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=te>=1):Z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=te>=2);let ne=null,q={};const _e=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),tt=new pt().fromArray(_e),G=new pt().fromArray(Me);function oe(k,pe,ie,me){const ye=new Uint8Array(4),se=s.createTexture();s.bindTexture(k,se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<ie;Ne++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(pe+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return se}const H={};H[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),r.setFunc(ma),We(!1),xt(Zl),Q(s.CULL_FACE),Ke(ci);function Q(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function le(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Ue(k,pe){return u[k]!==pe?(s.bindFramebuffer(k,pe),u[k]=pe,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function re(k,pe){let ie=g,me=!1;if(k){ie=f.get(pe),ie===void 0&&(ie=[],f.set(pe,ie));const ye=k.textures;if(ie.length!==ye.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Ne=ye.length;se<Ne;se++)ie[se]=s.COLOR_ATTACHMENT0+se;ie.length=ye.length,me=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,me=!0);me&&s.drawBuffers(ie)}function Se(k){return v!==k?(s.useProgram(k),v=k,!0):!1}const bt={[ms]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[fp]:s.FUNC_REVERSE_SUBTRACT};bt[pp]=s.MIN,bt[mp]=s.MAX;const He={[gp]:s.ZERO,[bp]:s.ONE,[xp]:s.SRC_COLOR,[Wd]:s.SRC_ALPHA,[wp]:s.SRC_ALPHA_SATURATE,[yp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[_p]:s.ONE_MINUS_SRC_COLOR,[Xd]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[Mp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[Ep]:s.ONE_MINUS_CONSTANT_COLOR,[Ap]:s.CONSTANT_ALPHA,[Rp]:s.ONE_MINUS_CONSTANT_ALPHA};function Ke(k,pe,ie,me,ye,se,Ne,Ce,vt,ct){if(k===ci){m===!0&&(le(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),k!==dp){if(k!==p||ct!==C){if((M!==ms||S!==ms)&&(s.blendEquation(s.FUNC_ADD),M=ms,S=ms),ct)switch(k){case ca:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $l:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",k);break}else switch(k){case ca:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $l:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ql:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",k);break}w=null,x=null,E=null,R=null,_.set(0,0,0),A=0,p=k,C=ct}return}ye=ye||pe,se=se||ie,Ne=Ne||me,(pe!==M||ye!==S)&&(s.blendEquationSeparate(bt[pe],bt[ye]),M=pe,S=ye),(ie!==w||me!==x||se!==E||Ne!==R)&&(s.blendFuncSeparate(He[ie],He[me],He[se],He[Ne]),w=ie,x=me,E=se,R=Ne),(Ce.equals(_)===!1||vt!==A)&&(s.blendColor(Ce.r,Ce.g,Ce.b,vt),_.copy(Ce),A=vt),p=k,C=!1}function at(k,pe){k.side===Gt?le(s.CULL_FACE):Q(s.CULL_FACE);let ie=k.side===tn;pe&&(ie=!ie),We(ie),k.blending===ca&&k.transparent===!1?Ke(ci):Ke(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),a.setMask(k.colorWrite);const me=k.stencilWrite;o.setTest(me),me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),At(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(k){L!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),L=k)}function xt(k){k!==cp?(Q(s.CULL_FACE),k!==I&&(k===Zl?s.cullFace(s.BACK):k===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),I=k}function it(k){k!==O&&(V&&s.lineWidth(k),O=k)}function At(k,pe,ie){k?(Q(s.POLYGON_OFFSET_FILL),(D!==pe||B!==ie)&&(D=pe,B=ie,r.getReversed()&&(pe=-pe),s.polygonOffset(pe,ie))):le(s.POLYGON_OFFSET_FILL)}function _t(k){k?Q(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function Lt(k){k===void 0&&(k=s.TEXTURE0+K-1),ne!==k&&(s.activeTexture(k),ne=k)}function F(k,pe,ie){ie===void 0&&(ne===null?ie=s.TEXTURE0+K-1:ie=ne);let me=q[ie];me===void 0&&(me={type:void 0,texture:void 0},q[ie]=me),(me.type!==k||me.texture!==pe)&&(ne!==ie&&(s.activeTexture(ie),ne=ie),s.bindTexture(k,pe||H[k]),me.type=k,me.texture=pe)}function zt(){const k=q[ne];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function y(){try{s.compressedTexImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function b(){try{s.texSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function N(){try{s.texSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function ae(){try{s.texStorage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function ce(){try{s.texStorage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function $(){try{s.texImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function ee(){try{s.texImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function he(k){return d[k]!==void 0?d[k]:s.getParameter(k)}function Ie(k,pe){d[k]!==pe&&(s.pixelStorei(k,pe),d[k]=pe)}function ge(k){tt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),tt.copy(k))}function fe(k){G.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),G.copy(k))}function De(k,pe){let ie=l.get(pe);ie===void 0&&(ie=new WeakMap,l.set(pe,ie));let me=ie.get(k);me===void 0&&(me=s.getUniformBlockIndex(pe,k.name),ie.set(k,me))}function Be(k,pe){const me=l.get(pe).get(k);c.get(pe)!==me&&(s.uniformBlockBinding(pe,me,k.__bindingPointIndex),c.set(pe,me))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,q={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,x=null,S=null,E=null,R=null,_=new Fe(0,0,0),A=0,C=!1,L=null,I=null,O=null,D=null,B=null,tt.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:le,bindFramebuffer:Ue,drawBuffers:re,useProgram:Se,setBlending:Ke,setMaterial:at,setFlipSided:We,setCullFace:xt,setLineWidth:it,setPolygonOffset:At,setScissorTest:_t,activeTexture:Lt,bindTexture:F,unbindTexture:zt,compressedTexImage2D:rt,compressedTexImage3D:y,texImage2D:$,texImage3D:ee,pixelStorei:Ie,getParameter:he,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:ae,texStorage3D:ce,texSubImage2D:b,texSubImage3D:N,compressedTexSubImage2D:z,compressedTexSubImage3D:j,scissor:ge,viewport:fe,reset:Xe}}function Zv(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,b){return g?new OffscreenCanvas(y,b):Ma("canvas")}function m(y,b,N){let z=1;const j=rt(y);if((j.width>N||j.height>N)&&(z=N/Math.max(j.width,j.height)),z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ae=Math.floor(z*j.width),ce=Math.floor(z*j.height);u===void 0&&(u=v(ae,ce));const $=b?v(ae,ce):u;return $.width=ae,$.height=ce,$.getContext("2d").drawImage(y,0,0,ae,ce),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+ce+")."),$}else return"data"in y&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function p(y){return y.generateMipmaps}function M(y){s.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?s.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(y,b,N,z,j,ae=!1){if(y!==null){if(s[y]!==void 0)return s[y];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce;z&&(ce=e.get("EXT_texture_norm16"),ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=b;if(b===s.RED&&(N===s.FLOAT&&($=s.R32F),N===s.HALF_FLOAT&&($=s.R16F),N===s.UNSIGNED_BYTE&&($=s.R8),N===s.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),N===s.SHORT&&ce&&($=ce.R16_SNORM_EXT)),b===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.R8UI),N===s.UNSIGNED_SHORT&&($=s.R16UI),N===s.UNSIGNED_INT&&($=s.R32UI),N===s.BYTE&&($=s.R8I),N===s.SHORT&&($=s.R16I),N===s.INT&&($=s.R32I)),b===s.RG&&(N===s.FLOAT&&($=s.RG32F),N===s.HALF_FLOAT&&($=s.RG16F),N===s.UNSIGNED_BYTE&&($=s.RG8),N===s.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),N===s.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RG8UI),N===s.UNSIGNED_SHORT&&($=s.RG16UI),N===s.UNSIGNED_INT&&($=s.RG32UI),N===s.BYTE&&($=s.RG8I),N===s.SHORT&&($=s.RG16I),N===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RGB8UI),N===s.UNSIGNED_SHORT&&($=s.RGB16UI),N===s.UNSIGNED_INT&&($=s.RGB32UI),N===s.BYTE&&($=s.RGB8I),N===s.SHORT&&($=s.RGB16I),N===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RGBA8UI),N===s.UNSIGNED_SHORT&&($=s.RGBA16UI),N===s.UNSIGNED_INT&&($=s.RGBA32UI),N===s.BYTE&&($=s.RGBA8I),N===s.SHORT&&($=s.RGBA16I),N===s.INT&&($=s.RGBA32I)),b===s.RGB&&(N===s.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),N===s.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),N===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),b===s.RGBA){const ee=ae?Fr:et.getTransfer(j);N===s.FLOAT&&($=s.RGBA32F),N===s.HALF_FLOAT&&($=s.RGBA16F),N===s.UNSIGNED_BYTE&&($=ee===dt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),N===s.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),N===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(y,b){let N;return y?b===null||b===qn||b===ba?N=s.DEPTH24_STENCIL8:b===wn?N=s.DEPTH32F_STENCIL8:b===ga&&(N=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qn||b===ba?N=s.DEPTH_COMPONENT24:b===wn?N=s.DEPTH_COMPONENT32F:b===ga&&(N=s.DEPTH_COMPONENT16),N}function E(y,b){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Nt&&y.minFilter!==Ht?Math.log2(Math.max(b.width,b.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?b.mipmaps.length:1}function R(y){const b=y.target;b.removeEventListener("dispose",R),A(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function _(y){const b=y.target;b.removeEventListener("dispose",_),L(b)}function A(y){const b=n.get(y);if(b.__webglInit===void 0)return;const N=y.source,z=f.get(N);if(z){const j=z[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(y),Object.keys(z).length===0&&f.delete(N)}n.remove(y)}function C(y){const b=n.get(y);s.deleteTexture(b.__webglTexture);const N=y.source,z=f.get(N);delete z[b.__cacheKey],r.memory.textures--}function L(y){const b=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(b.__webglFramebuffer[z]))for(let j=0;j<b.__webglFramebuffer[z].length;j++)s.deleteFramebuffer(b.__webglFramebuffer[z][j]);else s.deleteFramebuffer(b.__webglFramebuffer[z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[z])}else{if(Array.isArray(b.__webglFramebuffer))for(let z=0;z<b.__webglFramebuffer.length;z++)s.deleteFramebuffer(b.__webglFramebuffer[z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let z=0;z<b.__webglColorRenderbuffer.length;z++)b.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const N=y.textures;for(let z=0,j=N.length;z<j;z++){const ae=n.get(N[z]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),r.memory.textures--),n.remove(N[z])}n.remove(y)}let I=0;function O(){I=0}function D(){return I}function B(y){I=y}function K(){const y=I;return y>=i.maxTextures&&Le("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,y}function V(y){const b=[];return b.push(y.wrapS),b.push(y.wrapT),b.push(y.wrapR||0),b.push(y.magFilter),b.push(y.minFilter),b.push(y.anisotropy),b.push(y.internalFormat),b.push(y.format),b.push(y.type),b.push(y.generateMipmaps),b.push(y.premultiplyAlpha),b.push(y.flipY),b.push(y.unpackAlignment),b.push(y.colorSpace),b.join()}function te(y,b){const N=n.get(y);if(y.isVideoTexture&&F(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){const z=y.image;if(z===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{le(N,y,b);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+b)}function Z(y,b){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){le(N,y,b);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+b)}function ne(y,b){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){le(N,y,b);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+b)}function q(y,b){const N=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){Ue(N,y,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+b)}const _e={[Hi]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},Me={[Nt]:s.NEAREST,[eu]:s.NEAREST_MIPMAP_NEAREST,[sa]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[yr]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},tt={[Op]:s.NEVER,[Vp]:s.ALWAYS,[Bp]:s.LESS,[rl]:s.LEQUAL,[zp]:s.EQUAL,[ol]:s.GEQUAL,[Gp]:s.GREATER,[Hp]:s.NOTEQUAL};function G(y,b){if(b.type===wn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ht||b.magFilter===yr||b.magFilter===sa||b.magFilter===ri||b.minFilter===Ht||b.minFilter===yr||b.minFilter===sa||b.minFilter===ri)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(y,s.TEXTURE_WRAP_S,_e[b.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,_e[b.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,_e[b.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,Me[b.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nt||b.minFilter!==sa&&b.minFilter!==ri||b.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(y,b){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,b.addEventListener("dispose",R));const z=b.source;let j=f.get(z);j===void 0&&(j={},f.set(z,j));const ae=V(b);if(ae!==y.__cacheKey){j[ae]===void 0&&(j[ae]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,N=!0),j[ae].usedTimes++;const ce=j[y.__cacheKey];ce!==void 0&&(j[y.__cacheKey].usedTimes--,ce.usedTimes===0&&C(b)),y.__cacheKey=ae,y.__webglTexture=j[ae].texture}return N}function H(y,b,N){return Math.floor(Math.floor(y/N)/b)}function Q(y,b,N,z){const ae=y.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,N,z,b.data);else{ae.sort((Ie,ge)=>Ie.start-ge.start);let ce=0;for(let Ie=1;Ie<ae.length;Ie++){const ge=ae[ce],fe=ae[Ie],De=ge.start+ge.count,Be=H(fe.start,b.width,4),Xe=H(ge.start,b.width,4);fe.start<=De+1&&Be===Xe&&H(fe.start+fe.count-1,b.width,4)===Be?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++ce,ae[ce]=fe)}ae.length=ce+1;const $=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),he=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ie=0,ge=ae.length;Ie<ge;Ie++){const fe=ae[Ie],De=Math.floor(fe.start/4),Be=Math.ceil(fe.count/4),Xe=De%b.width,k=Math.floor(De/b.width),pe=Be,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,Xe,k,pe,ie,N,z,b.data)}y.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function le(y,b,N){let z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(z=s.TEXTURE_3D);const j=oe(y,b),ae=b.source;t.bindTexture(z,y.__webglTexture,s.TEXTURE0+N);const ce=n.get(ae);if(ae.version!==ce.__version||j===!0){if(t.activeTexture(s.TEXTURE0+N),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ie=et.getPrimaries(et.workingColorSpace),me=b.colorSpace===Si?null:et.getPrimaries(b.colorSpace),ye=b.colorSpace===Si||ie===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ee=m(b.image,!1,i.maxTextureSize);ee=zt(b,ee);const he=a.convert(b.format,b.colorSpace),Ie=a.convert(b.type);let ge=x(b.internalFormat,he,Ie,b.normalized,b.colorSpace,b.isVideoTexture);G(z,b);let fe;const De=b.mipmaps,Be=b.isVideoTexture!==!0,Xe=ce.__version===void 0||j===!0,k=ae.dataReady,pe=E(b,ee);if(b.isDepthTexture)ge=S(b.format===Oi,b.type),Xe&&(Be?t.texStorage2D(s.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ie,null));else if(b.isDataTexture)if(De.length>0){Be&&Xe&&t.texStorage2D(s.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)fe=De[ie],Be?k&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,he,Ie,fe.data):t.texImage2D(s.TEXTURE_2D,ie,ge,fe.width,fe.height,0,he,Ie,fe.data);b.generateMipmaps=!1}else Be?(Xe&&t.texStorage2D(s.TEXTURE_2D,pe,ge,ee.width,ee.height),k&&Q(b,ee,he,Ie)):t.texImage2D(s.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ie,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ge,De[0].width,De[0].height,ee.depth);for(let ie=0,me=De.length;ie<me;ie++)if(fe=De[ie],b.format!==an)if(he!==null)if(Be){if(k)if(b.layerUpdates.size>0){const ye=ed(fe.width,fe.height,b.format,b.type);for(const se of b.layerUpdates){const Ne=fe.data.subarray(se*ye/fe.data.BYTES_PER_ELEMENT,(se+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,se,fe.width,fe.height,1,he,Ne)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ee.depth,he,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,ge,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ee.depth,he,Ie,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,ge,fe.width,fe.height,ee.depth,0,he,Ie,fe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Be&&Xe&&t.texStorage2D(s.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)fe=De[ie],b.format!==an?he!==null?Be?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,ge,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?k&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,he,Ie,fe.data):t.texImage2D(s.TEXTURE_2D,ie,ge,fe.width,fe.height,0,he,Ie,fe.data)}else if(b.isDataArrayTexture)if(Be){if(Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ge,ee.width,ee.height,ee.depth),k)if(b.layerUpdates.size>0){const ie=ed(ee.width,ee.height,b.format,b.type);for(const me of b.layerUpdates){const ye=ee.data.subarray(me*ie/ee.data.BYTES_PER_ELEMENT,(me+1)*ie/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,he,Ie,ye)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Ie,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,he,Ie,ee.data);else if(b.isData3DTexture)Be?(Xe&&t.texStorage3D(s.TEXTURE_3D,pe,ge,ee.width,ee.height,ee.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Ie,ee.data)):t.texImage3D(s.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,he,Ie,ee.data);else if(b.isFramebufferTexture){if(Xe)if(Be)t.texStorage2D(s.TEXTURE_2D,pe,ge,ee.width,ee.height);else{let ie=ee.width,me=ee.height;for(let ye=0;ye<pe;ye++)t.texImage2D(s.TEXTURE_2D,ye,ge,ie,me,0,he,Ie,null),ie>>=1,me>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ee.parentNode!==ie){ie.appendChild(ee),d.add(b),ie.onpaint=me=>{const ye=me.changedElements;for(const se of d)ye.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{const ye=s.RGBA,se=s.RGBA,Ne=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ye,se,Ne,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(De.length>0){if(Be&&Xe){const ie=rt(De[0]);t.texStorage2D(s.TEXTURE_2D,pe,ge,ie.width,ie.height)}for(let ie=0,me=De.length;ie<me;ie++)fe=De[ie],Be?k&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,he,Ie,fe):t.texImage2D(s.TEXTURE_2D,ie,ge,he,Ie,fe);b.generateMipmaps=!1}else if(Be){if(Xe){const ie=rt(ee);t.texStorage2D(s.TEXTURE_2D,pe,ge,ie.width,ie.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Ie,ee)}else t.texImage2D(s.TEXTURE_2D,0,ge,he,Ie,ee);p(b)&&M(z),ce.__version=ae.version,b.onUpdate&&b.onUpdate(b)}y.__version=b.version}function Ue(y,b,N){if(b.image.length!==6)return;const z=oe(y,b),j=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+N);const ae=n.get(j);if(j.version!==ae.__version||z===!0){t.activeTexture(s.TEXTURE0+N);const ce=et.getPrimaries(et.workingColorSpace),$=b.colorSpace===Si?null:et.getPrimaries(b.colorSpace),ee=b.colorSpace===Si||ce===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,Ie=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!he&&!Ie?ge[se]=m(b.image[se],!0,i.maxCubemapSize):ge[se]=Ie?b.image[se].image:b.image[se],ge[se]=zt(b,ge[se]);const fe=ge[0],De=a.convert(b.format,b.colorSpace),Be=a.convert(b.type),Xe=x(b.internalFormat,De,Be,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,pe=ae.__version===void 0||z===!0,ie=j.dataReady;let me=E(b,fe);G(s.TEXTURE_CUBE_MAP,b);let ye;if(he){k&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Xe,fe.width,fe.height);for(let se=0;se<6;se++){ye=ge[se].mipmaps;for(let Ne=0;Ne<ye.length;Ne++){const Ce=ye[Ne];b.format!==an?De!==null?k?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne,Xe,Ce.width,Ce.height,0,Ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne,0,0,Ce.width,Ce.height,De,Be,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne,Xe,Ce.width,Ce.height,0,De,Be,Ce.data)}}}else{if(ye=b.mipmaps,k&&pe){ye.length>0&&me++;const se=rt(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,De,Be,ge[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,ge[se].width,ge[se].height,0,De,Be,ge[se].data);for(let Ne=0;Ne<ye.length;Ne++){const vt=ye[Ne].image[se].image;k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne+1,0,0,vt.width,vt.height,De,Be,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne+1,Xe,vt.width,vt.height,0,De,Be,vt.data)}}else{k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Be,ge[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,De,Be,ge[se]);for(let Ne=0;Ne<ye.length;Ne++){const Ce=ye[Ne];k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne+1,0,0,De,Be,Ce.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne+1,Xe,De,Be,Ce.image[se])}}}p(b)&&M(s.TEXTURE_CUBE_MAP),ae.__version=j.version,b.onUpdate&&b.onUpdate(b)}y.__version=b.version}function re(y,b,N,z,j,ae){const ce=a.convert(N.format,N.colorSpace),$=a.convert(N.type),ee=x(N.internalFormat,ce,$,N.normalized,N.colorSpace),he=n.get(b),Ie=n.get(N);if(Ie.__renderTarget=b,!he.__hasExternalTextures){const ge=Math.max(1,b.width>>ae),fe=Math.max(1,b.height>>ae);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,ee,ge,fe,b.depth,0,ce,$,null):t.texImage2D(j,ae,ee,ge,fe,0,ce,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,y),Lt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,j,Ie.__webglTexture,0,_t(b)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,j,Ie.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(y,b,N){if(s.bindRenderbuffer(s.RENDERBUFFER,y),b.depthBuffer){const z=b.depthTexture,j=z&&z.isDepthTexture?z.type:null,ae=S(b.stencilBuffer,j),ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Lt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(b),ae,b.width,b.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(b),ae,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ae,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,y)}else{const z=b.textures;for(let j=0;j<z.length;j++){const ae=z[j],ce=a.convert(ae.format,ae.colorSpace),$=a.convert(ae.type),ee=x(ae.internalFormat,ce,$,ae.normalized,ae.colorSpace);Lt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(b),ee,b.width,b.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(b),ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(y,b,N){const z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,y),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(b.depthTexture);if(j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z){if(j.__webglInit===void 0&&(j.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),G(s.TEXTURE_CUBE_MAP,b.depthTexture);const he=a.convert(b.depthTexture.format),Ie=a.convert(b.depthTexture.type);let ge;b.depthTexture.format===hi?ge=s.DEPTH_COMPONENT24:b.depthTexture.format===Oi&&(ge=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,b.width,b.height,0,he,Ie,null)}}else te(b.depthTexture,0);const ae=j.__webglTexture,ce=_t(b),$=z?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,ee=b.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===hi)Lt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,$,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,ee,$,ae,0);else if(b.depthTexture.format===Oi)Lt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,$,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,ee,$,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(y){const b=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==y.depthTexture){const z=y.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),z){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,z.removeEventListener("dispose",j)};z.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=z}if(y.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let z=0;z<6;z++)bt(b.__webglFramebuffer[z],y,z);else{const z=y.texture.mipmaps;z&&z.length>0?bt(b.__webglFramebuffer[0],y,0):bt(b.__webglFramebuffer,y,0)}else if(N){b.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[z]),b.__webglDepthbuffer[z]===void 0)b.__webglDepthbuffer[z]=s.createRenderbuffer(),Se(b.__webglDepthbuffer[z],y,!1);else{const j=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[z];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ae)}}else{const z=y.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Se(b.__webglDepthbuffer,y,!1);else{const j=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(y,b,N){const z=n.get(y);b!==void 0&&re(z.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&He(y)}function at(y){const b=y.texture,N=n.get(y),z=n.get(b);y.addEventListener("dispose",_);const j=y.textures,ae=y.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=b.version,r.memory.textures++),ae){N.__webglFramebuffer=[];for(let $=0;$<6;$++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[$]=[];for(let ee=0;ee<b.mipmaps.length;ee++)N.__webglFramebuffer[$][ee]=s.createFramebuffer()}else N.__webglFramebuffer[$]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let $=0;$<b.mipmaps.length;$++)N.__webglFramebuffer[$]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ce)for(let $=0,ee=j.length;$<ee;$++){const he=n.get(j[$]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),r.memory.textures++)}if(y.samples>0&&Lt(y)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){const ee=j[$];N.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[$]);const he=a.convert(ee.format,ee.colorSpace),Ie=a.convert(ee.type),ge=x(ee.internalFormat,he,Ie,ee.normalized,ee.colorSpace,y.isXRRenderTarget===!0),fe=_t(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ge,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,N.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),G(s.TEXTURE_CUBE_MAP,b);for(let $=0;$<6;$++)if(b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)re(N.__webglFramebuffer[$][ee],y,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else re(N.__webglFramebuffer[$],y,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(b)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,ee=j.length;$<ee;$++){const he=j[$],Ie=n.get(he);let ge=s.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ge=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ie.__webglTexture),G(ge,he),re(N.__webglFramebuffer,y,he,s.COLOR_ATTACHMENT0+$,ge,0),p(he)&&M(ge)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,z.__webglTexture),G($,b),b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)re(N.__webglFramebuffer[ee],y,b,s.COLOR_ATTACHMENT0,$,ee);else re(N.__webglFramebuffer,y,b,s.COLOR_ATTACHMENT0,$,0);p(b)&&M($),t.unbindTexture()}y.depthBuffer&&He(y)}function We(y){const b=y.textures;for(let N=0,z=b.length;N<z;N++){const j=b[N];if(p(j)){const ae=w(y),ce=n.get(j).__webglTexture;t.bindTexture(ae,ce),M(ae),t.unbindTexture()}}}const xt=[],it=[];function At(y){if(y.samples>0){if(Lt(y)===!1){const b=y.textures,N=y.width,z=y.height;let j=s.COLOR_BUFFER_BIT;const ae=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(y),$=b.length>1;if($)for(let he=0;he<b.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ee=y.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<b.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ie=n.get(b[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,N,z,0,0,N,z,j,s.NEAREST),c===!0&&(xt.length=0,it.length=0,xt.push(s.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(xt.push(ae),it.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let he=0;he<b.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ie=n.get(b[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){const b=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function _t(y){return Math.min(i.maxSamples,y.samples)}function Lt(y){const b=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(y){const b=r.render.frame;h.get(y)!==b&&(h.set(y,b),y.update())}function zt(y,b){const N=y.colorSpace,z=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==mn&&N!==Si&&(et.getTransfer(N)===dt?(z!==an||j!==fn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",N)),b}function rt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=at,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $v(s,e){function t(n,i=Si){let a;const r=et.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===Qc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===el)return s.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return s.BYTE;if(n===nu)return s.SHORT;if(n===ga)return s.UNSIGNED_SHORT;if(n===$c)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===au)return s.ALPHA;if(n===ru)return s.RGB;if(n===an)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===tl)return s.RED;if(n===nl)return s.RED_INTEGER;if(n===Vi)return s.RG;if(n===il)return s.RG_INTEGER;if(n===sl)return s.RGBA_INTEGER;if(n===Sr||n===wr||n===Tr||n===Er)if(r===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===lc||n===hc||n===dc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===fc||n===pc||n===mc||n===gc||n===Ir||n===bc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===uc||n===fc)return r===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===pc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===mc)return a.COMPRESSED_R11_EAC;if(n===gc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return a.COMPRESSED_RG11_EAC;if(n===bc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===_c||n===vc||n===Mc||n===yc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===xc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Dc||n===Nc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ic)return r===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Uc||n===Dr||n===kc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Fc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ba?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:Qv,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends Ri{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new tM,p={},M=t.getContextAttributes();let w=null,x=null;const S=[],E=[],R=new ue;let _=null,A=null;const C=new sn;C.viewport=new pt;const L=new sn;L.viewport=new pt;const I=[C,L],O=new Zg;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=S[H];return Q===void 0&&(Q=new fo,S[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=S[H];return Q===void 0&&(Q=new fo,S[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=S[H];return Q===void 0&&(Q=new fo,S[H]=Q),Q.getHandSpace()};function K(H){const Q=E.indexOf(H.inputSource);if(Q===-1)return;const le=S[Q];le!==void 0&&(le.update(H.inputSource,H.frame,l||r),le.dispatchEvent({type:H.type,data:H.inputSource}))}function V(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",te);for(let H=0;H<S.length;H++){const Q=E[H];Q!==null&&(E[H]=null,S[H].disconnect(Q))}D=null,B=null,m.reset();for(const H in p)delete p[H];if(e.setRenderTarget(w),f=null,u=null,d=null,i=null,x=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),A!==null){const H=A.camera;H.fov=A.fov,H.zoom=A.zoom,H.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",V),i.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ue=null,re=null;M.depth&&(re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Oi:hi,Ue=M.stencil?ba:qn);const Se={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Se),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new In(u.textureWidth,u.textureHeight,{format:an,type:fn,depthTexture:new Sa(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new In(f.framebufferWidth,f.framebufferHeight,{format:an,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(H){for(let Q=0;Q<H.removed.length;Q++){const le=H.removed[Q],Ue=E.indexOf(le);Ue>=0&&(E[Ue]=null,S[Ue].disconnect(le))}for(let Q=0;Q<H.added.length;Q++){const le=H.added[Q];let Ue=E.indexOf(le);if(Ue===-1){for(let Se=0;Se<S.length;Se++)if(Se>=E.length){E.push(le),Ue=Se;break}else if(E[Se]===null){E[Se]=le,Ue=Se;break}if(Ue===-1)break}const re=S[Ue];re&&re.connect(le)}}const Z=new P,ne=new P;function q(H,Q,le){Z.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(le.matrixWorld);const Ue=Z.distanceTo(ne),re=Q.projectionMatrix.elements,Se=le.projectionMatrix.elements,bt=re[14]/(re[10]-1),He=re[14]/(re[10]+1),Ke=(re[9]+1)/re[5],at=(re[9]-1)/re[5],We=(re[8]-1)/re[0],xt=(Se[8]+1)/Se[0],it=bt*We,At=bt*xt,_t=Ue/(-We+xt),Lt=_t*-We;if(Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Lt),H.translateZ(_t),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),re[10]===-1)H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const F=bt+_t,zt=He+_t,rt=it-Lt,y=At+(Ue-Lt),b=Ke*He/zt*F,N=at*He/zt*F;H.projectionMatrix.makePerspective(rt,y,b,N,F,zt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function _e(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let Q=H.near,le=H.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(le=m.depthFar)),O.near=L.near=C.near=Q,O.far=L.far=C.far=le,(D!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=H.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Ue=H.parent,re=O.cameras;_e(O,Ue);for(let Se=0;Se<re.length;Se++)_e(re[Se],Ue);re.length===2?q(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),A===null&&H.isPerspectiveCamera&&(A={camera:H,fov:H.fov,zoom:H.zoom}),Me(H,O,Ue)};function Me(H,Q,le){le===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ls*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(H){c=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(H){return p[H]};let tt=null;function G(H,Q){if(h=Q.getViewerPose(l||r),g=Q,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ue=!1;le.length!==O.cameras.length&&(O.cameras.length=0,Ue=!0);for(let He=0;He<le.length;He++){const Ke=le[He];let at=null;if(f!==null)at=f.getViewport(Ke);else{const xt=d.getViewSubImage(u,Ke);at=xt.viewport,He===0&&(e.setRenderTargetTextures(x,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(x))}let We=I[He];We===void 0&&(We=new sn,We.layers.enable(He),We.viewport=new pt,I[He]=We),We.matrix.fromArray(Ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(at.x,at.y,at.width,at.height),He===0&&(O.matrix.copy(We.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ue===!0&&O.cameras.push(We)}const re=i.enabledFeatures;if(re&&re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const He=d.getDepthInformation(le[0]);He&&He.isValid&&He.texture&&m.init(He,i.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<le.length;He++){const Ke=le[He].camera;if(Ke){let at=p[Ke];at||(at=new yu,p[Ke]=at);const We=d.getCameraImage(Ke);at.sourceTexture=We}}}}for(let le=0;le<S.length;le++){const Ue=E[le],re=S[le];Ue!==null&&re!==void 0&&re.update(Ue,Q,l||r)}tt&&tt(H,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const oe=new Bu;oe.setAnimationLoop(G),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}const iM=new Ve,qu=new Ge;qu.set(-1,0,0,0,1,0,0,0,1);function sM(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aM(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const E=S.program;n.uniformBlockBinding(x,E)}function l(x,S){let E=i[x.id];E===void 0&&(m(x),E=h(x),i[x.id]=E,x.addEventListener("dispose",M));const R=S.program;n.updateUBOMapping(x,R);const _=e.render.frame;a[x.id]!==_&&(u(x),a[x.id]=_)}function h(x){const S=d();x.__bindingPointIndex=S;const E=s.createBuffer(),R=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=i[x.id],E=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,A=E.length;_<A;_++){const C=E[_];if(Array.isArray(C))for(let L=0,I=C.length;L<I;L++)f(C[L],_,L,R);else f(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,E,R){if(v(x,S,E,R)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let C=0;for(let L=0;L<A.length;L++){const I=A[L],O=p(I);g(I,x.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,E){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,E)}function v(x,S,E,R){const _=x.value,A=S+"_"+E;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const C=R[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){const S=x.uniforms;let E=0;const R=16;for(let A=0,C=S.length;A<C;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let I=0,O=L.length;I<O;I++){const D=L[I],B=Array.isArray(D.value)?D.value:[D.value];for(let K=0,V=B.length;K<V;K++){const te=B[K],Z=p(te),ne=E%R,q=ne%Z.boundary,_e=ne+q;E+=q,_e!==0&&R-_e<Z.storage&&(E+=R-_e),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Z.storage}}}const _=E%R;return _>0&&(E+=R-_),x.__size=E,x.__cache={},this}function p(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){const S=x.target;S.removeEventListener("dispose",M);const E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete a[S.id]}function w(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},a={}}return{bind:c,update:l,dispose:w}}const rM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function oM(){return kn===null&&(kn=new Ia(rM,16,16,Vi,Kn),kn.name="DFG_LUT",kn.minFilter=Ht,kn.magFilter=Ht,kn.wrapS=Vn,kn.wrapT=Vn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class cM{constructor(e={}){const{canvas:t=qp(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const v=f,m=new Set([sl,il,nl]),p=new Set([fn,qn,ga,ba,Qc,el]),M=new Uint32Array(4),w=new Int32Array(4),x=new P;let S=null,E=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,I=null,O=null,D=null,B=null;this._outputColorSpace=It;let K=0,V=0,te=null,Z=-1,ne=null;const q=new pt,_e=new pt;let Me=null;const tt=new Fe(0);let G=0,oe=t.width,H=t.height,Q=1,le=null,Ue=null;const re=new pt(0,0,oe,H),Se=new pt(0,0,oe,H);let bt=!1;const He=new pl;let Ke=!1,at=!1;const We=new Ve,xt=new P,it=new pt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Lt(){return te===null?Q:1}let F=n;function zt(T,U){return t.getContext(T,U)}let rt,y,b,N,z,j,ae,ce,$,ee,he,Ie,ge,fe,De,Be,Xe,k,pe,ie,me,ye,se;try{const T={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zc}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",An,!1),F===null){const U="webgl2";if(F=zt(U,T),F===null)throw zt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(T){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",An,!1),ze("WebGLRenderer: "+T.message),T}function Ne(){rt=new o_(F),rt.init(),me=new $v(F,rt),y=new Zx(F,rt,e,me),b=new Yv(F,rt),y.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),O=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),N=new h_(F),z=new Uv,j=new Zv(F,rt,b,z,y,me,N),ae=new r_(C),ce=new u0(F),ye=new Jx(F,ce),$=new c_(F,ce,N,ye),ee=new u_(F,$,ce,ye,N),k=new d_(F,y,j),De=new $x(z),he=new Fv(C,ae,rt,y,ye,De),Ie=new sM(C,z),ge=new Ov,fe=new Wv(rt),Xe=new jx(C,ae,b,ee,g,c),Be=new Jv(C,ee,y),se=new aM(F,N,y,b),pe=new Yx(F,rt,N),ie=new l_(F,rt,N),N.programs=he.programs,C.capabilities=y,C.extensions=rt,C.properties=z,C.renderLists=ge,C.shadowMap=Be,C.state=b,C.info=N}v!==fn&&(A=new p_(v,t.width,t.height,o,i,a));const Ce=new nM(C,F);this.xr=Ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(oe,H,!1))},this.getSize=function(T){return T.set(oe,H)},this.setSize=function(T,U,J=!0){if(Ce.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,H=U,t.width=Math.floor(T*Q),t.height=Math.floor(U*Q),J===!0&&(t.style.width=T+"px",t.style.height=U+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(oe*Q,H*Q).floor()},this.setDrawingBufferSize=function(T,U,J){oe=T,H=U,Q=J,t.width=Math.floor(T*J),t.height=Math.floor(U*J),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(v===fn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(q)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,U,J,W){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,U,J,W),b.viewport(q.copy(re).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,U,J,W){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,U,J,W),b.scissor(_e.copy(Se).multiplyScalar(Q).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(T){b.setScissorTest(bt=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){Ue=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,J=!0){let W=0;if(T){let X=!1;if(te!==null){const ve=te.texture.format;X=m.has(ve)}if(X){const ve=te.texture.type,Ee=p.has(ve),xe=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Pe=xe.r,je=xe.g,Qe=xe.b;Ee?(M[0]=Pe,M[1]=je,M[2]=Qe,M[3]=Ae,F.clearBufferuiv(F.COLOR,0,M)):(w[0]=Pe,w[1]=je,w[2]=Qe,w[3]=Ae,F.clearBufferiv(F.COLOR,0,w))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",An,!1),Xe.dispose(),ge.dispose(),fe.dispose(),z.dispose(),ae.dispose(),ee.dispose(),ye.dispose(),se.dispose(),he.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Dl),Ce.removeEventListener("sessionend",Nl),Ci.stop()};function vt(T){T.preventDefault(),Ur("WebGLRenderer: Context Lost."),L=!0}function ct(){Ur("WebGLRenderer: Context Restored."),L=!1;const T=N.autoReset,U=Be.enabled,J=Be.autoUpdate,W=Be.needsUpdate,X=Be.type;Ne(),N.autoReset=T,Be.enabled=U,Be.autoUpdate=J,Be.needsUpdate=W,Be.type=X}function An(T){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nn(T){const U=T.target;U.removeEventListener("dispose",Nn),nf(U)}function nf(T){sf(T),z.remove(T)}function sf(T){const U=z.get(T).programs;U!==void 0&&(U.forEach(function(J){he.releaseProgram(J)}),T.isShaderMaterial&&he.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,J,W,X,ve){U===null&&(U=At);const Ee=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=of(T,U,J,W,X);b.setMaterial(W,Ee);let Ae=J.index,Pe=1;if(W.wireframe===!0){if(Ae=$.getWireframeAttribute(J),Ae===void 0)return;Pe=2}const je=J.drawRange,Qe=J.attributes.position;let Re=je.start*Pe,lt=(je.start+je.count)*Pe;ve!==null&&(Re=Math.max(Re,ve.start*Pe),lt=Math.min(lt,(ve.start+ve.count)*Pe)),Ae!==null?(Re=Math.max(Re,0),lt=Math.min(lt,Ae.count)):Qe!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,Qe.count));const kt=lt-Re;if(kt<0||kt===1/0)return;ye.setup(X,W,xe,J,Ae);let St,mt=pe;if(Ae!==null&&(St=ce.get(Ae),mt=ie,mt.setIndex(St)),X.isMesh)W.wireframe===!0?(b.setLineWidth(W.wireframeLinewidth*Lt()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(X.isLine){let Jt=W.linewidth;Jt===void 0&&(Jt=1),b.setLineWidth(Jt*Lt()),X.isLineSegments?mt.setMode(F.LINES):X.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else X.isPoints?mt.setMode(F.POINTS):X.isSprite&&mt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Jt=X._multiDrawStarts,Te=X._multiDrawCounts,$t=X._multiDrawCount,st=Ae?ce.get(Ae).bytesPerElement:1,gn=z.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<$t;Fn++)gn.setValue(F,"_gl_DrawID",Fn),mt.render(Jt[Fn]/st,Te[Fn])}else if(X.isInstancedMesh)mt.renderInstances(Re,kt,X.count);else if(J.isInstancedBufferGeometry){const Jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Te=Math.min(J.instanceCount,Jt);mt.renderInstances(Re,kt,Te)}else mt.render(Re,kt)};function Il(T,U,J,W){I!==null&&T.isNodeMaterial&&I.setObject(W,T),Ke===!0&&De.setState(T,J,!1),T.transparent===!0&&T.side===Gt&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Oa(T,U,W),T.side=Ei,T.needsUpdate=!0,Oa(T,U,W),T.side=Gt):Oa(T,U,W)}this.compile=function(T,U,J=null){J===null&&(J=T),I!==null&&I.renderStart(T,U,J),E=fe.get(J),E.init(U),_.push(E),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),T!==J&&T.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),at=this.localClippingEnabled,Ke=De.init(this.clippingPlanes,at),Ke===!0&&De.setGlobalState(this.clippingPlanes,U),I!==null&&Be.render(E.state.shadowsArray,J,U);const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ve=X.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const xe=ve[Ee];Il(xe,J,U,X),W.add(xe)}else Il(ve,J,U,X),W.add(ve)}),E=_.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(T,U,J=null){const W=this.compile(T,U,J);return new Promise(X=>{function ve(){if(W.forEach(function(Ee){const Ae=z.get(Ee).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(Ee)}),W.size===0){X(T);return}setTimeout(ve,10)}rt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Jr=null;function af(T){Jr&&Jr(T)}function Dl(){Ci.stop()}function Nl(){Ci.start()}const Ci=new Bu;Ci.setAnimationLoop(af),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){Jr=T,Ce.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},Ce.addEventListener("sessionstart",Dl),Ce.addEventListener("sessionend",Nl),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(T,U);const J=Ce.enabled===!0&&Ce.isPresenting===!0,W=A!==null&&(te===null||J)&&A.begin(C,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(U),U=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,te),E=fe.get(T,_.length),E.init(U),E.state.textureUnits=j.getTextureUnits(),_.push(E),We.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(We,Wn,U.reversedDepth),at=this.localClippingEnabled,Ke=De.init(this.clippingPlanes,at),S=ge.get(T,R.length),S.init(),R.push(S),Ce.enabled===!0&&Ce.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Yr(Ee,U,-1/0,C.sortObjects)}Yr(T,U,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(le,Ue),_t=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,_t&&Xe.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&De.beginShadows();const X=E.state.shadowsArray;if(Be.render(X,T,U),Ke===!0&&De.endShadows(),(W&&A.hasRenderPass())===!1){const Ee=S.opaque,xe=S.transmissive;if(E.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(xe.length>0)for(let Pe=0,je=Ae.length;Pe<je;Pe++){const Qe=Ae[Pe];Ul(Ee,xe,T,Qe)}_t&&Xe.render(T);for(let Pe=0,je=Ae.length;Pe<je;Pe++){const Qe=Ae[Pe];Fl(S,T,Qe,Qe.viewport)}}else xe.length>0&&Ul(Ee,xe,T,U),_t&&Xe.render(T),Fl(S,T,U)}te!==null&&V===0&&(j.updateMultisampleRenderTarget(te),j.updateRenderTargetMipmap(te)),W&&A.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),ye.resetDefaultState(),Z=-1,ne=null,_.pop(),_.length>0?(E=_[_.length-1],j.setTextureUnits(E.state.textureUnits),Ke===!0&&De.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,I!==null&&I.renderEnd()};function Yr(T,U,J,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(He)){W&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);const Ee=ee.update(T),xe=T.material;xe.visible&&S.push(T,Ee,xe,J,it.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(He))){const Ee=ee.update(T),xe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),it.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),it.copy(Ee.boundingSphere.center)),it.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray(xe)){const Ae=Ee.groups;for(let Pe=0,je=Ae.length;Pe<je;Pe++){const Qe=Ae[Pe],Re=xe[Qe.materialIndex];Re&&Re.visible&&S.push(T,Ee,Re,J,it.z,Qe,U)}}else xe.visible&&S.push(T,Ee,xe,J,it.z,null,U)}}const ve=T.children;for(let Ee=0,xe=ve.length;Ee<xe;Ee++)Yr(ve[Ee],U,J,W)}function Fl(T,U,J,W){const{opaque:X,transmissive:ve,transparent:Ee}=T;E.setupLightsView(J),Ke===!0&&De.setGlobalState(C.clippingPlanes,J),W&&b.viewport(q.copy(W)),X.length>0&&ka(X,U,J),ve.length>0&&ka(ve,U,J),Ee.length>0&&ka(Ee,U,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ul(T,U,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Re=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new In(1,1,{generateMipmaps:!0,type:Re?Kn:fn,minFilter:ri,samples:Math.max(4,y.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ve=E.state.transmissionRenderTarget[W.id],Ee=W.viewport||q;ve.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const xe=C.getRenderTarget(),Ae=C.getActiveCubeFace(),Pe=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(tt),G=C.getClearAlpha(),G<1&&C.setClearColor(16777215,.5),C.clear(),_t&&Xe.render(J);const je=C.toneMapping;C.toneMapping=Xn;const Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Ke===!0&&De.setGlobalState(C.clippingPlanes,W),ka(T,J,W),j.updateMultisampleRenderTarget(ve),j.updateRenderTargetMipmap(ve),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let lt=0,kt=U.length;lt<kt;lt++){const St=U[lt],{object:mt,geometry:Jt,material:Te,group:$t}=St;if(Te.side===Gt&&mt.layers.test(W.layers)){const st=Te.side;Te.side=tn,Te.needsUpdate=!0,kl(mt,J,W,Jt,Te,$t),Te.side=st,Te.needsUpdate=!0,Re=!0}}Re===!0&&(j.updateMultisampleRenderTarget(ve),j.updateRenderTargetMipmap(ve))}C.setRenderTarget(xe,Ae,Pe),C.setClearColor(tt,G),Qe!==void 0&&(W.viewport=Qe),C.toneMapping=je}function ka(T,U,J){const W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,ve=T.length;X<ve;X++){const Ee=T[X],{object:xe,geometry:Ae,group:Pe}=Ee;let je=Ee.material;je.allowOverride===!0&&W!==null&&(je=W),xe.layers.test(J.layers)&&kl(xe,U,J,Ae,je,Pe)}}function kl(T,U,J,W,X,ve){I!==null&&X.isNodeMaterial&&I.setObject(T,X),T.onBeforeRender(C,U,J,W,X,ve),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,U,J,W,T,ve),X.transparent===!0&&X.side===Gt&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,C.renderBufferDirect(J,U,W,X,T,ve),X.side=Ei,X.needsUpdate=!0,C.renderBufferDirect(J,U,W,X,T,ve),X.side=Gt):C.renderBufferDirect(J,U,W,X,T,ve),T.onAfterRender(C,U,J,W,X,ve)}function Oa(T,U,J){U.isScene!==!0&&(U=At);const W=z.get(T),X=E.state.lights,ve=E.state.shadowsArray,Ee=X.state.version,xe=he.getParameters(T,X.state,ve,U,J,E.state.lightProbeGridArray),Ae=he.getProgramCacheKey(xe);let Pe=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=ae.get(T.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Nn),Pe=new Map,W.programs=Pe);let Qe=Pe.get(Ae);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Ee)return Bl(T,xe),Qe}else xe.uniforms=he.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,J,xe),T.onBeforeCompile(xe,C),Qe=he.acquireProgram(xe,Ae),Pe.set(Ae,Qe),W.uniforms=xe.uniforms;const Re=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=De.uniform),Bl(T,xe),W.needsLights=lf(T),W.lightsStateVersion=Ee,W.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.sunLights.value=X.state.sun,Re.sunLightShadows.value=X.state.sunShadow,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.sunShadowMatrix.value=X.state.sunShadowMatrix,Re.sunShadowCascade.value=X.state.sunShadowCascade,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=Qe,W.uniformsList=null,Qe}function Ol(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Rr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Bl(T,U){const J=z.get(T);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function rf(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let J=0,W=T.length;J<W;J++){const X=T[J];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function of(T,U,J,W,X){U.isScene!==!0&&(U=At),j.resetTextureUnits();const ve=U.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,xe=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=ae.get(W.envMap||Ee,Ae),je=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,kt=!!J.morphAttributes.color;let St=Xn;W.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(St=C.toneMapping);const mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Jt=mt!==void 0?mt.length:0,Te=z.get(W),$t=E.state.lights;if(Ke===!0&&(at===!0||T!==ne)){const Mt=T===ne&&W.id===Z;De.setState(W,T,Mt)}let st=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==$t.state.version||Te.outputColorSpace!==xe||X.isBatchedMesh&&Te.batching===!1||!X.isBatchedMesh&&Te.batching===!0||X.isBatchedMesh&&Te.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Te.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Te.instancing===!1||!X.isInstancedMesh&&Te.instancing===!0||X.isSkinnedMesh&&Te.skinning===!1||!X.isSkinnedMesh&&Te.skinning===!0||X.isInstancedMesh&&Te.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Te.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Te.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Te.instancingMorph===!1&&X.morphTexture!==null||Te.envMap!==Pe||W.fog===!0&&Te.fog!==ve||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==De.numPlanes||Te.numIntersection!==De.numIntersection)||Te.vertexAlphas!==je||Te.vertexTangents!==Qe||Te.morphTargets!==Re||Te.morphNormals!==lt||Te.morphColors!==kt||Te.toneMapping!==St||Te.morphTargetsCount!==Jt||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Te.__version=W.version);let gn=Te.currentProgram;st===!0&&(gn=Oa(W,U,X),I&&W.isNodeMaterial&&I.onUpdateProgram(W,gn,Te));let Fn=!1,di=!1,Xi=!1;const ft=gn.getUniforms(),Ft=Te.uniforms;if(b.useProgram(gn.program)&&(Fn=!0,di=!0,Xi=!0),W.id!==Z&&(Z=W.id,di=!0),Te.needsLights){const Mt=rf(E.state.lightProbeGridArray,X);Te.lightProbeGrid!==Mt&&(Te.lightProbeGrid=Mt,di=!0)}if(Fn||ne!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(F,"projectionMatrix",T.projectionMatrix),ft.setValue(F,"viewMatrix",T.matrixWorldInverse);const fi=ft.map.cameraPosition;fi!==void 0&&fi.setValue(F,xt.setFromMatrixPosition(T.matrixWorld)),y.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,di=!0,Xi=!0)}if(Te.needsLights&&($t.state.sunShadowMap.length>0&&ft.setValue(F,"sunShadowMap",$t.state.sunShadowMap,j),$t.state.directionalShadowMap.length>0&&ft.setValue(F,"directionalShadowMap",$t.state.directionalShadowMap,j),$t.state.spotShadowMap.length>0&&ft.setValue(F,"spotShadowMap",$t.state.spotShadowMap,j),$t.state.pointShadowMap.length>0&&ft.setValue(F,"pointShadowMap",$t.state.pointShadowMap,j)),X.isSkinnedMesh){ft.setOptional(F,X,"bindMatrix"),ft.setOptional(F,X,"bindMatrixInverse");const Mt=X.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),ft.setValue(F,"boneTexture",Mt.boneTexture,j))}X.isBatchedMesh&&(ft.setOptional(F,X,"batchingTexture"),ft.setValue(F,"batchingTexture",X._matricesTexture,j),ft.setOptional(F,X,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",X._indirectTexture,j),ft.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",X._colorsTexture,j));const ui=J.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&k.update(X,J,gn),(di||Te.receiveShadow!==X.receiveShadow)&&(Te.receiveShadow=X.receiveShadow,ft.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Ft.envMapIntensity.value=U.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=oM()),di){if(ft.setValue(F,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&cf(Ft,Xi),ve&&W.fog===!0&&Ie.refreshFogUniforms(Ft,ve),Ie.refreshMaterialUniforms(Ft,W,Q,H,E.state.transmissionRenderTarget[T.id]),Te.needsLights&&Te.lightProbeGrid){const Mt=Te.lightProbeGrid;Ft.probesSH.value=Mt.texture,Ft.probesMin.value.copy(Mt.boundingBox.min),Ft.probesMax.value.copy(Mt.boundingBox.max),Ft.probesResolution.value.copy(Mt.resolution)}Rr.upload(F,Ol(Te),Ft,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Rr.upload(F,Ol(Te),Ft,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(F,"center",X.center),ft.setValue(F,"modelViewMatrix",X.modelViewMatrix),ft.setValue(F,"normalMatrix",X.normalMatrix),ft.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let fi=0,qi=Mt.length;fi<qi;fi++){const Gl=Mt[fi];se.update(Gl,gn),se.bind(Gl,gn)}}return gn}function cf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function lf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,U,J){const W=z.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),z.get(T.texture).__webglTexture=U,z.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const J=z.get(T);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,J=0){te=T,K=U,V=J;let W=null,X=!1,ve=!1;if(T){const xe=z.get(T);if(xe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),q.copy(T.viewport),_e.copy(T.scissor),Me=T.scissorTest,b.viewport(q),b.scissor(_e),b.setScissorTest(Me),Z=-1;return}else if(xe.__webglFramebuffer===void 0)j.setupRenderTarget(T);else if(xe.__hasExternalTextures)j.rebindTextures(T,z.get(T.texture).__webglTexture,z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(xe.__boundDepthTexture!==je){if(je!==null&&z.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Pe=z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?W=Pe[U][J]:W=Pe[U],X=!0):T.samples>0&&j.useMultisampledRTT(T)===!1?W=z.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[J]:W=Pe,q.copy(T.viewport),_e.copy(T.scissor),Me=T.scissorTest}else q.copy(re).multiplyScalar(Q).floor(),_e.copy(Se).multiplyScalar(Q).floor(),Me=bt;if(J!==0&&(W=O),b.bindFramebuffer(F.FRAMEBUFFER,W)&&b.drawBuffers(T,W),b.viewport(q),b.scissor(_e),b.setScissorTest(Me),X){const xe=z.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,J)}else if(ve){const xe=U;for(let Ae=0;Ae<T.textures.length;Ae++){const Pe=z.get(T.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,J,xe)}}else if(T!==null&&J!==0){const xe=z.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,J)}Z=-1};function zl(T){const U=z.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=y.textureFormatReadable(T.format),U.__typeReadable=y.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,J,W,X,ve,Ee,xe=0){if(!(T&&T.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){b.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Pe=T.textures[xe],je=Pe.format,Qe=Pe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);const Re=zl(Pe);if(Re.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&J>=0&&J<=T.height-X&&F.readPixels(U,J,W,X,me.convert(je),me.convert(Qe),ve)}finally{const Pe=te!==null?z.get(te).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,U,J,W,X,ve,Ee,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(U>=0&&U<=T.width-W&&J>=0&&J<=T.height-X){b.bindFramebuffer(F.FRAMEBUFFER,Ae);const Pe=T.textures[xe],je=Pe.format,Qe=Pe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);const Re=zl(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(U,J,W,X,me.convert(je),me.convert(Qe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const kt=te!==null?z.get(te).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,kt);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kp(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(lt),F.deleteSync(St),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,J=0){const W=Math.pow(2,-J),X=Math.floor(T.image.width*W),ve=Math.floor(T.image.height*W),Ee=U!==null?U.x:0,xe=U!==null?U.y:0;j.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Ee,xe,X,ve),b.unbindTexture()},this.copyTextureToTexture=function(T,U,J=null,W=null,X=0,ve=0){let Ee,xe,Ae,Pe,je,Qe,Re,lt,kt;const St=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(J!==null)Ee=J.max.x-J.min.x,xe=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Pe=J.min.x,je=J.min.y,Qe=J.isBox3?J.min.z:0;else{const Ft=Math.pow(2,-X);Ee=Math.floor(St.width*Ft),xe=Math.floor(St.height*Ft),T.isDataArrayTexture?Ae=St.depth:T.isData3DTexture?Ae=Math.floor(St.depth*Ft):Ae=1,Pe=0,je=0,Qe=0}W!==null?(Re=W.x,lt=W.y,kt=W.z):(Re=0,lt=0,kt=0);const mt=me.convert(U.format),Jt=me.convert(U.type);let Te;U.isData3DTexture?(j.setTexture3D(U,0),Te=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(j.setTexture2DArray(U,0),Te=F.TEXTURE_2D_ARRAY):(j.setTexture2D(U,0),Te=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=b.getParameter(F.UNPACK_ROW_LENGTH),st=b.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=b.getParameter(F.UNPACK_SKIP_PIXELS),Fn=b.getParameter(F.UNPACK_SKIP_ROWS),di=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),b.pixelStorei(F.UNPACK_SKIP_ROWS,je),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);const Xi=T.isDataArrayTexture||T.isData3DTexture,ft=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Ft=z.get(T),ui=z.get(U),Mt=z.get(Ft.__renderTarget),fi=z.get(ui.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Mt.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let qi=0;qi<Ae;qi++)Xi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(T).__webglTexture,X,Qe+qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(U).__webglTexture,ve,kt+qi)),F.blitFramebuffer(Pe,je,Ee,xe,Re,lt,Ee,xe,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||z.has(T)){const Ft=z.get(T),ui=z.get(U);b.bindFramebuffer(F.READ_FRAMEBUFFER,D),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Mt=0;Mt<Ae;Mt++)Xi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,X,Qe+Mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,X),ft?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ui.__webglTexture,ve,kt+Mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ui.__webglTexture,ve),X!==0?F.blitFramebuffer(Pe,je,Ee,xe,Re,lt,Ee,xe,F.COLOR_BUFFER_BIT,F.NEAREST):ft?F.copyTexSubImage3D(Te,ve,Re,lt,kt+Mt,Pe,je,Ee,xe):F.copyTexSubImage2D(Te,ve,Re,lt,Pe,je,Ee,xe);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ft?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Te,ve,Re,lt,kt,Ee,xe,Ae,mt,Jt,St.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,ve,Re,lt,kt,Ee,xe,Ae,mt,St.data):F.texSubImage3D(Te,ve,Re,lt,kt,Ee,xe,Ae,mt,Jt,St):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Re,lt,Ee,xe,mt,Jt,St.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Re,lt,St.width,St.height,mt,St.data):F.texSubImage2D(F.TEXTURE_2D,ve,Re,lt,Ee,xe,mt,Jt,St);b.pixelStorei(F.UNPACK_ROW_LENGTH,$t),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),b.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),b.pixelStorei(F.UNPACK_SKIP_ROWS,Fn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,di),ve===0&&U.generateMipmaps&&F.generateMipmap(Te),b.unbindTexture()},this.initRenderTarget=function(T){z.get(T).__webglFramebuffer===void 0&&j.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?j.setTextureCube(T,0):T.isData3DTexture?j.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?j.setTexture2DArray(T,0):j.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){K=0,V=0,te=null,b.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Sd(s,e){if(e===Np)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Bc||e===cu){let t=s.getIndex();if(t===null){const a=[],r=s.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)a.push(o);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Bc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function El(s){const e=new Map,t=new Map,n=s.clone();return Ku(s,n,function(i,a){e.set(a,i),t.set(i,a)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const a=i,r=e.get(i),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(c){return t.get(c)}),a.bind(a.skeleton,a.bindMatrix)}),n}function Ku(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Ku(s.children[n],e.children[n],t)}class lM extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new wd(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wd(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new AM(t)})}load(e,t,n,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=pa.extractUrlBase(e);r=pa.resolveURL(l,this.path)}else r=pa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Fu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ju){try{r[$e.KHR_BINARY_GLTF]=new RM(e)}catch(d){i&&i(d);return}a=JSON.parse(r[$e.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new GM(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const d=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:r[d]=new uM;break;case $e.KHR_DRACO_MESH_COMPRESSION:r[d]=new CM(a,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:r[d]=new PM;break;case $e.KHR_MESH_QUANTIZATION:r[d]=new LM;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function hM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Ut(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],mn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ku(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kg(h),l.distance=d;break;case"spot":l=new Xg(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class uM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],mn),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,It))}return Promise.all(i)}}class fM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const a=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(i)}}class mM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class gM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class bM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const a=n.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,It)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class xM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class _M{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const a=n.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],mn),Promise.all(i)}}class vM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class MM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const a=n.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],mn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,It)),Promise.all(i)}}class yM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class SM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class wM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class TM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class EM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class wd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class AM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const v=new Ve,m=new P,p=new nn,M=new P(1,1,1),w=new xu(g.geometry,g.material,u);for(let S=0;S<u;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),w.setMatrixAt(S,v.compose(m,p,M));let x=null;for(const S in c)if(S==="_COLOR_0"){const E=c[S];w.instanceColor=new kr(E.array,E.itemSize,E.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(x===null){const R=w.geometry;x=new Et,x.name=R.name;for(const _ in R.attributes)x.setAttribute(_,R.attributes[_]);for(const _ in R.morphAttributes)x.morphAttributes[_]=R.morphAttributes[_];R.index!==null&&x.setIndex(R.index),x.morphTargetsRelative=R.morphTargetsRelative;for(const _ of R.groups)x.addGroup(_.start,_.count,_.materialIndex);R.boundingBox!==null&&(x.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(x.boundingSphere=R.boundingSphere.clone()),x.drawRange.start=R.drawRange.start,x.drawRange.count=R.drawRange.count,x.userData=Object.assign({},R.userData),w.geometry=x}const E=c[S];x.setAttribute(S,new kr(E.array,E.itemSize,E.normalized))}yt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ju="glTF",Qs=12,Td={JSON:1313821514,BIN:5130562};class RM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ju)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qs,a=new DataView(e,Qs);let r=0;for(;r<i;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===Td.JSON){const l=new Uint8Array(e,Qs+r,o);this.content=n.decode(l)}else if(c===Td.BIN){const l=Qs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const d=jc[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=jc[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Ts[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}d(f)},o,l,mn,u)})})}}class PM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class LM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Ju extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,v=g-l,m=-2*f+3*u,p=f-u,M=1-m,w=p-u+d;for(let x=0;x!==o;x++){const S=r[v+x+o],E=r[v+x+c]*h,R=r[g+x+o],_=r[g+x]*h;a[x]=M*S+w*E+m*R+p*_}return a}}const IM=new nn;class DM extends Ju{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return IM.fromArray(a).normalize().toArray(a),a}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:Nt,9729:Ht,9984:eu,9985:yr,9986:sa,9987:ri},Ad={33071:Vn,33648:Lr,10497:Hi},Vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NM={CUBICSPLINE:void 0,LINEAR:_a,STEP:xa},Wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function FM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),s.DefaultMaterial}function ki(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function UM(s,e,t){let n=!1,i=!1,a=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(s);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(a){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),a&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function kM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xo(t.attributes):e=s.indices+":"+Xo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xo(s.targets[n]);return e}function Xo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Jc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const zM=new Ve;class GM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,a=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||a&&r<98?this.textureLoader=new Hg(this.options.manager):this.textureLoader=new Jg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return ki(a,o,i),zn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())a(h,o.children[l])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){n.load(pa.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Vo[i.type],o=Ts[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new Vt(l,r,c))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=Vo[i.type],l=Ts[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==d){const p=Math.floor(u/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(M);w||(v=new l(o,p*f,i.count*f/h),w=new pu(v,f/h),t.cache.add(M,w)),m=new ya(w,c,u%f/h,g)}else o===null?v=new l(i.count*c):v=new l(o,u,i.count*c),m=new Vt(v,c,g);if(i.sparse!==void 0){const p=Vo.SCALAR,M=Ts[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new M(r[1],w,i.sparse.count*p),E=new l(r[2],x,i.sparse.count*c);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=S.length;R<_;R++){const A=S[R];if(m.setX(A,E[R*c]),c>=2&&m.setY(A,E[R*c+1]),c>=3&&m.setZ(A,E[R*c+2]),c>=4&&m.setW(A,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const i=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(a.samplers||{})[r.sampler]||{};return h.magFilter=Ed[u.magFilter]||Ht,h.minFilter=Ed[u.minFilter]||ri,h.wrapS=Ad[u.wrapS]||Hi,h.wrapT=Ad[u.wrapT]||Hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:r.mimeType});return c=o.createObjectURL(u),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Wt(v);m.needsUpdate=!0,u(m)}),t.load(pa.resolveURL(d,a.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),zn(d,r),d.userData.mimeType=r.mimeType||BM(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new vu,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new _u,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||a||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return yl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const d=i[$e.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(o,a,t))}else{const d=a.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],mn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,It)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Gt);const h=a.alphaMode||Wo.OPAQUE;if(h===Wo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Wo.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Tt&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ue(1,1),a.normalTexture.scale!==void 0)){const d=a.normalTexture.scale;o.normalScale.set(d,d)}if(a.occlusionTexture!==void 0&&r!==Tt&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Tt){const d=a.emissiveFactor;o.emissive=new Fe().setRGB(d[0],d[1],d[2],mn)}return a.emissiveTexture!==void 0&&r!==Tt&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,It)),Promise.all(l).then(function(){const d=new r(o);return a.name&&(d.name=a.name),zn(d,a),t.associations.set(d,{materials:e}),a.extensions&&ki(i,d,a),d})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Rd(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=OM(l),d=i[h];if(d)r.push(d.promise);else{let u;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=a(l):u=Rd(new Et,l,t),l.mode===_n.TRIANGLE_STRIP?u=u.then(f=>Sd(f,cu)):l.mode===_n.TRIANGLE_FAN&&(u=u.then(f=>Sd(f,Bc))),i[h]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?FM(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=r[f];let p;const M=l[f];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0){const w=a.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");w&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&x?new ul(v,M):new de(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===_n.LINES)p=new Om(v,M);else if(m.mode===_n.LINE_STRIP)p=new ml(v,M);else if(m.mode===_n.LINE_LOOP)p=new Bm(v,M);else if(m.mode===_n.POINTS)p=new zm(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kM(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),zn(p,a),m.extensions&&ki(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return a.extensions&&ki(i,d[0],a),d[0];const u=new Ct;a.extensions&&ki(i,u,a),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(dm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ua(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d){o.push(d);const u=new Ve;a!==null&&u.fromArray(a.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new fl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(v))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],v=d[3],m=d[4],p=[];for(let w=0,x=u.length;w<x;w++){const S=u[w],E=f[w],R=g[w],_=v[w],A=m[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const C=n._createAnimationTracks(S,E,R,_,A);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}const M=new Wc(a,void 0,p);return zn(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,zM)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,g=d[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(l){return i._getNodeRef(i.cameraCache,a.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new bu:l.length>1?h=new Ct:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(a.name&&(h.userData.name=a.name,h.name=r),zn(h,a),a.extensions&&ki(n,h,a),a.matrix!==void 0){const d=new Ve;d.fromArray(a.matrix),h.applyMatrix4(d)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(a.mesh!==void 0&&i.meshCache.refs[a.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new Ct;n.name&&(a.name=i.createUniqueName(n.name)),zn(a,n),n.extensions&&ki(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){const u=c[h];u.parent!==null?a.add(El(u)):a.add(u)}const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof rn||u instanceof Wt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(a),a})}_createAnimationTracks(e,t,n,i,a){const r=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}_i[a.path]===_i.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(_i[a.path]){case _i.weights:h=Ra;break;case _i.rotation:h=Ca;break;case _i.translation:case _i.scale:h=zr;break;default:switch(n.itemSize){case 1:h=Ra;break;case 2:case 3:default:h=zr;break}break}const d=i.interpolation!==void 0?NM[i.interpolation]:_a,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const v=new h(c[f]+"."+_i[a.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),r.push(v)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Jc(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ca?DM:Ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function HM(s,e,t){const n=e.attributes,i=new pn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const h=Jc(Ts[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new P,c=new P;for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const v=Jc(Ts[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const r=new Yn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function Rd(s,e,t){const n=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){s.setAttribute(o,c)})}for(const r in n){const o=jc[r]||r.toLowerCase();o in s.attributes||i.push(a(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(r)}return et.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),zn(s,e),HM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?UM(s,e.targets,t):s})}var VM=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),a,r=WebAssembly.instantiate(i,{}).then(function(p){a=p.instance,a.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),w=0;w<p.length;++w){var x=p.charCodeAt(w);M[w]=x>96?x-97:x>64?x-39:x+4}for(var S=0,w=0;w<p.length;++w)M[S++]=M[w]<60?n[M[w]]:(M[w]-60)*64+M[++w];return M.buffer.slice(0,S)}function c(p,M,w,x,S,E,R){var _=p.exports.sbrk,A=x+3&-4,C=_(A*S),L=_(E.length),I=new Uint8Array(p.exports.memory.buffer);I.set(E,L);var O=M(C,x,S,L,E.length);if(O==0&&R&&R(C,A,S),w.set(I.subarray(C,C+x*S)),_(C-_(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(w){var x=w.data;M.pending-=x.count,M.requests[x.id][x.action](x.value),delete M.requests[x.id]},M}function g(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),w=new Blob([M],{type:"text/javascript"}),x=URL.createObjectURL(w),S=d.length;S<p;++S)d[S]=f(x);for(var S=p;S<d.length;++S)d[S].object.postMessage({});d.length=p,URL.revokeObjectURL(x)}function v(p,M,w,x,S){for(var E=d[0],R=1;R<d.length;++R)d[R].pending<E.pending&&(E=d[R]);return new Promise(function(_,A){var C=new Uint8Array(w),L=++u;E.pending+=p,E.requests[L]={resolve:_,reject:A},E.object.postMessage({id:L,count:p,size:M,source:C,mode:x,filter:S},[C.buffer])})}function m(p){var M=p.data;self.ready.then(function(w){if(!M.id)return self.close();try{var x=new Uint8Array(M.count*M.size);c(w,w.exports[M.mode],x,M.count,M.size,M.source,w.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:x},[x.buffer])}catch(S){self.postMessage({id:M.id,count:M.count,action:"reject",value:S})}})}return{ready:r,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,M,w,x,S){c(a,a.exports.meshopt_decodeVertexBuffer,p,M,w,x,a.exports[l[S]])},decodeIndexBuffer:function(p,M,w,x){c(a,a.exports.meshopt_decodeIndexBuffer,p,M,w,x)},decodeIndexSequence:function(p,M,w,x){c(a,a.exports.meshopt_decodeIndexSequence,p,M,w,x)},decodeGltfBuffer:function(p,M,w,x,S,E){c(a,a.exports[h[S]],p,M,w,x,a.exports[l[E]])},decodeGltfBufferAsync:function(p,M,w,x,S){return d.length>0?v(p,M,w,h[x],l[S]):r.then(function(){var E=new Uint8Array(p*M);return c(a,a.exports[h[x]],E,p,M,w,a.exports[l[S]]),E})}}})();const WM=["Casual_Male","Casual2_Male","Casual3_Male","Casual_Female","Casual2_Female","Casual3_Female","Casual_Bald","OldClassy_Male"],qo="Casual_Male",XM={Casual_Male:()=>On(()=>import("./Casual_Male-odZSvc4n.js"),[]),Casual2_Male:()=>On(()=>import("./Casual2_Male-BDNM8-fP.js"),[]),Casual3_Male:()=>On(()=>import("./Casual3_Male-3zgZ0eqd.js"),[]),Casual_Female:()=>On(()=>import("./Casual_Female-ygpoOeGi.js"),[]),Casual2_Female:()=>On(()=>import("./Casual2_Female-BjwpVeB-.js"),[]),Casual3_Female:()=>On(()=>import("./Casual3_Female-BB1UIXSs.js"),[]),Casual_Bald:()=>On(()=>import("./Casual_Bald-DFJdxqqo.js"),[]),OldClassy_Male:()=>On(()=>import("./OldClassy_Male-DyF2d6q_.js"),[])},Yu={mike:()=>On(()=>import("./Mike-1x735T4M.js"),[]),jb:()=>On(()=>import("./JB-BKHBDMFi.js"),[])},Es=["skin","chest","arm","hand","leg","foot","face","hair","shirt","shirtFront","sleeve","pants","pantsLow","belt","detail","hat","jacket","trim","lens","glint","sole","stripe","band","hair2","button","cuff"],qM=1.75,KM=1.68,As={enabled:!1,px:1.4,colour:"#1d2a22",width:{value:.04}};let Ko=null;function Cd(){if(Ko)return Ko;const s=new Tt({color:As.colour,side:tn});return s.onBeforeCompile=e=>{e.uniforms.outlineWidth=As.width,e.vertexShader=`uniform float outlineWidth;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      #ifdef USE_SKINNING
        vec3 olN = normalize( transformedNormal );
      #else
        vec3 olN = normalize( normalMatrix * normal );
      #endif
      mvPosition.xy += olN.xy * outlineWidth;
      mvPosition.z -= outlineWidth * 0.5;
      gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>"howzat-outline",Ko=s,s}function Pd(s){const e=s;let t;if(e.isSkinnedMesh){const n=new ul(s.geometry,Cd());t=n,s.parent.add(n),n.bind(e.skeleton,e.bindMatrix)}else t=new de(s.geometry,Cd()),s.parent.add(t);t.name="outline",t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!1,t.position.copy(s.position),t.quaternion.copy(s.quaternion),t.scale.copy(s.scale)}const Oe={idle:"Idle",walk:"Walk",carry:"Walk_Carry",run:"Run",sit:"SitDown",stand:"StandUp",cheer:"Victory",jump:"Jump",sad:"Defeat",pick:"PickUp",swing:"SwordSlash",punch:"Punch"};function jM(s){const e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function Zu(){const s=new Uint8Array([168,168,168,255,222,222,222,255,255,255,255,255,255,255,255,255]),e=new Ia(s,4,1,an);return e.minFilter=Nt,e.magFilter=Nt,e.needsUpdate=!0,e}function JM(s,e,t){const n=/Shoulder|UpperArm|LowerArm/.test(e),i=/Fist/.test(e),a=/UpperLeg|LowerLeg/.test(e),r=/Foot/.test(e),o=/Head|Neck/.test(e);switch(s){case"Skin":return i?"hand":n?"arm":r?"foot":a?"leg":o?"skin":"chest";case"Shirt":return n?"sleeve":t?"shirtFront":"shirt";case"Pants":return/LowerLeg|Foot/.test(e)?"pantsLow":"pants";case"Face":return"face";case"Hair":return"hair";case"Belt":return"belt";case"Hat":return"hat";default:return"detail"}}async function Ld(s,e,t){var ne;const n=(await(t?Yu[t]:XM[e])()).default,i=await s.parseAsync(jM(n),""),a=i.scene;a.updateMatrixWorld(!0);const r=[];a.traverse(q=>{q.isSkinnedMesh&&r.push(q)});const o=r[0].skeleton,c=o.bones.map(q=>q.name);let l=0,h=0;for(const q of r)l+=q.geometry.attributes.position.count,h+=q.geometry.index.count;const d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Uint16Array(l*4),g=new Float32Array(l*4),v=new Uint8Array(l),m=new Uint32Array(h),p=new P,M=new Uint8Array(l),w=[],x=new Uint16Array(l),S=new Int16Array(l).fill(-1);let E=0,R=0;for(const q of r){const _e=q.geometry,Me=_e.attributes.position,tt=_e.attributes.normal,G=_e.attributes.skinIndex,oe=_e.attributes.skinWeight,H=q.material.name;w.includes(H)||w.push(H);const Q=w.indexOf(H);for(let Se=0;Se<Me.count;Se++){p.fromBufferAttribute(Me,Se),d.set([p.x,p.y,p.z],(E+Se)*3),p.fromBufferAttribute(tt,Se),u.set([p.x,p.y,p.z],(E+Se)*3);let bt=0,He=-1;for(let Ke=0;Ke<4;Ke++){const at=oe.getComponent(Se,Ke),We=G.getComponent(Se,Ke);f[(E+Se)*4+Ke]=We,g[(E+Se)*4+Ke]=at,at>He&&(He=at,bt=We)}M[E+Se]=Q,x[E+Se]=bt}const le=_e.attributes._region,Ue=q.userData.howzatRegions??_e.userData.howzatRegions;if(le&&Ue)for(let Se=0;Se<Me.count;Se++)S[E+Se]=Es.indexOf(Ue[le.getX(Se)]);const re=_e.index;for(let Se=0;Se<re.count;Se++)m[R+Se]=re.getX(Se)+E;E+=Me.count,R+=re.count}const _=new Et;_.setAttribute("position",new Vt(d,3)),_.setAttribute("normal",new Vt(u,3)),_.setAttribute("skinIndex",new dl(f,4)),_.setAttribute("skinWeight",new Vt(g,4)),_.setIndex(new Vt(m,1)),_.computeBoundingSphere();const A=new ul(_,new Tt);A.name="body",A.position.copy(r[0].position),A.quaternion.copy(r[0].quaternion),A.scale.copy(r[0].scale);const C=r[0].parent;for(const q of r)(ne=q.parent)==null||ne.remove(q);C.add(A),a.updateMatrixWorld(!0),A.bind(o,r[0].bindMatrix);const L=new Float32Array(l*3),I=new pn,O=new pn;for(let q=0;q<l;q++)p.fromBufferAttribute(_.attributes.position,q),A.applyBoneTransform(q,p),p.applyMatrix4(A.matrixWorld),L.set([p.x,p.y,p.z],q*3),I.expandByPoint(p),w[M[q]]==="Shirt"&&O.expandByPoint(p);const D=O.getCenter(new P),B=O.getSize(new P),K=new pn,V=new pn;for(let q=0;q<l;q++){const _e=w[M[q]],Me=c[x[q]]??"";p.set(L[q*3],L[q*3+1],L[q*3+2]);const tt=_e==="Shirt"&&p.z>D.z&&Math.abs(p.x-D.x)<B.x*.13&&p.y>O.min.y+B.y*.12;v[q]=S[q]>=0?S[q]:Es.indexOf(JM(_e,Me,tt));const G=Es[v[q]];/Head/.test(Me)&&(S[q]>=0?G==="skin"||G==="hair":_e==="Skin"||_e==="Hair")&&K.expandByPoint(p),(S[q]>=0?G==="face":_e==="Face")&&V.expandByPoint(p)}const te=new P((K.min.x+K.max.x)/2,K.max.y,(K.min.z+K.max.z)/2),Z=V.isEmpty()?te.clone().add(new P(0,-.4,.5)):V.getCenter(new P);return Z.z=V.isEmpty()?Z.z:V.max.z,{template:{model:e,scene:a,geometry:_,regions:v,headTop:te,headWidth:K.max.x-K.min.x,eyes:Z,eyeWidth:Math.max(.3,V.max.x-V.min.x),height:I.max.y-I.min.y},clips:i.animations}}function Id(s,e,t,n=24){const i=new Ou(s),a=i.clipAction(e);a.play();const r=s.getObjectByName(t),o=[];for(let c=0;c<=n;c++)i.setTime(e.duration*c/n),s.updateMatrixWorld(!0),o.push(s.worldToLocal(r.getWorldPosition(new P)));return a.stop(),i.uncacheRoot(s),o}async function YM(){const s=new lM;s.setMeshoptDecoder(VM);const e=new Map,t=new Map,n=Object.keys(Yu),[i,a]=await Promise.all([Promise.all(WM.map(f=>Ld(s,f))),Promise.all(n.map(f=>Ld(s,qo,f)))]),r=new Map(n.map((f,g)=>[f,a[g].template]));for(const{template:f,clips:g}of i)if(e.set(f.model,f),f.model===qo)for(const v of g)t.set(v.name,v);const o=e.get(qo),c=El(o.scene),l=Id(c,t.get(Oe.sit),"Hips"),h=l[l.length-1],d=f=>{const v=Id(c,t.get(f),"FootL",32).map(p=>p.z);return(Math.max(...v)-Math.min(...v))*2/t.get(f).duration},u=new Ns({vertexColors:!0,gradientMap:Zu()});return{templates:e,bespoke:r,clips:t,material:u,sitHip:h,walkSpeed:d(Oe.walk),runSpeed:d(Oe.run),unitScale:qM/o.height}}const _r={skin:"#f1c49c",chest:"#f1c49c",arm:"#f1c49c",hand:"#f1c49c",leg:"#f1c49c",foot:"#3a3a44",face:"#2a1a12",hair:"#5a3b22",shirt:"#4a7fd0",shirtFront:"#4a7fd0",sleeve:"#4a7fd0",pants:"#4b4f5c",pantsLow:"#4b4f5c",belt:"#3b2a1c",detail:"#d8d0c0",hat:"#2b2b2b",jacket:"#3d2a1f",trim:"#4a3324",lens:"#121216",glint:"#ffffff",sole:"#e2e0d8",stripe:"#1f2f6b",band:"#2f6f3a",hair2:"#4a3020",button:"#b9a57a",cuff:"#5b7fb3"};function ZM(s){const e=s.colours,t={},n=e.skin??_r.skin,i=e.shirt??_r.shirt,a=e.pants??_r.pants,r={..._r,skin:n,chest:e.chest??n,arm:e.arm??n,hand:e.hand??n,leg:e.leg??n,shirt:i,shirtFront:e.shirtFront??i,sleeve:e.sleeve??i,pants:a,pantsLow:e.pantsLow??a};for(const o of Es)t[o]=new Fe(e[o]??r[o]);return t}const Dd=new Map;function ot(s,e=!1){const t=s+e;let n=Dd.get(t);return n||(n=e?new Tg({color:s,shininess:90,specular:6710886}):new Ns({color:s,gradientMap:Zu()}),Dd.set(t,n)),n}function $M(s,e,t){const n=new Ct,i=e.headWidth;if(s==="sunglasses"){const o=e.eyeWidth*.44,c=o*.6;for(const h of[-1,1]){const d=new de(new Sn(o,c,.04),ot("#101014",!0));d.position.set(h*e.eyeWidth*.3,0,0),n.add(d)}const l=new de(new Sn(e.eyeWidth*.75,.035,.035),ot("#101014"));l.position.y=c*.3,n.add(l);for(const h of[-1,1]){const d=new de(new Sn(.03,.035,i*.5),ot("#101014"));d.position.set(h*(e.eyeWidth*.3+o*.5),c*.3,-i*.25),n.add(d)}return n.position.set(e.eyes.x,e.eyes.y+c*.1,e.eyes.z+.03),n}if(s==="bucketHat"){const o=new de(new Rt(i*.42,i*.56,i*.42,14),ot("#efe6cf"));o.position.y=i*.13;const c=new de(new Rt(i*.565,i*.575,i*.11,14),ot(t||"#3f7d3a"));c.position.y=-i*.02;const l=new de(new Rt(i*.6,i*.7,i*.08,16),ot("#e8dec4"));return l.position.y=-i*.1,n.add(o,c,l),n.position.set(e.headTop.x,e.headTop.y-i*.26,e.headTop.z+.02),n}if(s==="sunHat"){const o=new de(new Rt(i*.4,i*.5,i*.34,14),ot("#e9cf86"));o.position.y=i*.1;const c=new de(new Rt(i*.505,i*.51,i*.08,14),ot(t||"#c8102e")),l=new de(new Rt(i*.74,i*.76,i*.05,18),ot("#e3c676"));return l.position.y=-i*.06,n.add(o,c,l),n.position.set(e.headTop.x,e.headTop.y-i*.22,e.headTop.z),n}if(s==="cap"||s==="helmet"){const o=t||(s==="helmet"?"#1b2a52":"#1d4fb8"),c=new de(new Ai(i*.56,16,10,0,Math.PI*2,0,Math.PI/2),ot(o,s==="helmet")),l=new de(new Sn(i*.7,i*.05,i*.42),ot(o));if(l.position.set(0,i*.02,i*.6),n.add(c,l),s==="helmet"){const h=new de(new Ml(i*.42,.025,4,12,Math.PI),ot("#9aa3b0",!0));h.rotation.x=Math.PI/2,h.position.set(0,-i*.32,i*.15),n.add(h)}return n.position.set(e.headTop.x,e.headTop.y-i*.3,e.headTop.z),n}if(s==="cone"){const o=new de(new Bi(i*.42,i*1.05,14),ot("#ff6a1a"));o.position.y=i*.42;const c=new de(new Rt(i*.255,i*.3,i*.16,14),ot("#ffffff"));c.position.y=i*.45;const l=new de(new Sn(i*.95,i*.07,i*.95),ot("#ff6a1a"));return l.position.y=-i*.08,n.add(o,c,l),n.position.set(e.headTop.x,e.headTop.y-i*.12,e.headTop.z),n.rotation.z=.12,n}if(s==="topHat"){const o=new de(new Rt(i*.4,i*.4,i*.75,14),ot(t||"#1a1a1e"));o.position.y=i*.36;const c=new de(new Rt(i*.405,i*.405,i*.12,14),ot("#c8102e"));c.position.y=i*.06;const l=new de(new Rt(i*.66,i*.66,i*.05,16),ot(t||"#1a1a1e"));return n.add(o,c,l),n.position.set(e.headTop.x,e.headTop.y-i*.2,e.headTop.z),n}if(s==="viking"){const o=new de(new Ai(i*.56,14,8,0,Math.PI*2,0,Math.PI/2),ot("#9aa3b0",!0));n.add(o);for(const c of[-1,1]){const l=new de(new Bi(i*.11,i*.6,8),ot("#f4ead0"));l.position.set(c*i*.58,i*.25,0),l.rotation.z=-c*.9,n.add(l)}return n.position.set(e.headTop.x,e.headTop.y-i*.3,e.headTop.z),n}if(s==="afro"){const o=new de(new Fa(i*.78,1),ot(t||"#e8503a"));return o.position.set(0,i*.12,-i*.12),n.add(o),n.position.set(e.headTop.x,e.headTop.y-i*.18,e.headTop.z),n}if(s==="crown"){const o=new de(new Rt(i*.42,i*.4,i*.22,10,1,!0),ot("#f2c23a",!0));o.position.y=i*.1,n.add(o);for(let c=0;c<5;c++){const l=c/5*Math.PI*2,h=new de(new Bi(i*.08,i*.2,4),ot("#f2c23a",!0));h.position.set(Math.sin(l)*i*.4,i*.3,Math.cos(l)*i*.4),n.add(h)}return n.position.set(e.headTop.x,e.headTop.y-i*.12,e.headTop.z),n}if(s==="mop"){const o=new de(new Rt(.025,.025,1.5,5),ot("#c9a46a"));o.position.y=-.2;const c=new de(new Rt(.16,.2,.22,8),ot("#d8d4c8"));return c.position.y=-.98,n.add(o,c),n}const a=new de(new Rt(.03,.03,1.4,5),ot("#8a6a42"));a.position.y=.7;const r=new de(new Mn(.8,.5),new Tt({map:QM(),side:Gt}));return r.position.set(.4,1.15,0),n.add(a,r),n}let ea=null;function QM(){if(ea)return ea;const s=document.createElement("canvas");s.width=64,s.height=40;const e=s.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,64,40),e.fillStyle="#c8102e",e.fillRect(26,0,12,40),e.fillRect(0,14,64,12),ea=new Da(s),ea.colorSpace=It,ea}function $u(){const s=new Ct,e=new de(new Rt(.075,.06,.2,10),ot("#e8a23a",!0)),t=new de(new Rt(.078,.076,.04,10),ot("#fff8ea"));return t.position.y=.12,e.position.y=0,s.add(e,t),s}function ey(){const s=new Ct,e=new de(new Ai(.09,10,6,0,Math.PI*2,0,Math.PI/2),ot("#d99a4a"));e.position.y=.03;const t=new de(new Rt(.095,.095,.035,10),ot("#6b3a1e")),n=new de(new Rt(.09,.085,.035,10),ot("#d99a4a"));return n.position.y=-.035,s.add(e,t,n),s}class gs{constructor(e,t,n=!1){Y(this,"root",new Ct);Y(this,"model");Y(this,"mesh");Y(this,"mixer");Y(this,"bones",{});Y(this,"current","");Y(this,"actions",new Map);Y(this,"held",null);Y(this,"heldKind",null);Y(this,"cpu",null);Y(this,"template");Y(this,"accessories",new Map);Y(this,"heading",0);Y(this,"y",0);Y(this,"green",0);Y(this,"skinBase",null);this.kit=e,this.look=t;const i=t.bespoke&&e.bespoke.get(t.bespoke)||e.templates.get(t.model);this.template=i,this.model=El(i.scene),this.model.traverse(d=>{d.isBone&&(this.bones[d.name]=d)}),this.mesh=this.model.getObjectByName("body");const a=new Et;a.setIndex(i.geometry.index);for(const[d,u]of Object.entries(i.geometry.attributes))a.setAttribute(d,u);a.boundingSphere=i.geometry.boundingSphere;const r=ZM(t),o=new Float32Array(i.regions.length*3);for(let d=0;d<i.regions.length;d++){const u=r[Es[i.regions[d]]];o[d*3]=u.r,o[d*3+1]=u.g,o[d*3+2]=u.b}a.setAttribute("color",new Vt(o,3)),this.mesh.geometry=a,this.mesh.material=e.material,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1;const c=i.headTop.y*e.unitScale,l=t.bespoke||!(c>.5)?1:KM/c,h=e.unitScale*l*(t.height??1);this.model.scale.setScalar(h),this.root.add(this.model),this.model.updateMatrixWorld(!0);for(const d of t.accessories??[]){const u=$M(d,i,t.accent??"");this.model.add(u),u.updateMatrixWorld(!0);const f=d==="flag"||d==="mop",g=f?this.bones.FistR:this.bones.Head;f&&(u.position.copy(this.model.worldToLocal(this.bones.FistR.getWorldPosition(new P))),u.scale.setScalar(1/h),u.updateMatrixWorld(!0)),g.attach(u),u.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),this.accessories.set(d,u)}if(this.mixer=new Ou(this.model),n){const d=new de(a.clone(),e.material);d.name="body-cpu",d.geometry.deleteAttribute("skinIndex"),d.geometry.deleteAttribute("skinWeight"),this.mesh.visible=!1,this.mesh.parent.add(d),d.position.copy(this.mesh.position),d.quaternion.copy(this.mesh.quaternion),d.scale.copy(this.mesh.scale),d.castShadow=!0,this.cpu={mesh:d,scratch:new P}}if(As.enabled){Pd(this.cpu?this.cpu.mesh:this.mesh);for(const d of this.accessories.values()){const u=[];d.traverse(f=>{f.isMesh&&u.push(f)});for(const f of u)Pd(f)}}}tintFace(e){const t=Math.max(0,Math.min(1,e));if(Math.abs(t-this.green)<.02)return;this.green=t;const n=this.mesh.geometry.attributes.color;if(!this.skinBase){const o=Es.indexOf("skin"),c=[];this.template.regions.forEach((d,u)=>{d===o&&c.push(u)});const l=new Uint32Array(c),h=new Float32Array(c.length*3);l.forEach((d,u)=>{h[u*3]=n.getX(d),h[u*3+1]=n.getY(d),h[u*3+2]=n.getZ(d)}),this.skinBase={index:l,rgb:h}}const{index:i,rgb:a}=this.skinBase,r=[.62,.8,.36];i.forEach((o,c)=>n.setXYZ(o,a[c*3]+(r[0]-a[c*3])*t,a[c*3+1]+(r[1]-a[c*3+1])*t,a[c*3+2]+(r[2]-a[c*3+2])*t)),n.needsUpdate=!0,this.cpu&&(this.cpu.mesh.geometry.attributes.color.copy(n),this.cpu.mesh.geometry.attributes.color.needsUpdate=!0)}action(e){let t=this.actions.get(e);return t||(t=this.mixer.clipAction(this.kit.clips.get(e)),this.actions.set(e,t)),t}play(e,t={}){if(this.current===e){t.timeScale!==void 0&&(this.action(e).timeScale=t.timeScale);return}const n=this.action(e);n.reset(),n.setLoop(t.once?Oc:ou,1/0),n.clampWhenFinished=!!t.once,n.timeScale=t.timeScale??1,t.startAt!==void 0&&(n.time=t.startAt*n.getClip().duration);const i=this.current?this.action(this.current):null,a=t.fade??.25;i&&a>0?(n.play(),i.crossFadeTo(n,a,!1)):(i&&i.stop(),n.play()),this.current=e}finished(){const e=this.current?this.action(this.current):null;return!e||e.loop===Oc&&e.time>=e.getClip().duration-.001}hold(e){var a;if(e===this.heldKind||(this.held&&((a=this.held.parent)==null||a.remove(this.held),this.held=null),this.heldKind=e,!e))return;const t=e==="pint"?$u():ey(),n=this.bones.FistR;n.add(t),this.root.updateMatrixWorld(!0);const i=n.getWorldScale(new P).x/this.root.getWorldScale(new P).x;t.scale.setScalar(1/i),t.position.set(0,.06/i,0),this.held=t}update(e,t){if(this.mixer.update(e),t==null||t(),this.cpu){this.model.updateMatrixWorld(!0),this.mesh.skeleton.update();const n=this.mesh.geometry.attributes.position,i=this.cpu.mesh.geometry.attributes.position,a=this.cpu.scratch;for(let r=0;r<n.count;r++)a.fromBufferAttribute(n,r),this.mesh.applyBoneTransform(r,a),i.setXYZ(r,a.x,a.y,a.z);i.needsUpdate=!0,this.cpu.mesh.geometry.computeVertexNormals()}}}const us=s=>s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),fs={bar:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h12l-1.6 17H7.6z" fill="#f0a634" stroke="#3a2a1e" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 3.5h12l-.3 3.4H6.3z" fill="#fffaf0" stroke="#3a2a1e" stroke-width="1.4" stroke-linejoin="round"/></svg>',food:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.5a8.5 6.5 0 0 1 17 0z" fill="#e0a050" stroke="#5a3418" stroke-width="1.2"/><rect x="3" y="11.6" width="18" height="2" fill="#6cbf55"/><rect x="2.6" y="13.4" width="18.8" height="2.8" rx="1.2" fill="#6b3a1e"/><path d="M3.5 16.6h17v.8a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3z" fill="#e0a050" stroke="#5a3418" stroke-width="1.2"/></svg>',toilet:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="3" width="19" height="18" rx="2.5" fill="#3a6fd8" stroke="#1d3a7a" stroke-width="1.2"/><circle cx="8" cy="7.2" r="1.8" fill="#fff"/><path d="M5.6 10h4.8l-.6 5H9v4H7v-4h-.8z" fill="#fff"/><circle cx="16" cy="7.2" r="1.8" fill="#fff"/><path d="M14.4 10h3.2l2 6h-1.8v3h-3.6v-3h-1.8z" fill="#fff"/></svg>',mike:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 9.2h19v1.6c-.7 0-1.1.4-1.3 1l-.9 3c-.3 1-1.2 1.6-2.2 1.6h-1.8c-1 0-1.9-.7-2.1-1.7L12.5 13h-1l-.7 1.7c-.2 1-1.1 1.7-2.1 1.7H6.9c-1 0-1.9-.6-2.2-1.6l-.9-3c-.2-.6-.6-1-1.3-1z" fill="#121216"/><path d="M5.5 10.6l1.2.1-.6 2z" fill="#e8f2ff"/></svg>',jb:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 13 7.6 7.4c.5-3.6 8.3-3.6 8.8 0l.8 5.6z" fill="#efe6cf" stroke="#6b5a3a" stroke-width="1.2"/><rect x="6.6" y="10.6" width="10.8" height="2.2" fill="#2f6f3a"/><ellipse cx="12" cy="14.6" rx="9.5" ry="2.8" fill="#e8dec4" stroke="#6b5a3a" stroke-width="1.2"/></svg>',end:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3" width="10" height="18" rx="1" fill="#8b5a32" stroke="#4a2c14" stroke-width="1.2"/><circle cx="11" cy="12.4" r="1.1" fill="#ffd23f"/><path d="M15 12h6.5M18.8 9.2 21.6 12l-2.8 2.8" stroke="#fffaf0" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'};class ty{constructor(e,t){Y(this,"root");Y(this,"el",{});Y(this,"lastSpeech","");Y(this,"speechTimer",0);Y(this,"lastInfoAt",-1e9);Y(this,"tickerQueue",[]);Y(this,"tickerBusy",!1);Y(this,"lastTicker","");Y(this,"endArmedUntil",0);Y(this,"pinnedUntil",0);Y(this,"mikeScreen",{x:0,y:0,visible:!1});this.cb=t,this.root=document.createElement("div"),this.root.className="tp-hud th-hud",this.root.innerHTML=`
      <div class="th-zoom" role="group" aria-label="View">
        <button type="button" class="th-btn th-sq" data-k="zoomin" aria-label="Zoom in" title="Zoom in (+)">+</button>
        <button type="button" class="th-btn th-sq" data-k="zoomout" aria-label="Zoom out" title="Zoom out (−)">−</button>
        <button type="button" class="th-btn th-sq" data-k="rotate" aria-label="Rotate view" title="Other side of the ground (Q)">⟲</button>
        <button type="button" class="th-btn th-sq th-px" data-k="pixel" aria-label="Pixel look" aria-pressed="false" title="Retro pixel look (P)">▦</button>
      </div>
      <div class="tp-bubble hidden" data-k="jb"><b>JB</b><span data-k="speech"></span>
        <div class="tp-round hidden" data-k="round">
          <button type="button" data-choice="pint-2">2 pints</button><button type="button" data-choice="pint-4">4 pints</button><button type="button" data-choice="water">Water</button>
          <small data-k="roundsecs"></small>
        </div>
      </div>
      <div class="th-banner hidden" data-k="banner"></div>
      <div class="tp-toasts" data-k="toasts"></div>
      <div class="th-tip hidden" data-k="tip" role="tooltip"></div>
      <div class="th-pop tp-pour hidden" data-k="pour" aria-label="Pour meter"><span class="th-pop-title">Pour</span><div class="tp-glass"><div class="tp-band" style="bottom:${yi.perfect[0]*100}%;height:${(yi.perfect[1]-yi.perfect[0])*100}%"></div><div class="tp-beer" data-k="beer"></div></div><small>Stop on the line: GO or Space</small></div>
      <div class="th-pop tp-tilt hidden" data-k="tilt" aria-label="Tray balance"><span class="th-pop-title">Tray</span><div class="tp-tilt-bar" data-k="tiltbar"><div class="tp-tilt-dot" data-k="tiltdot"></div></div><small>Z / X or drag to keep it level</small></div>
      <div class="th-panel" role="toolbar" aria-label="Control panel">
        <div class="th-ticker" aria-live="polite"><span class="th-ticker-text" data-k="ticker"></span></div>
        <div class="th-row">
          <div class="th-well th-money">
            <div class="th-lcd" aria-label="Arcade score"><small>Score</small><b data-k="score">0</b><i class="th-combo" data-k="combo">×1</i></div>
            <div class="th-lcd" aria-label="Spent"><small>Spent</small><b class="th-cash" data-k="spend">£0.00</b></div>
            <div class="th-lcd th-match" aria-label="Match score"><small data-k="clock">11:00</small><b data-k="match">—</b><small data-k="matchsub"></small></div>
          </div>
          <div class="th-well th-meters" aria-label="Mike">
            <div class="th-meter" data-m="bladder"><span>Bladder</span><i><em data-k="bladder"></em></i></div>
            <div class="th-meter" data-m="hunger"><span>Hunger</span><i><em data-k="hunger"></em></i></div>
            <div class="th-meter" data-m="alcohol"><span data-k="sobriety">Sober</span><i><em data-k="alcohol"></em></i></div>
            <div class="th-pints" aria-label="Pints"><b data-k="pints">0</b><span>pints</span><small data-k="inhand"></small></div>
          </div>
          <div class="th-buttons">
            <button type="button" class="th-btn" data-k="bar" title="The Twelfth Man: walk there and queue">${fs.bar}<span>Bar</span></button>
            <button type="button" class="th-btn" data-k="food" title="Beefy’s Burgers: walk there and queue">${fs.food}<span>Burgers</span></button>
            <button type="button" class="th-btn" data-k="toilet" title="Fine Leg Toilets: walk there and queue">${fs.toilet}<span>Loos</span></button>
            <button type="button" class="th-btn" data-k="recentre" aria-label="Find Mike" title="Find Mike (F)">${fs.mike}<span>Find Mike</span></button>
            <button type="button" class="th-btn" data-k="jbbtn" aria-label="JB" title="Back to the seats for a chat with JB">${fs.jb}<span>JB</span></button>
            <button type="button" class="th-btn th-end" data-k="end" aria-label="Call it a day" title="Leave before the traffic">${fs.end}<span data-k="endlabel">Call it a day</span></button>
          </div>
          <div class="th-well th-act">
            <div class="th-prompt" data-k="prompt"></div>
            <button class="tp-go th-go" type="button" data-k="action" aria-label="Action">GO</button>
          </div>
        </div>
      </div>
      <div class="tp-card th-card" data-k="title">
        <div class="tp-card-head">HOWZAT <span>ARCADE</span></div>
        <p class="tp-sub">A day at the cricket with JB. Mind the sick.</p>
        <ul>
          <li><b>Walk</b> click the ground · or WASD</li>
          <li><b>Go places</b> click a building, JB, or the Bar / Burgers / Loos buttons</li>
          <li><b>Look around</b> push the screen edge · arrow keys · right-drag · wheel or + / − to zoom · Q flips sides</li>
          <li><b>Who's that?</b> hover anyone (long-press on touch)</li>
          <li><b>Action</b> Space / E / GO: pour, queue, chat, <b>CATCH</b> · <b>Tray</b> Z / X or drag the gauge</li>
        </ul>
        <p>Pour a round at The Twelfth Man, carry it back to JB without spilling, be in your seat for the big moments and catch sixes that drop into the stand. Mind your bladder.</p>
        <button type="button" class="tp-start" data-k="start">Start the day</button>
      </div>
      <div class="tp-card th-card hidden" data-k="results" role="dialog" aria-label="Results"></div>`,e.appendChild(this.root),this.root.querySelectorAll("[data-k]").forEach(a=>{this.el[a.dataset.k]=a}),this.el.action.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),this.cb.onAction()}),this.el.action.addEventListener("click",a=>{a.detail===0&&this.cb.onAction()}),this.el.end.addEventListener("click",()=>this.armEnd()),this.el.recentre.addEventListener("click",()=>this.cb.onRecentre()),this.el.bar.addEventListener("click",()=>this.cb.onGoTo("bar")),this.el.food.addEventListener("click",()=>this.cb.onGoTo("food")),this.el.toilet.addEventListener("click",()=>this.cb.onGoTo("toilet")),this.el.jbbtn.addEventListener("click",()=>this.cb.onGoTo("seats")),this.el.zoomin.addEventListener("click",()=>this.cb.onZoom(1)),this.el.zoomout.addEventListener("click",()=>this.cb.onZoom(-1)),this.el.rotate.addEventListener("click",()=>this.cb.onRotate()),this.el.pixel.addEventListener("click",()=>this.setPixel(this.cb.onPixel())),this.el.start.addEventListener("click",()=>{this.el.title.classList.add("hidden"),this.cb.onStart()}),this.root.querySelectorAll("[data-choice]").forEach(a=>a.addEventListener("click",()=>this.cb.onRoundChoice(a.dataset.choice)));for(const a of["jb","pour","tilt"])this.el[a].addEventListener("pointerdown",r=>r.stopPropagation());this.root.querySelector(".th-panel").addEventListener("pointerdown",a=>a.stopPropagation());const n=this.el.tiltbar,i=a=>{const r=n.getBoundingClientRect();this.cb.onTrayDrag(Math.max(-1,Math.min(1,(a.clientX-r.left)/r.width*2-1))*-1)};n.addEventListener("pointerdown",a=>{a.stopPropagation(),n.setPointerCapture(a.pointerId),i(a)}),n.addEventListener("pointermove",a=>{n.hasPointerCapture(a.pointerId)&&i(a)}),n.addEventListener("pointerup",()=>this.cb.onTrayDrag(0)),this.el.ticker.addEventListener("animationend",()=>{this.tickerBusy=!1,this.el.ticker.classList.remove("run"),this.nextTicker()}),this.ticker("Welcome to the Riverside. Pints are £6.20. The loos are at fine leg. Good luck.","event")}setPixel(e){this.el.pixel.setAttribute("aria-pressed",String(e)),this.el.pixel.classList.toggle("on",e)}panelHeight(){return this.root.querySelector(".th-panel").getBoundingClientRect().height}armEnd(){const e=performance.now();if(e<this.endArmedUntil){this.endArmedUntil=0,this.el.endlabel.textContent="Call it a day",this.cb.onCallItADay();return}this.endArmedUntil=e+3e3,this.el.endlabel.textContent="Sure? Tap again",this.el.end.classList.add("armed"),window.setTimeout(()=>{performance.now()>=this.endArmedUntil&&(this.el.endlabel.textContent="Call it a day",this.el.end.classList.remove("armed"))},3100)}ticker(e,t="event"){if(!(!e||e===this.lastTicker||this.tickerQueue.some(n=>n.text===e))){for(this.tickerQueue.push({text:e,kind:t});this.tickerQueue.length>3;){const n=this.tickerQueue.findIndex(i=>i.kind==="jb");this.tickerQueue.splice(n>=0?n:0,1)}this.tickerBusy||this.nextTicker()}}nextTicker(){const e=this.tickerQueue.shift();if(!e)return;const t=this.el.ticker,n=t.parentElement;this.lastTicker=e.text,t.textContent=e.kind==="jb"?`JB: “${e.text}”`:e.text,t.dataset.kind=e.kind,t.classList.remove("run");const i=n.clientWidth,a=t.scrollWidth,r=110*(1+this.tickerQueue.length*.6);t.style.setProperty("--from",`${i}px`),t.style.setProperty("--to",`${-a}px`),t.style.animationDuration=`${Math.max(3,(i+a)/r)}s`,t.offsetWidth,t.classList.add("run"),this.tickerBusy=!0}tip(e,t=0,n=0,i=0){const a=this.el.tip,r=performance.now();if(!e){r>=this.pinnedUntil&&a.classList.add("hidden");return}i&&(this.pinnedUntil=r+i);const o=e.mood===void 0?"":`<div class="th-mood"><i style="width:${Math.round(e.mood*100)}%" class="${e.mood<.35?"low":e.mood<.6?"mid":""}"></i><span>${e.mood<.35?"☹":e.mood<.6?"☺":"☻"}</span></div>`;a.innerHTML=`<b>${us(e.title)}</b>${e.subtitle?`<small>${us(e.subtitle)}</small>`:""}${o}${e.lines.map(f=>`<p>${us(f)}</p>`).join("")}`,a.classList.remove("hidden");const c=this.root.getBoundingClientRect(),l=a.offsetWidth,h=a.offsetHeight;let d=t+18,u=n+18;d+l>c.width-8&&(d=t-l-14),u+h>c.height-this.panelHeight()-6&&(u=n-h-14),a.style.left=`${Math.max(6,d)}px`,a.style.top=`${Math.max(6,u)}px`}render(e,t,n){n&&(this.mikeScreen=n),this.el.score.textContent=e.score.toLocaleString("en-GB"),this.el.combo.textContent=`×${e.combo}`,this.el.combo.classList.toggle("hot",e.combo>=3);const i=e.team==="England"?"ENG":e.team.slice(0,3).toUpperCase();this.el.match.textContent=`${i} ${e.runs}/${e.wickets}`,this.el.clock.textContent=e.clock,this.el.matchsub.textContent=`${e.overs} ov${e.target?` · need ${Math.max(0,e.target-e.runs)}`:""}`,this.meter("bladder",e.bladder,e.warnings.bladder),this.meter("hunger",e.hunger,e.warnings.hunger),this.meter("alcohol",e.alcohol,e.warnings.alcohol),this.el.sobriety.textContent=e.sobriety,this.el.pints.textContent=e.pintsDrunk.toFixed(1),this.el.inhand.textContent=e.holding>0?`${e.holding} in hand`:e.carrying>0?`${e.carrying} for JB`:"",this.el.spend.textContent=`£${e.spend.toFixed(2)}`,e.speech&&e.speech!==this.lastSpeech&&(this.lastSpeech=e.speech,this.ticker(e.speech,e.speechImportant?"warn":"jb"),e.speechImportant&&(this.speechTimer=performance.now()+eo.speechSeconds*1e3,this.el.speech.textContent=e.speech));const a=this.el.jb;a.classList.toggle("hidden",!e.roundChoice&&performance.now()>this.speechTimer),e.roundChoice&&!this.el.speech.textContent&&(this.el.speech.textContent=e.speech);const r=this.root.getBoundingClientRect(),o=this.panelHeight();this.root.style.setProperty("--panel-h",`${Math.round(o)}px`);const c=r.height-o-8,l=Math.max(110,Math.min(r.width-110,t.visible?t.x:r.width*.7)),h=Math.max(140,Math.min(c,t.visible?t.y:r.height*.5));a.style.left=`${l}px`,a.style.top=`${h}px`,this.el.round.classList.toggle("hidden",!e.roundChoice),this.el.roundsecs.textContent=e.roundChoice?`${e.roundChoiceSeconds}s, then one each`:"",this.el.prompt.textContent=e.prompt.label,this.el.prompt.classList.toggle("urgent",e.prompt.urgent),this.el.action.textContent=e.prompt.label==="CATCH!"?"CATCH!":e.pour?"STOP":"GO",this.el.action.classList.toggle("ready",e.prompt.enabled),this.el.action.classList.toggle("urgent",e.prompt.urgent),this.el.pour.classList.toggle("hidden",!e.pour),e.pour&&(this.el.beer.style.height=`${Math.round(e.pour.level*100)}%`),this.el.tilt.classList.toggle("hidden",e.tilt===null),e.tilt!==null&&(this.el.tiltdot.style.left=`${50+Math.max(-1,Math.min(1,e.tilt))*46}%`,this.el.tiltdot.classList.toggle("danger",Math.abs(e.tilt)>.7))}meter(e,t,n){const i=this.el[e];i.style.width=`${Math.max(0,Math.min(100,t))}%`,i.parentElement.parentElement.classList.toggle("warn",n||t>=80)}feedback(e){if(e.type==="award")this.float(`+${e.award.points}`),this.toast(`${e.award.label}${e.award.combo>1?` ×${e.award.combo}`:""}`,e.award.kind==="catch"?"big":"good");else if(e.type==="purchase")this.ticker(e.text,"event");else if(e.type==="toast"){const t=/missed|roar/i.test(e.text),n=performance.now();if(t&&n-this.lastInfoAt<eo.missedToastGap*1e3)return;t&&(this.lastInfoAt=n),this.ticker(e.text,/spilt|sick|slippery/i.test(e.text)?"warn":"event")}else e.type==="six"&&e.ball?this.banner("SIX! It’s coming into the stand!"):e.type==="catch"&&this.banner("HOWZAT! What a catch!")}float(e){const t=this.mikeScreen;if(!t.visible)return;const n=document.createElement("div");n.className="th-float",n.textContent=e,n.style.left=`${t.x}px`,n.style.top=`${t.y}px`,this.root.appendChild(n),window.setTimeout(()=>n.remove(),1400)}banner(e){const t=this.el.banner;t.textContent=e,t.classList.remove("hidden","pop"),t.offsetWidth,t.classList.add("pop"),window.clearTimeout(Number(t.dataset.timer??0)),t.dataset.timer=String(window.setTimeout(()=>t.classList.add("hidden"),2600))}toast(e,t){const n=document.createElement("div");for(n.className=`tp-toast ${t}`,n.textContent=e,this.el.toasts.prepend(n);this.el.toasts.children.length>eo.maxToasts;)this.el.toasts.lastElementChild.remove();window.setTimeout(()=>n.remove(),t==="big"?3200:2400)}showResults(e){const t=this.el.results;t.innerHTML=`
      <div class="tp-card-head">${us(e.title)}</div>
      ${e.matchResult&&e.matchResult.trim().toLowerCase()!==e.title.trim().toLowerCase()?`<p class="tp-sub">${us(e.matchResult)}</p>`:""}
      <div class="tp-total"><span>Final score</span><b>${e.total.toLocaleString("en-GB")}</b></div>
      <dl>
        <dt>Arcade points</dt><dd>${e.arcadePoints.toLocaleString("en-GB")}</dd>
        <dt>Day rating bonus (${e.dayRating} × 5)</dt><dd>${e.dayBonus.toLocaleString("en-GB")}</dd>
        <dt>Pints delivered</dt><dd>${e.delivered}</dd>
        <dt>Catches</dt><dd>${e.catches}</dd>
        <dt>Spills</dt><dd>${e.spills}</dd>
        <dt>Best combo</dt><dd>×${e.bestCombo}</dd>
      </dl>
      <ul class="tp-reasons">${e.reasons.map(n=>`<li>${us(n)}</li>`).join("")}</ul>
      <button type="button" class="tp-start" data-restart>Play again</button>`,t.classList.remove("hidden"),t.querySelector("[data-restart]").addEventListener("click",()=>this.cb.onRestart())}}const jr=(()=>{let s=null;return()=>{if(s)return s;const e=new Uint8Array([150,150,150,255,205,205,205,255,245,245,245,255,255,255,255,255]);return s=new Ia(e,4,1,an),s.minFilter=s.magFilter=Nt,s.needsUpdate=!0,s}})(),Nd=new Map;function we(s){let e=Nd.get(s);return e||(e=new Ns({color:s,gradientMap:jr()}),Nd.set(s,e)),e}function Ms(s,e,t,n){const i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"));const a=new Da(i);return a.colorSpace=It,a.anisotropy=4,n&&(a.wrapS=a.wrapT=Hi,a.repeat.set(...n)),a}function Cr(s){return new Ns({map:s,gradientMap:jr()})}function qe(s,e,t,n,i,a,r,o=!0){const c=new de(new Sn(s,e,t),n);return c.position.set(i,a,r),c.castShadow=o,c.receiveShadow=!0,c}function hn(s,e,t,n,i,a,r,o=12){const c=new de(new Rt(s,e,t,o),n);return c.position.set(i,a,r),c.castShadow=!0,c.receiveShadow=!0,c}function ny(s,e,t,n=512,i=128,a='bold 64px "Trebuchet MS", "Segoe UI", sans-serif',r="#ffffff"){return Ms(n,i,o=>{var l;o.fillStyle=e,o.fillRect(0,0,n,i),o.strokeStyle=r,o.lineWidth=10,o.strokeRect(8,8,n-16,i-16),o.fillStyle=t,o.font=a,o.textAlign="center",o.textBaseline="middle";let c=parseInt(((l=/(\d+)px/.exec(a))==null?void 0:l[1])??"64",10);for(;o.measureText(s).width>n-50&&c>12;)c-=2,o.font=a.replace(/\d+px/,`${c}px`);o.fillText(s,n/2,i/2+4)})}function ps(s,e,t,n,i){const a=new de(new Sn(n,i,.12),[we(e),we(e),we(e),we(e),Cr(ny(s,e,t,512,Math.round(512*i/n))),we(e)]);return a.castShadow=!0,a}function Qu(s,e,t=8){return Ms(256,64,n=>{for(let i=0;i<t;i++)n.fillStyle=i%2?e:s,n.fillRect(i*256/t,0,256/t+1,64);n.fillStyle=s;for(let i=0;i<t;i++)n.beginPath(),n.arc((i+.5)*256/t,64,256/t/2,Math.PI,0),n.fill()})}function Fd(s,e,t,n){const i=new Mn(s,e),a=new de(i,new Ns({map:Qu(t,n,Math.round(s*1.4)),gradientMap:jr(),side:Gt}));return a.castShadow=!0,a.receiveShadow=!0,a}function jo(s,e,t,n,i){const a=new Ct;a.add(hn(.18*n,.25*n,1.6*n,we("#7a5434"),0,.8*n,0,7));const r=["#4f9e45","#5cb04e","#3f8a3c","#6cbf55"];for(let o=0;o<3;o++){const c=new de(new Fa((1.1-o*.15)*n,1),we(r[Math.floor(i()*r.length)]));c.position.set((i()-.5)*.8*n,(1.9+o*.55)*n,(i()-.5)*.8*n),c.castShadow=!0,a.add(c)}return a.position.set(s,t,e),a}function iy(s,e){const t=new Ct,n=we("#c98a4b"),i=we("#8b5a32");t.add(qe(2.2,.08,.9,n,0,.75,0));for(const r of[-1,1])t.add(qe(2.2,.06,.3,n,0,.45,r*.68)),t.add(qe(.08,.75,1.5,i,r*.9,.38,0));const a=new de(new Bi(1.4,.5,8,1,!0),new Ns({map:Qu("#ffffff","#e8503a",8),gradientMap:jr(),side:Gt}));return a.position.y=2.3,a.castShadow=!0,t.add(a,hn(.04,.04,2.2,we("#dddddd"),0,1.15,0,5)),t.position.set(s,0,e),t}function Jo(s,e,t){const n=new Ct,i=["#c8102e","#ffffff","#1f4fbf","#f2b632","#2f8f4e"],a=Math.hypot(e.x-s.x,e.z-s.z),r=Math.floor(a/.6),o=new Et().setAttribute("position",new nt([-.2,0,0,.2,0,0,0,-.35,0],3));o.computeVertexNormals();for(let c=0;c<=r;c++){const l=c/r,h=Math.sin(l*Math.PI)*.45,d=new de(o,new Tt({color:i[c%i.length],side:Gt}));d.position.set(s.x+(e.x-s.x)*l,t-h,s.z+(e.z-s.z)*l),d.rotation.y=Math.atan2(e.x-s.x,e.z-s.z)+Math.PI/2,n.add(d)}return n}function sy(s){const e=new Ct,t=[],n=[],i=Rs(4242),a=-.4*ke.rows-.15,r={y:a,centre:{x:0,z:-20},rx:38,rz:18,pitch:{x:0,z:-12},pitchHalfLength:10},o=Ms(512,512,y=>{for(let b=0;b<16;b++)y.fillStyle=b%2?"#6cc04f":"#5fb447",y.fillRect(b*32,0,32,512)},[3,3]),c=new de(new Na(1,64),Cr(o));c.rotation.x=-Math.PI/2,c.scale.set(r.rx+18,r.rz+18,1),c.position.set(r.centre.x,a,r.centre.z),c.receiveShadow=!0,e.add(c);const l=new de(new Mn(400,400),we("#58a843"));l.rotation.x=-Math.PI/2,l.position.set(0,a-.05,-40),e.add(l);const h=new de(new zi(.985,1,96),new Tt({color:"#ffffff"}));h.rotation.x=-Math.PI/2,h.scale.set(r.rx,r.rz,1),h.position.set(r.centre.x,a+.02,r.centre.z),e.add(h);const d=Ms(512,96,y=>{y.fillStyle="#d9c38a",y.fillRect(0,0,512,96),y.fillStyle="#cdb67a";for(let b=0;b<40;b++)y.fillRect(Math.random()*512,Math.random()*96,30,3);y.strokeStyle="#ffffff",y.lineWidth=3;for(const b of[38,474])y.beginPath(),y.moveTo(b,10),y.lineTo(b,86),y.stroke();y.beginPath(),y.moveTo(20,20),y.lineTo(56,20),y.moveTo(20,76),y.lineTo(56,76),y.moveTo(456,20),y.lineTo(492,20),y.moveTo(456,76),y.lineTo(492,76),y.stroke()}),u=new de(new Mn(r.pitchHalfLength*2+2.4,3.2),Cr(d));u.rotation.x=-Math.PI/2,u.position.set(r.pitch.x,a+.03,r.pitch.z),u.receiveShadow=!0,e.add(u);for(const y of[-1,1])for(let b=-1;b<=1;b++)e.add(hn(.03,.03,.72,we("#f4e6c0"),r.pitch.x+y*(r.pitchHalfLength-.2),a+.36,r.pitch.z+b*.11,6));const f=["HOWZAT!","Fine Leg Toilets","Beefy’s Burgers","The Twelfth Man","Riverside","JB’s Tab","Owzat Ales","Cow Corner Insurance"];for(let y=0;y<26;y++){const b=Math.PI*(.05+.9*y/25),N=r.centre.x-Math.cos(b)*(r.rx+2.5),z=r.centre.z+Math.sin(b)*(r.rz+2.5);if(z>-2.6)continue;const j=ps(f[y%f.length],["#1f4fbf","#c8102e","#2f8f4e","#f2b632","#2b2f3a"][y%5],"#ffffff",5.4,.8);j.position.set(N,a+.4,z),j.lookAt(r.centre.x,a+.4,r.centre.z),j.rotateY(Math.PI),e.add(j)}for(let y=0;y<9;y++){const b=ps(f[(y+3)%f.length],["#c8102e","#1f4fbf","#2f8f4e"][y%3],"#ffffff",4.2,.75);b.position.set(-19+y*4.75,a+.38,-.9),b.rotation.y=Math.PI,e.add(b)}const g=r.centre.z-r.rz-9,v=new Ct;v.add(qe(18,6,7,we("#f6efe0"),0,3,0)),v.add(qe(19,.5,8,we("#b8382c"),0,6.2,0));const m=new de(new Bi(4.5,2.6,4),we("#b8382c"));m.position.y=7.6,m.rotation.y=Math.PI/4,v.add(m),v.add(qe(1.4,1.4,.2,we("#ffffff"),0,7.6,3.2));for(let y=-3;y<=3;y++)v.add(qe(1.2,2,.2,we("#7fb4d8"),y*2.3,3.6,3.55,!1));v.add(qe(18,.3,2.2,we("#f6efe0"),0,1.4,4.4)),v.position.set(0,a,g-3),e.add(v);const p=document.createElement("canvas");p.width=512,p.height=256;const M=new Da(p);M.colorSpace=It;const w=new Ct;w.add(qe(10,5,.6,we("#1d2b22"),0,4.5,0));const x=new de(new Mn(9.2,4.4),new Tt({map:M}));x.position.set(0,4.5,.32),w.add(x),w.add(qe(.5,2.2,.5,we("#3b3b3b"),-3.5,1.1,0),qe(.5,2.2,.5,we("#3b3b3b"),3.5,1.1,0)),w.position.set(-27,a,-1),w.rotation.y=2.4,e.add(w);const S=y=>{const b=p.getContext("2d");b.fillStyle="#16231b",b.fillRect(0,0,512,256),b.fillStyle="#ffd23f",b.font='bold 34px "Trebuchet MS", sans-serif',b.textAlign="center",y.slice(0,4).forEach((N,z)=>{b.fillStyle=z===1?"#ffffff":"#ffd23f",b.font=z===1?'bold 64px "Trebuchet MS", sans-serif':'bold 30px "Trebuchet MS", sans-serif',b.fillText(N,256,[48,130,190,236][z])}),M.needsUpdate=!0};S(["RIVERSIDE","0/0","0.0 overs",""]);const E=new gl(.22,.35,2,6),R=new xu(E,new Vc,1400),_=new yt;let A=0;const C=["#e8503a","#f2b632","#3aa1d8","#ffffff","#1f4fbf","#56b870","#f07fb0","#c8102e","#2b2f3a"];for(const[y,b]of[[.1,.38],[.62,.9]])for(let N=0;N<5;N++){const z=1.12+N*.035,j=60;for(let ae=0;ae<=j;ae++){const ce=Math.PI*(y+(b-y)*ae/j),$=r.centre.x-Math.cos(ce)*r.rx*z,ee=r.centre.z-Math.sin(ce)*r.rz*z,he=qe(r.rx*z*Math.PI*(b-y)/j*1.06,.7,1.7,we(N%2?"#d9d4c7":"#c9c3b4"),$,a+.35+N*.7,ee,!1);he.rotation.y=-ce+Math.PI/2,he.castShadow=!1,e.add(he),A<1400&&i()<.85&&(_.position.set($+(i()-.5)*1.2,a+1.1+N*.7,ee),_.rotation.set(0,0,0),_.updateMatrix(),R.setMatrixAt(A,_.matrix),R.setColorAt(A,new Fe(C[Math.floor(i()*C.length)])),A++)}}R.count=A,e.add(R);for(let y=0;y<26;y++){const b=Math.PI*(y/25);e.add(jo(r.centre.x-Math.cos(b)*(r.rx+16+i()*6),r.centre.z-Math.sin(b)*(r.rz+14+i()*6),a,2+i()*1.2,i))}const L=ke.rows,I=we("#d8d2c4"),O=we("#c4bdac");for(let y=0;y<L;y++){const b=-.4*(L-y),N=y*ke.rowDepth,z=qe(ke.maxX-ke.minX+2,b+2.2,ke.rowDepth,y%2?I:O,0,(b-2.2)/2,N+ke.rowDepth/2,!1);e.add(z),t.push(z);const j=Pa(y);for(const[ae,ce]of Hd()){const $=ce-ae-.2,ee=(ae+ce)/2;e.add(qe($,.08,.48,we(y%2?"#3f8f4e":"#2f7d44"),ee,b+s-.04,j)),e.add(qe($,.32,.06,we(y%2?"#3f8f4e":"#2f7d44"),ee,b+s+.2,j+.26));for(let he=ae+.4;he<=ce-.3;he+=1.6)e.add(qe(.07,s,.4,we("#55595e"),he,b+s/2,j,!1))}}for(const y of ke.aisles){for(let N=0;N<16;N++){const z=ke.back*N/16,j=-.4*L+ke.rowRise*L*(N+.5)/16,ae=qe(y.half*2,j+2.2,ke.back/16+.01,N%2?we("#e6e0d2"):we("#efe9dc"),y.x,(j-2.2)/2,z+ke.back/16/2,!1);e.add(ae),t.push(ae)}e.add(qe(.06,.9,ke.back,we("#f2b632"),y.x-y.half,-.6,ke.back/2,!1)),e.add(qe(.06,.9,ke.back,we("#f2b632"),y.x+y.half,-.6,ke.back/2,!1))}e.add(qe(ke.maxX-ke.minX+2,1.2,.3,we("#ffffff"),0,a+.6+.4,-.15)),e.add(qe(ke.maxX-ke.minX+2,.08,.08,we("#2f3e5c"),0,-.4*L+.95,.05));for(const y of[-1,1])e.add(qe(1,2.4,ke.back+.6,we("#c4bdac"),y*(ke.maxX+1.5),-1.2,ke.back/2));const D=Ms(256,256,y=>{y.fillStyle="#e9dfca",y.fillRect(0,0,256,256),y.strokeStyle="#d6cab1",y.lineWidth=4;for(let b=0;b<=4;b++)y.beginPath(),y.moveTo(0,b*64),y.lineTo(256,b*64),y.stroke();for(let b=0;b<4;b++)for(let N=0;N<=2;N++){const z=N*128+b%2*64;y.beginPath(),y.moveTo(z,b*64),y.lineTo(z,b*64+64),y.stroke()}},[24,10]),B=new de(new Mn(50,18),Cr(D));B.rotation.x=-Math.PI/2,B.position.set(0,0,ke.back+9),B.receiveShadow=!0,e.add(B),t.push(B);const K=new de(new Mn(120,60),we("#5fae48"));K.rotation.x=-Math.PI/2,K.position.set(0,-.02,40),K.receiveShadow=!0,e.add(K);for(const y of[-1,1]){e.add(qe(.4,1.1,5.5,we("#b5523b"),y*22.6,.55,22.5)),e.add(qe(.4,1.1,4,we("#b5523b"),y*22.6,.55,7+ke.back-6));for(const b of[10,16.4])e.add(qe(.5,2.4,.5,we("#2f3e5c"),y*22.6,1.2,b))}e.add(qe(46,2.6,.5,we("#b5523b"),0,1.3,25.8)),e.add(qe(46,.12,.6,we("#ffffff"),0,2.66,25.8));for(let y=0;y<9;y++)e.add(jo(-24+y*6+i()*2,29+i()*3,0,1.6+i()*.6,i));for(const y of[4,12,20])for(const b of[-1,1])e.add(jo(b*(27+i()*3),y,0,1.7+i()*.5,i));const V=Ye.bar,te=new Ct,Z=V.maxX-V.minX,ne=V.maxZ-V.minZ,q=(V.minX+V.maxX)/2,_e=(V.minZ+V.maxZ)/2;te.add(qe(Z,3.4,ne,we("#f3e3c0"),q,1.7,_e)),te.add(qe(Z+.4,.4,ne+.4,we("#2f5d3a"),q,3.6,_e)),te.add(qe(Z-1,1.1,.5,we("#8b5a32"),q,.55,V.minZ+.2)),te.add(qe(Z-.8,.08,.7,we("#c98a4b"),q,1.12,V.minZ+.2)),te.add(qe(Z-1.6,1.6,.05,we("#3a2a1e"),q,1.95,V.minZ-.01,!1));for(let y=0;y<6;y++){const b=V.minX+1.6+y*1.5;te.add(hn(.05,.05,.4,we("#d9d9d9"),b,1.35,V.minZ+.1,6)),te.add(hn(.08,.08,.12,we(["#c8102e","#f2b632","#2f8f4e"][y%3]),b,1.6,V.minZ+.1,8))}for(let y=0;y<18;y++)te.add(hn(.06,.06,.28,we(["#3f8f4e","#8a4b1f","#c8102e","#e8c45a"][y%4]),V.minX+1.2+y*.5,2.25+y%2*.45,V.minZ+.35,6));const Me=Fd(Z,1.7,"#ffffff","#2f8f4e");Me.rotation.x=-Math.PI/2+.35,Me.position.set(q,2.85,V.minZ-.75),te.add(Me);const tt=ps("THE TWELFTH MAN","#2f5d3a","#ffe9a8",7.5,1.2);tt.position.set(q,4.4,V.minZ-.05),te.add(tt);for(let y=0;y<3;y++)te.add(hn(.35,.35,.8,we("#9aa3b0"),V.minX-.6,.4,V.minZ+.8+y*.9,10));te.userData.facility="bar",e.add(te),n.push(te);const G=Ye.food,oe=new Ct,H=G.maxX-G.minX,Q=G.maxZ-G.minZ,le=(G.minX+G.maxX)/2,Ue=(G.minZ+G.maxZ)/2;oe.add(qe(H,3,Q,we("#e8503a"),le,1.5,Ue)),oe.add(qe(H-.8,1.4,.05,we("#3a2418"),le,1.75,G.minZ-.01,!1)),oe.add(qe(H-.4,1.05,.5,we("#f2b632"),le,.52,G.minZ+.15)),oe.add(qe(H-.2,.08,.7,we("#ffffff"),le,1.08,G.minZ+.15));const re=Fd(H+.4,1.5,"#ffffff","#e8503a");re.rotation.x=-Math.PI/2+.35,re.position.set(le,2.65,G.minZ-.65),oe.add(re);const Se=ps("BEEFY’S BURGERS","#f2b632","#7a2a12",5.6,1);Se.position.set(le,3.55,G.minZ-.05),oe.add(Se);const bt=new Ct,He=new de(new Ai(1.3,16,8,0,Math.PI*2,0,Math.PI/2),we("#e0a050"));He.position.y=.45;const Ke=hn(1.4,1.4,.35,we("#6b3a1e"),0,.25,0,16),at=hn(1.45,1.45,.1,we("#6cbf55"),0,.45,0,16),We=qe(2.3,.06,2.3,we("#ffd23f"),0,.42,0);We.rotation.y=.4;const xt=hn(1.3,1.2,.35,we("#e0a050"),0,-.05,0,16);bt.add(He,Ke,at,We,xt),bt.position.set(le,4.5,Ue+.5),oe.add(bt),oe.userData.facility="food",e.add(oe),n.push(oe);const it=Ye.toilet,At=new Ct,_t=it.maxX-it.minX,Lt=it.maxZ-it.minZ,F=(it.minX+it.maxX)/2,zt=(it.minZ+it.maxZ)/2;At.add(qe(_t,3.2,Lt,we("#bcd4e6"),F,1.6,zt)),At.add(qe(_t+.4,.35,Lt+.4,we("#2f3e5c"),F,3.4,zt));for(const[y,b,N]of[[it.counter.x-F,"#3a6fd8","GENTS"],[it.counter.x-F+4.2,"#d65a8a","LADIES"]]){At.add(qe(1.3,2.2,.08,we(b),F+y,1.1,it.minZ-.03));const z=ps(N,b,"#ffffff",1.6,.45);z.position.set(F+y,2.55,it.minZ-.06),At.add(z)}const rt=ps("FINE LEG TOILETS","#2f3e5c","#ffffff",6.5,1);rt.position.set(F,4.1,it.minZ-.05),At.add(rt);for(let y=0;y<4;y++)At.add(qe(.9,.5,.05,we("#e8f2f8"),it.minX+1+y*2.6,2.7,it.minZ-.01,!1));At.userData.facility="toilet",e.add(At),n.push(At);for(const y of un.tables)e.add(iy(y.x,y.z));for(const y of un.bins)e.add(hn(.32,.28,.9,we("#2f8f4e"),y.x,.45,y.z,10)),e.add(hn(.34,.34,.08,we("#1f6a38"),y.x,.92,y.z,10));for(const y of un.planters){e.add(qe(1.4,.5,1,we("#a0663f"),y.x,.25,y.z));for(let b=0;b<3;b++){const N=new de(new Fa(.42,1),we(["#4f9e45","#6cbf55","#f07fb0"][b]));N.position.set(y.x-.4+b*.4,.75,y.z),N.castShadow=!0,e.add(N)}}for(const y of un.poles){e.add(hn(.07,.09,4.2,we("#ffffff"),y.x,2.1,y.z,6));const b=new de(new Mn(1.2,.7),new Tt({map:Ms(64,40,N=>{N.fillStyle="#fff",N.fillRect(0,0,64,40),N.fillStyle="#c8102e",N.fillRect(26,0,12,40),N.fillRect(0,14,64,12)}),side:Gt}));b.position.set(y.x+.6,3.8,y.z),e.add(b)}for(let y=0;y<un.poles.length-1;y++)e.add(Jo(un.poles[y],un.poles[y+1],3.9));return e.add(Jo({x:Ye.bar.maxX,z:19.6},{x:Ye.food.minX,z:19.6},3.3),Jo({x:Ye.food.maxX,z:19.6},{x:Ye.toilet.minX,z:19.6},3.3)),{group:e,ground:t,buildings:n,setScoreboard:S,field:r}}const ay={model:"Casual2_Male",bespoke:"mike",colours:{skin:"#efc09a",hair:"#6f6a64",hair2:"#c3c0ba",shirt:"#f7f5f0",sleeve:"#f7f5f0",arm:"#efc09a",shirtFront:"#f7f5f0",chest:"#efc09a",jacket:"#46301f",trim:"#2a1b12",lens:"#111114",glint:"#e8f2ff",pants:"#3c5f93",pantsLow:"#3c5f93",cuff:"#6b8cc0",leg:"#3c5f93",foot:"#f6f6f2",sole:"#d9d7cf",stripe:"#1f2f6b",belt:"#2a1a10"}},ry={model:"Casual_Male",bespoke:"jb",colours:{skin:"#eab48c",hair:"#6b4426",hair2:"#4e2f19",shirt:"#efe4c8",shirtFront:"#efe4c8",sleeve:"#efe4c8",trim:"#f7efdc",button:"#a8936a",hat:"#efe6cf",band:"#2f6f3a",glint:"#8c8a80",pants:"#5f6b2e",pantsLow:"#5f6b2e",cuff:"#535e27",foot:"#7a5a3c",sole:"#efe6d2",belt:"#5a4a2a"}},oy=["Casual_Male","Casual2_Male","Casual3_Male","Casual_Female","Casual2_Female","Casual3_Female","Casual_Bald","OldClassy_Male"],Yc=["#f6d0b1","#efc09a","#e2a982","#c98d62","#a86e48","#7d4f33","#f3c9a8"],cy=["#f04a32","#ffc21a","#2fa8f0","#44c45e","#9b5fe0","#ff7ab8","#ffffff","#30406a","#ff8a1f","#7fd8ff","#e8325a","#fff1c9","#18b8a8"],ly=["#3c5f93","#2b2f3a","#6b5b45","#c9b68f","#4f6b3a","#7a7f8c","#24324f","#e8e2d0"],ef=["#2b1d14","#5a3b22","#8a5a2b","#d8b45a","#b9b9b6","#e4e0d8","#a3402a","#1a1a1a"],hy=["#f6f6f2","#2a2a30","#7a5a3c","#c8102e","#3a6fd8"],Ud={shirt:"#1f4fbf",sleeve:"#c8102e"},dn=(s,e)=>e[Math.floor(s()*e.length)%e.length],dy={model:"Casual3_Male",colours:{skin:"#e2a982",hair:"#2b1d14",shirt:"#d8f23a",shirtFront:"#ff9a1f",sleeve:"#30406a",arm:"#30406a",pants:"#24324f",pantsLow:"#24324f",foot:"#1f1f24"},accessories:["cap","mop"],accent:"#24324f"},Yo=[{colours:{shirt:"#ffe12a",shirtFront:"#ffe12a",sleeve:"#ffe12a",arm:"#ffe12a",pants:"#ffe12a",pantsLow:"#ffe12a",leg:"#ffe12a",hair:"#5a3b10"},accessories:[]},{colours:{shirt:"#30406a",sleeve:"#30406a",shirtFront:"#30406a"},accessories:["cone"]},{colours:{shirt:"#8a5a2b",shirtFront:"#c9a46a",sleeve:"#8a5a2b",pants:"#5a3b22",pantsLow:"#5a3b22",hair:"#e0a030"},accessories:["viking"]},{colours:{shirt:"#7a2fb8",shirtFront:"#f4ead0",sleeve:"#7a2fb8",pants:"#f4ead0",pantsLow:"#f4ead0"},accessories:["crown"]},{colours:{shirt:"#ff5fd2",shirtFront:"#ffe12a",sleeve:"#2fd8ff",pants:"#ffffff",pantsLow:"#ffffff"},accessories:["afro","sunglasses"],accent:"#ff6a1a"},{colours:{shirt:"#1a1a1e",shirtFront:"#ffffff",sleeve:"#1a1a1e",pants:"#1a1a1e",pantsLow:"#1a1a1e"},accessories:["topHat"]},{colours:{shirt:"#1f5fd8",shirtFront:"#ffd23f",sleeve:"#1f5fd8",pants:"#d8282e",pantsLow:"#1f5fd8",foot:"#d8282e"},accessories:[]},{colours:{shirt:"#ffffff",shirtFront:"#d8282e",sleeve:"#ffffff",pants:"#1f4fbf",pantsLow:"#1f4fbf"},accessories:["afro"],accent:"#d8282e"}];function uy(s){const e=Rs(s*7919+17),t=dn(e,oy),n=e(),i=e()<.36,a=i?Ud.shirt:dn(e,cy),r={skin:dn(e,Yc),hair:dn(e,ef),shirt:a,sleeve:i?Ud.sleeve:a,shirtFront:a,pants:dn(e,ly),foot:dn(e,hy)};t==="OldClassy_Male"&&(r.detail=dn(e,["#c8102e","#2f3e5c","#e8a23a"]),r.hat=dn(e,["#2b2b2b","#e9cf86","#4a3a2a"]));const o=[],c=e();t!=="OldClassy_Male"&&(c<.2?o.push("sunHat"):c<.36?o.push("cap"):c<.45&&o.push("bucketHat")),e()<.12&&o.push("sunglasses");const l=.92+e()*.14;if(n<.11&&t!=="OldClassy_Male"){const h=Yo[Math.floor(e()*Yo.length)%Yo.length];return{model:t,colours:{...r,...h.colours},accessories:[...h.accessories??[]],accent:h.accent??"#c8102e",height:l}}return{model:t,colours:r,accessories:o,accent:i?"#c8102e":dn(e,["#c8102e","#1f4fbf","#2f8f4e","#f2b632"]),height:l}}function tf(s,e,t){const n=Rs(s*104729+3),i=dn(n,["Casual_Male","Casual2_Male","Casual3_Male","Casual_Bald"]);if(e==="umpire")return{model:i,colours:{skin:dn(n,Yc),hair:"#e4e0d8",shirt:"#f7f5ee",pants:"#2b2f3a",foot:"#2a2a30",arm:"#f7f5ee"},accessories:["sunHat"],accent:"#2b2f3a"};const a={shirt:"#fbfaf5",sleeve:"#fbfaf5",shirtFront:"#fbfaf5",pants:"#f4f1e6",pantsLow:"#f4f1e6",leg:"#f4f1e6",foot:"#f6f6f2",belt:"#d8d2c0"};return{model:i,colours:{skin:dn(n,Yc),hair:dn(n,ef),...a},accessories:[e==="batter"||e==="keeper"?"helmet":"cap"],accent:e==="batter"?"#1b2a52":t}}class fy{constructor(e,t,n,i="#1d4fb8"){Y(this,"group",new Ct);Y(this,"players",[]);Y(this,"bowler");Y(this,"batter");Y(this,"keeper");Y(this,"umpire");Y(this,"nonStriker");Y(this,"fielders",[]);Y(this,"phase","walkback");Y(this,"t",0);Y(this,"ball");Y(this,"ballFlight",null);Y(this,"stumps",[]);Y(this,"y");Y(this,"z");Y(this,"half");Y(this,"runStart");Y(this,"crease");Y(this,"celebrate",0);Y(this,"fieldCentre");Y(this,"fieldR");this.kit=e;const a=t.field;this.fieldCentre=a.centre,this.fieldR={x:a.rx,z:a.rz},this.y=a.y,this.z=a.pitch.z,this.half=a.pitchHalfLength;const r=(d,u)=>new P(a.pitch.x+d,a.y,a.pitch.z+u),o=(d,u,f,g)=>{const v=new gs(e,tf(d,u,i),n);v.root.position.copy(f),v.root.rotation.y=g,v.mesh.castShadow=!1,v.play(Oe.idle,{fade:0,startAt:d*.37%1}),this.group.add(v.root);const m={ch:v,home:f.clone(),target:null,speed:3,facing:g};return this.players.push(m),m},c=-Math.PI/2,l=Math.PI/2;this.runStart=r(this.half+9,.6),this.crease=r(this.half+.6,.4),this.bowler=o(1,"fielder",this.runStart.clone(),c),this.batter=o(2,"batter",r(-this.half+.6,.35),l),this.nonStriker=o(3,"batter",r(this.half+.8,-1.3),c),this.keeper=o(4,"keeper",r(-this.half-2.4,0),l),this.umpire=o(5,"umpire",r(this.half+2,-.9),c),[[-this.half-4,-2.5],[-4,6],[6,7.5],[16,5],[17,-9],[2,-15],[-13,-10],[-25,5],[-6,8.5]].forEach(([d,u],f)=>{const g=o(10+f,"fielder",r(d,u),Math.atan2(-(d- -this.half),-u));this.fielders.push(g)}),this.ball=new de(new Ai(.11,10,8),new Vc({color:"#d4202a",emissive:"#300"})),this.ball.visible=!1,this.group.add(this.ball);for(let d=-1;d<=1;d++){const u=new de(new Rt(.035,.035,.72,6),new Vc({color:"#f4e6c0"}));u.position.set(a.pitch.x-this.half+.2,a.y+.36,a.pitch.z+d*.11),this.group.add(u),this.stumps.push(u)}}get batterPosition(){return this.batter.ch.root.position.clone().add(new P(.4,1.1,0))}fly(e,t,n,i,a=!1,r){this.ball.visible=!0,this.ball.position.copy(e),this.ballFlight={from:e.clone(),to:t.clone(),t:0,dur:n,height:i,bounce:a,onLand:r}}trigger(e,t,n=2.6){this.batter.ch.play(Oe.swing,{once:!0,fade:.08,timeScale:1.4});const i=this.batterPosition;if(e==="six"){const a=t??new P(-20+Math.random()*40,this.y+2,this.z-30);this.fly(i,a,n,16,!1,()=>{this.ball.visible=!1})}else if(e==="four"){const a=Math.random()*Math.PI*2,r=new P(this.fieldCentre.x+Math.cos(a)*this.fieldR.x*.96,this.y+.1,this.fieldCentre.z+Math.sin(a)*this.fieldR.z*.96);this.fly(i,r,1.6,.6,!0);let o=this.fielders[0],c=1/0;for(const l of this.fielders){const h=l.ch.root.position.distanceTo(r);h<c&&(c=h,o=l)}o.target=r.clone().lerp(o.home,.25),o.speed=6}else{this.stumps.forEach((a,r)=>{a.rotation.z=(r-1)*.5+.3,a.rotation.x=.4}),window.setTimeout(()=>this.stumps.forEach(a=>a.rotation.set(0,0,0)),3500),this.batter.ch.play(Oe.sad,{once:!0,fade:.2}),this.celebrate=2.6;for(const a of[...this.fielders,this.bowler,this.keeper])a.ch.play(Oe.cheer,{fade:.2})}this.phase="walkback",this.t=0}walk(e,t){if(!e.target)return!1;const n=e.ch.root.position,i=Math.hypot(e.target.x-n.x,e.target.z-n.z);if(i<.05)return e.target=null,!1;const a=Math.min(i,e.speed*t);return n.x+=(e.target.x-n.x)/i*a,n.z+=(e.target.z-n.z)/i*a,e.ch.root.rotation.y=Math.atan2(e.target.x-n.x,e.target.z-n.z),!0}update(e){var n;this.t+=e;const t=this.bowler;if(this.celebrate>0&&(this.celebrate-=e)<=0)for(const i of[...this.fielders,this.bowler,this.keeper])i.ch.play(Oe.idle),i.ch.root.rotation.y=i.facing;if(this.celebrate<=0)if(this.phase==="walkback")t.target=this.runStart,t.speed=1.6,this.walk(t,e)?t.ch.play(Oe.walk,{timeScale:1.6/this.kit.walkSpeed/this.kit.unitScale}):(t.ch.play(Oe.idle),t.ch.root.rotation.y=-Math.PI/2,this.t>4&&(this.phase="runup",this.t=0));else if(this.phase==="runup"){if(t.target=this.crease,t.speed=5.2,t.ch.play(Oe.run,{timeScale:5.2/this.kit.runSpeed/this.kit.unitScale,fade:.15}),!this.walk(t,e)){this.phase="deliver",this.t=0,t.ch.play(Oe.punch,{once:!0,fade:.1,timeScale:1.3});const i=t.ch.root.position.clone().add(new P(-.3,2,0)),a=this.batterPosition.clone().setY(this.y+.7);this.fly(i,a,.55,.3,!0,()=>{this.batter.ch.play(Oe.swing,{once:!0,fade:.08,timeScale:1.5}),this.fly(this.batterPosition.clone().setY(this.y+.6),this.keeper.ch.root.position.clone().add(new P(.3,.9,0)),.45,.2,!1,()=>{this.ball.visible=!1})})}}else this.phase==="deliver"&&this.t>1.4&&(this.phase="walkback",this.t=0,t.ch.play(Oe.walk));this.batter.ch.finished()&&this.batter.ch.current!==Oe.idle&&(this.batter.ch.play(Oe.idle,{fade:.3}),this.batter.ch.root.rotation.y=Math.PI/2);for(const i of this.fielders)i.target?this.walk(i,e)?i.ch.play(Oe.run,{timeScale:i.speed/this.kit.runSpeed/this.kit.unitScale,fade:.15}):i.target||(i.target=i.home.clone(),i.speed=1.8):i.ch.root.position.distanceTo(i.home)>.1?(i.target=i.home.clone(),i.speed=1.8):this.celebrate<=0&&i.ch.current!==Oe.idle&&(i.ch.play(Oe.idle,{fade:.3}),i.ch.root.rotation.y=i.facing),i.target&&i.speed<3&&i.ch.play(Oe.walk,{timeScale:i.speed/this.kit.walkSpeed/this.kit.unitScale});if(this.ballFlight){const i=this.ballFlight;i.t+=e;const a=Math.min(1,i.t/i.dur);this.ball.position.lerpVectors(i.from,i.to,a);const r=i.bounce?Math.abs(Math.sin(a*Math.PI*(i.height<1?3:1)))*i.height:Math.sin(a*Math.PI)*i.height;this.ball.position.y+=r,a>=1&&(this.ballFlight=null,(n=i.onLand)==null||n.call(i))}for(const i of this.players)i.ch.update(e)}}const ta={forward:.35,outward:.25},Zo=new P,kd=new P,Od=new nn,Bd=new nn,py=new nn,$o=90;function vr(s,e,t){let n=(e-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*t}class Mr{constructor(e,t=0){Y(this,"sitting",!1);Y(this,"sitBlend",0);Y(this,"look",{phase:0,period:12});Y(this,"raise",0);Y(this,"saved",[]);this.ch=e;const n=Math.sin(t*12.9898)*43758.5453%1,i=Math.abs(n);this.look={phase:i*Math.PI*2,period:vn.seatedLook.period[0]+i*(vn.seatedLook.period[1]-vn.seatedLook.period[0])}}}function my(s){try{const e=s.getExtension("WEBGL_debug_renderer_info"),t=String(s.getParameter(e?e.UNMASKED_RENDERER_WEBGL:s.RENDERER)??"");return/swiftshader|llvmpipe|softpipe|software|basic render driver/i.test(t)}catch{return!1}}class gy{constructor(e,t,n,i=!1){Y(this,"renderer");Y(this,"pixelArt",0);Y(this,"softwareGL");Y(this,"scene",new Tm);Y(this,"camera",new Ua(-10,10,10,-10,.5,400));Y(this,"venue");Y(this,"crowd");Y(this,"pitch");Y(this,"mike");Y(this,"jb");Y(this,"people",new Map);Y(this,"staff",[]);Y(this,"steward");Y(this,"puddles",new Map);Y(this,"drops",[]);Y(this,"dropGeo",new Ai(.13,6,4));Y(this,"dropMat",new Tt({color:"#a8d23a"}));Y(this,"alerts",new Map);Y(this,"alertMats",{vomit:zd("vomit"),fall:zd("fall")});Y(this,"tray",new Ct);Y(this,"trayPints",[]);Y(this,"shadowDisc");Y(this,"catchRing");Y(this,"marker");Y(this,"mikeTag");Y(this,"markerT",0);Y(this,"zoneRings",[]);Y(this,"sun");Y(this,"cam",{target:new P(Bt.start.x,0,Bt.start.z),zoom:Bt.defaultZoom,yaw:0,follow:!1,glide:null});Y(this,"time",0);Y(this,"mikeCheer",0);Y(this,"mikeIdle",0);Y(this,"lastSeen",{score:""});Y(this,"input",{move:{x:0,z:0},tray:0});Y(this,"armRaise",ta);Y(this,"seenIncidents",0);var w;this.canvasParent=e,this.kit=t,this.session=n,this.cpuSkin=i;const a=new URLSearchParams(window.location.search).get("pixel");let r=0;try{r=Number(window.localStorage.getItem("howzat.arcade.pixel"))||0}catch{}const o=a!==null?Number(a)||0:r;this.renderer=new cM({antialias:o<=0,preserveDrawingBuffer:i}),this.setPixelArt(o,!1),this.softwareGL=my(this.renderer.getContext()),this.renderer.shadowMap.enabled=!this.softwareGL&&new URLSearchParams(window.location.search).get("shadows")!=="0";const c=new URLSearchParams(window.location.search).get("outline");As.enabled=c!==null?c==="1":!this.softwareGL&&((w=window.matchMedia)==null?void 0:w.call(window,"(pointer: fine)").matches)===!0,this.renderer.shadowMap.type=oa,this.renderer.outputColorSpace=It,e.appendChild(this.renderer.domElement);const l=document.createElement("canvas");l.width=2,l.height=256;const h=l.getContext("2d"),d=h.createLinearGradient(0,0,0,256);d.addColorStop(0,"#5fb6f0"),d.addColorStop(.6,"#a9dcff"),d.addColorStop(1,"#e8f6ff"),h.fillStyle=d,h.fillRect(0,0,2,256);const u=new Da(l);u.colorSpace=It,this.scene.background=u,this.scene.add(new Vg("#e4f3ff","#8dbb6a",1.35)),this.sun=new ku("#fff1d6",2.1),this.sun.position.set(16,34,-18),this.sun.target.position.set(0,0,8),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const f=this.sun.shadow.camera;f.left=-30,f.right=30,f.top=24,f.bottom=-24,f.near=5,f.far=90,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3,this.scene.add(this.sun,this.sun.target);const g=Pt(t.sitHip.y*t.unitScale-.14,.3,.6);this.venue=sy(g),this.scene.add(this.venue.group),this.pitch=new fy(t,this.venue,i),this.scene.add(this.pitch.group),this.mike=new Mr(new gs(t,ay,i)),this.jb=new Mr(new gs(t,ry,i)),this.scene.add(this.mike.ch.root,this.jb.ch.root),this.crowd=new np(n.seed,n.nav),this.syncPeople(!0),this.steward=new Mr(new gs(t,dy,i),777),this.steward.ch.root.visible=!1,this.scene.add(this.steward.ch.root);const v=[[Ye.bar.counter.x-1.6,Ye.bar.minZ+.9,1],[Ye.bar.counter.x+2.2,Ye.bar.minZ+.9,2],[Ye.food.counter.x+.8,Ye.food.minZ+.9,3]];for(const[x,S,E]of v){const R=tf(E+40,"fielder","#c8102e");R.colours={...R.colours,shirt:E===3?"#ffffff":"#2f5d3a",sleeve:E===3?"#ffffff":"#2f5d3a",shirtFront:E===3?"#e8503a":"#2f5d3a",pants:"#2b2f3a",pantsLow:"#2b2f3a",leg:"#2b2f3a",foot:"#2a2a30"},R.accessories=E===3?["cap"]:[];const _=new gs(t,R,i);_.root.position.set(x,0,S),_.root.rotation.y=Math.PI,_.play(Oe.idle,{fade:0,startAt:E*.3}),this.scene.add(_.root),this.staff.push(_)}this.tray.add(new de(new Rt(.32,.32,.03,20),we("#b9bec6")));for(let x=0;x<4;x++){const S=$u();S.position.set((x%2-.5)*.24,.12,(Math.floor(x/2)-.5)*.2),this.tray.add(S),this.trayPints.push(S)}this.tray.visible=!1,this.scene.add(this.tray),this.shadowDisc=new de(new Na(1,28),new Tt({color:"#000000",transparent:!0,opacity:.35,depthWrite:!1})),this.shadowDisc.rotation.x=-Math.PI/2,this.shadowDisc.visible=!1,this.scene.add(this.shadowDisc),this.catchRing=new de(new zi(.9,1,40),new Tt({color:"#ffd23f",transparent:!0,opacity:.9,depthWrite:!1,side:Gt})),this.catchRing.rotation.x=-Math.PI/2,this.catchRing.visible=!1,this.scene.add(this.catchRing);const m=new vl;m.moveTo(-.22,.2),m.lineTo(.22,.2),m.lineTo(0,-.12),m.lineTo(-.22,.2),this.mikeTag=new de(new Aa(m),new Tt({color:"#ffd23f",depthTest:!1,transparent:!0,opacity:.95}));const p=new de(new Aa(m),new Tt({color:"#1d2a22",depthTest:!1,transparent:!0}));p.scale.setScalar(1.3),p.position.set(0,.015,-.001),p.renderOrder=9,this.mikeTag.add(p),this.mikeTag.renderOrder=10,this.scene.add(this.mikeTag),this.marker=new de(new zi(.25,.36,24),new Tt({color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1,side:Gt})),this.marker.rotation.x=-Math.PI/2,this.marker.visible=!1,this.scene.add(this.marker);const M=[["bar",{x:Ye.bar.counter.x,z:16.5},2.4],["food",{x:Ye.food.counter.x,z:16.5},2.2],["toilet",{x:Ye.toilet.counter.x,z:16.5},2.4],["seats",wi.centre,wi.radius-.3]];for(const[x,S,E]of M){const R=new de(new zi(E-.12,E,48),new Tt({color:x==="seats"?"#2f8f4e":"#1fb5ad",transparent:!0,opacity:.45,depthWrite:!1,side:Gt}));R.rotation.x=-Math.PI/2,R.position.set(S.x,on(S)+.03,S.z),this.scene.add(R),this.zoneRings.push({mesh:R,zone:x})}this.mike.ch.root.position.set(n.mike.x,on(n.mike),n.mike.z),this.mike.ch.heading=n.heading,this.mike.ch.play(Oe.idle,{fade:0}),this.jb.ch.play(Oe.sit,{fade:0,once:!0,startAt:.999}),this.jb.sitting=!0,this.jb.sitBlend=1,this.resize(),window.addEventListener("resize",()=>this.resize())}setPixelArt(e,t=!0){if(this.pixelArt=e>0?Math.max(2,Math.min(4,e===1?2:e)):0,this.renderer.setPixelRatio(this.pixelArt?1/this.pixelArt:Math.min(2,window.devicePixelRatio||1)),this.canvasParent.classList.toggle("pixel",this.pixelArt>0),t)try{window.localStorage.setItem("howzat.arcade.pixel",String(this.pixelArt))}catch{}this.renderer.domElement.parentElement&&this.resize()}resize(){const e=this.canvasParent,t=e.clientWidth||960,n=e.clientHeight||540;this.renderer.setSize(t,n,!0),this.placeCamera()}get yaw(){return Bt.yaws[this.cam.yaw%Bt.yaws.length]}get ppm(){return sp(this.canvasParent.clientWidth||960,this.canvasParent.clientHeight||540,this.cam.zoom)}placeCamera(){const e=this.canvasParent.clientWidth||960,t=this.canvasParent.clientHeight||540,n=this.ppm;As.width.value=Math.max(As.px,this.pixelArt*1.1)/n;const i=this.camera;i.left=-e/2/n,i.right=e/2/n,i.top=t/2/n,i.bottom=-t/2/n,i.updateProjectionMatrix();const a=this.cam.target,r=this.yaw,o=Bt.elevation;i.position.set(a.x+Math.sin(r)*Math.cos(o)*$o,a.y+Math.sin(o)*$o,a.z+Math.cos(r)*Math.cos(o)*$o),i.lookAt(a),i.updateMatrixWorld()}moveTarget(e,t){const n=rp({x:this.cam.target.x+e,z:this.cam.target.z+t});this.cam.target.set(n.x,0,n.z)}pan(e,t){const n=Yl(e,t,this.yaw,this.ppm);this.moveTarget(-n.x,-n.z),this.cam.follow=!1,this.cam.glide=null}scroll(e,t,n,i=Bt.edgeSpeed){if(!e&&!t)return;const a=Yl(e*i*n,t*i*n,this.yaw,this.ppm);this.moveTarget(a.x,a.z),this.cam.follow=!1,this.cam.glide=null}zoomStep(e){return this.cam.zoom=ap(this.cam.zoom,e),this.placeCamera(),this.cam.zoom}zoom(e){Math.abs(Math.log(e))>.01&&this.zoomStep(e<1?1:-1)}rotate(){this.cam.yaw=(this.cam.yaw+1)%Bt.yaws.length,this.placeCamera()}cameraDir(e,t){const{right:n,forward:i}=Vd(this.yaw);return{x:i.x*e+n.x*t,z:i.z*e+n.z*t}}followMike(){this.cam.follow=!0,this.cam.glide=null}glideTo(e){this.cam.follow=!1,this.cam.glide=new P(e.x,0,e.z)}setView(e,t,n){this.cam.target.set(e,0,t),n!==void 0&&(this.cam.zoom=n<20?2:n<40?1:0),this.cam.follow=!1,this.cam.glide=null,this.placeCamera()}onScreen(e,t=40){const n=this.screenOfPoint(e),i=this.canvasParent.clientWidth,a=this.canvasParent.clientHeight;return n.x>t&&n.y>t&&n.x<i-t&&n.y<a-t}pick(e,t){const n=this.renderer.domElement.getBoundingClientRect(),i=new ue((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),a=new h0;a.setFromCamera(i,this.camera);const r=a.intersectObjects([...this.venue.ground,...this.venue.buildings],!0);for(const o of r){let c=o.object;for(;c&&!c.userData.facility;)c=c.parent;return c!=null&&c.userData.facility?{point:{x:Ye[c.userData.facility].counter.x,z:16.5},facility:c.userData.facility}:{point:{x:o.point.x,z:o.point.z}}}return null}showMarker(e){this.marker.position.set(e.x,on(e)+.04,e.z),this.marker.visible=!0,this.markerT=0}screenOf(e){const n=(e==="jb"?this.jb.ch:this.mike.ch).root.position.clone().add(new P(0,e==="jb"&&this.jb.sitting?1.9:2.4,0)).project(this.camera),i=this.canvasParent.clientWidth,a=this.canvasParent.clientHeight;return{x:(n.x+1)/2*i,y:(1-n.y)/2*a,visible:n.z<1&&Math.abs(n.x)<1.1&&Math.abs(n.y)<1.1}}screenOfPoint(e){const t=new P(e.x,on(e),e.z).project(this.camera);return{x:(t.x+1)/2*this.canvasParent.clientWidth,y:(1-t.y)/2*this.canvasParent.clientHeight}}syncPeople(e=!1){for(const t of this.crowd.agents){let n=this.people.get(t.id);n||(n=new Mr(new gs(this.kit,uy(t.look),this.cpuSkin),t.id),this.people.set(t.id,n),this.scene.add(n.ch.root),n.ch.root.position.set(t.pos.x,on(t.pos),t.pos.z),n.ch.heading=t.heading,t.mode==="seated"?(n.ch.play(Oe.sit,{fade:0,once:!0,startAt:.999}),n.sitting=!0,n.sitBlend=1):n.ch.play(Oe.idle,{fade:0,startAt:t.id*.137%1}),e||(n.ch.root.visible=t.mode!=="gone"))}}seatPosition(e){const t=-this.kit.sitHip.z*this.kit.unitScale;return new P(e.x,on({x:e.x,z:e.z-.6}),e.z-t)}drive(e,t,n,i){const a=e.ch,r=a.root;if(r.visible=t.mode!=="gone",!r.visible)return;const o=t.mode==="seated",c=t.cheerLeft>0&&t.cheerDelay<=0,l=c&&t.cheerStand,h=c&&!t.cheerStand&&o;if(o){const u=this.seatPosition(i??t.seat??t.pos);r.position.lerp(u,Math.min(1,n*6)),a.heading=vr(a.heading,Math.PI,Math.min(1,n*8)),l?(a.current!==Oe.cheer&&(a.play(e.sitting?Oe.stand:Oe.cheer,{once:e.sitting,fade:.25,timeScale:vn.standUpTimeScale}),e.sitting=!1),a.current===Oe.stand&&a.finished()&&a.play(Oe.cheer,{fade:.25,timeScale:vn.animScale})):e.sitting||(a.play(Oe.sit,{once:!0,fade:.35,timeScale:1.1}),e.sitting=!0)}else{const u=on(t.pos);if(r.position.x+=(t.pos.x-r.position.x)*Math.min(1,n*12),r.position.z+=(t.pos.z-r.position.z)*Math.min(1,n*12),r.position.y+=(u-r.position.y)*Math.min(1,n*10),a.heading=vr(a.heading,t.heading,Math.min(1,n*9)),e.sitting=!1,t.moving>.08){const f=t.moving*vn.walkSpeed;f>2.8?a.play(Oe.run,{timeScale:f/(this.kit.runSpeed*this.kit.unitScale),fade:.25}):a.play(Oe.walk,{timeScale:Pt(f/(this.kit.walkSpeed*this.kit.unitScale),.4,2.2),fade:.25})}else l?a.play(Oe.cheer,{fade:.25,timeScale:vn.animScale}):a.play(Oe.idle,{fade:.35,timeScale:vn.animScale})}r.rotation.set(0,a.heading,0);const d=t.incident??null;d&&this.incidentPose(e,d),a.tintFace((d==null?void 0:d.kind)==="vomit"?Math.min(1,d.t/.8)*(d.phase==="recover"?Math.max(0,1-(d.t-gt.vomit.stagger-gt.vomit.heave)/gt.vomit.recover):1):0),a.hold(o||d?null:t.carry);for(const[u,f]of e.saved)u.quaternion.copy(f);if(e.saved=[],d){a.update(n,()=>this.heavePose(e,d));return}a.update(n,()=>this.seatedPose(e,o,h,n))}seatedPose(e,t,n,i){const a=e.ch;if(!(t&&e.sitting)){e.raise=0;return}const r=vn.seatedLook,o=this.time/e.look.period*Math.PI*2+e.look.phase,c=r.amount*Math.max(0,Math.sin(o))**3*(Math.sin(e.look.phase*3)>0?1:-1),l=a.bones.Head;l&&Math.abs(c)>.001&&(e.saved.push([l,l.quaternion.clone()]),l.rotateY(c)),e.raise+=((n?1:0)-e.raise)*Math.min(1,i*6);const h=a.bones.UpperArmR,d=a.bones.LowerArmR;if(h&&d&&h.parent&&e.raise>.01){e.saved.push([h,h.quaternion.clone()]);const u=d.getWorldPosition(Zo).sub(h.getWorldPosition(kd)).normalize(),f=a.heading,g={x:Math.cos(f),z:-Math.sin(f)},v=kd.set(Math.sin(f)*ta.forward-g.x*ta.outward,1,Math.cos(f)*ta.forward-g.z*ta.outward).normalize(),m=Od.setFromUnitVectors(u,v);Bd.identity().slerp(m,e.raise);const p=h.getWorldQuaternion(py).premultiply(Bd),M=h.parent.getWorldQuaternion(Od).invert();h.quaternion.copy(M.multiply(p))}}drainIncidentNews(){const e=this.crowd.incidents.log,t=[];for(let n=this.seenIncidents;n<e.length;n++){const i=e[n],a=this.crowd.agents.find(r=>r.id===i.id);t.push(Qf(i.kind,(a==null?void 0:a.fan.name)??"A fan",n))}return this.seenIncidents=e.length,t}incidentPose(e,t){const n=e.ch,i=n.root,a=gt.vomit,r=gt.fall,o=c=>{i.rotateZ(Math.sin(t.t*5.2)*c),i.rotateX(Math.sin(t.t*3.1+1)*c*.5)};if(t.phase==="stagger")n.play(Oe.idle,{fade:.2,timeScale:1.6}),o(.22),i.position.x+=Math.sin(t.t*2.6)*.004;else if(t.kind==="vomit")t.phase==="heave"?(n.play(Oe.idle,{fade:.2,timeScale:.5}),o(.06),this.spew(e,t)):(n.play(Oe.idle,{fade:.3}),o(.08*(1-(t.t-a.stagger-a.heave)/a.recover)));else{const c=r.stagger,l=t.phase==="down"?(t.t-c)/r.down:t.phase==="lie"?1:t.phase==="up"?1-(t.t-c-r.down-r.lie)/r.up:0,h=t.phase==="down"?l*l:1-(1-l)*(1-l);n.play(t.phase==="up"?Oe.idle:Oe.sad,{fade:.15,timeScale:1.4,once:t.phase!=="up"}),i.rotateX(h*Math.PI*.47),i.position.y+=h*.12,t.phase==="lie"&&i.rotateZ(Math.sin(t.t*9)*.03)}}heavePose(e,t){if(t.kind!=="vomit"||t.phase!=="heave")return;const n=e.ch,i=n.bones.Torso,a=n.bones.Head,r=Math.min(1,(t.t-gt.vomit.stagger)*3),o=.65+.15*Math.sin(t.t*14);i&&(e.saved.push([i,i.quaternion.clone()]),i.rotateX(-r*o)),a&&(e.saved.push([a,a.quaternion.clone()]),a.rotateX(-r*.35))}spew(e,t){const n=gt.vomit;if(t.t<n.stagger+.2||t.t>n.stagger+n.heave-.3)return;const i=e.ch.bones.Head;if(!i)return;const a=i.getWorldPosition(Zo),r=e.ch.heading;for(let o=0;o<4;o++){let c=this.drops.find(h=>h.life<=0);if(!c){if(this.drops.length>=72)return;c={mesh:new de(this.dropGeo,this.dropMat),vel:new P,life:0},this.scene.add(c.mesh),this.drops.push(c)}const l=(Math.random()-.5)*.6;c.mesh.position.set(a.x+Math.sin(r)*.2,a.y-.05,a.z+Math.cos(r)*.2),c.vel.set(Math.sin(r+l)*(1.4+Math.random()),.8+Math.random()*1,Math.cos(r+l)*(1.4+Math.random())),c.life=1,c.mesh.visible=!0}}updateDrops(e){for(const t of this.drops){if(t.life<=0)continue;t.vel.y-=9.8*e,t.mesh.position.addScaledVector(t.vel,e),t.life-=e;const n=on({x:t.mesh.position.x,z:t.mesh.position.z});(t.mesh.position.y<=n||t.life<=0)&&(t.life=0,t.mesh.visible=!1)}}updatePuddles(){const e=new Set;for(const t of this.crowd.incidents.puddles){e.add(t.id);let n=this.puddles.get(t.id);n||(n=by(t.id),n.position.set(t.pos.x,on(t.pos)+.04,t.pos.z),this.scene.add(n),this.puddles.set(t.id,n));const i=Math.min(1,t.age/.5),a=t.life<10?t.life/10:1;n.scale.setScalar(gt.puddleRadius*(.3+.7*i)*(1-t.mopped*.9)*a);const r=n.userData.splash;if(r){const o=Math.min(1,t.age/.7);r.visible=o<1,r.scale.setScalar(1+.9*o),r.material.opacity=.85*(1-o)}}for(const[t,n]of this.puddles)e.has(t)||(this.scene.remove(n),this.puddles.delete(t))}updateAlerts(){const e=new Set;for(const t of this.crowd.agents){const n=t.incident,i=this.people.get(t.id);if(!n||!i||!i.ch.root.visible)continue;e.add(t.id);let a=this.alerts.get(t.id);a||(a=new Im(this.alertMats[n.kind].clone()),a.renderOrder=11,this.scene.add(a),this.alerts.set(t.id,a));const r=i.ch.root.position,o=n.kind==="fall"&&(n.phase==="down"||n.phase==="lie"),c=Math.min(1,n.t/.22),l=1.1*(c<1?.4+.8*c:1+.05*Math.sin(this.time*6));a.scale.set(l,l,1),a.position.set(r.x,r.y+(o?1.1:2.2)+Math.sin(this.time*4+t.id)*.06,r.z),a.material.opacity=Math.min(1,(n.length-n.t)/.5)}for(const[t,n]of this.alerts)e.has(t)||(this.scene.remove(n),n.material.dispose(),this.alerts.delete(t))}driveSteward(e){const t=this.crowd.incidents.steward,n=this.steward.ch;n.root.visible=t.mode!=="gone",n.root.visible&&(n.root.position.set(t.pos.x,on(t.pos),t.pos.z),n.heading=vr(n.heading,t.heading,Math.min(1,e*9)),n.root.rotation.set(0,n.heading,0),t.phase==="mopping"?n.play(Oe.swing,{fade:.2,timeScale:.55}):t.moving>.05?n.play(Oe.walk,{fade:.2,timeScale:Pt(t.moving*gt.steward.speed/(this.kit.walkSpeed*this.kit.unitScale),.5,2)}):n.play(Oe.idle,{fade:.3}),n.update(e))}hitTest(e,t){const n=this.renderer.domElement.getBoundingClientRect(),i=e-n.left,a=t-n.top,r=this.ppm,o=.34*r;let c=null,l=1/0;const h=(f,g,v)=>{if(!f.visible)return;const m=Zo.copy(f.position).project(this.camera),p=(m.x+1)/2*n.width,M=(1-m.y)/2*n.height,w=M-g*r*Math.cos(Bt.elevation);i<p-o||i>p+o||a<w-4||a>M+6||m.z<l&&(l=m.z,c=v)};for(const[f,g]of this.people)h(g.ch.root,(g.sitting?1.15:1.7)*(g.ch.look.height??1),{kind:"fan",id:f});if(h(this.jb.ch.root,this.jb.sitting?1.2:1.75,{kind:"jb"}),h(this.mike.ch.root,this.mike.sitting?1.2:1.75,{kind:"mike"}),h(this.steward.ch.root,1.75,{kind:"steward"}),c)return c;const d=this.pick(e,t);if(!d)return null;if(d.facility)return{kind:"facility",facility:d.facility};const u=this.crowd.incidents.puddleAt(d.point,.25);return u?{kind:"puddle",id:u.id}:null}driveMike(e){var u;const t=this.session,n=this.mike.ch,i=n.root,a=t.day.state,r=bs(t.day),o=t.walking>.05,c=wt(t.mike,wi.centre)<wi.radius&&!t.ball&&!t.pour&&!a.mike.activity;this.mikeIdle=o?0:this.mikeIdle+e;const l=c&&this.mikeIdle>.8&&!t.tray&&this.mikeCheer<=0;let h=new P(t.mike.x,on(t.mike),t.mike.z);if(l&&(h=this.seatPosition(Gd)),i.position.lerp(h,Math.min(1,e*(l?5:14))),n.heading=vr(n.heading,l?Math.PI:t.heading,Math.min(1,e*10)),this.mikeCheer>0&&(this.mikeCheer-=e),this.mikeCheer>0)n.play(this.mikeCheer>1.6?Oe.jump:Oe.cheer,{fade:.15,once:this.mikeCheer>1.6});else if(t.pour)n.play(Oe.pick,{fade:.2,timeScale:.8});else if(l)this.mike.sitting||(n.play(Oe.sit,{once:!0,fade:.3,timeScale:1.3}),this.mike.sitting=!0);else{this.mike.sitting=!1;const f=t.walking*3.4;o?n.play(t.tray?Oe.carry:f>3?Oe.run:Oe.walk,{timeScale:Pt(f/((t.tray?this.kit.walkSpeed:f>3?this.kit.runSpeed:this.kit.walkSpeed)*this.kit.unitScale),.5,2.4),fade:.18}):t.tray?n.play(Oe.carry,{fade:.25,timeScale:.08}):n.play(Oe.idle,{fade:.3})}i.rotation.set(0,n.heading,0),r>.05&&!this.mike.sitting&&(i.rotateZ(Math.sin(this.time*1.7)*.09*r),i.rotateX(Math.sin(this.time*1.1+1)*.05*r));const d=a.mike.heldPints+(a.mike.drinking>.01?1:0);if(n.hold(t.tray?null:((u=a.mike.activity)==null?void 0:u.kind)==="eating"?"burger":d>0?"pint":null),n.update(e),t.tray){this.tray.visible=!0;const f=n.bones.FistL.getWorldPosition(new P),g=n.bones.FistR.getWorldPosition(new P);this.tray.position.copy(f.add(g).multiplyScalar(.5)).add(new P(0,.08,0)),this.tray.rotation.set(0,n.heading,0),this.tray.rotateX(Pt(t.tray.tilt,-1.2,1.2)*.32);const v=a.mike.carriedPints+a.mike.heldPints+(a.mike.drinking>.01?1:0);this.trayPints.forEach((m,p)=>{m.visible=p<v})}else this.tray.visible=!1}feedback(e){if(e.type==="four")this.pitch.trigger("four"),this.crowd.react("four");else if(e.type==="wicket")this.pitch.trigger("wicket"),this.crowd.react("wicket");else if(e.type==="six"){const t=e.ball?new P(e.ball.target.x,on(e.ball.target)+.1,e.ball.target.z):void 0;this.pitch.trigger("six",t,Tn.duration),this.crowd.react("six",e.ball?e.ball.target:{x:0,z:ke.back*.5})}else e.type==="catch"&&(this.mikeCheer=2.6,this.crowd.react("catch",{...this.session.mike}))}update(e,t){this.time+=e,t&&this.crowd.update(e,this.session.day),this.syncPeople();for(const c of this.crowd.agents){const l=this.people.get(c.id);l&&this.drive(l,c,e)}this.drive(this.jb,this.crowd.jb,e,this.crowd.jb.mode==="seated"?this.crowd.jb.pos:void 0),this.jb.ch.hold(this.crowd.jb.mode==="seated"?null:this.crowd.jb.carry),this.driveMike(e);const n=this.mike.ch.root.position;this.mikeTag.position.set(n.x,n.y+(this.mike.sitting?1.8:2.15)+Math.sin(this.time*4)*.06,n.z),this.mikeTag.quaternion.copy(this.camera.quaternion),this.driveSteward(e),this.updateAlerts(),this.updatePuddles(),this.updateDrops(e),this.crowd.incidents.focus={x:this.cam.target.x,z:Math.max(1.5,this.cam.target.z)};for(const c of this.staff)c.update(e);this.pitch.update(e);const i=this.session.ball;if(i){const c=Pr(i),l=on(i.target)+.05;this.shadowDisc.visible=!0,this.shadowDisc.position.set(i.target.x,l,i.target.z),this.shadowDisc.scale.setScalar(.3+.9*c),this.shadowDisc.material.opacity=.15+.4*c,this.catchRing.visible=!0,this.catchRing.position.set(i.target.x,l+.01,i.target.z),this.catchRing.scale.setScalar(Tn.reach*(1+.06*Math.sin(this.time*12))),this.catchRing.material.color.set(c>=Tn.windowFrom?"#ff6a2a":"#ffd23f")}else this.shadowDisc.visible=!1,this.catchRing.visible=!1;this.marker.visible&&(this.markerT+=e,this.marker.scale.setScalar(1+this.markerT*1.5),this.marker.material.opacity=Math.max(0,.9-this.markerT*1.2),this.markerT>.8&&(this.marker.visible=!1));const a=this.session.zone;for(const c of this.zoneRings)c.mesh.material.opacity=c.zone===a?.75+.2*Math.sin(this.time*5):.32;if(this.cam.follow){const c=this.mike.ch.root.position;this.cam.target.lerp(new P(c.x,0,c.z+1.5),Math.min(1,e*2.2))}else this.cam.glide&&(this.cam.target.lerp(this.cam.glide,Math.min(1,e*3)),this.cam.target.distanceTo(this.cam.glide)<.05&&(this.cam.glide=null));this.placeCamera();const r=this.session.day.scoreboard(),o=`${r.team==="England"?"ENG":r.team.slice(0,3).toUpperCase()} ${r.runs}/${r.wickets}`;o+r.overs!==this.lastSeen.score&&(this.lastSeen.score=o+r.overs,this.venue.setScoreboard(["RIVERSIDE",o,`${r.overs} overs`,r.target?`Target ${r.target}`:""])),this.renderer.render(this.scene,this.camera)}}function by(s){const e=new Ct,t=(h,d,u,f)=>{const g=new vl;for(let v=0;v<=d;v++){const m=v/d*Math.PI*2,p=h*(1+u*Math.sin(m*3+f)+u*.6*Math.sin(m*5+f*2.3));v===0?g.moveTo(Math.cos(m)*p,Math.sin(m)*p):g.lineTo(Math.cos(m)*p,Math.sin(m)*p)}return new Aa(g)},n=new de(t(1,28,.18,s),new Tt({color:"#6f8f1c",transparent:!0,opacity:.95,depthWrite:!1})),i=new de(t(.82,28,.16,s+1),new Tt({color:"#b8d83a",transparent:!0,opacity:.97,depthWrite:!1}));i.position.z=.002;const a=new de(new Na(.16,10),new Tt({color:"#f1f5b4",transparent:!0,opacity:.8,depthWrite:!1}));a.position.set(-.25,.2,.004);const r=new de(t(.28,14,.25,s+2),i.material);r.position.set(1.15,.35,.002);const o=new de(t(.18,12,.25,s+3),i.material);o.position.set(-.95,-.7,.002);const c=new de(t(.13,10,.25,s+4),i.material);c.position.set(.4,-1.15,.002);const l=new de(new zi(.95,1.12,32),new Tt({color:"#dff27a",transparent:!0,opacity:.85,depthWrite:!1,side:Gt}));return l.position.z=.006,e.userData.splash=l,e.add(n,i,a,r,o,c,l),e.rotation.x=-Math.PI/2,e.renderOrder=2,e}function zd(s){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=s==="vomit"?"#7be83a":"#ffd23f",i="#1d2a22";if(t.lineJoin="round",t.beginPath(),t.moveTo(52,100),t.lineTo(64,124),t.lineTo(76,100),t.closePath(),t.fillStyle=i,t.fill(),t.beginPath(),t.arc(64,56,50,0,Math.PI*2),t.fillStyle=i,t.fill(),t.beginPath(),t.arc(64,56,42,0,Math.PI*2),t.fillStyle=n,t.fill(),t.beginPath(),t.arc(52,42,12,0,Math.PI*2),t.fillStyle="rgba(255,255,255,.45)",t.fill(),s==="vomit"){t.beginPath();for(let r=0;r<=60;r++){const o=r/60*Math.PI*4.2,c=3+r*.5,l=64+Math.cos(o)*c,h=57+Math.sin(o)*c;r?t.lineTo(l,h):t.moveTo(l,h)}t.strokeStyle="#1c4a0a",t.lineWidth=7,t.lineCap="round",t.stroke()}else t.fillStyle=i,t.font="900 70px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",64,60);const a=new Da(e);return a.colorSpace=It,new mu({map:a,depthTest:!1,depthWrite:!1,transparent:!0})}async function xy(){const s=document.querySelector("#app")??document.body;document.title="HOWZAT Arcade",s.innerHTML="",s.classList.add("arcade-app");const e=document.createElement("div");e.className="arcade-shell";const t=document.createElement("div");t.id="arcade-stage";const n=document.createElement("div");n.className="tp-loading",n.textContent="Opening the gates…",e.append(t,n),s.appendChild(e);const i=new URLSearchParams(window.location.search),a=Number(i.get("seed"))||Date.now()%1e5+1,r=i.get("cpuskin")==="1",o=await YM(),c=new Kf(a),l=new gy(t,o,c,r);c.hazards=l.crowd.incidents,n.remove();let h=!1,d=!1,u=!1;const f=new Set;let g=0;const v=G=>{if(h&&c.goTo(G)){l.showMarker(c.path[c.path.length-1]??c.mike);const oe=G==="seats"?Bn:{x:Ye[G].counter.x,z:16.5};l.onScreen(oe,80)||l.glideTo({x:(oe.x+c.mike.x)/2,z:(oe.z+c.mike.z)/2})}},m=new ty(e,{onAction:()=>{u=!0},onRoundChoice:G=>{c.chooseJBRound(G)},onCallItADay:()=>{c.callItADay()},onStart:()=>{h=!0},onRestart:()=>{window.location.reload()},onTrayDrag:G=>{g=G},onRecentre:()=>l.followMike(),onGoTo:v,onZoom:G=>{l.zoomStep(G)},onRotate:()=>l.rotate(),onPixel:()=>(l.setPixelArt(l.pixelArt?0:2),l.pixelArt>0)});m.setPixel(l.pixelArt>0);const p=new Set(["KeyW","KeyA","KeyS","KeyD","KeyZ","KeyX"]),M=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]),w=new Map,x=new Map,S={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]},E=(G,oe)=>{const H=x.get(G);if(H===void 0)return;const[Q,le]=S[G];l.scroll(Q,le,Math.min(1,(oe-H)/1e3),Bt.keySpeed),x.set(G,oe)};window.addEventListener("keydown",G=>{var oe;if(M.has(G.code)){x.has(G.code)||x.set(G.code,performance.now()),G.preventDefault();return}if(p.has(G.code)){f.add(G.code),G.repeat||w.set(G.code,performance.now()),G.preventDefault();return}if(G.code==="Space"||G.code==="Enter"||G.code==="KeyE"){if(G.preventDefault(),!h){(oe=m.root.querySelector('[data-k="start"]'))==null||oe.click();return}G.repeat||(u=!0)}G.repeat||(G.code==="KeyF"&&l.followMike(),G.code==="KeyJ"&&v("seats"),G.code==="KeyQ"&&l.rotate(),G.code==="KeyP"&&(l.setPixelArt(l.pixelArt?0:2),m.setPixel(l.pixelArt>0)),(G.code==="Equal"||G.code==="NumpadAdd")&&l.zoomStep(1),(G.code==="Minus"||G.code==="NumpadSubtract")&&l.zoomStep(-1))}),window.addEventListener("keyup",G=>{if(M.has(G.code)){E(G.code,performance.now()),x.delete(G.code);return}if(!p.has(G.code))return;const oe=performance.now()-(w.get(G.code)??0);oe>=160?f.delete(G.code):window.setTimeout(()=>f.delete(G.code),160-oe)}),window.addEventListener("blur",()=>{f.clear(),x.clear(),L=null,I=null});const R=new Map;let _=!1,A=0,C=!1,L=null,I=null;window.addEventListener("pointermove",G=>{G.pointerType==="mouse"&&(I={x:G.clientX,y:G.clientY})}),document.documentElement.addEventListener("pointerleave",()=>{I=null});let O=0,D=0;const B=l.renderer.domElement;B.addEventListener("contextmenu",G=>G.preventDefault()),B.addEventListener("pointerdown",G=>{if(B.setPointerCapture(G.pointerId),R.set(G.pointerId,{x:G.clientX,y:G.clientY,sx:G.clientX,sy:G.clientY,button:G.button,type:G.pointerType,at:performance.now()}),R.size===1&&(_=G.button===1||G.button===2,C=!1,_&&t.classList.add("dragging"),G.pointerType!=="mouse")){window.clearTimeout(D);const{clientX:oe,clientY:H}=G;D=window.setTimeout(()=>{!_&&R.size===1&&(q(oe,H,3500),_=!0)},480)}if(R.size===2){const[oe,H]=[...R.values()];A=Math.hypot(oe.x-H.x,oe.y-H.y),_=!0,window.clearTimeout(D)}}),B.addEventListener("pointermove",G=>{G.pointerType==="mouse"&&(L={x:G.clientX,y:G.clientY});const oe=R.get(G.pointerId);if(!oe)return;if(R.size===2){oe.x=G.clientX,oe.y=G.clientY;const[le,Ue]=[...R.values()],re=Math.hypot(le.x-Ue.x,le.y-Ue.y);!C&&A>0&&(re/A>1.3||re/A<.75)&&(l.zoomStep(re>A?1:-1),C=!0);return}const H=G.clientX-oe.x,Q=G.clientY-oe.y;!_&&Math.hypot(G.clientX-oe.sx,G.clientY-oe.sy)>8&&(_=!0,t.classList.add("dragging"),window.clearTimeout(D)),_&&!C&&l.pan(H,Q),oe.x=G.clientX,oe.y=G.clientY});const K=G=>{const oe=R.get(G.pointerId);R.delete(G.pointerId),window.clearTimeout(D),R.size===0&&t.classList.remove("dragging"),!(!oe||_||!h||oe.button!==0)&&Z(G.clientX,G.clientY)};B.addEventListener("pointerup",K),B.addEventListener("pointercancel",G=>{R.delete(G.pointerId),window.clearTimeout(D),R.size===0&&t.classList.remove("dragging")}),B.addEventListener("pointerleave",G=>{G.pointerType==="mouse"&&!R.size&&(L=null,m.tip(null))}),document.addEventListener("mouseleave",()=>{L=null,I=null});let V=0,te=0;B.addEventListener("wheel",G=>{G.preventDefault(),V+=G.deltaY;const oe=performance.now();Math.abs(V)>=60&&oe-te>220&&(l.zoomStep(V<0?1:-1),V=0,te=oe)},{passive:!1});function Z(G,oe){const H=l.hitTest(G,oe);if((H==null?void 0:H.kind)==="jb"){v("seats");return}const Q=l.pick(G,oe);if((H==null?void 0:H.kind)==="facility"){v(H.facility);return}Q&&c.walkTo(Q.point,null)&&l.showMarker(c.path[c.path.length-1]??Q.point)}function ne(G){return G?ip(G,c,l.crowd):null}function q(G,oe,H=0){const Q=e.getBoundingClientRect(),le=ne(l.hitTest(G,oe));t.classList.toggle("over-target",!!le),m.tip(le,G-Q.left,oe-Q.top,H)}let _e=performance.now();const Me=G=>{const oe=Math.min(.1,(G-_e)/1e3);_e=G;const H=(f.has("KeyW")?1:0)-(f.has("KeyS")?1:0),Q=(f.has("KeyD")?1:0)-(f.has("KeyA")?1:0),le=H||Q?l.cameraDir(H,Q):{x:0,z:0};(H||Q)&&l.followMike();for(const re of x.keys())E(re,G);if(I&&!R.size&&h&&!c.finished&&document.hasFocus()){const re=e.getBoundingClientRect(),Se=op(I.x-re.left,I.y-re.top,re.width,re.height);(Se.x||Se.y)&&l.scroll(Se.x,Se.y,oe)}const Ue=(f.has("KeyX")?1:0)-(f.has("KeyZ")?1:0)||g;if(h&&!c.finished){c.update(oe,{move:le,action:u,tray:Ue});for(const re of c.drainFeedback())m.feedback(re),l.feedback(re),re.type==="six"&&re.ball&&c.ballInPlay&&!l.onScreen(re.ball.target,90)&&l.glideTo({x:(re.ball.target.x+c.mike.x)/2,z:(re.ball.target.z+c.mike.z)/2});for(const re of l.drainIncidentNews())m.ticker(re,"event")}u=!1,l.update(oe,h),m.render(c.hud(),l.screenOf("jb"),l.screenOf("mike")),L&&!R.size&&G-O>120&&(O=G,q(L.x,L.y)),c.finished&&!d&&(d=!0,m.showResults(c.results())),requestAnimationFrame(Me)};requestAnimationFrame(Me);const tt=()=>{var G;h=!0,(G=m.root.querySelector('[data-k="title"]'))==null||G.classList.add("hidden")};window.__howzatArcade={session:c,world:l,hud:m,start:tt,simulate:G=>{tt();for(let oe=0;oe<G;oe+=.05){c.update(.05,{move:{x:0,z:0},action:!1,tray:0});for(const H of c.drainFeedback())l.feedback(H);l.crowd.update(.05,c.day)}},inspectAt:(G,oe)=>ne(l.hitTest(G,oe))}}xy();
