function switchTab(tabId, pushState = true) {
    const target = document.getElementById(`tab-${tabId}`);
    if (!target) return;

    if (pushState) {
        const newUrl = tabId === 'home' ? '/' : `/${tabId}`;
        window.history.pushState({ tab: tabId }, '', newUrl);
    }

    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(el => {
        if (el.id !== `tab-${tabId}`) {
            el.classList.add('hidden');
            el.classList.remove('animate-fade-in-up');
            el.style.opacity = '0';
        }
    });

    target.classList.remove('hidden');
    void target.offsetWidth; 
    target.classList.add('animate-fade-in-up');

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtns = document.querySelectorAll(`.nav-btn[data-tab="${tabId}"]`);
    activeBtns.forEach(btn => btn.classList.add('active'));

    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

window.addEventListener('popstate', (e) => {
    if (e.state && e.state.tab) {
        switchTab(e.state.tab, false);
    } else {
        handleInitialRoute(false);
    }
});

function handleInitialRoute(pushState = true) {
    const validTabs = ['home', 'codes', 'updates', 'maps', 'community', 'resources', 'credits', 'trading'];
    let path = '/home';

    if (sessionStorage.redirect) {
        const redirectUrl = new URL(sessionStorage.redirect);
        path = redirectUrl.pathname;
        delete sessionStorage.redirect;
    } else if (window.location.pathname !== '/' && window.location.pathname !== '') {
        path = window.location.pathname;
    }

    const tab = path.replace('/', '') || 'home';

    if (validTabs.includes(tab)) {
        switchTab(tab, pushState);
    } else {
        switchTab('home', pushState);
    }
}
