// footer.js
const footerHTML = `
    <footer style="text-align: center; padding: 40px 20px; color: #ffffff; margin-top: 50px; font-family: sans-serif;">
        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.2); margin-bottom: 20px;">
        <p style="margin: 5px 0;">&copy; 2026 MAZZ - Márcio Rodrigues de Oliveira</p>
        <p style="margin: 5px 0; font-size: 0.9em; opacity: 0.8;">Desenvolvido por: <a href="https://razgo.com.br/" target="_blank" style="color: #4CAF50; text-decoration: none; font-weight: bold;">RAZGO</a></p>
        <div style="margin-top: 15px;">
            <a href="index.html" style="color: #fff; margin: 0 10px; text-decoration: none; opacity: 0.8;">Início</a>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});