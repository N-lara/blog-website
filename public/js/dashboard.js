const selectPost = async(event)=>{
    console.log("target "+event.target.getAttribute("class"));
    if(event.target.getAttribute("class")==='post'){
        window.location.href = `/dashboard/${event.target.getAttribute("data-id")}`;
    }

};

document.querySelector('.list-div').addEventListener('click', selectPost);