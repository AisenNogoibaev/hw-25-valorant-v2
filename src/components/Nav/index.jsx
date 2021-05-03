import css from './Nav.module.css'
import logo1 from './images/riot games.png'
import palochka from './images/Rectangle 128.png'
import logo2 from './images/logo (1).png'
import logo3 from './images/akali.png'

export const Nav = () => {
    return  <div className={css.cont}>
                <div className={css.container}>
                <div className={css.nav}>
                    <div>
                        <img className={css.logo1} src={logo1} alt=""/>
                    </div>
                    <div>
                        <img className={css.palochka} src={palochka} alt=""/>
                    </div>
                    <div>
                        <img className={css.logo2} src={logo2} alt=""/>
                    </div>
                    <ul>
                        <li>GAME</li>
                        <li>CHAMPIONS</li>
                        <li>NEWS</li>
                        <li>PATCH NOTES</li>
                        <li>DISCOVER</li>
                        <li>ESPORTS</li>
                        <li>UNIVERSE</li>
                        <li>SHOP</li>
                        <li>SUPPORT</li>
                    </ul>
                    <div className={css.logo3}>
                        <img src={logo3} alt=""/>
                    </div>
                    <div className={css.text}>UNEPICKID ⏷</div>
                </div>
            </div>
                </div>
     
}