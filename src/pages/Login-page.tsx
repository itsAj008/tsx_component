
// import InputBox from '../components/InputBox'
import Button from '../components/Button'

function Login() {
  return (
    <div>
        {/* <InputBox /> */}
        <Button style={{
            backgroundColor : "red",
            fontSize: 24,
            color: "white",
            padding : "1rem",
        }}  borderRadius = {{
            topLeft : 15,
            topRight : 15,
            bottomRight : 10,
            bottomLeft: 10
        }}/>
  
    </div>
  )
}

export default Login
