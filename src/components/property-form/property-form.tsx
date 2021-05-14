import React, { FunctionComponent } from "react";
import "./styles.scss";
import { executeScript } from "../../api/util";
// // // //

export const PropertyForm: FunctionComponent = () => {
    return (
        <div className="form-group">
            <label htmlFor="street">Street</label>

            <input
                type="street"
                className="form-control"
                id="street"
                placeholder="Street"
            />
            <label htmlFor="inputCity">city</label>

            <input
                type="city"
                className="form-control"
                id="inputCity"
                placeholder="City"
            />

            <label htmlFor="state">State</label>
            <select
                id="state"
                className="browser-default"
                required
                title="Please select a state"
            >
                <option value="" disabled selected>
                    Select a state
                </option>
                <option value="ar-us">Arizona</option>
                <option value="ny-us">New York</option>
                <option value="ca-us">California</option>
            </select>
            <label htmlFor="inputZip">Post Code</label>
            <input
                type="zip"
                className="form-control"
                id="inputZip"
                placeholder="Zip"
            />

            <label htmlFor="country">Country</label>
            <select
                id="country"
                className="browser-default"
                required
                title="Please select a country"
            >
                <option value="" disabled selected>
                    Select a country
                </option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="mx">Mexico</option>
            </select>
        </div>
    );
};
