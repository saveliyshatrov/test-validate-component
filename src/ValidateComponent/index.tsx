import React, {Component} from "react";


export default class ValidateComponent extends Component<any, any>{
    state:any = {
        parentText: this.props.parentText?this.props.parentText:'',
        valid: this.props.validate?this.props.validate: (!!this.props.validateParent),
    }
    validate = () => {
        if(this.state.valid){
            console.log(this.props.text)
        }
    }
    render(){
        const childrenWithProps = React.Children.map(this.props.children, child => {
            return React.isValidElement(child) ? React.cloneElement(child, { validateParent: this.state.valid, parentText:this.props.text }) : child;
        });
        this.validate()
        return <div>{this.props.text}{childrenWithProps}</div>;
    }
}
