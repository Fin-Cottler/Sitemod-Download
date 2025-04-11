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

function fileAnim() {
    const frontcover = document.getElementById("front-cover");
    const backcover = document.getElementById("back-cover");    
    const grid = document.getElementById("tab-grid");
    const paper = document.getElementById("page");




    
    frontcover.classList.toggle("open-front");
    frontcover.classList.toggle("close-front");

    backcover.classList.toggle("open-back");
    backcover.classList.toggle("close-back");

    grid.classList.toggle("open-back");
    grid.classList.toggle("close-back");

    paper.classList.toggle("open-page");
    paper.classList.toggle("close-page");





    


    console.log(folder.classList)

}

setTimeout(function(){
    document.body.className="";
},500);
