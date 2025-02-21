function myFunction() {  
    document.getElementById("myDropdown").classList.toggle("show"); 
    
    const arrow = document.getElementById("arrow");  
    arrow.classList.toggle("rotated");  
}  
window.onclick = function(event) {  
    if (!event.target.matches('.dropbtn')) {  
        var dropdowns = document.getElementsByClassName("dropdown-content");  
        for (var i = 0; i < dropdowns.length; i++) {  
            var openDropdown = dropdowns[i];  
            if (openDropdown.classList.contains('show')) {  
                openDropdown.classList.remove('show');  
            }  
        }  
    }  
}  

function toggleDropdown() {  
    document.getElementById("myDropdown").classList.toggle("show");  
}  

function selectItem(language, imageUrl) {  
    const languageText = document.getElementById("language-text");  
    const flagImage = document.getElementById("flag");  
    
    languageText.textContent = language;
    flagImage.src = imageUrl;
    flagImage.style.display = 'inline';

    document.getElementById("myDropdown").classList.remove("show");  

    const arrow = document.getElementById("arrow");  
    arrow.classList.remove("rotated")

    closeDropdown();  
}  

function closeDropdown() {  
    document.getElementById("myDropdown").classList.remove("show");  
}  

window.onclick = function(event) {  
    if (!event.target.matches('.dropbtn')) {  
        closeDropdown();  
    }  
}  

