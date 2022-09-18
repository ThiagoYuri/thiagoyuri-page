export function get(URL,useState = null)
{
    fetch(URL,{method:"GET"})
    .then(data => {
        return data.json();
    }).then((a)=>{
        useState(a)
    })
}
