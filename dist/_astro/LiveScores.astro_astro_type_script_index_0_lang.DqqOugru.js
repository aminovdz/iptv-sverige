var e=document.getElementById(`scores-loader`),t=document.getElementById(`scores-grid`),n=document.querySelectorAll(`.league-btn`),r={"Svensk Fotboll":[{homeTeam:`Malmö FF`,awayTeam:`AIK`,homeScore:`2`,awayScore:`1`,status:`LIVE 78'`,isLive:!0,date:new Date().toISOString(),homeLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2157.png`,awayLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/103.png`},{homeTeam:`Djurgårdens IF`,awayTeam:`Hammarby IF`,homeScore:`-`,awayScore:`-`,status:`Ikväll 19:10`,isLive:!1,date:new Date().toISOString(),homeLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/775.png`,awayLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1188.png`},{homeTeam:`IFK Göteborg`,awayTeam:`IF Elfsborg`,homeScore:`1`,awayScore:`0`,status:`Slutresultat`,isLive:!1,date:new Date().toISOString(),homeLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1190.png`,awayLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1189.png`}],"Engelsk Fotboll":[{homeTeam:`Arsenal`,awayTeam:`Chelsea`,homeScore:`2`,awayScore:`1`,status:`LIVE 64'`,isLive:!0,date:new Date().toISOString(),homeLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png`,awayLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png`},{homeTeam:`Liverpool`,awayTeam:`Manchester City`,homeScore:`-`,awayScore:`-`,status:`Idag 17:30`,isLive:!1,date:new Date().toISOString(),homeLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png`,awayLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png`},{homeTeam:`Tottenham`,awayTeam:`Manchester United`,homeScore:`3`,awayScore:`2`,status:`Slutresultat`,isLive:!1,date:new Date().toISOString(),homeLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png`,awayLogo:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png`}]};async function i(n,i,o){if(e&&t){e.classList.remove(`hidden`),t.classList.add(`hidden`),t.innerHTML=``;try{let e=await fetch(n,{cache:`no-store`});if(!e.ok)throw Error(`HTTP error `+e.status);let t=(await e.json()).events||[];if(i===`mma`&&t.length>0){let e=[];t.forEach(t=>{t.competitions&&e.push(...t.competitions)}),t=e}if(t.length===0)a(r[o]||r[`Svensk Fotboll`],!0,o);else{let e=t.slice(0,9).map(e=>{let t=i===`mma`?e:e.competitions?e.competitions[0]:e,n,r;if(i===`mma`?(n=t.competitors?t.competitors[0]:null,r=t.competitors?t.competitors[1]:null):(n=t.competitors?t.competitors.find(e=>e.homeAway===`home`)||t.competitors[0]:null,r=t.competitors?t.competitors.find(e=>e.homeAway===`away`)||t.competitors[1]:null),!n||!r)return null;let a=i===`mma`?n.athlete?.shortName||n.athlete?.displayName||`Kämpe 1`:n.team?.displayName||n.team?.name||`Hemmalag`,o=i===`mma`?r.athlete?.shortName||r.athlete?.displayName||`Kämpe 2`:r.team?.displayName||r.team?.name||`Bortalag`,s=i===`mma`?n.athlete?.flag?.href||``:n.team?.logo||``,c=i===`mma`?r.athlete?.flag?.href||``:r.team?.logo||``,l=i===`mma`?t.status?.type:e.status?.type,u=l?.state===`in`,d=l?.detail||(u?`LIVE`:`Kommande`);return{homeTeam:a,awayTeam:o,homeScore:n.score===void 0?`-`:n.score,awayScore:r.score===void 0?`-`:r.score,status:d,isLive:u,date:e.date||new Date().toISOString(),homeLogo:s,awayLogo:c,type:i}}).filter(Boolean);e.length===0?a(r[o]||r[`Svensk Fotboll`],!0,o):a(e,!1,o)}}catch(e){console.warn(`Live sports API fetch fallback:`,e),a(r[o]||r[`Svensk Fotboll`],!0,o)}finally{e.classList.add(`hidden`),t.classList.remove(`hidden`)}}}function a(e,n=!1,r=`Sport`){t&&(t.innerHTML=``,e.forEach(e=>{let n=document.createElement(`div`);n.className=`rounded-2xl p-5 bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group`;let i=``;i=e.isLive?`<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-black uppercase tracking-wider animate-pulse"><span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>${e.status}</span>`:e.status.toLowerCase().includes(`slut`)||e.status.toLowerCase().includes(`final`)||e.status.toLowerCase().includes(`ft`)?`<span class="text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">Slutresultat</span>`:`<span class="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold">${e.status}</span>`,n.innerHTML=`
        <!-- Top Info -->
        <div class="flex items-center justify-between text-xs pb-2 border-b border-white/5">
          <div class="flex items-center gap-1.5 text-slate-400 font-bold">
            <span class="text-[11px] text-emerald-400 font-mono">${r}</span>
            <span class="text-slate-600">•</span>
            <span class="text-[10px] text-slate-400">${e.date?new Date(e.date).toLocaleDateString(`sv-SE`,{month:`short`,day:`numeric`}):`Idag`}</span>
          </div>
          ${i}
        </div>

        <!-- Teams & Score Display -->
        <div class="flex items-center justify-between gap-3 py-1">
          <!-- Home Team -->
          <div class="flex flex-col items-center text-center flex-1 min-w-0">
            ${e.homeLogo?`<img src="${e.homeLogo}" alt="${e.homeTeam}" class="w-12 h-12 object-contain mb-2 p-1.5 rounded-full bg-white/5 border border-white/10" loading="lazy" onerror="this.style.display='none'" />`:`<div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white mb-2">⚽</div>`}
            <span class="text-xs font-bold text-white truncate max-w-full leading-tight">${e.homeTeam}</span>
          </div>

          <!-- Score / VS Box -->
          <div class="flex flex-col items-center justify-center px-3 shrink-0">
            ${e.type===`mma`?`
              <span class="text-base font-black text-amber-400 font-display">VS</span>
            `:`
              <div class="text-2xl font-black font-mono tracking-tight ${e.isLive?`text-emerald-400`:`text-white`}">
                ${e.homeScore!==void 0&&e.homeScore!==`-`?`${e.homeScore} <span class="text-slate-600 text-lg">:</span> ${e.awayScore}`:`<span class="text-xs font-bold text-slate-400 px-2 py-1 rounded bg-white/5 font-sans">VS</span>`}
              </div>
            `}
            <span class="text-[9px] font-bold text-emerald-400/80 uppercase tracking-widest mt-1">4K UHD</span>
          </div>

          <!-- Away Team -->
          <div class="flex flex-col items-center text-center flex-1 min-w-0">
            ${e.awayLogo?`<img src="${e.awayLogo}" alt="${e.awayTeam}" class="w-12 h-12 object-contain mb-2 p-1.5 rounded-full bg-white/5 border border-white/10" loading="lazy" onerror="this.style.display='none'" />`:`<div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white mb-2">⚽</div>`}
            <span class="text-xs font-bold text-white truncate max-w-full leading-tight">${e.awayTeam}</span>
          </div>
        </div>

        <!-- Action Link -->
        <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
          <span class="text-[10px] text-slate-400 font-mono">60 FPS • Noll Lagg</span>
          <a 
            href="https://wa.me/18036582620?text=Hej!%20Jag%20vill%20se%20${encodeURIComponent(e.homeTeam)}%20mot%20${encodeURIComponent(e.awayTeam)}%20på%20IPTV%20Sverige." 
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-400 font-bold hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Streama Nu</span>
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </a>
        </div>
      `,t.appendChild(n)}))}n.forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget;n.forEach(e=>{e.className=`league-btn glass-card px-4 sm:px-5 py-2 hover:bg-white/10 transition-all rounded-full font-bold text-xs sm:text-sm text-slate-300 border border-white/10`,e.getAttribute(`data-type`)===`mma`&&e.classList.add(`text-red-400`,`border-red-500/20`)}),t.className=`league-btn active btn-primary px-4 sm:px-5 py-2 font-bold text-xs sm:text-sm shadow-lg`;let r=t.getAttribute(`data-url`),a=t.getAttribute(`data-type`)||`team`,o=t.getAttribute(`data-league`)||`Svensk Fotboll`;r&&i(r,a,o)})});var o=document.querySelector(`.league-btn.active`),s=o?.getAttribute(`data-url`),c=o?.getAttribute(`data-type`)||`team`,l=o?.getAttribute(`data-league`)||`Svensk Fotboll`;s&&i(s,c,l);