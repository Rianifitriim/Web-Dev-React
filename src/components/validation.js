const validation = (values) => {

    let errors={};

    if(!values.email){
        errors.email="email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="email is invalid"
    }
    return errors;
};
export default validation