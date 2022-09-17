
<script>
    console.log(window.location.host);
    if (window.location.host == 'localhost:4000') {
        console.warn('DEBUG mode, url fixup.');
        document.body.innerHTML = document.body.innerHTML.replace(
            'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util',
            'https://localhost'
        );
    }
</script>

