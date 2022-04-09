import styles from "./Container.modules.css"

function Container(props) {
    return(
        <div className="container">
            <div className="minHeight">
                {props.children}
            </div>
        </div>
    )
}

export default Container;