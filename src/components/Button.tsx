
// type Color = 'red'|"green" |'blue'
// type ButtonProps = {
//     backgroundColor?:Color ,
//     textColor?:Color,
//     fontSize?: number,
//     pillShape? : boolean,
//     padding? : string[],

// }

type ButtonProps = {
    style : React.CSSProperties,
    borderRadius :  Record<string,number>
}

function Button({style,borderRadius} :ButtonProps ) {

  return (
    <button style={{ ...style, borderRadius: `${borderRadius}px` }}>Click me</button>
    
  )
}

export default Button
