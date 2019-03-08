import React from 'react';


class Smurf extends React.Component {


    render(){
        return(
            <div>
                 <h2>{this.props.smurf.name}</h2> 
                 <h2>{this.props.smurf.age}</h2>
                 <h2>{this.props.smurf.height}</h2>
            </div>
        )
    }
}

export default Smurf;