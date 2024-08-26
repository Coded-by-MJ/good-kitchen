import {useContext, useCallback, createContext, useState} from 'react'

const GlobalContext = createContext()


const GlobalProvider = ({children}) => {

    const [active, setActive] = useState('all meals')
    const [searchVal, setSearchVal] = useState('')
    const [dropDown, setDropDown] = useState(false)

    
    const handleActive = useCallback((newActive) => {
        setActive(newActive)
    },[])

    const showDropDown = useCallback(() => {
        setDropDown(true)
    },[])

    const hideDropDown = useCallback(() => {
        setDropDown(false);
    },[])
    

    const handleSearch = (newVal) => {
        handleActive('');
        hideDropDown()
        setSearchVal(newVal)
    }


  return (
    <GlobalContext.Provider value={{active, searchVal, showDropDown, handleActive, handleSearch, hideDropDown, 
        dropDown
    }}>
        {children}
    </GlobalContext.Provider>
  )
}


export const useData = () => useContext(GlobalContext)

export default GlobalProvider