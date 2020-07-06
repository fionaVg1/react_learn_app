function CustomButton(props,context) {    
    const {color} = context;   
    return ( 
        <button type="button" style={{color}}>
            {props.children}
        </button>
    );    
}
 
CustomButton.contextTypes = {
    color:PropTypes.string
}
CustomButton.propTypes = {
    children:PropTypes.oneOf(PropTypes.any)
}
CustomButton.defaultProps = {
    children:'默认文案'
}