const listener = (event) => alert(event.key);

window.document.addEventListener('keydown', listener);
window.document.getElementById('webview').addEventListener('keydown', listener);
