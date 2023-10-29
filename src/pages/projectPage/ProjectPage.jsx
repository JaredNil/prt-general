import Page from "./../../components/page/Page";

import Projects from "../../components/projects/Projects";
import Return from "../../components/return/Return";


const ProjectPage = () => {

    return (
        <Page>
            <div className="projectpage">
                <Return />
                <Projects />
            </div>
        </Page>
    )

}

export default ProjectPage;
