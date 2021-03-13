import * as React from "react";
import { connect } from "react-redux";

import {
    User,
    userSelector,
    signOutAction,
    StateType
} from "../../core";

import { AppWrapper } from "../../components/AppWrapper";
import { UserComponent } from "../../components/UserComponent";
import { SignOutButton } from "../../components/SignOutButton";

interface HomeProps {
    user: User | null;
    dispatchSignOut: () => void;
}

export const Home = (props: HomeProps) => {

    return <AppWrapper>
        <UserComponent user={props.user} />
        <SignOutButton onClick={props.dispatchSignOut} />
    </AppWrapper>
}

const mapStateToProps = (state: StateType) => {
    return {
        user: User.singleton(userSelector(state)),
    }
};

const mapDispatchToProps = {
    dispatchSignOut: signOutAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);