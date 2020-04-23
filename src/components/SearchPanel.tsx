import React, { Component } from 'react'; // importing FunctionComponent
import './component.css'

type Props = {
    changeTerm: Function
}

class SearchPanel extends Component<Props>{

    onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.props.changeTerm(event.currentTarget.value)
    }

    render(){
        return(
            <div className="search-wrapper">
                <input placeholder="search" className="search"
                        onChange={this.onChange}
                    /> 
                <div className="btnGroup">
                    <div className="btn">All</div>
                    <div className="btn">Active</div>
                    <div className="btn">Done</div>
                </div>
            </div>
        );
    };
}

 export default SearchPanel;
  