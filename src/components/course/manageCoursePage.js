import React from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import { bindActionCreators } from 'redux';


class ManageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);        
    }

    render(){        
        return(  
            <h1>Manage Course</h1>          
        )
    }
}

ManageCoursePage.PropTypes = {
    //propsType
}

function mapStateToProp(state, ownProps){
    return{
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return {        
        actions: bindActionCreators(courseAction, dispatch)
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(ManageCoursePage);