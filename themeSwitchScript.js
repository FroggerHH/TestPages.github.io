<script>
    function toggleTheme() {
      var theme = document.getElementById('theme-style');
      if (theme.getAttribute('href') == 'styles.css') {
        theme.href = 'dark-theme.css';
        localStorage.setItem('theme', 'dark');
      } else {
        theme.href = 'styles.css';
        localStorage.setItem('theme', 'light');
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      var savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        var theme = document.getElementById('theme-style');
        theme.href = 'dark-theme.css';
      }
    });
  </script>
