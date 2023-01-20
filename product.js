let href = location.search
let url = new URLSearchParams(href)
let end = url.get('id')
console.log(end)