import logo from '../img/yoga.svg';
import Nav from './Nav'
import Plan from './Plan';
import '../App.css';

function Home(){
    return (
       <div>
        <section id="home">
        <Nav/>
        <div className="left">
           <h1 className="pagetitle">MAKE YOURSELF HEALTY & FIT!</h1>
           <a href="#plans" className="btn subscribe" >Subscribe Now!</a>
        </div>
        <img src={logo} alt="yoga picture" className="yoga"/>
      </section>
      <Plan/>
      </div>
      );
}

export default Home;