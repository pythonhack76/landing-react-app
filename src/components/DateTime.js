import  React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DateTime = () => {

    const [date,setDate] = useState(new Date());
    
    // useEffect(() => {
    //     const timer = setInterval(()=>setDate(new Date()), 1000 )
    //     return function cleanup() {
    //         clearInterval(timer)
    //     }
    
    // });

        //immaginando di inserire un nuovo useeffect
        useEffect(() => {


        });

    return(
        <div>
           
            <p>    <FontAwesomeIcon icon="fa-regular fa-mug-hot" /> Copyright &#169;  {date.getFullYear()}  </p>

        </div>
    )
}

export default DateTime