import 'bootstrap/dist/css/bootstrap.min.css';

const Button = (props) => {
    return(
        <button class="btn btn-warning" onClick={props.handleClick}>{props.text}</button>
    )
}

export default Button 