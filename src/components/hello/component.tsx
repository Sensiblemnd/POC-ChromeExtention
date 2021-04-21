import React from "react";
import "./styles.scss";
export interface HelloProps {
    text: string;
}
// // // //

const Hello = (props: HelloProps): JSX.Element => {
    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <p className="lead mb-0">{props.text}</p>
            </div>
        </div>
    );
};
export default Hello;
