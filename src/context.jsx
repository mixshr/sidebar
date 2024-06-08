import React, {useState, useContext, createContext, Children} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const openSideBar = () => {
        setIsSideBarOpen(true);
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return <AppContext.Provider
        value={{
            isSideBarOpen,
            isModalOpen,
            openSideBar,
            closeSideBar,
            openModal,
            closeModal
    }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };