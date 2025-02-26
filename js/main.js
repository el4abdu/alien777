document.addEventListener('DOMContentLoaded', () => {
    // Load apps from storage or API
    loadApps();

    const searchInput = document.getElementById('searchApps');
    searchInput.addEventListener('input', filterApps);

    const modal = document.getElementById('updateModal');
    const closeModal = document.getElementById('closeModal');
    const selectFolder = document.getElementById('selectFolder');
    const startUpdate = document.getElementById('startUpdate');

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    selectFolder.addEventListener('click', () => {
        // Simulate folder selection
        const path = 'C:\\Program Files\\YourApp';
        document.getElementById('selectedPath').textContent = `Selected: ${path}`;
    });

    startUpdate.addEventListener('click', () => {
        const selectedPath = document.getElementById('selectedPath').textContent;
        if (!selectedPath) {
            alert('Please select installation folder first');
            return;
        }
        alert('Update process started...');
        modal.style.display = 'none';
    });
});

function loadApps() {
    const appList = document.getElementById('appList');
    const noApps = document.getElementById('noApps');
    
    // This would typically fetch from an API
    const apps = [];

    if (apps.length === 0) {
        noApps.style.display = 'block';
        appList.style.display = 'none';
        return;
    }

    noApps.style.display = 'none';
    appList.style.display = 'grid';

    apps.forEach(app => {
        const appCard = createAppCard(app);
        appList.appendChild(appCard);
    });
}

function createAppCard(app) {
    const div = document.createElement('div');
    div.className = 'app-card';
    div.innerHTML = `
        <h3>${app.name}</h3>
        <p><strong>Version:</strong> ${app.version}</p>
        <p>${app.description}</p>
        <button onclick="showUpdateModal('${app.name}')">
            <i class="fas fa-download"></i> Update
        </button>
    `;
    return div;
}

function showUpdateModal(appName) {
    const modal = document.getElementById('updateModal');
    const selectedApp = document.getElementById('selectedApp');
    selectedApp.textContent = `Selected App: ${appName}`;
    document.getElementById('selectedPath').textContent = '';
    modal.style.display = 'block';
}

function filterApps() {
    const searchText = document.getElementById('searchApps').value.toLowerCase();
    const appCards = document.querySelectorAll('.app-card');
    
    appCards.forEach(card => {
        const appName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = appName.includes(searchText) ? 'block' : 'none';
    });
} 