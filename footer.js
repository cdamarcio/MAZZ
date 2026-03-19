// footer.js
const footerHTML = `
    <footer style="text-align: center; padding: 40px 20px; color: #ffffff; margin-top: 50px; font-family: sans-serif;">
        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px;">
        <p style="margin: 5px 0; opacity: 0.8;">&copy; 2026 MAZZ - Todos os direitos reservados.</p>
        <p style="margin: 5px 0; font-size: 0.9em; opacity: 0.6;">Desenvolvido por: <a href="https://razgo.com.br/" target="_blank" style="color: #4CAF50; text-decoration: none; font-weight: bold;">RAZGO</a></p>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});