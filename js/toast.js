function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    
    const iconHtml = type === 'error' 
        ? `<div class="w-9 h-9 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center shadow-inner"><i class="fa-solid fa-triangle-exclamation text-white text-sm"></i></div>`
        : `<div class="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]"><i class="fa-solid fa-check text-sm"></i></div>`;
    
    toast.className = `bg-[#050505]/95 backdrop-blur-xl border border-white/10 p-3 pr-6 rounded-2xl flex items-center gap-4 transform translate-y-12 opacity-0 transition-all duration-500 ease-out pointer-events-auto shadow-[0_30px_60px_rgba(0,0,0,0.9)]`;
    
    toast.innerHTML = `
        ${iconHtml}
        <div class="flex flex-col justify-center">
            <span class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-0.5">${type === 'error' ? 'System Error' : 'System Notice'}</span>
            <span class="text-xs font-bold text-white tracking-wide">${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-12', 'opacity-0');
        });
    });

    setTimeout(() => {
        toast.classList.add('translate-y-12', 'opacity-0');
        setTimeout(() => toast.remove(), 500); 
    }, 3500);
}

function copyText(text, typeName) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`${typeName} copied to clipboard!`);
    }).catch(err => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast(`${typeName} copied to clipboard!`);
        } catch (err) {
            showToast('Failed to copy text.', 'error');
        }
        document.body.removeChild(textArea);
    });
}
