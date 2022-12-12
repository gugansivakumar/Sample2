import React  from 'react';
export default function List() {
const cars=[{model:"Benz",id:1},
              {model:"Audi",id:2},
              {model:"Xuv",id:3}

                                ];

    return(
        <h1>
            {cars.map((val)=><li key={(val.id)}>{val.model}</li>)}
        </h1>
    )
  }

