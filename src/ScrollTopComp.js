//Make a Scroll To Top Component in React :- The component should be visible only when user scrolls the page.
// Component should be Re-usable and it styles should be customisable like "background-color, position(top,left,right,bottom)".
// Component offset (distance from the top when the component would be visible) should pass from the Props.
// Note:- Use React-font awesome for Arrow sign.
import React from 'react';
var FontAwesome = require('react-fontawesome');
export default class App extends React.Component {
  render() {
    return (
            <ScrollComponent/>
    );
  }
}
class ScrollComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            visibility :0
        };
        this.ScrollTop = this.ScrollTop.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        let scrollpos = window.pageYOffset;

        if(scrollpos>100){
            this.setState({visibility: 1});
        }else{
            this.setState({visibility: 0});
        }
    }

    ScrollTop(){
        window.scrollTo(0, 0)
    }

    render() {
        const textStyle={
            height:"1000px",
            background: "red",
            position:"realtive"
        };
        const ArrowOuter={
            position:"absolute",
            right:"100px",
            bottom:"10px",
            border: "3px solid #000",
            borderRadius: "50%",
            padding: "10px",
            cursor:"pointer",
            opacity:this.state.visibility
        };

        return (
            <div>
                <div style={textStyle}>
                    <div style={ArrowOuter} onClick={this.ScrollTop}>
                    <FontAwesome name='arrow-up'></FontAwesome>
                    </div>
                    </div>
            </div>
)
}
}


