// Script to handle fullscreen toggle
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Script to handle search
document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    alert('Searching for: ' + query);
});
