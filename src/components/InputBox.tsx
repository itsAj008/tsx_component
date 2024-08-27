
type InpuProps = {
    className : string,
    type: string,
    value:any,
    placeholder:string,
}

const InputBox =function InputBox({
    className : '',
    type: 'text',
    value,
    placeholder :'',
    ...props
}){
    return (
        <>
        <input

           {...props}
            />
        
      </>
    )
  }

export default InputBox
