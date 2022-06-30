import {Button} from "./library/button/Button";
import {Tag} from "./library/tag/Tag";

export function App() {
    function doSomethingOnClick(e) {
        console.log(e)
    }

    return (
        <div>
            <Button error emitClickEvent={doSomethingOnClick}> Submit </Button>
            <Tag> test </Tag>
        </div>
    );
}