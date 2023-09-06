import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    //const onInputChange = ({target}) => { Otra manera de ponerlo
        //setInputValue(target.value)
    //} 
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        //setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={onInputChange}
                //onChange={(event) => onInputChange(event)} Otra manera de ponerlo
            />
        </form>
    )
}
