import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <table>

                    <tr>
                        <td colspan="3"><button name="CE" onClick={e => this.props.onClick(e.target.name)}>Clear</button></td>
                        <td><button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/></td>
                    </tr>

                    <tr>
                        <td><button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button><br/></td>
                        <td><button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button><br/></td>
                        <td><button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button><br/></td>
                        <td><button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/></td>
                    </tr>

                    <tr>
                        <td><button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button><br/></td>
                        <td><button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button><br/></td>
                        <td><button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button><br/></td>
                        <td><button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/></td>
                    </tr>

                    <tr>
                        <td><button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button><br/></td>
                        <td><button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button><br/></td>
                        <td><button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button><br/></td>
                        <td><button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button><br/></td>
                    </tr>

                </table>
                
            </div>
        );
    }
}


export default KeyPadComponent;