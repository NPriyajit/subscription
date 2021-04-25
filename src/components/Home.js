import logo from '../img/yoga.svg';
import Nav from './Nav'
import '../App.css';

function Home(){
    return (
        <section id="home">
        <Nav/>
        <div className="left">
           <h1 className="pagetitle">MAKE YOURSELF HEALTY & FIT!</h1>
           <a href="#plans" className="btn subscribe" >Subscribe Now!</a>
        </div>
        <img src={logo} alt="yoga picture" className="yoga"/>
     </section>
      );
}

export default Home;