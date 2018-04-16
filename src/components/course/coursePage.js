import React from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';

class CoursePage extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            course: {title: ""}
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // onTitleChange(event){
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({
    //         course: course
    //     })
    // }

    // onClickSave(){
    //     //alert(`Saving ${this.state.course.title}`);
    //     //this.props.dispatch(courseAction.createCourse(this.state.course));
    //     this.props.actions.createCourse(this.state.course);
    // }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>
    }
    render(){
        const{courses} = this.props;
        return(
            <div>
                <h1>Courses</h1>    
                <CourseList courses={courses}/>  
                {/*{this.props.courses.map(this.courseRow)} 
                 <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} /> */}
            </div>
        )
    }
}

function mapStateToProp(state, ownProps){
    return{
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){
    return {
        //createCourse: course => dispatch(courseAction.createCourse(course))
        actions: bindActionCreators(courseAction, dispatch)
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(CoursePage);