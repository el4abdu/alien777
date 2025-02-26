document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('adminLogin');
    const adminPanel = document.getElementById('adminPanel');
    const loginContainer = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const newAppBtn = document.getElementById('newAppBtn');
    const newAppModal = document.getElementById('newAppModal');
    const closeModalBtns = document.querySelectorAll('.close-btn');
    const deleteAppBtn = document.getElementById('deleteAppBtn');
    const editAppBtn = document.getElementById('editAppBtn');

    // Login handling
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'abdu' && password === '1234') {
            loginContainer.style.display = 'none';
            adminPanel.style.display = 'flex';
            loadApps();
        } else {
            alert('Invalid credentials!');
        }
    });

    // Logout handling
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        adminPanel.style.display = 'none';
        loginContainer.style.display = 'flex';
        loginForm.reset();
    });

    // New App Modal
    newAppBtn.addEventListener('click', () => {
        newAppModal.style.display = 'block';
    });

    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            newAppModal.style.display = 'none';
        });
    });

    // Delete app
    deleteAppBtn.addEventListener('click', () => {
        const appSelect = document.getElementById('appSelect');
        if (appSelect.value) {
            if (confirm('Are you sure you want to delete this app?')) {
                // Here you would typically delete from your backend
                alert('App deleted successfully!');
                loadApps();
            }
        } else {
            alert('Please select an app to delete');
        }
    });

    // Edit app
    editAppBtn.addEventListener('click', () => {
        const appSelect = document.getElementById('appSelect');
        if (appSelect.value) {
            // Here you would typically open an edit modal with the app details
            alert('Edit functionality would be implemented here');
        } else {
            alert('Please select an app to edit');
        }
    });

    // Update form handling
    const updateForm = document.getElementById('updateForm');
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const app = document.getElementById('appSelect').value;
        const version = document.getElementById('version').value;
        const files = document.getElementById('updateFiles').files;

        // Here you would typically upload files to your storage solution
        addUpdateToHistory(app, version, files);
        updateForm.reset();
    });

    // New app form handling
    const newAppForm = document.getElementById('newAppForm');
    newAppForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('newAppName').value;
        const icon = document.getElementById('newAppIcon').files[0];
        const version = document.getElementById('newAppVersion').value;

        // Here you would typically upload the icon and create the app in your backend
        alert('App created successfully!');
        newAppModal.style.display = 'none';
        newAppForm.reset();
        loadApps();
    });

    loadUpdateHistory();
});

function loadApps() {
    const appSelect = document.getElementById('appSelect');
    // This would typically fetch from an API
    const apps = [
        { id: 'app1', name: 'App 1' },
        { id: 'app2', name: 'App 2' }
    ];

    appSelect.innerHTML = '<option value="">Select App</option>';
    apps.forEach(app => {
        const option = document.createElement('option');
        option.value = app.id;
        option.textContent = app.name;
        appSelect.appendChild(option);
    });
}

function addUpdateToHistory(app, version, files) {
    const updateList = document.getElementById('updateList');
    const update = document.createElement('div');
    update.className = 'update-item';
    update.innerHTML = `
        <h3>${app} - v${version}</h3>
        <p><i class="fas fa-file"></i> Files: ${files.length} files uploaded</p>
        <p><i class="fas fa-clock"></i> Date: ${new Date().toLocaleString()}</p>
    `;
    updateList.prepend(update);
}

function loadUpdateHistory() {
    // This would typically fetch from an API
    const updates = [
        { app: 'App 1', version: '1.0.0', files: 3, date: '2024-03-20' },
        { app: 'App 2', version: '2.0.0', files: 5, date: '2024-03-19' }
    ];

    const updateList = document.getElementById('updateList');
    updates.forEach(update => {
        const updateElement = document.createElement('div');
        updateElement.className = 'update-item';
        updateElement.innerHTML = `
            <h3>${update.app} - v${update.version}</h3>
            <p>Files: ${update.files} files</p>
            <p>Date: ${update.date}</p>
        `;
        updateList.appendChild(updateElement);
    });
} 