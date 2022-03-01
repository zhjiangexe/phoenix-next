export default function Login() {
  return <div>
    <form>
      <div>
        <label id="account">
          Account
        </label>
        <input name="account"/>
      </div>
      <div>
        <label id="password">
          Password
        </label>
        <input name="password"/>
      </div>
      <button>Login</button>
    </form>
  </div>
}