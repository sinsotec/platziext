function getCurrentURL() {
    return window.location.href
}

const url = getCurrentURL();


if (url.includes("https://platzi.com/blog/")) {
    
   /*  const contributionsPage = document.getElementsByClassName("LabTutorials-contributions")[0];
    const contributions = document.getElementsByClassName("Contribution");
    const contributionsExtract = document.getElementsByClassName("Contribution-extract");
    const stars = document.getElementsByClassName("Star");
    const searchInput = document.getElementsByClassName("Search-input")[0];


    if (contributionsPage && contributions && contributionsExtract) {
        contributionsPage.style.backgroundColor = '#121F3D';
        searchInput.style.backgroundColor = '#03091e';
        searchInput.style.border = '1px solid #40587c';

        
        for (let i = 0; i < contributions.length; i++) {
            contributions[i].style.backgroundColor = '#24385B';
            contributions[i].style.borderColor = '#24385B';
            contributionsExtract[i].style.color = '#eff3f8cc';
            stars[i].style.backgroundColor = "#24385b";
            stars[i].style.border = "1px solid #33b1ff";
        } 
        stars[contributions.length].style.backgroundColor = "#24385b";
        stars[contributions.length].style.border = "1px solid #33b1ff";
        console.log('Fondo negro en blog');
        
    } */
    
    //const blogBody = document.getElementsByClassName("MainDiscussion-body")[0];
    //const blogTop = document.getElementById("top");
    //const contributionsDetailComments = document.getElementsByClassName("DiscusionDetail-comments")[0];
    //const commentContent = document.getElementsByClassName("CommentContent-text");


    const setBannerStyle = () => {
                const courseBanner = document.getElementsByClassName("CourseBanner")[0];
                if(courseBanner){
                    const courseBannerTitle = document.getElementsByClassName("CourseBanner-title")[0];
                    const bannerText = document.getElementsByClassName("CourseBanner-text")[0];
                    courseBanner.style.backgroundColor = '#24385B';
                    courseBannerTitle.firstElementChild.style.color = '#0791E6'
                    bannerText.style.color = '#eff3f8cc';
                }
    }

    //selecciona el nodo padre del banner. 

    const target = document.getElementsByClassName("MainDiscussion-body")[0]; 
    if(target){
        //Creamos el MutationObserver para observar la creacion del banner.
        const pepe = new MutationObserver((mutationList) => {
            mutationList.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    setBannerStyle();
                }
            });
        })

        //declaramos solo childList, ya que solamente nos interesa ver si se agrega el banner. 
        const observerOptions = {
            childList: true
        }; 
        
        //Iniciamos el observer pasandole el padre del banner y la configuracion. 
        pepe.observe(target, observerOptions);
    }

    if (true/* blogBody && blogTop && contributionsDetailComments*/) {
        //blogTop.style.backgroundColor = '#121F3D';
        //blogBody.style.backgroundColor = '#121F3D';
        //blogBody.style.color = '#eff3f8cc';
        //contributionsDetailComments.style.backgroundColor = '#121F3D';
        //contributionsDetailComments.style.color = '#eff3f8cc';
        setBannerStyle();

        //document.getElementById("contribution-detail").firstElementChild.style.backgroundColor = "#121F3D" //Background de div principal

        /* for (let star of stars) {
            star.style.backgroundColor = "#24385b";
            star.style.border = "1px solid #33b1ff";
        } 
        for (let comment of commentContent) {
            comment.style.color = '#eff3f8cc';
        }*/
        
    }
}

/* window.onload = (event) =>{
    if (url.includes("https://platzi.com/clases/")) {
        const menu = document.querySelector('.Nav-header-logged .Menu .Menu-content ul');
        const newMenuItem = document.createElement('li');
        const newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        const labelSlider = document.createElement('label');
        labelSlider.classList.add('switch');
        const slider = document.createElement('span');
        slider.classList.add('slider');
        slider.classList.add('round');
        newCheckBox.appendChild(slider);
        labelSlider.appendChild(newCheckBox)
        newMenuItem.appendChild(labelSlider);
        menu.appendChild(newMenuItem);   

    }
} */

