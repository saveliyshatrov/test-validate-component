import React, {Component} from "react";

export default class SomeComponent extends Component<any, any>{
    render(){
        const childrenWithProps = React.Children.map(this.props.children, child => {
            return React.isValidElement(child) ? React.cloneElement(child, this.props) : <></>;
        });

        return <span className={"SomeComponent"}>{childrenWithProps}</span>;
    }
}