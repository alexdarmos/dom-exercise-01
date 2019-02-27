const main = () => {
    //variables that select ID's
    let selectGrow = document.getElementById(`grow-me`);
    let selectShrink = document.getElementById(`shrink-me`);
    let selectHide = document.getElementById(`hide-me`);
    let selectShow = document.getElementById(`show-me`);
    let selectName = document.getElementById(`name`);

    //selects li element
    let selectLi = document.querySelectorAll(`li`);

    //select a element
    let selectA = document.querySelector(`a`);

    //adding and removing classes
    selectGrow.classList.add(`big`);
    selectShrink.classList.remove(`big`);

    //logging text within li elements
    for (let i = 0; i < selectLi.length; i++)   {
        console.log(selectLi[i].outerText);
    }

    //change href
    selectA.setAttribute("href", "https://www.example.com");
    //changes text 
    selectA.innerHTML = `somewhere`;

    //adds none to the classes display
    selectHide.style.display = "none";
    //adds block to the classes display
    selectShow.style.display = `block`;

    //selects text field value
    let name = selectName.value;
    alert(`Hello ${name}!`);

    
    
}