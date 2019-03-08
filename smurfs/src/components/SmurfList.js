import React from 'react';
import { getSmurfs } from '../actions';

class SmurfList extends React.Component {
   componentDidMount(){
       this.props.getSmurfs()
   }


    render() { 
        return (
        <div>

        </div> 
        );
    }
}
 
const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(SmurfList);