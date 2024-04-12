const tasksList=async ()=>{
try {
        let res=await axios.get("http://localhost:3000/api/v1/tasks");
        let tasks=await res.data;
            console.log(tasks);
            const n=document.getElementById("task");
            for(let i=0;i<tasks.length;i++)
            {
                let ele=document.createElement("div");
                ele.innerText=`${tasks[i]}`;
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
let getList=document.getElementsByTagName("button");
getList[0].addEventListener("click",tasksList);

const logoutUser=async()=>{
    const res=await axios.get("http://localhost:3000/api/v1/users/logout")
    const data=res.data;
    console.log(data.message);
}

let logout=document.getElementById("logout");
logout.addEventListener("click",logoutUser);

