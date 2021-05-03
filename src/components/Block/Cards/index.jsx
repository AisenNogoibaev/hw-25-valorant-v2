import css from './Cards.module.css'

export const Card = ({el}) => {
    return <div className={css.Card}>
            <img src={el.img} alt=""/>
            <div>
                <p>{el.country}</p>
            <h1 id={el.bg ? css.h1 : ''}>{el.name}</h1>
            </div>
            
            <div className={css.box} style={{backgroundColor:el.bg ? "white" :"#1F2326"}}>
                <div>
                <img className={css.img11} src={el.ability1} alt=""/>
                </div>
                <div>
                <img className={css.img12} src={el.ability12} alt=""/>
                </div>                
                <div>
                <img className={css.img13} src={el.ability13} alt=""/>
                </div>
                <div>
                <img className={css.img14} src={el.ability14} alt=""/>
                </div>
            </div>
        </div>
}