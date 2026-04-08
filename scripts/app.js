/**
 * Dynamic Service Worker Registration
 * Handles both root domains (localhost) and subfolder domains (GitHub Pages)
 */
const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    console.warn("Service Workers are not supported in this browser.");
    return;
  }

  try {
    const pathArray = window.location.pathname.split('/');

    const repoName = pathArray[1]; 

    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const swPath = isLocal ? './serviceWorker.js' : `/${repoName}/serviceWorker.js`;

    const registration = await navigator.serviceWorker.register(swPath);
    
    console.log('Service Worker registered successfully');
    console.log('Scope:', registration.scope);
    
  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

window.addEventListener('load', registerServiceWorker);

// App installation
window.addEventListener('appinstalled', () => {
  console.log('App installed successfully!');
});