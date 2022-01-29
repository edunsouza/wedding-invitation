import App from './App.svelte';

let app;

try {
  document.body.innerHTML = `
    <center>
      <pre>CAMILA - ${new Date()}</pre>
    </center>
  `;
  // app = new App({ target: document.body });
} catch (error) {
  document.body.innerHTML = `
    <center>
      <pre>${error}</pre>
    </center>
  `;
}

export default app;