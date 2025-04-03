function menuAnim() {
    const menu = document.getElementById("menu").classList;
    menu.toggle("rotate-90-anim")
    menu.toggle("reverse-rotate-90-anim")

    const menu_options = document.getElementsByClassName("menu-option");

    for (let i = 0; i < menu_options.length; i++) {
        menu_options[i].classList.toggle("show_menu");
        menu_options[i].classList.toggle("hide_menu");
    }
}

setTimeout(function(){
    document.body.className="";
},500);