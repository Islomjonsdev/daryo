import "./Cards.scss"
import itemCardsJson from "../../api/dummiy-data.itemCards.json"
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BottomList from "../bottomList/BottomList";

const Cards = () => {
  return (
    <div className='cards'>
        <ul className='cards__list'>
            {
                itemCardsJson.map(cardsJsons => 
                    <li className='cards__item' key={uuidv4()}>
                        <div>
                            <Link className='cards__item__text'>{cardsJsons.itemCardsText}</Link>
                            <p className='cards__item__data'>{cardsJsons.itemCardsData}</p>
                        </div>
                        <Link>
                            <img className='cards__item__img' src={cardsJsons.itemCardsImg} alt="" />
                        </Link>
                    </li>    
                )
            }
        </ul>

        <BottomList />
    </div>
  )
}

export default Cards