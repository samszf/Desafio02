document.addEventListener('DOMContentLoaded', function () {
    const senhaInput = document.getElementById('senha');
    const toggleBtn = document.getElementById('toggleSenha');

    if (!senhaInput || !toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
        const isPassword = senhaInput.type === 'password';
        senhaInput.type = isPassword ? 'text' : 'password';
        toggleBtn.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
        toggleBtn.textContent = isPassword ? '🙈' : '👁';
    });
});