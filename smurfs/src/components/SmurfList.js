import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfList extends React.Component {
   componentDidMount(){
       this.props.getSmurfs();
   }


    render() { 
        return (
        <div>
            {this.props.smurfs.map( smurf => (
                <Smurf key = {smurf.id} smurf = {smurf}/>
            ))}
        </div> 
        );
    }
}
 
const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(SmurfList);