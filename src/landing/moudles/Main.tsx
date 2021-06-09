import { Button } from "@material-ui/core";
import { AdminBasePath } from "../../admin/moudles/Routes";

const Main = () => {
    return (
        <div>
            <h2>Landing Page</h2>
            <Button color="primary" href={AdminBasePath}>Login</Button>
        </div>);
}

export default Main;