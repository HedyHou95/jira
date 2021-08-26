import { useState, useEffect } from 'react';

export const isFalsy = (value)=>{
	return value === 0 ? false : !value;
}
export const cleanObject = (object)=>{
	const result = {...object};
	Object.keys(object).forEach((key)=>{
		const value = object[key];
		if(isFalsy(value)) {
			delete result[key]
		}
	})
	return result;
}

export const useMount = (callback)=>{
	useEffect(()=>{
		callback(); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

export const useDebounce = (value, delay)=>{
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(()=>{
		const timeout = setTimeout(()=>{
			setDebounceValue(value)
		}, delay)

		return ()=>{
			clearTimeout(timeout);
		}
	},[value,delay])

	return debounceValue;
}