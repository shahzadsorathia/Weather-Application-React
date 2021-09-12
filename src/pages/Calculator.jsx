import React, { useState } from 'react'

function Calculator() {

    const [Num1, SNum1] = useState(0);
    const [Num2, SNum2] = useState(0);
    const [total, Stotal] = useState(Num1 + Num2);

    return (
        <div className="Calculator">
            <h1>  Basic Calculator </h1>

            <div className="Input">
                <input type="number"
                    className="input-box"
                    value={Num1}
                    onChange={e => SNum1(+ e.target.value)}
                    placeholder="0"
                />
                <input type="number"
                    className="input-box"
                    value={Num2}
                    onChange={e => SNum2(+ e.target.value)}
                    placeholder="0"
                />
            </div>
            <div className="button-on">
                <div> <button className="onclick-button" onClick={() => Stotal(Num1 + Num2)}> Add </button> </div>
                <div> <button className="onclick-button" onClick={() => Stotal(Num1 - Num2)}> Sub </button> </div>
                <div> <button className="onclick-button" onClick={() => Stotal(Num1 * Num2)}> Mul </button> </div>
                <div> <button className="onclick-button" onClick={() => Stotal(Num1 / Num2)}> Div </button> </div>
            </div>
            <h1> {total}</h1>
        </div>
    )
}

export default Calculator
