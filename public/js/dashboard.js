const selectPost = async(event)=>{
    console.log("target "+event.target.getAttribute("class"));
    if(event.target.getAttribute("class")==='post'){
        window.location.href = `/dashboard/${event.target.getAttribute("data-id")}`;
    }

};

const changePage = ()=>{
        window.location.href = `/dashboard/new-post`;
};

document.querySelector('.list-div').addEventListener('click', selectPost);
document.querySelector('#add-post').addEventListener('click', changePage);
