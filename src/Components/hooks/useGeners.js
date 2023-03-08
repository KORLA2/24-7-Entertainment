export let useGeners=(selected)=>{
if(selected.length<1) return  ''

let ids=selected.map((e)=>(e.id))
console.log(ids)
return ids.reduce((acc,e)=>(e+','+acc ))

}