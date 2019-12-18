const input = document.getElementById("uri"),
    textarea = document.getElementById("output");
function changeSize(value, w) {
    return `${value}=w${w}`
}
document.getElementById("submit").addEventListener("submit", e => {
    const v = input.value.replace(/=w(.*)/g, ""),
        m = document.getElementById("max-width").value;
    e.preventDefault(),
    textarea.value = `<figure class="wp-block-image"><img sizes="(max-width: ${m}px) 100vw, ${m}px" src="${changeSize(v, m)}" srcset="${changeSize(v, m)} ${m}w, ${changeSize(v, 600)} 600w, ${changeSize(v, 400)} 400w, ${changeSize(v, 1536)} 1536w, ${changeSize(v, 2048)} 2048w"></figure>`,
    textarea.select(),
    document.execCommand("copy")
})
