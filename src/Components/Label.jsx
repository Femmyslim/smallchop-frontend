function LabelField({labelText, labelClass, labelFor}){

    return(
        <label className={labelClass} htmlFor={labelFor}>{labelText}</label>
    )
}

export default LabelField