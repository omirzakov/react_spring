import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {


    return (
        <Spinner animation="border" role="status" className="text-center m-auto">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}
export default Loading;