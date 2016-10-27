import {connect} from 'react-redux';
import {addDonorAction} from '../actions/add-donor-action';
import App from '../components/app';

const mapStateToProps = (state) => {
    return {
        donors : state.donor.donors
    };
};

const mapDispatchToProps = (dispatch) => {
    return  {
        onDonorAdd : (donor) => {
            dispatch(addDonorAction(donor));
        }
    };

};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
