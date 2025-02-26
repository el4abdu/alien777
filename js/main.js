document.addEventListener('DOMContentLoaded', () => {
    // Load apps from storage or API
    loadApps();

    const modal = document.getElementById('updateModal');
    const closeModal = document.getElementById('closeModal');
    const selectFolder = document.getElementById('selectFolder');
    const startUpdate = document.getElementById('startUpdate');
    const cancelUpdate = document.getElementById('cancelUpdate');

    [closeModal, cancelUpdate].forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    selectFolder.addEventListener('click', () => {
        // This would typically use electron or a similar tool for desktop apps
        alert('Select folder functionality would be implemented based on your deployment method');
    });

    startUpdate.addEventListener('click', () => {
        // Implement update logic
        alert('Update process would start here');
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function loadApps() {
    const appList = document.getElementById('appList');
    // This would typically fetch from an API
    const apps = [
        { 
            name: 'App 1', 
            version: '1.0.0', 
            description: 'Description for App 1',
            icon: 'images/app1-icon.png'
        },
        { 
            name: 'App 2', 
            version: '2.0.0', 
            description: 'Description for App 2',
            icon: 'images/app2-icon.png'
        }
    ];

    appList.innerHTML = '';
    apps.forEach(app => {
        const appCard = createAppCard(app);
        appList.appendChild(appCard);
    });
}

function createAppCard(app) {
    const div = document.createElement('div');
    div.className = 'app-card';
    div.innerHTML = `
        <img src="${app.icon}" alt="${app.name} icon">
        <h3>${app.name}</h3>
        <p>Version: ${app.version}</p>
        <p>${app.description}</p>
        <button onclick="showUpdateModal('${app.name}')" class="btn primary">
            <i class="fas fa-download"></i> Update
        </button>
    `;
    return div;
}

function showUpdateModal(appName) {
    const modal = document.getElementById('updateModal');
    const selectedApp = document.getElementById('selectedApp');
    selectedApp.textContent = `Selected App: ${appName}`;
    modal.style.display = 'block';
} 