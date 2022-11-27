export function saveIdInLocalStorage(id,value = true) {
    if(value){
      localStorage.setItem("property",id)
    }else{
        localStorage.setItem("property",'')
    }
}