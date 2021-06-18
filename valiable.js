
function Validation(option) {
    const infoElement = option.info;
    const formElement = document.querySelector(option.form);
  


    function validFormName(userInput,row) {
                var message = userInput.parentElement.querySelector(option.errorMessage);
                var inputContent = userInput.value;
                var Err = row.test(inputContent);
                if(Err){
                    message.innerText = Err;
                  
                    userInput.parentElement.classList.add('invalid');
                    userInput.onkeyup = (e)=>{
                        var value = e.target.value;
    
                        if(value.trim().length <= 5 ){
                            userInput.parentElement.classList.remove('valid');
                        }
                        if( Err.indexOf('Please enter your Email !') === 0 ){
                            userInput.parentElement.classList.remove('valid');
                        }
                        userInput.parentElement.classList.remove('invalid');
                        message.innerText = '';
                }
                }else{
                    message.innerText = '';
                    userInput.parentElement.classList.remove('invalid');
                    userInput.parentElement.classList.add('valid');
                }
    }
   

    infoElement.forEach( row =>{
        const userInput = formElement.querySelector(row.selector);
    
       if(userInput){
           userInput.onblur = () =>{
                    validFormName(userInput,row);
            }
       }

    })
  

}
isRequire = (selector)=>{
        return {
            selector : selector,
            test : function(content){
                   return content.trim().length >= 5 ? undefined : ` Please enter Your Name more than 5 char`;
            }
        }
}
isEmail = (selector)=>{
         return {
            selector : selector,
            test : (content)=>{
                const isTrue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
                return isTrue.test(content)  ? undefined : 'Please enter your Email !'
            }
        }
}

Validation({
    form : '#form-1',
    errorMessage : '.form__message',
    info : 
        [
            isRequire('#name'),
            isEmail('#email')
         ]
    
});