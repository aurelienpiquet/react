import React, {useState} from 'react';


const ModalContext = React.createContext({
    isOpen: false,
    setOpenModal: () => {},
})

export const ModalContextProvider = (props) => {
    const [open, setOpen] = useState(false);

    const onToggleModalHandler = (open) => {
        console.log('open: ' + open)
        setOpen(open);
    }

    return (
        <ModalContext.Provider value={
            {
                isOpen: open,
                setOpenModal: onToggleModalHandler,
            }
        }>
            { props.children }
        </ModalContext.Provider>
    )
}

export default ModalContext;