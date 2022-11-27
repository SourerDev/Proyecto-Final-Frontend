export function saveIdInLocalStorage(id,value) {
    if(value){
      localStorage.setItem("property",id)
    }else{
        localStorage.setItem("property",'')
    }
}