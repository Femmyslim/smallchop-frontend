function ParagraphField({ParaText, paraTextSize, paraTextColor}){

    return(
        <p style={{fontSize: paraTextSize, color: paraTextColor}}>{ParaText}</p>
    )

}

export default ParagraphField