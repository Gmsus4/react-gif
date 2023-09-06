import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One punch', 'League of Legends' ]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpert App</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

            {/* <button onClick={onAddCategory}> Agregar</button> */}
            <ol>
                { categories.map(category => <li>{category}</li>) }
            </ol>
        </>
    )
}
