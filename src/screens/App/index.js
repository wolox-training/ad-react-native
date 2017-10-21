import { connect } from 'react-redux';

import { setFilterType, setFilter } from '../../redux/actions';

import DashboardContainer from './components/DashboardContainer';
import './style.css';

const mapStateToProps = state => (
  {
    filterType: state.wBooks.filterType,
    filter: state.wBooks.filter
  }
);

const mapDispatchToProps = dispatch => (
  {
    filterHandleChange: (e) => {
      const { value } = e.target;
      dispatch(setFilter(value));
    },
    filterTypeHandleChange: (e) => {
      const { value } = e.target;
      dispatch(setFilterType(value));
    }
  }
);


const App = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

export default App;
