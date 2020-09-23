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
                <span><b>Display Types: </b></span>
                <select onChange={() => this.props.onSelectionChanged()} id={this.props.selectionId}>
                    {typesOutput}
                </select>
            </div>
        );
    }
}