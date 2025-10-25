const form = document.getElementById("apiForm");
const outputContainer = document.getElementById("outputContainer");
const themeToggle = document.getElementById("themeToggle");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const endpoint = document.getElementById("endpoint").value.trim();
  const method = document.getElementById("method").value;
  const response = document.getElementById("response").value.trim();

  let parsedResponse;
  try {
    parsedResponse = JSON.parse(response);
  } catch {
    outputContainer.innerHTML = `<p style="color:#f87171;">❌ Invalid JSON format!</p>`;
    return;
  }

  const apiUrl = `https://mockapi.io${endpoint}`;
  outputContainer.innerHTML = `
    <div class="endpoint-row">
      <p><strong>Generated Endpoint:</strong></p>
      <code id="apiUrl">${apiUrl}</code>
      <button class="copy-btn" onclick="copyToClipboard()">Copy URL</button>
    </div>
    <p><strong>HTTP Method:</strong> ${method}</p>
    <p><strong>Sample Response:</strong></p>
    <pre>${JSON.stringify(parsedResponse, null, 2)}</pre>
  `;

  form.reset();
});

function copyToClipboard() {
  const apiUrl = document.getElementById("apiUrl").innerText;
  navigator.clipboard.writeText(apiUrl);
  alert("✅ API URL copied to clipboard!");
}

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});
