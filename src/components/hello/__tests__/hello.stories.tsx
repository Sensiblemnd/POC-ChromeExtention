import * as React from "react";
import Hello, { HelloProps } from "../component";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// // // //
const Container = styled.div`
    margin-bottom: 2rem;
    padding: 4rem;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default {
    title: "Component/Hello",
    component: Hello,
    argTypes: { onClick: { action: "clicked" } },
} as Meta;

export const Default = (args: HelloProps): JSX.Element => (
    <Container>
        <Hello {...args} />
    </Container>
);

Default.args = {
    text: "Save Game",
};

// storiesOf("Hello", module).add("renders", () => {
//     return (
//         <Story>
//             <Hello />
//         </Story>
//     );
// });
