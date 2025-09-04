const form=document.querySelector("form")

form.addEventListener("input",function(evt){
    evt.preventDefault()
    if(evt.target.classList.contains("blur")){
        document.documentElement.style.setProperty('--blur-amt',`${evt.target.value}px`)
    }    
    if(evt.target.classList.contains("color")){
        document.documentElement.style.setProperty('--bg-color',evt.target.value)
    }
    if(evt.target.classList.contains("spacing")){
        document.documentElement.style.setProperty('--scale-value',evt.target.value*0.1+1)
    }
})