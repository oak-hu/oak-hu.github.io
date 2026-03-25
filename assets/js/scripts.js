// 0. Fade in nav once fonts are loaded
document.fonts.ready.then(() => document.body.classList.add('fonts-loaded'));

// 1. Progress Bar
const bar = document.getElementById("scroll-progress");
let rafPending = false;
window.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (bar) bar.style.transform = `scaleX(${winScroll / height})`;
        rafPending = false;
    });
}, { passive: true });

// 2. Sidenote Overlap Prevention
function preventOverlap() {
    // If we are in portrait mode (phones), just clear the styles and exit
    if (window.matchMedia("(orientation: portrait)").matches) {
        document.querySelectorAll('.sidenote').forEach(note => note.style.marginTop = '');
        return;
    }

    // Desktop logic: Calculate overlaps
    const notes = Array.from(document.querySelectorAll('.sidenote'))
                        .filter(n => n.offsetParent !== null);

    let lastBottom = 0;
    notes.forEach((note) => {
        note.style.marginTop = '0px';
        const rect = note.getBoundingClientRect();
        const top = rect.top + window.scrollY;

        if (top < lastBottom + 10) {
            const overlap = (lastBottom + 10) - top;
            note.style.marginTop = `${overlap}px`;
            lastBottom = top + overlap + rect.height;
        } else {
            lastBottom = top + rect.height;
        }
    });
}

// 3. Smart Resize Listener (debounced)
let lastWidth = window.innerWidth;
let resizeTimer;

window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            preventOverlap();
            lastWidth = window.innerWidth;
        }, 150);
    }
});

// Run on orientation change and load as normal
window.addEventListener("orientationchange", () => {
    setTimeout(preventOverlap, 100);
    lastWidth = window.innerWidth; // Update width after rotation
});
window.addEventListener('load', preventOverlap);

// 4. Anchor links for h2 headings
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content h2').forEach(h2 => {
        // Generate id from text if not already set
        if (!h2.id) {
            h2.id = h2.textContent.trim().toLowerCase()
                .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        }
        // Make the whole h2 clickable to copy anchor
        h2.style.cursor = 'pointer';
        const suffix = document.createElement('span');
        suffix.className = 'anchor-link';
        suffix.textContent = ' §';
        h2.appendChild(suffix);

        h2.addEventListener('click', () => {
            history.replaceState(null, '', `#${h2.id}`);
            navigator.clipboard.writeText(window.location.href);
            suffix.textContent = ' ✓';
            setTimeout(() => suffix.textContent = ' §', 1500);
        });
    });

    // Scroll to hash on load if present
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
});
