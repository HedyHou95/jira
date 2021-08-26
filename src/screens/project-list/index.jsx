import React, { useState, useEffect } from 'react';
import { List } from './list.jsx';
import { SearchPanel } from './search-panel.jsx';
import { cleanObject, useMount, useDebounce } from '../../utils/index.js';
import qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = ()=>{
	const [param, setParam] = useState({
		name: '',
		personId: ''
	});

	const [users, setUsers] = useState([]);
	const [list, setList] = useState([]);

	let debounceValue = useDebounce(param, 1000)

	useEffect(()=>{
		fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceValue))}`).then(async (response)=>{
			if(response.ok){
				setList(await response.json())
			}
		})
	}, [debounceValue])

	const getUsersInfo = ()=>{
		fetch(`${apiUrl}/users`).then(async (response)=>{
			if(response.ok){
				setUsers(await response.json())
			}
		})
	}

	useMount(getUsersInfo);



	return <div>
		<SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
		<List users={users} list={list}></List>
	</div>
}