function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    const icon = type === 'error' ? '<i class="fa-solid fa-triangle-exclamation text-neutral-400"></i>' : '<i class="fa-solid fa-check text-black"></i>';
    const bgClass = type === 'error' ? 'bg-[#111] border border-neutral-800 text-white' : 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]';
    
    toast.className = `${bgClass} px-5 py-3 rounded-xl flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300 pointer-events-auto z-50`;
    toast.innerHTML = `${icon}<span class="text-xs font-bold tracking-wide">${message}</span>`;
    container.appendChild(toast);
    
    requestAnimationFrame(() => toast.classList.remove('translate-y-10', 'opacity-0'));

    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
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