import '../App.css';


function Login(){
    return(
        <section id="login">
            <div className="login-container">
                <h2>Login</h2>
                <div className="inputfields">
                    <div className="inputfield">
                        <label>User Name:</label>
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
                <a className="register" href="/register">Register?</a>
            </div>
        </section>
    );

}


export default Login;