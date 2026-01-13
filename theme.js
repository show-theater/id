(function() {
    'use strict';
    
    const THEME_KEY = 'jkt48_theme';
    const DARK_CLASS = 'dark';
    
    const ICONS = {
        dark: '<path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0-4a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41L6.34,5A1,1,0,0,0,4.93,6.34ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm.64,5.66a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0-1.41-1.41ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Zm6.36-2.34a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41,0a1,1,0,0,0,0-1.41ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-3.64-3.95a1,1,0,0,0,.7.29,1,1,0,0,0,.71-1.7l-.71-.71a1,1,0,0,0-1.41,1.41Z"/>',
        light: '<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>'
    };
    
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
        applyTheme(savedTheme);
        
        window.addEventListener('storage', (e) => {
            if (e.key === THEME_KEY) {
                applyTheme(e.newValue || 'light');
            }
        });
        
        window.toggleTheme = function() {
            const current = localStorage.getItem(THEME_KEY) || 'light';
            const newTheme = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem(THEME_KEY, newTheme);
            applyTheme(newTheme);
            
            window.dispatchEvent(new StorageEvent('storage', {
                key: THEME_KEY,
                newValue: newTheme,
                oldValue: current
            }));
        };
    }
    
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add(DARK_CLASS);
            document.body.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
            document.body.classList.remove(DARK_CLASS);
        }
        updateThemeIcons(theme);
    }
    
    function updateThemeIcons(theme) {
        const iconSVG = ICONS[theme];
        document.querySelectorAll('#themeIcon, #themeIconDetail, .theme-toggle svg, .theme-toggle-detail svg').forEach(icon => {
            if (icon.parentNode) {
                icon.innerHTML = iconSVG;
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();