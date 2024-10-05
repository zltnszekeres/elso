import Kartya from "./Kartya"

export default function Kartyak(props){



    return(


        <>
        {
        props.lista.map((ember,index)=>{
          return(<Kartya obj={ember} key={index}/>)

        }
        )
          

        }
        
        </>
    )
}