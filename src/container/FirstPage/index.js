import React, {useState} from 'react';
import { Rnd } from "react-rnd";
import Plotly from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly);
const plotJSON = {
    data: [{
        x: [1,2,3,4],
        y: [1,3,2,6],
        type: 'line',
        marker: {color: '#ab63fa'},
        name: 'Line'
    }],
    layout: {
        plotBackground: '#f3f6fa',
        margin: {t:0, r: 0, l: 20, b: 30},
    },
    config: {
        displayModeBar: false,
        responsize: true
    }
};
const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

const FirstPage = () => {
    const [pos, setPos] = useState({x: 20, y: 20});
    const [size, setSize] = useState({width: 900, height: 500});
    const [pos1, setPos1] = useState({x: 420, y: 420});
    const [size1, setSize1] = useState({width: 90, height: 90});
    const [selected, setSelected] = useState(false)

    function handelSelected(){
        console.log('here');
        setSelected(true)
    }
    return (
        <div>
            <Rnd
                style={style}
                size={{ width: size.width, height: size.height }}
                position={{ x: pos.x, y: pos.y }}
                onDragStop={(e, d) => {
                    if(!selected)
                    setPos({ x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    if(!selected)
                    setSize({width: ref.style.width,
                        height: ref.style.height})
                }}
                >
                <Plot
                    data={plotJSON.data}
                    layout={plotJSON.layout}
                    config={plotJSON.config}
                    onSelected={handelSelected}
                />
            </Rnd>
            {/* <Rnd
                style={style}
                size={{ width: size1.width, height: size1.height }}
                position={{ x: pos1.x, y: pos1.y }}
                onDragStop={(e, d) => {
                    setPos1({ x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setSize1({width: ref.style.width,
                        height: ref.style.height})
                }}>
                Example1
            </Rnd> */}
        </div>
    );
};

export default FirstPage;