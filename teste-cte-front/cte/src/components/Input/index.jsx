function Input(props) {
    const { label, onChange, value } = props
  
    return (
      <>
        <label>{label}</label>
        <input className='asdasd' onChange={onChange} value={value} />
      </>
    )
  }
  
  export default Input