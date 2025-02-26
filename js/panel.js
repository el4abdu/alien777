document.addEventListener('DOMContentLoaded', () => {
    const updateForm = document.getElementById('updateForm');
    
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const app = document.getElementById('appSelect').value;
        const version = document.getElementById('version').value;
        const files = document.getElementById('updateFiles').files;

        // Here you would typically upload files to your storage solution
        // and update your database with the new version information
        
        addUpdateToHistory(app, version, files);
        updateForm.reset();
    });

    loadUpdateHistory();
});

function addUpdateToHistory(app, version, files) {
    const updateList = document.getElementById('updateList');
    const update = document.createElement('div');
    update.className = 'update-item';
    update.innerHTML = `
        <h3>${app} - v${version}</h3>
        <p>Files: ${files.length} files uploaded</p>
        <p>Date: ${new Date().toLocaleString()}</p>
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