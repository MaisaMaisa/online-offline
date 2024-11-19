function checkOnlineStatus() {
    if (navigator.onLine) {
        document.getElementById('offline-world').style.display = 'none';
        document.getElementById('online-world').style.display = 'block';
    } else {
        document.getElementById('offline-world').style.display = 'block';
        document.getElementById('online-world').style.display = 'none';
    }
}

// Check the online status when the page loads
window.addEventListener('load', checkOnlineStatus);

// Check the online status when the online/offline event is triggered
window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);