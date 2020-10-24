const floatsContainer = document.querySelectorAll('.form-group');

if (floatsContainer != null ){
    
    floatsContainer.forEach((item) => {
        const floatInput = item.querySelector("input, select");
    
        if (floatInput != null) {
            floatInput.addEventListener('focus', () => {

                if (!item.classList.contains("active"))
                    item.classList.toggle('active');
            });
    
            floatInput.addEventListener('blur', () => {

                if (floatInput.value.trim() == "")
                    item.classList.remove('active');
            });    
        };
    });
}