function ButtonField({buttonText, InputType=1, className }){

    return InputType === 1 ?(            
        <input className={className} type="submit" value={buttonText}/>
    )
        :(<input className={className} type="button" value={buttonText}/>         
    )

}

export default ButtonField