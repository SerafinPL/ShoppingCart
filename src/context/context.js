

import React, {useState} from 'react';

export const Context = React.createContext({});

// eslint-disable-next-line
export default props => {
	const [search, setSearch] = useState('');

	return(
		<Context.Provider value={{
		    			search: search,
		    			setSearch: setSearch,
		    		}}>
		  {props.children}
		</Context.Provider>
	);
}
