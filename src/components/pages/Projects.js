import {useLocation} from 'react-router-dom'

import Message from "../layout/Message";

function Projects(){
    const location = useLocation()

    let message = ''

    if(location.state) {
        message = location.state.message
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            <div>{message && <Message type="success" msg={message}/>}</div>
        </div>
    )
}

export default Projects;