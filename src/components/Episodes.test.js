import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";


test ("Episodes renders without errors", () => {
    render(<Episodes episodes={[]}/>)
});

// test("Render list of episodes after API call", () => {
//     const { rerender, queryAllByTestId } = render(<Episodes episodes={[]}/>);
//     expect(queryAllByTestId(/episodeId/i)).toHaveLength(1);
//     rerender(<Episodes episodes={show}/>)
//     expect(queryAllByTestId(/episodeId/i)).toHaveLength(2)
// })