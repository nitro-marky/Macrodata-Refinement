function applyScaling() {
    const scale = Math.min(window.innerWidth/800, window.innerHeight/480, 1);
    if (scale < 1) {
        document.body.style.transform = `scale(${scale})`;
        document.body.style.transformOrigin = 'top left';
        document.body.style.width = `${100/scale}%`;
        document.body.style.height = `${100/scale}%`;
    }
}

window.addEventListener('load', applyScaling);
setTimeout(applyScaling, 1000);
setTimeout(applyScaling, 3000);
