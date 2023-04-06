function getCurrentURL() {
    return window.location.href
}

const url = getCurrentURL();


if (url.includes("https://platzi.com/blog/")) {
    
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

    setBannerStyle();
}

