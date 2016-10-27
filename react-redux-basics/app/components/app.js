import React from 'react';
import DonorForm from './donor-form';
import PatientDisplay from './patient-display';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(v) {
        this.props.onDonorAdd(v);
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                  <h1>Volunteer</h1>
                </div>
                <div className="well">
                  <DonorForm onSubmit={this.handleSubmit} />
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading">Donors</div>
                  <div className="panel-body">
                    <PatientDisplay volunteers={this.props.donors} />
                  </div>
                </div>
            </div>

        );
    }

}