const baseURL = 'https://ghibliapi.herokuapp.com/films';

async function fetchFunc(){
    
fetch(baseURL)
    .then(response => {
        return response.json();
    })
    .then(json => {
        create(json)
    })

}
fetchFunc(baseURL)


function create(json){
let parent = document.querySelectorAll('div.dropdown-menu');
let title = document.querySelectorAll('.btn-check:active+.btn-secondary, .btn-check:checked+.btn-secondary, .btn-secondary.active, .btn-secondary:active, .show>.btn-secondary.dropdown-toggle');

    for(let i = 0; i < json.length; i++){

        title[i].innerHTML = '<b>Title:</b> ' + '<i>' + json[i].title + '</i>';
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');

        p1.innerHTML = '<b>Original title:</b> ' + '<i>' + json[i].original_title + '</i>';
        p2.innerHTML = '<b>Running time:</b> ' + json[i].running_time;
        p3.innerHTML = '<b>Description:</b> ' + json[i].description;
        p4.innerHTML = '<b>Director:</b> ' +  '<i>' + json[i].director + '</i>';
        p5.innerHTML = '<b>Producer:</b> ' +  '<i>' + json[i].producer + '</i>';
        p6.innerHTML = '<b>Release date:</b> ' + json[i].release_date;
        
        parent[i].appendChild(p1);
        parent[i].appendChild(p2);
        parent[i].appendChild(p3);
        parent[i].appendChild(p4);
        parent[i].appendChild(p5);
        parent[i].appendChild(p6);

    }
}


