import './SideBar.css'

export default function SideBar() {
    return (
        <aside className='sidebar'>

            <div className='profile-card'>
                <img src='assets/images/hero.jpg' alt='Profile Image' className='profile-card__image'/>
                <h2 className='profile-card__name'>Miguel Cazorla</h2>
                <p className='profile-card__role'>Software Developer</p>
            </div>
            
            <ul className='sidebar-fields'>
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__value'>
                        <a href='mailto: miguelzamora210405@gmail.com'>email</a>
                    </span>
                </li>
            </ul>
        </aside>
    )
}