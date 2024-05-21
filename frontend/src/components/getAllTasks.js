const tasksList=async ()=>{
    try {
        // const res=await fetch("http://localhost:3000/api/v1/tasks/get-all-tasks",{
        //     method:"POST",
        //     body:{
        //         email:"s3@jskdsd.com12"
        //     },
        //     // body: JSON.stringify(data)
            
        // });
        // const userTask=res.json();
    
        const res=await axios.post("http://localhost:3000/api/v1/tasks/get-all-tasks",{
            email:"s3@jskdsd.com12"
        })
        console.log(res);
        let tasks=res.data.data;
                console.log(tasks);
                const n=document.getElementById("task");
                for(let i=0;i<tasks.length;i++)
                {
                    let ele=document.createElement("div");
                    ele.innerText=`${tasks[i].content}`;
                    n.appendChild(ele);
                }
    
    
    } catch (error) {
        console.log(error)
        const n=document.getElementById("task");
        let ele=document.createElement("div");
        ele.innerText=`Not found`;
        n.appendChild(ele);
    }
    }

    export default tasksList;