import './SideBar.css'
import NavBar from '../NavBar/NavBar'

const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

interface SideBarProps {
    active: number
    onSelect: (i: number) => void
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export default function SideBar({ active, onSelect, theme, toggleTheme }: SideBarProps) {
    return (
        <aside className='sidebar'>

            <div className='profile-card'>
                <button className='theme-button' onClick={toggleTheme}>
                    <img
                        src={theme === 'light' ? '/icons/moon.svg' : '/icons/sun.svg'}
                        alt='Toggle theme'
                        className='theme-button_icon'
                    />
                </button>
                <img src='images/hero.jpg' alt='Profile Image' className='profile-card__image'/>
                <h2 className='profile-card__name'>Miguel Cazorla Zamora</h2>
                <p className='profile-card__role'>Fullstack Software Developer</p>
            </div>

            <NavBar sections={sections} active={active} onSelect={onSelect} vertical />

            <ul className='sidebar-fields'>
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Email: </span>
                    <span className='sidebar-fields__value'>
                        <a href='mailto: miguelzamora210405@gmail.com'>miguelzamora210405@gmail.com</a>
                    </span>
                </li>
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Phone: </span>
                    <span className='sidebar-fields__value'>+53 56860394</span>
                </li> 
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>GitHub: </span>
                    <span className='sidebar-fields__value'>
                        <a href='https://github.com/andr-migue'>andr-migue</a>
                    </span>
                </li> 
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Location: </span>
                    <span className='sidebar-fields__value'>Havana, Cuba</span>
                </li>        
            </ul>

        </aside>
    )
}