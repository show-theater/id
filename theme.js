function updateThemeIcon(isDarkMode) {
  const icons = document.querySelectorAll('#themeIcon, #themeIconDetail');
  
  icons.forEach(icon => {
    if (!icon) return;
    
    if (isDarkMode) {
      icon.innerHTML = '<path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0-4a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41L6.34,5A1,1,0,0,0,4.93,6.34ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm.64,5.66a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0-1.41-1.41ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Zm6.36-2.34a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-3.64-3.95a1,1,0,0,0,.7.29,1,1,0,0,0,.71-1.7l-.71-.71a1,1,0,0,0-1.41,1.41Z"/>';
    } else {
      icon.innerHTML = '<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>';
    }
  });
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('jkt48_theme') || 'light';
  const isDarkMode = savedTheme === 'dark';
  
  if (isDarkMode) {
    document.body.classList.add('dark');
    document.documentElement.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
    document.documentElement.classList.remove('dark');
  }
  
  updateThemeIcon(isDarkMode);
}

function toggleTheme() {
  const isDarkMode = !document.body.classList.contains('dark');
  
  if (isDarkMode) {
    document.body.classList.add('dark');
    document.documentElement.classList.add('dark');
    localStorage.setItem('jkt48_theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('jkt48_theme', 'light');
  }
  
  updateThemeIcon(isDarkMode);
}

// Auto-initialize theme saat DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}