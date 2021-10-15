const navBar = ()=>{
    return `
        <ul style="list-style-type: none ;">
            <li >
                <a href="fashion.html" >Fashion</a>
            </li>
            <li >
                <a href="nature.html" >Nature</a>
            </li>
            <li >
                <a href="film">Film</a>
            </li>
            <li >
                <a href="people.html">People</a>
            </li>
            <li >
                <a href="technology.html">Technology</a>
            </li>
        </ul>

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
        var img = document.createElement('img');
        var p = document.createElement('p');
        img.src = `${res.urls.full}`;
        img.style.height = "800px";
        img.style.width = "80%";
        console.log(res.id);
        p.textContent = "Category : " + search;
        // console.log(search);
        p.style.textAlign = "center";
        p.style.fontSize = "20px";
        div.append(img,p);
        div.addEventListener("click",()=>{
            alert(`Image Category : ${search} \nImage ID : ${res.id}\nImage Description : ${res.description}`);
        })
        container.append(div);
    }
    document.body.append(container);
    return container;
}

export {navBar, display};