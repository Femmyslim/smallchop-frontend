function HeaderField({ headType, headText, HeadTextSize, headColor, bgColor, headRadius, headAlign }) {

   return (
      <header className={headType} style={{ fontSize: HeadTextSize, color: headColor, 
         background: bgColor, borderRadius: headRadius, alignText: headAlign}}>{headText}</header>
   )

}

export default HeaderField