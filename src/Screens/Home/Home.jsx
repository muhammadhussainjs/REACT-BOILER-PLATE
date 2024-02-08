import React, { useEffect , useState } from 'react'
import { getDocs  , query , collection } from 'firebase/firestore'
import { db } from '../../Config/Firebase/Firebaseconfig';
import { Box, Typography } from '@mui/material';


const Homes = () => {
    const [arr , setArr] = useState([])
    useEffect( async ()=>{
    const q = query(
            collection(db, "users"),
        
          );
          const querySnapshot = await getDocs(q);
          const newData = []
          querySnapshot.forEach((doc) => {
        

                console.log(doc.data());
                newData.push(doc.data())
                

                setArr(newData)
                console.log(newData);
          });
   
   
    } , [])

  return (

    <>
    <div>home</div>
    <div>
        {arr.map((item, index) => (
            <div key={index}>
                <Typography variant='h6'>{item.firstName}</Typography>
               
            </div>
        ))}
    </div>
</>
);
}


export default Homes