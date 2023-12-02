const editPost = async(event)=>{
    const id = event.target.getAttribute("data-id");
    const content = document.querySelector("#post-content").value;
    if(id && content){
        const response = await fetch(`/dashboard/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id:id, content:content }),
        headers: { 'Content-Type': 'application/json' },
        });
    }
};

const deletePost = async(event)=>{
    const id = event.target.getAttribute("data-id");
    if(id){
        const response = await fetch(`/dashboard/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ id:id, }),
        headers: { 'Content-Type': 'application/json' },
        });
    }
};


document.querySelector('#edit-btn').addEventListener('click', editPost);
document.querySelector('#delete-btn').addEventListener('click', deletePost);
