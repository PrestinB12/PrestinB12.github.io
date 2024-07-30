function showContent() {
    // Get the content inside the template and append it to the body
    const template = document.querySelector('template');
    const clone = document.importNode(template.content, true);
    document.body.appendChild(clone);
    
    // Optionally, remove the template to prevent duplicate content
    template.remove();
}
/*
    For saving state for future dark-mode on website toggle (coming soon)

window.localStorage.setItem('settings.darkmode', "on")
...
const darkMode = ('on' === window.localStorage.getItem('settings.darkmode'));
*/