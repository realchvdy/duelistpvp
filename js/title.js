const baseTitle = "Duelistpvp.lol";
let titleIndex = 1;
let isReversing = false;

function animateTitle() {
    let currentTitle = baseTitle.substring(0, titleIndex);
    if (titleIndex < baseTitle.length && !isReversing) {
        currentTitle += "...";
    }
    document.title = currentTitle;
    
    if (!isReversing) {
        titleIndex++;
        if (titleIndex > baseTitle.length) {
            isReversing = true;
            setTimeout(animateTitle, 2000); 
            return;
        }
    } else {
        titleIndex--;
        if (titleIndex === 0) {
            isReversing = false;
            titleIndex = 1;
        }
    }
    
    setTimeout(animateTitle, 250); 
}

animateTitle();
