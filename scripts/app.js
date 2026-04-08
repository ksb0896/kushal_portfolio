if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./serviceWorker.js')
      .then(reg => console.log("Registration successful!", reg.scope))
      .catch(err => console.error("Registration failed:", err));
  });
}

// App installation
window.addEventListener('appinstalled', () => {
  console.log('App installed successfully!');
});