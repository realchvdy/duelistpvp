// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderHome() {
    const statsContainer = document.getElementById('home-stats-container');
    const statData = [
        { label: 'Total Visits', val: DB_STATS.visits, icon: 'fa-users' },
        { label: 'Favorites', val: DB_STATS.favorites, icon: 'fa-star' },
        { label: 'Like Ratio', val: DB_STATS.likes, icon: 'fa-thumbs-up' },
    ];
    
    statsContainer.innerHTML = statData.map(s => `
        <div class="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden tilt-card shadow-xl">
            <div class="glare rounded-3xl"></div>
            <div class="tilt-content w-full">
                <div class="w-16 h-16 mx-auto rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-4 shadow-inner group-hover:border-white transition-colors duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <i class="fa-solid ${s.icon} text-2xl text-white"></i>
                </div>
                <span class="text-4xl md:text-5xl font-black font-changa text-white block">${s.val}</span>
                <span class="text-[10px] uppercase font-black text-neutral-500 tracking-[0.2em] mt-2 block">${s.label}</span>
            </div>
        </div>
    `).join('');

    const latestUpdate = DB_UPDATES[0];
    const updateContainer = document.getElementById('home-latest-update');
    if(latestUpdate && updateContainer) {
        updateContainer.innerHTML = `
            <div class="flex items-center gap-3 mb-5">
                <span class="px-3 py-1 rounded bg-white text-black text-[10px] font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.4)]">${latestUpdate.version}</span>
                <span class="text-[11px] text-neutral-400 font-bold uppercase tracking-widest">${latestUpdate.date}</span>
            </div>
            <h3 class="text-3xl md:text-5xl font-extrabold font-changa text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-500">${latestUpdate.title}</h3>
            <div class="bg-[#050505] rounded-2xl p-6 border border-white/5 shadow-inner">
                <ul class="space-y-4">
                    ${latestUpdate.notes_add.slice(0, 3).map(note => `
                        <li class="text-sm text-neutral-400 flex items-start gap-4 font-medium">
                            <div class="w-5 h-5 rounded flex items-center justify-center bg-white text-black shrink-0 mt-0.5"><i class="fa-solid fa-plus text-[10px]"></i></div>
                            <span class="leading-relaxed line-clamp-1">${note}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
}

