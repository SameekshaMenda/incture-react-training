import { useEffect } from "react"
function UseEffectComponent(){

    useEffect(() =>{
        console.log("useEffect Called...")  //mounted message in console
    }, [])
    return(
        <div>
            <h1>Functional Component with UseEffect Hook :</h1>
        </div>
    )
}
export default UseEffectComponent