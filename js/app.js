window.onload = function() {
    // 1. Render all dynamic DOM nodes from data.js via render.js
    renderHome();
    renderUpdates();
    renderCodes();
    renderMaps();
    renderStaff();
    renderClips();
    renderAssets();

    // 2. Initialize 3D Engine for all freshly rendered cards
    init3DTilt();

    // 3. Initialize routing to either Home or specific tab based on URL path
    handleInitialRoute(true); // true = replace current history state
};