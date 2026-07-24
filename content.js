function runPatches() {
    // Remove AI from searchbar
    const searchbar = document.querySelector('.ytSearchboxComponentInput');
    if (searchbar && searchbar.getAttribute('placeholder') !== 'Search') {
        searchbar.setAttribute('placeholder', 'Search');
    }
};

function startObserver() {
    if (document.body) {
        observer.observe(document.body, {childList: true, subtree: true});
    }
}

const observer = new MutationObserver(runPatches);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
} else {
    startObserver();
}