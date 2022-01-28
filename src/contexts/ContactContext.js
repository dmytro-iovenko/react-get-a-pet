
import { createContext, useReducer } from 'react';

export const ContactContext = createContext();

export function ContactProvider(props) {
    const [show, dispatch] = useReducer(reducer, false);

    function reducer(state, action) {
        switch (action.type) {
            case 'show':
                return true
            case 'hide':
            default:
                return false
        }
    }

    const showConfirmation = () => dispatch({ type: 'show' });

    const hideConfirmation = () => dispatch({ type: 'hide' });

    return (
        <ContactContext.Provider value={{
            show, showConfirmation, hideConfirmation
        }}>
            {props.children}
        </ContactContext.Provider>
    );
}


