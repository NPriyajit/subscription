import '../App.css';


function AdminLogin(){
    return(
        <section id="login">
            <div className="login-container adminlogin">
                <h2>Admin Login</h2>
                <div className="inputfields">
                    <div className="inputfield">
                        <label>Admin Name:</label>
                        <input type="text" placeholder="Enter the User name..."/>
                    </div>
                    <div className="inputfield">
                        <label>Password:</label>
                        <input type="password"  placeholder="Enter the password..."/>
                    </div>
                </div>
                <div className='buttons'>
                       <button type="button" className="btn reset">Reset</button>
                       <button type="button" className="btn subscribe">Submit</button>
                </div>
            </div>
        </section>
    );

}


export default AdminLogin;