// Force reset based on URL parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('t') || urlParams.get('reset')) {
    console.log('URL reset triggered');
    
    // Force reset after page loads
    setTimeout(() => {
        // Reset all possible game variables
        if (typeof window.completed !== 'undefined') window.completed = false;
        if (typeof window.shared !== 'undefined') window.shared = false;
        if (typeof window.mde !== 'undefined') window.mde = false;
        if (typeof window.mdeDone !== 'undefined') window.mdeDone = false;
        if (typeof window.percent !== 'undefined') window.percent = 0;
        
        // Clear any storage
        try {
            localStorage.clear();
            sessionStorage.clear();
        } catch (e) {}
        
        console.log('Forced reset complete');
    }, 500);
}
