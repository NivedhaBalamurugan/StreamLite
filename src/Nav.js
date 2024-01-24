import {Link} from 'react-router-dom';

const Nav = () => {

        const handleNav = (e) =>{

                const elems=document.querySelectorAll('.active');
                elems.forEach((element) => {
                      
                        element.classList.remove('active');
                        console.log(element);
                });
                e.target.classList.add('active');
        }

        return(
                <nav className='nav'>
                        <ul>
                                <li className='navname active zoom1' onClick={handleNav}><Link to="/">Home</Link></li>
                                <li className='navname zoom1' onClick={handleNav}><Link to="all">All movies</Link></li>
                                <li className='navname zoom1' onClick={handleNav}><Link to="top_rated">Top Rated</Link></li>
                                <li className='navname zoom1' onClick={handleNav}><Link to="latest">Latest</Link></li>
                                <li className='navname zoom1' onClick={handleNav}><Link to="contact">Contact</Link></li>
                        </ul>
                </nav>
        )
}
export default Nav;