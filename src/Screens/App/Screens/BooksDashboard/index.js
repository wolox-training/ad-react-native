import { connect } from 'react-redux';

import { setFilterType, setFilter } from '../../../../redux/actions';

import DashboardContainer from './components/DashboardContainer';

const mapStateToProps = state => (
  {
    filterType: state.filterType,
    filter: state.filter
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleChange: (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'filter':
          dispatch(setFilter(value));
          break;
        case 'filterType':
          dispatch(setFilterType(value));
          break;
        default:
          break;
      }
    }
  }
);

const BooksDashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

export default BooksDashboard;
