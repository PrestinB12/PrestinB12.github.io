function showContent() {
    // Get the content inside the template and append it to the body
    const template = document.querySelector('template');
    const clone = document.importNode(template.content, true);
    document.body.appendChild(clone);
    
    // Optionally, remove the template to prevent duplicate content
    template.remove();
}