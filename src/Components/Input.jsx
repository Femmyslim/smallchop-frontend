function InputField({inputType, inputId, inputPlaceholder, inputClass}){

    return(
        <input className={inputClass}type={inputType} id={inputId} placeholder={inputPlaceholder}/>
    )
}

export default InputField