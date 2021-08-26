import React from 'react';

export const SearchPanel = ({users, param, setParam})=>{
	const onInputChange = (e)=>{
		setParam({
			...param,
			name: e.target.value
		})
	}

	const onSelectChange = (e)=>{
		setParam({
			...param,
			personId: e.target.value
		})
	}
	
	return <form action="">
		<div>
			<input type="text" value={param.name} onChange={onInputChange}/>
		</div>
		<select name="" id="" value={param.personId} onChange={onSelectChange}>
		<option value="">负责人</option>
		{
			users.map((user)=>{
				return <option key={user.id} value={user.id}>{user.name}</option>
			})
		}
		</select>
	</form>
}