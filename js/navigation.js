function switchTab(tabId, pushState = true) {
    const target = document.getElementById(`tab-${tabId}`);
    if (!target) return;

    // Update History API for clean URL paths
    if (pushState) {
        // We ensure clean path names like /home or /codes
        const newUrl = tabId === 'home' ? '/' : `/${tabId}`;
        window.history.pushState({ tab: tabId }, '', newUrl);
    }

    // Toggle Tab Visibility
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(el => {
        if (el.id !== `tab-${tabId}`) {
            el.classList.add('hidden');
            el.classList.remove('animate-fade-in-up');
            el.style.opacity = '0';
        }
    });

    target.classList.remove('hidden');
    void target.offsetWidth; // Trigger reflow to restart animation
    target.classList.add('animate-fade-in-up');

    // Update Nav Button Active States
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtns = document.querySelectorAll(`.nav-btn[data-tab="${tabId}"]`);
    activeBtns.forEach(btn => btn.classList.add('active'));

    // Handle Mobile Menu closure
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

// Handle Browser Back/Forward navigation
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.tab) {
        switchTab(e.state.tab, false);
    } else {
        // Fallback to route checking
        handleInitialRoute(false);
    }
});

// Parse custom 404 URL or current URL to load the correct tab initially
function handleInitialRoute(pushState = true) {
    const validTabs = ['home', 'codes', 'updates', 'maps', 'community', 'resources', 'credits', 'trading'];
    let path = '/home';

    // Check for Github Pages redirect (from 404.html)
    if (sessionStorage.redirect) {
        const redirectUrl = new URL(sessionStorage.redirect);
        path = redirectUrl.pathname;
        delete sessionStorage.redirect;
    } else if (window.location.pathname !== '/' && window.location.pathname !== '') {
        path = window.location.pathname;
    }

    // Sanitize path to tab ID
    const tab = path.replace('/', '') || 'home';

    if (validTabs.includes(tab)) {
        switchTab(tab, pushState);
    } else {
        switchTab('home', pushState); // Fallback to home if invalid tab
    }
}