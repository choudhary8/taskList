import tasksList from "./getAllTasks.js";

axios.defaults.withCredentials = true;
// document.addEventListener('DOMContentLoaded',()=>{
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
        const res=await axios.post('http://localhost:3000/api/v1/users/login',formDataObject,{
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*', 
                'Content-Type': 'application/json'
            }
        })

        console.log(res);
        //handling the response

        // const token=res.data.data.accessToken;
        // setCookie('accessToken',token);
        
        // Cookie: accessToken=res.data.data.accessToken;
        // document.cookie = `accessToken=${res.data.data.accessToken}`;

        // const options={
        //     httpOnly:true,
        //     secure:true
        // }
        // Cookies.set('accessToken',res.data.data.accessToken)
        // const accessToken=Cookies.get('accessToken')
        // console.log(accessToken);

        // window.location.replace('index.html');

    } catch (error) {
        throw error;
    }
    
})

let getList=document.getElementById("button");
getList.addEventListener("click",tasksList);
// })

