const selectPost = async(event)=>{
    console.log("target "+event.target.getAttribute("class"));
    if(event.target.getAttribute("class")==='post'){
        window.location.href = `/dashboard/${event.target.getAttribute("data-id")}`;
        // const id = event.target.getAttribute("data-id");
        // data = {id:id};
        // console.log(`gettting post $...`);
        // const response = await fetch(`/dashboard/${id}`, {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
        //   });
    }

};

document.querySelector('.list-div').addEventListener('click', selectPost);