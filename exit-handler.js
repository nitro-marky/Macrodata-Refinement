// Simple double-click exit functionality
function addExitFunctionality() {
    setTimeout(() => {
        // Create exit zone in top-right corner
        const exitZone = document.createElement('div');
        exitZone.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            width: 120px;
            height: 80px;
            z-index: 999999;
            background: transparent;
            cursor: pointer;
        `;
        
        let clickCount = 0;
        let clickTimer = null;
        
        exitZone.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            clickCount++;
            
            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 500);
            } else if (clickCount === 2) {
                clearTimeout(clickTimer);
                clickCount = 0;
                
                if (confirm('Exit to desktop?')) {
                    try { window.close(); } catch (e) {}
                    try { if (document.exitFullscreen) document.exitFullscreen(); } catch (e) {}
                    setTimeout(() => { window.location.href = 'about:blank'; }, 1000);
                }
            }
        });
        
        document.body.appendChild(exitZone);
        
    }, 2000);
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addExitFunctionality);
} else {
    addExitFunctionality();
}
