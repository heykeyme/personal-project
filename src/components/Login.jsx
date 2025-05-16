import './../Css/Login.css';
import Logo from './../assets/logo1.png';

export const Login = () => {
  return (
    <div className='page-wrapper'>
      <div className="settings" title="Settings">
        ⚙️
      </div>

      <header>
        <img src={Logo} alt="Website Logo" style={{ marginBottom: '-110px' }} />
        <h1>Neighborhood Watch</h1>
        <p>Your community at your fingertips</p>
      </header>

      <fieldset>
        <h1 style={{ color: '#ffd700' }}>Log in</h1>
        <form action="LoginServlet" method="post">
          <div className="form-container">
            <input type="text" name="username" placeholder="Username" required />
            <br />
            <input type="password" name="password" placeholder="Password" required />
            <br />
            <input type="submit" value="Login" />
            <br />
            <br />
            <a href="registerUser.jsp">Don't have an account? Register here.</a>
          </div>
        </form>
      </fieldset>

      <footer>
        <p>&copy; 2024 Neighborhood Watch. All rights reserved.</p>
      </footer>
    </div>
  );
};
