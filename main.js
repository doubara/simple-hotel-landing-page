
function dropDownToggleFunction(){
    const button = document.querySelector("[data-toggle='menu-toggle']")
    const nav = document.querySelector("[data-toggle='dropdown-nav'")
    button.addEventListener('click', function(event){
        console.log(event.target)
        if (event.target.parentElement.matches('BUTTON')){
            if (nav.classList.contains('show-dropdown')){
                nav.classList.remove('show-dropdown');
                console.log('Hide')
            }
            else nav.classList.add('show-dropdown');
            console.log('show')
        }
    })
    return
}
dropDownToggleFunction();