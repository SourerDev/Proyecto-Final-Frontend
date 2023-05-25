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