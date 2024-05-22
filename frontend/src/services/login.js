document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('login');
    console.log(form);
    form.addEventListener('submit',async(event)=>{
    try {
        //perventing default sumbession
        event.preventDefault();

        //collecting form data
        const formData=new FormData(form);
        console.log(formData);

        //creating an object then storing form data into a object
        const formDataObject={};
        formData.forEach((value,key) => {
            formDataObject[key]=value;
        });

        //triggering the request by using json.stringify
        const res=await axios.post('http://localhost:3000/api/v1/users/login',formDataObject)

        console.log(res);
        //handling the response


    } catch (error) {
        throw error;
    }
    
})
})