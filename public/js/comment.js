const addComment = async(event)=>{
    const id = event.target.getAttribute("data-id");
    const author = event.target.getAttribute("data-author");
    const content = document.querySelector("#comment-input").value;
    console.log(id,content);
    if(content){
        const response = await fetch(`/post/add-comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({ post_id:id, content:content, author:author }),
        headers: { 'Content-Type': 'application/json' },
        });
    }
}
document.querySelector('#new-comment').addEventListener('click', addComment);