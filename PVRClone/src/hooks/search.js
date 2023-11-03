import { useState, useEffect } from "react" 

const useSearch = (values) => {
    const [search, setSearch] = useState('');
    const [filterValue, setFilterValue] = useState(values);

    useEffect(() => {
        const filtered = values.filter((value) =>
            value./*your key to search*/text.toLowerCase().includes(search.toLowerCase())
            || value./*your key to search*/numbers.includes(search)
            || value./*your key to search*/others.toLowerCase().includes(search.toLowerCase()));
        
        setFilterValue(filtered);    
    }, [search, values])

    return {search, setSearch, filterValue};
}

export default useSearch;