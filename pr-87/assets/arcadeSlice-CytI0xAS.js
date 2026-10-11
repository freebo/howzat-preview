var Xd=Object.defineProperty;var qd=(a,e,t)=>e in a?Xd(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ne=(a,e,t)=>qd(a,typeof e!="symbol"?e+"":e,t);import{D as Kd,t as jd}from"./day03-CNJ7LGOP.js";import{_ as li}from"./game-DhnRWA97.js";import"./rng-VQFrfh1t.js";import"./mikeTuning04-CiRA-iJ7.js";import"./previewBuild-BC12LeqQ.js";const Ct=(a,e,t)=>Math.max(e,Math.min(t,a)),Ft=(a,e)=>Math.hypot(a.x-e.x,a.z-e.z),un={minX:-22,maxX:22,minZ:.2,maxZ:25},De={rows:4,rowDepth:2.2,rowRise:.4,back:8.8,minX:-19.5,maxX:19.5,aisles:[{x:-13,half:1},{x:0,half:1.2},{x:13,half:1}],benchDepth:.5,benchOffset:1.65,seatSpacing:.85};function Mn(a){if(a.z>=De.back)return 0;const e=-.4*De.rows;if(Jd(a.x))return e+-e*Ct(a.z/De.back,0,1);const t=Ct(Math.floor(a.z/De.rowDepth),0,De.rows-1);return-.4*(De.rows-t)}function Jd(a){return De.aisles.some(e=>Math.abs(a-e.x)<=e.half)}function na(a){return a*De.rowDepth+De.benchOffset}function Yd(){const a=[];let e=0;for(let t=0;t<De.rows;t++)for(let n=De.minX+.6;n<=De.maxX-.6;n+=De.seatSpacing)De.aisles.some(i=>Math.abs(n-i.x)<=i.half+.35)||a.push({id:e++,row:t,x:Math.round(n*100)/100,z:na(t)});return a}const ei={x:2.4,z:na(1)},Nh={x:3.25,z:na(1)},$c={x:3.3,z:1*De.rowDepth+.75},tt={bar:{facility:"bar",label:"The Twelfth Man",minX:-18,maxX:-7,minZ:20,maxZ:25,counter:{x:-12.5,z:19.3},queueDir:{x:0,z:-1},zone:{minX:-17,maxX:-8,minZ:12.5,maxZ:20}},food:{facility:"food",label:"Beefy’s Burgers",minX:-3,maxX:3,minZ:20,maxZ:24,counter:{x:0,z:19.3},queueDir:{x:0,z:-1},zone:{minX:-3.4,maxX:3.4,minZ:12.5,maxZ:20}},toilet:{facility:"toilet",label:"Fine Leg Toilets",minX:8,maxX:18,minZ:20,maxZ:25,counter:{x:11.5,z:19.3},queueDir:{x:0,z:-1},zone:{minX:7.6,maxX:17,minZ:12.5,maxZ:20}}},vi={centre:{x:2.9,z:1*De.rowDepth+.75},radius:1.7},br=.82;function Qc(a,e,t=0){const n=tt[a];if(e<=0)return{x:n.counter.x+t,z:n.counter.z};const i=Math.min(e,7),s={x:n.counter.x+n.queueDir.x*i*br,z:n.counter.z+n.queueDir.z*i*br+.15};if(e>7){const r=e-7,o=a==="toilet"?-1:1;s.x+=o*r*br}return s}const Bi=[{x:-21.5,z:15},{x:21.5,z:15},{x:-21.5,z:11},{x:21.5,z:11}],on={tables:[{x:-6.3,z:15},{x:6.3,z:15},{x:-19,z:18.5},{x:19.5,z:13.5}],bins:[{x:-6.6,z:18.8},{x:6.2,z:18.8},{x:20.5,z:18.8}],planters:[{x:-10,z:10.4},{x:10,z:10.4},{x:-3.2,z:10.4},{x:3.2,z:10.4}],poles:[{x:-20,z:9.6},{x:-6.8,z:9.6},{x:6.8,z:9.6},{x:20,z:9.6}]};function Zd(){const a=Object.values(tt).map(e=>({minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ}));for(const e of on.tables)a.push({minX:e.x-1.1,maxX:e.x+1.1,minZ:e.z-.8,maxZ:e.z+.8});for(const e of on.bins)a.push({minX:e.x-.35,maxX:e.x+.35,minZ:e.z-.35,maxZ:e.z+.35});for(const e of on.planters)a.push({minX:e.x-.7,maxX:e.x+.7,minZ:e.z-.5,maxZ:e.z+.5});for(const e of on.poles)a.push({minX:e.x-.2,maxX:e.x+.2,minZ:e.z-.2,maxZ:e.z+.2});for(let e=0;e<De.rows;e++){const t=na(e),n=Uh();for(const[i,s]of n)a.push({minX:i,maxX:s,minZ:t-De.benchDepth/2,maxZ:(e+1)*De.rowDepth+.05})}return a}function Uh(){const a=[De.minX,...De.aisles.flatMap(t=>[t.x-t.half,t.x+t.half]),De.maxX],e=[];for(let t=0;t<a.length;t+=2)e.push([a[t],a[t+1]]);return e}const Mi={minX:-18,maxX:18,minZ:.4,maxZ:8.6},$d=1.8,Qd=.2,_r=3.4,ef=.35,el=1.6,tf=.13,nf=(a,e)=>a.x>=e.minX&&a.x<=e.maxX&&a.z>=e.minZ&&a.z<=e.maxZ;function sf(a){if(Ft(a,vi.centre)<=vi.radius)return"seats";for(const e of["bar","food","toilet"])if(nf(a,tt[e].zone))return e;return a.z<De.back?"stand":"concourse"}function af(a){if(Ft(a,vi.centre)<=vi.radius)return"seats";let e="bar",t=1/0;for(const n of["bar","food","toilet"]){const i=Math.abs(a.x-tt[n].counter.x);i<t&&(t=i,e=n)}return e}const gn={seatedAtStart:56,wanderers:2,maxAgents:82,walkSpeed:1,shuffleSpeed:.7,jbErrandSpeed:2.2,animScale:.85,visibleFanShare:.12,queueVisibleMax:4,fromSeatChance:.3,backToSeatChance:.7,toiletStayInsideChance:.6,wanderPause:[7,16],seatedLook:{amount:.22,period:[9,18]},reactions:{six:{stand:!0,radius:6.5,chance:.6,duration:[1.6,2.2],ripple:.07},wicket:{stand:!0,radius:5.5,chance:.5,duration:[1.4,2],ripple:.07},catch:{stand:!0,radius:7.5,chance:.7,duration:[1.8,2.4],ripple:.06},four:{stand:!1,radius:9,chance:.35,duration:[.9,1.4],ripple:.05}},standUpTimeScale:1.1},oa={ambientSpeechGap:28,speechSeconds:6,missedToastGap:20,maxToasts:3},rf=9,wi=.35,ca=.22;class of{constructor(e=Zd()){ne(this,"cols");ne(this,"rows");ne(this,"blocked");this.cols=Math.ceil((un.maxX-un.minX)/wi),this.rows=Math.ceil((un.maxZ-un.minZ)/wi),this.blocked=new Uint8Array(this.cols*this.rows);for(const t of e){const n=this.col(t.minX-ca),i=this.col(t.maxX+ca),s=this.row(t.minZ-ca),r=this.row(t.maxZ+ca);for(let o=Math.max(0,s);o<=Math.min(this.rows-1,r);o++)for(let c=Math.max(0,n);c<=Math.min(this.cols-1,i);c++)this.blocked[o*this.cols+c]=1}}col(e){return Math.floor((e-un.minX)/wi)}row(e){return Math.floor((e-un.minZ)/wi)}centre(e,t){return{x:un.minX+(e+.5)*wi,z:un.minZ+(t+.5)*wi}}open(e,t){return e>=0&&t>=0&&e<this.cols&&t<this.rows&&!this.blocked[t*this.cols+e]}walkable(e){return this.open(this.col(e.x),this.row(e.z))}snap(e){const t=Math.max(0,Math.min(this.cols-1,this.col(e.x))),n=Math.max(0,Math.min(this.rows-1,this.row(e.z)));if(this.open(t,n))return{x:Math.max(un.minX,Math.min(un.maxX,e.x)),z:Math.max(un.minZ,Math.min(un.maxZ,e.z))};for(let i=1;i<40;i++){let s=null,r=1/0;for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){if(Math.max(Math.abs(o),Math.abs(c))!==i||!this.open(t+c,n+o))continue;const l=this.centre(t+c,n+o),h=Math.hypot(l.x-e.x,l.z-e.z);h<r&&(r=h,s=l)}if(s)return s}return e}lineOfSight(e,t){const n=Math.hypot(t.x-e.x,t.z-e.z),i=Math.max(1,Math.ceil(n/(wi*.5)));for(let s=0;s<=i;s++){const r=s/i;if(!this.walkable({x:e.x+(t.x-e.x)*r,z:e.z+(t.z-e.z)*r}))return!1}return!0}findPath(e,t){const n=this.walkable(e)?e:this.snap(e),i=this.snap(t);if(this.lineOfSight(n,i))return[i];const s=this.col(n.x),r=this.row(n.z),o=this.col(i.x),c=this.row(i.z),l=this.cols*this.rows,h=new Float32Array(l).fill(1/0),d=new Int32Array(l).fill(-1),f=new Uint8Array(l),u=[],b=(_,T)=>{u.push([_,T]);let A=u.length-1;for(;A>0;){const P=A-1>>1;if(u[P][0]<=u[A][0])break;[u[P],u[A]]=[u[A],u[P]],A=P}},M=()=>{const _=u[0],T=u.pop();if(u.length){u[0]=T;let A=0;for(;;){const P=2*A+1,I=P+1;let O=A;if(P<u.length&&u[P][0]<u[O][0]&&(O=P),I<u.length&&u[I][0]<u[O][0]&&(O=I),O===A)break;[u[O],u[A]]=[u[A],u[O]],A=O}}return _},m=(_,T)=>{const A=Math.abs(_-o),P=Math.abs(T-c);return A+P+(Math.SQRT2-2)*Math.min(A,P)},p=r*this.cols+s;h[p]=0,b(m(s,r),p);const v=c*this.cols+o;let R=!1;for(;u.length;){const[,_]=M();if(f[_])continue;if(f[_]=1,_===v){R=!0;break}const T=_%this.cols,A=_/this.cols|0;for(let P=-1;P<=1;P++)for(let I=-1;I<=1;I++){if(!P&&!I)continue;const O=T+I,D=A+P;if(!this.open(O,D)||P&&I&&(!this.open(T+I,A)||!this.open(T,A+P)))continue;const B=D*this.cols+O;if(f[B])continue;const q=h[_]+(P&&I?Math.SQRT2:1);q<h[B]&&(h[B]=q,d[B]=_,b(q+m(O,D),B))}}if(!R)return null;const x=[];for(let _=v;_!==p&&_>=0;_=d[_])x.push(this.centre(_%this.cols,_/this.cols|0));x.reverse(),x[x.length-1]=i;const y=[];let w=n,C=0;for(;C<x.length;){let _=C;for(let T=x.length-1;T>C;T--)if(this.lineOfSight(w,x[T])){_=T;break}y.push(x[_]),w=x[_],C=_+1}return y}}const _i={perfect:[.78,.9],good:[.64,.95],overflowAbove:.97},cf=4.5;function lf(a){return a>=_i.overflowAbove?"overflow":a>=_i.perfect[0]&&a<=_i.perfect[1]?"perfect":a>=_i.good[0]&&a<=_i.good[1]?"good":"poor"}class hf{constructor(e=0){ne(this,"elapsed",0);ne(this,"result",null);this.intoxication=e}get speed(){return .75+.45*Ct(this.intoxication,0,1)}level(){const e=this.elapsed*this.speed%2,t=e<=1?e:2-e,n=Ct(this.intoxication,0,1)*.03*Math.sin(this.elapsed*23);return Ct(t+n,0,1)}update(e){return this.result?this.result:(this.elapsed+=Math.max(0,e),this.elapsed>=cf&&(this.result="poor"),this.result)}stop(){return this.result||(this.result=lf(this.level())),this.result}}function df(a,e){const t=e%97*.37,n=e%89*.53,i=e%83*.71;return Math.sin(1.7*a+t)+.6*Math.sin(3.1*a+n)+.35*Math.sin(5.3*a+i)}const Kn={spillAt:1,resetAfterSpill:.35,graceAfterSpill:.8,control:4.2,damping:1.6,soberDrift:.18,drunkDrift:1.9,walkDrift:.45,soberCentring:1.4};class ff{constructor(e=1){ne(this,"tilt",0);ne(this,"velocity",0);ne(this,"time",0);ne(this,"grace",0);this.seed=e}update(e,t,n,i){const s=Math.max(0,e);this.time+=s,this.grace=Math.max(0,this.grace-s);const r=Ct(t,0,1),o=(Kn.soberDrift+Kn.drunkDrift*r+Kn.walkDrift*Ct(n,0,1))*df(this.time,this.seed),c=-this.tilt*Kn.soberCentring*(1-r),l=o+c+Ct(i,-1,1)*Kn.control-this.velocity*Kn.damping;if(this.velocity+=l*s,this.tilt+=this.velocity*s,Math.abs(this.tilt)>=Kn.spillAt){const h=Math.sign(this.tilt);if(this.tilt=h*Kn.resetAfterSpill,this.velocity=0,this.grace<=0)return this.grace=Kn.graceAfterSpill,!0}return!1}isLevel(){return Math.abs(this.tilt)<.25}}const xn={duration:2.8,windowFrom:.6,reach:1.25,intoStandChance:.6,nearMike:5};function xr(a,e){let t=Math.imul(a^2654435769,2246822507)^Math.imul(e+1663821227,3266489909);return t^=t>>>15,t=Math.imul(t,739982445),t^=t>>>12,t=Math.imul(t,695872825),t^=t>>>15,(t>>>0)/4294967296}const uf=a=>a.x>=Mi.minX&&a.x<=Mi.maxX&&a.z>=Mi.minZ&&a.z<=Mi.maxZ;function pf(a,e,t,n,i=s=>s){if(xr(a,e)>=xn.intoStandChance)return null;const s=xr(a*7+3,e^23505)*Math.PI*2,r=(.35+.65*xr(a*13+1,e^707))*xn.nearMike,o=uf(t)?t:n,c={x:Ct(o.x+Math.cos(s)*r,Mi.minX,Mi.maxX),z:Ct(o.z+Math.sin(s)*r*.6,Mi.minZ,Mi.maxZ)};return{eventId:a,target:i(c),elapsed:0,resolved:null}}function Xa(a){return Ct(a.elapsed/xn.duration,0,1)}function tl(a,e){return Xa(a)<xn.windowFrom?"too-early":Ft(e,a.target)<=xn.reach?"caught":"out-of-reach"}function mf(a,e){return a.resolved||(a.elapsed+=Math.max(0,e),a.elapsed>=xn.duration&&(a.resolved="missed")),a.resolved}const Ti={pour:{perfect:150,good:75,poor:15,overflow:5},deliverPerPint:100,perfectPintBonus:100,witness:{four:50,six:80,wicket:120,milestone:150},catch:500,relief:30,burger:20},gf=5;class bf{constructor(){ne(this,"points",0);ne(this,"combo",1);ne(this,"bestCombo",1);ne(this,"log",[]);ne(this,"spills",0);ne(this,"catches",0);ne(this,"delivered",0)}award(e,t,n,i){const s=this.combo,r=Math.round(n*s);this.points+=r;const o={kind:e,label:t,base:n,combo:s,points:r};return this.log.push(o),i&&this.bump(),o}pour(e){const t=e==="perfect"?"Perfect pour!":e==="good"?"Good pour":e==="overflow"?"Frothy mess":"Rushed pour";return this.award("pour",t,Ti.pour[e],e==="perfect")}deliver(e,t){this.delivered+=e;const n=e*Ti.deliverPerPint+(t?Ti.perfectPintBonus:0);return this.award("deliver",t?`Perfect pint${e>1?"s":""} delivered!`:`Delivered ${e} pint${e>1?"s":""}`,n,!0)}witness(e){const t=e==="six"?"Saw the six!":e==="four"?"Saw the four":e==="wicket"?"Saw the wicket!":"Saw the milestone!";return this.award("witness",t,Ti.witness[e],!1)}catchBall(){return this.catches++,this.award("catch","CAUGHT IT! Crowd goes wild",Ti.catch,!0)}relief(){return this.award("relief","Sweet relief",Ti.relief,!1)}burger(){return this.award("burger","Burger fuel",Ti.burger,!1)}spill(){this.spills++,this.combo=1}breakCombo(){this.combo=1}bump(){this.combo=Math.min(gf,this.combo+1),this.bestCombo=Math.max(this.bestCombo,this.combo)}}function _f(a){return Math.max(0,Math.round(a))*5}function xf(a=30326){const e=new Kd(a);return e.showOpponent(),e.showBet(),e.placeBet("England"),e.showToss(),e.startMatch(),e}function Ns(a){const e=a.state.mike.activity;return!!e&&e.kind!=="eating"}function vf(a,e){const t=a.state,n=t.mike;return t.phase!=="match"||Ns(a)?!1:(n.travelling=null,n.place===e||(n.place=e,t.jeopardy.rescue&&t.jeopardy.rescue.destination!==e&&(t.jeopardy.rescue=null)),!0)}function Mf(a){const e=a.state.mike;return e.carriedPints>0?(e.carriedPints--,"carried"):e.heldPints>0?(e.heldPints--,"held"):null}function Us(a){return Ct(a.effectiveBac("mike")/tf,0,1)}function nl(a){if(a.sharedRoundAvailability().allowed)return"pint-2";const e=a.state.mike;return e.heldPints+e.drinking+e.carriedPints<.01?"pint-1":null}function Sf(a,e,t){const n=a.state.jb;n.awaitingRoundChoice&&(n.roundChoiceSecondsLeft+=e/(a.state.speed*.28)-t),a.advanceMinutes(e)}function yf(a){const e=a.state.mike.activity;return!e||e.kind!=="service"||e.facility!=="bar"?!1:(e.left=Math.max(e.left,.5),!0)}function Ef(a){const e=a.state.mike.activity;e&&e.kind==="service"&&e.facility==="bar"&&(e.left=Math.min(e.left,.01))}function wf(a){const e=a.state.jb.travelling;return!e||a.state.phase!=="match"?!1:(e.left=Math.max(e.left,.5),!0)}let Tf=null;function Af(){return Tf??(Tf=new of)}function il(a,e=gn.visibleFanShare){if(!a.startsWith("fan-"))return!0;const t=Number(a.slice(4))||0;return(Math.imul(t^1540483477,2654435761)>>>0)%1e3/1e3<e}function oc(a,e){const t=a.state.queues[e],n=t.serving.map(r=>r.patron).filter(r=>il(r)),i=t.patrons.filter(r=>il(r)),s=Math.max(gn.queueVisibleMax,i.indexOf("mike")+1,i.indexOf("jb")+1);return{serving:n,waiting:i.slice(0,s)}}function fo(a,e,t){const n=oc(a,e),i=n.serving.indexOf(t);if(i>=0)return Qc(e,0,(i-(n.serving.length-1)/2)*.9);const s=n.waiting.indexOf(t);return s>=0?Qc(e,s+1):null}function Rf(a,e){return Math.max(0,oc(a,e).waiting.indexOf("mike"))}const Cf=a=>Math.hypot(a.move.x,a.move.z);class Pf{constructor(e=30326){ne(this,"day");ne(this,"score",new bf);ne(this,"nav",Af());ne(this,"mike",{...$c});ne(this,"heading",Math.PI);ne(this,"walking",0);ne(this,"path",[]);ne(this,"pour",null);ne(this,"pourPurchase",null);ne(this,"intent",null);ne(this,"lastPour",null);ne(this,"tray",null);ne(this,"ball",null);ne(this,"realTime",0);ne(this,"finished",!1);ne(this,"feedback",[]);ne(this,"lastPourDone",!1);ne(this,"seenEvents",0);ne(this,"trayCount",0);this.seed=e,this.day=xf(e)}get zone(){return sf(this.mike)}get carrying(){return this.day.state.mike.carriedPints}get speed(){return _r*(1-ef*Us(this.day))*(this.tray?.8:1)}drainFeedback(){const e=this.feedback;return this.feedback=[],e}emit(e){this.feedback.push(e)}award(e){this.emit({type:"award",award:e})}chooseJBRound(e){return this.day.chooseJBBarOrder(e)}callItADay(){this.day.endGame()}walkTo(e,t=null){if(this.finished||Ns(this.day)||this.pour)return!1;const n=this.nav.findPath(this.mike,e);return n?(this.path=n,this.intent=t,!0):!1}get ballInPlay(){if(!this.ball)return!1;const e=this.zone;return e==="stand"||e==="seats"||Ft(this.mike,this.ball.target)<=rf}update(e,t){if(this.finished)return;const n=Ct(e,0,.1);this.realTime+=n;const i=this.day.state;if(t.action&&this.act(),Cf(t)>.01&&(this.intent=null),this.move(n,t),this.intent&&!this.path.length){const o=this.intent;this.intent=null,this.zone===o&&!Ns(this.day)&&!this.ballInPlay&&this.act()}const s=i.mike.activity;if((s==null?void 0:s.kind)==="service"&&s.facility==="bar"?(!this.pour&&!this.lastPourDone&&(this.pour=new hf(Us(this.day)),this.pourPurchase=s.purchase,this.emit({type:"pour-start"})),this.pour&&yf(this.day)):this.lastPourDone=!1,this.pour){const o=this.pour.update(n);o&&this.finishPour(o)}const r={carried:i.mike.carriedPints,held:i.mike.heldPints+i.mike.drinking,toilets:i.mike.toilets,burgers:i.mike.burgers,spend:i.mike.totalSpend};Sf(this.day,n*$d*(this.pour?Qd:1),n),this.afterSim(r),this.tray&&(i.mike.carriedPints<=0?this.tray=null:i.mike.place!=="seats"&&!Ns(this.day)&&this.tray.update(n,Us(this.day),this.walking,t.tray)&&this.spill()),this.ball&&mf(this.ball,n)==="missed"&&(this.ballInPlay&&(this.emit({type:"catch-missed"}),this.emit({type:"toast",text:"Dropped in the stand. So close!"})),this.ball=null),i.phase==="result"&&(this.finished=!0)}stepTowards(e,t){const n=e.x-this.mike.x,i=e.z-this.mike.z,s=Math.hypot(n,i);if(s<1e-4)return 0;const r=Math.min(s,t);return this.mike={x:this.mike.x+n/s*r,z:this.mike.z+i/s*r},this.heading=Math.atan2(n,i),r}move(e,t){const n=this.day.state.mike.activity;if(n&&n.kind!=="eating"){this.path=[];const o=fo(this.day,n.facility,"mike")??tt[n.facility].counter,c=this.stepTowards(o,el*e);this.walking=c>1e-4?el/_r:0,c||(this.heading=Math.atan2(-tt[n.facility].queueDir.x,-tt[n.facility].queueDir.z));return}if(this.pour){this.walking=0;return}const i=this.speed,s=Math.hypot(t.move.x,t.move.z);let r=0;if(s>.01){this.path=[];const o={x:t.move.x/s,z:t.move.z/s},c=i*e,l=b=>this.nav.walkable(b),h={x:this.mike.x+o.x*c,z:this.mike.z+o.z*c},d={x:this.mike.x+o.x*c,z:this.mike.z},f={x:this.mike.x,z:this.mike.z+o.z*c},u=l(h)?h:l(d)&&Math.abs(o.x)>.2?d:l(f)&&Math.abs(o.z)>.2?f:null;u&&(r=Ft(u,this.mike),this.mike=u),this.heading=Math.atan2(o.x,o.z)}else if(this.path.length){let o=i*e;for(;o>1e-5&&this.path.length;){const c=this.stepTowards(this.path[0],o);if(r+=c,o-=c,Ft(this.mike,this.path[0])<.02&&this.path.shift(),!c)break}}this.walking=e>0?Ct(r/e/_r,0,1):0,vf(this.day,af(this.mike))}act(){var n;const e=this.day.state;if(e.phase!=="match")return;if(this.pour&&!(this.ball&&this.ballInPlay&&tl(this.ball,this.mike)==="caught")){this.finishPour(this.pour.stop());return}if(this.ball&&this.ballInPlay&&Xa(this.ball)>=xn.windowFrom*.5){const i=tl(this.ball,this.mike);if(i==="caught"){const s=((n=this.tray)==null?void 0:n.isLevel())??!0;this.award(this.score.catchBall()),this.emit({type:"catch"}),this.tray&&!s&&(this.spill(),this.emit({type:"toast",text:"Caught it… but the tray didn’t survive."})),this.ball=null;return}if(i==="too-early")return}if(Ns(this.day))return;const t=this.zone;if(t==="bar"){const i=nl(this.day);if(!i){this.emit({type:"toast",text:e.mike.carriedPints>0?"Take JB his pint first.":"Finish your pint first."});return}if(this.path=[],!this.day.joinQueue(i)){this.emit({type:"toast",text:e.notice});return}this.pourPurchase=i}else t==="toilet"?(this.path=[],this.day.joinQueue("toilet")||this.emit({type:"toast",text:e.notice})):t==="food"?(this.path=[],this.day.joinQueue("burger")||this.emit({type:"toast",text:e.notice})):t==="seats"&&this.day.talk()}finishPour(e){this.pour=null,this.pourPurchase=null,this.lastPour=e,this.lastPourDone=!0,this.award(this.score.pour(e)),this.emit({type:"pour-end",quality:e}),Ef(this.day)}spill(){const e=Mf(this.day);e&&(this.score.spill(),this.emit({type:"spill",who:e}),this.emit({type:"toast",text:e==="carried"?"Spilt JB’s pint! Combo lost.":"Spilt your pint! Combo lost."}),this.day.state.mike.carriedPints<=0&&(this.tray=null))}afterSim(e){const t=this.day.state,n=t.mike,i=n.totalSpend-e.spend,s=n.carriedPints-e.carried+n.heldPints+n.drinking-e.held;if(i>.001&&s>.5){const r=Math.round(s);this.emit({type:"purchase",amount:i,pints:r,text:`£${i.toFixed(2)} · ${r} ${r===1?"pint":"pints"}${n.carriedPints>0?" · take JB his":""}`})}n.toilets>e.toilets&&this.award(this.score.relief()),n.burgers>e.burgers&&this.award(this.score.burger()),n.carriedPints>e.carried&&(this.tray=new ff(this.seed+ ++this.trayCount*31),this.emit({type:"tray-start"})),e.carried>0&&n.carriedPints===0&&n.place==="seats"&&(this.award(this.score.deliver(e.carried,this.lastPour==="perfect")),this.tray=null);for(const r of t.events.slice(this.seenEvents))this.onCricket(r);this.seenEvents=t.events.length,t.jeopardy.failure&&this.score.breakCombo()}onCricket(e){this.emit({type:"ball-bowled",kind:e.kind});const t=e.kind==="six"||e.kind==="four"||e.kind==="wicket"||e.importance>=4;if(e.kind==="six"){const n=this.ball?null:pf(e.id,this.seed,this.mike,$c,i=>this.nav.snap(i));n&&(this.ball=n),this.emit({type:"six",ball:n,eventId:e.id})}else e.kind==="four"?this.emit({type:"four",eventId:e.id}):e.kind==="wicket"&&this.emit({type:"wicket",eventId:e.id});if(t)if(e.mikeSaw){const n=e.importance>=4&&e.kind!=="six"&&e.kind!=="four"&&e.kind!=="wicket"?"milestone":e.kind;this.award(this.score.witness(n))}else this.emit({type:"toast",text:e.kind==="wicket"?"A wicket! You missed it.":"A roar from the stand. You missed it."})}prompt(){const e=this.day.state,t=e.mike;if(this.finished||e.phase!=="match")return{label:"Day over",enabled:!1,urgent:!1};if(this.ball&&this.ballInPlay){const s=Xa(this.ball)>=xn.windowFrom,r=Ft(this.mike,this.ball.target)<=xn.reach;return this.pour&&!(s&&r)?{label:"Stop the pour on the line",enabled:!0,urgent:!0}:{label:s?r?"CATCH!":"Get under it!":"SIX! Get under the shadow",enabled:s&&r,urgent:!0}}if(this.pour)return{label:"Stop the pour on the line",enabled:!0,urgent:!0};const n=t.activity;if((n==null?void 0:n.kind)==="queued"){const s=Rf(this.day,n.facility),r=n.facility==="bar"?n.purchase==="pint-1"?" for a pint":` for ${n.purchase.slice(-1)} pints`:"";return{label:s?`Queueing${r}… ${s} ahead`:`Queueing${r}… nearly there`,enabled:!1,urgent:!1}}if((n==null?void 0:n.kind)==="service")return{label:n.facility==="bar"?"Paying up…":n.facility==="toilet"?"Ahhh…":"Being served…",enabled:!1,urgent:!1};const i=this.zone;if(i==="bar"){const s=nl(this.day);return s?{label:s==="pint-2"?"Queue for a round (2 pints · £12.40)":"Queue for a pint (£6.20)",enabled:!0,urgent:!1}:{label:t.carriedPints>0?"Take JB his pint":"Finish your pint first",enabled:!1,urgent:!1}}return i==="toilet"?{label:"Join the toilet queue",enabled:!0,urgent:t.bladder>=70}:i==="food"?{label:(n==null?void 0:n.kind)==="eating"?"Eating…":"Queue for a burger (£7.50)",enabled:!n,urgent:t.hunger>=75}:i==="seats"?{label:"Chat to JB",enabled:!0,urgent:!1}:this.tray?{label:"Keep the tray level · take it to JB",enabled:!1,urgent:!1}:t.carriedPints>0?{label:"Take JB his pint",enabled:!1,urgent:!1}:{label:Ft(this.mike,ei)>6?"Click the ground to walk · JB’s on the bench":"Bar, burgers and loos are up the concourse",enabled:!1,urgent:!1}}hud(){const e=this.day.state,t=this.day.scoreboard(),n=e.mike;return{score:this.score.points,combo:this.score.combo,team:t.team,runs:t.runs,wickets:t.wickets,overs:t.overs,target:t.target,clock:jd(e.minute),bladder:n.bladder,hunger:n.hunger,alcohol:Math.round(Us(this.day)*100),sobriety:this.day.sobriety("mike"),pintsDrunk:e.jeopardy.mikePintsDrunk,carrying:n.carriedPints,holding:n.heldPints+(n.drinking>.01?1:0),spend:n.totalSpend,speech:e.speech,speechImportant:/round|thanks|warning|delivered/.test(e.speechCategory??""),notice:e.notice,prompt:this.prompt(),roundChoice:e.jb.awaitingRoundChoice,roundChoiceSeconds:Math.ceil(e.jb.roundChoiceSecondsLeft),pour:this.pour?{level:this.pour.level()}:null,tilt:this.tray?this.tray.tilt:null,warnings:this.day.criticalWarnings()}}results(){var i;const e=this.day.state,t=this.day.dayScore(),n=_f(t.total);return{title:((i=e.jeopardy.failure)==null?void 0:i.title)??e.result??"Stumps",matchResult:e.jeopardy.failure?e.jeopardy.failure.message:e.result,arcadePoints:this.score.points,dayRating:t.total,dayBonus:n,total:this.score.points+n,bestCombo:this.score.bestCombo,catches:this.score.catches,delivered:this.score.delivered,spills:this.score.spills,reasons:t.reasons}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="186",Lf=0,sl=1,If=2,Gs=1,Df=2,ks=3,Si=0,tn=1,Ht=2,ii=0,Hs=1,al=2,rl=3,ol=4,Ff=5,ns=100,Nf=101,Uf=102,kf=103,Of=104,Bf=200,zf=201,Gf=202,Hf=203,kh=204,Oh=205,Vf=206,Wf=207,Xf=208,qf=209,Kf=210,jf=211,Jf=212,Yf=213,Zf=214,uo=0,po=1,mo=2,qs=3,go=4,bo=5,_o=6,xo=7,ir=0,$f=1,Qf=2,zn=0,Bh=1,zh=2,Gh=3,Hh=4,Vh=5,Wh=6,Xh=7,cl="attached",eu="detached",qh=300,Fi=301,ds=302,vr=303,Mr=304,sr=306,Ni=1e3,On=1001,qa=1002,At=1003,Kh=1004,Os=1005,Nt=1006,ka=1007,ti=1008,cn=1009,jh=1010,Jh=1011,Ks=1012,lc=1013,Gn=1014,_n=1015,Hn=1016,hc=1017,dc=1018,js=1020,Yh=35902,Zh=35899,$h=1021,Qh=1022,en=1023,ai=1026,Di=1027,fc=1028,uc=1029,Ui=1030,pc=1031,mc=1033,Oa=33776,Ba=33777,za=33778,Ga=33779,vo=35840,Mo=35841,So=35842,yo=35843,Eo=36196,wo=37492,To=37496,Ao=37488,Ro=37489,Ka=37490,Co=37491,Po=37808,Lo=37809,Io=37810,Do=37811,Fo=37812,No=37813,Uo=37814,ko=37815,Oo=37816,Bo=37817,zo=37818,Go=37819,Ho=37820,Vo=37821,Wo=36492,Xo=36494,qo=36495,Ko=36283,jo=36284,ja=36285,Jo=36286,Yo=2200,ed=2201,tu=2202,Js=2300,Ys=2301,Sr=2302,ll=2303,is=2400,ss=2401,Ja=2402,gc=2500,nu=2501,iu=0,td=1,Zo=2,su=3200,fs=0,au=1,xi="",Tt="srgb",dn="srgb-linear",Ya="linear",lt="srgb",yr=7680,ru=519,ou=512,cu=513,lu=514,bc=515,hu=516,du=517,_c=518,fu=519,nd=35044,hl="300 es",Bn=2e3,Zs=2001;function uu(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function pu(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function $s(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function mu(){const a=$s("canvas");return a.style.display="block",a}const dl={};function Za(...a){const e="THREE."+a.shift();console.log(e,...a)}function id(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ce(...a){a=id(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ue(...a){a=id(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function os(...a){const e=a.join(" ");e in dl||(dl[e]=!0,Ce(...a))}function gu(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const bu={[uo]:po,[mo]:_o,[go]:xo,[qs]:bo,[po]:uo,[_o]:mo,[xo]:go,[bo]:qs};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const Vs=Math.PI/180,us=180/Math.PI;function Rn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[a&255]+Kt[a>>8&255]+Kt[a>>16&255]+Kt[a>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function $e(a,e,t){return Math.max(e,Math.min(t,a))}function xc(a,e){return(a%e+e)%e}function _u(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function xu(a,e,t){return a!==e?(t-a)/(e-a):0}function Ws(a,e,t){return(1-t)*a+t*e}function vu(a,e,t,n){return Ws(a,e,1-Math.exp(-t*n))}function Mu(a,e=1){return e-Math.abs(xc(a,e*2)-e)}function Su(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function yu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Eu(a,e){return a+Math.floor(Math.random()*(e-a+1))}function wu(a,e){return a+Math.random()*(e-a)}function Tu(a){return a*(.5-Math.random())}function Au(a){a!==void 0&&(fl=a);let e=fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ru(a){return a*Vs}function Cu(a){return a*us}function Pu(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Lu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Iu(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Du(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),f=r((e-n)/2),u=s((n-e)/2),b=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*d,c*f,o*l);break;case"YZY":a.set(c*f,o*h,c*d,o*l);break;case"ZXZ":a.set(c*d,c*f,o*h,o*l);break;case"XZX":a.set(o*h,c*b,c*u,o*l);break;case"YXY":a.set(c*u,o*h,c*b,o*l);break;case"ZYZ":a.set(c*b,c*u,o*h,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fu={DEG2RAD:Vs,RAD2DEG:us,generateUUID:Rn,clamp:$e,euclideanModulo:xc,mapLinear:_u,inverseLerp:xu,lerp:Ws,damp:vu,pingpong:Mu,smoothstep:Su,smootherstep:yu,randInt:Eu,randFloat:wu,randFloatSpread:Tu,seededRandom:Au,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Lu,floorPowerOfTwo:Iu,setQuaternionFromProperEuler:Du,normalize:ht,denormalize:wn},kc=class kc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kc.prototype.isVector2=!0;let ke=kc;class Qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=s[r+0],u=s[r+1],b=s[r+2],M=s[r+3];if(d!==M||c!==f||l!==u||h!==b){let m=c*f+l*u+h*b+d*M;m<0&&(f=-f,u=-u,b=-b,M=-M,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),R=Math.sin(v);p=Math.sin(p*v)/R,o=Math.sin(o*v)/R,c=c*p+f*o,l=l*p+u*o,h=h*p+b*o,d=d*p+M*o}else{c=c*p+f*o,l=l*p+u*o,h=h*p+b*o,d=d*p+M*o;const v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[r],f=s[r+1],u=s[r+2],b=s[r+3];return e[t]=o*b+h*d+c*u-l*f,e[t+1]=c*b+h*f+l*d-o*u,e[t+2]=l*b+h*u+o*f-c*d,e[t+3]=h*b-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),f=c(n/2),u=c(i/2),b=c(s/2);switch(r){case"XYZ":this._x=f*h*d+l*u*b,this._y=l*u*d-f*h*b,this._z=l*h*b+f*u*d,this._w=l*h*d-f*u*b;break;case"YXZ":this._x=f*h*d+l*u*b,this._y=l*u*d-f*h*b,this._z=l*h*b-f*u*d,this._w=l*h*d+f*u*b;break;case"ZXY":this._x=f*h*d-l*u*b,this._y=l*u*d+f*h*b,this._z=l*h*b+f*u*d,this._w=l*h*d-f*u*b;break;case"ZYX":this._x=f*h*d-l*u*b,this._y=l*u*d+f*h*b,this._z=l*h*b-f*u*d,this._w=l*h*d+f*u*b;break;case"YZX":this._x=f*h*d+l*u*b,this._y=l*u*d+f*h*b,this._z=l*h*b-f*u*d,this._w=l*h*d-f*u*b;break;case"XZY":this._x=f*h*d-l*u*b,this._y=l*u*d-f*h*b,this._z=l*h*b+f*u*d,this._w=l*h*d+f*u*b;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(s-l)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oc=class Oc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),d=2*(s*n-r*t);return this.x=t+c*l+r*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;let L=Oc;const Er=new L,ul=new Qt,Bc=class Bc{constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],b=n[8],M=i[0],m=i[3],p=i[6],v=i[1],R=i[4],x=i[7],y=i[2],w=i[5],C=i[8];return s[0]=r*M+o*v+c*y,s[3]=r*m+o*R+c*w,s[6]=r*p+o*x+c*C,s[1]=l*M+h*v+d*y,s[4]=l*m+h*R+d*w,s[7]=l*p+h*x+d*C,s[2]=f*M+u*v+b*y,s[5]=f*m+u*R+b*w,s[8]=f*p+u*x+b*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*r-o*l,f=o*c-h*s,u=l*s-r*c,b=t*d+n*f+i*u;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=d*M,e[1]=(i*l-h*n)*M,e[2]=(o*n-i*r)*M,e[3]=f*M,e[4]=(h*t-i*c)*M,e[5]=(i*s-o*t)*M,e[6]=u*M,e[7]=(n*c-l*t)*M,e[8]=(r*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wr.makeScale(e,t)),this}rotate(e){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;let Ge=Bc;const wr=new Ge,pl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const a={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[dn]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),a}const Ze=Nu();function si(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function cs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let zi;class Uu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=$s("canvas")),zi.width=e.width,zi.height=e.height;const i=zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=si(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ku=0;class vc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Tr(i[r].image)):s.push(Tr(i[r]))}else s=Tr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Uu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Ou=0;const Ar=new L;class kt extends yi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=On,i=On,s=Nt,r=ti,o=en,c=cn,l=kt.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Rn(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ar).x}get height(){return this.source.getSize(Ar).y}get depth(){return this.source.getSize(Ar).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=qh;kt.DEFAULT_ANISOTROPY=1;const zc=class zc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],b=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(b-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(b+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,x=(u+1)/2,y=(p+1)/2,w=(h+f)/4,C=(d+M)/4,_=(b+m)/4;return R>x&&R>y?R<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(R),i=w/n,s=C/n):x>y?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=_/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=C/s,i=_/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-b)*(m-b)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-b)/v,this.y=(d-M)/v,this.z=(f-h)/v,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zc.prototype.isVector4=!0;let ut=zc;class Bu extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new kt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Bu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sd extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nr=class nr{constructor(e,t,n,i,s,r,o,c,l,h,d,f,u,b,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,d,f,u,b,M,m)}set(e,t,n,i,s,r,o,c,l,h,d,f,u,b,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=b,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),r=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=r*h,u=r*d,b=o*h,M=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+b*l,t[5]=f-M*l,t[9]=-o*c,t[2]=M-f*l,t[6]=b+u*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*h,u=c*d,b=l*h,M=l*d;t[0]=f+M*o,t[4]=b*o-u,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=u*o-b,t[6]=M+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*h,u=c*d,b=l*h,M=l*d;t[0]=f-M*o,t[4]=-r*d,t[8]=b+u*o,t[1]=u+b*o,t[5]=r*h,t[9]=M-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*h,u=r*d,b=o*h,M=o*d;t[0]=c*h,t[4]=b*l-u,t[8]=f*l+M,t[1]=c*d,t[5]=M*l+f,t[9]=u*l-b,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,u=r*l,b=o*c,M=o*l;t[0]=c*h,t[4]=M-f*d,t[8]=b*d+u,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+b,t[10]=f-M*d}else if(e.order==="XZY"){const f=r*c,u=r*l,b=o*c,M=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+M,t[5]=r*h,t[9]=u*d-b,t[2]=b*d-u,t[6]=o*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gu,e,Hu)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(n,nn),hi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(n,nn)),hi.normalize(),la.crossVectors(nn,hi),i[0]=hi.x,i[4]=la.x,i[8]=nn.x,i[1]=hi.y,i[5]=la.y,i[9]=nn.y,i[2]=hi.z,i[6]=la.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],b=n[2],M=n[6],m=n[10],p=n[14],v=n[3],R=n[7],x=n[11],y=n[15],w=i[0],C=i[4],_=i[8],T=i[12],A=i[1],P=i[5],I=i[9],O=i[13],D=i[2],B=i[6],q=i[10],W=i[14],te=i[3],G=i[7],Z=i[11],ee=i[15];return s[0]=r*w+o*A+c*D+l*te,s[4]=r*C+o*P+c*B+l*G,s[8]=r*_+o*I+c*q+l*Z,s[12]=r*T+o*O+c*W+l*ee,s[1]=h*w+d*A+f*D+u*te,s[5]=h*C+d*P+f*B+u*G,s[9]=h*_+d*I+f*q+u*Z,s[13]=h*T+d*O+f*W+u*ee,s[2]=b*w+M*A+m*D+p*te,s[6]=b*C+M*P+m*B+p*G,s[10]=b*_+M*I+m*q+p*Z,s[14]=b*T+M*O+m*W+p*ee,s[3]=v*w+R*A+x*D+y*te,s[7]=v*C+R*P+x*B+y*G,s[11]=v*_+R*I+x*q+y*Z,s[15]=v*T+R*O+x*W+y*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],b=e[3],M=e[7],m=e[11],p=e[15],v=c*u-l*f,R=o*u-l*d,x=o*f-c*d,y=r*u-l*h,w=r*f-c*h,C=r*d-o*h;return t*(M*v-m*R+p*x)-n*(b*v-m*y+p*w)+i*(b*R-M*y+p*C)-s*(b*x-M*w+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(s*h-o*c)+i*(s*l-r*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],b=e[12],M=e[13],m=e[14],p=e[15],v=t*o-n*r,R=t*c-i*r,x=t*l-s*r,y=n*c-i*o,w=n*l-s*o,C=i*l-s*c,_=h*M-d*b,T=h*m-f*b,A=h*p-u*b,P=d*m-f*M,I=d*p-u*M,O=f*p-u*m,D=v*O-R*I+x*P+y*A-w*T+C*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return e[0]=(o*O-c*I+l*P)*B,e[1]=(i*I-n*O-s*P)*B,e[2]=(M*C-m*w+p*y)*B,e[3]=(f*w-d*C-u*y)*B,e[4]=(c*A-r*O-l*T)*B,e[5]=(t*O-i*A+s*T)*B,e[6]=(m*x-b*C-p*R)*B,e[7]=(h*C-f*x+u*R)*B,e[8]=(r*I-o*A+l*_)*B,e[9]=(n*A-t*I-s*_)*B,e[10]=(b*w-M*x+p*v)*B,e[11]=(d*x-h*w-u*v)*B,e[12]=(o*T-r*P-c*_)*B,e[13]=(t*P-n*T+i*_)*B,e[14]=(M*R-b*y-m*v)*B,e[15]=(h*y-d*R+f*v)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,d=o+o,f=s*l,u=s*h,b=s*d,M=r*h,m=r*d,p=o*d,v=c*l,R=c*h,x=c*d,y=n.x,w=n.y,C=n.z;return i[0]=(1-(M+p))*y,i[1]=(u+x)*y,i[2]=(b-R)*y,i[3]=0,i[4]=(u-x)*w,i[5]=(1-(f+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(b+R)*C,i[9]=(m-v)*C,i[10]=(1-(f+M))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Gi.set(i[0],i[1],i[2]).length();const o=Gi.set(i[4],i[5],i[6]).length(),c=Gi.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Sn.copy(this);const l=1/r,h=1/o,d=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=Bn,c=!1){const l=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let b,M;if(c)b=s/(r-s),M=r*s/(r-s);else if(o===Bn)b=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===Zs)b=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=b,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Bn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let b,M;if(c)b=1/(r-s),M=r/(r-s);else if(o===Bn)b=-2/(r-s),M=-(r+s)/(r-s);else if(o===Zs)b=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=b,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nr.prototype.isMatrix4=!0;let We=nr;const Gi=new L,Sn=new We,Gu=new L(0,0,0),Hu=new L(1,1,1),hi=new L,la=new L,nn=new L,gl=new We,bl=new Qt;class Vn{constructor(e=0,t=0,n=0,i=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vu=0;const _l=new L,Hi=new Qt,jn=new We,ha=new L,Ss=new L,Wu=new L,Xu=new Qt,xl=new L(1,0,0),vl=new L(0,1,0),Ml=new L(0,0,1),Sl={type:"added"},qu={type:"removed"},Vi={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Mt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new Vn,n=new Qt,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ge}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ss,ha,this.up):jn.lookAt(ha,Ss,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(jn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qu),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),u=r(e.animations),b=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),b.length>0&&(n.nodes=b)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Et extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,b=.005;l.inputState.pinching&&f>u+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},da={h:0,s:0,l:0};function Pr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=xc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Pr(r,s,e+1/3),this.g=Pr(r,s,e),this.b=Pr(r,s,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ze.workingToColorSpace(jt.copy(this),e),Math.round($e(jt.r*255,0,255))*65536+Math.round($e(jt.g*255,0,255))*256+Math.round($e(jt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,s=jt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Tt){Ze.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(da);const n=Ws(di.h,da.h,t),i=Ws(di.s,da.s,t),s=Ws(di.l,da.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Le;Le.NAMES=ad;class Sc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new Sc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ju extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yn=new L,Jn=new L,Lr=new L,Yn=new L,Wi=new L,Xi=new L,yl=new L,Ir=new L,Dr=new L,Fr=new L,Nr=new ut,Ur=new ut,kr=new ut;class Tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Jn.subVectors(n,t),Lr.subVectors(e,t);const r=yn.dot(yn),o=yn.dot(Jn),c=yn.dot(Lr),l=Jn.dot(Jn),h=Jn.dot(Lr),d=r*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,b=(r*h-o*c)*f;return s.set(1-u-b,b,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yn.x),c.addScaledVector(r,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return Nr.setScalar(0),Ur.setScalar(0),kr.setScalar(0),Nr.fromBufferAttribute(e,t),Ur.fromBufferAttribute(e,n),kr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Nr,s.x),r.addScaledVector(Ur,s.y),r.addScaledVector(kr,s.z),r}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Jn.subVectors(e,t),yn.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),yn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Wi.subVectors(i,n),Xi.subVectors(s,n),Ir.subVectors(e,n);const c=Wi.dot(Ir),l=Xi.dot(Ir);if(c<=0&&l<=0)return t.copy(n);Dr.subVectors(e,i);const h=Wi.dot(Dr),d=Xi.dot(Dr);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Wi,r);Fr.subVectors(e,s);const u=Wi.dot(Fr),b=Xi.dot(Fr);if(b>=0&&u<=b)return t.copy(s);const M=u*l-c*b;if(M<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(Xi,o);const m=h*b-u*d;if(m<=0&&d-h>=0&&u-b>=0)return yl.subVectors(s,i),o=(d-h)/(d-h+(u-b)),t.copy(i).addScaledVector(yl,o);const p=1/(m+M+f);return r=M*p,o=f*p,t.copy(n).addScaledVector(Wi,r).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ln{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,En):En.fromBufferAttribute(s,r),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),ua.subVectors(this.max,ys),qi.subVectors(e.a,ys),Ki.subVectors(e.b,ys),ji.subVectors(e.c,ys),fi.subVectors(Ki,qi),ui.subVectors(ji,Ki),Ai.subVectors(qi,ji);let t=[0,-fi.z,fi.y,0,-ui.z,ui.y,0,-Ai.z,Ai.y,fi.z,0,-fi.x,ui.z,0,-ui.x,Ai.z,0,-Ai.x,-fi.y,fi.x,0,-ui.y,ui.x,0,-Ai.y,Ai.x,0];return!Or(t,qi,Ki,ji,ua)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,qi,Ki,ji,ua))?!1:(pa.crossVectors(fi,ui),t=[pa.x,pa.y,pa.z],Or(t,qi,Ki,ji,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,fa=new ln,qi=new L,Ki=new L,ji=new L,fi=new L,ui=new L,Ai=new L,ys=new L,ua=new L,pa=new L,Ri=new L;function Or(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Ri.fromArray(a,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const It=new L,ma=new ke;let Ju=0;class Ut extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yc extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rd extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Yu=new ln,Es=new L,Br=new L;class Xn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Br)),this.expandByPoint(Es.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Zu=0;const pn=new We,zr=new Mt,Ji=new L,sn=new ln,ws=new ln,zt=new L;class wt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?rd:yc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(sn.min,ws.min),sn.expandByPoint(zt),zt.addVectors(sn.max,ws.max),sn.expandByPoint(zt)):(sn.expandByPoint(ws.min),sn.expandByPoint(ws.max))}sn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(e,l),zt.add(Ji)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new L,c[_]=new L;const l=new L,h=new L,d=new L,f=new ke,u=new ke,b=new ke,M=new L,m=new L;function p(_,T,A){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),f.fromBufferAttribute(s,_),u.fromBufferAttribute(s,T),b.fromBufferAttribute(s,A),h.sub(l),d.sub(l),u.sub(f),b.sub(f);const P=1/(u.x*b.y-b.x*u.y);isFinite(P)&&(M.copy(h).multiplyScalar(b.y).addScaledVector(d,-u.y).multiplyScalar(P),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-b.x).multiplyScalar(P),o[_].add(M),o[T].add(M),o[A].add(M),c[_].add(m),c[T].add(m),c[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,T=v.length;_<T;++_){const A=v[_],P=A.start,I=A.count;for(let O=P,D=P+I;O<D;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const R=new L,x=new L,y=new L,w=new L;function C(_){y.fromBufferAttribute(i,_),w.copy(y);const T=o[_];R.copy(T),R.sub(y.multiplyScalar(y.dot(T))).normalize(),x.crossVectors(w,T);const P=x.dot(c[_])<0?-1:1;r.setXYZW(_,R.x,R.y,R.z,P)}for(let _=0,T=v.length;_<T;++_){const A=v[_],P=A.start,I=A.count;for(let O=P,D=P+I;O<D;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,r=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let f=0,u=e.count;f<u;f+=3){const b=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,b),s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,m),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,b=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?u=c[M]*o.data.stride+o.offset:u=c[M]*h;for(let p=0;p<h;p++)f[b++]=l[u++]}return new Ut(f,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $u{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nd,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Yt=new L;class Ec{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gr=new L,Qu=new L,ep=new Ge;class gi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gr.subVectors(n,t).cross(Qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Gr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(Gr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let tp=0;class hn extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Hs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Oh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $n=new L,Hr=new L,ga=new L,ba=new L;class ia{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hr.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),ba.copy(this.origin).sub(Hr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ga),o=ba.dot(this.direction),c=-ba.dot(ga),l=ba.lengthSq(),h=Math.abs(1-r*r);let d,f,u,b;if(h>0)if(d=r*c-o,f=r*o-c,b=s*h,d>=0)if(f>=-b)if(f<=b){const M=1/h;d*=M,f*=M,u=d*(d+r*f+2*o)+f*(r*d+f+2*c)+l}else f=s,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-b?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l):f<=b?(d=0,f=Math.min(Math.max(-s,-c),s),u=f*(f+2*c)+l):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Hr).addScaledVector(ga,f),u}intersectSphere(e,t){if(e.radius<0)return null;$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){const r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-r.x,f=e.y-r.y,u=e.z-r.z,b=t.x-r.x,M=t.y-r.y,m=t.z-r.z,p=n.x-r.x,v=n.y-r.y,R=n.z-r.z,x=Math.abs(c),y=Math.abs(l),w=Math.abs(h);let C,_,T,A,P,I,O,D,B,q,W,te;if(x>=y&&x>=w?(T=c,I=d,B=b,te=p,c>=0?(C=l,_=h,A=f,P=u,O=M,D=m,q=v,W=R):(C=h,_=l,A=u,P=f,O=m,D=M,q=R,W=v)):y>=w?(T=l,I=f,B=M,te=v,l>=0?(C=h,_=c,A=u,P=d,O=m,D=b,q=R,W=p):(C=c,_=h,A=d,P=u,O=b,D=m,q=p,W=R)):(T=h,I=u,B=m,te=R,h>=0?(C=c,_=l,A=d,P=f,O=b,D=M,q=p,W=v):(C=l,_=c,A=f,P=d,O=M,D=b,q=v,W=p)),T===0)return null;const G=C/T,Z=_/T,ee=1/T,ye=A-G*I,ve=P-Z*I,at=O-G*B,Ie=D-Z*B,Be=q-G*te,j=W-Z*te,Y=Be*Ie-j*at,de=ye*j-ve*Be,Ne=at*ve-Ie*ye;if(i){if(Y<0||de<0||Ne<0)return null}else if((Y<0||de<0||Ne<0)&&(Y>0||de>0||Ne>0))return null;const oe=Y+de+Ne;if(oe===0)return null;const Oe=ee*(Y*I+de*B+Ne*te);return(oe>0?Oe<0:Oe>0)?null:this.at(Oe/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const El=new We,Ci=new ia,_a=new Xn,wl=new L,xa=new L,va=new L,Ma=new L,Vr=new L,Sa=new L,Tl=new L,ya=new L;class Te extends Mt{constructor(e=new wt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Vr.fromBufferAttribute(d,e),r?Sa.addScaledVector(Vr,h):Sa.addScaledVector(Vr.sub(t),h))}t.add(Sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(_a.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(_a,wl)===null||Ci.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(El.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(r))for(let b=0,M=f.length;b<M;b++){const m=f[b],p=r[m.materialIndex],v=Math.max(m.start,u.start),R=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,y=R;x<y;x+=3){const w=o.getX(x),C=o.getX(x+1),_=o.getX(x+2);i=Ea(this,p,e,n,l,h,d,w,C,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const b=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let m=b,p=M;m<p;m+=3){const v=o.getX(m),R=o.getX(m+1),x=o.getX(m+2);i=Ea(this,r,e,n,l,h,d,v,R,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let b=0,M=f.length;b<M;b++){const m=f[b],p=r[m.materialIndex],v=Math.max(m.start,u.start),R=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,y=R;x<y;x+=3){const w=x,C=x+1,_=x+2;i=Ea(this,p,e,n,l,h,d,w,C,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const b=Math.max(0,u.start),M=Math.min(c.count,u.start+u.count);for(let m=b,p=M;m<p;m+=3){const v=m,R=m+1,x=m+2;i=Ea(this,r,e,n,l,h,d,v,R,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function np(a,e,t,n,i,s,r,o){let c;if(e.side===tn?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===Si,o),c===null)return null;ya.copy(o),ya.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(ya);return l<t.near||l>t.far?null:{distance:l,point:ya.clone(),object:a}}function Ea(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,xa),a.getVertexPosition(c,va),a.getVertexPosition(l,Ma);const h=np(a,e,t,n,xa,va,Ma,Tl);if(h){const d=new L;Tn.getBarycoord(Tl,xa,va,Ma,d),i&&(h.uv=Tn.getInterpolatedAttribute(i,o,c,l,d,new ke)),s&&(h.uv1=Tn.getInterpolatedAttribute(s,o,c,l,d,new ke)),r&&(h.normal=Tn.getInterpolatedAttribute(r,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};Tn.getNormal(xa,va,Ma,f.normal),h.face=f,h.barycoord=d}return h}const Ts=new ut,Al=new ut,Rl=new ut,ip=new ut,Cl=new We,wa=new L,Wr=new Xn,Pl=new We,Xr=new ia;class od extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingBox.expandByPoint(wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingSphere.expandByPoint(wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1&&(Pl.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Pl),!(this.boundingBox!==null&&Xr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Al.fromBufferAttribute(i.attributes.skinIndex,e),Rl.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ts.copy(t),t.set(0,0,0,0)):(Ts.set(...t,1),t.set(0,0,0)),Ts.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const r=Rl.getComponent(s);if(r!==0){const o=Al.getComponent(s);Cl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ip.copy(Ts).applyMatrix4(Cl),r)}}return t.isVector4&&(t.w=Ts.w),t.applyMatrix4(this.bindMatrixInverse)}}class cd extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sa extends kt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=At,h=At,d,f){super(null,r,o,c,l,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ll=new We,sp=new We;class wc{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:sp;Ll.multiplyMatrices(o,t[s]),Ll.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sa(t,e,e,en,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(Ce("Skeleton: No bone found with UUID:",s),r=new cd),this.bones.push(r),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class $a extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new We,Il=new We,Ta=[],Dl=new ln,ap=new We,As=new Te,Rs=new Xn;class ld extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ap)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Dl.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Rs.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Yi),Il.multiplyMatrices(n,Yi),As.matrixWorld=Il,As.raycast(e,Ta);for(let r=0,o=Ta.length;r<o;r++){const c=Ta[r];c.instanceId=s,c.object=this,t.push(c)}Ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(i*this.count),i,this.count,fc,_n));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pi=new Xn,rp=new ke(.5,.5),Aa=new L;class Tc{constructor(e=new gi,t=new gi,n=new gi,i=new gi,s=new gi,r=new gi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],f=s[6],u=s[7],b=s[8],M=s[9],m=s[10],p=s[11],v=s[12],R=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-r,u-h,p-b,y-v).normalize(),i[1].setComponents(l+r,u+h,p+b,y+v).normalize(),i[2].setComponents(l+o,u+d,p+M,y+R).normalize(),i[3].setComponents(l-o,u-d,p-M,y-R).normalize(),n)i[4].setComponents(c,f,m,x).normalize(),i[5].setComponents(l-c,u-f,p-m,y-x).normalize();else if(i[4].setComponents(l-c,u-f,p-m,y-x).normalize(),t===Bn)i[5].setComponents(l+c,u+f,p+m,y+x).normalize();else if(t===Zs)i[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=rp.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Aa.x=i.normal.x>0?e.max.x:e.min.x,Aa.y=i.normal.y>0?e.max.y:e.min.y,Aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hd extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new L,er=new L,Fl=new We,Cs=new ia,Ra=new Xn,qr=new L,Nl=new L;class Ac extends Mt{constructor(e=new wt,t=new hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Qa.fromBufferAttribute(t,i-1),er.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qa.distanceTo(er);e.setAttribute("lineDistance",new it(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Fl.copy(i).invert(),Cs.copy(e.ray).applyMatrix4(Fl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),b=Math.min(h.count,r.start+r.count);for(let M=u,m=b-1;M<m;M+=l){const p=h.getX(M),v=h.getX(M+1),R=Ca(this,e,Cs,c,p,v,M);R&&t.push(R)}if(this.isLineLoop){const M=h.getX(b-1),m=h.getX(u),p=Ca(this,e,Cs,c,M,m,b-1);p&&t.push(p)}}else{const u=Math.max(0,r.start),b=Math.min(f.count,r.start+r.count);for(let M=u,m=b-1;M<m;M+=l){const p=Ca(this,e,Cs,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=Ca(this,e,Cs,c,b-1,u,b-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ca(a,e,t,n,i,s,r){const o=a.geometry.attributes.position;if(Qa.fromBufferAttribute(o,i),er.fromBufferAttribute(o,s),t.distanceSqToSegment(Qa,er,qr,Nl)>n)return;qr.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(qr);if(!(l<e.near||l>e.far))return{distance:l,point:Nl.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const Ul=new L,kl=new L;class op extends Ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ul.fromBufferAttribute(t,i),kl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ul.distanceTo(kl);e.setAttribute("lineDistance",new it(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends Ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dd extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ol=new We,$o=new ia,Pa=new Xn,La=new L;class lp extends Mt{constructor(e=new wt,t=new dd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;Ol.copy(i).invert(),$o.copy(e.ray).applyMatrix4(Ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let b=f,M=u;b<M;b++){const m=l.getX(b);La.fromBufferAttribute(d,m),Bl(La,m,c,i,e,t,this)}}else{const f=Math.max(0,r.start),u=Math.min(d.count,r.start+r.count);for(let b=f,M=u;b<M;b++)La.fromBufferAttribute(d,b),Bl(La,b,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bl(a,e,t,n,i,s,r){const o=$o.distanceSqToPoint(a);if(o<t){const c=new L;$o.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class fd extends kt{constructor(e=[],t=Fi,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ar extends kt{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends kt{constructor(e,t,n=Gn,i,s,r,o=At,c=At,l,h=ai,d=1){if(h!==ai&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class hp extends Qs{constructor(e,t=Gn,n=Fi,i,s,r=At,o=At,c,l=ai){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ud extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class An extends wt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],d=[];let f=0,u=0;b("z","y","x",-1,-1,n,t,e,r,s,0),b("z","y","x",1,-1,n,t,-e,r,s,1),b("x","z","y",1,1,e,n,t,i,r,2),b("x","z","y",1,-1,e,n,-t,i,r,3),b("x","y","z",1,-1,e,t,n,i,s,4),b("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function b(M,m,p,v,R,x,y,w,C,_,T){const A=x/C,P=y/_,I=x/2,O=y/2,D=w/2,B=C+1,q=_+1;let W=0,te=0;const G=new L;for(let Z=0;Z<q;Z++){const ee=Z*P-O;for(let ye=0;ye<B;ye++){const ve=ye*A-I;G[M]=ve*v,G[m]=ee*R,G[p]=D,l.push(G.x,G.y,G.z),G[M]=0,G[m]=0,G[p]=w>0?1:-1,h.push(G.x,G.y,G.z),d.push(ye/C),d.push(1-Z/_),W+=1}}for(let Z=0;Z<_;Z++)for(let ee=0;ee<C;ee++){const ye=f+ee+B*Z,ve=f+ee+B*(Z+1),at=f+(ee+1)+B*(Z+1),Ie=f+(ee+1)+B*Z;c.push(ye,ve,Ie),c.push(ve,at,Ie),te+=6}o.addGroup(u,te,T),u+=te,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rc extends wt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const r=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,b=n*2+s,M=i+1,m=new L,p=new L;for(let v=0;v<=b;v++){let R=0,x=0,y=0,w=0;if(v<=n){const T=v/n,A=T*Math.PI/2;x=-h-e*Math.cos(A),y=e*Math.sin(A),w=-e*Math.cos(A),R=T*d}else if(v<=n+s){const T=(v-n)/s;x=-h+T*t,y=e,w=0,R=d+T*f}else{const T=(v-n-s)/n,A=T*Math.PI/2;x=h+e*Math.sin(A),y=e*Math.cos(A),w=e*Math.sin(A),R=d+f+T*d}const C=Math.max(0,Math.min(1,R/u));let _=0;v===0?_=.5/i:v===b&&(_=-.5/i);for(let T=0;T<=i;T++){const A=T/i,P=A*Math.PI*2,I=Math.sin(P),O=Math.cos(P);p.x=-y*O,p.y=x,p.z=y*I,o.push(p.x,p.y,p.z),m.set(-y*O,w,y*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(A+_,C)}if(v>0){const T=(v-1)*M;for(let A=0;A<i;A++){const P=T+A,I=T+A+1,O=v*M+A,D=v*M+A+1;r.push(P,I,O),r.push(I,D,O)}}}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class rr extends wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],c=[],l=new L,h=new ke;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wt extends wt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],f=[],u=[];let b=0;const M=[],m=n/2;let p=0;v(),r===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(u,2));function v(){const x=new L,y=new L;let w=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const T=[],A=_/s,P=A*(t-e)+e;for(let I=0;I<=i;I++){const O=I/i,D=O*c+o,B=Math.sin(D),q=Math.cos(D);y.x=P*B,y.y=-A*n+m,y.z=P*q,d.push(y.x,y.y,y.z),x.set(B,C,q).normalize(),f.push(x.x,x.y,x.z),u.push(O,1-A),T.push(b++)}M.push(T)}for(let _=0;_<i;_++)for(let T=0;T<s;T++){const A=M[T][_],P=M[T+1][_],I=M[T+1][_+1],O=M[T][_+1];(e>0||T!==0)&&(h.push(A,P,O),w+=3),(t>0||T!==s-1)&&(h.push(P,I,O),w+=3)}l.addGroup(p,w,0),p+=w}function R(x){const y=b,w=new ke,C=new L;let _=0;const T=x===!0?e:t,A=x===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*A,0),f.push(0,A,0),u.push(.5,.5),b++;const P=b;for(let I=0;I<=i;I++){const D=I/i*c+o,B=Math.cos(D),q=Math.sin(D);C.x=T*q,C.y=m*A,C.z=T*B,d.push(C.x,C.y,C.z),f.push(0,A,0),w.x=B*.5+.5,w.y=q*.5*A+.5,u.push(w.x,w.y),b++}for(let I=0;I<i;I++){const O=y+I,D=P+I;x===!0?h.push(D,D+1,O):h.push(D+1,D,O),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends Wt{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new or(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const R=new L,x=new L,y=new L;for(let w=0;w<t.length;w+=3)u(t[w+0],R),u(t[w+1],x),u(t[w+2],y),c(R,x,y,v)}function c(v,R,x,y){const w=y+1,C=[];for(let _=0;_<=w;_++){C[_]=[];const T=v.clone().lerp(x,_/w),A=R.clone().lerp(x,_/w),P=w-_;for(let I=0;I<=P;I++)I===0&&_===w?C[_][I]=T:C[_][I]=T.clone().lerp(A,I/P)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){const A=Math.floor(T/2);T%2===0?(f(C[_][A+1]),f(C[_+1][A]),f(C[_][A])):(f(C[_][A+1]),f(C[_+1][A+1]),f(C[_+1][A]))}}function l(v){const R=new L;for(let x=0;x<s.length;x+=3)R.x=s[x+0],R.y=s[x+1],R.z=s[x+2],R.normalize().multiplyScalar(v),s[x+0]=R.x,s[x+1]=R.y,s[x+2]=R.z}function h(){const v=new L;for(let R=0;R<s.length;R+=3){v.x=s[R+0],v.y=s[R+1],v.z=s[R+2];const x=m(v)/2/Math.PI+.5,y=p(v)/Math.PI+.5;r.push(x,1-y)}b(),d()}function d(){for(let v=0;v<r.length;v+=6){const R=r[v+0],x=r[v+2],y=r[v+4],w=Math.max(R,x,y),C=Math.min(R,x,y);w>.9&&C<.1&&(R<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),y<.2&&(r[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function u(v,R){const x=v*3;R.x=e[x+0],R.y=e[x+1],R.z=e[x+2]}function b(){const v=new L,R=new L,x=new L,y=new L,w=new ke,C=new ke,_=new ke;for(let T=0,A=0;T<s.length;T+=9,A+=6){v.set(s[T+0],s[T+1],s[T+2]),R.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),w.set(r[A+0],r[A+1]),C.set(r[A+2],r[A+3]),_.set(r[A+4],r[A+5]),y.copy(v).add(R).add(x).divideScalar(3);const P=m(y);M(w,A+0,v,P),M(C,A+2,R,P),M(_,A+4,x,P)}}function M(v,R,x,y){y<0&&v.x===1&&(r[R]=v.x-1),x.x===0&&x.z===0&&(r[R]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.vertices,e.indices,e.radius,e.detail)}}class cr extends Cc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cr(e.radius,e.detail)}}class bn extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,u=[],b=[],M=[],m=[];for(let p=0;p<h;p++){const v=p*f-r;for(let R=0;R<l;R++){const x=R*d-s;b.push(x,-v,0),M.push(0,0,1),m.push(R/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const R=v+l*p,x=v+l*(p+1),y=v+1+l*(p+1),w=v+1+l*p;u.push(R,x,w),u.push(x,y,w)}this.setIndex(u),this.setAttribute("position",new it(b,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ls extends wt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const f=(t-e)/i,u=new L,b=new ke;for(let M=0;M<=i;M++){for(let m=0;m<=n;m++){const p=s+m/n*r;u.x=d*Math.cos(p),u.y=d*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),b.x=(u.x/t+1)/2,b.y=(u.y/t+1)/2,h.push(b.x,b.y)}d+=f}for(let M=0;M<i;M++){const m=M*(n+1);for(let p=0;p<n;p++){const v=p+m,R=v,x=v+n+1,y=v+n+2,w=v+1;o.push(R,x,w),o.push(x,y,w)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ms extends wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],d=new L,f=new L,u=[],b=[],M=[],m=[];for(let p=0;p<=n;p++){const v=[],R=p/n,x=r+R*o,y=e*Math.cos(x),w=Math.sqrt(e*e-y*y);let C=0;p===0&&r===0?C=.5/t:p===n&&c===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const T=_/t,A=i+T*s;d.x=-w*Math.cos(A),d.y=y,d.z=w*Math.sin(A),b.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(T+C,1-R),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const R=h[p][v+1],x=h[p][v],y=h[p+1][v],w=h[p+1][v+1];(p!==0||r>0)&&u.push(R,x,w),(p!==n-1||c<Math.PI)&&u.push(x,y,w)}this.setIndex(u),this.setAttribute("position",new it(b,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pc extends wt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],f=new L,u=new L,b=new L;for(let M=0;M<=n;M++){const m=r+M/n*o;for(let p=0;p<=i;p++){const v=p/i*s;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),b.subVectors(u,f).normalize(),h.push(b.x,b.y,b.z),d.push(p/i),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=i;m++){const p=(i+1)*M+m-1,v=(i+1)*(M-1)+m-1,R=(i+1)*(M-1)+m,x=(i+1)*M+m;c.push(p,v,x),c.push(v,R,x)}this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ps(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];if(zl(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(zl(i[0])){const s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(a){const e={};for(let t=0;t<a.length;t++){const n=ps(a[t]);for(const i in n)e[i]=n[i]}return e}function zl(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function dp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function pd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const fp={clone:ps,merge:Zt};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(i.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m4":this.uniforms[n].value=new We().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mp extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lc extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gp extends hn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gs extends hn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Qo extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bp extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _p extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bi(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Ha(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function xp(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gl(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function vp(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class bs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Mp extends bs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case ss:s=e,o=2*t-n;break;case Ja:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ss:r=e,c=2*n-t;break;case Ja:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,b=(n-t)/(i-t),M=b*b,m=M*b,p=-f*m+2*f*M-f*b,v=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*b+1,R=(-1-u)*m+(1.5+u)*M+.5*b,x=u*m-u*M;for(let y=0;y!==o;++y)s[y]=p*r[h+y]+v*r[l+y]+R*r[c+y]+x*r[d+y];return s}}class md extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=r[l+f]*d+r[c+f]*h;return s}}class Sp extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yp extends bs{interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const b=(n-t)/(i-t),M=1-b;for(let m=0;m!==o;++m)s[m]=r[l+m]*M+r[c+m]*b;return s}const f=o*2,u=e-1;for(let b=0;b!==o;++b){const M=r[l+b],m=r[c+b],p=u*f+b*2,v=d[p],R=d[p+1],x=e*f+b*2,y=h[x],w=h[x+1],C=wp(n,t,v,y,i);s[b]=gd(C,M,R,w,m)}return s}}function gd(a,e,t,n,i){const s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*n+a*a*a*i}function Ep(a,e,t,n,i){const s=1-a;return 3*s*s*(t-e)+6*s*a*(n-t)+3*a*a*(i-n)}function wp(a,e,t,n,i){let s=(a-e)/(i-e);for(let r=0;r<8;r++){const o=gd(s,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;const c=Ep(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bi(t,this.TimeBufferType),this.values=bi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bi(e.times,Array),values:bi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ha(e.settings)&&(n.settings={inTangents:bi(e.settings.inTangents,Array),outTangents:bi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new yp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break;case ll:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Sr;case this.InterpolantFactoryMethodBezier:return ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ha(this.settings)&&(Hl(this.settings.inTangents,e),Hl(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ue("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&pu(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,f=d-n,u=d+n;for(let b=0;b!==n;++b){const M=t[d+b];if(M!==t[f+b]||M!==t[u+b]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const d=o*n,f=r*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ha(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Hl(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ys;class _s extends Pn{constructor(e,t,n){super(e,t,n)}}_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Js;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class bd extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}bd.prototype.ValueTypeName="color";class ea extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}ea.prototype.ValueTypeName="number";class Tp extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Qt.slerpFlat(s,0,r,l-o,r,l,c);return s}}class ta extends Pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}}ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Pn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}tr.prototype.ValueTypeName="vector";class ec{constructor(e="",t=-1,n=[],i=gc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Rp(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(Pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=xp(c);c=Gl(c,1,h),l=Gl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new ea(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ap(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return bd;case"quaternion":return ta;case"bool":case"boolean":return _s;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Rp(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ap(a.type);if(a.times===void 0){const n=[],i=[];vp(a.keys,n,i,"value"),a.times=n,a.values=i}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),Ha(a.settings)&&(t.settings={inTangents:bi(a.settings.inTangents,Float32Array),outTangents:bi(a.settings.outTangents,Float32Array)}),t}const ni={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(Vl(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!Vl(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function Vl(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Cp{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const u=l[d],b=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Pp=new Cp;class vs{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class Lp extends Error{constructor(e,t){super(e),this.response=t}}class _d extends vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ni.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Qn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,b=u!==0;let M=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:R,value:x})=>{if(R)p.close();else{M+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:b,loaded:M,total:u});for(let w=0,C=h.length;w<C;w++){const _=h[w];_.onProgress&&_.onProgress(y)}p.enqueue(x),v()}},R=>{p.error(R)})}}});return new Response(m)}else throw new Lp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(b=>u.decode(b))}}}).then(l=>{ni.add(`file:${e}`,l);const h=Qn[e];delete Qn[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{const h=Qn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Qn[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zi=new WeakMap;class Ip extends vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ni.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=Zi.get(r);d===void 0&&(d=[],Zi.set(r,d)),d.push({onLoad:t,onError:i})}return r}const o=$s("img");function c(){h(),t&&t(this);const d=Zi.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Zi.delete(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),ni.remove(`image:${e}`);const f=Zi.get(this)||[];for(let u=0;u<f.length;u++){const b=f[u];b.onError&&b.onError(d)}Zi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Dp extends vs{constructor(e){super(e)}load(e,t,n,i){const s=new kt,r=new Ip(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class lr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Fp extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Kr=new We,Wl=new L,Xl=new L;class Ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kr,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===Zs||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ia=new L,Da=new Qt,Dn=new L;class xd extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Da,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Da,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,Da,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Da,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new L,ql=new ke,Kl=new ke;class $t extends xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Kl),t.subVectors(Kl,ql)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Np extends Ic{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Up extends lr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class kp extends Ic{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}}class Op extends lr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class hr extends xd{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bp extends Ic{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vd extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Bp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const jr=new WeakMap;class zp extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ni.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{jr.has(r)===!0?(i&&i(jr.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ni.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),jr.set(c,l),ni.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $i=-90,Qi=1;class Gp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t($i,Qi,e,t);i.layers=this.layers,this.add(i);const s=new $t($i,Qi,e,t);s.layers=this.layers,this.add(s);const r=new $t($i,Qi,e,t);r.layers=this.layers,this.add(r);const o=new $t($i,Qi,e,t);o.layers=this.layers,this.add(o);const c=new $t($i,Qi,e,t);c.layers=this.layers,this.add(c);const l=new $t($i,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Hp extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Qt.multiplyQuaternionsFlat(e,r,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const Dc="\\[\\]\\.:\\/",Wp=new RegExp("["+Dc+"]","g"),Fc="[^"+Dc+"]",Xp="[^"+Dc.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",Fc),Kp=/(WCOD+)?/.source.replace("WCOD",Xp),jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Yp=new RegExp("^"+qp+Kp+jp+Jp+"$"),Zp=["material","materials","bones","map"];class $p{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){const t=Yp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Zp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=$p;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,o=new Array(r),c={endingStart:is,endingEnd:is};for(let l=0;l!==r;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ed,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case nu:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case gc:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===tu;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Yo){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(e?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=Ja,t?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=Ja)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const em=new Float32Array(1);class Md extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const f=i[d],u=f.name;let b=h[u];if(b!==void 0)++b.referenceCount,r[d]=b;else{if(b=r[d],b!==void 0){b._cacheIndex===null&&(++b.referenceCount,this._addInactiveBinding(b,c,u));continue}const M=t&&t._propertyBindings[d].binding.parsedPath;b=new Vp(ct.create(n,u,M),f.ValueTypeName,f.getValueSize()),++b.referenceCount,this._addInactiveBinding(b,c,u),r[d]=b}o[d].resultBuffer=b.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new md(new Float32Array(2),new Float32Array(2),1,em),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?ec.findByName(i,e):e;const o=r!==null?r.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=gc),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new Qp(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ec.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){const l=r[o];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const jl=new We;class tm{constructor(e,t,n=0,i=1/0){this.ray=new ia(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(e,t=!0,n=[]){return tc(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)tc(e[i],this,n,t);return n.sort(Jl),n}}function Jl(a,e){return a.distance-e.distance}function tc(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)tc(s[r],e,t,!0)}}const Gc=class Gc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Gc.prototype.isMatrix2=!0;let Yl=Gc;function Zl(a,e,t,n){const i=nm(n);switch(t){case $h:return a*e;case fc:return a*e/i.components*i.byteLength;case uc:return a*e/i.components*i.byteLength;case Ui:return a*e*2/i.components*i.byteLength;case pc:return a*e*2/i.components*i.byteLength;case Qh:return a*e*3/i.components*i.byteLength;case en:return a*e*4/i.components*i.byteLength;case mc:return a*e*4/i.components*i.byteLength;case Oa:case Ba:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case za:case Ga:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mo:case yo:return Math.max(a,16)*Math.max(e,8)/4;case vo:case So:return Math.max(a,8)*Math.max(e,8)/2;case Eo:case wo:case Ao:case Ro:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case To:case Ka:case Co:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ko:case jo:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ja:case Jo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(a){switch(a){case cn:case jh:return{byteLength:1,components:1};case Ks:case Jh:case Hn:return{byteLength:2,components:1};case hc:case dc:return{byteLength:2,components:4};case Gn:case lc:case _n:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sd(){let a=null,e=!1,t=null,n=null;function i(s,r){n=a.requestAnimationFrame(i),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function im(a){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=a.HALF_FLOAT:u=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=a.SHORT;else if(l instanceof Uint32Array)u=a.UNSIGNED_INT;else if(l instanceof Int32Array)u=a.INT;else if(l instanceof Int8Array)u=a.BYTE;else if(l instanceof Uint8Array)u=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(a.bindBuffer(l,o),d.length===0)a.bufferSubData(l,0,h);else{d.sort((u,b)=>u.start-b.start);let f=0;for(let u=1;u<d.length;u++){const b=d[f],M=d[u];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++f,d[f]=M)}d.length=f+1;for(let u=0,b=d.length;u<b;u++){const M=d[u];a.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,ng=`uniform sampler2D dfgLUT;
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,b0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,y0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,T0=`#define PHONG
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
}`,A0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,P0=`#define TOON
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
}`,L0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,N0=`uniform vec3 color;
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
}`,U0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:sm,alphahash_pars_fragment:am,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:cm,alphatest_pars_fragment:lm,aomap_fragment:hm,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:um,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:bm,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:ym,color_pars_fragment:Em,color_pars_vertex:wm,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Lm,emissivemap_fragment:Im,emissivemap_pars_fragment:Dm,colorspace_fragment:Fm,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:km,envmap_pars_fragment:Om,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Ym,envmap_vertex:zm,fog_vertex:Gm,fog_pars_vertex:Hm,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:jm,lights_pars_begin:Jm,lights_toon_fragment:Zm,lights_toon_pars_fragment:$m,lights_phong_fragment:Qm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:ag,lightprobes_pars_fragment:rg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:hg,map_fragment:dg,map_pars_fragment:fg,map_particle_fragment:ug,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:bg,morphcolor_vertex:_g,morphnormal_vertex:xg,morphtarget_pars_vertex:vg,morphtarget_vertex:Mg,normal_fragment_begin:Sg,normal_fragment_maps:yg,normal_pars_fragment:Eg,normal_pars_vertex:wg,normal_vertex:Tg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Lg,opaque_fragment:Ig,packing:Dg,premultiplied_alpha_fragment:Fg,project_vertex:Ng,dithering_fragment:Ug,dithering_pars_fragment:kg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Kg,specularmap_fragment:jg,specularmap_pars_fragment:Jg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Zg,transmission_fragment:$g,transmission_pars_fragment:Qg,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:a0,backgroundCube_vert:r0,backgroundCube_frag:o0,cube_vert:c0,cube_frag:l0,depth_vert:h0,depth_frag:d0,distance_vert:f0,distance_frag:u0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:b0,meshbasic_vert:_0,meshbasic_frag:x0,meshlambert_vert:v0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:y0,meshnormal_vert:E0,meshnormal_frag:w0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:I0,points_frag:D0,shadow_vert:F0,shadow_frag:N0,sprite_vert:U0,sprite_frag:k0},ue={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},kn={basic:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([ue.points,ue.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([ue.common,ue.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([ue.sprite,ue.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Zt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Zt([ue.lights,ue.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};kn.physical={uniforms:Zt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Fa={r:0,b:0,g:0},O0=new We,yd=new Ge;yd.set(-1,0,0,0,1,0,0,0,1);function B0(a,e,t,n,i,s){const r=new Le(0);let o=i===!0?0:1,c,l,h=null,d=0,f=null;function u(v){let R=v.isScene===!0?v.background:null;if(R&&R.isTexture){const x=v.backgroundBlurriness>0;R=e.get(R,x)}return R}function b(v){let R=!1;const x=u(v);x===null?m(r,o):x&&x.isColor&&(m(x,1),R=!0);const y=a.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(v,R){const x=u(R);x&&(x.isCubeTexture||x.mapping===sr)?(l===void 0&&(l=new Te(new An(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ps(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yd),l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,(h!==x||d!==x.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=a.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Te(new bn(2,2),new Wn({name:"BackgroundMaterial",uniforms:ps(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,R){v.getRGB(Fa,pd(a)),t.buffers.color.setClear(Fa.r,Fa.g,Fa.b,R,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,R=1){r.set(v),o=R,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(r,o)},render:b,addToRenderList:M,dispose:p}}function z0(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,r=!1;function o(P,I,O,D,B){let q=!1;const W=d(P,D,O,I);s!==W&&(s=W,l(s.object)),q=u(P,D,O,B),q&&b(P,D,O,B),B!==null&&e.update(B,a.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,x(P,I,O,D),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return a.createVertexArray()}function l(P){return a.bindVertexArray(P)}function h(P){return a.deleteVertexArray(P)}function d(P,I,O,D){const B=D.wireframe===!0;let q=n[I.id];q===void 0&&(q={},n[I.id]=q);const W=P.isInstancedMesh===!0?P.id:0;let te=q[W];te===void 0&&(te={},q[W]=te);let G=te[O.id];G===void 0&&(G={},te[O.id]=G);let Z=G[B];return Z===void 0&&(Z=f(c()),G[B]=Z),Z}function f(P){const I=[],O=[],D=[];for(let B=0;B<t;B++)I[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:D,object:P,attributes:{},index:null}}function u(P,I,O,D){const B=s.attributes,q=I.attributes;let W=0;const te=O.getAttributes();for(const G in te)if(te[G].location>=0){const ee=B[G];let ye=q[G];if(ye===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function b(P,I,O,D){const B={},q=I.attributes;let W=0;const te=O.getAttributes();for(const G in te)if(te[G].location>=0){let ee=q[G];ee===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),B[G]=ye,W++}s.attributes=B,s.attributesNum=W,s.index=D}function M(){const P=s.newAttributes;for(let I=0,O=P.length;I<O;I++)P[I]=0}function m(P){p(P,0)}function p(P,I){const O=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;O[P]=1,D[P]===0&&(a.enableVertexAttribArray(P),D[P]=1),B[P]!==I&&(a.vertexAttribDivisor(P,I),B[P]=I)}function v(){const P=s.newAttributes,I=s.enabledAttributes;for(let O=0,D=I.length;O<D;O++)I[O]!==P[O]&&(a.disableVertexAttribArray(O),I[O]=0)}function R(P,I,O,D,B,q,W){W===!0?a.vertexAttribIPointer(P,I,O,B,q):a.vertexAttribPointer(P,I,O,D,B,q)}function x(P,I,O,D){M();const B=D.attributes,q=O.getAttributes(),W=I.defaultAttributeValues;for(const te in q){const G=q[te];if(G.location>=0){let Z=B[te];if(Z===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const ee=Z.normalized,ye=Z.itemSize,ve=e.get(Z);if(ve===void 0)continue;const at=ve.buffer,Ie=ve.type,Be=ve.bytesPerElement,j=Ie===a.INT||Ie===a.UNSIGNED_INT||Z.gpuType===lc;if(Z.isInterleavedBufferAttribute){const Y=Z.data,de=Y.stride,Ne=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,Y.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);a.bindBuffer(a.ARRAY_BUFFER,at);for(let oe=0;oe<G.locationSize;oe++)R(G.location+oe,ye/G.locationSize,Ie,ee,de*Be,(Ne+ye/G.locationSize*oe)*Be,j)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<G.locationSize;Y++)p(G.location+Y,Z.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<G.locationSize;Y++)m(G.location+Y);a.bindBuffer(a.ARRAY_BUFFER,at);for(let Y=0;Y<G.locationSize;Y++)R(G.location+Y,ye/G.locationSize,Ie,ee,ye*Be,ye/G.locationSize*Y*Be,j)}}else if(W!==void 0){const ee=W[te];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(G.location,ee);break;case 3:a.vertexAttrib3fv(G.location,ee);break;case 4:a.vertexAttrib4fv(G.location,ee);break;default:a.vertexAttrib1fv(G.location,ee)}}}}v()}function y(){T();for(const P in n){const I=n[P];for(const O in I){const D=I[O];for(const B in D){const q=D[B];for(const W in q)h(q[W].object),delete q[W];delete D[B]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const O in I){const D=I[O];for(const B in D){const q=D[B];for(const W in q)h(q[W].object),delete q[W];delete D[B]}}delete n[P.id]}function C(P){for(const I in n){const O=n[I];for(const D in O){const B=O[D];if(B[P.id]===void 0)continue;const q=B[P.id];for(const W in q)h(q[W].object),delete q[W];delete B[P.id]}}}function _(P){for(const I in n){const O=n[I],D=P.isInstancedMesh===!0?P.id:0,B=O[D];if(B!==void 0){for(const q in B){const W=B[q];for(const te in W)h(W[te].object),delete W[te];delete B[q]}delete O[D],Object.keys(O).length===0&&delete n[I]}}}function T(){A(),r=!0,s!==i&&(s=i,l(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function G0(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function H0(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==en&&n.convert(C)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&C!==_n&&!_&&n.convert(C)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),x=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=a.getParameter(a.MAX_SAMPLES),w=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:R,maxFragmentUniforms:x,maxSamples:y,samples:w}}function V0(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new gi,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const b=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=a.get(d);if(!i||b===null||b.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,R=v*4;let x=p.clippingState||null;c.value=x,x=h(b,f,R,u);for(let y=0;y!==R;++y)x[y]=t[y];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,b){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,b!==!0||m===null){const p=u+M*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,x=u;R!==M;++R,x+=4)r.copy(d[R]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const as=4,W0=6,X0=20,q0=256,Ps=new hr,$l=new Le;let Jr=null,Yr=0,Zr=0,$r=!1;const K0=new L,Li=new L;class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:r=256,position:o=K0}=s;Jr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Yr,Zr),this._renderer.xr.enabled=$r,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Hn,format:en,colorSpace:dn,depthBuffer:!1},i=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=j0(s)),this._blurMaterial=Y0(s,e,t),this._ggxMaterial=J0(s,e,t)}return i}_compileMaterial(e){const t=new Te(new wt,e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,i,s){const c=new $t(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor($l),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new An,new Xt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy($l),p=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[R],s.y,s.z)):x===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[R]));const y=this._cubeSize;es(i,x*y,R>2?y:0,y,y),d.setRenderTarget(i),p&&d.render(M,c),d.render(e,c)}d.toneMapping=u,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fi||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),f=l*1.25,u=d*f,{_lodMax:b}=this,M=this._sizeLods[n],m=3*M*(n>b-as?n-b+as:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=b-t,es(s,m,p,3*M,2*M),i.setRenderTarget(s),i.render(o,Ps),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=b-n,es(e,m,p,3*M,2*M),i.setRenderTarget(e),i.render(o,Ps)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,i,s){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-as?i-this._lodMax+as:0),f=4*(this._cubeSize-h);es(t,d,f,3*h,2*h),r.setRenderTarget(t),r.render(c,Ps)}}function j0(a){const e=[],t=[];let n=a;const i=a-as+1+W0;for(let s=0;s<i;s++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,u=3,b=new Float32Array(u*f*d),M=new Float32Array(u*f*d);for(let p=0;p<d;p++){const v=p%3*2/3-1,R=p>2?0:-1,x=[v,R,0,v+2/3,R,0,v+2/3,R+1,0,v,R,0,v+2/3,R+1,0,v,R+1,0];b.set(x,u*f*p);for(let y=0;y<f;y++){const w=h[y*2]*2-1,C=h[y*2+1]*2-1;p===0?Li.set(1,C,w):p===1?Li.set(-w,1,-C):p===2?Li.set(-w,C,1):p===3?Li.set(-1,C,-w):p===4?Li.set(-w,-1,C):Li.set(w,C,-1),Li.toArray(M,(p*f+y)*u)}}const m=new wt;m.setAttribute("position",new Ut(b,u)),m.setAttribute("outputDirection",new Ut(M,u)),t.push(new Te(m,null)),n>as&&n--}return{lodMeshes:t,sizeLods:e}}function eh(a,e,t){const n=new Cn(a,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function J0(a,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dr(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Y0(a,e,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:X0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dr(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function th(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dr(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function nh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function dr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ed extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new An(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ii});s.uniforms.tEquirect.value=t;const r=new Te(i,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Nt),new Gp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}function Z0(a){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?r(f):s(f)}function s(f){if(f&&f.isTexture){const u=f.mapping;if(u===vr||u===Mr)if(e.has(f)){const b=e.get(f).texture;return o(b,f.mapping)}else{const b=f.image;if(b&&b.height>0){const M=new Ed(b.height);return M.fromEquirectangularTexture(a,f),e.set(f,M),f.addEventListener("dispose",l),o(M.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){const u=f.mapping,b=u===vr||u===Mr,M=u===Fi||u===ds;if(b||M){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ql(a)),m=b?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return b&&v&&v.height>0||M&&v&&c(v)?(n===null&&(n=new Ql(a)),m=b?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===vr?f.mapping=Fi:u===Mr&&(f.mapping=ds),f}function c(f){let u=0;const b=6;for(let M=0;M<b;M++)f[M]!==void 0&&u++;return u===b}function l(f){const u=f.target;u.removeEventListener("dispose",l);const b=e.get(u);b!==void 0&&(e.delete(u),b.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const b=t.get(u);b!==void 0&&(t.delete(u),b.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function $0(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&os("WebGLRenderer: "+n+" extension not supported."),i}}}function Q0(a,e,t,n){const i={},s=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const b in f.attributes)e.remove(f.attributes[b]);f.removeEventListener("dispose",r),delete i[f.id];const u=s.get(f);u&&(e.remove(u),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const u in f)e.update(f[u],a.ARRAY_BUFFER)}function l(d){const f=[],u=d.index,b=d.attributes.position;let M=0;if(b===void 0)return;if(u!==null){const v=u.array;M=u.version;for(let R=0,x=v.length;R<x;R+=3){const y=v[R+0],w=v[R+1],C=v[R+2];f.push(y,w,w,C,C,y)}}else{const v=b.array;M=b.version;for(let R=0,x=v.length/3-1;R<x;R+=3){const y=R+0,w=R+1,C=R+2;f.push(y,w,w,C,C,y)}}const m=new(b.count>=65535?rd:yc)(f,1);m.version=M;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){const f=s.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function eb(a,e,t){let n;function i(d){n=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function c(d,f){a.drawElements(n,f,s,d*r),t.update(f,n,1)}function l(d,f,u){u!==0&&(a.drawElementsInstanced(n,f,s,d*r,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let M=0;for(let m=0;m<u;m++)M+=f[m];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function tb(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Ue("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nb(a,e,t){const n=new WeakMap,i=new ut;function s(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let R=0;u===!0&&(R=1),b===!0&&(R=2),M===!0&&(R=3);let x=o.attributes.position.count*R,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*y*4*d),C=new sd(w,x,y,d);C.type=_n,C.needsUpdate=!0;const _=R*4;for(let A=0;A<d;A++){const P=m[A],I=p[A],O=v[A],D=x*y*4*A;for(let B=0;B<P.count;B++){const q=B*_;u===!0&&(i.fromBufferAttribute(P,B),w[D+q+0]=i.x,w[D+q+1]=i.y,w[D+q+2]=i.z,w[D+q+3]=0),b===!0&&(i.fromBufferAttribute(I,B),w[D+q+4]=i.x,w[D+q+5]=i.y,w[D+q+6]=i.z,w[D+q+7]=0),M===!0&&(i.fromBufferAttribute(O,B),w[D+q+8]=i.x,w[D+q+9]=i.y,w[D+q+10]=i.z,w[D+q+11]=O.itemSize===4?i.w:1)}}f={count:d,texture:C,size:new ke(x,y)},n.set(o,f),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let u=0;for(let M=0;M<l.length;M++)u+=l[M];const b=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(a,"morphTargetBaseInfluence",b),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function ib(a,e,t,n,i){let s=new WeakMap;function r(l){const h=i.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const sb={[Bh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function ab(a,e,t,n,i,s){const r=new Cn(e,t,{type:a,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new wt;l.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new it([0,2,0,0,2,0],2));const h=new mp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Te(l,h),f=new hr(-1,1,1,-1,0,1);let u=null,b=null,M=!1,m,p=null,v=[],R=!1;this.setSize=function(x,y){r.setSize(x,y),o!==null&&o.setSize(x,y),c!==null&&c.setSize(x,y);for(let w=0;w<v.length;w++){const C=v[w];C.setSize&&C.setSize(x,y)}},this.setEffects=function(x){v=x,R=v.length>0&&v[0].isRenderPass===!0;const y=r.width,w=r.height;v.length>0&&o===null&&(o=new Cn(y,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),c=new Cn(y,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const _=v[C];_.setSize&&_.setSize(y,w)}},this.begin=function(x,y){if(M||x.toneMapping===zn&&v.length===0)return!1;if(p=y,y!==null){const w=y.width,C=y.height;(r.width!==w||r.height!==C)&&this.setSize(w,C)}return R===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return R},this.end=function(x,y){x.toneMapping=m,M=!0;let w=r,C=o;for(let _=0;_<v.length;_++){const T=v[_];T.enabled!==!1&&(T.render(x,C,w,y),T.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(u!==x.outputColorSpace||b!==x.toneMapping){u=x.outputColorSpace,b=x.toneMapping,h.defines={},Ze.getTransfer(u)===lt&&(h.defines.SRGB_TRANSFER="");const _=sb[b];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(p),x.render(d,f),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const wd=new kt,nc=new Qs(1,1),Td=new sd,Ad=new zu,Rd=new fd,ih=[],sh=[],ah=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Ms(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=ih[i];if(s===void 0&&(s=new Float32Array(i),ih[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Ot(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Bt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function fr(a,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function rb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ob(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2fv(this.addr,e),Bt(t,e)}}function cb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;a.uniform3fv(this.addr,e),Bt(t,e)}}function lb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4fv(this.addr,e),Bt(t,e)}}function hb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;oh.set(n),a.uniformMatrix2fv(this.addr,!1,oh),Bt(t,n)}}function db(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;rh.set(n),a.uniformMatrix3fv(this.addr,!1,rh),Bt(t,n)}}function fb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;ah.set(n),a.uniformMatrix4fv(this.addr,!1,ah),Bt(t,n)}}function ub(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function pb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2iv(this.addr,e),Bt(t,e)}}function mb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;a.uniform3iv(this.addr,e),Bt(t,e)}}function gb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4iv(this.addr,e),Bt(t,e)}}function bb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function _b(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2uiv(this.addr,e),Bt(t,e)}}function xb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;a.uniform3uiv(this.addr,e),Bt(t,e)}}function vb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4uiv(this.addr,e),Bt(t,e)}}function Mb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(nc.compareFunction=t.isReversedDepthBuffer()?_c:bc,s=nc):s=wd,t.setTexture2D(e||s,i)}function Sb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ad,i)}function yb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rd,i)}function Eb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Td,i)}function wb(a){switch(a){case 5126:return rb;case 35664:return ob;case 35665:return cb;case 35666:return lb;case 35674:return hb;case 35675:return db;case 35676:return fb;case 5124:case 35670:return ub;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return bb;case 36294:return _b;case 36295:return xb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Tb(a,e){a.uniform1fv(this.addr,e)}function Ab(a,e){const t=Ms(e,this.size,2);a.uniform2fv(this.addr,t)}function Rb(a,e){const t=Ms(e,this.size,3);a.uniform3fv(this.addr,t)}function Cb(a,e){const t=Ms(e,this.size,4);a.uniform4fv(this.addr,t)}function Pb(a,e){const t=Ms(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Lb(a,e){const t=Ms(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Ib(a,e){const t=Ms(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Db(a,e){a.uniform1iv(this.addr,e)}function Fb(a,e){a.uniform2iv(this.addr,e)}function Nb(a,e){a.uniform3iv(this.addr,e)}function Ub(a,e){a.uniform4iv(this.addr,e)}function kb(a,e){a.uniform1uiv(this.addr,e)}function Ob(a,e){a.uniform2uiv(this.addr,e)}function Bb(a,e){a.uniform3uiv(this.addr,e)}function zb(a,e){a.uniform4uiv(this.addr,e)}function Gb(a,e,t){const n=this.cache,i=e.length,s=fr(t,i);Ot(n,s)||(a.uniform1iv(this.addr,s),Bt(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=nc:r=wd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function Hb(a,e,t){const n=this.cache,i=e.length,s=fr(t,i);Ot(n,s)||(a.uniform1iv(this.addr,s),Bt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ad,s[r])}function Vb(a,e,t){const n=this.cache,i=e.length,s=fr(t,i);Ot(n,s)||(a.uniform1iv(this.addr,s),Bt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Rd,s[r])}function Wb(a,e,t){const n=this.cache,i=e.length,s=fr(t,i);Ot(n,s)||(a.uniform1iv(this.addr,s),Bt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Td,s[r])}function Xb(a){switch(a){case 5126:return Tb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return Pb;case 35675:return Lb;case 35676:return Ib;case 5124:case 35670:return Db;case 35667:case 35671:return Fb;case 35668:case 35672:return Nb;case 35669:case 35673:return Ub;case 5125:return kb;case 36294:return Ob;case 36295:return Bb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Wb}}class qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wb(t.type)}}class Kb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xb(t.type)}}class jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function ch(a,e){a.seq.push(e),a.map[e.id]=e}function Jb(a,e,t){const n=a.name,i=n.length;for(Qr.lastIndex=0;;){const s=Qr.exec(n),r=Qr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){ch(t,l===void 0?new qb(o,a,e):new Kb(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new jb(o),ch(t,d)),t=d}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);Jb(o,c,this)}const i=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function lh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Yb=37297;let Zb=0;function $b(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const hh=new Ge;function Qb(a){Ze._getMatrix(hh,Ze.workingColorSpace,a);const e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(a)){case Ya:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function dh(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$b(a.getShaderSource(e),o)}else return s}function e_(a,e){const t=Qb(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const t_={[Bh]:"Linear",[zh]:"Reinhard",[Gh]:"Cineon",[Hh]:"ACESFilmic",[Wh]:"AgX",[Xh]:"Neutral",[Vh]:"Custom"};function n_(a,e){const t=t_[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Na=new L;function i_(){Ze.getLuminanceCoefficients(Na);const a=Na.x.toFixed(4),e=Na.y.toFixed(4),t=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function a_(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Bs(a){return a!==""}function fh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(a){return a.replace(o_,l_)}const c_=new Map;function l_(a,e){let t=Ke[e];if(t===void 0){const n=c_.get(e);if(n!==void 0)t=Ke[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(a){return a.replace(h_,d_)}function d_(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mh(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const f_={[Gs]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function u_(a){return f_[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p_={[Fi]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE_UV"};function m_(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":p_[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const g_={[ds]:"ENVMAP_MODE_REFRACTION"};function b_(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":g_[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const __={[ir]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Qf]:"ENVMAP_BLENDING_ADD"};function x_(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":__[a.combine]||"ENVMAP_BLENDING_NONE"}function v_(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function M_(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=u_(t),l=m_(t),h=b_(t),d=x_(t),f=v_(t),u=s_(t),b=a_(s),M=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==zn?n_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),i_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),r=ic(r),r=fh(r,t),r=uh(r,t),o=ic(o),o=fh(o,t),o=uh(o,t),r=ph(r),o=ph(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=v+m+r,x=v+p+o,y=lh(i,i.VERTEX_SHADER,R),w=lh(i,i.FRAGMENT_SHADER,x);i.attachShader(M,y),i.attachShader(M,w),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function C(P){if(a.debug.checkShaderErrors){const I=i.getProgramInfoLog(M)||"",O=i.getShaderInfoLog(y)||"",D=i.getShaderInfoLog(w)||"",B=I.trim(),q=O.trim(),W=D.trim();let te=!0,G=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,M,y,w);else{const Z=dh(i,y,"vertex"),ee=dh(i,w,"fragment");Ue("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Z+`
`+ee)}else B!==""?Ce("WebGLProgram: Program Info Log:",B):(q===""||W==="")&&(G=!1);G&&(P.diagnostics={runnable:te,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(y),i.deleteShader(w),_=new Va(i,M),T=r_(i,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(M,Yb)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=w,this}let S_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E_(e),t.set(e,n)),n}}class E_{constructor(e){this.id=S_++,this.code=e,this.usedTimes=0}}function w_(a){return a===Ui||a===Ka||a===ja}function T_(a,e,t,n,i,s){const r=new Mc,o=new y_,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,T,A,P,I,O){const D=P.fog,B=I.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||q,W),G=te&&te.mapping===sr?te.image.height:null,Z=u[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=ee!==void 0?ee.length:0;let ve=0;B.morphAttributes.position!==void 0&&(ve=1),B.morphAttributes.normal!==void 0&&(ve=2),B.morphAttributes.color!==void 0&&(ve=3);let at,Ie,Be,j;if(Z){const _t=kn[Z];at=_t.vertexShader,Ie=_t.fragmentShader}else{at=_.vertexShader,Ie=_.fragmentShader;const _t=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,_t,rt),Be=_t.id,j=rt.id}const Y=a.getRenderTarget(),de=a.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,oe=I.isBatchedMesh===!0,Oe=!!_.map,mt=!!_.matcap,Xe=!!te,Qe=!!_.aoMap,dt=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,et=!!_.displacementMap,St=!!_.emissiveMap,bt=!!_.metalnessMap,yt=!!_.roughnessMap,N=_.anisotropy>0,Dt=_.clearcoat>0,st=_.dispersion>0,S=_.retroreflectivity>0,g=_.iridescence>0,F=_.sheen>0,z=_.transmission>0,X=N&&!!_.anisotropyMap,se=Dt&&!!_.clearcoatMap,ae=Dt&&!!_.clearcoatNormalMap,J=Dt&&!!_.clearcoatRoughnessMap,$=g&&!!_.iridescenceMap,re=g&&!!_.iridescenceThicknessMap,Ae=F&&!!_.sheenColorMap,fe=F&&!!_.sheenRoughnessMap,ce=!!_.specularMap,Re=!!_.specularColorMap,Fe=!!_.specularIntensityMap,He=z&&!!_.transmissionMap,k=z&&!!_.thicknessMap,le=!!_.gradientMap,Q=!!_.alphaMap,he=_.alphaTest>0,ge=!!_.alphaHash,ie=!!_.extensions;let Pe=zn;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Pe=a.toneMapping);const Ee={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:Ie,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:oe,batchingColor:oe&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:Y===null?a.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:mt,envMap:Xe,envMapMode:Xe&&te.mapping,envMapCubeUVHeight:G,aoMap:Qe,lightMap:dt,bumpMap:je,normalMap:gt,displacementMap:et,emissiveMap:St,normalMapObjectSpace:gt&&_.normalMapType===au,normalMapTangentSpace:gt&&_.normalMapType===fs,packedNormalMap:gt&&_.normalMapType===fs&&w_(_.normalMap.format),metalnessMap:bt,roughnessMap:yt,anisotropy:N,anisotropyMap:X,clearcoat:Dt,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:st,retroreflection:S,iridescence:g,iridescenceMap:$,iridescenceThicknessMap:re,sheen:F,sheenColorMap:Ae,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:Re,specularIntensityMap:Fe,transmission:z,transmissionMap:He,thicknessMap:k,gradientMap:le,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:ge,combine:_.combine,mapUv:Oe&&b(_.map.channel),aoMapUv:Qe&&b(_.aoMap.channel),lightMapUv:dt&&b(_.lightMap.channel),bumpMapUv:je&&b(_.bumpMap.channel),normalMapUv:gt&&b(_.normalMap.channel),displacementMapUv:et&&b(_.displacementMap.channel),emissiveMapUv:St&&b(_.emissiveMap.channel),metalnessMapUv:bt&&b(_.metalnessMap.channel),roughnessMapUv:yt&&b(_.roughnessMap.channel),anisotropyMapUv:X&&b(_.anisotropyMap.channel),clearcoatMapUv:se&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&b(_.sheenRoughnessMap.channel),specularMapUv:ce&&b(_.specularMap.channel),specularColorMapUv:Re&&b(_.specularColorMap.channel),specularIntensityMapUv:Fe&&b(_.specularIntensityMap.channel),transmissionMapUv:He&&b(_.transmissionMap.channel),thicknessMapUv:k&&b(_.thicknessMap.channel),alphaMapUv:Q&&b(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(gt||N),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Oe||Q),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ve,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&A.length>0,shadowMapType:a.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:St&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ht,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(p(T,_),v(T,_),T.push(a.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function R(_){const T=u[_.type];let A;if(T){const P=kn[T];A=fp.clone(P.uniforms)}else A=_.uniforms;return A}function x(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new M_(a,T,_,i),l.push(A),h.set(T,A)),A}function y(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:x,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:C}}function A_(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function R_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function gh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function bh(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,b,M,m,p){let v=a[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:b,materialVariant:r(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},a[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=b,v.materialVariant=r(f),v.groupOrder=M,v.renderOrder=f.renderOrder,v.z=m,v.group=p),e++,v}function c(f,u,b,M,m,p,v){v.reversedDepth===!0&&(m=-m);const R=o(f,u,b,M,m,p);b.transmission>0?n.push(R):b.transparent===!0?i.push(R):t.push(R)}function l(f,u,b,M,m,p){const v=o(f,u,b,M,m,p);b.transmission>0?n.unshift(v):b.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||R_),n.length>1&&n.sort(u||gh),i.length>1&&i.sort(u||gh)}function d(){for(let f=e,u=a.length;f<u;f++){const b=a[f];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:h}}function C_(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new bh,a.set(n,[r])):i>=s.length?(r=new bh,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function P_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function L_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let I_=0;function D_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function F_(a){const e=new P_,t=L_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new We,r=new We;function o(l){let h=0,d=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,b=0,M=0,m=0,p=0,v=0,R=0,x=0,y=0,w=0,C=0,_=0,T=0,A=0;l.sort(D_);for(let I=0,O=l.length;I<O;I++){const D=l[I],B=D.color,q=D.intensity,W=D.distance;let te=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ui?te=D.shadow.map.texture:te=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*q,d+=B.g*q,f+=B.b*q;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],q);A++}else if(D.isSunLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[b]=ee,n.sunShadowMap[b]=te;const ye=Z.getViewportCount();for(let ve=0;ve<ye;ve++)n.sunShadowMatrix[M+ve]=Z.getMatrix(ve),n.sunShadowCascade[M+ve]=Z._cascadeData[ve];M+=ye,b++}n.sun[u]=G,u++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=D.shadow.matrix,y++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(q),G.distance=W,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[v]=G;const Z=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=Z.matrix,D.castShadow){const ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=te,C++}v++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(B).multiplyScalar(q),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=G,R++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=G,p++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(q),G.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[x]=G,x++}}R>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.sunLength!==u||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==R||P.hemiLength!==x||P.numSunShadows!==b||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==C||P.numSpotMaps!==_||P.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=R,n.point.length=p,n.hemi.length=x,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.sunLength=u,P.directionalLength=m,P.pointLength=p,P.spotLength=v,P.rectAreaLength=R,P.hemiLength=x,P.numSunShadows=b,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=C,P.numSpotMaps=_,P.numLightProbes=A,n.version=I_++)}function c(l,h){let d=0,f=0,u=0,b=0,M=0,m=0;const p=h.matrixWorldInverse;for(let v=0,R=l.length;v<R;v++){const x=l[v];if(x.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=n.spot[b];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),b++}else if(x.isRectAreaLight){const y=n.rectArea[M];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),r.identity(),s.copy(x.matrixWorld),s.premultiply(p),r.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),M++}else if(x.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function _h(a){const e=new F_(a),t=[],n=[],i=[];function s(f){d.camera=f,t.length=0,n.length=0,i.length=0}function r(f){t.push(f)}function o(f){n.push(f)}function c(f){i.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function N_(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new _h(a),e.set(i,[o])):s>=r.length?(o=new _h(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`,O_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],B_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],xh=new We,Ls=new L,eo=new L;function z_(a,e,t){let n=new Tc;const i=new ke,s=new ke,r=new ut,o=new bp,c=new _p,l={},h=t.maxTextureSize,d={[Si]:tn,[tn]:Si,[Ht]:Ht},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:U_,fragmentShader:k_}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const b=new wt;b.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Te(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let p=this.type;this.render=function(w,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Df&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);const T=a.getRenderTarget(),A=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),I=a.state;I.setBlending(ii),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==this.type;O&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=w.length;D<B;D++){const q=w[D],W=q.shadow;if(W===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const te=W.getFrameExtents();i.multiply(te),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,W.mapSize.y=s.y));const G=a.state.buffers.depth.getReversed();if(W.camera._reversedDepth=G,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ks){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Cn(i.x,i.y,{format:Ui,type:Hn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Qs(i.x,i.y,_n),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=ai,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At}else q.isPointLight?(W.map=new Ed(i.x),W.map.depthTexture=new hp(i.x,Gn)):(W.map=new Cn(i.x,i.y),W.map.depthTexture=new Qs(i.x,i.y,Gn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=ai,this.type===Gs?(W.map.depthTexture.compareFunction=G?_c:bc,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,_);for(let ee=0;ee<Z;ee++){const ye=W.getCamera(ee);if(q.isPointLight){const ve=W.camera,at=W.matrix,Ie=q.distance||ve.far;Ie!==ve.far&&(ve.far=Ie,ve.updateProjectionMatrix()),Ls.setFromMatrixPosition(q.matrixWorld),ve.position.copy(Ls),eo.copy(ve.position),eo.add(O_[ee]),ve.up.copy(B_[ee]),ve.lookAt(eo),ve.updateMatrixWorld(),at.makeTranslation(-Ls.x,-Ls.y,-Ls.z),xh.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),W._frustum.setFromProjectionMatrix(xh,ve.coordinateSystem,ve.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)a.setRenderTarget(W.map,ee),a.clear();else{ee===0&&(a.setRenderTarget(W.map),a.clear());const ve=W.getViewport(ee);r.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),I.viewport(r)}n=W.getFrustum(ee),x(C,_,ye,q,this.type)}W.isPointLightShadow!==!0&&this.type===ks&&v(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(T,A,P)};function v(w,C){const _=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Cn(i.x,i.y,{format:Ui,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(C,null,_,f,M,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(C,null,_,u,M,null)}function R(w,C,_,T){let A=null;const P=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=_.isPointLight===!0?c:o,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=A.uuid,O=C.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let B=D[O];B===void 0&&(B=A.clone(),D[O]=B,C.addEventListener("dispose",y)),A=B}if(A.visible=C.visible,A.wireframe=C.wireframe,T===ks?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:d[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=a.properties.get(A);I.light=_}return A}function x(w,C,_,T,A){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===ks)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const O=e.update(w),D=w.material;if(Array.isArray(D)){const B=O.groups;for(let q=0,W=B.length;q<W;q++){const te=B[q],G=D[te.materialIndex];if(G&&G.visible){const Z=R(w,G,T,A);w.onBeforeShadow(a,w,C,_,O,Z,te),a.renderBufferDirect(_,null,O,Z,w,te),w.onAfterShadow(a,w,C,_,O,Z,te)}}}else if(D.visible){const B=R(w,D,T,A);w.onBeforeShadow(a,w,C,_,O,B,null),a.renderBufferDirect(_,null,O,B,w,null),w.onAfterShadow(a,w,C,_,O,B,null)}}const I=w.children;for(let O=0,D=I.length;O<D;O++)x(I[O],C,_,T,A)}function y(w){w.target.removeEventListener("dispose",y);for(const _ in l){const T=l[_],A=w.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function G_(a,e){function t(){let k=!1;const le=new ut;let Q=null;const he=new ut(0,0,0,0);return{setMask:function(ge){Q!==ge&&!k&&(a.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ie,Pe,Ee,_t){_t===!0&&(ge*=Ee,ie*=Ee,Pe*=Ee),le.set(ge,ie,Pe,Ee),he.equals(le)===!1&&(a.clearColor(ge,ie,Pe,Ee),he.copy(le))},reset:function(){k=!1,Q=null,he.set(-1,0,0,0)}}}function n(){let k=!1,le=!1,Q=null,he=null,ge=null;return{setReversed:function(ie){if(le!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const Ee=ge;ge=null,this.setClear(Ee)}},getReversed:function(){return le},setTest:function(ie){ie?Y(a.DEPTH_TEST):de(a.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!k&&(a.depthMask(ie),Q=ie)},setFunc:function(ie){if(le&&(ie=bu[ie]),he!==ie){switch(ie){case uo:a.depthFunc(a.NEVER);break;case po:a.depthFunc(a.ALWAYS);break;case mo:a.depthFunc(a.LESS);break;case qs:a.depthFunc(a.LEQUAL);break;case go:a.depthFunc(a.EQUAL);break;case bo:a.depthFunc(a.GEQUAL);break;case _o:a.depthFunc(a.GREATER);break;case xo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=ie}},setLocked:function(ie){k=ie},setClear:function(ie){ge!==ie&&(ge=ie,le&&(ie=1-ie),a.clearDepth(ie))},reset:function(){k=!1,Q=null,he=null,ge=null,le=!1}}}function i(){let k=!1,le=null,Q=null,he=null,ge=null,ie=null,Pe=null,Ee=null,_t=null;return{setTest:function(rt){k||(rt?Y(a.STENCIL_TEST):de(a.STENCIL_TEST))},setMask:function(rt){le!==rt&&!k&&(a.stencilMask(rt),le=rt)},setFunc:function(rt,vn,Ln){(Q!==rt||he!==vn||ge!==Ln)&&(a.stencilFunc(rt,vn,Ln),Q=rt,he=vn,ge=Ln)},setOp:function(rt,vn,Ln){(ie!==rt||Pe!==vn||Ee!==Ln)&&(a.stencilOp(rt,vn,Ln),ie=rt,Pe=vn,Ee=Ln)},setLocked:function(rt){k=rt},setClear:function(rt){_t!==rt&&(a.clearStencil(rt),_t=rt)},reset:function(){k=!1,le=null,Q=null,he=null,ge=null,ie=null,Pe=null,Ee=null,_t=null}}}const s=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},f={},u=new WeakMap,b=[],M=null,m=!1,p=null,v=null,R=null,x=null,y=null,w=null,C=null,_=new Le(0,0,0),T=0,A=!1,P=null,I=null,O=null,D=null,B=null;const q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=te>=2);let Z=null,ee={};const ye=a.getParameter(a.SCISSOR_BOX),ve=a.getParameter(a.VIEWPORT),at=new ut().fromArray(ye),Ie=new ut().fromArray(ve);function Be(k,le,Q,he){const ge=new Uint8Array(4),ie=a.createTexture();a.bindTexture(k,ie),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<Q;Pe++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(le,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,ge):a.texImage2D(le+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ge);return ie}const j={};j[a.TEXTURE_2D]=Be(a.TEXTURE_2D,a.TEXTURE_2D,1),j[a.TEXTURE_CUBE_MAP]=Be(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[a.TEXTURE_2D_ARRAY]=Be(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),j[a.TEXTURE_3D]=Be(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Y(a.DEPTH_TEST),r.setFunc(qs),je(!1),gt(sl),Y(a.CULL_FACE),Qe(ii);function Y(k){h[k]!==!0&&(a.enable(k),h[k]=!0)}function de(k){h[k]!==!1&&(a.disable(k),h[k]=!1)}function Ne(k,le){return f[k]!==le?(a.bindFramebuffer(k,le),f[k]=le,k===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=le),k===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=le),!0):!1}function oe(k,le){let Q=b,he=!1;if(k){Q=u.get(le),Q===void 0&&(Q=[],u.set(le,Q));const ge=k.textures;if(Q.length!==ge.length||Q[0]!==a.COLOR_ATTACHMENT0){for(let ie=0,Pe=ge.length;ie<Pe;ie++)Q[ie]=a.COLOR_ATTACHMENT0+ie;Q.length=ge.length,he=!0}}else Q[0]!==a.BACK&&(Q[0]=a.BACK,he=!0);he&&a.drawBuffers(Q)}function Oe(k){return M!==k?(a.useProgram(k),M=k,!0):!1}const mt={[ns]:a.FUNC_ADD,[Nf]:a.FUNC_SUBTRACT,[Uf]:a.FUNC_REVERSE_SUBTRACT};mt[kf]=a.MIN,mt[Of]=a.MAX;const Xe={[Bf]:a.ZERO,[zf]:a.ONE,[Gf]:a.SRC_COLOR,[kh]:a.SRC_ALPHA,[Kf]:a.SRC_ALPHA_SATURATE,[Xf]:a.DST_COLOR,[Vf]:a.DST_ALPHA,[Hf]:a.ONE_MINUS_SRC_COLOR,[Oh]:a.ONE_MINUS_SRC_ALPHA,[qf]:a.ONE_MINUS_DST_COLOR,[Wf]:a.ONE_MINUS_DST_ALPHA,[jf]:a.CONSTANT_COLOR,[Jf]:a.ONE_MINUS_CONSTANT_COLOR,[Yf]:a.CONSTANT_ALPHA,[Zf]:a.ONE_MINUS_CONSTANT_ALPHA};function Qe(k,le,Q,he,ge,ie,Pe,Ee,_t,rt){if(k===ii){m===!0&&(de(a.BLEND),m=!1);return}if(m===!1&&(Y(a.BLEND),m=!0),k!==Ff){if(k!==p||rt!==A){if((v!==ns||y!==ns)&&(a.blendEquation(a.FUNC_ADD),v=ns,y=ns),rt)switch(k){case Hs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case al:a.blendFunc(a.ONE,a.ONE);break;case rl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ol:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ue("WebGLState: Invalid blending: ",k);break}else switch(k){case Hs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case al:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case rl:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",k);break}R=null,x=null,w=null,C=null,_.set(0,0,0),T=0,p=k,A=rt}return}ge=ge||le,ie=ie||Q,Pe=Pe||he,(le!==v||ge!==y)&&(a.blendEquationSeparate(mt[le],mt[ge]),v=le,y=ge),(Q!==R||he!==x||ie!==w||Pe!==C)&&(a.blendFuncSeparate(Xe[Q],Xe[he],Xe[ie],Xe[Pe]),R=Q,x=he,w=ie,C=Pe),(Ee.equals(_)===!1||_t!==T)&&(a.blendColor(Ee.r,Ee.g,Ee.b,_t),_.copy(Ee),T=_t),p=k,A=!1}function dt(k,le){k.side===Ht?de(a.CULL_FACE):Y(a.CULL_FACE);let Q=k.side===tn;le&&(Q=!Q),je(Q),k.blending===Hs&&k.transparent===!1?Qe(ii):Qe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const he=k.stencilWrite;o.setTest(he),he&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),St(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Y(a.SAMPLE_ALPHA_TO_COVERAGE):de(a.SAMPLE_ALPHA_TO_COVERAGE)}function je(k){P!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),P=k)}function gt(k){k!==Lf?(Y(a.CULL_FACE),k!==I&&(k===sl?a.cullFace(a.BACK):k===If?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):de(a.CULL_FACE),I=k}function et(k){k!==O&&(W&&a.lineWidth(k),O=k)}function St(k,le,Q){k?(Y(a.POLYGON_OFFSET_FILL),(D!==le||B!==Q)&&(D=le,B=Q,r.getReversed()&&(le=-le),a.polygonOffset(le,Q))):de(a.POLYGON_OFFSET_FILL)}function bt(k){k?Y(a.SCISSOR_TEST):de(a.SCISSOR_TEST)}function yt(k){k===void 0&&(k=a.TEXTURE0+q-1),Z!==k&&(a.activeTexture(k),Z=k)}function N(k,le,Q){Q===void 0&&(Z===null?Q=a.TEXTURE0+q-1:Q=Z);let he=ee[Q];he===void 0&&(he={type:void 0,texture:void 0},ee[Q]=he),(he.type!==k||he.texture!==le)&&(Z!==Q&&(a.activeTexture(Q),Z=Q),a.bindTexture(k,le||j[k]),he.type=k,he.texture=le)}function Dt(){const k=ee[Z];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{a.compressedTexImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function S(){try{a.compressedTexImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function g(){try{a.texSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function F(){try{a.texSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function z(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function X(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function se(){try{a.texStorage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ae(){try{a.texStorage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function J(){try{a.texImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function $(){try{a.texImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function re(k){return d[k]!==void 0?d[k]:a.getParameter(k)}function Ae(k,le){d[k]!==le&&(a.pixelStorei(k,le),d[k]=le)}function fe(k){at.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),at.copy(k))}function ce(k){Ie.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),Ie.copy(k))}function Re(k,le){let Q=l.get(le);Q===void 0&&(Q=new WeakMap,l.set(le,Q));let he=Q.get(k);he===void 0&&(he=a.getUniformBlockIndex(le,k.name),Q.set(k,he))}function Fe(k,le){const he=l.get(le).get(k);c.get(le)!==he&&(a.uniformBlockBinding(le,he,k.__bindingPointIndex),c.set(le,he))}function He(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,ee={},f={},u=new WeakMap,b=[],M=null,m=!1,p=null,v=null,R=null,x=null,y=null,w=null,C=null,_=new Le(0,0,0),T=0,A=!1,P=null,I=null,O=null,D=null,B=null,at.set(0,0,a.canvas.width,a.canvas.height),Ie.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Y,disable:de,bindFramebuffer:Ne,drawBuffers:oe,useProgram:Oe,setBlending:Qe,setMaterial:dt,setFlipSided:je,setCullFace:gt,setLineWidth:et,setPolygonOffset:St,setScissorTest:bt,activeTexture:yt,bindTexture:N,unbindTexture:Dt,compressedTexImage2D:st,compressedTexImage3D:S,texImage2D:J,texImage3D:$,pixelStorei:Ae,getParameter:re,updateUBOMapping:Re,uniformBlockBinding:Fe,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:fe,viewport:ce,reset:He}}function H_(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,h=new WeakMap,d=new Set;let f;const u=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,g){return b?new OffscreenCanvas(S,g):$s("canvas")}function m(S,g,F){let z=1;const X=st(S);if((X.width>F||X.height>F)&&(z=F/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const se=Math.floor(z*X.width),ae=Math.floor(z*X.height);f===void 0&&(f=M(se,ae));const J=g?M(se,ae):f;return J.width=se,J.height=ae,J.getContext("2d").drawImage(S,0,0,se,ae),Ce("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+se+"x"+ae+")."),J}else return"data"in S&&Ce("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),S;return S}function p(S){return S.generateMipmaps}function v(S){a.generateMipmap(S)}function R(S){return S.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?a.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function x(S,g,F,z,X,se=!1){if(S!==null){if(a[S]!==void 0)return a[S];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ae;z&&(ae=e.get("EXT_texture_norm16"),ae||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===a.RED&&(F===a.FLOAT&&(J=a.R32F),F===a.HALF_FLOAT&&(J=a.R16F),F===a.UNSIGNED_BYTE&&(J=a.R8),F===a.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),F===a.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),g===a.RED_INTEGER&&(F===a.UNSIGNED_BYTE&&(J=a.R8UI),F===a.UNSIGNED_SHORT&&(J=a.R16UI),F===a.UNSIGNED_INT&&(J=a.R32UI),F===a.BYTE&&(J=a.R8I),F===a.SHORT&&(J=a.R16I),F===a.INT&&(J=a.R32I)),g===a.RG&&(F===a.FLOAT&&(J=a.RG32F),F===a.HALF_FLOAT&&(J=a.RG16F),F===a.UNSIGNED_BYTE&&(J=a.RG8),F===a.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),F===a.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),g===a.RG_INTEGER&&(F===a.UNSIGNED_BYTE&&(J=a.RG8UI),F===a.UNSIGNED_SHORT&&(J=a.RG16UI),F===a.UNSIGNED_INT&&(J=a.RG32UI),F===a.BYTE&&(J=a.RG8I),F===a.SHORT&&(J=a.RG16I),F===a.INT&&(J=a.RG32I)),g===a.RGB_INTEGER&&(F===a.UNSIGNED_BYTE&&(J=a.RGB8UI),F===a.UNSIGNED_SHORT&&(J=a.RGB16UI),F===a.UNSIGNED_INT&&(J=a.RGB32UI),F===a.BYTE&&(J=a.RGB8I),F===a.SHORT&&(J=a.RGB16I),F===a.INT&&(J=a.RGB32I)),g===a.RGBA_INTEGER&&(F===a.UNSIGNED_BYTE&&(J=a.RGBA8UI),F===a.UNSIGNED_SHORT&&(J=a.RGBA16UI),F===a.UNSIGNED_INT&&(J=a.RGBA32UI),F===a.BYTE&&(J=a.RGBA8I),F===a.SHORT&&(J=a.RGBA16I),F===a.INT&&(J=a.RGBA32I)),g===a.RGB&&(F===a.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),F===a.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),F===a.UNSIGNED_INT_5_9_9_9_REV&&(J=a.RGB9_E5),F===a.UNSIGNED_INT_10F_11F_11F_REV&&(J=a.R11F_G11F_B10F)),g===a.RGBA){const $=se?Ya:Ze.getTransfer(X);F===a.FLOAT&&(J=a.RGBA32F),F===a.HALF_FLOAT&&(J=a.RGBA16F),F===a.UNSIGNED_BYTE&&(J=$===lt?a.SRGB8_ALPHA8:a.RGBA8),F===a.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),F===a.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),F===a.UNSIGNED_SHORT_4_4_4_4&&(J=a.RGBA4),F===a.UNSIGNED_SHORT_5_5_5_1&&(J=a.RGB5_A1)}return(J===a.R16F||J===a.R32F||J===a.RG16F||J===a.RG32F||J===a.RGBA16F||J===a.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(S,g){let F;return S?g===null||g===Gn||g===js?F=a.DEPTH24_STENCIL8:g===_n?F=a.DEPTH32F_STENCIL8:g===Ks&&(F=a.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Gn||g===js?F=a.DEPTH_COMPONENT24:g===_n?F=a.DEPTH_COMPONENT32F:g===Ks&&(F=a.DEPTH_COMPONENT16),F}function w(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==At&&S.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){const g=S.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function _(S){const g=S.target;g.removeEventListener("dispose",_),P(g)}function T(S){const g=n.get(S);if(g.__webglInit===void 0)return;const F=S.source,z=u.get(F);if(z){const X=z[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&A(S),Object.keys(z).length===0&&u.delete(F)}n.remove(S)}function A(S){const g=n.get(S);a.deleteTexture(g.__webglTexture);const F=S.source,z=u.get(F);delete z[g.__cacheKey],r.memory.textures--}function P(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let X=0;X<g.__webglFramebuffer[z].length;X++)a.deleteFramebuffer(g.__webglFramebuffer[z][X]);else a.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&a.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)a.deleteFramebuffer(g.__webglFramebuffer[z]);else a.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&a.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&a.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&a.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&a.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=S.textures;for(let z=0,X=F.length;z<X;z++){const se=n.get(F[z]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),r.memory.textures--),n.remove(F[z])}n.remove(S)}let I=0;function O(){I=0}function D(){return I}function B(S){I=S}function q(){const S=I;return S>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,S}function W(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function te(S,g){const F=n.get(S);if(S.isVideoTexture&&N(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const z=S.image;if(z===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,S,g);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,F.__webglTexture,a.TEXTURE0+g)}function G(S,g){const F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){de(F,S,g);return}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,F.__webglTexture,a.TEXTURE0+g)}function Z(S,g){const F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){de(F,S,g);return}t.bindTexture(a.TEXTURE_3D,F.__webglTexture,a.TEXTURE0+g)}function ee(S,g){const F=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&F.__version!==S.version){Ne(F,S,g);return}t.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+g)}const ye={[Ni]:a.REPEAT,[On]:a.CLAMP_TO_EDGE,[qa]:a.MIRRORED_REPEAT},ve={[At]:a.NEAREST,[Kh]:a.NEAREST_MIPMAP_NEAREST,[Os]:a.NEAREST_MIPMAP_LINEAR,[Nt]:a.LINEAR,[ka]:a.LINEAR_MIPMAP_NEAREST,[ti]:a.LINEAR_MIPMAP_LINEAR},at={[ou]:a.NEVER,[fu]:a.ALWAYS,[cu]:a.LESS,[bc]:a.LEQUAL,[lu]:a.EQUAL,[_c]:a.GEQUAL,[hu]:a.GREATER,[du]:a.NOTEQUAL};function Ie(S,g){if(g.type===_n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===ka||g.magFilter===Os||g.magFilter===ti||g.minFilter===Nt||g.minFilter===ka||g.minFilter===Os||g.minFilter===ti)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(S,a.TEXTURE_WRAP_S,ye[g.wrapS]),a.texParameteri(S,a.TEXTURE_WRAP_T,ye[g.wrapT]),(S===a.TEXTURE_3D||S===a.TEXTURE_2D_ARRAY)&&a.texParameteri(S,a.TEXTURE_WRAP_R,ye[g.wrapR]),a.texParameteri(S,a.TEXTURE_MAG_FILTER,ve[g.magFilter]),a.texParameteri(S,a.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(a.texParameteri(S,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(S,a.TEXTURE_COMPARE_FUNC,at[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==Os&&g.minFilter!==ti||g.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");a.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Be(S,g){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",C));const z=g.source;let X=u.get(z);X===void 0&&(X={},u.set(z,X));const se=W(g);if(se!==S.__cacheKey){X[se]===void 0&&(X[se]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,F=!0),X[se].usedTimes++;const ae=X[S.__cacheKey];ae!==void 0&&(X[S.__cacheKey].usedTimes--,ae.usedTimes===0&&A(g)),S.__cacheKey=se,S.__webglTexture=X[se].texture}return F}function j(S,g,F){return Math.floor(Math.floor(S/F)/g)}function Y(S,g,F,z){const se=S.updateRanges;if(se.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,g.width,g.height,F,z,g.data);else{se.sort((Ae,fe)=>Ae.start-fe.start);let ae=0;for(let Ae=1;Ae<se.length;Ae++){const fe=se[ae],ce=se[Ae],Re=fe.start+fe.count,Fe=j(ce.start,g.width,4),He=j(fe.start,g.width,4);ce.start<=Re+1&&Fe===He&&j(ce.start+ce.count-1,g.width,4)===Fe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++ae,se[ae]=ce)}se.length=ae+1;const J=t.getParameter(a.UNPACK_ROW_LENGTH),$=t.getParameter(a.UNPACK_SKIP_PIXELS),re=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,g.width);for(let Ae=0,fe=se.length;Ae<fe;Ae++){const ce=se[Ae],Re=Math.floor(ce.start/4),Fe=Math.ceil(ce.count/4),He=Re%g.width,k=Math.floor(Re/g.width),le=Fe,Q=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,He),t.pixelStorei(a.UNPACK_SKIP_ROWS,k),t.texSubImage2D(a.TEXTURE_2D,0,He,k,le,Q,F,z,g.data)}S.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,J),t.pixelStorei(a.UNPACK_SKIP_PIXELS,$),t.pixelStorei(a.UNPACK_SKIP_ROWS,re)}}function de(S,g,F){let z=a.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=a.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=a.TEXTURE_3D);const X=Be(S,g),se=g.source;t.bindTexture(z,S.__webglTexture,a.TEXTURE0+F);const ae=n.get(se);if(se.version!==ae.__version||X===!0){if(t.activeTexture(a.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Q=Ze.getPrimaries(Ze.workingColorSpace),he=g.colorSpace===xi?null:Ze.getPrimaries(g.colorSpace),ge=g.colorSpace===xi||Q===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(a.UNPACK_ALIGNMENT,g.unpackAlignment);let $=m(g.image,!1,i.maxTextureSize);$=Dt(g,$);const re=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let fe=x(g.internalFormat,re,Ae,g.normalized,g.colorSpace,g.isVideoTexture);Ie(z,g);let ce;const Re=g.mipmaps,Fe=g.isVideoTexture!==!0,He=ae.__version===void 0||X===!0,k=se.dataReady,le=w(g,$);if(g.isDepthTexture)fe=y(g.format===Di,g.type),He&&(Fe?t.texStorage2D(a.TEXTURE_2D,1,fe,$.width,$.height):t.texImage2D(a.TEXTURE_2D,0,fe,$.width,$.height,0,re,Ae,null));else if(g.isDataTexture)if(Re.length>0){Fe&&He&&t.texStorage2D(a.TEXTURE_2D,le,fe,Re[0].width,Re[0].height);for(let Q=0,he=Re.length;Q<he;Q++)ce=Re[Q],Fe?k&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,ce.width,ce.height,re,Ae,ce.data):t.texImage2D(a.TEXTURE_2D,Q,fe,ce.width,ce.height,0,re,Ae,ce.data);g.generateMipmaps=!1}else Fe?(He&&t.texStorage2D(a.TEXTURE_2D,le,fe,$.width,$.height),k&&Y(g,$,re,Ae)):t.texImage2D(a.TEXTURE_2D,0,fe,$.width,$.height,0,re,Ae,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&He&&t.texStorage3D(a.TEXTURE_2D_ARRAY,le,fe,Re[0].width,Re[0].height,$.depth);for(let Q=0,he=Re.length;Q<he;Q++)if(ce=Re[Q],g.format!==en)if(re!==null)if(Fe){if(k)if(g.layerUpdates.size>0){const ge=Zl(ce.width,ce.height,g.format,g.type);for(const ie of g.layerUpdates){const Pe=ce.data.subarray(ie*ge/ce.data.BYTES_PER_ELEMENT,(ie+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,ie,ce.width,ce.height,1,re,Pe)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,$.depth,re,ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Q,fe,ce.width,ce.height,$.depth,0,ce.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,$.depth,re,Ae,ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Q,fe,ce.width,ce.height,$.depth,0,re,Ae,ce.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Fe&&He&&t.texStorage2D(a.TEXTURE_2D,le,fe,Re[0].width,Re[0].height);for(let Q=0,he=Re.length;Q<he;Q++)ce=Re[Q],g.format!==en?re!==null?Fe?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,Q,0,0,ce.width,ce.height,re,ce.data):t.compressedTexImage2D(a.TEXTURE_2D,Q,fe,ce.width,ce.height,0,ce.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,ce.width,ce.height,re,Ae,ce.data):t.texImage2D(a.TEXTURE_2D,Q,fe,ce.width,ce.height,0,re,Ae,ce.data)}else if(g.isDataArrayTexture)if(Fe){if(He&&t.texStorage3D(a.TEXTURE_2D_ARRAY,le,fe,$.width,$.height,$.depth),k)if(g.layerUpdates.size>0){const Q=Zl($.width,$.height,g.format,g.type);for(const he of g.layerUpdates){const ge=$.data.subarray(he*Q/$.data.BYTES_PER_ELEMENT,(he+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,$.width,$.height,1,re,Ae,ge)}g.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,re,Ae,$.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,fe,$.width,$.height,$.depth,0,re,Ae,$.data);else if(g.isData3DTexture)Fe?(He&&t.texStorage3D(a.TEXTURE_3D,le,fe,$.width,$.height,$.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,re,Ae,$.data)):t.texImage3D(a.TEXTURE_3D,0,fe,$.width,$.height,$.depth,0,re,Ae,$.data);else if(g.isFramebufferTexture){if(He)if(Fe)t.texStorage2D(a.TEXTURE_2D,le,fe,$.width,$.height);else{let Q=$.width,he=$.height;for(let ge=0;ge<le;ge++)t.texImage2D(a.TEXTURE_2D,ge,fe,Q,he,0,re,Ae,null),Q>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in a){const Q=a.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),d.add(g),Q.onpaint=he=>{const ge=he.changedElements;for(const ie of d)ge.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,$);else{const ge=a.RGBA,ie=a.RGBA,Pe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ge,ie,Pe,$)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Fe&&He){const Q=st(Re[0]);t.texStorage2D(a.TEXTURE_2D,le,fe,Q.width,Q.height)}for(let Q=0,he=Re.length;Q<he;Q++)ce=Re[Q],Fe?k&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,re,Ae,ce):t.texImage2D(a.TEXTURE_2D,Q,fe,re,Ae,ce);g.generateMipmaps=!1}else if(Fe){if(He){const Q=st($);t.texStorage2D(a.TEXTURE_2D,le,fe,Q.width,Q.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,re,Ae,$)}else t.texImage2D(a.TEXTURE_2D,0,fe,re,Ae,$);p(g)&&v(z),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ne(S,g,F){if(g.image.length!==6)return;const z=Be(S,g),X=g.source;t.bindTexture(a.TEXTURE_CUBE_MAP,S.__webglTexture,a.TEXTURE0+F);const se=n.get(X);if(X.version!==se.__version||z===!0){t.activeTexture(a.TEXTURE0+F);const ae=Ze.getPrimaries(Ze.workingColorSpace),J=g.colorSpace===xi?null:Ze.getPrimaries(g.colorSpace),$=g.colorSpace===xi||ae===J?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const re=g.isCompressedTexture||g.image[0].isCompressedTexture,Ae=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!re&&!Ae?fe[ie]=m(g.image[ie],!0,i.maxCubemapSize):fe[ie]=Ae?g.image[ie].image:g.image[ie],fe[ie]=Dt(g,fe[ie]);const ce=fe[0],Re=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type),He=x(g.internalFormat,Re,Fe,g.normalized,g.colorSpace),k=g.isVideoTexture!==!0,le=se.__version===void 0||z===!0,Q=X.dataReady;let he=w(g,ce);Ie(a.TEXTURE_CUBE_MAP,g);let ge;if(re){k&&le&&t.texStorage2D(a.TEXTURE_CUBE_MAP,he,He,ce.width,ce.height);for(let ie=0;ie<6;ie++){ge=fe[ie].mipmaps;for(let Pe=0;Pe<ge.length;Pe++){const Ee=ge[Pe];g.format!==en?Re!==null?k?Q&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,He,Ee.width,Ee.height,0,Ee.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,Ee.width,Ee.height,Re,Fe,Ee.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,He,Ee.width,Ee.height,0,Re,Fe,Ee.data)}}}else{if(ge=g.mipmaps,k&&le){ge.length>0&&he++;const ie=st(fe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,he,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Re,Fe,fe[ie].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,fe[ie].width,fe[ie].height,0,Re,Fe,fe[ie].data);for(let Pe=0;Pe<ge.length;Pe++){const _t=ge[Pe].image[ie].image;k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,_t.width,_t.height,Re,Fe,_t.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,He,_t.width,_t.height,0,Re,Fe,_t.data)}}else{k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Fe,fe[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Re,Fe,fe[ie]);for(let Pe=0;Pe<ge.length;Pe++){const Ee=ge[Pe];k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,Fe,Ee.image[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,He,Re,Fe,Ee.image[ie])}}}p(g)&&v(a.TEXTURE_CUBE_MAP),se.__version=X.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function oe(S,g,F,z,X,se){const ae=s.convert(F.format,F.colorSpace),J=s.convert(F.type),$=x(F.internalFormat,ae,J,F.normalized,F.colorSpace),re=n.get(g),Ae=n.get(F);if(Ae.__renderTarget=g,!re.__hasExternalTextures){const fe=Math.max(1,g.width>>se),ce=Math.max(1,g.height>>se);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?t.texImage3D(X,se,$,fe,ce,g.depth,0,ae,J,null):t.texImage2D(X,se,$,fe,ce,0,ae,J,null)}t.bindFramebuffer(a.FRAMEBUFFER,S),yt(g)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,z,X,Ae.__webglTexture,0,bt(g)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,z,X,Ae.__webglTexture,se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Oe(S,g,F){if(a.bindRenderbuffer(a.RENDERBUFFER,S),g.depthBuffer){const z=g.depthTexture,X=z&&z.isDepthTexture?z.type:null,se=y(g.stencilBuffer,X),ae=g.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;yt(g)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,bt(g),se,g.width,g.height):F?a.renderbufferStorageMultisample(a.RENDERBUFFER,bt(g),se,g.width,g.height):a.renderbufferStorage(a.RENDERBUFFER,se,g.width,g.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ae,a.RENDERBUFFER,S)}else{const z=g.textures;for(let X=0;X<z.length;X++){const se=z[X],ae=s.convert(se.format,se.colorSpace),J=s.convert(se.type),$=x(se.internalFormat,ae,J,se.normalized,se.colorSpace);yt(g)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,bt(g),$,g.width,g.height):F?a.renderbufferStorageMultisample(a.RENDERBUFFER,bt(g),$,g.width,g.height):a.renderbufferStorage(a.RENDERBUFFER,$,g.width,g.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function mt(S,g,F){const z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),Ie(a.TEXTURE_CUBE_MAP,g.depthTexture);const re=s.convert(g.depthTexture.format),Ae=s.convert(g.depthTexture.type);let fe;g.depthTexture.format===ai?fe=a.DEPTH_COMPONENT24:g.depthTexture.format===Di&&(fe=a.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,g.width,g.height,0,re,Ae,null)}}else te(g.depthTexture,0);const se=X.__webglTexture,ae=bt(g),J=z?a.TEXTURE_CUBE_MAP_POSITIVE_X+F:a.TEXTURE_2D,$=g.depthTexture.format===Di?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(g.depthTexture.format===ai)yt(g)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,J,se,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,$,J,se,0);else if(g.depthTexture.format===Di)yt(g)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,J,se,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,$,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(S){const g=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=z}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)mt(g.__webglFramebuffer[z],S,z);else{const z=S.texture.mipmaps;z&&z.length>0?mt(g.__webglFramebuffer[0],S,0):mt(g.__webglFramebuffer,S,0)}else if(F){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(a.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=a.createRenderbuffer(),Oe(g.__webglDepthbuffer[z],S,!1);else{const X=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[z];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,se)}}else{const z=S.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(a.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=a.createRenderbuffer(),Oe(g.__webglDepthbuffer,S,!1);else{const X=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,se)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Qe(S,g,F){const z=n.get(S);g!==void 0&&oe(z.__webglFramebuffer,S,S.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),F!==void 0&&Xe(S)}function dt(S){const g=S.texture,F=n.get(S),z=n.get(g);S.addEventListener("dispose",_);const X=S.textures,se=S.isWebGLCubeRenderTarget===!0,ae=X.length>1;if(ae||(z.__webglTexture===void 0&&(z.__webglTexture=a.createTexture()),z.__version=g.version,r.memory.textures++),se){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[J][$]=a.createFramebuffer()}else F.__webglFramebuffer[J]=a.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[J]=a.createFramebuffer()}else F.__webglFramebuffer=a.createFramebuffer();if(ae)for(let J=0,$=X.length;J<$;J++){const re=n.get(X[J]);re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture(),r.memory.textures++)}if(S.samples>0&&yt(S)===!1){F.__webglMultisampledFramebuffer=a.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<X.length;J++){const $=X[J];F.__webglColorRenderbuffer[J]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const re=s.convert($.format,$.colorSpace),Ae=s.convert($.type),fe=x($.internalFormat,re,Ae,$.normalized,$.colorSpace,S.isXRRenderTarget===!0),ce=bt(S);a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,fe,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+J,a.RENDERBUFFER,F.__webglColorRenderbuffer[J])}a.bindRenderbuffer(a.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=a.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture),Ie(a.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)oe(F.__webglFramebuffer[J][$],S,g,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else oe(F.__webglFramebuffer[J],S,g,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(g)&&v(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,$=X.length;J<$;J++){const re=X[J],Ae=n.get(re);let fe=a.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ae.__webglTexture),Ie(fe,re),oe(F.__webglFramebuffer,S,re,a.COLOR_ATTACHMENT0+J,fe,0),p(re)&&v(fe)}t.unbindTexture()}else{let J=a.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(J=S.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(J,z.__webglTexture),Ie(J,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)oe(F.__webglFramebuffer[$],S,g,a.COLOR_ATTACHMENT0,J,$);else oe(F.__webglFramebuffer,S,g,a.COLOR_ATTACHMENT0,J,0);p(g)&&v(J),t.unbindTexture()}S.depthBuffer&&Xe(S)}function je(S){const g=S.textures;for(let F=0,z=g.length;F<z;F++){const X=g[F];if(p(X)){const se=R(S),ae=n.get(X).__webglTexture;t.bindTexture(se,ae),v(se),t.unbindTexture()}}}const gt=[],et=[];function St(S){if(S.samples>0){if(yt(S)===!1){const g=S.textures,F=S.width,z=S.height;let X=a.COLOR_BUFFER_BIT;const se=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=n.get(S),J=g.length>1;if(J)for(let re=0;re<g.length;re++)t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const $=S.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let re=0;re<g.length;re++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),J){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const Ae=n.get(g[re]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ae,0)}a.blitFramebuffer(0,0,F,z,0,0,F,z,X,a.NEAREST),c===!0&&(gt.length=0,et.length=0,gt.push(a.COLOR_ATTACHMENT0+re),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(gt.push(se),et.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,et)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),J)for(let re=0;re<g.length;re++){t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const Ae=n.get(g[re]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.TEXTURE_2D,Ae,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&c){const g=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[g])}}}function bt(S){return Math.min(i.maxSamples,S.samples)}function yt(S){const g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(S){const g=r.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function Dt(S,g){const F=S.colorSpace,z=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==dn&&F!==xi&&(Ze.getTransfer(F)===lt?(z!==en||X!==cn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",F)),g}function st(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=Qe,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V_(a,e){function t(n,i=xi){let s;const r=Ze.getTransfer(i);if(n===cn)return a.UNSIGNED_BYTE;if(n===hc)return a.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return a.BYTE;if(n===Jh)return a.SHORT;if(n===Ks)return a.UNSIGNED_SHORT;if(n===lc)return a.INT;if(n===Gn)return a.UNSIGNED_INT;if(n===_n)return a.FLOAT;if(n===Hn)return a.HALF_FLOAT;if(n===$h)return a.ALPHA;if(n===Qh)return a.RGB;if(n===en)return a.RGBA;if(n===ai)return a.DEPTH_COMPONENT;if(n===Di)return a.DEPTH_STENCIL;if(n===fc)return a.RED;if(n===uc)return a.RED_INTEGER;if(n===Ui)return a.RG;if(n===pc)return a.RG_INTEGER;if(n===mc)return a.RGBA_INTEGER;if(n===Oa||n===Ba||n===za||n===Ga)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===So||n===yo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Ka||n===Co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Eo||n===wo)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===To)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return s.COMPRESSED_R11_EAC;if(n===Ro)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return s.COMPRESSED_RG11_EAC;if(n===Co)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Lo||n===Io||n===Do||n===Fo||n===No||n===Uo||n===ko||n===Oo||n===Bo||n===zo||n===Go||n===Ho||n===Vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Po)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wo)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===jo||n===ja||n===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ko)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends yi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,b=null;const M=typeof XRWebGLBinding<"u",m=new q_,p={},v=t.getContextAttributes();let R=null,x=null;const y=[],w=[],C=new ke;let _=null,T=null;const A=new $t;A.viewport=new ut;const P=new $t;P.viewport=new ut;const I=[A,P],O=new Hp;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=y[j];return Y===void 0&&(Y=new Cr,y[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=y[j];return Y===void 0&&(Y=new Cr,y[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=y[j];return Y===void 0&&(Y=new Cr,y[j]=Y),Y.getHandSpace()};function q(j){const Y=w.indexOf(j.inputSource);if(Y===-1)return;const de=y[Y];de!==void 0&&(de.update(j.inputSource,j.frame,l||r),de.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",te);for(let j=0;j<y.length;j++){const Y=w[j];Y!==null&&(w[j]=null,y[j].disconnect(Y))}D=null,B=null,m.reset();for(const j in p)delete p[j];if(e.setRenderTarget(R),u=null,f=null,d=null,i=null,x=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),T!==null){const j=T.camera;j.fov=T.fov,j.zoom=T.zoom,j.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(R=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",W),i.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,oe=null;v.depth&&(oe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Di:ai,Ne=v.stencil?js:Gn);const Oe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Cn(f.textureWidth,f.textureHeight,{format:en,type:cn,depthTexture:new Qs(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Cn(u.framebufferWidth,u.framebufferHeight,{format:en,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let Y=0;Y<j.removed.length;Y++){const de=j.removed[Y],Ne=w.indexOf(de);Ne>=0&&(w[Ne]=null,y[Ne].disconnect(de))}for(let Y=0;Y<j.added.length;Y++){const de=j.added[Y];let Ne=w.indexOf(de);if(Ne===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=w.length){w.push(de),Ne=Oe;break}else if(w[Oe]===null){w[Oe]=de,Ne=Oe;break}if(Ne===-1)break}const oe=y[Ne];oe&&oe.connect(de)}}const G=new L,Z=new L;function ee(j,Y,de){G.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const Ne=G.distanceTo(Z),oe=Y.projectionMatrix.elements,Oe=de.projectionMatrix.elements,mt=oe[14]/(oe[10]-1),Xe=oe[14]/(oe[10]+1),Qe=(oe[9]+1)/oe[5],dt=(oe[9]-1)/oe[5],je=(oe[8]-1)/oe[0],gt=(Oe[8]+1)/Oe[0],et=mt*je,St=mt*gt,bt=Ne/(-je+gt),yt=bt*-je;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(yt),j.translateZ(bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),oe[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const N=mt+bt,Dt=Xe+bt,st=et-yt,S=St+(Ne-yt),g=Qe*Xe/Dt*N,F=dt*Xe/Dt*N;j.projectionMatrix.makePerspective(st,S,g,F,N,Dt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Y=j.near,de=j.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(de=m.depthFar)),O.near=P.near=A.near=Y,O.far=P.far=A.far=de,(D!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=j.layers.mask|6,A.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Ne=j.parent,oe=O.cameras;ye(O,Ne);for(let Oe=0;Oe<oe.length;Oe++)ye(oe[Oe],Ne);oe.length===2?ee(O,A,P):O.projectionMatrix.copy(A.projectionMatrix),T===null&&j.isPerspectiveCamera&&(T={camera:j,fov:j.fov,zoom:j.zoom}),ve(j,O,Ne)};function ve(j,Y,de){de===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let at=null;function Ie(j,Y){if(h=Y.getViewerPose(l||r),b=Y,h!==null){const de=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let Ne=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let Xe=0;Xe<de.length;Xe++){const Qe=de[Xe];let dt=null;if(u!==null)dt=u.getViewport(Qe);else{const gt=d.getViewSubImage(f,Qe);dt=gt.viewport,Xe===0&&(e.setRenderTargetTextures(x,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(x))}let je=I[Xe];je===void 0&&(je=new $t,je.layers.enable(Xe),je.viewport=new ut,I[Xe]=je),je.matrix.fromArray(Qe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Qe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(dt.x,dt.y,dt.width,dt.height),Xe===0&&(O.matrix.copy(je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(je)}const oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const Xe=d.getDepthInformation(de[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(oe&&oe.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<de.length;Xe++){const Qe=de[Xe].camera;if(Qe){let dt=p[Qe];dt||(dt=new ud,p[Qe]=dt);const je=d.getCameraImage(Qe);dt.sourceTexture=je}}}}for(let de=0;de<y.length;de++){const Ne=w[de],oe=y[de];Ne!==null&&oe!==void 0&&oe.update(Ne,Y,l||r)}at&&at(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),b=null}const Be=new Sd;Be.setAnimationLoop(Ie),this.setAnimationLoop=function(j){at=j},this.dispose=function(){}}}const j_=new We,Cd=new Ge;Cd.set(-1,0,0,0,1,0,0,0,1);function J_(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pd(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,R,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),b(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),R=v.envMap,x=v.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y_(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const w=y.program;n.uniformBlockBinding(x,w)}function l(x,y){let w=i[x.id];w===void 0&&(m(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",v));const C=y.program;n.updateUBOMapping(x,C);const _=e.render.frame;s[x.id]!==_&&(f(x),s[x.id]=_)}function h(x){const y=d();x.__bindingPointIndex=y;const w=a.createBuffer(),C=x.__size,_=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,w),a.bufferData(a.UNIFORM_BUFFER,C,_),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,w),w}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],w=x.uniforms,C=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let _=0,T=w.length;_<T;_++){const A=w[_];if(Array.isArray(A))for(let P=0,I=A.length;P<I;P++)u(A[P],_,P,C);else u(A,_,0,C)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function u(x,y,w,C){if(M(x,y,w,C)===!0){const _=x.__offset,T=x.value;if(Array.isArray(T)){let A=0;for(let P=0;P<T.length;P++){const I=T[P],O=p(I);b(I,x.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(T,x.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,_,x.__data)}}function b(x,y,w){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,w)}function M(x,y,w,C){const _=x.value,T=y+"_"+w;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{const A=C[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(x){const y=x.uniforms;let w=0;const C=16;for(let T=0,A=y.length;T<A;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let I=0,O=P.length;I<O;I++){const D=P[I],B=Array.isArray(D.value)?D.value:[D.value];for(let q=0,W=B.length;q<W;q++){const te=B[q],G=p(te),Z=w%C,ee=Z%G.boundary,ye=Z+ee;w+=ee,ye!==0&&C-ye<G.storage&&(w+=C-ye),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=G.storage}}}const _=w%C;return _>0&&(w+=C-_),x.__size=w,x.__cache={},this}function p(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",x),y}function v(x){const y=x.target;y.removeEventListener("dispose",v);const w=r.indexOf(y.__bindingPointIndex);r.splice(w,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function R(){for(const x in i)a.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:c,update:l,dispose:R}}const Z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function $_(){return Fn===null&&(Fn=new sa(Z_,16,16,Ui,Hn),Fn.name="DFG_LUT",Fn.minFilter=Nt,Fn.magFilter=Nt,Fn.wrapS=On,Fn.wrapT=On,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Q_{constructor(e={}){const{canvas:t=mu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=cn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=r;const M=u,m=new Set([mc,pc,uc]),p=new Set([cn,Gn,Ks,js,hc,dc]),v=new Uint32Array(4),R=new Int32Array(4),x=new L;let y=null,w=null;const C=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1,I=null,O=null,D=null,B=null;this._outputColorSpace=Tt;let q=0,W=0,te=null,G=-1,Z=null;const ee=new ut,ye=new ut;let ve=null;const at=new Le(0);let Ie=0,Be=t.width,j=t.height,Y=1,de=null,Ne=null;const oe=new ut(0,0,Be,j),Oe=new ut(0,0,Be,j);let mt=!1;const Xe=new Tc;let Qe=!1,dt=!1;const je=new We,gt=new L,et=new ut,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function yt(){return te===null?Y:1}let N=n;function Dt(E,U){return t.getContext(E,U)}let st,S,g,F,z,X,se,ae,J,$,re,Ae,fe,ce,Re,Fe,He,k,le,Q,he,ge,ie;try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),N===null){const U="webgl2";if(N=Dt(U,E),N===null)throw Dt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(E){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Ue("WebGLRenderer: "+E.message),E}function Pe(){st=new $0(N),st.init(),he=new V_(N,st),S=new H0(N,st,e,he),g=new G_(N,st),S.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),O=N.createFramebuffer(),D=N.createFramebuffer(),B=N.createFramebuffer(),F=new tb(N),z=new A_,X=new H_(N,st,g,z,S,he,F),se=new Z0(A),ae=new im(N),ge=new z0(N,ae),J=new Q0(N,ae,F,ge),$=new ib(N,J,ae,ge,F),k=new nb(N,S,X),Re=new V0(z),re=new T_(A,se,st,S,ge,Re),Ae=new J_(A,z),fe=new C_,ce=new N_(st),He=new B0(A,se,g,$,b,c),Fe=new z_(A,$,S),ie=new Y_(N,F,S,g),le=new G0(N,st,F),Q=new eb(N,st,F),F.programs=re.programs,A.capabilities=S,A.extensions=st,A.properties=z,A.renderLists=fe,A.shadowMap=Fe,A.state=g,A.info=F}M!==cn&&(T=new ab(M,t.width,t.height,o,i,s));const Ee=new K_(A,N);this.xr=Ee,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(Be,j,!1))},this.getSize=function(E){return E.set(Be,j)},this.setSize=function(E,U,K=!0){if(Ee.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=E,j=U,t.width=Math.floor(E*Y),t.height=Math.floor(U*Y),K===!0&&(t.style.width=E+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Be*Y,j*Y).floor()},this.setDrawingBufferSize=function(E,U,K){Be=E,j=U,Y=K,t.width=Math.floor(E*K),t.height=Math.floor(U*K),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(M===cn){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,U,K,H){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,K,H),g.viewport(ee.copy(oe).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,U,K,H){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,U,K,H),g.scissor(ye.copy(Oe).multiplyScalar(Y).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){g.setScissorTest(mt=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,K=!0){let H=0;if(E){let V=!1;if(te!==null){const me=te.texture.format;V=m.has(me)}if(V){const me=te.texture.type,xe=p.has(me),pe=He.getClearColor(),Me=He.getClearAlpha(),we=pe.r,qe=pe.g,Ye=pe.b;xe?(v[0]=we,v[1]=qe,v[2]=Ye,v[3]=Me,N.clearBufferuiv(N.COLOR,0,v)):(R[0]=we,R[1]=qe,R[2]=Ye,R[3]=Me,N.clearBufferiv(N.COLOR,0,R))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),He.dispose(),fe.dispose(),ce.dispose(),z.dispose(),se.dispose(),$.dispose(),ge.dispose(),ie.dispose(),re.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Vc),Ee.removeEventListener("sessionend",Wc),Ei.stop()};function _t(E){E.preventDefault(),Za("WebGLRenderer: Context Lost."),P=!0}function rt(){Za("WebGLRenderer: Context Restored."),P=!1;const E=F.autoReset,U=Fe.enabled,K=Fe.autoUpdate,H=Fe.needsUpdate,V=Fe.type;Pe(),F.autoReset=E,Fe.enabled=U,Fe.autoUpdate=K,Fe.needsUpdate=H,Fe.type=V}function vn(E){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ln(E){const U=E.target;U.removeEventListener("dispose",Ln),Od(U)}function Od(E){Bd(E),z.remove(E)}function Bd(E){const U=z.get(E).programs;U!==void 0&&(U.forEach(function(K){re.releaseProgram(K)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,K,H,V,me){U===null&&(U=St);const xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=Hd(E,U,K,H,V);g.setMaterial(H,xe);let Me=K.index,we=1;if(H.wireframe===!0){if(Me=J.getWireframeAttribute(K),Me===void 0)return;we=2}const qe=K.drawRange,Ye=K.attributes.position;let Se=qe.start*we,ot=(qe.start+qe.count)*we;me!==null&&(Se=Math.max(Se,me.start*we),ot=Math.min(ot,(me.start+me.count)*we)),Me!==null?(Se=Math.max(Se,0),ot=Math.min(ot,Me.count)):Ye!=null&&(Se=Math.max(Se,0),ot=Math.min(ot,Ye.count));const Lt=ot-Se;if(Lt<0||Lt===1/0)return;ge.setup(V,H,pe,K,Me);let vt,pt=le;if(Me!==null&&(vt=ae.get(Me),pt=Q,pt.setIndex(vt)),V.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*yt()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(V.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),g.setLineWidth(qt*yt()),V.isLineSegments?pt.setMode(N.LINES):V.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else V.isPoints?pt.setMode(N.POINTS):V.isSprite&&pt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qt=V._multiDrawStarts,_e=V._multiDrawCounts,Jt=V._multiDrawCount,nt=Me?ae.get(Me).bytesPerElement:1,fn=z.get(H).currentProgram.getUniforms();for(let In=0;In<Jt;In++)fn.setValue(N,"_gl_DrawID",In),pt.render(qt[In]/nt,_e[In])}else if(V.isInstancedMesh)pt.renderInstances(Se,Lt,V.count);else if(K.isInstancedBufferGeometry){const qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,qt);pt.renderInstances(Se,Lt,_e)}else pt.render(Se,Lt)};function Hc(E,U,K,H){I!==null&&E.isNodeMaterial&&I.setObject(H,E),Qe===!0&&Re.setState(E,K,!1),E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,ra(E,U,H),E.side=Si,E.needsUpdate=!0,ra(E,U,H),E.side=Ht):ra(E,U,H)}this.compile=function(E,U,K=null){K===null&&(K=E),I!==null&&I.renderStart(E,U,K),w=ce.get(K),w.init(U),_.push(w),K.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==K&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),dt=this.localClippingEnabled,Qe=Re.init(this.clippingPlanes,dt),Qe===!0&&Re.setGlobalState(this.clippingPlanes,U),I!==null&&Fe.render(w.state.shadowsArray,K,U);const H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let xe=0;xe<me.length;xe++){const pe=me[xe];Hc(pe,K,U,V),H.add(pe)}else Hc(me,K,U,V),H.add(me)}),w=_.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(E,U,K=null){const H=this.compile(E,U,K);return new Promise(V=>{function me(){if(H.forEach(function(xe){const Me=z.get(xe).currentProgram;(Me===void 0||Me.isReady())&&H.delete(xe)}),H.size===0){V(E);return}setTimeout(me,10)}st.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let mr=null;function zd(E){mr&&mr(E)}function Vc(){Ei.stop()}function Wc(){Ei.start()}const Ei=new Sd;Ei.setAnimationLoop(zd),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){mr=E,Ee.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},Ee.addEventListener("sessionstart",Vc),Ee.addEventListener("sessionend",Wc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,U);const K=Ee.enabled===!0&&Ee.isPresenting===!0,H=T!==null&&(te===null||K)&&T.begin(A,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,te),w=ce.get(E,_.length),w.init(U),w.state.textureUnits=X.getTextureUnits(),_.push(w),je.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(je,Bn,U.reversedDepth),dt=this.localClippingEnabled,Qe=Re.init(this.clippingPlanes,dt),y=fe.get(E,C.length),y.init(),C.push(y),Ee.enabled===!0&&Ee.isPresenting===!0){const xe=A.xr.getDepthSensingMesh();xe!==null&&gr(xe,U,-1/0,A.sortObjects)}gr(E,U,0,A.sortObjects),y.finish(),I!==null&&I.updateLights(w.state.lightsArray),A.sortObjects===!0&&y.sort(de,Ne),bt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,bt&&He.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Re.beginShadows();const V=w.state.shadowsArray;if(Fe.render(V,E,U),Qe===!0&&Re.endShadows(),(H&&T.hasRenderPass())===!1){const xe=y.opaque,pe=y.transmissive;if(w.setupLights(),U.isArrayCamera){const Me=U.cameras;if(pe.length>0)for(let we=0,qe=Me.length;we<qe;we++){const Ye=Me[we];qc(xe,pe,E,Ye)}bt&&He.render(E);for(let we=0,qe=Me.length;we<qe;we++){const Ye=Me[we];Xc(y,E,Ye,Ye.viewport)}}else pe.length>0&&qc(xe,pe,E,U),bt&&He.render(E),Xc(y,E,U)}te!==null&&W===0&&(X.updateMultisampleRenderTarget(te),X.updateRenderTargetMipmap(te)),H&&T.end(A),E.isScene===!0&&E.onAfterRender(A,E,U),ge.resetDefaultState(),G=-1,Z=null,_.pop(),_.length>0?(w=_[_.length-1],X.setTextureUnits(w.state.textureUnits),Qe===!0&&Re.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,I!==null&&I.renderEnd()};function gr(E,U,K,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Xe)){H&&et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(je);const xe=$.update(E),pe=E.material;pe.visible&&y.push(E,xe,pe,K,et.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Xe))){const xe=$.update(E),pe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),et.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),et.copy(xe.boundingSphere.center)),et.applyMatrix4(E.matrixWorld).applyMatrix4(je)),Array.isArray(pe)){const Me=xe.groups;for(let we=0,qe=Me.length;we<qe;we++){const Ye=Me[we],Se=pe[Ye.materialIndex];Se&&Se.visible&&y.push(E,xe,Se,K,et.z,Ye,U)}}else pe.visible&&y.push(E,xe,pe,K,et.z,null,U)}}const me=E.children;for(let xe=0,pe=me.length;xe<pe;xe++)gr(me[xe],U,K,H)}function Xc(E,U,K,H){const{opaque:V,transmissive:me,transparent:xe}=E;w.setupLightsView(K),Qe===!0&&Re.setGlobalState(A.clippingPlanes,K),H&&g.viewport(ee.copy(H)),V.length>0&&aa(V,U,K),me.length>0&&aa(me,U,K),xe.length>0&&aa(xe,U,K),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function qc(E,U,K,H){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Se=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Cn(1,1,{generateMipmaps:!0,type:Se?Hn:cn,minFilter:ti,samples:Math.max(4,S.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const me=w.state.transmissionRenderTarget[H.id],xe=H.viewport||ee;me.setSize(xe.z*A.transmissionResolutionScale,xe.w*A.transmissionResolutionScale);const pe=A.getRenderTarget(),Me=A.getActiveCubeFace(),we=A.getActiveMipmapLevel();A.setRenderTarget(me),A.getClearColor(at),Ie=A.getClearAlpha(),Ie<1&&A.setClearColor(16777215,.5),A.clear(),bt&&He.render(K);const qe=A.toneMapping;A.toneMapping=zn;const Ye=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Qe===!0&&Re.setGlobalState(A.clippingPlanes,H),aa(E,K,H),X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me),st.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let ot=0,Lt=U.length;ot<Lt;ot++){const vt=U[ot],{object:pt,geometry:qt,material:_e,group:Jt}=vt;if(_e.side===Ht&&pt.layers.test(H.layers)){const nt=_e.side;_e.side=tn,_e.needsUpdate=!0,Kc(pt,K,H,qt,_e,Jt),_e.side=nt,_e.needsUpdate=!0,Se=!0}}Se===!0&&(X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me))}A.setRenderTarget(pe,Me,we),A.setClearColor(at,Ie),Ye!==void 0&&(H.viewport=Ye),A.toneMapping=qe}function aa(E,U,K){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,me=E.length;V<me;V++){const xe=E[V],{object:pe,geometry:Me,group:we}=xe;let qe=xe.material;qe.allowOverride===!0&&H!==null&&(qe=H),pe.layers.test(K.layers)&&Kc(pe,U,K,Me,qe,we)}}function Kc(E,U,K,H,V,me){I!==null&&V.isNodeMaterial&&I.setObject(E,V),E.onBeforeRender(A,U,K,H,V,me),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(A,U,K,H,E,me),V.transparent===!0&&V.side===Ht&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,A.renderBufferDirect(K,U,H,V,E,me),V.side=Si,V.needsUpdate=!0,A.renderBufferDirect(K,U,H,V,E,me),V.side=Ht):A.renderBufferDirect(K,U,H,V,E,me),E.onAfterRender(A,U,K,H,V,me)}function ra(E,U,K){U.isScene!==!0&&(U=St);const H=z.get(E),V=w.state.lights,me=w.state.shadowsArray,xe=V.state.version,pe=re.getParameters(E,V.state,me,U,K,w.state.lightProbeGridArray),Me=re.getProgramCacheKey(pe);let we=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=se.get(E.envMap||H.environment,qe),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Ln),we=new Map,H.programs=we);let Ye=we.get(Me);if(Ye!==void 0){if(H.currentProgram===Ye&&H.lightsStateVersion===xe)return Jc(E,pe),Ye}else pe.uniforms=re.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,K,pe),E.onBeforeCompile(pe,A),Ye=re.acquireProgram(pe,Me),we.set(Me,Ye),H.uniforms=pe.uniforms;const Se=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=Re.uniform),Jc(E,pe),H.needsLights=Wd(E),H.lightsStateVersion=xe,H.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.sunLights.value=V.state.sun,Se.sunLightShadows.value=V.state.sunShadow,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.sunShadowMatrix.value=V.state.sunShadowMatrix,Se.sunShadowCascade.value=V.state.sunShadowCascade,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ye,H.uniformsList=null,Ye}function jc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Va.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Jc(E,U){const K=z.get(E);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function Gd(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let K=0,H=E.length;K<H;K++){const V=E[K];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Hd(E,U,K,H,V){U.isScene!==!0&&(U=St),X.resetTextureUnits();const me=U.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,pe=te===null?A.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=se.get(H.envMap||xe,Me),qe=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Lt=!!K.morphAttributes.color;let vt=zn;H.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(vt=A.toneMapping);const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qt=pt!==void 0?pt.length:0,_e=z.get(H),Jt=w.state.lights;if(Qe===!0&&(dt===!0||E!==Z)){const xt=E===Z&&H.id===G;Re.setState(H,E,xt)}let nt=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Jt.state.version||_e.outputColorSpace!==pe||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==we||H.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==qe||_e.vertexTangents!==Ye||_e.morphTargets!==Se||_e.morphNormals!==ot||_e.morphColors!==Lt||_e.toneMapping!==vt||_e.morphTargetsCount!==qt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,_e.__version=H.version);let fn=_e.currentProgram;nt===!0&&(fn=ra(H,U,V),I&&H.isNodeMaterial&&I.onUpdateProgram(H,fn,_e));let In=!1,ri=!1,ki=!1;const ft=fn.getUniforms(),Rt=_e.uniforms;if(g.useProgram(fn.program)&&(In=!0,ri=!0,ki=!0),H.id!==G&&(G=H.id,ri=!0),_e.needsLights){const xt=Gd(w.state.lightProbeGridArray,V);_e.lightProbeGrid!==xt&&(_e.lightProbeGrid=xt,ri=!0)}if(In||Z!==E){g.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(N,"projectionMatrix",E.projectionMatrix),ft.setValue(N,"viewMatrix",E.matrixWorldInverse);const ci=ft.map.cameraPosition;ci!==void 0&&ci.setValue(N,gt.setFromMatrixPosition(E.matrixWorld)),S.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,ri=!0,ki=!0)}if(_e.needsLights&&(Jt.state.sunShadowMap.length>0&&ft.setValue(N,"sunShadowMap",Jt.state.sunShadowMap,X),Jt.state.directionalShadowMap.length>0&&ft.setValue(N,"directionalShadowMap",Jt.state.directionalShadowMap,X),Jt.state.spotShadowMap.length>0&&ft.setValue(N,"spotShadowMap",Jt.state.spotShadowMap,X),Jt.state.pointShadowMap.length>0&&ft.setValue(N,"pointShadowMap",Jt.state.pointShadowMap,X)),V.isSkinnedMesh){ft.setOptional(N,V,"bindMatrix"),ft.setOptional(N,V,"bindMatrixInverse");const xt=V.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(N,"boneTexture",xt.boneTexture,X))}V.isBatchedMesh&&(ft.setOptional(N,V,"batchingTexture"),ft.setValue(N,"batchingTexture",V._matricesTexture,X),ft.setOptional(N,V,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",V._indirectTexture,X),ft.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",V._colorsTexture,X));const oi=K.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&k.update(V,K,fn),(ri||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,ft.setValue(N,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Rt.envMapIntensity.value=U.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=$_()),ri){if(ft.setValue(N,"toneMappingExposure",A.toneMappingExposure),_e.needsLights&&Vd(Rt,ki),me&&H.fog===!0&&Ae.refreshFogUniforms(Rt,me),Ae.refreshMaterialUniforms(Rt,H,Y,j,w.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const xt=_e.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}Va.upload(N,jc(_e),Rt,X)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Va.upload(N,jc(_e),Rt,X),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(N,"center",V.center),ft.setValue(N,"modelViewMatrix",V.modelViewMatrix),ft.setValue(N,"normalMatrix",V.normalMatrix),ft.setValue(N,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const xt=H.uniformsGroups;for(let ci=0,Oi=xt.length;ci<Oi;ci++){const Zc=xt[ci];ie.update(Zc,fn),ie.bind(Zc,fn)}}return fn}function Vd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Wd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,U,K){const H=z.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),z.get(E.texture).__webglTexture=U,z.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:K,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const K=z.get(E);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,K=0){te=E,q=U,W=K;let H=null,V=!1,me=!1;if(E){const pe=z.get(E);if(pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),ee.copy(E.viewport),ye.copy(E.scissor),ve=E.scissorTest,g.viewport(ee),g.scissor(ye),g.setScissorTest(ve),G=-1;return}else if(pe.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(pe.__hasExternalTextures)X.rebindTextures(E,z.get(E.texture).__webglTexture,z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const qe=E.depthTexture;if(pe.__boundDepthTexture!==qe){if(qe!==null&&z.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const we=z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[U])?H=we[U][K]:H=we[U],V=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?H=z.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[K]:H=we,ee.copy(E.viewport),ye.copy(E.scissor),ve=E.scissorTest}else ee.copy(oe).multiplyScalar(Y).floor(),ye.copy(Oe).multiplyScalar(Y).floor(),ve=mt;if(K!==0&&(H=O),g.bindFramebuffer(N.FRAMEBUFFER,H)&&g.drawBuffers(E,H),g.viewport(ee),g.scissor(ye),g.setScissorTest(ve),V){const pe=z.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,K)}else if(me){const pe=U;for(let Me=0;Me<E.textures.length;Me++){const we=z.get(E.textures[Me]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Me,we.__webglTexture,K,pe)}}else if(E!==null&&K!==0){const pe=z.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,K)}G=-1};function Yc(E){const U=z.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=S.textureFormatReadable(E.format),U.__typeReadable=S.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,K,H,V,me,xe,pe=0){if(!(E&&E.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){g.bindFramebuffer(N.FRAMEBUFFER,Me);try{const we=E.textures[pe],qe=we.format,Ye=we.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);const Se=Yc(we);if(Se.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&K>=0&&K<=E.height-V&&N.readPixels(U,K,H,V,he.convert(qe),he.convert(Ye),me)}finally{const we=te!==null?z.get(te).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,U,K,H,V,me,xe,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(U>=0&&U<=E.width-H&&K>=0&&K<=E.height-V){g.bindFramebuffer(N.FRAMEBUFFER,Me);const we=E.textures[pe],qe=we.format,Ye=we.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);const Se=Yc(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(U,K,H,V,he.convert(qe),he.convert(Ye),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Lt=te!==null?z.get(te).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Lt);const vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gu(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ot),N.deleteSync(vt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,K=0){const H=Math.pow(2,-K),V=Math.floor(E.image.width*H),me=Math.floor(E.image.height*H),xe=U!==null?U.x:0,pe=U!==null?U.y:0;X.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,xe,pe,V,me),g.unbindTexture()},this.copyTextureToTexture=function(E,U,K=null,H=null,V=0,me=0){let xe,pe,Me,we,qe,Ye,Se,ot,Lt;const vt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(K!==null)xe=K.max.x-K.min.x,pe=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,we=K.min.x,qe=K.min.y,Ye=K.isBox3?K.min.z:0;else{const Rt=Math.pow(2,-V);xe=Math.floor(vt.width*Rt),pe=Math.floor(vt.height*Rt),E.isDataArrayTexture?Me=vt.depth:E.isData3DTexture?Me=Math.floor(vt.depth*Rt):Me=1,we=0,qe=0,Ye=0}H!==null?(Se=H.x,ot=H.y,Lt=H.z):(Se=0,ot=0,Lt=0);const pt=he.convert(U.format),qt=he.convert(U.type);let _e;U.isData3DTexture?(X.setTexture3D(U,0),_e=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(X.setTexture2DArray(U,0),_e=N.TEXTURE_2D_ARRAY):(X.setTexture2D(U,0),_e=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=g.getParameter(N.UNPACK_ROW_LENGTH),nt=g.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=g.getParameter(N.UNPACK_SKIP_PIXELS),In=g.getParameter(N.UNPACK_SKIP_ROWS),ri=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,we),g.pixelStorei(N.UNPACK_SKIP_ROWS,qe),g.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye);const ki=E.isDataArrayTexture||E.isData3DTexture,ft=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Rt=z.get(E),oi=z.get(U),xt=z.get(Rt.__renderTarget),ci=z.get(oi.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Oi=0;Oi<Me;Oi++)ki&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(E).__webglTexture,V,Ye+Oi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(U).__webglTexture,me,Lt+Oi)),N.blitFramebuffer(we,qe,xe,pe,Se,ot,xe,pe,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||z.has(E)){const Rt=z.get(E),oi=z.get(U);g.bindFramebuffer(N.READ_FRAMEBUFFER,D),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let xt=0;xt<Me;xt++)ki?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,V,Ye+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rt.__webglTexture,V),ft?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oi.__webglTexture,me,Lt+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oi.__webglTexture,me),V!==0?N.blitFramebuffer(we,qe,xe,pe,Se,ot,xe,pe,N.COLOR_BUFFER_BIT,N.NEAREST):ft?N.copyTexSubImage3D(_e,me,Se,ot,Lt+xt,we,qe,xe,pe):N.copyTexSubImage2D(_e,me,Se,ot,we,qe,xe,pe);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(_e,me,Se,ot,Lt,xe,pe,Me,pt,qt,vt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(_e,me,Se,ot,Lt,xe,pe,Me,pt,vt.data):N.texSubImage3D(_e,me,Se,ot,Lt,xe,pe,Me,pt,qt,vt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Se,ot,xe,pe,pt,qt,vt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Se,ot,vt.width,vt.height,pt,vt.data):N.texSubImage2D(N.TEXTURE_2D,me,Se,ot,xe,pe,pt,qt,vt);g.pixelStorei(N.UNPACK_ROW_LENGTH,Jt),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),g.pixelStorei(N.UNPACK_SKIP_ROWS,In),g.pixelStorei(N.UNPACK_SKIP_IMAGES,ri),me===0&&U.generateMipmaps&&N.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(E){z.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),g.unbindTexture()},this.resetState=function(){q=0,W=0,te=null,g.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function vh(a,e){if(e===iu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Zo||e===td){let t=a.getIndex();if(t===null){const s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Zo)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Nc(a){const e=new Map,t=new Map,n=a.clone();return Pd(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Pd(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)Pd(a.children[n],e.children[n],t)}class ex extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ax(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new Mh(t,Je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mh(t,Je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new _x(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Xs.extractUrlBase(e);r=Xs.resolveURL(l,this.path)}else r=Xs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new _d(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ld){try{r[Je.KHR_BINARY_GLTF]=new xx(e)}catch(d){i&&i(d);return}s=JSON.parse(r[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ix(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case Je.KHR_MATERIALS_UNLIT:r[d]=new ix;break;case Je.KHR_DRACO_MESH_COMPRESSION:r[d]=new vx(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:r[d]=new Mx;break;case Je.KHR_MESH_QUANTIZATION:r[d]=new Sx;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function tx(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function Pt(a,e,t){const n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nx{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Op(h),l.distance=d;break;case"spot":l=new Up(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Un(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class ix{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],dn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}}class sx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class ax{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(s,s)}return Promise.all(i)}}class rx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class cx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class lx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class hx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(s[0],s[1],s[2],dn),Promise.all(i)}}class dx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class fx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(s[0],s[1],s[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(i)}}class ux{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class px{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class mx{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class gx{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class bx{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class Mh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):r.ready.then(function(){const u=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class _x{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,u=[];for(const b of d){const M=new We,m=new L,p=new Qt,v=new L(1,1,1),R=new ld(b.geometry,b.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),R.setMatrixAt(y,M.compose(m,p,v));let x=null;for(const y in c)if(y==="_COLOR_0"){const w=c[y];R.instanceColor=new $a(w.array,w.itemSize,w.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(x===null){const C=R.geometry;x=new wt,x.name=C.name;for(const _ in C.attributes)x.setAttribute(_,C.attributes[_]);for(const _ in C.morphAttributes)x.morphAttributes[_]=C.morphAttributes[_];C.index!==null&&x.setIndex(C.index),x.morphTargetsRelative=C.morphTargetsRelative;for(const _ of C.groups)x.addGroup(_.start,_.count,_.materialIndex);C.boundingBox!==null&&(x.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(x.boundingSphere=C.boundingSphere.clone()),x.drawRange.start=C.drawRange.start,x.drawRange.count=C.drawRange.count,x.userData=Object.assign({},C.userData),R.geometry=x}const w=c[y];x.setAttribute(y,new $a(w.array,w.itemSize,w.normalized))}Mt.prototype.copy.call(R,b),this.parser.assignFinalMaterial(R),u.push(R)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Ld="glTF",Is=12,Sh={JSON:1313821514,BIN:5130562};class xx{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ld)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,s=new DataView(e,Is);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Sh.JSON){const l=new Uint8Array(e,Is+r,o);this.content=n.decode(l)}else if(c===Sh.BIN){const l=Is+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const d=sc[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=sc[h]||h.toLowerCase();if(r[h]!==void 0){const f=n.accessors[e.attributes[h]],u=hs[f.componentType];l[d]=u.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const b in u.attributes){const M=u.attributes[b],m=c[b];m!==void 0&&(M.normalized=m)}d(u)},o,l,dn,f)})})}}class Mx{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Sx{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Id extends bs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,b=e*l,M=b-l,m=-2*u+3*f,p=u-f,v=1-m,R=p-f+d;for(let x=0;x!==o;x++){const y=r[M+x+o],w=r[M+x+c]*h,C=r[b+x+o],_=r[b+x]*h;s[x]=v*y+R*w+m*C+p*_}return s}}const yx=new Qt;class Ex extends Id{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return yx.fromArray(s).normalize().toArray(s),s}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:At,9729:Nt,9984:Kh,9985:ka,9986:Os,9987:ti},Eh={33071:On,33648:qa,10497:Ni},to={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wx={CUBICSPLINE:void 0,LINEAR:Ys,STEP:Js},no={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tx(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Lc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),a.DefaultMaterial}function Ii(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ax(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;r.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],f=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function Rx(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cx(a){let e;const t=a.extensions&&a.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+io(t.attributes):e=a.indices+":"+io(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+io(a.targets[n]);return e}function io(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function ac(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Px(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Lx=new We;class Ix{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Dp(this.options.manager):this.textureLoader=new zp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _d(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ii(s,o,i),Un(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Xs.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=to[i.type],o=hs[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new Ut(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],c=to[i.type],l=hs[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let M,m;if(u&&u!==d){const p=Math.floor(f/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let R=t.cache.get(v);R||(M=new l(o,p*u,i.count*u/h),R=new $u(M,u/h),t.cache.add(v,R)),m=new Ec(R,c,f%u/h,b)}else o===null?M=new l(i.count*c):M=new l(o,f,i.count*c),m=new Ut(M,c,b);if(i.sparse!==void 0){const p=to.SCALAR,v=hs[i.sparse.indices.componentType],R=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,y=new v(r[1],R,i.sparse.count*p),w=new l(r[2],x,i.sparse.count*c);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,_=y.length;C<_;C++){const T=y[C];if(m.setX(T,w[C*c]),c>=2&&m.setY(T,w[C*c+1]),c>=3&&m.setZ(T,w[C*c+2]),c>=4&&m.setW(T,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[r.sampler]||{};return h.magFilter=yh[f.magFilter]||Nt,h.minFilter=yh[f.minFilter]||ti,h.wrapS=Eh[f.wrapS]||Ni,h.wrapT=Eh[f.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==At&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:r.mimeType});return c=o.createObjectURL(f),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(f,u){let b=f;t.isImageBitmapLoader===!0&&(b=function(M){const m=new kt(M);m.needsUpdate=!0,f(m)}),t.load(Xs.resolveURL(d,s.path),b,void 0,u)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Un(d,r),d.userData.mimeType=r.mimeType||Px(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(r);r=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new dd,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new hd,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Lc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},c=s.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const d=i[Je.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],dn),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Tt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ht);const h=s.alphaMode||no.OPAQUE;if(h===no.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===no.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Xt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ke(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Xt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Xt){const d=s.emissiveFactor;o.emissive=new Le().setRGB(d[0],d[1],d[2],dn)}return s.emissiveTexture!==void 0&&r!==Xt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(l).then(function(){const d=new r(o);return s.name&&(d.name=s.name),Un(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ii(i,d,s),d})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return wh(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Cx(l),d=i[h];if(d)r.push(d.promise);else{let f;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=wh(new wt,l,t),l.mode===mn.TRIANGLE_STRIP?f=f.then(u=>vh(u,td)):l.mode===mn.TRIANGLE_FAN&&(f=f.then(u=>vh(u,Zo))),i[h]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?Tx(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let u=0,b=h.length;u<b;u++){const M=h[u],m=r[u];let p;const v=l[u];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0){const R=s.isSkinnedMesh===!0,x=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");R&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=R&&x?new od(M,v):new Te(M,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===mn.LINES)p=new op(M,v);else if(m.mode===mn.LINE_STRIP)p=new Ac(M,v);else if(m.mode===mn.LINE_LOOP)p=new cp(M,v);else if(m.mode===mn.POINTS)p=new lp(M,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Rx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Un(p,s),m.extensions&&Ii(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let u=0,b=d.length;u<b;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return s.extensions&&Ii(i,d[0],s),d[0];const f=new Et;s.extensions&&Ii(i,f,s),t.associations.set(f,{meshes:e});for(let u=0,b=d.length;u<b;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Fu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d){o.push(d);const f=new We;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],b=i.samplers[u.sampler],M=u.target,m=M.node,p=i.parameters!==void 0?i.parameters[b.input]:b.input,v=i.parameters!==void 0?i.parameters[b.output]:b.output;M.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(b),h.push(M))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],b=d[2],M=d[3],m=d[4],p=[];for(let R=0,x=f.length;R<x;R++){const y=f[R],w=u[R],C=b[R],_=M[R],T=m[R];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,w,C,_,T);if(A)for(let P=0;P<A.length;P++)p.push(A[P])}const v=new ec(s,void 0,p);return Un(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,Lx)});for(let u=0,b=d.length;u<b;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,b=d[0];h.pivot=new L().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new cd:l.length>1?h=new Et:l.length===1?h=l[0]:h=new Mt,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=r),Un(h,s),s.extensions&&Ii(n,h,s),s.matrix!==void 0){const d=new We;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Et;n.name&&(s.name=i.createUniqueName(n.name)),Un(s,n),n.extensions&&Ii(t,s,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){const f=c[h];f.parent!==null?s.add(Nc(f)):s.add(f)}const l=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof hn||f instanceof kt)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}mi[s.path]===mi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(mi[s.path]){case mi.weights:h=ea;break;case mi.rotation:h=ta;break;case mi.translation:case mi.scale:h=tr;break;default:switch(n.itemSize){case 1:h=ea;break;case 2:case 3:default:h=tr;break}break}const d=i.interpolation!==void 0?wx[i.interpolation]:Ys,f=this._getArrayFromAccessor(n);for(let u=0,b=c.length;u<b;u++){const M=new h(c[u]+"."+mi[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),r.push(M)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ac(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ta?Ex:Id;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Dx(a,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=ac(hs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,b=f.max;if(u!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(b[2]))),f.normalized){const M=ac(hs[f.componentType]);c.multiplyScalar(M)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Xn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function wh(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(const r in n){const o=sc[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Ze.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Un(a,e),Dx(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ax(a,e.targets,t):a})}var Fx=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),R=0;R<p.length;++R){var x=p.charCodeAt(R);v[R]=x>96?x-97:x>64?x-39:x+4}for(var y=0,R=0;R<p.length;++R)v[y++]=v[R]<60?n[v[R]]:(v[R]-60)*64+v[++R];return v.buffer.slice(0,y)}function c(p,v,R,x,y,w,C){var _=p.exports.sbrk,T=x+3&-4,A=_(T*y),P=_(w.length),I=new Uint8Array(p.exports.memory.buffer);I.set(w,P);var O=v(A,x,y,P,w.length);if(O==0&&C&&C(A,T,y),R.set(I.subarray(A,A+x*y)),_(A-_(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(R){var x=R.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function b(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),R=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(R),y=d.length;y<p;++y)d[y]=u(x);for(var y=p;y<d.length;++y)d[y].object.postMessage({});d.length=p,URL.revokeObjectURL(x)}function M(p,v,R,x,y){for(var w=d[0],C=1;C<d.length;++C)d[C].pending<w.pending&&(w=d[C]);return new Promise(function(_,T){var A=new Uint8Array(R),P=++f;w.pending+=p,w.requests[P]={resolve:_,reject:T},w.object.postMessage({id:P,count:p,size:v,source:A,mode:x,filter:y},[A.buffer])})}function m(p){var v=p.data;self.ready.then(function(R){if(!v.id)return self.close();try{var x=new Uint8Array(v.count*v.size);c(R,R.exports[v.mode],x,v.count,v.size,v.source,R.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:r,supported:!0,useWorkers:function(p){b(p)},decodeVertexBuffer:function(p,v,R,x,y){c(s,s.exports.meshopt_decodeVertexBuffer,p,v,R,x,s.exports[l[y]])},decodeIndexBuffer:function(p,v,R,x){c(s,s.exports.meshopt_decodeIndexBuffer,p,v,R,x)},decodeIndexSequence:function(p,v,R,x){c(s,s.exports.meshopt_decodeIndexSequence,p,v,R,x)},decodeGltfBuffer:function(p,v,R,x,y,w){c(s,s.exports[h[y]],p,v,R,x,s.exports[l[w]])},decodeGltfBufferAsync:function(p,v,R,x,y){return d.length>0?M(p,v,R,h[x],l[y]):r.then(function(){var w=new Uint8Array(p*v);return c(s,s.exports[h[x]],w,p,v,R,s.exports[l[y]]),w})}}})();const Nx=["Casual_Male","Casual2_Male","Casual3_Male","Casual_Female","Casual2_Female","Casual3_Female","Casual_Bald","OldClassy_Male"],Th="Casual_Male",Ux={Casual_Male:()=>li(()=>import("./Casual_Male-odZSvc4n.js"),[]),Casual2_Male:()=>li(()=>import("./Casual2_Male-BDNM8-fP.js"),[]),Casual3_Male:()=>li(()=>import("./Casual3_Male-3zgZ0eqd.js"),[]),Casual_Female:()=>li(()=>import("./Casual_Female-ygpoOeGi.js"),[]),Casual2_Female:()=>li(()=>import("./Casual2_Female-BjwpVeB-.js"),[]),Casual3_Female:()=>li(()=>import("./Casual3_Female-BB1UIXSs.js"),[]),Casual_Bald:()=>li(()=>import("./Casual_Bald-DFJdxqqo.js"),[]),OldClassy_Male:()=>li(()=>import("./OldClassy_Male-DyF2d6q_.js"),[])},Uc=["skin","chest","arm","hand","leg","foot","face","hair","shirt","shirtFront","sleeve","pants","pantsLow","belt","detail","hat"],kx=1.75,ze={idle:"Idle",walk:"Walk",carry:"Walk_Carry",run:"Run",sit:"SitDown",stand:"StandUp",cheer:"Victory",jump:"Jump",sad:"Defeat",pick:"PickUp",swing:"SwordSlash",punch:"Punch"};function Ox(a){const e=atob(a),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function Dd(){const a=new Uint8Array([120,120,120,255,190,190,190,255,235,235,235,255,255,255,255,255]),e=new sa(a,4,1,en);return e.minFilter=At,e.magFilter=At,e.needsUpdate=!0,e}function Bx(a,e,t){const n=/Shoulder|UpperArm|LowerArm/.test(e),i=/Fist/.test(e),s=/UpperLeg|LowerLeg/.test(e),r=/Foot/.test(e),o=/Head|Neck/.test(e);switch(a){case"Skin":return i?"hand":n?"arm":r?"foot":s?"leg":o?"skin":"chest";case"Shirt":return n?"sleeve":t?"shirtFront":"shirt";case"Pants":return/LowerLeg|Foot/.test(e)?"pantsLow":"pants";case"Face":return"face";case"Hair":return"hair";case"Belt":return"belt";case"Hat":return"hat";default:return"detail"}}async function zx(a,e){var te;const t=(await Ux[e]()).default,n=await a.parseAsync(Ox(t),""),i=n.scene;i.updateMatrixWorld(!0);const s=[];i.traverse(G=>{G.isSkinnedMesh&&s.push(G)});const r=s[0].skeleton,o=r.bones.map(G=>G.name);let c=0,l=0;for(const G of s)c+=G.geometry.attributes.position.count,l+=G.geometry.index.count;const h=new Float32Array(c*3),d=new Float32Array(c*3),f=new Uint16Array(c*4),u=new Float32Array(c*4),b=new Uint8Array(c),M=new Uint32Array(l),m=new L,p=new Uint8Array(c),v=[],R=new Uint16Array(c);let x=0,y=0;for(const G of s){const Z=G.geometry,ee=Z.attributes.position,ye=Z.attributes.normal,ve=Z.attributes.skinIndex,at=Z.attributes.skinWeight,Ie=G.material.name;v.includes(Ie)||v.push(Ie);const Be=v.indexOf(Ie);for(let Y=0;Y<ee.count;Y++){m.fromBufferAttribute(ee,Y),h.set([m.x,m.y,m.z],(x+Y)*3),m.fromBufferAttribute(ye,Y),d.set([m.x,m.y,m.z],(x+Y)*3);let de=0,Ne=-1;for(let oe=0;oe<4;oe++){const Oe=at.getComponent(Y,oe),mt=ve.getComponent(Y,oe);f[(x+Y)*4+oe]=mt,u[(x+Y)*4+oe]=Oe,Oe>Ne&&(Ne=Oe,de=mt)}p[x+Y]=Be,R[x+Y]=de}const j=Z.index;for(let Y=0;Y<j.count;Y++)M[y+Y]=j.getX(Y)+x;x+=ee.count,y+=j.count}const w=new wt;w.setAttribute("position",new Ut(h,3)),w.setAttribute("normal",new Ut(d,3)),w.setAttribute("skinIndex",new yc(f,4)),w.setAttribute("skinWeight",new Ut(u,4)),w.setIndex(new Ut(M,1)),w.computeBoundingSphere();const C=new od(w,new Xt);C.name="body",C.position.copy(s[0].position),C.quaternion.copy(s[0].quaternion),C.scale.copy(s[0].scale);const _=s[0].parent;for(const G of s)(te=G.parent)==null||te.remove(G);_.add(C),i.updateMatrixWorld(!0),C.bind(r,s[0].bindMatrix);const T=new Float32Array(c*3),A=new ln,P=new ln;for(let G=0;G<c;G++)m.fromBufferAttribute(w.attributes.position,G),C.applyBoneTransform(G,m),m.applyMatrix4(C.matrixWorld),T.set([m.x,m.y,m.z],G*3),A.expandByPoint(m),v[p[G]]==="Shirt"&&P.expandByPoint(m);const I=P.getCenter(new L),O=P.getSize(new L),D=new ln,B=new ln;for(let G=0;G<c;G++){const Z=v[p[G]],ee=o[R[G]]??"";m.set(T[G*3],T[G*3+1],T[G*3+2]);const ye=Z==="Shirt"&&m.z>I.z&&Math.abs(m.x-I.x)<O.x*.13&&m.y>P.min.y+O.y*.12;b[G]=Uc.indexOf(Bx(Z,ee,ye)),/Head/.test(ee)&&(Z==="Skin"||Z==="Hair")&&D.expandByPoint(m),Z==="Face"&&B.expandByPoint(m)}const q=new L((D.min.x+D.max.x)/2,D.max.y,(D.min.z+D.max.z)/2),W=B.isEmpty()?q.clone().add(new L(0,-.4,.5)):B.getCenter(new L);return W.z=B.isEmpty()?W.z:B.max.z,{template:{model:e,scene:i,geometry:w,regions:b,headTop:q,headWidth:D.max.x-D.min.x,eyes:W,eyeWidth:Math.max(.3,B.max.x-B.min.x),height:A.max.y-A.min.y},clips:n.animations}}function Ah(a,e,t,n=24){const i=new Md(a),s=i.clipAction(e);s.play();const r=a.getObjectByName(t),o=[];for(let c=0;c<=n;c++)i.setTime(e.duration*c/n),a.updateMatrixWorld(!0),o.push(a.worldToLocal(r.getWorldPosition(new L)));return s.stop(),i.uncacheRoot(a),o}async function Gx(){const a=new ex;a.setMeshoptDecoder(Fx);const e=new Map,t=new Map,n=await Promise.all(Nx.map(h=>zx(a,h)));for(const{template:h,clips:d}of n)if(e.set(h.model,h),h.model===Th)for(const f of d)t.set(f.name,f);const i=e.get(Th),s=Nc(i.scene),r=Ah(s,t.get(ze.sit),"Hips"),o=r[r.length-1],c=h=>{const f=Ah(s,t.get(h),"FootL",32).map(b=>b.z);return(Math.max(...f)-Math.min(...f))*2/t.get(h).duration},l=new gs({vertexColors:!0,gradientMap:Dd()});return{templates:e,clips:t,material:l,sitHip:o,walkSpeed:c(ze.walk),runSpeed:c(ze.run),unitScale:kx/i.height}}const Ua={skin:"#f1c49c",chest:"#f1c49c",arm:"#f1c49c",hand:"#f1c49c",leg:"#f1c49c",foot:"#3a3a44",face:"#2a1a12",hair:"#5a3b22",shirt:"#4a7fd0",shirtFront:"#4a7fd0",sleeve:"#4a7fd0",pants:"#4b4f5c",pantsLow:"#4b4f5c",belt:"#3b2a1c",detail:"#d8d0c0",hat:"#2b2b2b"};function Hx(a){const e=a.colours,t={},n=e.skin??Ua.skin,i=e.shirt??Ua.shirt,s=e.pants??Ua.pants,r={...Ua,skin:n,chest:e.chest??n,arm:e.arm??n,hand:e.hand??n,leg:e.leg??n,shirt:i,shirtFront:e.shirtFront??i,sleeve:e.sleeve??i,pants:s,pantsLow:e.pantsLow??s};for(const o of Uc)t[o]=new Le(e[o]??r[o]);return t}const Rh=new Map;function Gt(a,e=!1){const t=a+e;let n=Rh.get(t);return n||(n=e?new gp({color:a,shininess:90,specular:6710886}):new gs({color:a,gradientMap:Dd()}),Rh.set(t,n)),n}function Vx(a,e,t){const n=new Et,i=e.headWidth;if(a==="sunglasses"){const o=e.eyeWidth*.44,c=o*.6;for(const h of[-1,1]){const d=new Te(new An(o,c,.04),Gt("#101014",!0));d.position.set(h*e.eyeWidth*.3,0,0),n.add(d)}const l=new Te(new An(e.eyeWidth*.75,.035,.035),Gt("#101014"));l.position.y=c*.3,n.add(l);for(const h of[-1,1]){const d=new Te(new An(.03,.035,i*.5),Gt("#101014"));d.position.set(h*(e.eyeWidth*.3+o*.5),c*.3,-i*.25),n.add(d)}return n.position.set(e.eyes.x,e.eyes.y+c*.1,e.eyes.z+.03),n}if(a==="bucketHat"){const o=new Te(new Wt(i*.42,i*.56,i*.42,14),Gt("#efe6cf"));o.position.y=i*.13;const c=new Te(new Wt(i*.565,i*.575,i*.11,14),Gt(t||"#3f7d3a"));c.position.y=-i*.02;const l=new Te(new Wt(i*.6,i*.7,i*.08,16),Gt("#e8dec4"));return l.position.y=-i*.1,n.add(o,c,l),n.position.set(e.headTop.x,e.headTop.y-i*.26,e.headTop.z+.02),n}if(a==="sunHat"){const o=new Te(new Wt(i*.4,i*.5,i*.34,14),Gt("#e9cf86"));o.position.y=i*.1;const c=new Te(new Wt(i*.505,i*.51,i*.08,14),Gt(t||"#c8102e")),l=new Te(new Wt(i*.74,i*.76,i*.05,18),Gt("#e3c676"));return l.position.y=-i*.06,n.add(o,c,l),n.position.set(e.headTop.x,e.headTop.y-i*.22,e.headTop.z),n}if(a==="cap"||a==="helmet"){const o=t||(a==="helmet"?"#1b2a52":"#1d4fb8"),c=new Te(new ms(i*.56,16,10,0,Math.PI*2,0,Math.PI/2),Gt(o,a==="helmet")),l=new Te(new An(i*.7,i*.05,i*.42),Gt(o));if(l.position.set(0,i*.02,i*.6),n.add(c,l),a==="helmet"){const h=new Te(new Pc(i*.42,.025,4,12,Math.PI),Gt("#9aa3b0",!0));h.rotation.x=Math.PI/2,h.position.set(0,-i*.32,i*.15),n.add(h)}return n.position.set(e.headTop.x,e.headTop.y-i*.3,e.headTop.z),n}const s=new Te(new Wt(.03,.03,1.4,5),Gt("#8a6a42"));s.position.y=.7;const r=new Te(new bn(.8,.5),new Xt({map:Wx(),side:Ht}));return r.position.set(.4,1.15,0),n.add(s,r),n}let Ds=null;function Wx(){if(Ds)return Ds;const a=document.createElement("canvas");a.width=64,a.height=40;const e=a.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,64,40),e.fillStyle="#c8102e",e.fillRect(26,0,12,40),e.fillRect(0,14,64,12),Ds=new ar(a),Ds.colorSpace=Tt,Ds}function Fd(){const a=new Et,e=new Te(new Wt(.075,.06,.2,10),Gt("#e8a23a",!0)),t=new Te(new Wt(.078,.076,.04,10),Gt("#fff8ea"));return t.position.y=.12,e.position.y=0,a.add(e,t),a}function Xx(){const a=new Et,e=new Te(new ms(.09,10,6,0,Math.PI*2,0,Math.PI/2),Gt("#d99a4a"));e.position.y=.03;const t=new Te(new Wt(.095,.095,.035,10),Gt("#6b3a1e")),n=new Te(new Wt(.09,.085,.035,10),Gt("#d99a4a"));return n.position.y=-.035,a.add(e,t,n),a}class zs{constructor(e,t,n=!1){ne(this,"root",new Et);ne(this,"model");ne(this,"mesh");ne(this,"mixer");ne(this,"bones",{});ne(this,"current","");ne(this,"actions",new Map);ne(this,"held",null);ne(this,"heldKind",null);ne(this,"cpu",null);ne(this,"template");ne(this,"accessories",new Map);ne(this,"heading",0);ne(this,"y",0);this.kit=e,this.look=t;const i=e.templates.get(t.model);this.template=i,this.model=Nc(i.scene),this.model.traverse(l=>{l.isBone&&(this.bones[l.name]=l)}),this.mesh=this.model.getObjectByName("body");const s=new wt;s.setIndex(i.geometry.index);for(const[l,h]of Object.entries(i.geometry.attributes))s.setAttribute(l,h);s.boundingSphere=i.geometry.boundingSphere;const r=Hx(t),o=new Float32Array(i.regions.length*3);for(let l=0;l<i.regions.length;l++){const h=r[Uc[i.regions[l]]];o[l*3]=h.r,o[l*3+1]=h.g,o[l*3+2]=h.b}s.setAttribute("color",new Ut(o,3)),this.mesh.geometry=s,this.mesh.material=e.material,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1;const c=e.unitScale*(t.height??1);this.model.scale.setScalar(c),this.root.add(this.model),this.model.updateMatrixWorld(!0);for(const l of t.accessories??[]){const h=Vx(l,i,t.accent??"");this.model.add(h),h.updateMatrixWorld(!0);const d=l==="flag"?this.bones.FistR:this.bones.Head;l==="flag"&&(h.position.copy(this.model.worldToLocal(this.bones.FistR.getWorldPosition(new L))),h.scale.setScalar(1/c),h.updateMatrixWorld(!0)),d.attach(h),h.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),this.accessories.set(l,h)}if(this.mixer=new Md(this.model),n){const l=new Te(s.clone(),e.material);l.geometry.deleteAttribute("skinIndex"),l.geometry.deleteAttribute("skinWeight"),this.mesh.visible=!1,this.mesh.parent.add(l),l.position.copy(this.mesh.position),l.quaternion.copy(this.mesh.quaternion),l.scale.copy(this.mesh.scale),l.castShadow=!0,this.cpu={mesh:l,scratch:new L}}}action(e){let t=this.actions.get(e);return t||(t=this.mixer.clipAction(this.kit.clips.get(e)),this.actions.set(e,t)),t}play(e,t={}){if(this.current===e){t.timeScale!==void 0&&(this.action(e).timeScale=t.timeScale);return}const n=this.action(e);n.reset(),n.setLoop(t.once?Yo:ed,1/0),n.clampWhenFinished=!!t.once,n.timeScale=t.timeScale??1,t.startAt!==void 0&&(n.time=t.startAt*n.getClip().duration);const i=this.current?this.action(this.current):null,s=t.fade??.25;i&&s>0?(n.play(),i.crossFadeTo(n,s,!1)):(i&&i.stop(),n.play()),this.current=e}finished(){const e=this.current?this.action(this.current):null;return!e||e.loop===Yo&&e.time>=e.getClip().duration-.001}hold(e){var s;if(e===this.heldKind||(this.held&&((s=this.held.parent)==null||s.remove(this.held),this.held=null),this.heldKind=e,!e))return;const t=e==="pint"?Fd():Xx(),n=this.bones.FistR;n.add(t),this.root.updateMatrixWorld(!0);const i=n.getWorldScale(new L).x/this.root.getWorldScale(new L).x;t.scale.setScalar(1/i),t.position.set(0,.06/i,0),this.held=t}update(e,t){if(this.mixer.update(e),t==null||t(),this.cpu){this.model.updateMatrixWorld(!0),this.mesh.skeleton.update();const n=this.mesh.geometry.attributes.position,i=this.cpu.mesh.geometry.attributes.position,s=this.cpu.scratch;for(let r=0;r<n.count;r++)s.fromBufferAttribute(n,r),this.mesh.applyBoneTransform(r,s),i.setXYZ(r,s.x,s.y,s.z);i.needsUpdate=!0,this.cpu.mesh.geometry.computeVertexNormals()}}}const so=a=>a.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);class qx{constructor(e,t){ne(this,"root");ne(this,"el",{});ne(this,"lastSpeech","");ne(this,"speechTimer",0);ne(this,"lastAmbientAt",-1e9);ne(this,"lastInfoAt",-1e9);this.cb=t,this.root=document.createElement("div"),this.root.className="tp-hud",this.root.innerHTML=`
      <div class="tp-top">
        <div class="tp-panel tp-score" aria-label="Arcade score"><span class="tp-label">Score</span><b data-k="score">0</b><span class="tp-combo" data-k="combo">×1</span></div>
        <div class="tp-panel tp-match" aria-label="Match score"><span class="tp-label">Match</span><b data-k="match">—</b><small data-k="matchsub"></small></div>
        <div class="tp-panel tp-needs">
          <div class="tp-need" data-m="bladder"><span>Bladder</span><i><em data-k="bladder"></em></i></div>
          <div class="tp-need" data-m="hunger"><span>Hunger</span><i><em data-k="hunger"></em></i></div>
          <div class="tp-need" data-m="alcohol"><span data-k="sobriety">Sober</span><i><em data-k="alcohol"></em></i></div>
          <div class="tp-pints" aria-label="Pints"><span>Pints</span><b data-k="pints">0</b><small data-k="inhand"></small></div>
          <div class="tp-pints tp-wallet" aria-label="Spent"><span>Spent</span><b data-k="spend">£0</b></div>
        </div>
        <button class="tp-btn tp-end" type="button" data-k="end" aria-label="Call it a day">Call it a day</button>
      </div>
      <div class="tp-bubble hidden" data-k="jb"><b>JB</b><span data-k="speech"></span>
        <div class="tp-round hidden" data-k="round">
          <button type="button" data-choice="pint-2">2 pints</button><button type="button" data-choice="pint-4">4 pints</button><button type="button" data-choice="water">Water</button>
          <small data-k="roundsecs"></small>
        </div>
      </div>
      <div class="tp-toasts" data-k="toasts" aria-live="polite"></div>
      <div class="tp-panel tp-pour hidden" data-k="pour" aria-label="Pour meter"><span class="tp-label">Pour</span><div class="tp-glass"><div class="tp-band" style="bottom:${_i.perfect[0]*100}%;height:${(_i.perfect[1]-_i.perfect[0])*100}%"></div><div class="tp-beer" data-k="beer"></div></div><small>Stop on the line: STOP or Space</small></div>
      <div class="tp-panel tp-tilt hidden" data-k="tilt" aria-label="Tray balance"><span class="tp-label">Tray</span><div class="tp-tilt-bar" data-k="tiltbar"><div class="tp-tilt-dot" data-k="tiltdot"></div></div><small>Z / X or drag to keep it level</small></div>
      <div class="tp-bottom">
        <button class="tp-btn tp-recentre" type="button" data-k="recentre" aria-label="Find Mike">Find Mike</button>
        <div class="tp-panel tp-prompt" data-k="prompt"></div>
        <button class="tp-go" type="button" data-k="action" aria-label="Action">GO</button>
      </div>
      <div class="tp-card" data-k="title">
        <div class="tp-card-head">HOWZAT <span>ARCADE</span></div>
        <p class="tp-sub">A compressed day at the cricket with JB</p>
        <ul>
          <li><b>Walk</b> click or tap the ground · or WASD / arrow keys</li>
          <li><b>Camera</b> drag to pan · wheel or pinch to zoom</li>
          <li><b>Action</b> Space / E / GO: pour, queue, chat, <b>CATCH</b></li>
          <li><b>Tray</b> Z / X or drag the tray gauge to keep it level</li>
        </ul>
        <p>Pour a round at The Twelfth Man, carry it back to JB without spilling, be in your seat for the big moments and catch sixes that drop into the stand. Mind your bladder.</p>
        <button type="button" class="tp-start" data-k="start">Start the day</button>
      </div>
      <div class="tp-card hidden" data-k="results" role="dialog" aria-label="Results"></div>`,e.appendChild(this.root),this.root.querySelectorAll("[data-k]").forEach(s=>{this.el[s.dataset.k]=s}),this.el.action.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),this.cb.onAction()}),this.el.action.addEventListener("click",s=>{s.detail===0&&this.cb.onAction()}),this.el.end.addEventListener("click",()=>this.cb.onCallItADay()),this.el.recentre.addEventListener("click",()=>this.cb.onRecentre()),this.el.start.addEventListener("click",()=>{this.el.title.classList.add("hidden"),this.cb.onStart()}),this.root.querySelectorAll("[data-choice]").forEach(s=>s.addEventListener("click",()=>this.cb.onRoundChoice(s.dataset.choice)));const n=this.el.tiltbar,i=s=>{const r=n.getBoundingClientRect();this.cb.onTrayDrag(Math.max(-1,Math.min(1,(s.clientX-r.left)/r.width*2-1))*-1)};n.addEventListener("pointerdown",s=>{s.stopPropagation(),n.setPointerCapture(s.pointerId),i(s)}),n.addEventListener("pointermove",s=>{n.hasPointerCapture(s.pointerId)&&i(s)}),n.addEventListener("pointerup",()=>this.cb.onTrayDrag(0))}render(e,t){this.el.score.textContent=e.score.toLocaleString("en-GB"),this.el.combo.textContent=`×${e.combo}`,this.el.combo.classList.toggle("hot",e.combo>=3);const n=e.team==="England"?"ENG":e.team.slice(0,3).toUpperCase();if(this.el.match.textContent=`${n} ${e.runs}/${e.wickets}`,this.el.matchsub.textContent=`${e.overs} ov${e.target?` · need ${Math.max(0,e.target-e.runs)}`:""} · ${e.clock}`,this.meter("bladder",e.bladder,e.warnings.bladder),this.meter("hunger",e.hunger,e.warnings.hunger),this.meter("alcohol",e.alcohol,e.warnings.alcohol),this.el.sobriety.textContent=e.sobriety,this.el.pints.textContent=e.pintsDrunk.toFixed(1),this.el.inhand.textContent=e.holding>0?`${e.holding} in hand`:"",this.el.spend.textContent=`£${e.spend.toFixed(2)}`,e.speech&&e.speech!==this.lastSpeech){this.lastSpeech=e.speech;const c=performance.now();(e.speechImportant||c-this.lastAmbientAt>=oa.ambientSpeechGap*1e3)&&(e.speechImportant||(this.lastAmbientAt=c),this.speechTimer=c+oa.speechSeconds*1e3,this.el.speech.textContent=e.speech)}const i=this.el.jb;i.classList.toggle("hidden",!e.roundChoice&&performance.now()>this.speechTimer);const s=this.root.getBoundingClientRect(),r=Math.max(110,Math.min(s.width-110,t.visible?t.x:s.width*.7)),o=Math.max(140,Math.min(s.height-120,t.visible?t.y:s.height*.55));i.style.left=`${r}px`,i.style.top=`${o}px`,this.el.round.classList.toggle("hidden",!e.roundChoice),this.el.roundsecs.textContent=e.roundChoice?`${e.roundChoiceSeconds}s, then one each`:"",this.el.prompt.textContent=e.prompt.label,this.el.prompt.classList.toggle("urgent",e.prompt.urgent),this.el.action.textContent=e.prompt.label==="CATCH!"?"CATCH!":e.pour?"STOP":"GO",this.el.action.classList.toggle("ready",e.prompt.enabled),this.el.action.classList.toggle("urgent",e.prompt.urgent),this.el.pour.classList.toggle("hidden",!e.pour),e.pour&&(this.el.beer.style.height=`${Math.round(e.pour.level*100)}%`),this.el.tilt.classList.toggle("hidden",e.tilt===null),e.tilt!==null&&(this.el.tiltdot.style.left=`${50+Math.max(-1,Math.min(1,e.tilt))*46}%`,this.el.tiltdot.classList.toggle("danger",Math.abs(e.tilt)>.7))}meter(e,t,n){const i=this.el[e];i.style.width=`${Math.max(0,Math.min(100,t))}%`,i.parentElement.parentElement.classList.toggle("warn",n||t>=80)}feedback(e){if(e.type==="award")this.toast(`${e.award.label} +${e.award.points}${e.award.combo>1?` (×${e.award.combo})`:""}`,e.award.kind==="catch"?"big":"good");else if(e.type==="purchase")this.toast(e.text,"info");else if(e.type==="toast"){const t=/missed|roar/i.test(e.text),n=performance.now();if(t&&n-this.lastInfoAt<oa.missedToastGap*1e3)return;t&&(this.lastInfoAt=n),this.toast(e.text,"info")}else e.type==="six"&&e.ball&&this.toast("SIX! It’s coming into the stand!","big")}toast(e,t){const n=document.createElement("div");for(n.className=`tp-toast ${t}`,n.textContent=e,this.el.toasts.prepend(n);this.el.toasts.children.length>oa.maxToasts;)this.el.toasts.lastElementChild.remove();window.setTimeout(()=>n.remove(),t==="big"?3200:2400)}showResults(e){const t=this.el.results;t.innerHTML=`
      <div class="tp-card-head">${so(e.title)}</div>
      <p class="tp-sub">${so(e.matchResult)}</p>
      <div class="tp-total"><span>Final score</span><b>${e.total.toLocaleString("en-GB")}</b></div>
      <dl>
        <dt>Arcade points</dt><dd>${e.arcadePoints.toLocaleString("en-GB")}</dd>
        <dt>Day rating bonus (${e.dayRating} × 5)</dt><dd>${e.dayBonus.toLocaleString("en-GB")}</dd>
        <dt>Pints delivered</dt><dd>${e.delivered}</dd>
        <dt>Catches</dt><dd>${e.catches}</dd>
        <dt>Spills</dt><dd>${e.spills}</dd>
        <dt>Best combo</dt><dd>×${e.bestCombo}</dd>
      </dl>
      <ul class="tp-reasons">${e.reasons.map(n=>`<li>${so(n)}</li>`).join("")}</ul>
      <button type="button" class="tp-start" data-restart>Play again</button>`,t.classList.remove("hidden"),t.querySelector("[data-restart]").addEventListener("click",()=>this.cb.onRestart())}}const Vt=gn;function ur(a){let e=a>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Kx=["bar","food","toilet"],ao=a=>({x:a.x,z:a.z-.75});class jx{constructor(e,t){ne(this,"agents",[]);ne(this,"jb");ne(this,"rng");ne(this,"seats");ne(this,"taken",new Set);ne(this,"nextId",1);ne(this,"jbHeld",0);this.nav=t,this.rng=ur(e^40503),this.seats=Yd().filter(i=>Ft(i,ei)>.6&&Ft(i,Nh)>.6);const n=this.seats.map(i=>({seat:i,w:this.rng()*(1.6-Math.min(1,Math.abs(i.x)/20))})).sort((i,s)=>s.w-i.w);for(const{seat:i}of n.slice(0,Vt.seatedAtStart))this.sit(this.spawn(ao(i)),i);for(let i=0;i<Vt.wanderers;i++){const s=this.spawn(this.randomConcoursePoint());s.goal="wander",s.mode="stand",s.wait=this.rng()*Vt.wanderPause[1]}this.jb={...this.blank(-1,{...ei}),goal:"jb"},this.jb.mode="seated",this.jb.heading=Math.PI}blank(e,t){return{id:e,look:e,pos:t,heading:Math.PI,mode:"stand",moving:0,path:[],patron:null,facility:null,seat:null,goal:null,speed:Vt.walkSpeed*(.85+.3*this.rng()),wait:0,carry:null,cheerDelay:0,cheerLeft:0,cheerStand:!1,repath:0}}spawn(e){const t=this.blank(this.nextId++,{...e});return this.agents.push(t),t}sit(e,t){e.seat=t,this.taken.add(t.id),e.pos={x:t.x,z:t.z},e.mode="seated",e.heading=Math.PI,e.path=[],e.goal=null,e.moving=0,e.carry=null}stand(e){e.seat&&(this.taken.delete(e.seat.id),e.pos=ao(e.seat),e.seat=null),e.mode="stand"}randomConcoursePoint(){const e=[...on.tables.map(n=>({x:n.x+1.6,z:n.z})),...on.bins.map(n=>({x:n.x,z:n.z-1.2})),{x:-8,z:11.5},{x:8,z:11.5},{x:0,z:12},{x:-16,z:12},{x:16,z:12},{x:-20,z:13},{x:20,z:16}],t=e[Math.floor(this.rng()*e.length)];return this.nav.snap({x:t.x+(this.rng()-.5)*2,z:t.z+(this.rng()-.5)*1.5})}freeSeatNear(e){let t=null,n=1/0;for(let i=0;i<24;i++){const s=this.seats[Math.floor(this.rng()*this.seats.length)];if(this.taken.has(s.id))continue;const r=Ft(s,e)+this.rng()*8;r<n&&(n=r,t=s)}return t}react(e,t){const n=Vt.reactions[e],i=t??{x:(this.rng()-.5)*(De.maxX-De.minX)*.7,z:De.back*.5};let s=0;for(const o of this.agents){if(o.mode!=="seated"&&o.mode!=="stand"||o.cheerLeft>0)continue;const c=Ft(o.pos,i);c>n.radius||this.rng()>n.chance||(o.cheerDelay=c*n.ripple+this.rng()*.25,o.cheerLeft=n.duration[0]+this.rng()*(n.duration[1]-n.duration[0]),o.cheerStand=n.stand,s++)}const r=this.jb;return(r.mode==="seated"||r.mode==="stand")&&(r.cheerDelay=.15,r.cheerLeft=n.duration[1],r.cheerStand=n.stand),s}update(e,t){this.syncPatrons(t);for(const n of this.agents)this.updateAgent(n,e,t);this.updateJB(e,t)}syncPatrons(e){const t=new Map;for(const i of Kx){const s=oc(e,i);for(const r of[...s.serving,...s.waiting])r.startsWith("fan-")&&t.set(r,i)}for(const i of this.agents){if(!i.patron||t.has(i.patron))continue;const s=i.facility;if(i.patron=null,i.facility=null,s==="toilet"&&Ft(i.pos,tt.toilet.counter)<2.5&&this.rng()<Vt.toiletStayInsideChance){i.mode="gone",i.goal=null,i.path=[],i.carry=null;continue}i.carry=s==="bar"?"pint":s==="food"?"burger":null;const r=this.rng()<Vt.backToSeatChance?this.freeSeatNear(i.pos):null;r?(i.goal="seat",i.seat=r,this.taken.add(r.id),this.go(i,ao(r))):(i.goal="gate",this.go(i,Bi[Math.floor(this.rng()*Bi.length)]))}const n=new Set(this.agents.map(i=>i.patron).filter(Boolean));for(const[i,s]of t){if(n.has(i))continue;const r=this.recruit(s);if(!r)break;r.patron=i,r.facility=s,r.goal="queue",r.carry=null,r.repath=0}}recruit(e){const t=this.agents.filter(s=>s.mode==="seated"&&s.cheerLeft<=0);if(t.length>20&&this.rng()<Vt.fromSeatChance){const s=t[Math.floor(this.rng()*t.length)];return this.stand(s),s}const n=this.agents.find(s=>s.mode==="gone");if(n){const s=Bi[Math.floor(this.rng()*Bi.length)];return n.pos={...s},n.mode="stand",n.path=[],n.look=this.nextId++,n}if(this.agents.length<Vt.maxAgents){const s=Bi[e==="toilet"?1:e==="bar"?0:Math.floor(this.rng()*2)];return this.spawn(s)}const i=this.agents.find(s=>s.goal==="wander");if(i)return i;if(t.length){const s=t[Math.floor(this.rng()*t.length)];return this.stand(s),s}return null}go(e,t){e.path=this.nav.findPath(e.pos,t)??[t],e.mode="walk"}stepAlong(e,t,n){let i=n*t,s=0;for(;i>1e-5&&e.path.length;){const r=e.path[0],o=r.x-e.pos.x,c=r.z-e.pos.z,l=Math.hypot(o,c);if(l<.02){e.path.shift();continue}const h=Math.min(l,i);e.pos={x:e.pos.x+o/l*h,z:e.pos.z+c/l*h},e.heading=Math.atan2(o,c),s+=h,i-=h}return s}updateAgent(e,t,n){if(e.cheerDelay>0?e.cheerDelay=Math.max(0,e.cheerDelay-t):e.cheerLeft>0&&(e.cheerLeft=Math.max(0,e.cheerLeft-t)),e.mode==="gone"||e.mode==="seated"){e.moving=0;return}let i=0;if(e.goal==="queue"&&e.patron&&e.facility){const s=fo(n,e.facility,e.patron)??tt[e.facility].counter;Ft(e.pos,s)>2.2?(e.repath-=t,(!e.path.length||e.repath<=0)&&(e.path=this.nav.findPath(e.pos,s)??[s],e.repath=1.5),i=this.stepAlong(e,t,e.speed)):(e.path=[s],i=this.stepAlong(e,t,Vt.shuffleSpeed),i<1e-4&&(e.heading=Math.atan2(-tt[e.facility].queueDir.x,-tt[e.facility].queueDir.z))),e.mode=i>1e-4?"walk":"stand"}else e.goal==="seat"||e.goal==="gate"?(i=this.stepAlong(e,t,e.speed),e.path.length||(e.goal==="seat"&&e.seat?this.sit(e,e.seat):(e.mode="gone",e.goal=null,e.carry=null))):e.goal==="wander"?e.path.length?(i=this.stepAlong(e,t,e.speed*.8),e.mode="walk",e.path.length||(e.mode="stand",e.wait=Vt.wanderPause[0]+this.rng()*(Vt.wanderPause[1]-Vt.wanderPause[0]))):(e.wait-=t)<=0&&this.go(e,this.randomConcoursePoint()):(e.goal="wander",e.wait=1);e.moving=t>0?Math.min(1.4,i/t/Vt.walkSpeed):0}updateJB(e,t){const n=this.jb,i=t.state.jb;n.cheerDelay>0?n.cheerDelay=Math.max(0,n.cheerDelay-e):n.cheerLeft>0&&(n.cheerLeft=Math.max(0,n.cheerLeft-e));const s=i.activity;let r,o=!1;if(i.departed)r=Bi[1];else if(s&&s.kind!=="eating")r=fo(t,s.facility,"jb")??tt[s.facility].counter;else if((s==null?void 0:s.kind)==="eating")r={x:tt.food.zone.maxX+.8,z:15.5};else{const d=i.travelling?i.travelling.to:i.place;d==="seats"?(r=ei,o=!0):r={x:tt[d].counter.x+2.2,z:tt[d].counter.z-2.5}}if(n.mode==="seated"&&o){n.moving=0;return}n.mode==="seated"&&(n.mode="stand",n.pos={x:ei.x,z:ei.z-.75});const c=o?{x:ei.x,z:ei.z-.75}:r;n.repath-=e,Ft(n.pos,c)>.05&&(n.repath<=0||!n.path.length)&&(n.path=this.nav.findPath(n.pos,c)??[c],n.repath=1.2);const l=!!s&&s.kind!=="eating"&&Ft(n.pos,c)<2.2,h=this.stepAlong(n,e,l?Vt.shuffleSpeed:Vt.jbErrandSpeed);n.moving=e>0?Math.min(2.4,h/e/Vt.walkSpeed):0,n.mode=h>1e-4?"walk":"stand",n.carry=(s==null?void 0:s.kind)==="eating"?"burger":i.carriedPints>0||i.heldPints>0||i.drinking>.01?"pint":null,i.travelling&&Ft(n.pos,c)>.5&&this.jbHeld<60?(wf(t),this.jbHeld+=e):this.jbHeld=0,o&&Ft(n.pos,c)<.06?(n.pos={...ei},n.mode="seated",n.heading=Math.PI,n.path=[]):s&&s.kind!=="eating"&&h<1e-4&&(n.heading=Math.atan2(-tt[s.facility].queueDir.x,-tt[s.facility].queueDir.z))}visibleQueue(e){return this.agents.filter(t=>t.goal==="queue"&&t.facility===e).length}}const pr=(()=>{let a=null;return()=>{if(a)return a;const e=new Uint8Array([150,150,150,255,205,205,205,255,245,245,245,255,255,255,255,255]);return a=new sa(e,4,1,en),a.minFilter=a.magFilter=At,a.needsUpdate=!0,a}})(),Ch=new Map;function be(a){let e=Ch.get(a);return e||(e=new gs({color:a,gradientMap:pr()}),Ch.set(a,e)),e}function rs(a,e,t,n){const i=document.createElement("canvas");i.width=a,i.height=e,t(i.getContext("2d"));const s=new ar(i);return s.colorSpace=Tt,s.anisotropy=4,n&&(s.wrapS=s.wrapT=Ni,s.repeat.set(...n)),s}function Wa(a){return new gs({map:a,gradientMap:pr()})}function Ve(a,e,t,n,i,s,r,o=!0){const c=new Te(new An(a,e,t),n);return c.position.set(i,s,r),c.castShadow=o,c.receiveShadow=!0,c}function an(a,e,t,n,i,s,r,o=12){const c=new Te(new Wt(a,e,t,o),n);return c.position.set(i,s,r),c.castShadow=!0,c.receiveShadow=!0,c}function Jx(a,e,t,n=512,i=128,s='bold 64px "Trebuchet MS", "Segoe UI", sans-serif',r="#ffffff"){return rs(n,i,o=>{var l;o.fillStyle=e,o.fillRect(0,0,n,i),o.strokeStyle=r,o.lineWidth=10,o.strokeRect(8,8,n-16,i-16),o.fillStyle=t,o.font=s,o.textAlign="center",o.textBaseline="middle";let c=parseInt(((l=/(\d+)px/.exec(s))==null?void 0:l[1])??"64",10);for(;o.measureText(a).width>n-50&&c>12;)c-=2,o.font=s.replace(/\d+px/,`${c}px`);o.fillText(a,n/2,i/2+4)})}function ts(a,e,t,n,i){const s=new Te(new An(n,i,.12),[be(e),be(e),be(e),be(e),Wa(Jx(a,e,t,512,Math.round(512*i/n))),be(e)]);return s.castShadow=!0,s}function Nd(a,e,t=8){return rs(256,64,n=>{for(let i=0;i<t;i++)n.fillStyle=i%2?e:a,n.fillRect(i*256/t,0,256/t+1,64);n.fillStyle=a;for(let i=0;i<t;i++)n.beginPath(),n.arc((i+.5)*256/t,64,256/t/2,Math.PI,0),n.fill()})}function Ph(a,e,t,n){const i=new bn(a,e),s=new Te(i,new gs({map:Nd(t,n,Math.round(a*1.4)),gradientMap:pr(),side:Ht}));return s.castShadow=!0,s.receiveShadow=!0,s}function ro(a,e,t,n,i){const s=new Et;s.add(an(.18*n,.25*n,1.6*n,be("#7a5434"),0,.8*n,0,7));const r=["#4f9e45","#5cb04e","#3f8a3c","#6cbf55"];for(let o=0;o<3;o++){const c=new Te(new cr((1.1-o*.15)*n,1),be(r[Math.floor(i()*r.length)]));c.position.set((i()-.5)*.8*n,(1.9+o*.55)*n,(i()-.5)*.8*n),c.castShadow=!0,s.add(c)}return s.position.set(a,t,e),s}function Yx(a,e){const t=new Et,n=be("#c98a4b"),i=be("#8b5a32");t.add(Ve(2.2,.08,.9,n,0,.75,0));for(const r of[-1,1])t.add(Ve(2.2,.06,.3,n,0,.45,r*.68)),t.add(Ve(.08,.75,1.5,i,r*.9,.38,0));const s=new Te(new or(1.4,.5,8,1,!0),new gs({map:Nd("#ffffff","#e8503a",8),gradientMap:pr(),side:Ht}));return s.position.y=2.3,s.castShadow=!0,t.add(s,an(.04,.04,2.2,be("#dddddd"),0,1.15,0,5)),t.position.set(a,0,e),t}function oo(a,e,t){const n=new Et,i=["#c8102e","#ffffff","#1f4fbf","#f2b632","#2f8f4e"],s=Math.hypot(e.x-a.x,e.z-a.z),r=Math.floor(s/.6),o=new wt().setAttribute("position",new it([-.2,0,0,.2,0,0,0,-.35,0],3));o.computeVertexNormals();for(let c=0;c<=r;c++){const l=c/r,h=Math.sin(l*Math.PI)*.45,d=new Te(o,new Xt({color:i[c%i.length],side:Ht}));d.position.set(a.x+(e.x-a.x)*l,t-h,a.z+(e.z-a.z)*l),d.rotation.y=Math.atan2(e.x-a.x,e.z-a.z)+Math.PI/2,n.add(d)}return n}function Zx(a){const e=new Et,t=[],n=[],i=ur(4242),s=-.4*De.rows-.15,r={y:s,centre:{x:0,z:-20},rx:38,rz:18,pitch:{x:0,z:-12},pitchHalfLength:10},o=rs(512,512,S=>{for(let g=0;g<16;g++)S.fillStyle=g%2?"#6cc04f":"#5fb447",S.fillRect(g*32,0,32,512)},[3,3]),c=new Te(new rr(1,64),Wa(o));c.rotation.x=-Math.PI/2,c.scale.set(r.rx+18,r.rz+18,1),c.position.set(r.centre.x,s,r.centre.z),c.receiveShadow=!0,e.add(c);const l=new Te(new bn(400,400),be("#58a843"));l.rotation.x=-Math.PI/2,l.position.set(0,s-.05,-40),e.add(l);const h=new Te(new ls(.985,1,96),new Xt({color:"#ffffff"}));h.rotation.x=-Math.PI/2,h.scale.set(r.rx,r.rz,1),h.position.set(r.centre.x,s+.02,r.centre.z),e.add(h);const d=rs(512,96,S=>{S.fillStyle="#d9c38a",S.fillRect(0,0,512,96),S.fillStyle="#cdb67a";for(let g=0;g<40;g++)S.fillRect(Math.random()*512,Math.random()*96,30,3);S.strokeStyle="#ffffff",S.lineWidth=3;for(const g of[38,474])S.beginPath(),S.moveTo(g,10),S.lineTo(g,86),S.stroke();S.beginPath(),S.moveTo(20,20),S.lineTo(56,20),S.moveTo(20,76),S.lineTo(56,76),S.moveTo(456,20),S.lineTo(492,20),S.moveTo(456,76),S.lineTo(492,76),S.stroke()}),f=new Te(new bn(r.pitchHalfLength*2+2.4,3.2),Wa(d));f.rotation.x=-Math.PI/2,f.position.set(r.pitch.x,s+.03,r.pitch.z),f.receiveShadow=!0,e.add(f);for(const S of[-1,1])for(let g=-1;g<=1;g++)e.add(an(.03,.03,.72,be("#f4e6c0"),r.pitch.x+S*(r.pitchHalfLength-.2),s+.36,r.pitch.z+g*.11,6));const u=["HOWZAT!","Fine Leg Toilets","Beefy’s Burgers","The Twelfth Man","Riverside","JB’s Tab","Owzat Ales","Cow Corner Insurance"];for(let S=0;S<26;S++){const g=Math.PI*(.05+.9*S/25),F=r.centre.x-Math.cos(g)*(r.rx+2.5),z=r.centre.z+Math.sin(g)*(r.rz+2.5);if(z>-2.6)continue;const X=ts(u[S%u.length],["#1f4fbf","#c8102e","#2f8f4e","#f2b632","#2b2f3a"][S%5],"#ffffff",5.4,.8);X.position.set(F,s+.4,z),X.lookAt(r.centre.x,s+.4,r.centre.z),X.rotateY(Math.PI),e.add(X)}for(let S=0;S<9;S++){const g=ts(u[(S+3)%u.length],["#c8102e","#1f4fbf","#2f8f4e"][S%3],"#ffffff",4.2,.75);g.position.set(-19+S*4.75,s+.38,-.9),g.rotation.y=Math.PI,e.add(g)}const b=r.centre.z-r.rz-9,M=new Et;M.add(Ve(18,6,7,be("#f6efe0"),0,3,0)),M.add(Ve(19,.5,8,be("#b8382c"),0,6.2,0));const m=new Te(new or(4.5,2.6,4),be("#b8382c"));m.position.y=7.6,m.rotation.y=Math.PI/4,M.add(m),M.add(Ve(1.4,1.4,.2,be("#ffffff"),0,7.6,3.2));for(let S=-3;S<=3;S++)M.add(Ve(1.2,2,.2,be("#7fb4d8"),S*2.3,3.6,3.55,!1));M.add(Ve(18,.3,2.2,be("#f6efe0"),0,1.4,4.4)),M.position.set(0,s,b-3),e.add(M);const p=document.createElement("canvas");p.width=512,p.height=256;const v=new ar(p);v.colorSpace=Tt;const R=new Et;R.add(Ve(10,5,.6,be("#1d2b22"),0,4.5,0));const x=new Te(new bn(9.2,4.4),new Xt({map:v}));x.position.set(0,4.5,.32),R.add(x),R.add(Ve(.5,2.2,.5,be("#3b3b3b"),-3.5,1.1,0),Ve(.5,2.2,.5,be("#3b3b3b"),3.5,1.1,0)),R.position.set(-27,s,-1),R.rotation.y=2.4,e.add(R);const y=S=>{const g=p.getContext("2d");g.fillStyle="#16231b",g.fillRect(0,0,512,256),g.fillStyle="#ffd23f",g.font='bold 34px "Trebuchet MS", sans-serif',g.textAlign="center",S.slice(0,4).forEach((F,z)=>{g.fillStyle=z===1?"#ffffff":"#ffd23f",g.font=z===1?'bold 64px "Trebuchet MS", sans-serif':'bold 30px "Trebuchet MS", sans-serif',g.fillText(F,256,[48,130,190,236][z])}),v.needsUpdate=!0};y(["RIVERSIDE","0/0","0.0 overs",""]);const w=new Rc(.22,.35,2,6),C=new ld(w,new Qo,1400),_=new Mt;let T=0;const A=["#e8503a","#f2b632","#3aa1d8","#ffffff","#1f4fbf","#56b870","#f07fb0","#c8102e","#2b2f3a"];for(const[S,g]of[[.1,.38],[.62,.9]])for(let F=0;F<5;F++){const z=1.12+F*.035,X=60;for(let se=0;se<=X;se++){const ae=Math.PI*(S+(g-S)*se/X),J=r.centre.x-Math.cos(ae)*r.rx*z,$=r.centre.z-Math.sin(ae)*r.rz*z,re=Ve(r.rx*z*Math.PI*(g-S)/X*1.06,.7,1.7,be(F%2?"#d9d4c7":"#c9c3b4"),J,s+.35+F*.7,$,!1);re.rotation.y=-ae+Math.PI/2,re.castShadow=!1,e.add(re),T<1400&&i()<.85&&(_.position.set(J+(i()-.5)*1.2,s+1.1+F*.7,$),_.rotation.set(0,0,0),_.updateMatrix(),C.setMatrixAt(T,_.matrix),C.setColorAt(T,new Le(A[Math.floor(i()*A.length)])),T++)}}C.count=T,e.add(C);for(let S=0;S<26;S++){const g=Math.PI*(S/25);e.add(ro(r.centre.x-Math.cos(g)*(r.rx+16+i()*6),r.centre.z-Math.sin(g)*(r.rz+14+i()*6),s,2+i()*1.2,i))}const P=De.rows,I=be("#d8d2c4"),O=be("#c4bdac");for(let S=0;S<P;S++){const g=-.4*(P-S),F=S*De.rowDepth,z=Ve(De.maxX-De.minX+2,g+2.2,De.rowDepth,S%2?I:O,0,(g-2.2)/2,F+De.rowDepth/2,!1);e.add(z),t.push(z);const X=na(S);for(const[se,ae]of Uh()){const J=ae-se-.2,$=(se+ae)/2;e.add(Ve(J,.08,.48,be(S%2?"#3f8f4e":"#2f7d44"),$,g+a-.04,X)),e.add(Ve(J,.32,.06,be(S%2?"#3f8f4e":"#2f7d44"),$,g+a+.2,X+.26));for(let re=se+.4;re<=ae-.3;re+=1.6)e.add(Ve(.07,a,.4,be("#55595e"),re,g+a/2,X,!1))}}for(const S of De.aisles){for(let F=0;F<16;F++){const z=De.back*F/16,X=-.4*P+De.rowRise*P*(F+.5)/16,se=Ve(S.half*2,X+2.2,De.back/16+.01,F%2?be("#e6e0d2"):be("#efe9dc"),S.x,(X-2.2)/2,z+De.back/16/2,!1);e.add(se),t.push(se)}e.add(Ve(.06,.9,De.back,be("#f2b632"),S.x-S.half,-.6,De.back/2,!1)),e.add(Ve(.06,.9,De.back,be("#f2b632"),S.x+S.half,-.6,De.back/2,!1))}e.add(Ve(De.maxX-De.minX+2,1.2,.3,be("#ffffff"),0,s+.6+.4,-.15)),e.add(Ve(De.maxX-De.minX+2,.08,.08,be("#2f3e5c"),0,-.4*P+.95,.05));for(const S of[-1,1])e.add(Ve(1,2.4,De.back+.6,be("#c4bdac"),S*(De.maxX+1.5),-1.2,De.back/2));const D=rs(256,256,S=>{S.fillStyle="#e9dfca",S.fillRect(0,0,256,256),S.strokeStyle="#d6cab1",S.lineWidth=4;for(let g=0;g<=4;g++)S.beginPath(),S.moveTo(0,g*64),S.lineTo(256,g*64),S.stroke();for(let g=0;g<4;g++)for(let F=0;F<=2;F++){const z=F*128+g%2*64;S.beginPath(),S.moveTo(z,g*64),S.lineTo(z,g*64+64),S.stroke()}},[24,10]),B=new Te(new bn(50,18),Wa(D));B.rotation.x=-Math.PI/2,B.position.set(0,0,De.back+9),B.receiveShadow=!0,e.add(B),t.push(B);const q=new Te(new bn(120,60),be("#5fae48"));q.rotation.x=-Math.PI/2,q.position.set(0,-.02,40),q.receiveShadow=!0,e.add(q);for(const S of[-1,1]){e.add(Ve(.4,1.1,5.5,be("#b5523b"),S*22.6,.55,22.5)),e.add(Ve(.4,1.1,4,be("#b5523b"),S*22.6,.55,7+De.back-6));for(const g of[10,16.4])e.add(Ve(.5,2.4,.5,be("#2f3e5c"),S*22.6,1.2,g))}e.add(Ve(46,2.6,.5,be("#b5523b"),0,1.3,25.8)),e.add(Ve(46,.12,.6,be("#ffffff"),0,2.66,25.8));for(let S=0;S<9;S++)e.add(ro(-24+S*6+i()*2,29+i()*3,0,1.6+i()*.6,i));for(const S of[4,12,20])for(const g of[-1,1])e.add(ro(g*(27+i()*3),S,0,1.7+i()*.5,i));const W=tt.bar,te=new Et,G=W.maxX-W.minX,Z=W.maxZ-W.minZ,ee=(W.minX+W.maxX)/2,ye=(W.minZ+W.maxZ)/2;te.add(Ve(G,3.4,Z,be("#f3e3c0"),ee,1.7,ye)),te.add(Ve(G+.4,.4,Z+.4,be("#2f5d3a"),ee,3.6,ye)),te.add(Ve(G-1,1.1,.5,be("#8b5a32"),ee,.55,W.minZ+.2)),te.add(Ve(G-.8,.08,.7,be("#c98a4b"),ee,1.12,W.minZ+.2)),te.add(Ve(G-1.6,1.6,.05,be("#3a2a1e"),ee,1.95,W.minZ-.01,!1));for(let S=0;S<6;S++){const g=W.minX+1.6+S*1.5;te.add(an(.05,.05,.4,be("#d9d9d9"),g,1.35,W.minZ+.1,6)),te.add(an(.08,.08,.12,be(["#c8102e","#f2b632","#2f8f4e"][S%3]),g,1.6,W.minZ+.1,8))}for(let S=0;S<18;S++)te.add(an(.06,.06,.28,be(["#3f8f4e","#8a4b1f","#c8102e","#e8c45a"][S%4]),W.minX+1.2+S*.5,2.25+S%2*.45,W.minZ+.35,6));const ve=Ph(G,1.7,"#ffffff","#2f8f4e");ve.rotation.x=-Math.PI/2+.35,ve.position.set(ee,2.85,W.minZ-.75),te.add(ve);const at=ts("THE TWELFTH MAN","#2f5d3a","#ffe9a8",7.5,1.2);at.position.set(ee,4.4,W.minZ-.05),te.add(at);for(let S=0;S<3;S++)te.add(an(.35,.35,.8,be("#9aa3b0"),W.minX-.6,.4,W.minZ+.8+S*.9,10));te.userData.facility="bar",e.add(te),n.push(te);const Ie=tt.food,Be=new Et,j=Ie.maxX-Ie.minX,Y=Ie.maxZ-Ie.minZ,de=(Ie.minX+Ie.maxX)/2,Ne=(Ie.minZ+Ie.maxZ)/2;Be.add(Ve(j,3,Y,be("#e8503a"),de,1.5,Ne)),Be.add(Ve(j-.8,1.4,.05,be("#3a2418"),de,1.75,Ie.minZ-.01,!1)),Be.add(Ve(j-.4,1.05,.5,be("#f2b632"),de,.52,Ie.minZ+.15)),Be.add(Ve(j-.2,.08,.7,be("#ffffff"),de,1.08,Ie.minZ+.15));const oe=Ph(j+.4,1.5,"#ffffff","#e8503a");oe.rotation.x=-Math.PI/2+.35,oe.position.set(de,2.65,Ie.minZ-.65),Be.add(oe);const Oe=ts("BEEFY’S BURGERS","#f2b632","#7a2a12",5.6,1);Oe.position.set(de,3.55,Ie.minZ-.05),Be.add(Oe);const mt=new Et,Xe=new Te(new ms(1.3,16,8,0,Math.PI*2,0,Math.PI/2),be("#e0a050"));Xe.position.y=.45;const Qe=an(1.4,1.4,.35,be("#6b3a1e"),0,.25,0,16),dt=an(1.45,1.45,.1,be("#6cbf55"),0,.45,0,16),je=Ve(2.3,.06,2.3,be("#ffd23f"),0,.42,0);je.rotation.y=.4;const gt=an(1.3,1.2,.35,be("#e0a050"),0,-.05,0,16);mt.add(Xe,Qe,dt,je,gt),mt.position.set(de,4.5,Ne+.5),Be.add(mt),Be.userData.facility="food",e.add(Be),n.push(Be);const et=tt.toilet,St=new Et,bt=et.maxX-et.minX,yt=et.maxZ-et.minZ,N=(et.minX+et.maxX)/2,Dt=(et.minZ+et.maxZ)/2;St.add(Ve(bt,3.2,yt,be("#bcd4e6"),N,1.6,Dt)),St.add(Ve(bt+.4,.35,yt+.4,be("#2f3e5c"),N,3.4,Dt));for(const[S,g,F]of[[et.counter.x-N,"#3a6fd8","GENTS"],[et.counter.x-N+4.2,"#d65a8a","LADIES"]]){St.add(Ve(1.3,2.2,.08,be(g),N+S,1.1,et.minZ-.03));const z=ts(F,g,"#ffffff",1.6,.45);z.position.set(N+S,2.55,et.minZ-.06),St.add(z)}const st=ts("FINE LEG TOILETS","#2f3e5c","#ffffff",6.5,1);st.position.set(N,4.1,et.minZ-.05),St.add(st);for(let S=0;S<4;S++)St.add(Ve(.9,.5,.05,be("#e8f2f8"),et.minX+1+S*2.6,2.7,et.minZ-.01,!1));St.userData.facility="toilet",e.add(St),n.push(St);for(const S of on.tables)e.add(Yx(S.x,S.z));for(const S of on.bins)e.add(an(.32,.28,.9,be("#2f8f4e"),S.x,.45,S.z,10)),e.add(an(.34,.34,.08,be("#1f6a38"),S.x,.92,S.z,10));for(const S of on.planters){e.add(Ve(1.4,.5,1,be("#a0663f"),S.x,.25,S.z));for(let g=0;g<3;g++){const F=new Te(new cr(.42,1),be(["#4f9e45","#6cbf55","#f07fb0"][g]));F.position.set(S.x-.4+g*.4,.75,S.z),F.castShadow=!0,e.add(F)}}for(const S of on.poles){e.add(an(.07,.09,4.2,be("#ffffff"),S.x,2.1,S.z,6));const g=new Te(new bn(1.2,.7),new Xt({map:rs(64,40,F=>{F.fillStyle="#fff",F.fillRect(0,0,64,40),F.fillStyle="#c8102e",F.fillRect(26,0,12,40),F.fillRect(0,14,64,12)}),side:Ht}));g.position.set(S.x+.6,3.8,S.z),e.add(g)}for(let S=0;S<on.poles.length-1;S++)e.add(oo(on.poles[S],on.poles[S+1],3.9));return e.add(oo({x:tt.bar.maxX,z:19.6},{x:tt.food.minX,z:19.6},3.3),oo({x:tt.food.maxX,z:19.6},{x:tt.toilet.minX,z:19.6},3.3)),{group:e,ground:t,buildings:n,setScoreboard:y,field:r}}const $x={model:"Casual2_Male",colours:{skin:"#efc09a",hair:"#b9b9b6",shirt:"#4a2f1f",sleeve:"#4a2f1f",arm:"#4a2f1f",shirtFront:"#f7f5f0",chest:"#f7f5f0",pants:"#3c5f93",pantsLow:"#3c5f93",leg:"#3c5f93",foot:"#f6f6f2",belt:"#2a1a10"},accessories:["sunglasses"]},Qx={model:"Casual_Male",colours:{skin:"#eab48c",hair:"#6b4426",shirt:"#efe4c8",shirtFront:"#efe4c8",sleeve:"#efe4c8",pants:"#6f7a3a",pantsLow:"#6f7a3a",foot:"#7a5a3c",belt:"#5a4a2a"},accessories:["bucketHat"],accent:"#3f7d3a"},ev=["Casual_Male","Casual2_Male","Casual3_Male","Casual_Female","Casual2_Female","Casual3_Female","Casual_Bald","OldClassy_Male"],rc=["#f6d0b1","#efc09a","#e2a982","#c98d62","#a86e48","#7d4f33","#f3c9a8"],tv=["#e8503a","#f2b632","#3aa1d8","#56b870","#8e5cc4","#f07fb0","#ffffff","#2f3e5c","#ff8c3a","#9bd1e8","#d63c5e","#f4ead5"],nv=["#3c5f93","#2b2f3a","#6b5b45","#c9b68f","#4f6b3a","#7a7f8c","#24324f","#e8e2d0"],Ud=["#2b1d14","#5a3b22","#8a5a2b","#d8b45a","#b9b9b6","#e4e0d8","#a3402a","#1a1a1a"],iv=["#f6f6f2","#2a2a30","#7a5a3c","#c8102e","#3a6fd8"],Lh={shirt:"#1f4fbf",sleeve:"#c8102e"},rn=(a,e)=>e[Math.floor(a()*e.length)%e.length];function sv(a){const e=ur(a*7919+17),t=rn(e,ev),n=e()<.3,i=n?Lh.shirt:rn(e,tv),s={skin:rn(e,rc),hair:rn(e,Ud),shirt:i,sleeve:n?Lh.sleeve:i,shirtFront:i,pants:rn(e,nv),foot:rn(e,iv)};t==="OldClassy_Male"&&(s.detail=rn(e,["#c8102e","#2f3e5c","#e8a23a"]),s.hat=rn(e,["#2b2b2b","#e9cf86","#4a3a2a"]));const r=[],o=e();return t!=="OldClassy_Male"&&(o<.22?r.push("sunHat"):o<.36?r.push("cap"):o<.42&&r.push("bucketHat")),e()<.12&&r.push("sunglasses"),{model:t,colours:s,accessories:r,accent:n?"#c8102e":rn(e,["#c8102e","#1f4fbf","#2f8f4e","#f2b632"]),height:.92+e()*.14}}function kd(a,e,t){const n=ur(a*104729+3),i=rn(n,["Casual_Male","Casual2_Male","Casual3_Male","Casual_Bald"]);if(e==="umpire")return{model:i,colours:{skin:rn(n,rc),hair:"#e4e0d8",shirt:"#f7f5ee",pants:"#2b2f3a",foot:"#2a2a30",arm:"#f7f5ee"},accessories:["sunHat"],accent:"#2b2f3a"};const s={shirt:"#fbfaf5",sleeve:"#fbfaf5",shirtFront:"#fbfaf5",pants:"#f4f1e6",pantsLow:"#f4f1e6",leg:"#f4f1e6",foot:"#f6f6f2",belt:"#d8d2c0"};return{model:i,colours:{skin:rn(n,rc),hair:rn(n,Ud),...s},accessories:[e==="batter"||e==="keeper"?"helmet":"cap"],accent:e==="batter"?"#1b2a52":t}}class av{constructor(e,t,n,i="#1d4fb8"){ne(this,"group",new Et);ne(this,"players",[]);ne(this,"bowler");ne(this,"batter");ne(this,"keeper");ne(this,"umpire");ne(this,"nonStriker");ne(this,"fielders",[]);ne(this,"phase","walkback");ne(this,"t",0);ne(this,"ball");ne(this,"ballFlight",null);ne(this,"stumps",[]);ne(this,"y");ne(this,"z");ne(this,"half");ne(this,"runStart");ne(this,"crease");ne(this,"celebrate",0);ne(this,"fieldCentre");ne(this,"fieldR");this.kit=e;const s=t.field;this.fieldCentre=s.centre,this.fieldR={x:s.rx,z:s.rz},this.y=s.y,this.z=s.pitch.z,this.half=s.pitchHalfLength;const r=(d,f)=>new L(s.pitch.x+d,s.y,s.pitch.z+f),o=(d,f,u,b)=>{const M=new zs(e,kd(d,f,i),n);M.root.position.copy(u),M.root.rotation.y=b,M.mesh.castShadow=!1,M.play(ze.idle,{fade:0,startAt:d*.37%1}),this.group.add(M.root);const m={ch:M,home:u.clone(),target:null,speed:3,facing:b};return this.players.push(m),m},c=-Math.PI/2,l=Math.PI/2;this.runStart=r(this.half+9,.6),this.crease=r(this.half+.6,.4),this.bowler=o(1,"fielder",this.runStart.clone(),c),this.batter=o(2,"batter",r(-this.half+.6,.35),l),this.nonStriker=o(3,"batter",r(this.half+.8,-1.3),c),this.keeper=o(4,"keeper",r(-this.half-2.4,0),l),this.umpire=o(5,"umpire",r(this.half+2,-.9),c),[[-this.half-4,-2.5],[-4,6],[6,7.5],[16,5],[17,-9],[2,-15],[-13,-10],[-25,5],[-6,8.5]].forEach(([d,f],u)=>{const b=o(10+u,"fielder",r(d,f),Math.atan2(-(d- -this.half),-f));this.fielders.push(b)}),this.ball=new Te(new ms(.11,10,8),new Qo({color:"#d4202a",emissive:"#300"})),this.ball.visible=!1,this.group.add(this.ball);for(let d=-1;d<=1;d++){const f=new Te(new Wt(.035,.035,.72,6),new Qo({color:"#f4e6c0"}));f.position.set(s.pitch.x-this.half+.2,s.y+.36,s.pitch.z+d*.11),this.group.add(f),this.stumps.push(f)}}get batterPosition(){return this.batter.ch.root.position.clone().add(new L(.4,1.1,0))}fly(e,t,n,i,s=!1,r){this.ball.visible=!0,this.ball.position.copy(e),this.ballFlight={from:e.clone(),to:t.clone(),t:0,dur:n,height:i,bounce:s,onLand:r}}trigger(e,t,n=2.6){this.batter.ch.play(ze.swing,{once:!0,fade:.08,timeScale:1.4});const i=this.batterPosition;if(e==="six"){const s=t??new L(-20+Math.random()*40,this.y+2,this.z-30);this.fly(i,s,n,16,!1,()=>{this.ball.visible=!1})}else if(e==="four"){const s=Math.random()*Math.PI*2,r=new L(this.fieldCentre.x+Math.cos(s)*this.fieldR.x*.96,this.y+.1,this.fieldCentre.z+Math.sin(s)*this.fieldR.z*.96);this.fly(i,r,1.6,.6,!0);let o=this.fielders[0],c=1/0;for(const l of this.fielders){const h=l.ch.root.position.distanceTo(r);h<c&&(c=h,o=l)}o.target=r.clone().lerp(o.home,.25),o.speed=6}else{this.stumps.forEach((s,r)=>{s.rotation.z=(r-1)*.5+.3,s.rotation.x=.4}),window.setTimeout(()=>this.stumps.forEach(s=>s.rotation.set(0,0,0)),3500),this.batter.ch.play(ze.sad,{once:!0,fade:.2}),this.celebrate=2.6;for(const s of[...this.fielders,this.bowler,this.keeper])s.ch.play(ze.cheer,{fade:.2})}this.phase="walkback",this.t=0}walk(e,t){if(!e.target)return!1;const n=e.ch.root.position,i=Math.hypot(e.target.x-n.x,e.target.z-n.z);if(i<.05)return e.target=null,!1;const s=Math.min(i,e.speed*t);return n.x+=(e.target.x-n.x)/i*s,n.z+=(e.target.z-n.z)/i*s,e.ch.root.rotation.y=Math.atan2(e.target.x-n.x,e.target.z-n.z),!0}update(e){var n;this.t+=e;const t=this.bowler;if(this.celebrate>0&&(this.celebrate-=e)<=0)for(const i of[...this.fielders,this.bowler,this.keeper])i.ch.play(ze.idle),i.ch.root.rotation.y=i.facing;if(this.celebrate<=0)if(this.phase==="walkback")t.target=this.runStart,t.speed=1.6,this.walk(t,e)?t.ch.play(ze.walk,{timeScale:1.6/this.kit.walkSpeed/this.kit.unitScale}):(t.ch.play(ze.idle),t.ch.root.rotation.y=-Math.PI/2,this.t>4&&(this.phase="runup",this.t=0));else if(this.phase==="runup"){if(t.target=this.crease,t.speed=5.2,t.ch.play(ze.run,{timeScale:5.2/this.kit.runSpeed/this.kit.unitScale,fade:.15}),!this.walk(t,e)){this.phase="deliver",this.t=0,t.ch.play(ze.punch,{once:!0,fade:.1,timeScale:1.3});const i=t.ch.root.position.clone().add(new L(-.3,2,0)),s=this.batterPosition.clone().setY(this.y+.7);this.fly(i,s,.55,.3,!0,()=>{this.batter.ch.play(ze.swing,{once:!0,fade:.08,timeScale:1.5}),this.fly(this.batterPosition.clone().setY(this.y+.6),this.keeper.ch.root.position.clone().add(new L(.3,.9,0)),.45,.2,!1,()=>{this.ball.visible=!1})})}}else this.phase==="deliver"&&this.t>1.4&&(this.phase="walkback",this.t=0,t.ch.play(ze.walk));this.batter.ch.finished()&&this.batter.ch.current!==ze.idle&&(this.batter.ch.play(ze.idle,{fade:.3}),this.batter.ch.root.rotation.y=Math.PI/2);for(const i of this.fielders)i.target?this.walk(i,e)?i.ch.play(ze.run,{timeScale:i.speed/this.kit.runSpeed/this.kit.unitScale,fade:.15}):i.target||(i.target=i.home.clone(),i.speed=1.8):i.ch.root.position.distanceTo(i.home)>.1?(i.target=i.home.clone(),i.speed=1.8):this.celebrate<=0&&i.ch.current!==ze.idle&&(i.ch.play(ze.idle,{fade:.3}),i.ch.root.rotation.y=i.facing),i.target&&i.speed<3&&i.ch.play(ze.walk,{timeScale:i.speed/this.kit.walkSpeed/this.kit.unitScale});if(this.ballFlight){const i=this.ballFlight;i.t+=e;const s=Math.min(1,i.t/i.dur);this.ball.position.lerpVectors(i.from,i.to,s);const r=i.bounce?Math.abs(Math.sin(s*Math.PI*(i.height<1?3:1)))*i.height:Math.sin(s*Math.PI)*i.height;this.ball.position.y+=r,s>=1&&(this.ballFlight=null,(n=i.onLand)==null||n.call(i))}for(const i of this.players)i.ch.update(e)}}const Nn=Math.PI-.5,Fs={forward:.35,outward:.25},rv=new L,Ih=new L,Dh=new Qt,Fh=new Qt,ov=new Qt,co=.8;function lo(a,e,t){let n=(e-a)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),a+n*t}class ho{constructor(e,t=0){ne(this,"sitting",!1);ne(this,"sitBlend",0);ne(this,"look",{phase:0,period:12});ne(this,"raise",0);ne(this,"saved",[]);this.ch=e;const n=Math.sin(t*12.9898)*43758.5453%1,i=Math.abs(n);this.look={phase:i*Math.PI*2,period:gn.seatedLook.period[0]+i*(gn.seatedLook.period[1]-gn.seatedLook.period[0])}}}function cv(a){try{const e=a.getExtension("WEBGL_debug_renderer_info"),t=String(a.getParameter(e?e.UNMASKED_RENDERER_WEBGL:a.RENDERER)??"");return/swiftshader|llvmpipe|softpipe|software|basic render driver/i.test(t)}catch{return!1}}class lv{constructor(e,t,n,i=!1){ne(this,"renderer");ne(this,"softwareGL");ne(this,"scene",new ju);ne(this,"camera",new $t(30,16/9,.5,400));ne(this,"venue");ne(this,"crowd");ne(this,"pitch");ne(this,"mike");ne(this,"jb");ne(this,"people",new Map);ne(this,"staff",[]);ne(this,"tray",new Et);ne(this,"trayPints",[]);ne(this,"shadowDisc");ne(this,"catchRing");ne(this,"marker");ne(this,"markerT",0);ne(this,"zoneRings",[]);ne(this,"sun");ne(this,"cam",{target:new L(1,-.6,7),distance:34,follow:!0,lastPan:-10});ne(this,"time",0);ne(this,"mikeCheer",0);ne(this,"mikeIdle",0);ne(this,"lastSeen",{score:""});ne(this,"input",{move:{x:0,z:0},tray:0});ne(this,"armRaise",Fs);this.canvasParent=e,this.kit=t,this.session=n,this.cpuSkin=i,this.renderer=new Q_({antialias:!0,preserveDrawingBuffer:i}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.softwareGL=cv(this.renderer.getContext()),this.renderer.shadowMap.enabled=!this.softwareGL&&new URLSearchParams(window.location.search).get("shadows")!=="0",this.renderer.shadowMap.type=Gs,this.renderer.outputColorSpace=Tt,e.appendChild(this.renderer.domElement);const s=document.createElement("canvas");s.width=2,s.height=256;const r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,256);o.addColorStop(0,"#5fb6f0"),o.addColorStop(.6,"#a9dcff"),o.addColorStop(1,"#e8f6ff"),r.fillStyle=o,r.fillRect(0,0,2,256);const c=new ar(s);c.colorSpace=Tt,this.scene.background=c,this.scene.fog=new Sc("#cfeaff",90,190),this.scene.add(new Fp("#e4f3ff","#8dbb6a",1.35)),this.sun=new vd("#fff1d6",2.1),this.sun.position.set(16,34,-18),this.sun.target.position.set(0,0,8),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const l=this.sun.shadow.camera;l.left=-30,l.right=30,l.top=24,l.bottom=-24,l.near=5,l.far=90,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3,this.scene.add(this.sun,this.sun.target);const h=Ct(t.sitHip.y*t.unitScale-.14,.3,.6);this.venue=Zx(h),this.scene.add(this.venue.group),this.pitch=new av(t,this.venue,i),this.scene.add(this.pitch.group),this.mike=new ho(new zs(t,$x,i)),this.jb=new ho(new zs(t,Qx,i)),this.scene.add(this.mike.ch.root,this.jb.ch.root),this.crowd=new jx(n.seed,n.nav),this.syncPeople(!0);const d=[[tt.bar.counter.x-1.6,tt.bar.minZ+.9,1],[tt.bar.counter.x+2.2,tt.bar.minZ+.9,2],[tt.food.counter.x+.8,tt.food.minZ+.9,3]];for(const[u,b,M]of d){const m=kd(M+40,"fielder","#c8102e");m.colours={...m.colours,shirt:M===3?"#ffffff":"#2f5d3a",sleeve:M===3?"#ffffff":"#2f5d3a",shirtFront:M===3?"#e8503a":"#2f5d3a",pants:"#2b2f3a",pantsLow:"#2b2f3a",leg:"#2b2f3a",foot:"#2a2a30"},m.accessories=M===3?["cap"]:[];const p=new zs(t,m,i);p.root.position.set(u,0,b),p.root.rotation.y=Math.PI,p.play(ze.idle,{fade:0,startAt:M*.3}),this.scene.add(p.root),this.staff.push(p)}this.tray.add(new Te(new Wt(.32,.32,.03,20),be("#b9bec6")));for(let u=0;u<4;u++){const b=Fd();b.position.set((u%2-.5)*.24,.12,(Math.floor(u/2)-.5)*.2),this.tray.add(b),this.trayPints.push(b)}this.tray.visible=!1,this.scene.add(this.tray),this.shadowDisc=new Te(new rr(1,28),new Xt({color:"#000000",transparent:!0,opacity:.35,depthWrite:!1})),this.shadowDisc.rotation.x=-Math.PI/2,this.shadowDisc.visible=!1,this.scene.add(this.shadowDisc),this.catchRing=new Te(new ls(.9,1,40),new Xt({color:"#ffd23f",transparent:!0,opacity:.9,depthWrite:!1,side:Ht})),this.catchRing.rotation.x=-Math.PI/2,this.catchRing.visible=!1,this.scene.add(this.catchRing),this.marker=new Te(new ls(.25,.36,24),new Xt({color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1,side:Ht})),this.marker.rotation.x=-Math.PI/2,this.marker.visible=!1,this.scene.add(this.marker);const f=[["bar",{x:tt.bar.counter.x,z:16.5},2.4],["food",{x:tt.food.counter.x,z:16.5},2.2],["toilet",{x:tt.toilet.counter.x,z:16.5},2.4],["seats",vi.centre,vi.radius-.3]];for(const[u,b,M]of f){const m=new Te(new ls(M-.12,M,48),new Xt({color:u==="seats"?"#2f8f4e":"#1fb5ad",transparent:!0,opacity:.45,depthWrite:!1,side:Ht}));m.rotation.x=-Math.PI/2,m.position.set(b.x,Mn(b)+.03,b.z),this.scene.add(m),this.zoneRings.push({mesh:m,zone:u})}this.mike.ch.root.position.set(n.mike.x,Mn(n.mike),n.mike.z),this.mike.ch.heading=n.heading,this.mike.ch.play(ze.idle,{fade:0}),this.jb.ch.play(ze.sit,{fade:0,once:!0,startAt:.999}),this.jb.sitting=!0,this.jb.sitBlend=1,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=this.canvasParent,t=e.clientWidth||960,n=e.clientHeight||540;this.renderer.setSize(t,n,!0),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}placeCamera(){const e=this.cam.target,t=this.cam.distance;this.camera.position.set(e.x+Math.sin(Nn)*Math.cos(co)*t,e.y+Math.sin(co)*t,e.z+Math.cos(Nn)*Math.cos(co)*t),this.camera.lookAt(e),this.camera.updateMatrixWorld()}pan(e,t){const n=this.cam.distance*.0016*(960/Math.max(320,this.canvasParent.clientWidth)),i=new L(Math.cos(Nn),0,-Math.sin(Nn)),s=new L(-Math.sin(Nn),0,-Math.cos(Nn));this.cam.target.addScaledVector(i,-e*n).addScaledVector(s,t*n),this.cam.target.x=Ct(this.cam.target.x,-26,26),this.cam.target.z=Ct(this.cam.target.z,-30,26),this.cam.follow=!1,this.cam.lastPan=this.time}zoom(e){this.cam.distance=Ct(this.cam.distance*e,9,70)}cameraDir(e,t){const n={x:-Math.sin(Nn),z:-Math.cos(Nn)},i={x:Math.cos(Nn),z:-Math.sin(Nn)};return{x:n.x*e+i.x*t,z:n.z*e+i.z*t}}followMike(){this.cam.follow=!0}setView(e,t,n){this.cam.target.set(e,Mn({x:e,z:t}),t),this.cam.distance=n,this.cam.follow=!1,this.cam.lastPan=this.time+1e6,this.placeCamera()}pick(e,t){const n=this.renderer.domElement.getBoundingClientRect(),i=new ke((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),s=new tm;s.setFromCamera(i,this.camera);const r=s.intersectObjects([...this.venue.ground,...this.venue.buildings],!0);for(const o of r){let c=o.object;for(;c&&!c.userData.facility;)c=c.parent;return c!=null&&c.userData.facility?{point:{x:tt[c.userData.facility].counter.x,z:16.5},facility:c.userData.facility}:{point:{x:o.point.x,z:o.point.z}}}return null}showMarker(e){this.marker.position.set(e.x,Mn(e)+.04,e.z),this.marker.visible=!0,this.markerT=0}screenOf(e){const n=(e==="jb"?this.jb.ch:this.mike.ch).root.position.clone().add(new L(0,e==="jb"&&this.jb.sitting?1.9:2.4,0)).project(this.camera),i=this.canvasParent.clientWidth,s=this.canvasParent.clientHeight;return{x:(n.x+1)/2*i,y:(1-n.y)/2*s,visible:n.z<1&&Math.abs(n.x)<1.1&&Math.abs(n.y)<1.1}}screenOfPoint(e){const t=new L(e.x,Mn(e),e.z).project(this.camera);return{x:(t.x+1)/2*this.canvasParent.clientWidth,y:(1-t.y)/2*this.canvasParent.clientHeight}}syncPeople(e=!1){for(const t of this.crowd.agents){let n=this.people.get(t.id);n||(n=new ho(new zs(this.kit,sv(t.look),this.cpuSkin),t.id),this.people.set(t.id,n),this.scene.add(n.ch.root),n.ch.root.position.set(t.pos.x,Mn(t.pos),t.pos.z),n.ch.heading=t.heading,t.mode==="seated"?(n.ch.play(ze.sit,{fade:0,once:!0,startAt:.999}),n.sitting=!0,n.sitBlend=1):n.ch.play(ze.idle,{fade:0,startAt:t.id*.137%1}),e||(n.ch.root.visible=t.mode!=="gone"))}}seatPosition(e){const t=-this.kit.sitHip.z*this.kit.unitScale;return new L(e.x,Mn({x:e.x,z:e.z-.6}),e.z-t)}drive(e,t,n,i){const s=e.ch,r=s.root;if(r.visible=t.mode!=="gone",!r.visible)return;const o=t.mode==="seated",c=t.cheerLeft>0&&t.cheerDelay<=0,l=c&&t.cheerStand,h=c&&!t.cheerStand&&o;if(o){const d=this.seatPosition(i??t.seat??t.pos);r.position.lerp(d,Math.min(1,n*6)),s.heading=lo(s.heading,Math.PI,Math.min(1,n*8)),l?(s.current!==ze.cheer&&(s.play(e.sitting?ze.stand:ze.cheer,{once:e.sitting,fade:.25,timeScale:gn.standUpTimeScale}),e.sitting=!1),s.current===ze.stand&&s.finished()&&s.play(ze.cheer,{fade:.25,timeScale:gn.animScale})):e.sitting||(s.play(ze.sit,{once:!0,fade:.35,timeScale:1.1}),e.sitting=!0)}else{const d=Mn(t.pos);if(r.position.x+=(t.pos.x-r.position.x)*Math.min(1,n*12),r.position.z+=(t.pos.z-r.position.z)*Math.min(1,n*12),r.position.y+=(d-r.position.y)*Math.min(1,n*10),s.heading=lo(s.heading,t.heading,Math.min(1,n*9)),e.sitting=!1,t.moving>.08){const f=t.moving*gn.walkSpeed;f>2.8?s.play(ze.run,{timeScale:f/(this.kit.runSpeed*this.kit.unitScale),fade:.25}):s.play(ze.walk,{timeScale:Ct(f/(this.kit.walkSpeed*this.kit.unitScale),.4,2.2),fade:.25})}else l?s.play(ze.cheer,{fade:.25,timeScale:gn.animScale}):s.play(ze.idle,{fade:.35,timeScale:gn.animScale})}r.rotation.y=s.heading,s.hold(o?null:t.carry);for(const[d,f]of e.saved)d.quaternion.copy(f);e.saved=[],s.update(n,()=>this.seatedPose(e,o,h,n))}seatedPose(e,t,n,i){const s=e.ch;if(!(t&&e.sitting)){e.raise=0;return}const r=gn.seatedLook,o=this.time/e.look.period*Math.PI*2+e.look.phase,c=r.amount*Math.max(0,Math.sin(o))**3*(Math.sin(e.look.phase*3)>0?1:-1),l=s.bones.Head;l&&Math.abs(c)>.001&&(e.saved.push([l,l.quaternion.clone()]),l.rotateY(c)),e.raise+=((n?1:0)-e.raise)*Math.min(1,i*6);const h=s.bones.UpperArmR,d=s.bones.LowerArmR;if(h&&d&&h.parent&&e.raise>.01){e.saved.push([h,h.quaternion.clone()]);const f=d.getWorldPosition(rv).sub(h.getWorldPosition(Ih)).normalize(),u=s.heading,b={x:Math.cos(u),z:-Math.sin(u)},M=Ih.set(Math.sin(u)*Fs.forward-b.x*Fs.outward,1,Math.cos(u)*Fs.forward-b.z*Fs.outward).normalize(),m=Dh.setFromUnitVectors(f,M);Fh.identity().slerp(m,e.raise);const p=h.getWorldQuaternion(ov).premultiply(Fh),v=h.parent.getWorldQuaternion(Dh).invert();h.quaternion.copy(v.multiply(p))}}driveMike(e){var f;const t=this.session,n=this.mike.ch,i=n.root,s=t.day.state,r=Us(t.day),o=t.walking>.05,c=Ft(t.mike,vi.centre)<vi.radius&&!t.ball&&!t.pour&&!s.mike.activity;this.mikeIdle=o?0:this.mikeIdle+e;const l=c&&this.mikeIdle>.8&&!t.tray&&this.mikeCheer<=0;let h=new L(t.mike.x,Mn(t.mike),t.mike.z);if(l&&(h=this.seatPosition(Nh)),i.position.lerp(h,Math.min(1,e*(l?5:14))),n.heading=lo(n.heading,l?Math.PI:t.heading,Math.min(1,e*10)),this.mikeCheer>0&&(this.mikeCheer-=e),this.mikeCheer>0)n.play(this.mikeCheer>1.6?ze.jump:ze.cheer,{fade:.15,once:this.mikeCheer>1.6});else if(t.pour)n.play(ze.pick,{fade:.2,timeScale:.8});else if(l)this.mike.sitting||(n.play(ze.sit,{once:!0,fade:.3,timeScale:1.3}),this.mike.sitting=!0);else{this.mike.sitting=!1;const u=t.walking*3.4;o?n.play(t.tray?ze.carry:u>3?ze.run:ze.walk,{timeScale:Ct(u/((t.tray?this.kit.walkSpeed:u>3?this.kit.runSpeed:this.kit.walkSpeed)*this.kit.unitScale),.5,2.4),fade:.18}):t.tray?n.play(ze.carry,{fade:.25,timeScale:.08}):n.play(ze.idle,{fade:.3})}i.rotation.set(0,n.heading,0),r>.05&&!this.mike.sitting&&(i.rotateZ(Math.sin(this.time*1.7)*.09*r),i.rotateX(Math.sin(this.time*1.1+1)*.05*r));const d=s.mike.heldPints+(s.mike.drinking>.01?1:0);if(n.hold(t.tray?null:((f=s.mike.activity)==null?void 0:f.kind)==="eating"?"burger":d>0?"pint":null),n.update(e),t.tray){this.tray.visible=!0;const u=n.bones.FistL.getWorldPosition(new L),b=n.bones.FistR.getWorldPosition(new L);this.tray.position.copy(u.add(b).multiplyScalar(.5)).add(new L(0,.08,0)),this.tray.rotation.set(0,n.heading,0),this.tray.rotateX(Ct(t.tray.tilt,-1.2,1.2)*.32);const M=s.mike.carriedPints+s.mike.heldPints+(s.mike.drinking>.01?1:0);this.trayPints.forEach((m,p)=>{m.visible=p<M})}else this.tray.visible=!1}feedback(e){if(e.type==="four")this.pitch.trigger("four"),this.crowd.react("four");else if(e.type==="wicket")this.pitch.trigger("wicket"),this.crowd.react("wicket");else if(e.type==="six"){const t=e.ball?new L(e.ball.target.x,Mn(e.ball.target)+.1,e.ball.target.z):void 0;this.pitch.trigger("six",t,xn.duration),this.crowd.react("six",e.ball?e.ball.target:{x:0,z:De.back*.5})}else e.type==="catch"&&(this.mikeCheer=2.6,this.crowd.react("catch",{...this.session.mike}))}update(e,t){this.time+=e,t&&this.crowd.update(e,this.session.day),this.syncPeople();for(const o of this.crowd.agents){const c=this.people.get(o.id);c&&this.drive(c,o,e)}this.drive(this.jb,this.crowd.jb,e,this.crowd.jb.mode==="seated"?this.crowd.jb.pos:void 0),this.jb.ch.hold(this.crowd.jb.mode==="seated"?null:this.crowd.jb.carry),this.driveMike(e);for(const o of this.staff)o.update(e);this.pitch.update(e);const n=this.session.ball;if(n){const o=Xa(n),c=Mn(n.target)+.05;this.shadowDisc.visible=!0,this.shadowDisc.position.set(n.target.x,c,n.target.z),this.shadowDisc.scale.setScalar(.3+.9*o),this.shadowDisc.material.opacity=.15+.4*o,this.catchRing.visible=!0,this.catchRing.position.set(n.target.x,c+.01,n.target.z),this.catchRing.scale.setScalar(xn.reach*(1+.06*Math.sin(this.time*12))),this.catchRing.material.color.set(o>=xn.windowFrom?"#ff6a2a":"#ffd23f")}else this.shadowDisc.visible=!1,this.catchRing.visible=!1;this.marker.visible&&(this.markerT+=e,this.marker.scale.setScalar(1+this.markerT*1.5),this.marker.material.opacity=Math.max(0,.9-this.markerT*1.2),this.markerT>.8&&(this.marker.visible=!1));const i=this.session.zone;for(const o of this.zoneRings)o.mesh.material.opacity=o.zone===i?.75+.2*Math.sin(this.time*5):.32;if(!this.cam.follow&&this.time-this.cam.lastPan>6&&this.session.walking>.05&&(this.cam.follow=!0),this.cam.follow){const o=this.mike.ch.root.position,c=new L(o.x,Math.max(-1,o.y),o.z+1);this.cam.target.lerp(c,Math.min(1,e*1.6))}this.placeCamera();const s=this.session.day.scoreboard(),r=`${s.team==="England"?"ENG":s.team.slice(0,3).toUpperCase()} ${s.runs}/${s.wickets}`;r+s.overs!==this.lastSeen.score&&(this.lastSeen.score=r+s.overs,this.venue.setScoreboard(["RIVERSIDE",r,`${s.overs} overs`,s.target?`Target ${s.target}`:""])),this.renderer.render(this.scene,this.camera)}}async function hv(){const a=document.querySelector("#app")??document.body;document.title="HOWZAT Arcade",a.innerHTML="",a.classList.add("arcade-app");const e=document.createElement("div");e.className="arcade-shell";const t=document.createElement("div");t.id="arcade-stage";const n=document.createElement("div");n.className="tp-loading",n.textContent="Opening the gates…",e.append(t,n),a.appendChild(e);const i=new URLSearchParams(window.location.search),s=Number(i.get("seed"))||Date.now()%1e5+1,r=i.get("cpuskin")==="1",o=await Gx(),c=new Pf(s),l=new lv(t,o,c,r);n.remove();let h=!1,d=!1,f=!1;const u=new Set;let b=0;const M=new qx(e,{onAction:()=>{f=!0},onRoundChoice:A=>{c.chooseJBRound(A)},onCallItADay:()=>{c.callItADay()},onStart:()=>{h=!0},onRestart:()=>{window.location.reload()},onTrayDrag:A=>{b=A},onRecentre:()=>l.followMike()}),m=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyZ","KeyX"]),p=new Map;window.addEventListener("keydown",A=>{var P;if(m.has(A.code)){u.add(A.code),A.repeat||p.set(A.code,performance.now()),A.preventDefault();return}if(A.code==="Space"||A.code==="Enter"||A.code==="KeyE"){if(A.preventDefault(),!h){(P=M.root.querySelector('[data-k="start"]'))==null||P.click();return}A.repeat||(f=!0)}A.code==="KeyF"&&l.followMike()}),window.addEventListener("keyup",A=>{if(!m.has(A.code))return;const P=performance.now()-(p.get(A.code)??0);P>=160?u.delete(A.code):window.setTimeout(()=>u.delete(A.code),160-P)}),window.addEventListener("blur",()=>u.clear());const v=new Map;let R=!1,x=0;const y=l.renderer.domElement;y.addEventListener("pointerdown",A=>{if(y.setPointerCapture(A.pointerId),v.set(A.pointerId,{x:A.clientX,y:A.clientY,sx:A.clientX,sy:A.clientY}),v.size===1&&(R=!1),v.size===2){const[P,I]=[...v.values()];x=Math.hypot(P.x-I.x,P.y-I.y),R=!0}}),y.addEventListener("pointermove",A=>{const P=v.get(A.pointerId);if(!P)return;if(v.size===2){P.x=A.clientX,P.y=A.clientY;const[D,B]=[...v.values()],q=Math.hypot(D.x-B.x,D.y-B.y);x>0&&q>0&&l.zoom(x/q),x=q;return}const I=A.clientX-P.x,O=A.clientY-P.y;!R&&Math.hypot(A.clientX-P.sx,A.clientY-P.sy)>8&&(R=!0,t.classList.add("dragging")),R&&l.pan(I,O),P.x=A.clientX,P.y=A.clientY});const w=A=>{const P=v.get(A.pointerId);if(v.delete(A.pointerId),v.size===0&&t.classList.remove("dragging"),!P||R||!h)return;const I=l.pick(A.clientX,A.clientY);I&&c.walkTo(I.point,I.facility??null)&&(l.showMarker(c.path[c.path.length-1]??I.point),l.followMike())};y.addEventListener("pointerup",w),y.addEventListener("pointercancel",A=>{v.delete(A.pointerId)}),y.addEventListener("wheel",A=>{A.preventDefault(),l.zoom(Math.exp(A.deltaY*.0012))},{passive:!1});let C=performance.now();const _=A=>{const P=Math.min(.1,(A-C)/1e3);C=A;const I=(u.has("KeyW")||u.has("ArrowUp")?1:0)-(u.has("KeyS")||u.has("ArrowDown")?1:0),O=(u.has("KeyD")||u.has("ArrowRight")?1:0)-(u.has("KeyA")||u.has("ArrowLeft")?1:0),D=I||O?l.cameraDir(I,O):{x:0,z:0};(I||O)&&l.followMike();const B=(u.has("KeyX")?1:0)-(u.has("KeyZ")?1:0)||b;if(h&&!c.finished){c.update(P,{move:D,action:f,tray:B});for(const q of c.drainFeedback())M.feedback(q),l.feedback(q)}f=!1,l.update(P,h),M.render(c.hud(),l.screenOf("jb")),c.finished&&!d&&(d=!0,M.showResults(c.results())),requestAnimationFrame(_)};requestAnimationFrame(_);const T=()=>{var A;h=!0,(A=M.root.querySelector('[data-k="title"]'))==null||A.classList.add("hidden")};window.__howzatArcade={session:c,world:l,start:T,simulate:A=>{T();for(let P=0;P<A;P+=.05){c.update(.05,{move:{x:0,z:0},action:!1,tray:0});for(const I of c.drainFeedback())l.feedback(I);l.crowd.update(.05,c.day)}}}}hv();
