function fetchCountries (searchQuery, callback){

    //ХЕШИРОВАНИЕ
    let storage ={};
    const STORAGE ='ourApp'
    if(localStorage.getItem(STORAGE)){
        storage =JSON.parse(localStorage.getItem(STORAGE));
    } else{
        localStorage.setItem(STORAGE,JSON.stringify(storage));
    }

    if(storage[searchQuery]){
        callback(storage[searchQuery]);
        return;
    }
    
const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
fetch(baseUrl).then(response => {
   return response.json();
})
.then(data =>{
    storage[searchQuery] =data;
    localStorage.setItem(STORAGE, JSON.stringify(storage));
    callback(data);
    // console.log(data);
}).catch(error =>{
    console.log(error);
});
}

export default fetchCountries;