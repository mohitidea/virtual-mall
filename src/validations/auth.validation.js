const validateSignup = (data) =>{
    const { name, email, password } = data;
    if(!name || name.lemgth < 2){
        return 'Name must be at least 2 characters';
    }

    if(!email || !email.includes('@')){
        return 'Valid email is Required!';
    }

    if(!password || password.length < 6){
        return 'Password must be at least 6 characters';   
    }
    return null;
}

module.exports= {
    validateSignup
}