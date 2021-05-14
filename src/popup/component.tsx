import React, { FunctionComponent } from "react";
import { Hello } from "@src/components/hello";
import { browser } from "webextension-polyfill-ts";
import { Scroller } from "@src/components/scroller";
import { PropertyForm } from "@src/components/property-form";
import "./styles.scss";

// // // //

export const Popup: FunctionComponent = () => {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div className="popup-container">
            <div className="container mx-4 my-4">
                <Hello text={"Property Form"} />
                <hr />
                <PropertyForm />
            </div>
        </div>
    );
};
