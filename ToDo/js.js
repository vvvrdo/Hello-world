const submit = document.getElementById('submit');
const ul = document.getElementById('notes');
const li = document.getElementById('list');
const filter = document.getElementById('search');
filter.addEventListener('keyup', googlR);
ul.addEventListener('click', delLi);
submit.addEventListener('submit', subed);
function subed(n){
    n.preventDefault();
    const subText = document.getElementById('subText').value;
    if(subText != "" && subText != " "){
        document.getElementById('hidden').style.display = 'block';
    const list = document.createElement('li');
    list.className = "listed";
    const dButton = document.createElement('button');
    dButton.className = 'deleteButt';
    dButton.appendChild(document.createTextNode('X'));
    list.appendChild(document.createTextNode(subText));
    ul.appendChild(list);
    list.appendChild(dButton);}else{alert("NOPE) Note is empty");}
};function delLi(n){
 if(n.target.classList.contains('deleteButt')){
     if(confirm('Are you sure?')){
         const li = n.target.parentElement;
         ul.removeChild(li);
       }
    }
};
function googlR(n){
    const text = n.target.value.toLowerCase();
    const items = ul.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        };
    });
};