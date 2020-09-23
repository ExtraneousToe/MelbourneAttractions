import React, { Component } from 'react';
import attractions from '../data/attractions.json'
import { AttractionItem } from './AttractionItem';
import { FilterBlock } from './FilterBlock';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            typeRestriction: "",
            nameRestriction: "",
        }

        this.handleSelection = this.handleSelection.bind(this);
        this.handleNameChanged = this.handleNameChanged.bind(this);
    }

    handleSelection(event) {
        let selectElement = event.target;
        this.setState({
            typeRestriction: selectElement.value,
        });
    }

    handleNameChanged(event) {
        let nameElement = event.target;
        this.setState({
            nameRestriction: nameElement.value,
        });
    }

    render() {

        let types = [""];

        let mappedOutput = attractions.map((k, v) => {
            var jsonAttraction = k;

            if (!types.includes(jsonAttraction.type)) {
                types = types.concat(jsonAttraction.type);
            }

            if ((this.state.typeRestriction === "" || jsonAttraction.type == this.state.typeRestriction)
                && (this.state.nameRestriction === "" || jsonAttraction.attraction.toLowerCase().includes(this.state.nameRestriction.toLowerCase()))
            ) {
                return (<AttractionItem attraction={jsonAttraction} />);
            }
        });

        return (
            <div>
                <FilterBlock
                    types={types}
                    onSelectionChanged={this.handleSelection}
                    onNameInputChanged={this.handleNameChanged}
                />
                <div className="attractionContainer">
                    {mappedOutput}
                </div>
            </div>
        );
    }
}
