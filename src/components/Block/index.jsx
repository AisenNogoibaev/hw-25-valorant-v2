import css from './Block.module.css'
import bg from './images/main page (2).png'
import { Card } from './Cards/index.jsx'
import { data } from './Cards/data.js'
export const Block = () => {
    return  <div className={css.cont}>
                <div className={css.container}>
                <div className={css.nav}>

                {
                    data.map((el, id) => {
                       return <Card key={id}
                              el={el}/>
                    })
                }
                </div>
            </div>
            </div>
}