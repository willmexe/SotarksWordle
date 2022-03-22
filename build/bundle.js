var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function g(){return d(" ")}function f(){return d("")}function h(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function p(e,t){e.value=null==t?"":t}function S(e,t,n,a){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,a?"important":"")}let k;function y(e){k=e}const C=[],T=[],b=[],A=[],P=Promise.resolve();let I=!1;function L(e){b.push(e)}const R=new Set;let M=0;function N(){const e=k;do{for(;M<C.length;){const e=C[M];M++,y(e),w(e.$$)}for(y(null),C.length=0,M=0;T.length;)T.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];R.has(t)||(R.add(t),t())}b.length=0}while(C.length);for(;A.length;)A.pop()();I=!1,R.clear(),y(e)}function w(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const x=new Set;function O(e,t){-1===e.$$.dirty[0]&&(C.push(e),I||(I=!0,P.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(o,l,s,c,u,d,g,f=[-1]){const h=k;y(o);const m=o.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:l.target||h.$$.root};g&&g(m.root);let v=!1;if(m.ctx=s?s(o,l.props||{},((e,t,...n)=>{const a=n.length?n[0]:t;return m.ctx&&u(m.ctx[e],m.ctx[e]=a)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](a),v&&O(o,e)),t})):[],m.update(),v=!0,a(m.before_update),m.fragment=!!c&&c(m.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);m.fragment&&m.fragment.l(e),e.forEach(i)}else m.fragment&&m.fragment.c();l.intro&&((p=o.$$.fragment)&&p.i&&(x.delete(p),p.i(S))),function(e,n,o,l){const{fragment:s,on_mount:i,on_destroy:c,after_update:u}=e.$$;s&&s.m(n,o),l||L((()=>{const n=i.map(t).filter(r);c?c.push(...n):a(n),e.$$.on_mount=[]})),u.forEach(L)}(o,l.target,l.anchor,l.customElement),N()}var p,S;y(h)}let E=["Kyoukai no Kanata","Zankyo Sanka","Kaikai Kitan","Super * Affection","Honey Come!!","One In A Billion","Yakusoku -Promise code-","Last Chapter","STONE OCEAN","Say Goodbye","Gyakkyou Spectrum","Tomadoi Recipe","Delta Decision","I'm so excited (feat. Bobby John)","Yuke","Cynthia no Hikari","Flamewall","AVENGE WORLD","Heavy Rotation","Sing My Pleasure","Koko kara Saki wa Uta ni Naranai","START!! True dreams","Like Flames","reiwa anthem","Plastic Smile","Kira Kira Days","The Big Black","I Wanna Guinea Pig For Christmas","Zutto Summer de Koishiteru","Acacia","CLOSER","over and over","FLAME","Shiny Smily Story","Nanairo Symphony","FLYING OUT TO THE SKY","Realize","Songs Compilation IV","Starlight Wonder","Triple Baka","sabotage","Make you happy","Beginner's Sailing","Theater of Life","Angel With A Shotgun","Scar/let","ChuChu Lovely MuniMuni MuraMura PrinPrin Boron Nururu ReroRero","HAPPY PARTY TRAIN","ANIMA","1,000,000 TIMES","crossing field","Till the End","courage","IGNITE","INNOCENCE","Realize","The Guinea Pig Is In Your Mind","Wonder Stella","Shuriken School","Dori Dori","Bubble Gun","Megumi no Ame (TV Size)","Songs Compilation III","Hoshi o Atsumete","Gurenge feat. Un3h [ dj-Jo Remix ]","Anemone no Hana","DROPOUT!?","Sunflower","Kyuukyoku Unbalance!","Play the world","Yasashisa no Riyuu","starlog","Cold Green Eyes feat. Roos Denayer","Road of Resistance","Dance with Minotaurus","PADORU / PADORU","Mitaiken HORIZON","Yuuki wa Doko ni? Kimi no Mune ni!","where you are","Koukai no Uta","Resolution","Berry Go!!","HAPPY HAPPY","Selfrontier","identity","Yosoku Fukano Driving!","Guinea Pig Olympics","Bouken Type A, B, C!!","Ima Suki ni Naru.","AaAaAaAAaAaAAa","WINGS OF JUSTICE","Brightest Melody","Natsuzora Yell","Louder than steel","osu!memories 2","Til Death","Team Magma & Aqua Leader Battle Theme (Unofficial)","Guinea Pig Bridge","Ao no Kanata","Boku o Mitsukete","Diamond","MIIRO","JUSTadICE","American Girls","narrative","Watashi o Kureta Minna e","Totsugeki Rock","Rockefeller Street","Ai no Sukima","Scarlet Flower","Kyouran Hey Kids!!","Overkill","Colorful","Gold Dust","United (L.A.O.S Remix)","Ringo Ribbon","Taisetsu no Tsukurikata (Asterisk Remix)","Niji o Ametara","U Got That","Taisetsu no Tsukurikata","Kimi to Iu Tokuiten","POP/STARS","Walk This Way!","Idola no Circus","A New Journey","Guess Who Is Back","Kaze no Uta","Sorairo Picture","RESISTER","STORIES","Reimei","Fatima","BLACK MEMORY","quaver","RAISE MY SWORD","Reimei","Snow Halation","Tenshi ni Fureta yo!","Kimi no Bouken","Clock Strikes","Heart Shaker","1HOPE SNIPER","The Noise of Rain","color","Storyteller","Cry Thunder","Echame La Culpa","Kimi no Sei","Sora ni Utaeba","Unmei Dilemma","Watashi, Idol Sengen","Sword Art Online Compilation","ADAMAS","Natsuiro Egao de 1, 2, Jump!","DANZEN! Futari wa PreCure Ver. MaxHeart","Hoshikuzu no Interlude","Super Driver","Harumachi Clover","km/h","CHEER UP","MY LIBERATION","Songs Compilation II","Black Rover","Star!!","MAYDAY","Despacito","Q&A Recital!","o!IMC#2 Compilation","ReI","How Far I'll Go","Leave It All To Me","Do you realize?","SLATEPORT CITY","Sidetracked Day","Monochrome Butterfly","Make a Move","FREEDOM DIVE","Shounen Ripples","Dead To Me","(can you) understand me?","Yugioh! Theme","Kimi no Sumu Machi","Los! Los! Los!","Blade Dance","Colors Power ni Omakasero!","Natsu no Owari","Best FriendS","Airman ga Taosenai","Orange","Putin's Boner","Platform Syndrome","Tsuki to Hanatabe","Songs Compilation","Passcode 4854","Hashi no Kakera","Kimi no shiranai monogatari","Toumei Elegy","Immortal Flame"];function $(e,t,n){const a=e.slice();return a[15]=t[n],a[17]=n,a}function D(e,t,n){const a=e.slice();return a[18]=t[n],a}function H(e,t,n){const a=e.slice();return a[21]=t[n],a[17]=n,a}function K(e,t,n){const a=e.slice();return a[21]=t[n],a[17]=n,a}function G(e,t,n){const a=e.slice();return a[21]=t[n],a[17]=n,a}function Y(e,t,n){const a=e.slice();return a[21]=t[n],a[17]=n,a}function U(e,t,n){const a=e.slice();return a[21]=t[n],a[17]=n,a}function _(e){let t,n,a;return{c(){t=u("div"),n=d(e[21]),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc")},m(e,r){s(e,t,r),l(t,n),l(t,a)},d(e){e&&i(t)}}}function W(e){let t,n,a;return{c(){t=u("div"),n=d(e[21]),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc"),S(t,"background-color","#d4ff8a")},m(e,r){s(e,t,r),l(t,n),l(t,a)},d(e){e&&i(t)}}}function F(t){let n;let a=function(e,t){return 0==e[17]?W:_}(t),r=a(t);return{c(){r.c(),n=f()},m(e,t){r.m(e,t),s(e,n,t)},p:e,d(e){r.d(e),e&&i(n)}}}function J(e){let t,n,a;return{c(){t=u("div"),n=d(e[21]),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc")},m(e,r){s(e,t,r),l(t,n),l(t,a)},d(e){e&&i(t)}}}function j(e){let t,n,a;return{c(){t=u("div"),n=d(e[21]),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc"),S(t,"background-color","#fffd8c")},m(e,r){s(e,t,r),l(t,n),l(t,a)},d(e){e&&i(t)}}}function z(t){let n;let a=function(e,t){return 1==e[17]?j:J}(t),r=a(t);return{c(){r.c(),n=f()},m(e,t){r.m(e,t),s(e,n,t)},p:e,d(e){r.d(e),e&&i(n)}}}function V(t){let n,a,r;return{c(){n=u("div"),a=d(t[21]),r=g(),m(n,"class","resultBarLetter svelte-14u2ngc")},m(e,t){s(e,n,t),l(n,a),l(n,r)},p:e,d(e){e&&i(n)}}}function Z(e){let t,n=e[0],a=[];for(let t=0;t<n.length;t+=1)a[t]=Q(H(e,n,t));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=f()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);s(e,t,n)},p(e,r){if(1&r){let o;for(n=e[0],o=0;o<n.length;o+=1){const l=H(e,n,o);a[o]?a[o].p(l,r):(a[o]=Q(l),a[o].c(),a[o].m(t.parentNode,t))}for(;o<a.length;o+=1)a[o].d(1);a.length=n.length}},d(e){c(a,e),e&&i(t)}}}function q(e){let t,n=e[2][e[18]],a=[];for(let t=0;t<n.length;t+=1)a[t]=ne(K(e,n,t));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=f()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);s(e,t,n)},p(e,r){if(132&r){let o;for(n=e[2][e[18]],o=0;o<n.length;o+=1){const l=K(e,n,o);a[o]?a[o].p(l,r):(a[o]=ne(l),a[o].c(),a[o].m(t.parentNode,t))}for(;o<a.length;o+=1)a[o].d(1);a.length=n.length}},d(e){c(a,e),e&&i(t)}}}function Q(e){let t,n,a,r=e[21]+"";return{c(){t=u("div"),n=d(r),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc")},m(e,r){s(e,t,r),l(t,n),l(t,a)},p(e,t){1&t&&r!==(r=e[21]+"")&&v(n,r)},d(e){e&&i(t)}}}function X(e){let t,n,a,r=e[21]+"";return{c(){t=u("div"),n=d(r),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc")},m(e,r){s(e,t,r),l(t,n),l(t,a)},p(e,t){4&t&&r!==(r=e[21]+"")&&v(n,r)},d(e){e&&i(t)}}}function ee(e){let t,n,a,r=e[21]+"";return{c(){t=u("div"),n=d(r),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc"),S(t,"background-color","#fffd8c")},m(e,r){s(e,t,r),l(t,n),l(t,a)},p(e,t){4&t&&r!==(r=e[21]+"")&&v(n,r)},d(e){e&&i(t)}}}function te(e){let t,n,a,r=e[21]+"";return{c(){t=u("div"),n=d(r),a=g(),m(t,"class","resultBarLetter svelte-14u2ngc"),S(t,"background-color","#d4ff8a")},m(e,r){s(e,t,r),l(t,n),l(t,a)},p(e,t){4&t&&r!==(r=e[21]+"")&&v(n,r)},d(e){e&&i(t)}}}function ne(e){let t,n,a,r;function o(e,r){return 4&r&&(t=null),4&r&&(n=null),4&r&&(a=null),null==t&&(t=!(2!=e[7](e[17],e[21],e[2][e[18]]))),t?te:(null==n&&(n=!(1!=e[7](e[17],e[21],e[2][e[18]]))),n?ee:(null==a&&(a=!(0!=e[7](e[17],e[21],e[2][e[18]]))),a?X:void 0))}let l=o(e,-1),c=l&&l(e);return{c(){c&&c.c(),r=f()},m(e,t){c&&c.m(e,t),s(e,r,t)},p(e,t){l===(l=o(e,t))&&c?c.p(e,t):(c&&c.d(1),c=l&&l(e),c&&(c.c(),c.m(r.parentNode,r)))},d(e){c&&c.d(e),e&&i(r)}}}function ae(e){let t,n;function a(e,n){return 4&n&&(t=null),e[2][e[18]].length==e[4].length?le:(null==t&&(t=!!(Math.abs(e[2][e[18]].length-e[4].length)<3)),t?oe:re)}let r=a(e,-1),o=r(e);return{c(){o.c(),n=f()},m(e,t){o.m(e,t),s(e,n,t)},p(e,t){r!==(r=a(e,t))&&(o.d(1),o=r(e),o&&(o.c(),o.m(n.parentNode,n)))},d(e){o.d(e),e&&i(n)}}}function re(e){let t;return{c(){t=u("div"),m(t,"class","resultBarLength svelte-14u2ngc")},m(e,n){s(e,t,n)},d(e){e&&i(t)}}}function oe(e){let t;return{c(){t=u("div"),m(t,"class","resultBarLength svelte-14u2ngc"),S(t,"background-color","#fffd8c")},m(e,n){s(e,t,n)},d(e){e&&i(t)}}}function le(e){let t;return{c(){t=u("div"),m(t,"class","resultBarLength svelte-14u2ngc"),S(t,"background-color","#d4ff8a")},m(e,n){s(e,t,n)},d(e){e&&i(t)}}}function se(e){let t,n;function a(e,t){return e[2].length>e[18]?q:e[2].length==e[18]?Z:void 0}let r=a(e),o=r&&r(e),c=null!=e[2][e[18]]&&ae(e);return{c(){t=u("div"),o&&o.c(),n=g(),c&&c.c(),m(t,"class","resultBar svelte-14u2ngc")},m(e,a){s(e,t,a),o&&o.m(t,null),l(t,n),c&&c.m(t,null)},p(e,l){r===(r=a(e))&&o?o.p(e,l):(o&&o.d(1),o=r&&r(e),o&&(o.c(),o.m(t,n))),null!=e[2][e[18]]?c?c.p(e,l):(c=ae(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(e){e&&i(t),o&&o.d(),c&&c.d()}}}function ie(e){let t,n,a,r,o,f,h,p,S,k,y,C,T,b,A,P,I,L,R,M,N,w,x,O,B,E,D,H,K,G,Y,U=e[3].gamesPlayed+"",_=e[3].winPercentage+"",W=e[3].currentStreak+"",F=e[3].maxStreak+"",J=Object.keys(e[3].guesses),j=[];for(let t=0;t<J.length;t+=1)j[t]=ue($(e,J,t));return{c(){t=u("div"),n=u("div"),n.textContent="Statistik",a=g(),r=u("div"),o=u("div"),f=u("div"),h=d(U),p=g(),S=u("div"),S.textContent="Played Rounds",k=g(),y=u("div"),C=u("div"),T=d(_),b=g(),A=u("div"),A.textContent="Win %",P=g(),I=u("div"),L=u("div"),R=d(W),M=g(),N=u("div"),N.textContent="Current Streak",w=g(),x=u("div"),O=u("div"),B=d(F),E=g(),D=u("div"),D.textContent="Highest Streak",H=g(),K=u("div"),K.textContent="Guesses",G=g(),Y=u("div");for(let e=0;e<j.length;e+=1)j[e].c();m(n,"class","statisticsTitle svelte-14u2ngc"),m(f,"class","statistic svelte-14u2ngc"),m(S,"class","label svelte-14u2ngc"),m(o,"class","statisticsContainer svelte-14u2ngc"),m(C,"class","statistic svelte-14u2ngc"),m(A,"class","label svelte-14u2ngc"),m(y,"class","statisticsContainer svelte-14u2ngc"),m(L,"class","statistic svelte-14u2ngc"),m(N,"class","label svelte-14u2ngc"),m(I,"class","statisticsContainer svelte-14u2ngc"),m(O,"class","statistic svelte-14u2ngc"),m(D,"class","label svelte-14u2ngc"),m(x,"class","statisticsContainer svelte-14u2ngc"),m(r,"class","statisticsContainerHolder svelte-14u2ngc"),m(K,"class","statisticsTitle svelte-14u2ngc"),m(Y,"class","guessesContainer svelte-14u2ngc"),m(t,"class","statistics svelte-14u2ngc")},m(e,i){s(e,t,i),l(t,n),l(t,a),l(t,r),l(r,o),l(o,f),l(f,h),l(o,p),l(o,S),l(r,k),l(r,y),l(y,C),l(C,T),l(y,b),l(y,A),l(r,P),l(r,I),l(I,L),l(L,R),l(I,M),l(I,N),l(r,w),l(r,x),l(x,O),l(O,B),l(x,E),l(x,D),l(t,H),l(t,K),l(t,G),l(t,Y);for(let e=0;e<j.length;e+=1)j[e].m(Y,null)},p(e,t){if(8&t&&U!==(U=e[3].gamesPlayed+"")&&v(h,U),8&t&&_!==(_=e[3].winPercentage+"")&&v(T,_),8&t&&W!==(W=e[3].currentStreak+"")&&v(R,W),8&t&&F!==(F=e[3].maxStreak+"")&&v(B,F),8&t){let n;for(J=Object.keys(e[3].guesses),n=0;n<J.length;n+=1){const a=$(e,J,n);j[n]?j[n].p(a,t):(j[n]=ue(a),j[n].c(),j[n].m(Y,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=J.length}},d(e){e&&i(t),c(j,e)}}}function ce(e){let t,n,r,o,c,f,m;return{c(){t=u("span"),n=d("Namn: "),r=u("input"),o=g(),c=u("button"),c.textContent="Välj"},m(a,i){s(a,t,i),l(t,n),l(t,r),p(r,e[0]),l(t,o),l(t,c),f||(m=[h(r,"input",e[8]),h(r,"keypress",e[6]),h(c,"click",e[9])],f=!0)},p(e,t){1&t&&r.value!==e[0]&&p(r,e[0])},d(e){e&&i(t),f=!1,a(m)}}}function ue(e){let t,n,a,r,o,c,f,h=e[15].charAt(0).toUpperCase()+e[15].slice(1)+"";return{c(){t=u("span"),n=d(h),a=g(),r=u("progress"),f=g(),r.value=o=e[3].guesses[e[15]].toString(),m(r,"max",c=e[3].gamesPlayed.toString()),S(r,"width","300px")},m(e,o){s(e,t,o),l(t,n),l(t,a),l(t,r),l(t,f)},p(e,t){8&t&&h!==(h=e[15].charAt(0).toUpperCase()+e[15].slice(1)+"")&&v(n,h),8&t&&o!==(o=e[3].guesses[e[15]].toString())&&(r.value=o),8&t&&c!==(c=e[3].gamesPlayed.toString())&&m(r,"max",c)},d(e){e&&i(t)}}}function de(t){let n,a,r,o,d,f,h,v,p,k,y,C,T,b,A,P,I,L,R,M,N,w,x,O,B,E,$,H,K,_,W,J,j,Z,q,Q,X,ee,te,ne,ae,re,oe,le,ue,de,ge,fe,he="Harumachi".split(""),me=[];for(let e=0;e<he.length;e+=1)me[e]=F(U(t,he,e));let ve="Harumachi".split(""),pe=[];for(let e=0;e<ve.length;e+=1)pe[e]=z(Y(t,ve,e));let Se="Harumachi".split(""),ke=[];for(let e=0;e<Se.length;e+=1)ke[e]=V(G(t,Se,e));let ye=[0,1,2,3,4,5,6,7],Ce=[];for(let e=0;e<8;e+=1)Ce[e]=se(D(t,ye,e));function Te(e,t){return e[1]?ie:ce}let be=Te(t),Ae=be(t);return{c(){n=u("container"),a=u("div"),r=u("div"),r.textContent="How to play",o=g(),d=u("div"),d.innerHTML="You are searching for a Sotarks Map from after Jan 2018 <br/>\n\t\t\tOnly the base name so no (TV Size) or (Cut ver.)",f=g(),h=u("div"),v=u("div");for(let e=0;e<me.length;e+=1)me[e].c();p=g(),k=u("div"),k.innerHTML="The letter <b>H</b> is in the right place.",y=g(),C=u("div"),T=g(),b=u("div"),A=u("div");for(let e=0;e<pe.length;e+=1)pe[e].c();P=g(),I=u("div"),I.innerHTML="The letter <b>a</b> is in the name but in the wrong place.",L=g(),R=u("div"),M=g(),N=u("div"),w=u("div");for(let e=0;e<ke.length;e+=1)ke[e].c();x=g(),O=u("div"),O.textContent="If the letter doesn't have a color then it doesn't exist in the name.",B=g(),E=u("div"),$=g(),H=u("div"),K=g(),_=u("div"),_.innerHTML='If the box to the right is   <div style="background-color: #d4ff8a;">green</div>   then the name is the right length.',W=g(),J=u("div"),j=g(),Z=u("div"),q=g(),Q=u("div"),Q.innerHTML='If the box to the right is   <div style="background-color: #fffd8c;">yellow</div>   then the length of the name is +- 2.',X=g(),ee=u("div"),te=g(),ne=u("div"),ae=g(),re=u("div"),re.textContent="If the box to the right is gray then the length of name has a bigger difference than 2.",oe=g(),le=u("main"),ue=u("div");for(let e=0;e<8;e+=1)Ce[e].c();de=g(),Ae.c(),ge=g(),fe=u("footer"),fe.innerHTML='© Made by <a href="https://twitter.com/oncelastapril">oncelastapril</a>',m(r,"class","helpTitle svelte-14u2ngc"),m(d,"class","helpName svelte-14u2ngc"),m(v,"class","helpName resultBar svelte-14u2ngc"),m(C,"class","helpSpacer svelte-14u2ngc"),m(A,"class","helpName resultBar svelte-14u2ngc"),m(R,"class","helpSpacer svelte-14u2ngc"),m(w,"class","helpName resultBar svelte-14u2ngc"),S(E,"margin-top","30px"),m(H,"class","helpLength svelte-14u2ngc"),S(H,"background-color","#d4ff8a"),m(_,"class","helpName svelte-14u2ngc"),m(J,"class","helpSpacer svelte-14u2ngc"),m(Z,"class","helpLength svelte-14u2ngc"),S(Z,"background-color","#fffd8c"),S(Z,"float","left"),m(Q,"class","helpName svelte-14u2ngc"),m(ee,"class","helpSpacer svelte-14u2ngc"),m(ne,"class","helpLength svelte-14u2ngc"),m(a,"class","helpContainer svelte-14u2ngc"),m(ue,"class","resultContainer svelte-14u2ngc"),m(le,"class","svelte-14u2ngc"),m(fe,"class","svelte-14u2ngc"),m(n,"class","svelte-14u2ngc")},m(e,t){s(e,n,t),l(n,a),l(a,r),l(a,o),l(a,d),l(a,f),l(a,h),l(h,v);for(let e=0;e<me.length;e+=1)me[e].m(v,null);l(a,p),l(a,k),l(a,y),l(a,C),l(a,T),l(a,b),l(b,A);for(let e=0;e<pe.length;e+=1)pe[e].m(A,null);l(a,P),l(a,I),l(a,L),l(a,R),l(a,M),l(a,N),l(N,w);for(let e=0;e<ke.length;e+=1)ke[e].m(w,null);l(a,x),l(a,O),l(a,B),l(a,E),l(a,$),l(a,H),l(a,K),l(a,_),l(a,W),l(a,J),l(a,j),l(a,Z),l(a,q),l(a,Q),l(a,X),l(a,ee),l(a,te),l(a,ne),l(a,ae),l(a,re),l(n,oe),l(n,le),l(le,ue);for(let e=0;e<8;e+=1)Ce[e].m(ue,null);l(ue,de),Ae.m(ue,null),l(n,ge),l(n,fe)},p(e,[t]){if(149&t){let n;for(ye=[0,1,2,3,4,5,6,7],n=0;n<8;n+=1){const a=D(e,ye,n);Ce[n]?Ce[n].p(a,t):(Ce[n]=se(a),Ce[n].c(),Ce[n].m(ue,de))}for(;n<8;n+=1)Ce[n].d(1)}be===(be=Te(e))&&Ae?Ae.p(e,t):(Ae.d(1),Ae=be(e),Ae&&(Ae.c(),Ae.m(ue,null)))},i:e,o:e,d(e){e&&i(n),c(me,e),c(pe,e),c(ke,e),c(Ce,e),Ae.d()}}}function ge(e,t){return e/t*100}function fe(e,t,n){let a=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(E),r=new Date,o=new Date("2022-01-01"),l=r.getTime()-o.getTime(),s=a[Math.ceil(l/864e5)-1],i="";console.log(s);let c=!1,u=[],d=null!=JSON.parse(localStorage.getItem("stats"))?JSON.parse(localStorage.getItem("stats")):{lastPlayed:"",lastGuesses:[],currentStreak:0,maxStreak:0,guesses:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,fail:0},winPercentage:0,gamesPlayed:0,gamesWon:0};function g(){""!=i&&i.length<23&&(u.push(i),n(2,u),i.toLowerCase()==s.toLowerCase()?(n(1,c=!0),n(3,d.lastPlayed=(new Date).toDateString(),d),n(3,d.lastGuesses=u,d),n(3,d.currentStreak+=1,d),d.currentStreak>d.maxStreak&&n(3,d.maxStreak=d.currentStreak,d),n(3,d.guesses[u.length.toString()]+=1,d),n(3,d.gamesPlayed+=1,d),n(3,d.gamesWon+=1,d),n(3,d.winPercentage=ge(d.gamesWon,d.gamesPlayed),d),localStorage.setItem("stats",JSON.stringify(d))):8==u.length&&(n(1,c=!0),n(3,d.lastPlayed=(new Date).toDateString(),d),n(3,d.lastGuesses=u,d),n(3,d.currentStreak=0,d),n(3,d.maxStreak=0,d),n(3,d.guesses.fail+=1,d),n(3,d.gamesPlayed+=1,d),n(3,d.winPercentage=ge(d.gamesWon,d.gamesPlayed),d),localStorage.setItem("stats",JSON.stringify(d))),n(0,i=""))}localStorage.setItem("stats",JSON.stringify(d));return[i,c,u,d,s,g,e=>{i.length>22&&n(0,i=i.substring(0,22)),13===e.charCode&&g()},function(e,t,n){if(e<s.length&&s[e].toLowerCase()==t.toLowerCase())return 2;let a=s.toLowerCase().split(t.toLowerCase()).length-1,r=0;for(var o=0;o<n.length;o++)n[o].toLowerCase()==t.toLowerCase()&&r++;return r>a?0:1},function(){i=this.value,n(0,i)},()=>g()]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),B(this,e,fe,de,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
