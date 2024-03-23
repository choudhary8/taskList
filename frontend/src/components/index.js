const tasksList=async ()=>{
    let res=await axios.get("http://localhost:3000/");
    let tasks=await res.data;
        console.log(tasks);
        for(let i=0;i<tasks.length;i++)
        {
            let ele=document.createElement("div");
            ele.innerText=`${tasks[i]}`;
            const n=document.getElementsByTagName("div");
            n[0].appendChild(ele);
        }
}
let getList=document.getElementsByTagName("button");
getList[0].addEventListener("click",tasksList);