import logo from './images/logo.png';

const Header = () => {
        return(
                <header class="header">
                        <img class="headimg" src={logo} alt="Logo"></img>
                        <div class="content">
                                <div class="headtitle">
                                        <h2>StreamLite</h2>
                                </div>
                                <div class="text">
                                        <h3 className='text'>Unlimited tv shows and movies</h3>
                                </div>
                                <div class="buttons">
                                        <button className='btn zoom1' >Join now</button>
                                        <button className='btn zoom1'>Sign up</button>
                                </div>
                        </div>
                </header>
                
        )
}
export default Header;