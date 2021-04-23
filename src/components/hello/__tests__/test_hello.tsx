import * as React from "react";
import Hello from "../component";
import renderer from "react-test-renderer";

it("component renders", () => {
    const tree = renderer.create(<Hello text={"TESt"} />).toJSON();
    expect(tree).toMatchSnapshot();
});
