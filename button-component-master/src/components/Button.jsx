const Button = (props)=>
{
 let classes =props.varient
 let text = props.text
 return (
   <>
   <button className={classes}>
    {text}
    </button> 
   </>
 )
}

export default Button;