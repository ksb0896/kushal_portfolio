/**
 * Dynamic Service Worker Registration
 * Handles both root domains (localhost) and subfolder domains (GitHub Pages)
 */
const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator))  return;

  try {
    const swPath = isLocal ? './serviceWorker.js' : `/${repoName}/serviceWorker.js`;

    const registration = await navigator.serviceWorker.register(swPath);
    
    console.log('Service Worker registered successfully at:', registration.scope); 
  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

window.addEventListener('load', registerServiceWorker);

// App installation
window.addEventListener('appinstalled', () => {
  console.log('App installed successfully!');
});