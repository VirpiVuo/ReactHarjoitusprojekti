import App from "./App";

const Message = ({message, isPositive}) => { //kaksi propsia, message eli näytettävä viesti sekä onko boolean arvo positiivinen vai negatiivinen

    let tyyli="";

    if (isPositive === true) {
        tyyli = "pos"
    }
    else {
        tyyli = "neg"
    }

    return (
        <div className={tyyli}> 
        {/* tyyliliuokka määräytyy dynaamisesti sen mukaan onko annettu arvo positiivinen vai negatiivinen */}
            {message}
        </div>
    )
}
export default Message