import React, { Component } from "react";

export class FilterBlock extends Component {

    render() {

        let typesOutput = this.props.types.map((type, num) => {
            return (
                <option value={type}>
                    {type.length > 0 ? type : "All"}
                </option>
            );
        });

        return (
            <div className="filterBlock">
                <div>
                    <span><b>Display Types: </b></span>
                    <select
                        onChange={(ev) => this.props.onSelectionChanged(ev)}
                    >
                        {typesOutput}
                    </select>
                </div>
                <div>
                    <span><b>Name: </b></span>
                    <input
                        type="text"
                        onInput={(ev) => this.props.onNameInputChanged(ev)}
                    />
                </div>
            </div>
        );
    }
}