import React, {Component} from 'react';
import { connect } from 'react-redux' 
import { getAnnouncements, addAnnouncement} from '../actions/itemActions';
import PropTypes from 'prop-types'
class CreateAnnouncement extends Component {
    componentDidMount(){
        this.props.getAnnouncements();
    }
    constructor(props){
        super(props)
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const newAnnouncement ={
            message: this.state.value
        }
        this.props.addAnnouncement(newAnnouncement);
    }

    handleSave(event) {
        alert('Saved:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Announcement:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit" />   
            <input type="button" value="Save" /> 
            </form>
           
        );
    } 
}

CreateAnnouncement.propTypes= {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    announcement: state.announcement
})


export default connect(mapStateToProps, {getAnnouncements, addAnnouncement})(CreateAnnouncement);