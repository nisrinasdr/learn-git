import './App.css';
import { Card, CardText } from 'reactstrap';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getList } from './features/list/action';

function App({list, getList}) {
  const store = useSelector(state => state.list)
  const dispatch = useDispatch()

  useEffect(() => {
    // get List
    // add get list
    getList()
  }, [])

  return !list?.loading && list?.data?.length > 0 && (
    <>
      <h1>To Do List</h1>
      {list.data?.map(data => (
        <Card key={data.id}>
          <CardText>
            {data.title}
          </CardText>
        </Card>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  list: state.list
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    dispatch(getList())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
