import * as React from "react";
import { connect } from "react-redux";
import {
    Credential,
    signInAction,
    StateType,
    User,
    userSelector,
    signUpAction,
} from "../../core";

import { AppWrapper } from "../../components/AppWrapper";
import { UserComponent } from "../../components/UserComponent";
import { SignInComponent } from "../../components/SignInComponent";
// import { SignOutButton } from "../../components/SignOutButton";
// import { SignUpComponent } from "../../components/SignUpComponent";


interface Props {
    user: User | null;
    dispatchSignIn: (credential: Credential) => void;
    dispatchSignUp: (
        firstName: string,
        lastName: string,
        credential: Credential,
    ) => void;
}

export function Login(props: Props) {
    // login useCase
    const onSignIn = (email: string, password: string) =>
        props.dispatchSignIn(new Credential(email, password));
    // singUp useCase
    // const onSignUp = (
    //     firstName: string,
    //     lastName: string,
    //     email: string,
    //     password: string,
    // ) =>
    //     props.dispatchSignUp(firstName, lastName, new Credential(email, password));

    return (
        <AppWrapper>
            <UserComponent user={props.user} />
            <SignInComponent onClick={onSignIn} />
            {/* <SignUpComponent onClick={onSignUp} /> */}
        </AppWrapper>
    );
};

const mapStateToProps = (state: StateType) => {
    return {
        // map from reduxState to model
        user: User.singleton(userSelector(state)),
    }
};

const mapDispatchToProps = {
    dispatchSignIn: signInAction,
    dispatchSignUp: signUpAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
