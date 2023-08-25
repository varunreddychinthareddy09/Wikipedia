let root = document.getElementById('root');
let input = document.getElementById('inp');
let data = document.getElementById('data');

function render(items) {
    for (let value of items) {
        let { title, link, description } = value;

        let div = document.createElement('div');
        data.appendChild(div);

        let h4 = document.createElement('h4');
        div.appendChild(h4);
        h4.textContent = title;

        let a = document.createElement('a');
        div.appendChild(a);
        a.textContent = link;
        a.href = link;

        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = description;

        div.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-start');
    }
}

input.addEventListener('keydown', function (a) {
    if (a.key == "Enter") {
        data.textContent = "";
        let input = inp.value;
        fetch(`https://apis.ccbp.in/wiki-search?search=${input}`).then(function (varun) {
            return varun.json();
        }).then(function (reddy){
            console.log(reddy);
            render(reddy.search_results);
        })
    }
})




































































































// let inputEl = document.getElementById('input');
// let root = document.getElementById('root');
// let content = document.getElementById('content');


// function render(items){
//     for (let each  of items){
//         let {title,link,description }=each;
//         let anchor = document.createElement('a');
//         anchor.textContent=title;
//         anchor.href = link;
//         anchor.classList.add('anchor');
//         content.appendChild(anchor);
       
//         let link1 = document.createElement('a');
//         link1.textContent = link;
//         link1.href = link;
//         link1.target="_blank";
//         link1.classList.add("link1");
//         content.appendChild(link1);
//         let des = document.createElement('p');
//         des.textContent=description;
//         content.appendChild(des);

//     }
// }

// inputEl.addEventListener('keydown',function(a){
//     if(a.key =="Enter"){
//         content.textContent="";
//         let input = inputEl.value ;
//         fetch(https://apis.ccbp.in/wiki-search?search=${input}).then(function(nani){
//             return nani.json();
//         }).then(function(tharun){
//             console.log(tharun);
//             render(tharun.search_results);
//         })
//     }
// })