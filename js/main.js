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
    appList.innerHTML = ''; // Clear existing content
    
    if (sampleApps.length === 0) {
        // Show empty state
        appList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box-open"></i>
                <p>No apps available yet</p>
                <p class="sub-text">Check back later for updates</p>
            </div>
        `;
        return;
    }

    sampleApps.forEach(app => {
        const appCard = createAppCard(app);
        appList.appendChild(appCard);
    });
}

function createAppCard(app) {
    const div = document.createElement('div');
    div.className = 'app-card';
    div.innerHTML = `
        <div class="app-card-header">
            <div class="app-icon">
                <img src="${app.icon}" alt="${app.name} icon">
            </div>
            <div class="app-info">
                <h3 class="app-name">${app.name}</h3>
                <p class="app-version">Version ${app.version}</p>
            </div>
        </div>
        
        <div class="progress-bar">
            <div class="progress" style="width: ${app.progress || 0}%"></div>
        </div>
        
        <div class="app-stats">
            <div class="stat-item">
                <i class="fas fa-clock"></i>
                <span>${app.lastUpdate || 'Never updated'}</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-download"></i>
                <span>${app.downloads || 0} downloads</span>
            </div>
        </div>
        
        <div class="app-actions">
            <button onclick="showUpdateModal('${app.name}')" class="btn primary">
                <i class="fas fa-sync-alt"></i>
                Update
            </button>
            <button class="btn secondary">
                <i class="fas fa-info-circle"></i>
                Details
            </button>
        </div>
    `;
    return div;
}

function showUpdateModal(appName) {
    const modal = document.getElementById('updateModal');
    const selectedApp = document.getElementById('selectedApp');
    selectedApp.textContent = `Selected App: ${appName}`;
    modal.style.display = 'block';
}

// Example app data
const sampleApps = [
    {
        name: "App Name",
        version: "1.0.0",
        icon: "path/to/icon.png",
        progress: 50,
        lastUpdate: "3 weeks ago",
        downloads: 1234,
        description: "App description here"
    }
    // Add more apps as needed
]; 