export function saveIdInLocalStorage(id,value = true) {
    if(value){
      localStorage.setItem("property",id)
    }else{
        localStorage.setItem("property",'')
    }
}

export const saveInStorage = (name,object,deleted=false)=>{
  if(deleted){
    localStorage.setItem(name,'')
  }else{
    localStorage.setItem(name,JSON.stringify(object))
  }
}

export const getOfStorage = (name)=>{
  if(name?.length){
    let object = localStorage.getItem(name)
    console.log("acaa")
    console.log(object)
    console.log(name)
    return object ? JSON.parse(object) : 'null'
  }
}
