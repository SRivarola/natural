import { useState, useEffect } from 'react';
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import "./index.css";

const CSS_HANDLES = ["descriptionParagraph"]

const MetaData = () => {

    const { handles } = useCssHandles(CSS_HANDLES);
    const { route: { params } } = useRuntime();
    const [description, setDescription] = useState('');


    const getData = async () => {
        try {
            const fetchCatedoryId = await fetch(`https://www.natural-life.com.ar/api/catalog_system/pub/specification/field/listTreeByCategoryId/${params.id}`);
            const categoryId = await fetchCatedoryId.json();
            const response = await fetch(`https://www.natural-life.com.ar/api/catalog/pvt/category/${categoryId[0].CategoryId}`);
            const data = await response.json();
            setDescription(data.Description);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        params ? getData() : null
    }, [params]);

    return (
        <h2 className={`${handles.descriptionParagraph}`}>
            {description}
        </h2>
    )
}

export default MetaData