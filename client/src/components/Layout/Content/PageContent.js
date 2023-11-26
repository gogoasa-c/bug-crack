import {Layout} from "antd";
import MainPanel from "./MainPanel";

const PageContent = ({tabSelection}) => {
    return (
        <Layout>
            <MainPanel tabSelection={tabSelection}/>
        </Layout>
    );
}

export default PageContent;
