import React, { useContext } from "react";
import {
    Redirect, Route
} from "react-router-dom";
import { UserContext } from "../../App";


function PrivateRoute({ children, ...rest }) {

    const [isUser, setIsUser] = useContext(UserContext)

    const { _id, email } = isUser

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;