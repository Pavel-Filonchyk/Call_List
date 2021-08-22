import React from 'react'
import './Call.css' 

type PropsType = {phoneNumber: any}

let Call : React.FC<PropsType> = ({phoneNumber}) => {

        const nums = [{num:0, id:0}, {num:1, id: 1}, {num:2, id: 2}, {num:3, id: 3}, {num:4, id: 4}, {num:5, id: 5}, {num:6, id: 6}, {num:7, id: 7}, {num:8, id: 8}, {num:9, id: 9}]
        let allNums =
        nums.map((item) =>{ 
            let elem = `circle${item.num}`
            return (
                <div className={elem} key={item.id}
                    onClick={()=>phoneNumber(item.id)}
                >
                </div>)
            })
    return (
        <>
            {allNums}  
        </>
    )
}

export default Call