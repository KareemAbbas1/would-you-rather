import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';



const PrivateRoute = ({ component: Component, ...rest }) => {

    const {authedUser} = useSelector(state => state)

    return (
        <Route
            {...rest}
            render={props => {
               return authedUser ? <Component {...props} /> : <Redirect to='/login'/>
            }}
        ></Route>
    )
}

export default PrivateRoute
