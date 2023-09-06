import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

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

            { categories.map((category) => ( //El category es la iteración, es un elemento iterado de categories
                <GifGrid 
                    key={category}
                    category={category}    
                />)) 
            }
        </>
    )
}
