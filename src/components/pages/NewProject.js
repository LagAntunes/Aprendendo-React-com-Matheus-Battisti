import styles from "./NewProject.module.css"

import ProjectForm from "../Project/ProjectForm";

function NewProject(){
    return(
        <div className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar novo projeto"/>
        </div>
    )
}

export default NewProject;