const addPost = async(event)=>{
    event.preventDefault();
    const id = event.target.getAttribute("data-author");
    const content = document.querySelector("#input-text").value;
    const title = document.querySelector("#title").value;
    console.log(id, title, content)
    if(id && content && title){
        const response = await fetch(`/post/add-post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ author:id, content:content, title:title }),
        headers: { 'Content-Type': 'application/json' },
        });
    }
}
document.querySelector('#post-btn').addEventListener('click', addPost);