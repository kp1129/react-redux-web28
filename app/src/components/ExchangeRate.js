import React from 'react';
import {connect} from 'react-redux';


const ExchangeRate = (props) => {
    return (
        <div className="exchange-rate">
            <p>{props.display}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        display: state.display
    }
}

export default connect(mapStateToProps, {})(ExchangeRate);