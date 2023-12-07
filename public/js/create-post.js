const addPost = async(event)=>{
    event.preventDefault();
    const content = document.querySelector("#input-text").value;
    const title = document.querySelector("#title").value;
    console.log(title, content)
    if(content && title){
        console.log('hi')
        const response = await fetch(`/post/add-post/`, {
        method: 'POST',
        body: JSON.stringify({ content:content, title:title }),
        headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }
    }
}
document.querySelector('#post-btn').addEventListener('click', addPost);