document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const adminPanel = document.getElementById('adminPanel');
    const logoutBtn = document.getElementById('logoutBtn');
    const updateForm = document.getElementById('updateForm');

    // Check if already logged in
    if (sessionStorage.getItem('isLoggedIn')) {
        showAdminPanel();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'abdu' && password === '1234') {
            sessionStorage.setItem('isLoggedIn', 'true');
            showAdminPanel();
        } else {
            alert('Invalid credentials!');
        }
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn');
        location.reload();
    });

    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const appName = document.getElementById('appName').value;
        const version = document.getElementById('version').value;
        const description = document.getElementById('description').value;
        const files = document.getElementById('updateFiles').files;

        addAppToList(appName, version, description);
        updateForm.reset();
    });

    loadApps();
});

function showAdminPanel() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
}

function addAppToList(appName, version, description) {
    const appsList = document.getElementById('appsList');
    const appItem = document.createElement('div');
    appItem.className = 'app-item';
    appItem.innerHTML = `
        <div class="app-info">
            <h3>${appName}</h3>
            <p><strong>Version:</strong> ${version}</p>
            <p>${description}</p>
        </div>
        <button class="delete-btn" onclick="deleteApp(this)">
            <i class="fas fa-trash"></i> Delete
        </button>
    `;
    appsList.appendChild(appItem);
}

function deleteApp(button) {
    if (confirm('Are you sure you want to delete this app?')) {
        button.closest('.app-item').remove();
    }
}

function loadApps() {
    // This would typically fetch from an API
    const apps = [
        // Add any existing apps here
    ];

    const appsList = document.getElementById('appsList');
    apps.forEach(app => {
        addAppToList(app.name, app.version, app.description);
    });
} 