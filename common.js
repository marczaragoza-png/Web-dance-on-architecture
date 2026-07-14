function closePopup() {
    const popup = document.getElementById('award-popup');
    if (!popup) return;
    popup.style.opacity = '0';
    setTimeout(() => { popup.style.display = 'none'; }, 500);
}

function openPopup() {
    const popup = document.getElementById('award-popup');
    if (!popup) return;
    popup.style.display = 'block';
    setTimeout(() => { popup.style.opacity = '1'; }, 10);
}

function setLang(lang, evt) {
    document.querySelectorAll('.i18n').forEach(el => {
        el.classList.toggle('hidden', el.getAttribute('data-lang') !== lang);
    });
    document.querySelectorAll('.lang-switch span.lang-option').forEach(s => s.classList.remove('active'));
    document.documentElement.setAttribute('lang', lang);

    const target = (evt && evt.target) ? evt.target : (window.event ? window.event.target : null);
    if (target) target.classList.add('active');

    try { localStorage.setItem('doa-lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function () {
    let saved = 'en';
    try { saved = localStorage.getItem('doa-lang') || 'en'; } catch (e) {}
    const trigger = document.querySelector('.lang-switch span.lang-option[data-setlang="' + saved + '"]');
    if (trigger) {
        setLang(saved, { target: trigger });
    }
});
