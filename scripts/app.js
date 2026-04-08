// console.log("1. Script file loaded");

if ('serviceWorker' in navigator) {
//   console.log("2. Browser supports Service Workers");
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./serviceWorker.js')
      .then(reg => console.log("Registration successful!", reg.scope))
      .catch(err => console.error("Registration failed:", err));
  });
}