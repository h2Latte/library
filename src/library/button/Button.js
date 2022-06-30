import './Button.css';

export function Button(props) {
    console.log(props);
    let info;
    if (props.primary) {
        info = 'primary';
    } else if (props.warn) {
        info = 'warn';
    } else if (props.error) {
        info = 'error';
    }

    return (
        <button type="button" className={`button ${info}`} onClick={props.emitClickEvent}>
            {props.children}
        </button>
    );
}