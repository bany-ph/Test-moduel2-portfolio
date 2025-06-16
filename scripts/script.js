/* change theme */
const local = localStorage.getItem('theme');

if (local && local == 'light') {
    const html = document.querySelector("html")
    html.classList.add('light')
}else{
    const html = document.querySelector("html")
    html.classList.remove('light')
}

function changeTheme(){
    const html = document.querySelector("html")
    const theme = localStorage.getItem("theme")

    if (theme && theme == "light") {
        localStorage.removeItem("theme")
        
        html.classList.remove("light")
    } else {
        html.classList.add("light") 
        localStorage.setItem("theme", "light")
    }
}


