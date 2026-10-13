var ae=Object.defineProperty;var ie=(s,e,t)=>e in s?ae(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>ie(s,typeof e!="symbol"?e+"":e,t);import{S as f}from"./rng-VQFrfh1t.js";import{m as O}from"./mikeTuning04-BkZv1tYS.js";function re(s){const e=new f(s^1918986606);return[35+e.next()*25,155+e.next()*35].map(t=>({at:t,duration:4+e.next()*2}))}function L(s,e,t){return s<e?1.5:s<t?1.25:1}function se(s,e,t,n){if(e<=s)return L(s,t,n);const a=[s,...[t,n].filter(r=>r>s&&r<e),e].sort((r,o)=>r-o);let i=0;for(let r=1;r<a.length;r++)i+=(a[r]-a[r-1])*L((a[r]+a[r-1])/2,t,n);return i/(e-s)}const V=[17,34],Z=.7;function oe(s,e){if(s.phase!=="match"||s.break)return null;const t=s.innings[s.inningsIndex];if(t.wickets>=10||t.balls>=300||s.inningsIndex===1&&t.runs>s.innings[0].runs)return null;const n=V.find(i=>i*6>t.balls&&!t.drinksTaken.includes(i));if(n===void 0&&s.inningsIndex!==0)return null;const a=(n===void 0?300:n*6)-t.balls;return{kind:n===void 0?"innings":"drinks",estimated:n===void 0,minutes:Math.max(0,e-s.minute)+Math.max(0,a-1)*Z}}function le(s,e,t,n){const i=l=>l==="innings"?1.8:1.4,r=e?Math.max(0,Math.min(1,(5-e.minutes)/5))*(i(e.kind)-.26):0,o=n?Math.max(0,Math.min(1,1-(s-n.minute)/10))*(i(n.kind)-.26):0;return t?i(t.kind):.26+Math.max(r,o)}const ue=.03,C=.006,he=2e-4,de=568,ce=.045,me=.789,be=de*ce*me,pe=["Fresh as a daisy","Buzzed","Merry","A bit pissed","Drunk as a lord","Ratarsed"],fe=[.018,.035,.055,.08,.105],ge=[.014,.031,.051,.076,.099];function D(s,e,t,n,a=1){const i=28*(1+s.foodBuffer*.8),r=s.unabsorbedGrams*(1-Math.exp(-e/i));s.unabsorbedGrams=Math.max(0,s.unabsorbedGrams-r),s.bodyGrams+=r;const o=ue*a*n*t*10*e/60,l=Math.min(s.bodyGrams,o);s.eliminatedGrams+=l,s.bodyGrams=Math.max(0,s.bodyGrams-l),s.foodBuffer=Math.max(0,s.foodBuffer-e/150)}function N(s,e){let t=((s|0)^(e==="mike"?1831565813:461845907))>>>0;return t||(t=1),t^=t<<13,t^=t>>>17,t^=t<<5,.95+(t>>>0)/4294967296*.095}function ke(s){s.waterRelief=Math.min(C,s.waterRelief+C)}function J(s,e){s.waterRelief=Math.max(0,s.waterRelief-he*e)}function ye(s,e){return Math.max(0,s-e)}function q(s,e,t){return s.bodyGrams/(t*e*10)}function we(s,e){const t=be*Math.max(0,e);s.unabsorbedGrams+=t,s.ingestedGrams+=t}function H(s,e){let t=s;for(;t<5&&e>=fe[t];)t++;for(;t>0&&e<ge[t-1];)t--;return t}function ve(s){return pe[s]}function Se(s){return s>=3}const Me=`# HOWZAT player roster

Source roster supplied for future player-name presentation and team selection. It contains 12 nations with 30 comic player names each. Keep ability ratings and batting positions in separate game data when the match model starts using this roster.

## Role codes

\`BAT-OPEN\`, \`BAT-TOP\`, \`BAT-MID\`, \`WK-BAT\`, \`AR-SEAM\`, \`AR-SPIN\`, \`BOWL-FAST\`, \`BOWL-LFM\`, \`BOWL-OFF\`, \`BOWL-LEG\`, \`BOWL-SLA\`, \`BOWL-CHINAMAN\`, \`BOWL-MYSTERY\`.

## Roster

England

Player	Role
Harry Cover	Opening batter
Willow Root	Opening batter
Zak Crawfish	Top-order batter
Joe Route	Top-order batter
Ollie Dope	Middle-order batter
Dan Lawless	Middle-order batter
Jamie Smiff	Wicketkeeper-batter
Jonny Barelystow	Wicketkeeper-batter
Phil Salty	Wicketkeeper-batter
Ben Stoked	Seam all-rounder
Moeen Alley	Spin all-rounder
Liam Livingroom	Spin all-rounder
Chris Wokes	Seam all-rounder
Sam Currant	Seam all-rounder
Rehan Ah-Med	Spin all-rounder
Gus Atkinson-Diet	Fast bowler
Jofra Archerfish	Fast bowler
Mark Would	Fast bowler
Brydon Carseat	Fast bowler
Olly Stonewall	Fast bowler
Josh Tongue-Tied	Fast bowler
Matthew Potts-N-Pans	Fast bowler
Saqib Mahmoodoo	Fast bowler
Adil Rash	Leg-spinner
Jack Leech	Slow left-arm
Shoaib Bash-It	Off-spinner
Tom Hartley-Pool	Slow left-arm
Reece Toppley	Left-arm fast
Luke Woodwork	Left-arm fast
Tom Banton-Rouge	Middle-order batter

Australia

Player	Role
Usman Khawaja-Mate	Opening batter
David Warned	Opening batter
Matt Shortbread	Opening batter
Marnus Labuschagne-And-Chips	Top-order batter
Steve Smudge	Top-order batter
Travis Headache	Top-order batter
Jake Fraser-McBurger	Top-order batter
Josh Inglish	Wicketkeeper-batter
Alex Carry	Wicketkeeper-batter
Matthew Wader	Wicketkeeper-batter
Mitchell Marshmallow	Seam all-rounder
Glenn Maxed-Out	Spin all-rounder
Cameron Greenish	Seam all-rounder
Marcus Stoined	Seam all-rounder
Aaron Hardly	Seam all-rounder
Beau Webbed-Feet	Spin all-rounder
Pat Cumin	Fast bowler
Mitchell Starfish	Left-arm fast
Josh Hazelwoodwork	Fast bowler
Scott Boland-Sauce	Fast bowler
Jhye Richardson-Road	Fast bowler
Lance Morris-Dancer	Fast bowler
Sean Abbotts	Fast bowler
Nathan Ellis-Island	Fast bowler
Adam Zampa-Dampa	Leg-spinner
Nathan Lyon-Bar	Off-spinner
Todd Murphy’s	Off-spinner
Matthew Kuhnemann-And-Sons	Slow left-arm
Spencer Johnson’s	Left-arm fast
Xavier Barlett	Fast bowler

India

Player	Role
Rohit Sharma-Llama	Opening batter
Yashasvi Jaiswallop	Opening batter
Shubman Gilligan	Top-order batter
Virat Koala	Top-order batter
Shreyas Iyer-Crossing	Middle-order batter
Sarfaraz Khan-Do	Middle-order batter
Rinku Singh-Song	Middle-order batter
Rishabh Pantaloons	Wicketkeeper-batter
KL Rahul-Over	Wicketkeeper-batter
Sanju Samsung	Wicketkeeper-batter
Hardik Pandya-Business	Seam all-rounder
Ravindra Jade-Ja	Spin all-rounder
Axar Patel-Cake	Spin all-rounder
Washington Sundial	Spin all-rounder
Nitish Kumar Ready	Seam all-rounder
Shivam Dubious	Seam all-rounder
Jasprit Bumrah-Claat	Fast bowler
Mohammed Siraj-U-Like	Fast bowler
Mohammed Shami-Kebab	Fast bowler
Akash Deep-Fried	Fast bowler
Arshdeep Singalong	Left-arm fast
Prasidh Krish-Nah	Fast bowler
Mukesh Kumar-At-Me	Fast bowler
Harshit Rana-Away	Fast bowler
Kuldeep Yadav-Yadav-Doo	Left-arm wrist-spin
Ravi Bish-Noi	Leg-spinner
Varun Chakravar-Tea	Mystery spinner
Yuzvendra Chahal-Lenge	Leg-spinner
Khaleel Ahmed-And-Chips	Left-arm fast
Avesh Khan-Opener	Fast bowler

New Zealand

Player	Role
Tom Latham-Up	Opening batter
Devon Con-Way	Opening batter
Will Youngish	Top-order batter
Kane Will-I-Am-Son	Top-order batter
Daryl Mitchellin-Man	Middle-order batter
Henry Nicholls-And-Dimes	Middle-order batter
Mark Chapman-Stick	Middle-order batter
Tom Blundell-Bus	Wicketkeeper-batter
Tim Seifert-First	Wicketkeeper-batter
Glenn Phillips-Head	Wicketkeeper-batter
Rachin Ravin-Dra	Spin all-rounder
Mitchell Santner-Claus	Spin all-rounder
Michael Brace-Well	Spin all-rounder
Jimmy Neesham-Park	Seam all-rounder
Nathan Smithereens	Seam all-rounder
Dean Foxcroft-Law	Spin all-rounder
Matt Henry-Vacuum	Fast bowler
Lockie Ferguson-Tractor	Fast bowler
Will O’Rourke-And-Roll	Fast bowler
Kyle Jamieson-Toast	Fast bowler
Tim Southee-Fried	Fast bowler
Ben Sears-Roebuck	Fast bowler
Jacob Duffy-Duck	Fast bowler
Adam Milne-Again	Fast bowler
Ajaz Patel-Shop	Slow left-arm
Ish Sodhi-Pop	Leg-spinner
Cole McConchie-Crisps	Spin all-rounder
William Somerville-House	Off-spinner
Ben Listerine	Left-arm fast
Blair Tickner-Tape	Fast bowler

Pakistan

Player	Role
Abdullah Shafique-Up	Opening batter
Imam-ul-Haq-A-Lot	Opening batter
Saim Ayub-There	Opening batter
Babar A-Zam	Top-order batter
Saud Shakeel-Rattle	Middle-order batter
Shan Masood-And-Chips	Top-order batter
Fakhar Zaman-Ia	Top-order batter
Mohammad Riz-Wan	Wicketkeeper-batter
Sarfaraz Ah-Med	Wicketkeeper-batter
Usman Khan-Do	Wicketkeeper-batter
Salman Ali Agha-Do	Spin all-rounder
Shadab Khan-Artist	Spin all-rounder
Mohammad Nawaz-Here	Spin all-rounder
Aamer Jamal-Sandwich	Seam all-rounder
Faheem Ash-Raff	Seam all-rounder
Iftikhar Ahmed-It	Spin all-rounder
Shaheen Shah Afraidy	Left-arm fast
Naseem Shah-Lot	Fast bowler
Haris Rauf-And-Ready	Fast bowler
Mohammad Abbas-Cab	Fast bowler
Hasan Ali-Gator	Fast bowler
Mohammad Ali-Bi	Fast bowler
Mir Hamza-Dance	Left-arm fast
Ihsanullah-Vista	Fast bowler
Abrar Ahmed-You	Leg-spinner
Noman Ali-En	Slow left-arm
Sajid Khan-Opener	Off-spinner
Usama Mir-Or	Leg-spinner
Zaman Khan-Do-It	Fast bowler
Mohammad Wasim-Jnr-Mint	Fast bowler

South Africa

Player	Role
Aiden Mark-Ram	Opening batter
Tony de Zorzi-Doors	Opening batter
Ryan Rickel-Ton	Opening batter
Temba Bavuma-Bee	Top-order batter
David Bedding-Ham	Middle-order batter
Tristan Stubbs-Toe	Middle-order batter
Rassie van der Dussen-Bin	Middle-order batter
Kyle Verreynne-Or-Shine	Wicketkeeper-batter
Heinrich Klaasen-Door	Wicketkeeper-batter
Quinton de Sock	Wicketkeeper-batter
Marco Jansen-Button	Seam all-rounder
Wiaan Mulder-Wine	Seam all-rounder
Andile Phehlukwayo-Through	Seam all-rounder
Corbin Bosch-Washer	Seam all-rounder
George Linde-Dance	Spin all-rounder
Kagiso Raba-Dabba-Doo	Fast bowler
Anrich Nor-Jay	Fast bowler
Lungi Ngidi-Down	Fast bowler
Gerald Coetzee-Bear	Fast bowler
Nandre Burger-And-Fries	Left-arm fast
Dane Paterson-Tan	Fast bowler
Lutho Sipamla-Lot	Fast bowler
Kwena Maphaka-Napkin	Left-arm fast
Keshav Maharaj-Ah	Slow left-arm
Tabraiz Sham-See	Left-arm wrist-spin
Senuran Muthusamy-Street	Spin all-rounder
Bjorn Fortuin-Cookie	Slow left-arm
Ottneil Baartman-Simpson	Fast bowler
Duan Jansen-Button	Left-arm fast
Reeza Hendricks-Gin	Opening batter

Sri Lanka

Player	Role
Pathum Nissanka-Tanka	Opening batter
Dimuth Karunarat-Neigh	Opening batter
Avishka Fernando-Alonso	Opening batter
Kusal Mendis-Order	Top-order batter
Dinesh Chandimal-Tea	Middle-order batter
Angelo Mathews-And-Spencer	Middle-order batter
Kamindu Mendis-Cus	Spin all-rounder
Kusal Perera-Sauce	Wicketkeeper-batter
Sadeera Samarawick-Rama	Wicketkeeper-batter
Niroshan Dickwella-Well	Wicketkeeper-batter
Dhananjaya de Silva-Lining	Spin all-rounder
Wanindu Has-A-Ranga	Spin all-rounder
Dunith Wellalage-Lager	Spin all-rounder
Chamika Karunarat-Nay	Seam all-rounder
Dasun Shanaka-Laka	Seam all-rounder
Ramesh Mendis-Cus	Spin all-rounder
Asitha Fernando-Torres	Fast bowler
Lahiru Kumara-Sutra	Fast bowler
Dushmantha Chameera-Mirror	Fast bowler
Kasun Rajitha-Bhoy	Fast bowler
Matheesha Pathirana-Run	Fast bowler
Dilshan Madushanka-Plank	Left-arm fast
Vishwa Fernando-Alonso	Left-arm fast
Prabath Jayasuriya-Lanka	Slow left-arm
Maheesh Theekshana-Lot	Mystery spinner
Jeffrey Vandersay-What	Leg-spinner
Akila Dananjaya-Vu	Off-spinner
Lakshan Sandakan-Do	Left-arm wrist-spin
Binura Fernando-Columbo	Left-arm fast
Nuwan Thushara-Bout	Fast bowler

West Indies

Player	Role
Kraigg Brathwaite-And-See	Opening batter
Tagenarine Chander-Paul	Opening batter
Evin Lewis-Hamilton	Opening batter
Shai Hope-So	Top-order batter
Alick Athanaze-Beans	Middle-order batter
Keacy Carty-On	Middle-order batter
Shimron Hetmyer-Later	Middle-order batter
Joshua Da Silva-Lining	Wicketkeeper-batter
Nicholas Poor-An	Wicketkeeper-batter
Shane Dowrich-Tea	Wicketkeeper-batter
Jason Holder-Up	Seam all-rounder
Roston Chase-Me	Spin all-rounder
Romario Shepherd’s-Pie	Seam all-rounder
Andre Rust-Sell	Seam all-rounder
Kyle Mayers-And-Co	Seam all-rounder
Sherfane Rutherford-Bohr	Seam all-rounder
Alzarri Joseph-Coat	Fast bowler
Shamar Joseph-And-His-Coat	Fast bowler
Kemar Roach-Coach	Fast bowler
Jayden Seales-The-Deal	Fast bowler
Oshane Thomas-Tank	Fast bowler
Obed McCoy-Toy	Left-arm fast
Gudakesh Motie-Vation	Slow left-arm
Akeal Hose-In	Slow left-arm
Hayden Walsh-Jnr-Cycle	Leg-spinner
Kevin Sinclair-C5	Off-spinner
Jomel Warrican-Opener	Slow left-arm
Anderson Phillip-Screwdriver	Fast bowler
Matthew Forde-Focus	Fast bowler
Shannon Gabriel-Angel	Fast bowler

Bangladesh

Player	Role
Tamim Iq-Ball	Opening batter
Najmul Hossain Shanto-Claus	Top-order batter
Litton Das-Boot	Opening batter
Mominul Haque-Eye	Top-order batter
Towhid Hridoy-Ride	Middle-order batter
Mahmudul Hasan Joy-Rider	Middle-order batter
Mushfiqur Rahim-Stein	Wicketkeeper-batter
Jaker Ali-Gator	Wicketkeeper-batter
Nurul Hasan-Do	Wicketkeeper-batter
Parvez Hossain Emon-And-On	Wicketkeeper-batter
Shakib Al Has-An-Idea	Spin all-rounder
Mehidy Hasan Miraz-Matazz	Spin all-rounder
Mahmudullah-Land	Spin all-rounder
Soumya Sarkar-Saurus	Seam all-rounder
Mahedi Hasan-Bean	Spin all-rounder
Afif Hossain-Bolt	Spin all-rounder
Taskin Ahmed-For-It	Fast bowler
Mustafizur Rahman-Noodles	Left-arm fast
Nahid Rana-Long	Fast bowler
Shoriful Islam-A-Badger	Left-arm fast
Hasan Mahmud-And-Sons	Fast bowler
Tanzim Hasan Sakib-Bag	Fast bowler
Ebadot Hossain-Bolt	Fast bowler
Khaled Ahmed-It	Fast bowler
Taijul Islam-A-Badger	Slow left-arm
Nasum Ahmed-You	Slow left-arm
Rishad Hossain-Pipe	Leg-spinner
Nayeem Hasan-Do	Off-spinner
Rubel Hossain-Bolt	Fast bowler
Abu Jayed-Z	Fast bowler

Afghanistan

Player	Role
Ibrahim Zadraught	Opening batter
Rahmanullah Gurbaz-Lightyear	Wicketkeeper-batter
Sediqullah Atal-Cost	Opening batter
Hashmatullah Shahidi-Dah	Middle-order batter
Rahmat Shah-Lot	Top-order batter
Najibullah Zadraught	Middle-order batter
Ikram Alikhil-Bill	Wicketkeeper-batter
Mohammad Ishaq-Sack	Wicketkeeper-batter
Afsar Zazai-Zoom	Wicketkeeper-batter
Darwish Rasooli-Veg	Middle-order batter
Mohammad Nabi-Wan-Kenobi	Spin all-rounder
Azmatullah Omarzai-Lot	Seam all-rounder
Gulbadin Naib-Our	Seam all-rounder
Karim Janat-Home	Seam all-rounder
Nangeyalia Kharote-Toast	Spin all-rounder
Sharafuddin Ashraf-Tray	Spin all-rounder
Rashid Can	Leg-spinner
Mujeeb Ur Rahman-And-Robin	Mystery spinner
Noor Ahmad-You	Left-arm wrist-spin
Fazalhaq Farooqi-Duck	Left-arm fast
Naveen-ul-Haq-Saw	Fast bowler
Fareed Ahmad-Mate	Left-arm fast
Allah Ghazanfar-Away	Mystery spinner
Qais Ahmad-You	Leg-spinner
Zahir Khan-Do	Left-arm wrist-spin
Nijat Masood-And-Peas	Fast bowler
Bilal Sami-Davis-Jnr	Fast bowler
Yamin Ahmadzai-What	Fast bowler
Salim Safi-Way	Fast bowler
Wafadar Momand-Pop	Fast bowler

Ireland

Player	Role
Paul Stirling-Job	Opening batter
Andrew Balbirnie-Sanders	Top-order batter
Harry Tector-Set	Middle-order batter
Curtis Campher-Van	Seam all-rounder
Lorcan Tucker-Bag	Wicketkeeper-batter
Stephen Doheny-Do	Wicketkeeper-batter
Neil Rock-And-Roll	Wicketkeeper-batter
Ross Adair-Do	Opening batter
James McCollum-Pillar	Opening batter
Peter Moor-Please	Top-order batter
George Dockrell-Roll	Spin all-rounder
Gareth Delany-Lama	Spin all-rounder
Mark Adair-Do	Seam all-rounder
Andy McBrine-Shrimp	Spin all-rounder
Fionn Hand-Solo	Seam all-rounder
Simi Singh-Song	Spin all-rounder
Josh Little-Bit	Left-arm fast
Barry McCarthy-And-Stone	Fast bowler
Craig Youngish	Fast bowler
Graham Hume-Along	Fast bowler
Matthew Foster-Home	Fast bowler
Thomas Mayes-Well	Fast bowler
Ben White-Wine	Leg-spinner
Theo van Woerkom-From-Home	Slow left-arm
Mike Frosties	Spin bowler
David Delany-Lama	Fast bowler
Olly Riley-Quite	Fast bowler
Liam McCarthyism	Fast bowler
Jordan Neill-Before	Seam all-rounder
Morgan Topping-Out	Middle-order batter

Zimbabwe

Player	Role
Brian Bennett-And-Hedges	Opening batter
Ben Curran-Bun	Opening batter
Craig Ervine-Magic	Top-order batter
Sean Williams-Sonoma	Spin all-rounder
Sikandar Raza-Matazz	Spin all-rounder
Dion Myers-Rum	Middle-order batter
Joylord Gumbie-Bear	Wicketkeeper-batter
Clive Madande-Up	Wicketkeeper-batter
Tadiwanashe Marumani-Pedi	Wicketkeeper-batter
Brendan Taylor-Made	Wicketkeeper-batter
Wessly Madhevere-End	Spin all-rounder
Ryan Burl-Ives	Spin all-rounder
Tony Munyonga-Round	Spin all-rounder
Luke Jongwe-Home	Seam all-rounder
Donald Tiripano-Grigio	Seam all-rounder
Chamu Chibhabha-Tea	Seam all-rounder
Blessing Muzarabani-Split	Fast bowler
Richard Ngarava-Tie	Left-arm fast
Tendai Chatara-Box	Fast bowler
Trevor Gwandu-Lot	Fast bowler
Victor Nyauchi-Mama	Fast bowler
Brad Evans-Above	Fast bowler
Tanaka Chivanga-Round	Fast bowler
Newman Nyamhuri-Up	Fast bowler
Wellington Masakadza-Thing	Slow left-arm
Brandon Mavuta-Vista	Leg-spinner
Tafadzwa Kamungozi-Berry	Leg-spinner
Ainsley Ndlovu-Actually	Slow left-arm
Tinashe Kamunhukamwe-Home	Opening batter
Milton Shumba-Wumba	Middle-order batter

There are a few here I particularly want to see on the scoreboard: Marnus Labuschagne-And-Chips, Kagiso Raba-Dabba-Doo, Mohammad Nabi-Wan-Kenobi, Nandre Burger-And-Fries, and the magnificent Mitchell Santner-Claus.

For the actual game data, I’d have Codex add ability ratings and batting position separately from role. That way Joe Route can genuinely be a star player, Pat Cumin a dangerous bowler, etc., while the comedy name doesn’t make the underlying cricket simulation silly. 
`,j=["England","Australia","India","New Zealand","Pakistan","South Africa","Sri Lanka","West Indies","Bangladesh","Afghanistan","Ireland","Zimbabwe"];function Te(s){return s==="Opening batter"?"opener":s==="Wicketkeeper-batter"?"keeper":s==="Seam all-rounder"?"seam-allrounder":s==="Spin all-rounder"?"spin-allrounder":s.includes("spinner")||s.includes("spin")||s.includes("Slow left-arm")?"spin":s.includes("bowler")||s.includes("fast")?"pace":"batter"}function $(s){let e=2166136261;for(const t of s)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function X(s,e,t){const n=Te(t),a=$(`${s}:${e}`)%13,i={opener:76,batter:74,keeper:69,"seam-allrounder":62,"spin-allrounder":62,pace:28,spin:31},r={opener:18,batter:20,keeper:8,"seam-allrounder":67,"spin-allrounder":68,pace:78,spin:77},o={opener:1,batter:4,keeper:5,"seam-allrounder":6,"spin-allrounder":6,pace:9,spin:8},l=/Joe Route|Pat Cumin|Virat Koala|Jasprit Bumrah|Kagiso Raba|Rashid Can|Mitchell Santner/.test(e)?7:0;return{name:e,nation:s,sourceRole:t,role:n,batting:Math.min(94,i[n]+a-6+(n==="pace"||n==="spin"?0:l)),bowling:Math.min(94,r[n]+a-6+(n==="pace"||n==="spin"?l:0)),battingPosition:o[n]+$(e)%3}}const ee={opener:2,keeper:1,batter:2,"seam-allrounder":1,"spin-allrounder":1,pace:3,spin:1},G=/^Player\tRole\s*$/;function Be(s){const e=Object.fromEntries(j.map(r=>[r,[]])),t=[],n=new Set,a=String(s).replace(/\r\n?/g,`
`).split(`
`);let i=null;for(let r=0;r<a.length;r++){const o=a[r],l=j.find(d=>d===o.trim());if(l){let d=r+1;for(;d<a.length&&a[d].trim()==="";)d++;if(d<a.length&&G.test(a[d])){n.has(l)&&t.push(`Roster heading repeated: ${l}`),n.add(l),i=l,r=d;continue}}if(G.test(o)){let d=r-1;for(;d>=0&&a[d].trim()==="";)d--;t.push(`Roster heading not recognised: "${d>=0?a[d].trim():""}"`),i=null;continue}if(!i||!o.includes("	"))continue;const[u="",h=""]=o.split("	"),m=u.trim(),g=h.trim();if(!m||!g){t.push(`Roster row skipped for ${i}: "${o.trim()}"`);continue}e[i].push(X(i,m,g))}for(const r of j){if(!n.has(r)){t.push(`Roster heading missing: ${r}`);continue}for(const[o,l]of Object.entries(ee)){const u=e[r].filter(h=>h.role===o).length;u<l&&t.push(`Roster for ${r} has ${u} ${o} (needs ${l})`)}}return{rosters:e,problems:t}}const te=Be(Me),E=te.rosters,Y=te.problems;Y.length>0&&console.warn(`HOWZAT roster problems (the game falls back safely):
${Y.join(`
`)}`);function Ae(s,e=E){const t=e[s]??[];return Object.entries(ee).every(([n,a])=>t.filter(i=>i.role===n).length>=a)}function Re(s,e){const t=[...s];for(let n=t.length-1;n>0;n--){const a=Math.floor(e.next()*(n+1));[t[n],t[a]]=[t[a],t[n]]}return t}function je(s,e,t,n){return Re(s,t).map(a=>({player:a,selectionForm:n(a)+t.next()*24})).sort((a,i)=>i.selectionForm-a.selectionForm).slice(0,e).map(a=>a.player)}function K(s,e,t=E){const n=t[s]??[],a=[],i=(r,o,l)=>{const u=n.filter(h=>r.includes(h.role)&&!a.includes(h));a.push(...je(u,o,e,l))};i(["opener"],2,r=>r.batting),i(["keeper"],1,r=>r.batting),i(["batter"],2,r=>r.batting),i(["seam-allrounder"],1,r=>r.batting+r.bowling),i(["spin-allrounder"],1,r=>r.batting+r.bowling),i(["pace"],3,r=>r.bowling),i(["spin"],1,r=>r.bowling),a.length<11&&a.push(...n.filter(r=>!a.includes(r)).sort((r,o)=>o.batting+o.bowling-(r.batting+r.bowling)).slice(0,11-a.length));for(let r=1;a.length<11;r++)a.push(X(s,`${s} Reserve ${r}`,r===1&&!a.some(o=>o.role==="keeper")?"Wicketkeeper-batter":"Middle-order batter"));return a.sort((r,o)=>r.battingPosition-o.battingPosition||o.batting-r.batting)}function Ie(s,e=E){const t=j.filter(i=>i!=="England"),n=t.filter(i=>Ae(i,e)),a=n.length>0?n:t;return a[Math.floor(s.next()*a.length)]}const xe={quiet:["The man behind us has explained the same field twice. Neither version helped.","I like a quiet over. Gives my expert opinions time to recover.","That pigeon has a better seat and no mortgage.","Someone has brought a spreadsheet. We must never become that someone.","Lovely view. Almost makes the ticket price look deliberate."],"england-boundary":["Four. An excellent use of somebody else’s legs.","That found the gap before I found it. Which proves very little.","Lovely shot. Even my pessimism applauded.","The rope earns its keep. Our seats remain essential.","Four more. We can delay the national inquiry."],"opponent-boundary":["Four. Our hospitality has become expensive.","That gap could accommodate a coach replacement service.","We’ve given him room to express himself. Unfortunate policy.","The fielder waved it through like a reluctant traffic warden.","I preferred the previous delivery. Considerably."],"england-wicket":["Gone. I shall now criticise a decision I strongly supported.","That walk back is longer when everyone has an opinion.","Well, the pavilion will be pleased to see him.","I had just got comfortable believing in him.","An abrupt conclusion to my optimistic paragraph."],"opponent-wicket":["Out! Excellent. My tactical shouting has worked.","Gone. The sort of departure I can fully endorse.","That’s a wicket. I’ll save my measured response for later.","Lovely. Their dressing room can have him back.","Out! Put my applause down as technical analysis."],six:["Six! Someone outside is about to acquire a souvenir.","That’s cleared the rope and several sensible objections.","Six. The car park has entered the fielding plan.","A very large answer to a very small ball.","Someone fetch that. I am deeply committed to sitting."],partnership:["They’re building something. I refuse to name it until it’s finished.","This pair have reached the comfortable silence stage.","Good understanding. We communicate mainly through pint allocation.","They’re quietly accumulating. Like my receipts.","Two sensible batters. We should take a photograph."],interval:["Half-time logistics. The true test of an international partnership.","Everyone has had the same brilliant idea about refreshments.","Thirty minutes. Enough time to queue and reconsider society.","The cricket rests. The tills are warming up.","An innings break. Our knees have requested a consultation."],hungry:["Your attention span is shaped suspiciously like a burger.","Eat something before you start reviewing the grass.","I heard your stomach appeal. Fairly convincing.","The programme is not a meal deal, Mike.","Food might improve your analysis. Certainly your expression."],toilet:["Fine Leg. Go before this becomes a personal highlight.","You’re doing more footwork than the opener.","That is a facilities question. The answer is over there.","Your bladder has called for a review. I support it.","Go on. I can explain the field without you bouncing."],wobbly:["The aisle is straight. Your route has creative differences.","Water is available without a medical referral.","You’ve started nodding at the scoreboard like it’s a relative.","Perhaps let the handrail lead this partnership.","Your balance has developed an unconventional technique."],bar:["This queue has a better defensive record than either team.","The man ahead has ordered for a small touring party.","One till. Several thousand thirsty strategic thinkers.","I’d appeal for slow service, but they’d review it slowly.","Patience, Mike. The taps appear to be on our side."],leaving:["Bring the drinks and your original number of shoes.","I’ll keep your seat. Your opinions can come with you.","Try to return before I become the highlights department.","Off you go. I shall remain an important local landmark.","Remember the route back. It ends beside this hat."],returning:["There you are. I almost rented your seat out.","Welcome back. My account will contain some editorial choices.","Sit down. Your absence gave me room to become an expert.","We’ve retained your seat and most of the afternoon.","Back in time to disagree with my latest theory."],"round-thanks-one":["Cheers, Mike. One pint. A small but vital public service.","Thank you. My empty hand was becoming embarrassing.","Good man. A single pint and a measurable improvement in friendship.","Lovely. One for me, no committee required.","Cheers. I shall overlook your last fielding suggestion."],"round-thanks-two":["Two for me? Cheers. Present JB and future JB both approve.","Thank you. A pint and its understudy. Proper planning.","Cheers, Mike. Two pints. The partnership has depth.","Lovely. One in each chapter of my afternoon.","Two! Good man. I withdraw my complaint about your pace."],"round-thanks-thirsty-one":["Cheers. One pint, just as my throat was drafting a grievance.","Good man. That pint has arrived before the rescue helicopter.","Thank you. I was beginning to envy the watering cans.","Lovely. One very welcome pint. My throat sends its regards.","Cheers, Mike. A pint! The dry spell is officially over."],"round-thanks-thirsty-two":["Two pints! Cheers. My throat had been preparing a lengthy statement.","Good man. Two for me. You’ve supplied both relief and insurance.","Cheers. A pair of pints. I can stop staring at yours now.","Thank you. Two pints beats the emergency I was imagining.","Lovely. Two for me, and an end to this very local drought."],"round-thanks-missed-one":["Cheers for the pint. You missed some cricket, but your priorities have witnesses.","Thank you. One pint here, some action there. A defensible trade.","Good man. I watched the excitement; you secured this pint.","Cheers. One pint and the highlights are on me. Highly edited.","Lovely. I applauded on your behalf. This pint settles the invoice."],"round-thanks-missed-two":["Cheers. Two pints for me. You missed the action; I acquired the reserves.","Thank you. Two pints is strong evidence that the trip was necessary.","Good man. The cricket got lively. Your two-pint delivery also merits applause.","Two for me! Cheers. I’ll repeat the highlights after this first one.","Lovely. A pair of pints. I shall describe what you missed with appropriate exaggeration."]},Fe={quiet:["You can hear one man unwrapping a sandwich three rows back.","This over has all the urgency of a parish meeting.","Somewhere, a statistician is enjoying this.","Proper cricket. Nothing happening, beautifully."],"good-bowling":["That over came with a padlock.","Properly squeezed them there.","He’s making the bat look decorative.","I could watch that line all afternoon."],"bad-bowling":["That over cost more than your last round.","At least the boundary rope’s getting exercise.","One imagines the captain has some notes.","A generous over. Charitable, even."],accelerating:["They’ve found another gear. Possibly ours.","This is moving rather quickly now.","The fielders are developing a thousand-yard stare.","Every ball suddenly has somewhere urgent to be."],partnership:["These two have settled in. That worries me if they’re theirs.","That stand’s building quietly.","They’ve started running like they’ve met before.","Nobody say partnership. Oh."],"near-milestone":["He’s close now. Don’t jinx it.","A few more and the bat goes up.","You can feel everyone doing the arithmetic.","One tidy shot would do it."],"high-rrr":["That rate has become deeply unfriendly.","Boundaries now. Singles have missed their chance.","The asking rate is asking rather a lot.","Someone needs to introduce the ball to the rope."],sober:["You’re still remarkably composed for a day at the cricket.","A clear head. Suspicious at this hour.","You’ve been nursing that decision for ages.","Not every over requires a pint. Allegedly."],leaving:["I’ll mind the seats. You mind the queue.","Go on. I’ll tell you what you missed.","I’ll guard the view. Bring back something useful.","Don’t let the concourse swallow you."],returning:["There you are. Still two seats, somehow.","Welcome back. You timed that almost well.","The cricket continued in your absence. Rude of it.","Back already? The queue must be behaving."],"england-boundary":["Lovely. Didn’t even need to run.","Threaded it. Like he meant the exact gap.","Four more. Even the bloke with the drum saw that."],"opponent-boundary":["That gap was visible from the burger queue.","We appear to be fielding in another county.","Bit generous. Very hospitable."],"england-wicket":["Oh, for God’s sake.","That was avoidable in several different ways.","He’ll be replaying that one in the bath."],"opponent-wicket":["YES! Never doubted him.","That’s done wonders for the atmosphere.","Send another one out. We’re ready now."],six:["SIX! That’s somebody else’s problem in the car park.","That may have landed in tomorrow.","Magnificent. Completely unnecessary. Perfect."],milestone:["Raise the bat. Pretend this was always under control.","That deserves applause and possibly another round.","Proper innings, that. Put it in the book."],collapse:["This has become a group project with no supervision.","Three wickets in a hurry. Somebody fetch the brakes.","Nobody move. Movement appears to cause wickets.","The scorebook can barely keep up with these exits."],"chase-ahead":["Rate’s comfortable. That makes me nervous.","Plenty in hand. Famous last words.","This is almost suspiciously manageable."],"chase-behind":["Required rate is developing opinions.","We need boundaries now, not good intentions.","Someone should tell them the target is today."],"close-finish":["Nobody breathe. Especially you.","This is why we stayed. Also because the gates are that way.","Every ball matters now. Deeply inconvenient."],drinks:["Eight minutes. Enough time to make one poor decision.","The players get drinks delivered. Luxury.","Quick break. The queues have sensed weakness."],interval:["Thirty minutes. The concourse has declared war.","Interesting total. Pint?","Halfway. How are you feeling about every decision so far?"],hungry:["You’re looking at Beefy’s again.","That scoreboard is starting to resemble a menu.","Get food before you start eating the programme."],toilet:["Yes, go. Please go.","Fine Leg. Immediately. This is not tactical advice.","You’re sitting like a man with a deadline."],merry:["You’ve become very supportive of mid-on.","Everything is funnier at this precise level.","Steady. We have several overs and dignity remaining."],wobbly:["Perhaps water next.","The ground is level. That movement is all you.","Use the handrail. It has no opinion of you."],spending:["Your wallet has had a difficult spell.","At this rate, the free bet is doing heavy emotional work.","Maybe let the next round belong to destiny."],bar:["I’ll guard this patch of carpet.","We came for cricket and found logistics.","The queue is moving. Spiritually."],food:["Beefy’s: where patience meets onions.","That smells better than it has any right to.","If it takes eight minutes, it counts as dining."],"mike-round":["Your turn at the taps. Try to make it historic.","Two each? Ambitious. I respect the paperwork.","Your round has entered the planning stage."],"jb-round":["My round. I have witnesses.","I said I’d get them. Mark the date.","Financial responsibility has briefly changed hands."],"jb-round-request":["My round. Two pints, four pints, or water? You’re in charge of the damage.","What’ll it be, Mike: two, four, or water? Try to look decisive.","I owe you one. Shall I bring two, four, or water and preserve our organs?"],"jb-bar-request":["I’m nipping to the bar for myself. Two, four, or water?","I’m getting a drink. Pick two, four, or water, Mike.","Bar trip. Two pints, four, or one water? I’m open to sensible advice."],"round-thanks":["You’re a gentleman.","About bloody time.","Lovely. What did I miss?","Good man.","Perfect timing.","Two for me? I take back most of what I said.","That’s service. I shall remember it at my round.","Cheers, Mike. You’ve rescued this over."],"round-thanks-one":["Perfect. One pint, correctly allocated.","Good man. That should see me through an over or two.","Lovely. Mine, singular, and very welcome.","Cheers, Mike. Sensible quantities briefly prevail."],"round-thanks-thirsty-one":[],"round-thanks-thirsty-two":[],"round-thanks-missed-one":[],"round-thanks-missed-two":[],"round-thanks-two":["Two for me? I take back most of what I said.","That is a properly organised round.","Excellent. One now, one for future JB.","A pair each. Ambitious and correct."],"jb-round-delivered":["My round has arrived. Standards are recovering.","There we are. I am a man of action, eventually.","I brought the pints. Kindly record this historic achievement.","My delivery service accepts applause, Mike.","Round delivered. The partnership survives another over."],"round-warning":["I’m keeping score. Your round, Mike.","I bought the last one. Your wallet’s had a longer rest than the bowlers.","Your round, Mike. The receipt has outlasted two partnerships."],"round-final-warning":["I’m halfway to saying “right, then”. Sort your round. Now.","Your round, Mike. I’m checking train times, not the run rate.","Last call for your round. The partnership is applying for a divorce."],missed:["You missed a wicket. Excellent timing.","Lovely shot while you were away. Obviously.","The match waited until you left to become interesting."],"missed-wicket":["You missed a wicket. Excellent timing.","Wicket while you were away. I gave it the full appeal.","One gone. Your timing remains exceptional.","They lost a batter and you lost the view."],"missed-boundary":["Lovely boundary while you were away. Obviously.","You missed a clean strike beyond the field.","A boundary while you were gone. Clean as you like.","The crowd enjoyed a boundary on your behalf."],"missed-mixed":["Wicket and boundaries while you were away. Busy little trip.","You missed enough action for a highlights package.","The match became interesting the moment you left.","Runs, a wicket, noise. Standard punishment for leaving."],"both-missed":["I missed it too. Outstanding work from both of us.","Apparently something happened. We remain uninformed.","A roar, no witnesses, and two excellent excuses."],win:["YES! Never in doubt.","A famous victory, witnessed in strategically selected portions.","England win. Your decisions are retrospectively sound."],loss:["Well. Pub?","A long day, a short post-match analysis.","We gave them every chance, including all the ones they needed."],"toilet-venue":["A surprisingly successful trip to Fine Leg.","Facilities: visited. Dignity: broadly intact.","Right. Back before something happens."]},Le={quiet:["This spell is moving at the speed of committee minutes.","Even the pigeons have stopped pretending to watch."],"good-bowling":["Six balls, no gifts. Beautifully mean.","That is a corridor nobody wants to walk down."],"bad-bowling":["The field is decorative at this point.","Another loose one. The rope sends its thanks."],accelerating:["The scoreboard has started jogging.","They are taking the quiet overs personally."],partnership:["This pair are becoming furniture.","We may need a new idea and possibly a new ball."],"near-milestone":["Everyone knows the number. Nobody say it.","He is one decent swing from the applause."],"high-rrr":["The calculator has become openly hostile.","We need fours, sixes and a minor administrative miracle."],sober:["Remarkably clear-eyed. Are you feeling all right?","You can still pronounce every fielder. Impressive."],leaving:["Bring yourself back as well as the drinks.","I will preserve your seat and edit the highlights."],returning:["You made it back before the next crisis.","Sit down. I have a concise and biased report."],"england-boundary":["That will do nicely. More of the uncomplicated stuff.","Pierced the field like it owed him money."],"opponent-boundary":["We did not need to offer that much width.","Four. Very sporting of us."],"england-wicket":["That has spoiled a perfectly good afternoon.","Straight back to the pavilion. No forwarding address."],"opponent-wicket":["Beautiful. Fold the scoreboard one place to the left.","That is the noise we came for."],six:["That cleared everyone, including good sense.","Somebody check the river."],milestone:["Well batted. Properly earned.","Acknowledge the crowd and avoid doing anything silly next ball."],collapse:["This innings has misplaced its structural support.","Another one? They are leaving in groups now."],"chase-ahead":["No panic required. I distrust that.","The equation is friendly, which feels temporary."],"chase-behind":["We are borrowing runs from overs we do not have.","Time for somebody to become heroic."],"close-finish":["My pint is shaking and I am blaming the match.","One clean over. That is all I ask."],drinks:["Players hydrated. Spectators released into the wild.","Eight minutes of organised concourse panic."],interval:["Thirty minutes to review the score and misuse the facilities.","Half a match down. How many decisions left?"],hungry:["You have started tracking the burger queue between balls.","Food now, before mustard becomes a tactical obsession."],toilet:["This is your body declaring an innings break.","Fine Leg is no longer optional."],merry:["You are applauding defensive singles now.","Excellent level: cheerful, coherent, slightly louder."],wobbly:["Both feet on the same plan, please.","Your balance has begun freelancing."],spending:["The receipts are developing an innings of their own.","Your bank account has gone defensive."],bar:["The taps are closer than they looked from the seats.","A strong venue, weakened only by everyone else wanting beer."],food:["The smell has done most of the selling.","That queue had better end in something with onions."],"mike-round":["A fine contribution to bilateral relations.","Your round. Recorded permanently in oral history."],"jb-round":["Stand aside. Fiscal leadership has arrived.","My turn. Try not to look so surprised."],"jb-round-request":["I’m buying. Two, four, or water? Choose before the queue starts moving.","Your call, Mike: two pints, four, or water. I reserve the right to judge.","Two, four, or water? I’ve brought my wallet and a very small amount of restraint."],"jb-bar-request":["I could do with a drink. Two, four, or water?","I’m off for my own drink. Choose two, four, or water.","A personal bar mission. Two pints, four, or water?"],"round-thanks":["Much appreciated. Your reputation improves.","A successful delivery, unlike several we have watched."],"jb-round-delivered":["Lovely. I can resume being generous with advice.","Good timing. I was about to start a formal inquiry."],"round-warning":["I bought the last round. I remember the exact change.","Your round, Mike. This is a friendly reminder with documentary evidence."],"round-final-warning":["Get the next round, or I am off. No appeals.","This is the final warning. The ledger is open and I am losing patience."],"both-missed":["The roar reached us. The explanation did not.","Neither of us saw it, so our accounts will be equally confident."],win:["That will look excellent in the memory after editing.","Victory. We contributed atmosphere and queue data."],loss:["We shall remember the good overs selectively.","Defeat. At least the post-match analysis has a bar."]};function Ee(s,e,t){const n=Pe(s),a=n.filter(r=>!t.includes(r)),i=a.length?a:n;return i[Math.floor(e.next()*i.length)]}function We(s){return(s==null?void 0:s.startsWith("round-thanks"))??!1}function Pe(s){return[...Fe[s],...Le[s]??[],...xe[s]??[]]}const Oe=["Miserable","Grumbling","Flat","Content","Having a day","Absolutely flying"],M=(s,e,t)=>Math.max(e,Math.min(t,s));function Ce(s){let e=60;for(const n of[s.thirst,s.hunger,s.bladder])n<35?e+=Math.min(2,(35-n)*.08):n>55&&(e-=(n-55)*.25);s.bac>=.015&&s.bac<.045?e+=8:s.bac>=.045&&s.bac<.065&&(e+=3),s.sobrietyBand===5&&(e-=5),e+=s.withJB?7:-2,e+=M((s.jbMood-55)*.08,-4,4),s.awayFromSeats&&(e-=6),s.queued&&(e-=3);let t=0;for(const n of s.recentEvents)if(!(!n.importance||s.minute-n.minute>18)){if(!n.mikeSaw){t-=n.kind==="wicket"&&n.team==="England"?3:1.5;continue}if(n.kind==="wicket")t+=n.team==="England"?-1:2;else if(n.kind==="four"||n.kind==="six"){const a=n.kind==="six"?3:2;t+=n.team==="England"?a:-a}}return M(e+M(t,-10,12),5,100)}function De(s,e,t){return t>0?M(s+(e-s)*(1-Math.exp(-t/18)),0,100):M(s,0,100)}const Ne=[26,46,64,80,94],Je=[20,40,58,73,87];function qe(s,e){let t=s;for(;t<5&&e>=Ne[t];)t++;for(;t>0&&e<Je[t-1];)t--;return t}function He(s){return Oe[s]}const p={bladder:{warning:92,terminal:100,rescueLatest:98,resetRescueBelow:80,maxGrace:26},hunger:{warning:95,terminal:100,rescueLatest:98,resetRescueBelow:82,maxGrace:32},alcohol:{rawIndex:.13,terminalAfterMinutes:25,decayRate:2},jb:{reminderAfterMinutes:70,finalAfterMinutes:120,leaveAfterMinutes:170}};function $e(){return{rescue:null,rescueUsed:{bladder:!1,hunger:!1},alcoholHighMinutes:0,jbDueMinutes:0,jbWarningStage:0,mikePintsDrunk:0,mikeWickets:0,failure:null}}const Ge={bladder:[{title:"FINE LEG HAS THE LAST WORD",message:"Mike reaches the toilets one delivery too late. His trousers request their own pavilion."},{title:"AN UNFORTUNATE INNINGS BREAK",message:"Fine Leg was nearly in range. Riverside ground staff have been notified."},{title:"THE WRONG SORT OF WICKET",message:"Mike loses the battle of the bladder. A groundskeeper fetches the hose."}],hunger:[{title:"BEEFYS WINS BY ABDICATION",message:"Mike leaves the ODI in search of a burger. The chase ends at the condiment station."},{title:"LUNCH HAS BEEN DECLARED",message:"The cricket can wait. Mike has gone to Beefy’s and is taking the long route."},{title:"A WALKING MENU",message:"Mike abandons the match and follows the smell of onions out of Riverside."}],alcohol:[{title:"THE APPEAL IS WITH THE LAMPLIGHT",message:"Mike appeals to a nearby lamppost. It declines to review the decision."},{title:"MIKE HAS LOST HIS MARK",message:"The ground is perfectly level. Mike is now negotiating with a turnstile."},{title:"ONE OVER THE LINE",message:"Mike tries to buy a round from the scoreboard. The scoreboard is not serving."},{title:"A VERY WIDE DELIVERY",message:"Mike misses the seats by a county and is escorted to a taxi."}],jb:[{title:"THE PARTNERSHIP IS OVER",message:"JB has had enough of waiting for Mike’s round. He leaves Riverside with the receipts."},{title:"JB WALKS",message:"JB finally gives up on Mike’s round and heads home. The day out is over."}]};function Ye(s,e,t){return e===5||s.alcoholHighMinutes>1e-9||s.mikeWickets>=9&&!t}const Ke=28/1.2,Ue={seats:"Riverside seats",bar:"The Twelfth Man",food:"Beefy’s Burgers",toilet:"Fine Leg Toilets"},x={"pint-1":6.2,"pint-2":12.4,"pint-4":24.8,water:5,burger:7.5,toilet:0,"jb-round":0},w={bar:1.25,food:1.7,toilet:1.1},U=["seats","bar","food","toilet"],ze=600,A=s=>`${Math.floor(s/6)}.${s%6}`,Ze=s=>{const e=660+Math.floor(s);return`${String(Math.floor(e/60)%24).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},z=s=>Ue[s],_=(s,e)=>s!==e&&U.includes(s)&&U.includes(e),F=(s,e)=>e>0?s*6/e:s>0?1/0:0;function R(s){let e=s|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,e>>>0||1}function b(s){return Math.max(0,Math.min(100,s))}function Q(){return{bodyGrams:0,unabsorbedGrams:0,foodBuffer:0,ingestedGrams:0,eliminatedGrams:0}}class Xe{constructor(e=30326){c(this,"state");c(this,"rng");c(this,"matchRng");c(this,"worldRng");c(this,"dialogueRng");c(this,"betRng");c(this,"carry",0);c(this,"nextBallAt",.8);c(this,"eventId",0);c(this,"queuePersonId",0);c(this,"showers",[]);c(this,"lastBreakEnded",null);c(this,"mikeRates",O(null));c(this,"split",null);c(this,"peopleMinute",0);this.rng=new f(R(e)),this.matchRng=new f(e^20903),this.worldRng=new f(e^32586),this.dialogueRng=new f(e^11217),this.betRng=new f(R(e^27623)),this.state=this.fresh(e)}setClockSplit(e){this.split=e?{...e}:null}get clockSplit(){return this.split?{...this.split}:null}get peopleMinutes(){return this.split?this.peopleMinute:this.state.minute}setMikeTuning(e){this.mikeRates=O(e)}fresh(e){this.showers=re(e);const t=Ie(this.rng),n=K("England",this.rng),a=K(t,this.rng),i=this.rng.next()<.5?"England":t,r=this.rng.next()<.5?"England":t,o=i===r?"bat":"field",l=i==="England"?t:"England";return{phase:"title",seed:e,minute:0,opponent:t,englandXI:n,opponentXI:a,battingFirst:i,tossWinner:r,tossDecision:o,inningsIndex:0,innings:[this.newInnings(i,i==="England"?n:a,l==="England"?n:a),this.newInnings(l,l==="England"?n:a,i==="England"?n:a)],break:null,rain:null,result:"",winner:null,events:[],latest:null,queues:{bar:this.newQueue(2),food:this.newQueue(3),toilet:this.newQueue(1)},mike:{place:"seats",travelling:null,activity:null,heldPints:0,carriedPints:0,carriedWaters:0,drinking:0,drinkPaused:!1,alcohol:Q(),sobrietyBand:0,recoveryFactor:N(e,"mike"),waterRelief:0,thirst:20,hunger:22,bladder:14,mood:70,moodBand:3,waterRecoveryUntil:0,burgerRecoveryUntil:0,totalSpend:0,waters:0,burgers:0,toilets:0},jb:{place:"seats",travelling:null,activity:null,heldPints:0,carriedPints:0,carriedWaters:0,drinking:0,drinkPaused:!1,alcohol:Q(),sobrietyBand:0,recoveryFactor:N(e,"jb"),waterRelief:0,mood:72,thirst:20,hunger:22,bladder:14,totalSpend:0,waters:0,burgers:0,toilets:0,sharedRoundsBought:0,departed:!1,awaitingRoundChoice:!1,roundChoiceSecondsLeft:0,independentTrip:!1,roundTrip:!1,roundSize:2,barChoice:null,barTripPurpose:null,tripNote:null,returnAt:0,lastTalk:-99},roundOwner:"mike",mikeBet:null,jbBet:null,notice:"Riverside is filling up. England are in town.",speech:"International cricket and a whole day to make questionable decisions.",speechUntil:20,speechCategory:null,speechHandoverAt:null,speed:1,crowd:"settled",lastReturnEvent:0,nextJBRoundAt:0,dialogueHistory:[],lastDialogueAt:-99,jeopardy:$e(),experience:{togetherMinutes:0,sociableMinutes:0,uncomfortableMinutes:0,peakBac:0},endedEarly:!1}}newQueue(e){return{patrons:Array.from({length:e},()=>this.nextPatron()),carry:0,serving:[]}}newInnings(e,t,n){const a=[...n].sort((r,o)=>o.bowling-r.bowling).slice(0,5),i={};for(const r of a)i[r.name]={player:r,runs:0,balls:0,wickets:0};return{team:e,xi:t,batting:t.map(r=>({player:r,runs:0,balls:0,out:!1})),bowling:i,runs:0,wickets:0,balls:0,striker:0,nonStriker:1,nextBatter:2,currentBowler:a[0].name,lastOver:-1,drinksTaken:[]}}reset(e=this.state.seed){this.lastBreakEnded=null,this.rng=new f(R(e)),this.matchRng=new f(e^20903),this.worldRng=new f(e^32586),this.dialogueRng=new f(e^11217),this.betRng=new f(R(e^27623)),this.carry=0,this.nextBallAt=.8,this.eventId=0,this.queuePersonId=0,this.peopleMinute=0,this.state=this.fresh(e)}showOpponent(){this.state.phase==="title"&&(this.state.phase="opponent")}showBet(){this.state.phase==="opponent"&&(this.state.phase="bet")}placeBet(e){const t=this.state;if(t.phase!=="bet")return;t.mikeBet={pick:e,stake:10,won:null,payout:0};const n=["England",t.opponent,"England 250+"],a=n[Math.floor(this.betRng.next()*n.length)];t.jbBet={pick:a,stake:10,won:null,payout:0},t.speech=a===e?"Same bet. That feels less reassuring than it should.":`I’m on ${a}. One of us gets to be unbearable.`,t.phase="teams"}showToss(){this.state.phase==="teams"&&(this.state.phase="toss")}startMatch(){const e=this.state;e.phase==="toss"&&(e.phase="match",e.minute=0,this.nextBallAt=.8,this.peopleMinute=0,e.notice=`${e.battingFirst} take guard. First ball at 11:00.`,e.speech=e.battingFirst==="England"?"Good start. Nobody’s done anything stupid yet.":"Right. Early wicket, then we can discuss refreshments.",e.speechUntil=8)}endGame(){const e=this.state;e.phase==="match"&&(this.settleJBAtFullTime(),e.phase="result",e.break=null,e.rain=null,e.endedEarly=!0,e.result="DAY OUT ENDED",e.notice="Mike and JB call it a day.",e.speech="Leaving before the traffic. Almost suspiciously sensible.",e.speechUntil=1/0)}advance(e){const t=this.state;if(t.phase==="match")for(this.carry+=Math.max(0,e)*t.speed*.28;this.carry+1e-9>=.1&&t.phase==="match";)this.carry-=.1,Math.abs(this.carry)<1e-9&&(this.carry=0),this.step(.1)}advanceMinutes(e){let t=Math.max(0,e);for(;t>=.1&&this.state.phase==="match";)this.step(.1),t-=.1;t>1e-8&&this.state.phase==="match"&&this.step(t)}advanceSplit(e,t){if(!this.split){this.advanceMinutes(e);return}const n=Math.max(0,e),a=Math.max(0,t);if(n<=0)return;const i=a/n;let r=n;for(;r>=.1&&this.state.phase==="match";)this.step(.1,.1*i),r-=.1;r>1e-8&&this.state.phase==="match"&&this.step(r,r*i)}step(e,t=e){const n=this.state,a=n.jb.awaitingRoundChoice,i=this.split,r=Math.floor(i?this.peopleMinute:n.minute);n.minute+=t,i&&(this.peopleMinute+=e);const o=i?e*i.body:e;if(this.updateBodies(o,i?e*i.drink:e,t),this.updateTravel(e),this.transferRoundDrinks(),this.updateActivity(e),this.updateQueues(e),Math.floor(i?this.peopleMinute:n.minute)!==r&&(this.queueArrivals(),this.updateJB(),this.maybeAmbientDialogue()),a&&n.jb.awaitingRoundChoice&&(n.jb.roundChoiceSecondsLeft=Math.max(0,n.jb.roundChoiceSecondsLeft-e/(n.speed*.28)),n.jb.roundChoiceSecondsLeft<=1e-9&&n.jb.bladder<70&&n.jb.hunger<68&&this.chooseJBBarOrder("pint-2")),this.updateJeopardy(o),n.phase==="match"){if(!n.break&&!n.rain&&this.showers.length&&n.minute>=this.showers[0].at){const l=this.showers.shift();n.rain={left:l.duration,total:l.duration},n.notice="Rain stops play. Everybody has independently decided to join the same queues.",n.speech="Four minutes of rain. Enough time for a six-minute queue.",n.speechUntil=n.minute+l.duration;for(const u of["bar","food","toilet"]){const h=n.queues[u],m=this.split?Math.round(7*this.split.queues):7;for(let g=0;g<m&&h.patrons.length+h.serving.length<12;g++)h.patrons.push(this.nextPatron())}}n.rain?(this.nextBallAt+=t,n.rain.left-=t,n.rain.left<=1e-9&&(n.rain=null,n.notice="Shower over. Full overs, slightly damp trousers. Play resumes.")):n.break?(n.break.left-=t,n.break.left<=0&&this.endBreak()):n.minute>=this.nextBallAt&&(this.bowl(),this.nextBallAt=n.minute+Z)}}updateBodies(e,t=e,n=e){var h;const a=this.state,i=this.consume(a.mike,t,this.mikeRates.alcohol);a.jeopardy.mikePintsDrunk+=i,this.mikeRates.alcohol>0&&(a.jeopardy.mikeWickets=Math.min(10,Math.floor(a.jeopardy.mikePintsDrunk+1e-9)));const r=this.consume(a.jb,t);D(a.mike.alcohol,e,85,.68,a.mike.recoveryFactor*this.mikeRates.recovery*se(a.minute-n,a.minute,a.mike.waterRecoveryUntil,a.mike.burgerRecoveryUntil)),D(a.jb.alcohol,e,78,.68,a.jb.recoveryFactor),J(a.mike,e),J(a.jb,e);const o=this.effectiveBac("mike");a.mike.sobrietyBand=H(a.mike.sobrietyBand,o),a.jb.sobrietyBand=H(a.jb.sobrietyBand,this.effectiveBac("jb")),a.mike.thirst=b(a.mike.thirst+e*(.19+o*.5)*this.mikeRates.thirst-i*20),a.mike.hunger=b(a.mike.hunger+e*.21),a.mike.bladder=b(a.mike.bladder+(e*.13+i*26)*this.mikeRates.bladder);const l=this.effectiveBac("jb");a.jb.thirst=b(a.jb.thirst+e*(.19+l*.5)-r*20),a.jb.hunger=b(a.jb.hunger+e*.21),a.jb.bladder=b(a.jb.bladder+e*.13+r*26);const u=a.mike.place===a.jb.place&&!a.mike.travelling&&!a.jb.travelling;a.mike.mood=De(a.mike.mood,Ce({minute:a.minute,thirst:a.mike.thirst,hunger:a.mike.hunger,bladder:a.mike.bladder,bac:o,sobrietyBand:a.mike.sobrietyBand,withJB:u,jbMood:a.jb.mood,awayFromSeats:a.mike.place!=="seats"||!!a.mike.travelling,queued:((h=a.mike.activity)==null?void 0:h.kind)==="queued",recentEvents:a.events}),e),a.mike.moodBand=qe(a.mike.moodBand,a.mike.mood),u&&(a.experience.togetherMinutes+=e),u&&o>=.015&&o<.06&&(a.experience.sociableMinutes+=e),(a.mike.thirst>75||a.mike.hunger>78||a.mike.bladder>78)&&(a.experience.uncomfortableMinutes+=e),a.experience.peakBac=Math.max(a.experience.peakBac,o)}consume(e,t,n=1){if(e.drinkPaused||(e.drinking<=0&&e.heldPints>0&&(e.heldPints--,e.drinking=1),e.drinking<=0))return 0;const a=Math.min(e.drinking,t/Ke);return e.drinking-=a,we(e.alcohol,a*n),a}updateTravel(e){const t=this.state;t.jb.travelling&&(t.jb.travelling.left-=e,t.jb.travelling.left<=0&&(t.jb.place=t.jb.travelling.to,t.jb.travelling=null,t.jb.independentTrip&&t.jb.place==="seats"&&(t.jb.independentTrip=!1,this.transferRoundDrinks()))),t.mike.travelling&&(t.mike.travelling.left-=e,t.mike.travelling.left<=0&&(t.mike.place=t.mike.travelling.to,t.mike.travelling=null,t.notice=`Mike arrives at ${z(t.mike.place)}.`,t.mike.place==="seats"&&!this.transferRoundDrinks()&&this.returnComment(),t.mike.place==="toilet"&&this.joinQueue("toilet")))}updateActivity(e){const t=this.state.mike.activity;t&&t.kind!=="queued"&&(t.left-=e,t.kind==="eating"&&(this.state.mike.hunger=b(this.state.mike.hunger-e*5.8),this.state.mike.alcohol.foodBuffer=Math.min(1,this.state.mike.alcohol.foodBuffer+e/t.total)),t.left<=0&&this.finishActivity(t));const n=this.state.jb.activity;n&&n.kind!=="queued"&&(n.left-=e,n.kind==="eating"&&(this.state.jb.hunger=b(this.state.jb.hunger-e*5.8),this.state.jb.alcohol.foodBuffer=Math.min(1,this.state.jb.alcohol.foodBuffer+e/n.total)),n.left<=0&&this.finishJBActivity(n))}updateQueues(e){for(const t of["bar","food","toilet"]){const n=this.state.queues[t];if(n.serving=n.serving.flatMap(a=>{const i=a.left-e;return i>1e-8?[{...a,left:i}]:[]}),this.ensureQueueNPC(n),!n.patrons.length){n.carry=0;continue}for(n.carry+=e;n.carry>=w[t]&&n.patrons.length;){n.carry-=w[t];const a=n.patrons.shift();if(a==="mike"&&this.beginService(t),a==="jb"&&this.beginJBService(t),a!=null&&a.startsWith("fan-")){const i=w[t]*1.35;n.serving.push({patron:a,left:i,total:i})}}this.ensureQueueNPC(n)}}ensureQueueNPC(e){!(e.patrons.some(n=>n.startsWith("fan-"))||e.serving.some(n=>n.patron.startsWith("fan-")))&&e.patrons.length+e.serving.length<12&&e.patrons.push(this.nextPatron())}queueArrivals(){const e=this.state,t=this.queueArrivalRate();for(const n of["bar","food","toilet"]){const a=n==="bar"?1:n==="toilet"?.82:.7,i=e.queues[n];for(let r=this.split?t*a*this.split.queues:t*a;r>0&&i.patrons.length+i.serving.length<12;r-=1)this.worldRng.next()<Math.min(1,r)&&i.patrons.push(this.nextPatron());this.ensureQueueNPC(i)}}upcomingBreak(){return oe(this.state,this.nextBallAt)}queueArrivalRate(){return this.state.rain?2.4:le(this.state.minute,this.upcomingBreak(),this.state.break,this.lastBreakEnded)}rescueRouteActive(e){const t=this.state.mike,n=e==="bladder"?"toilet":"food";return t.travelling?t.travelling.to===n:t.place!==n?!1:t.activity?e==="bladder"?t.activity.facility==="toilet"&&t.activity.purchase==="toilet":t.activity.facility==="food"&&t.activity.purchase==="burger":!0}estimatedRescueMinutes(e){var l;const t=this.state.mike,n=e==="bladder"?"toilet":"food",a=((l=t.travelling)==null?void 0:l.to)===n?t.travelling.left:t.place===n?0:t.place==="seats"?4:6,i=t.activity;let r=0;if((i==null?void 0:i.facility)===n){if(i.kind==="queued")r=this.queueWaitMinutes();else if(i.kind==="service")r=i.left;else if(i.kind==="eating")return a+Math.max(0,(t.hunger-p.hunger.terminal+1)/5.59)}else{const u=this.state.queues[n],h=w[n];r=Math.max(0,(u.patrons.length+1)*h-u.carry)}const o=e==="bladder"?2:3.5;return a+r+o}tryCommitRescue(e){if(e==="bladder")return!1;const t=this.state,n=p[e],a=t.mike.hunger;if(t.phase!=="match"||t.jeopardy.rescue||t.jeopardy.rescueUsed[e]||a<n.warning||a>n.rescueLatest||!this.rescueRouteActive(e))return!1;const r=this.estimatedRescueMinutes(e)+3;if(r>n.maxGrace)return!1;const o=this.peopleMinutes;return t.jeopardy.rescue={need:e,destination:"food",startedAt:o,deadline:o+r},t.jeopardy.rescueUsed[e]=!0,t.notice="Food trip committed. Keep going until the burger starts to settle things.",!0}makeFailure(e){const t=this.state;if(t.phase!=="match")return;const n=Ge[e],a=n[Math.floor(this.dialogueRng.next()*n.length)];this.settleJBAtFullTime(),t.jeopardy.failure={cause:e,...a,title:e==="alcohol"?"TOO DRUNK":a.title,minute:t.minute},t.phase="result",t.result=t.jeopardy.failure.title,t.notice=a.message,t.speech=a.message,t.speechUntil=1/0,e==="jb"&&(t.jb.departed=!0,t.jb.mood=0)}updateJeopardy(e){const t=this.state,n=t.mike,a=t.jeopardy;if(t.phase!=="match")return;if(a.mikeWickets>=10){this.makeFailure("alcohol");return}n.bladder<p.bladder.resetRescueBelow&&(a.rescueUsed.bladder=!1),n.hunger<p.hunger.resetRescueBelow&&(a.rescueUsed.hunger=!1),a.rescue&&!this.rescueRouteActive(a.rescue.need)&&(a.rescue=null),!a.rescue&&this.rescueRouteActive("bladder")&&this.tryCommitRescue("bladder"),!a.rescue&&this.rescueRouteActive("hunger")&&this.tryCommitRescue("hunger");const i=this.peopleMinutes;a.rescue&&i>=a.rescue.deadline&&(a.rescue=null);const r=h=>{var m;return((m=a.rescue)==null?void 0:m.need)===h&&i<a.rescue.deadline&&this.rescueRouteActive(h)};if(n.bladder>=p.bladder.terminal){this.makeFailure("bladder");return}if(n.hunger>=p.hunger.terminal&&!r("hunger")){this.makeFailure("hunger");return}const o=this.bacForMike(),l=p.alcohol;if(a.alcoholHighMinutes=o>l.rawIndex+1e-12?a.alcoholHighMinutes+e:o<l.rawIndex-1e-12?Math.max(0,a.alcoholHighMinutes-e*l.decayRate):a.alcoholHighMinutes,a.alcoholHighMinutes+1e-9>=l.terminalAfterMinutes){this.makeFailure("alcohol");return}if(!(t.roundOwner==="mike"&&t.jb.sharedRoundsBought>0&&!t.jb.departed))a.jbDueMinutes=0,a.jbWarningStage=0;else if(t.jb.sobrietyBand<=2&&!t.break&&!n.travelling&&!n.activity&&!t.jb.travelling&&!t.jb.activity&&n.place===t.jb.place&&(a.jbDueMinutes+=e),a.jbWarningStage===0&&a.jbDueMinutes>=p.jb.reminderAfterMinutes&&(a.jbWarningStage=1,this.say("round-warning",10)),a.jbWarningStage===1&&a.jbDueMinutes>=p.jb.finalAfterMinutes&&(a.jbWarningStage=2,this.say("round-final-warning",12)),a.jbDueMinutes>=p.jb.leaveAfterMinutes){this.makeFailure("jb");return}}updateJB(){const e=this.state;if(e.jb.activity)return;if(e.jb.awaitingRoundChoice){(e.jb.bladder>=70||e.jb.hunger>=68)&&(e.jb.awaitingRoundChoice=!1,e.jb.roundChoiceSecondsLeft=0,e.jb.barTripPurpose=null,this.startJBErrand(e.jb.bladder>=70?"toilet":"food"));return}if(e.jb.independentTrip&&!e.jb.travelling&&e.minute>=e.jb.returnAt&&e.jb.place!=="seats"){this.sendJB("seats");return}if(e.jb.independentTrip&&!e.jb.travelling&&e.jb.place!=="seats"){e.jb.place==="bar"&&e.jb.barChoice?this.letJBBuyRound():e.jb.place==="food"?this.joinJBQueue("burger"):e.jb.place==="toilet"&&this.joinJBQueue("toilet");return}if(!(e.jb.place==="seats"&&!e.jb.travelling&&!e.jb.independentTrip&&!e.break))return;if(e.jb.bladder>=70){this.startJBErrand("toilet");return}if(e.jb.hunger>=68){this.startJBErrand("food");return}if(!(e.mike.place==="seats"&&!e.mike.travelling))return;const a=e.mike.heldPints+e.mike.drinking+e.mike.carriedPints+e.jb.heldPints+e.jb.drinking+e.jb.carriedPints<.01;if(e.roundOwner==="jb"&&e.minute>=e.nextJBRoundAt&&a){this.askForBarChoice();return}const i=e.jb.sharedRoundsBought===0&&e.jb.waters===0&&e.mike.waters===0&&e.jeopardy.mikePintsDrunk===0,r=a&&this.worldRng.next()<.008;a&&(i||e.jb.thirst>=72||r)&&(e.roundOwner="jb",this.askForBarChoice())}askForBarChoice(){const e=this.state;e.jb.awaitingRoundChoice=!0,e.jb.roundChoiceSecondsLeft=20,e.jb.barTripPurpose="round",e.notice="JB offers his round: 2 pints (one each), 4 pints (two each), or water. No answer in 20 seconds means one each.",this.say("jb-round-request",1/0)}startJBErrand(e){const t=this.state.jb;t.tripNote=null,t.independentTrip=!0,t.returnAt=1/0,this.sendJB(e)}chooseJBBarOrder(e){const t=this.state,n=t.jb.barTripPurpose;return t.phase!=="match"||!t.jb.awaitingRoundChoice||n!=="round"||t.roundOwner!=="jb"?!1:(t.jb.awaitingRoundChoice=!1,t.jb.roundChoiceSecondsLeft=0,t.jb.barChoice=e,t.jb.roundSize=e==="pint-4"?4:2,t.jb.tripNote=null,this.sendJB("bar"),t.jb.independentTrip=!0,t.jb.roundTrip=!0,t.jb.returnAt=1/0,t.notice=e==="water"?"JB heads to the bar for water.":`JB heads to the bar for ${t.jb.roundSize} shared-round pints.`,this.say("jb-round",8),!0)}joinJBQueue(e){const t=this.state,n=t.jb;if(t.phase!=="match"||n.place!==(e==="burger"?"food":"toilet")||n.travelling||n.activity)return;const a=e==="burger"?"food":"toilet";n.independentTrip=!1,n.activity={kind:"queued",facility:a,purchase:e,left:0,total:0},t.queues[a].patrons.push("jb"),t.notice=e==="burger"?`JB joins the food queue: ${this.jbQueueAhead()} ahead.`:`JB joins the toilet queue: ${this.jbQueueAhead()} ahead.`}nextPatron(){return`fan-${++this.queuePersonId}`}travel(e,t=!1){const n=this.state,a=n.mike;if(n.phase!=="match"||a.travelling||a.activity||!_(a.place,e))return!1;const i=a.place,r=i==="seats"||e==="seats"?4:6;a.travelling={from:i,to:e,left:r,total:r},this.state.jeopardy.rescue&&this.state.jeopardy.rescue.destination!==e&&(this.state.jeopardy.rescue=null),t&&n.jb.place===i&&!n.jb.travelling&&!n.jb.activity&&(n.jb.travelling={from:i,to:e,left:r,total:r}),n.notice=`Mike heads for ${z(e)}. Play continues.`;const o=e==="toilet"?"bladder":e==="food"?"hunger":null;return o&&this.tryCommitRescue(o),i==="seats"&&n.jb.place==="seats"&&!t&&this.say("leaving",5),!0}sendJB(e){const t=this.state.jb;if(t.place===e||t.travelling||t.activity)return;const n=t.place,a=n==="seats"||e==="seats"?4:6;t.travelling={from:n,to:e,left:a,total:a}}joinQueue(e){const t=this.state,n=e.startsWith("pint")||e==="water"?"bar":e==="burger"?"food":"toilet";if(t.phase!=="match"||t.mike.place!==n||t.mike.travelling||t.mike.activity)return!1;if((e==="pint-2"||e==="pint-4")&&!this.sharedRoundAvailability().allowed)return t.notice=this.sharedRoundAvailability().reason,!1;t.mike.activity={kind:"queued",facility:n,purchase:e,left:0,total:0},t.queues[n].patrons.push("mike");const a=t.jeopardy.rescue;return a&&(a.need==="bladder"&&e!=="toilet"||a.need==="hunger"&&e!=="burger")&&(t.jeopardy.rescue=null),e==="toilet"&&this.tryCommitRescue("bladder"),e==="burger"&&this.tryCommitRescue("hunger"),t.notice=`Mike joins the back: ${this.queueAhead()} ${this.queueAhead()===1?"person":"people"} ahead.`,!0}beginService(e){const t=this.state.mike.activity;if(!t||t.kind!=="queued"||t.facility!==e)return;const n=e==="bar"?2:e==="food"?2.5:2;t.kind="service",t.left=n,t.total=n,this.state.notice=e==="toilet"?"Mike reaches the front. Sweet relief awaits.":"Mike reaches the counter."}beginJBService(e){const t=this.state.jb.activity;if(!t||t.kind!=="queued"||t.facility!==e)return;const n=e==="food"?2.5:2;t.kind="service",t.left=n,t.total=n,this.state.notice=e==="bar"?`JB reaches the bar for ${this.jbChoiceLabel()}.`:e==="food"?"JB reaches Beefy’s and orders a burger.":"JB reaches Fine Leg. Sweet relief awaits."}jbChoiceLabel(){const e=this.state.jb.barChoice;return e==="water"?"one water":e?`${Number(e.slice(-1))} pints`:"his order"}finishJBActivity(e){const t=this.state,n=t.jb;if(e.kind==="eating"){n.activity=null,n.independentTrip=!0,n.returnAt=t.minute,this.sendJB("seats"),t.notice="JB finishes his burger and heads back to the seats.";return}if(e.facility==="food"&&e.purchase==="burger"){n.totalSpend+=x.burger,n.burgers++,n.activity={...e,kind:"eating",left:8,total:8},t.notice="JB starts eating. This takes a while.";return}if(e.facility==="toilet"&&e.purchase==="toilet"){n.toilets++,n.bladder=b(n.bladder-86),n.activity=null,n.independentTrip=!0,n.returnAt=t.minute,this.sendJB("seats"),t.notice="JB takes care of business and heads back.";return}const a=n.barChoice;if(e.facility!=="bar"||!a||n.barTripPurpose!=="round"){this.cancelJBBarOrder("JB’s order was cancelled before purchase. Nothing was charged.",!1);return}if(n.totalSpend+=x[a],a==="water")this.drinkWater("jb"),n.carriedWaters++,t.roundOwner="mike",t.nextJBRoundAt=t.minute+45,t.notice="JB buys two waters, one each, and brings Mike’s back to the seats.";else{const i=Number(a.slice(-1)),r=i/2;n.heldPints+=r,n.carriedPints+=r,n.sharedRoundsBought++,t.roundOwner="mike",t.nextJBRoundAt=t.minute+45,t.notice=`JB buys ${i} pints for the pair and heads back.`}n.activity=null,n.roundTrip=!1,n.independentTrip=!0,n.returnAt=t.minute,n.barChoice=null,n.barTripPurpose=null,this.sendJB("seats")}finishActivity(e){var i,r;const t=this.state,n=t.mike;if(e.kind==="eating"){n.burgerRecoveryUntil=t.minute+60,n.activity=null,((i=t.jeopardy.rescue)==null?void 0:i.need)==="hunger"&&(t.jeopardy.rescue=null),t.notice="Burger demolished. The day can continue.";return}const a=e.purchase;if(n.totalSpend+=x[a],a==="jb-round")n.heldPints++,t.jb.heldPints++,t.roundOwner="mike",t.notice="JB gets his round in. Miracles happen.",t.speech="Your round next. I have witnesses.",t.speechUntil=t.minute+8;else if(a.startsWith("pint")){const o=Number(a.slice(-1)),l=o===4?2:1;n.heldPints+=l,o>=2&&(n.carriedPints+=o-l),t.jb.mood=b(t.jb.mood+4),o>=2&&(t.roundOwner="jb",t.nextJBRoundAt=t.minute+45),t.notice=`${o} ${o===1?"pint":"pints"} collected. They’ll be drunk over time.`}else if(a==="water")this.drinkWater("mike"),n.carriedWaters++,t.notice="Two waters, one each. Bring JB’s back to the seats.";else if(a==="burger"){n.burgers++,n.activity={kind:"eating",facility:"food",purchase:a,left:8,total:8},t.notice="Mike starts eating. This takes a while.";return}else n.toilets++,n.bladder=b(n.bladder-86),((r=t.jeopardy.rescue)==null?void 0:r.need)==="bladder"&&(t.jeopardy.rescue=null),t.notice="Relief. The day can continue.";n.activity=null}letJBBuyRound(){const e=this.state;return e.phase!=="match"||e.jb.place!=="bar"||e.jb.travelling||e.jb.activity||!e.jb.barChoice?!1:(e.jb.independentTrip=!1,e.jb.returnAt=0,e.jb.activity={kind:"queued",facility:"bar",purchase:"jb-round",left:0,total:0},e.queues.bar.patrons.push("jb"),e.notice=`JB joins the back for ${this.jbChoiceLabel()}: ${this.jbQueueAhead()} ahead.`,this.say("jb-round"),!0)}cancelJBBarOrder(e,t){var r;const n=this.state,a=n.jb,i=a.activity;if((i==null?void 0:i.kind)==="queued"){const o=n.queues[i.facility],l=o.patrons.indexOf("jb");l>=0&&o.patrons.splice(l,1)}a.activity=null,a.barChoice=null,a.barTripPurpose=null,a.roundTrip=!1,a.independentTrip=!1,a.returnAt=0,a.tripNote=e,t?(a.travelling=null,a.place="seats"):((r=a.travelling)==null?void 0:r.to)==="bar"?a.travelling=null:a.place!=="seats"&&this.sendJB("seats"),n.notice=e}transferRoundDrinks(){const e=this.state;if(e.mike.place!=="seats"||e.jb.place!=="seats"||e.mike.travelling||e.jb.travelling)return!1;for(const[a,i]of[["mike","jb"],["jb","mike"]])for(;e[a].carriedWaters>0;)e[a].carriedWaters--,this.drinkWater(i),e.notice=`${a==="mike"?"Mike":"JB"} hands over water. One each.`;const t=e.mike.carriedPints;let n=!1;if(t){const i=e.events.some(l=>l.id>e.lastReturnEvent&&l.jbSaw&&!l.mikeSaw&&["wicket","four","six"].includes(l.kind))?"missed":e.jb.thirst>=65?"thirsty":null,r=t>=2?"two":"one",o=i?`round-thanks-${i}-${r}`:`round-thanks-${r}`;e.jb.heldPints+=t,e.mike.carriedPints=0,n=!0,e.lastReturnEvent=this.eventId,this.say(o,8,!0)}if(e.jb.carriedPints){const a=e.jb.carriedPints;e.mike.heldPints+=a,e.jb.carriedPints=0,n=!0,e.notice=`JB hands Mike ${a} ${a===1?"pint":"pints"} from his round.`,t||this.say("jb-round-delivered",8)}return n}jbQueueAhead(){const e=this.state.jb.activity;return!e||e.kind!=="queued"?0:Math.max(0,this.state.queues[e.facility].patrons.indexOf("jb"))}estimatedTripMinutes(e){const t=this.state.mike.place;if(!_(t,e))return 0;const n=t==="seats"||e==="seats"?4:6;return e==="seats"?n:n+this.estimatedQueueWait(e)+(e==="food"?10.5:2)}estimatedOutingMinutes(e){const t=this.estimatedTripMinutes(e);return this.state.mike.place==="seats"&&e!=="seats"?t+4:t}estimatedQueueWait(e){const t=this.state.queues[e];return Math.max(0,t.patrons.length*w[e]-t.carry)}queuePopulation(e){const t=this.state.queues[e];return t.patrons.length+t.serving.length}queueAhead(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons.indexOf("mike");return Math.max(0,t)}queueBehind(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons,n=t.indexOf("mike");return n<0?0:t.length-n-1}queueWaitMinutes(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility],n=t.patrons.indexOf("mike");return n<0?0:Math.max(0,(n+1)*w[e.facility]-t.carry)}sharedRoundAvailability(){const e=this.state,t=e.mike;return e.roundOwner!=="mike"?{allowed:!1,reason:"JB has the next round."}:t.heldPints+t.drinking+t.carriedPints>.01?{allowed:!1,reason:"Finish or deliver the current pints first."}:{allowed:!0,reason:"Mike’s round: choose one or two pints each."}}chooseBowler(e){const t=Math.floor(e.balls/6),n=Object.values(e.bowling);return t!==e.lastOver&&(e.lastOver=t,e.currentBowler=n[t%n.length].player.name),e.bowling[e.currentBowler]}bowl(){const e=this.state,t=e.innings[e.inningsIndex];if(this.isInningsComplete(t)){this.finishInnings();return}const n=t.batting[t.striker],a=this.chooseBowler(t),i=(n.player.batting-a.player.bowling)/300,r=this.matchRng.next();let o="dot",l=0;const u=.031-i*.025;r<u?o="wicket":r<.455-i?o="dot":r<.755-i*.25?(o="run",l=1):r<.83?(o="run",l=2):r<.842?(o="run",l=3):r<.965+i*.3?(o="four",l=4):(o="six",l=6);const h=n.runs;t.balls++,n.balls++,a.balls++,a.runs+=l,t.runs+=l,n.runs+=l,o==="wicket"?(n.out=!0,t.wickets++,a.wickets++,t.wickets<10&&(t.striker=t.nextBatter,t.nextBatter++)):l%2===1&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]),t.balls%6===0&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]);const m=this.atSeats(e.mike),g=this.atSeats(e.jb),d=o==="wicket"?`${n.player.name} is OUT to ${a.player.name}!`:o==="six"?`${n.player.name} launches SIX!`:o==="four"?`${n.player.name} cracks FOUR.`:l?`${n.player.name} takes ${l}.`:`${a.player.name} beats the bat.`,k=[50,100,150,200].find(T=>h<T&&n.runs>=T),I=this.isInningsComplete(t)&&e.inningsIndex===1?6:k?4:o==="wicket"?3:o==="four"||o==="six"?1:0,v={id:++this.eventId,minute:e.minute,innings:e.inningsIndex+1,over:A(t.balls),team:t.team,kind:o,runs:l,batter:n.player.name,bowler:a.player.name,text:k?`${d} ${n.player.name} reaches ${k}.`:d,mikeSaw:m,jbSaw:g,importance:I};if(e.events.push(v),e.latest=v,o==="wicket"||o==="four"||o==="six"||k?this.react(v,k):t.balls%6===0&&m&&(e.notice=`End ${A(t.balls)} · ${t.team} ${t.runs}/${t.wickets}.`),this.isInningsComplete(t)){this.finishInnings();return}V.includes(t.balls/6)&&!t.drinksTaken.includes(t.balls/6)&&(t.drinksTaken.push(t.balls/6),this.startBreak("drinks",8,`Drinks break after ${t.balls/6} overs`))}atSeats(e){return e.place==="seats"&&!e.travelling}isInningsComplete(e){return e.balls>=300||e.wickets>=10||this.state.inningsIndex===1&&e.runs>this.state.innings[0].runs}react(e,t){const n=this.state,a=e.team==="England";n.crowd=e.kind==="wicket"?a?"groan":"roar":a?"roar":"ripple",n.notice=e.mikeSaw?e.text:"A roar tumbles around Riverside. Mike did not see why.",e.mikeSaw&&e.jbSaw&&n.mike.place===n.jb.place&&n.minute-n.lastDialogueAt>=3&&this.say(t?"milestone":e.kind==="wicket"?a?"england-wicket":"opponent-wicket":e.kind==="six"?"six":a?"england-boundary":"opponent-boundary",5)}startBreak(e,t,n){const a=this.state;a.break={kind:e,left:t,total:t,label:n},a.crowd="break",a.notice=`${n}. The cricket clock is paused; the concourse is not.`,this.say(e==="innings"?"interval":"drinks",8);const i=e==="innings"?{bar:7,food:6,toilet:6}:{bar:5,food:3,toilet:6};for(const r of["bar","food","toilet"])for(let o=0;o<i[r]&&a.queues[r].patrons.length+a.queues[r].serving.length<12;o++)a.queues[r].patrons.push(this.nextPatron())}endBreak(){var n;const e=this.state,t=(n=e.break)==null?void 0:n.kind;t&&(this.lastBreakEnded={kind:t,minute:e.minute}),e.break=null,this.nextBallAt=e.minute+.8,e.crowd="settled",e.notice=t==="innings"?`The chase begins. ${e.innings[1].team} need ${e.innings[0].runs+1}.`:"Drinks over. Players return to their marks."}finishInnings(){const e=this.state,t=e.innings[0];this.settleAvailableBets(),e.inningsIndex===0?(e.inningsIndex=1,this.startBreak("innings",30,`Innings interval · ${t.team} ${t.runs}/${t.wickets}`),e.speech="Interesting total. Pint?",e.speechUntil=e.minute+10):this.finishMatch()}finishMatch(){const e=this.state,t=e.innings[0],n=e.innings[1];this.settleJBAtFullTime(),n.runs>t.runs?(e.winner=n.team,e.result=`${n.team} win by ${10-n.wickets} wickets.`):t.runs>n.runs?(e.winner=t.team,e.result=`${t.team} win by ${t.runs-n.runs} runs.`):(e.winner="Tie",e.result=`A tie: both sides finish on ${t.runs}.`),this.settleAvailableBets(),e.phase="result",e.break=null,e.notice=e.result,this.say(e.winner==="England"?"win":"loss",1/0)}settleJBAtFullTime(){const e=this.state,t=e.jb,n=t.activity;if(t.barChoice&&t.barTripPurpose){this.cancelJBBarOrder("JB’s bar order was cancelled at full time. Nothing was charged.",!0);return}if(n&&n.kind!=="eating"){if(n.kind==="queued"){const a=e.queues[n.facility],i=a.patrons.indexOf("jb");i>=0&&a.patrons.splice(i,1)}t.activity=null,t.independentTrip=!1,t.travelling=null,t.place="seats",t.tripNote="JB’s trip was cut short at full time. Nothing was charged.";return}(n==null?void 0:n.kind)==="eating"&&(t.activity=null),t.awaitingRoundChoice=!1,t.roundChoiceSecondsLeft=0,t.barTripPurpose=null,(t.independentTrip||t.travelling)&&(t.independentTrip=!1,t.travelling=null,t.place="seats",this.transferRoundDrinks())}settleAvailableBets(){var t,n;const e=this.state;if(((t=e.mikeBet)==null?void 0:t.won)===null)if(e.mikeBet.pick==="England 250+"){const a=e.innings.find(i=>i.team==="England");this.isInningsComplete(a)&&(e.mikeBet.won=a.runs>=250,e.mikeBet.payout=e.mikeBet.won?25:0)}else e.winner&&(e.mikeBet.won=e.mikeBet.pick===e.winner,e.mikeBet.payout=e.mikeBet.won?20:0);if(((n=e.jbBet)==null?void 0:n.won)===null)if(e.jbBet.pick==="England 250+"){const a=e.innings.find(i=>i.team==="England");this.isInningsComplete(a)&&(e.jbBet.won=a.runs>=250,e.jbBet.payout=e.jbBet.won?25:0)}else e.winner&&(e.jbBet.won=e.jbBet.pick===e.winner,e.jbBet.payout=e.jbBet.won?20:0)}returnComment(){const e=this.state;if(!this.atSeats(e.jb))return;const t=e.events.filter(o=>o.id>e.lastReturnEvent&&!o.mikeSaw),n=t.filter(o=>o.jbSaw&&["wicket","four","six"].includes(o.kind)),a=t.filter(o=>!o.jbSaw&&["wicket","four","six"].includes(o.kind));e.lastReturnEvent=this.eventId;const i=n.filter(o=>o.kind==="wicket").length,r=n.filter(o=>o.kind==="four"||o.kind==="six").length;this.say(i&&r?"missed-mixed":i?"missed-wicket":r?"missed-boundary":a.length?"both-missed":"returning",8)}talk(){const e=this.state,t=e.mike.place===e.jb.place&&!e.mike.travelling&&!e.jb.travelling;return e.phase!=="match"||!t||e.mike.activity||e.jb.activity?!1:(this.say(this.contextualDialogue(),8),e.jb.lastTalk=e.minute,!0)}contextualDialogue(){const e=this.state,t=e.innings[e.inningsIndex];if(e.break)return e.break.kind==="innings"?"interval":"drinks";if(e.mike.place==="bar")return"bar";if(e.mike.place==="food")return"food";if(e.mike.place==="toilet")return e.mike.bladder>60?"toilet":"toilet-venue";if(e.inningsIndex===1){const i=Math.max(0,e.innings[0].runs+1-t.runs),r=300-t.balls;if(i<=30&&r<=36)return"close-finish";if(F(i,r)>9)return"high-rrr"}const n=[t.batting[t.striker],t.batting[t.nonStriker]];if(n.some(i=>[50,100,150].some(r=>i.runs>=r-6&&i.runs<r)))return"near-milestone";if(e.mike.bladder>72)return"toilet";if(e.mike.hunger>70)return"hungry";if(e.mike.totalSpend>38)return"spending";if(e.mike.sobrietyBand>=3)return"wobbly";if(e.mike.sobrietyBand>=2)return"merry";const a=e.events.filter(i=>i.innings===e.inningsIndex+1&&i.jbSaw&&e.minute-i.minute<=12).slice(-6);if(a.length===6&&a[5].minute-a[0].minute<7){const i=a.reduce((r,o)=>r+o.runs,0);if(i>=18)return"accelerating";if(i>=12)return"bad-bowling";if(i<=2)return"good-bowling"}if(e.events.filter(i=>i.innings===e.inningsIndex+1&&i.kind==="wicket"&&e.minute-i.minute<22).length>=3)return"collapse";if(n.every(i=>i.runs>=30))return"partnership";if(e.inningsIndex===1){const i=Math.max(0,e.innings[0].runs+1-t.runs),r=300-t.balls;return F(i,r)>7?"chase-behind":"chase-ahead"}return e.mike.sobrietyBand===0&&e.minute>75?"sober":"quiet"}maybeAmbientDialogue(){const e=this.state;e.minute-e.lastDialogueAt<14||e.mike.place!==e.jb.place||e.mike.travelling||e.jb.travelling||e.mike.activity||this.dialogueRng.next()<.18&&this.say(this.contextualDialogue(),7)}say(e,t=8,n=!1){if(We(e)&&!n)return;const a=this.state,i=Ee(e,this.dialogueRng,a.dialogueHistory.slice(-12));a.speech=i,a.speechUntil=t===1/0?1/0:a.minute+t,a.lastDialogueAt=a.minute,a.speechCategory=e,a.speechHandoverAt=n?a.minute:null,a.dialogueHistory.push(i),a.dialogueHistory.length>20&&a.dialogueHistory.shift()}setSpeed(e){this.state.phase==="match"&&(this.state.speed=e)}setMikeDrinkingPaused(e){const t=this.state.mike;return this.state.phase!=="match"||t.drinking<=.001&&t.heldPints<=0||t.drinkPaused===e?!1:(t.drinkPaused=e,this.state.notice=e?"Mike sets his drink and reserve down. They will wait.":"Mike picks his pint back up.",!0)}bacForMike(){return q(this.state.mike.alcohol,85,.68)}bacForJB(){return q(this.state.jb.alcohol,78,.68)}drinkWater(e){const t=this.state[e];t.waters++,t.thirst=b(t.thirst-38),t.bladder=b(t.bladder+8*(e==="mike"?this.mikeRates.bladder:1)),ke(t),e==="mike"&&(this.state.mike.waterRecoveryUntil=this.state.minute+60)}mikeRecoveryMultiplier(){const{minute:e,mike:t}=this.state;return L(e,t.waterRecoveryUntil,t.burgerRecoveryUntil)}effectiveBac(e){const t=this.state[e],n=e==="mike"?this.bacForMike():this.bacForJB();return ye(n,t.waterRelief)}sobriety(e){return ve(this.state[e].sobrietyBand)}drunkGait(e="mike"){return Se(this.state[e].sobrietyBand)}needLabel(e,t,n,a,i){return e<25?t:e<50?n:e<75?a:e<90?i:"Emergency"}moodLabel(){return He(this.state.mike.moodBand)}criticalWarnings(){const e=this.state,t=e.jeopardy.rescue;return{bladder:e.mike.bladder>=p.bladder.warning&&(t==null?void 0:t.need)!=="bladder",hunger:e.mike.hunger>=p.hunger.warning&&(t==null?void 0:t.need)!=="hunger",alcohol:Ye(e.jeopardy,e.mike.sobrietyBand,e.mike.drinkPaused)}}completedDay(){const e=this.state;return e.phase==="result"&&!e.jeopardy.failure&&!e.endedEarly}dayScore(){var P;const e=this.state,t=this.completedDay(),n=e.events.reduce((y,S)=>y+S.importance,0),a=e.events.filter(y=>y.mikeSaw).reduce((y,S)=>y+S.importance,0),i=n?a/n:0,r=e.innings.reduce((y,S)=>y+S.balls,0),o=t?1:Math.min(1,r/ze),l=(P=e.mikeBet)==null?void 0:P.won,u=l===!0?30:l===!1?-5:0,h=Math.round(i*o*95),m=Math.min(48,e.experience.togetherMinutes*.035+e.experience.sociableMinutes*.12),g=Math.min(45,e.experience.uncomfortableMinutes*.08),d=Math.max(0,e.mike.totalSpend-36),k=Math.pow(d,1.18)*.55,W=Math.max(0,e.experience.peakBac-.075)*650,I=(e.mike.mood-50)*.28,v=e.jeopardy.failure?-20:e.endedEarly?-10:t?35:0,T=Math.max(0,Math.round(100+h+m+u+I-g-k-W+v)),ne=l===!0?"Free bet came in":l===!1?"Free bet went west":"Free bet void",B=[`${Math.round(i*100)}% of key cricket witnessed`,`${Math.round(e.experience.togetherMinutes)} minutes with JB`,ne,`£${e.mike.totalSpend.toFixed(2)} spent`,`${Math.round(e.experience.uncomfortableMinutes)} uncomfortable minutes`,`${this.moodLabel()} at the close`];return e.jeopardy.failure?B.push(`Day ended early: ${e.jeopardy.failure.cause} (-20)`):e.endedEarly?B.push("Left early (-10)"):t&&B.push("Completed the full day (+35)"),{total:T,reasons:B}}scoreboard(){const e=this.state,t=e.innings[e.inningsIndex],n=t.batting[t.striker],a=t.batting[t.nonStriker],i=t.bowling[t.currentBowler],r=t.balls/6,o=e.inningsIndex===1?e.innings[0].runs+1:null,l=o===null?null:Math.max(0,o-t.runs),u=o===null?null:Math.max(0,300-t.balls);return{team:t.team,runs:t.runs,wickets:t.wickets,overs:A(t.balls),striker:(n==null?void 0:n.player.name)??"—",strikerRuns:(n==null?void 0:n.runs)??0,nonStriker:(a==null?void 0:a.player.name)??"—",nonStrikerRuns:(a==null?void 0:a.runs)??0,bowler:(i==null?void 0:i.player.name)??"—",bowlerFigures:i?`${A(i.balls)}–${i.runs}–${i.wickets}`:"—",currentRunRate:r>0?t.runs/r:0,target:o,need:l,ballsRemaining:u,requiredRunRate:l===null||u===null?null:F(l,u)}}}export{Xe as D,p as J,U as P,Ye as a,We as i,He as m,A as o,z as p,ve as s,Ze as t,qe as u};
