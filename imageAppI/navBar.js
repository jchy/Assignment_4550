const navBar = ()=>{
    return `
    <nav>
        <div id="navDiv">
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAAAwMDDx8fE3NzeOjo4sLCwQEBD29vaFhYULCwsaGho6OjofHx+WlpZJSUlcNdZGAAABFElEQVR4nO3c2Q3CMBBF0eCE7Ev/3VICyJaYgZzbwPP5HsldJ0mSJEmSJEmS9Kf1U2lp6qMBb+sfbRHGR0hIGB8hIWF8hISE8RESEsZHSEgYHyEhYXyEhITxERISxkdISBgfISFhfISEhPHNy7OlZY4GSJIkSZIkSZL0k60Vd4etcXOr2Fyr10rF2tAoHCo2CyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISHhbYV7o3BPLzzOpj8VziO9MCJCwvwREuaPkDB/hIT5IyTMHyFh/ggJ80dImD9CwvwREuaPkDB/hIT5IyTMHyFh/gjvLByjn/5hY7XwGssvNF7VQkmSJEmSJEmSpC/2AvViRWsS6bj5AAAAAElFTkSuQmCC" id="logo">
            </div>
            <div>
                <input type="text" placeholder="Search photos" id="search">
            </div>
            <div>
                <button id="btn">Search</button>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1634080672232-80a50a08be06?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60" class="img">
            </div>
        </div>
        <ul style="list-style-type: none ;">
            <li >
                <a href="" >Fashion</a>
            </li>
            <li >
                <a href="" >Nature</a>
            </li>
            <li >
                <a href="">Film</a>
            </li>
            <li >
                <a href="">People</a>
            </li>
            <li >
                <a href="">Technology</a>
            </li>
        </ul>
    </nav>

    `
}


const display = () => {
    // console.log(search);
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () =>{
        const search = document.getElementById('search').value;
        getData(search);
    })
}

async function getData(search){
    const res = await fetch(`https://api.unsplash.com/photos?&query=${search}&client_id=9azdY9_SFeZ5xpI96EJjN55qhDguWuFjmAauZDX_9QY`)
    .then((res)=>{
         res = res.json();
         return res;
    })
    .then((res)=>{
        createCards(res,search);
        // console.log(search);
        return res;
    })
}


const container = document.createElement('div');

const createCards = (data,search) => {
    console.log(data);
    container.innerHTML = "";
    for(let i=0;i<data.length;i++){
        const res = data[i];
        var div = document.createElement('div');
        div.style.backgroundColor = "turquoise";
        div.style.padding = "20px";
        var img = document.createElement('img');
        var p = document.createElement('p');
        img.src = `${res.urls.full}`;
        img.style.height = "800px";
        img.style.width = "100%";
        console.log(res.id);
        p.textContent = "Category : " + search;
        // console.log(search);
        p.style.textAlign = "center";
        p.style.fontSize = "20px";
        div.append(img,p);
        container.append(div);
    }
    document.body.append(container);
    return container;
}

export {navBar, display};