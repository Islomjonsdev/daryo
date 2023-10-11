import React from 'react';
import "./BottomList.scss";
import bottomListsJson from "../../api/dummiy-data.bottomList.json"
import { Link } from 'react-router-dom';

const BottomList = () => {
  return (
    <div className='bottom'>
        <ul className='bottom__list'>
            {
                bottomListsJson.map(bottomlist => 
                    <li className='bottom__item'>
                        <span className='bottom__item__span'></span>
                       <div>
                            <Link className='bottom__item__link'>{bottomlist.bottomListText}</Link>
                            <p className='bottom__item__data'>{bottomlist.bottomListData}</p>
                       </div>
                    </li>    
                )
            }
        </ul>
    </div>
  )
}

export default BottomList