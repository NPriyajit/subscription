import '../App.css';
import Nav from './Nav';

function Login(){
    return(
        <section id="myaccount">
            <Nav/>
                <h2>My Account</h2>
                <div className="subscriptions">
                    <div className="inputfield">
                        <label>User Name:</label>
                        <input type="text" placeholder="Enter the User name..."/>
                    </div>
                    <div className="inputfield">
                        <label>Password:</label>
                        <input type="password"  placeholder="Enter the password..."/>
                    </div>
                </div>
                <div className='account-details'>
                     <div className="name-icon"></div>
                     <div class="details">
                         <li>Name: N.Priyajit</li>
                         <li>Date Of Birth: 13/05/1999</li>
                         <li>Date of Join: 12/11/2010</li>
                         <li>Total subscriptions: 2</li>
                </div>
            </div>
        </section>
    );

}


export default Login;