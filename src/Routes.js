import React from 'react';
import { Route } from 'react-router-dom';
import withSidePanel from './hoc/withSidePanel';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

const userListConfig = {
	goBack: true,
	goTo: '/shift/link-user/add-user',
	goToText:'Add User'
};

const addUserConfig = {
	goBack: true,
};

const Routes = () => {
	return (
		<div>
			<Route path='/shift/link-user' component={withSidePanel(UserList, userListConfig)} />
			<Route path='/shift/link-user/add-user' component={withSidePanel(AddUser, addUserConfig)} />
		</div>
	);
};

export default Routes;
