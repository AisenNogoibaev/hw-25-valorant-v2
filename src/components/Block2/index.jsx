import css from './Block2.module.css'
import box2 from './images/Next Hero.png'
import icon from './PowerCard/images/icon.png'
import icon1 from './PowerCard/images/icon1.png'
import icon2 from './PowerCard/images/icon2.png'
import {PowerCard} from './PowerCard'

export const Block2 = () => {
    const data = [
        {
            h1:'BASIC',
            h3:'Slow Orb',
            span: 'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.',
            img: icon
        },
        {
            h1:'SIGNATURE',
            h3:'Healing Orb',
            span: 'Heal an ally or yourself to full health over a few seconds.',
            img: icon1
        },
        {
            h1:'ULTIMATE',
            h3:'Resurrection',
            span: 'Target a friendly corpse. After a short delay, revive them with full health.',
            img: icon2
        },
    ]
    return  <div className={css.cont}>
                <div className={css.container}>
                <div className={css.nav}>
                   {
                       data.map((el, id) => {
                         return  <PowerCard key={id} el={el}/>
                       })
                   }
                <div className={css.box2}>
                    <img src={box2} alt=""/>

                </div>
                </div>
            </div>
            </div>
}