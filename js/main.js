document.addEventListener('DOMContentLoaded', () => {
    setupModal();
    setupNavigation();
    checkForApps();
});

function setupModal() {
    const modal = document.getElementById('updateModal');
    const closeModal = document.getElementById('closeModal');
    const selectFolder = document.getElementById('selectFolder');
    const startUpdate = document.getElementById('startUpdate');
    const cancelUpdate = document.getElementById('cancelUpdate');
    const progressBar = modal.querySelector('.progress');
    const progressText = modal.querySelector('.progress-text');
    const updateProgress = modal.querySelector('.update-progress');

    [closeModal, cancelUpdate].forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            resetProgress();
        });
    });

    selectFolder.addEventListener('click', () => {
        // Simulate folder selection
        setTimeout(() => {
            alert('Folder selected successfully!');
            startUpdate.disabled = false;
        }, 500);
    });

    startUpdate.addEventListener('click', () => {
        simulateUpdate(progressBar, progressText, updateProgress);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            resetProgress();
        }
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function checkForApps() {
    const appList = document.getElementById('appList');
    // Check if there are any apps
    if (appList.children.length <= 1) { // Only the no-apps-message exists
        appList.innerHTML = `
            <div class="no-apps-message">
                <i class="fas fa-box-open"></i>
                <p>No apps available yet. Check back soon!</p>
            </div>
        `;
    }
}

function simulateUpdate(progressBar, progressText, updateProgress) {
    updateProgress.style.display = 'block';
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                alert('Update completed successfully!');
                document.getElementById('updateModal').style.display = 'none';
                resetProgress();
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Updating... ${Math.round(progress)}%`;
    }, 300);
}

function resetProgress() {
    const updateProgress = document.querySelector('.update-progress');
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
    
    updateProgress.style.display = 'none';
    progressBar.style.width = '0%';
    progressText.textContent = 'Updating... 0%';
}

function showUpdateModal(appName) {
    const modal = document.getElementById('updateModal');
    const selectedApp = document.getElementById('selectedApp');
    selectedApp.innerHTML = `
        <h3>${appName}</h3>
        <p class="update-info">Ready to update to the latest version</p>
    `;
    modal.style.display = 'block';
} 