function renderUpdates() {
    const container = document.getElementById('updates-container');
    container.innerHTML = DB_UPDATES.map((upd, index) => {
        const isLatest = index === 0;
        const dotStyle = isLatest ? 'bg-white shadow-[0_0_20px_#ffffff]' : 'bg-[#0a0a0a] border-[3px] border-neutral-700';
        const cardStyle = isLatest ? 'border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)]' : 'border-white/5 shadow-xl';
        const badgeStyle = isLatest ? 'bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-neutral-400 border border-white/10';
        
        const hasAdditions = upd.notes_add && upd.notes_add.length > 0;
        const hasFixes = upd.notes_fix && upd.notes_fix.length > 0;
        const gridCols = (hasAdditions && hasFixes) ? 'lg:grid-cols-2' : 'grid-cols-1';

        return `
        <div class="relative group tilt-card" style="perspective: 1500px;">
            <!-- Timeline Node -->
            <div class="absolute -left-[48px] md:-left-[93px] top-10 w-5 h-5 rounded-full ${dotStyle} z-20"></div>
            
            <!-- Update Card -->
            <div class="glass-panel rounded-3xl p-8 md:p-12 border ${cardStyle} relative overflow-hidden transition-all duration-500 group-hover:border-white/20 tilt-content">
                <div class="glare rounded-3xl"></div>
                
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-8 border-b border-white/10 relative z-10">
                    <div>
                        <div class="flex items-center gap-4 mb-3">
                            <span class="px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest ${badgeStyle}">${upd.version}</span>
                            <span class="text-[11px] text-neutral-400 font-bold uppercase tracking-widest flex items-center gap-2 bg-[#0a0a0a] px-3 py-1 rounded border border-white/5 shadow-inner">
                                <i class="fa-regular fa-calendar text-neutral-500"></i> ${upd.date}
                            </span>
                        </div>
                        <h2 class="text-3xl md:text-5xl font-extrabold font-changa text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all">${upd.title}</h2>
                    </div>
                </div>

                <!-- Grid Content -->
                <div class="grid ${gridCols} gap-6 relative z-10">
                    
                    ${hasAdditions ? `
                    <div class="bg-[#050505] rounded-2xl p-6 md:p-8 border border-white/5 shadow-inner hover:bg-[#0a0a0a] transition-colors">
                        <h4 class="text-[11px] font-black uppercase text-white tracking-[0.2em] mb-6 flex items-center gap-3">
                            <div class="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]"><i class="fa-solid fa-plus text-[10px] text-black"></i></div>
                            Additions
                        </h4>
                        <ul class="space-y-4">
                            ${upd.notes_add.map(note => `
                                <li class="text-sm text-neutral-400 flex items-start gap-4 font-medium">
                                    <span class="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                    <span class="leading-relaxed">${note}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    ` : ''}

                    ${hasFixes ? `
                    <div class="bg-[#050505] rounded-2xl p-6 md:p-8 border border-white/5 shadow-inner hover:bg-[#0a0a0a] transition-colors">
                        <h4 class="text-[11px] font-black uppercase text-neutral-400 tracking-[0.2em] mb-6 flex items-center gap-3">
                            <div class="w-7 h-7 rounded-lg bg-[#111] border border-white/10 flex items-center justify-center shadow-inner"><i class="fa-solid fa-wrench text-[10px] text-neutral-300"></i></div>
                            Fixes & Changes
                        </h4>
                        <ul class="space-y-4">
                            ${upd.notes_fix.map(note => `
                                <li class="text-sm text-neutral-500 flex items-start gap-4 font-medium">
                                    <span class="w-1.5 h-1.5 rounded-full bg-neutral-700 mt-2 shrink-0"></span>
                                    <span class="leading-relaxed">${note}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    ` : ''}
                </div>
                
                ${isLatest ? `<div class="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>` : ''}
            </div>
        </div>
        `;
    }).join('');
}

function renderCodes() {
    const container = document.getElementById('codes-container');
    container.innerHTML = DB_CODES.map(c => {
        const isActive = c.status === 'Active';
        
        return `
        <div class="glass-panel rounded-3xl p-8 flex flex-col border border-white/5 group relative overflow-hidden tilt-card shadow-xl">
            <div class="glare rounded-3xl"></div>
            <div class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none"></div>
            
            <div class="tilt-content flex flex-col h-full">
                <!-- Top Info -->
                <div class="flex justify-between items-center mb-8 relative z-10">
                    <div class="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:border-white transition-colors duration-500">
                        <i class="fa-solid fa-ticket-simple text-lg"></i>
                    </div>
                    ${isActive ? 
                        '<span class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 shadow-inner"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10b981]"></span> Active</span>' : 
                        '<span class="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 bg-[#111] border border-white/5 shadow-inner">Expired</span>'}
                </div>
                
                <!-- Code Display Box -->
                <div class="bg-[#050505] rounded-2xl border border-white/10 p-5 mb-8 flex-1 flex flex-col justify-center items-center text-center relative z-10 shadow-inner group-hover:border-white/30 transition-colors">
                    <h3 class="text-2xl font-black font-changa text-white tracking-widest break-all leading-tight mb-3 drop-shadow-md">${c.code}</h3>
                    <div class="flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-[#0a0a0a] px-3 py-1.5 rounded-lg border border-white/5">
                        <i class="fa-solid fa-box-open opacity-50"></i> Reward: <span class="text-white">${c.reward}</span>
                    </div>
                </div>

                <!-- Action Button -->
                <button 
                    ${!isActive ? 'disabled' : ''}
                    onclick="copyText('${c.code}', 'Code')" 
                    class="relative z-10 w-full py-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] ${isActive ? 'bg-white text-black hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]' : 'bg-[#0a0a0a] text-neutral-600 border border-white/5 cursor-not-allowed shadow-inner'}"
                >
                    ${isActive ? '<i class="fa-regular fa-copy"></i> COPY CODE' : '<i class="fa-solid fa-ban"></i> EXPIRED'}
                </button>
            </div>
        </div>
    `}).join('');
}

function renderMaps() {
    const container = document.getElementById('maps-container');
    container.innerHTML = DB_MAPS.map(m => `
        <div class="glass-panel rounded-3xl overflow-hidden border border-white/5 group relative cursor-pointer tilt-card shadow-2xl">
            <div class="glare rounded-3xl z-30"></div>
            <div class="tilt-content h-full flex flex-col">
                <div class="h-56 overflow-hidden relative border-b border-white/10">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10"></div>
                    <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover transform bw-filter transition-transform duration-700">
                    <div class="absolute bottom-5 left-6 z-20">
                        <h3 class="text-3xl font-black font-changa text-white drop-shadow-lg tracking-wide">${m.name}</h3>
                    </div>
                </div>
                <div class="p-6 bg-[#050505] flex-1 flex items-center">
                    <p class="text-xs text-neutral-400 font-medium leading-relaxed">${m.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderClips() {
    const container = document.getElementById('clips-container');
    
    // Render Empty State if no clips available
    if (DB_CLIPS.length === 0) {
        container.classList.remove('md:grid-cols-2', 'lg:grid-cols-3');
        container.innerHTML = `
            <div class="glass-panel rounded-3xl p-12 text-center flex flex-col items-center justify-center tilt-card border-dashed border-white/10 group h-64 w-full">
                <div class="glare rounded-3xl"></div>
                <div class="tilt-content">
                    <div class="w-16 h-16 mx-auto rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:border-white/20 transition-all duration-500 group-hover:scale-110">
                        <i class="fa-solid fa-video-slash text-2xl text-neutral-600 group-hover:text-white transition-colors duration-500"></i>
                    </div>
                    <h3 class="text-2xl font-black font-changa text-white tracking-widest mb-2 uppercase drop-shadow-md">No Transmissions Found</h3>
                    <p class="text-sm text-neutral-500 max-w-md mx-auto font-medium leading-relaxed">The monthly highlight reel is currently empty. Submit your best clips in the Discord to be the first featured.</p>
                </div>
            </div>
        `;
        return;
    }

    // Render Clips if available
    container.classList.add('md:grid-cols-2', 'lg:grid-cols-3');
    container.innerHTML = DB_CLIPS.map((clip, index) => {
        let rankBadge = '';
        let borderStyle = 'border-white/5';
        let titleStyle = 'text-white';
        
        if (index === 0) {
            rankBadge = `<div class="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center gap-1.5 border border-yellow-200"><i class="fa-solid fa-crown"></i> 1st Place</div>`;
            borderStyle = 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)]';
            titleStyle = 'text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]';
        } else if (index === 1) {
            rankBadge = `<div class="absolute top-4 left-4 z-20 bg-gradient-to-r from-gray-200 to-gray-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(156,163,175,0.4)] flex items-center gap-1.5 border border-gray-100"><i class="fa-solid fa-medal"></i> 2nd Place</div>`;
            borderStyle = 'border-gray-400/50';
            titleStyle = 'text-gray-300';
        } else if (index === 2) {
            rankBadge = `<div class="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(180,83,9,0.4)] flex items-center gap-1.5 border border-amber-500"><i class="fa-solid fa-medal"></i> 3rd Place</div>`;
            borderStyle = 'border-amber-700/50';
            titleStyle = 'text-amber-500';
        } else {
            rankBadge = `<div class="absolute top-4 left-4 z-20 bg-[#0a0a0a]/90 backdrop-blur-md text-neutral-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-inner">#${index + 1} Clip</div>`;
        }

        return `
        <div class="glass-panel rounded-3xl overflow-hidden border ${borderStyle} relative flex flex-col group cursor-pointer tilt-card shadow-2xl">
            <div class="glare rounded-3xl z-30"></div>
            <div class="tilt-content h-full flex flex-col">
                ${rankBadge}
                <div class="relative w-full aspect-video bg-[#000] flex items-center justify-center border-b border-white/10 overflow-hidden shrink-0">
                    <img src="https://placehold.co/800x450/0a0a0a/ffffff?text=Play+Clip" class="absolute inset-0 w-full h-full object-cover opacity-40 bw-filter transition-all duration-700">
                    <div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        <i class="fa-solid fa-play text-white group-hover:text-black text-lg ml-1 transition-colors"></i>
                    </div>
                </div>
                <div class="p-6 flex justify-between items-center bg-[#050505] flex-1">
                    <div>
                        <h3 class="font-bold font-changa ${titleStyle} text-lg tracking-wide mb-1">${clip.title}</h3>
                        <span class="text-[10px] text-neutral-500 font-black uppercase tracking-[0.2em]">By <span class="text-white">${clip.author}</span></span>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');
}

function renderAssets() {
    const container = document.getElementById('crosshairs-container');

    // Render Empty State if no crosshairs available
    if (DB_CROSSHAIRS.length === 0) {
        container.innerHTML = `
            <div class="bg-[#050505] rounded-2xl border border-white/5 border-dashed p-10 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-colors duration-500 shadow-inner h-full min-h-[250px]">
                <div class="w-14 h-14 bg-[#0a0a0a] rounded-xl border border-white/10 flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                    <i class="fa-solid fa-folder-open text-xl text-neutral-600 group-hover:text-white transition-colors duration-500"></i>
                </div>
                <h4 class="text-lg font-bold font-changa text-white tracking-widest uppercase mb-2 drop-shadow-sm">Database Empty</h4>
                <p class="text-[11px] text-neutral-500 font-medium leading-relaxed max-w-[200px] mx-auto">No verified crosshair IDs are currently active in our servers. Check back later.</p>
            </div>
        `;
        return;
    }

    // Render Crosshairs if available
    container.innerHTML = DB_CROSSHAIRS.map(ch => `
        <div class="bg-[#050505] rounded-2xl border border-white/5 p-4 flex items-center justify-between group hover:border-white/30 transition-colors duration-500 shadow-inner">
            <div class="flex items-center gap-5">
                <div class="w-14 h-14 bg-[#0a0a0a] rounded-xl border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white transition-colors duration-500">
                    <img src="${ch.image}" alt="Crosshair" class="w-7 h-7 object-contain bw-filter">
                </div>
                <div>
                    <h4 class="text-sm font-bold text-white tracking-wide mb-1 font-changa">${ch.name}</h4>
                    <span class="text-[9px] uppercase font-bold text-neutral-400 tracking-widest bg-[#111] px-2.5 py-1 rounded-md border border-white/5 shadow-inner">ID: ${ch.id}</span>
                </div>
            </div>
            
            <button onclick="copyText('${ch.id}', 'Crosshair ID')" class="px-5 h-12 rounded-xl bg-white text-black text-[10px] font-black hover:scale-[1.05] transition-all tracking-[0.15em] flex items-center gap-2 shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <i class="fa-regular fa-copy"></i> <span class="hidden sm:inline">COPY ID</span>
            </button>
        </div>
    `).join('');
}

function renderStaff() {
    const container = document.getElementById('staff-container');
    container.innerHTML = DB_STAFF.map(cat => `
        <div>
            <h2 class="text-xl font-black font-changa text-white mb-8 uppercase tracking-[0.2em] flex items-center gap-4 border-b border-white/10 pb-4">
                ${cat.roleCat}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${cat.members.map(member => `
                    <div class="glass-panel rounded-2xl p-6 border border-white/5 flex items-center gap-5 group tilt-card shadow-xl cursor-default">
                        <div class="glare rounded-2xl"></div>
                        <div class="tilt-content flex items-center gap-5 w-full">
                            <div class="w-16 h-16 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-2xl font-black text-neutral-600 group-hover:text-white group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 shrink-0 shadow-inner">
                                ${member.avatar}
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold text-white leading-tight tracking-wide mb-1 font-changa">${member.name}</h3>
                                <span class="text-[9px] font-black text-neutral-500 uppercase tracking-widest block mb-2 bg-[#111] border border-white/5 px-2 py-0.5 rounded shadow-inner inline-block">${member.role}</span>
                                <p class="text-[11px] text-neutral-400 font-medium leading-relaxed">${member.desc}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}