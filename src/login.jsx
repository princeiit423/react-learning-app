import "./login.css"

function Login() {
    return (
        <>
        <div className="login">
        <h1>This is Login page</h1>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <button>Submit</button>
        </div>
       </>
    );
}
    export default Login;