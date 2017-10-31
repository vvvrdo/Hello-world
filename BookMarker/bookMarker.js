document.getElementById('myForm').addEventListener('submit', saveBookmark);
function saveBookmark(e){
    e.preventDefault();
    const siteName = document.getElementById('inputName').value;
    const siteURL = document.getElementById('inputSite').value;
    if(!validation(siteName, siteURL)){
        return false;
    }
    const bookmark = {
        name: siteName,
        url: siteURL
    };
    if(localStorage.getItem('bookmarks') === null){
        const bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else{
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    document.getElementById('myForm').reset();
    getBookmarks();
};
function deleteBookmark(url){
    event.preventDefault()
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    getBookmarks();

};
function getBookmarks(){
const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
const bookmarksResouls = document.getElementById('output');
bookmarksResouls.innerHTML = '';
for(var i = 0; i < bookmarks.length; i++){
    const name = bookmarks[i].name;
    const url = bookmarks[i].url;
    bookmarksResouls.innerHTML +=
    '<div class="outCont">' +
    '<div class="outName" id="outName">'+
    '<p>'+ name +'</p>'+
    '</div>'+
    '<div class="buttons">'+
    '<div class="clearD"><a onclick="deleteBookmark(\''+url+'\')" class="clear" href="#" >X</button></div>'+
    '<div class="visitD"><a class="visit" target="_blank" href="'+"http://www."+url+'">GO</button></div>'+
    '</div>'+
    '</div>';
};
};
function validation(siteName, siteURL){
    if(!siteName || !siteURL){
        alert('Form fields cannot be blank.');
        return false;
    };
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if(!siteURL.match(regex)){
        alert('Please enter a valid URL');
        return false;
    }else{return true;}};