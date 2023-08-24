import { useRuntime } from 'vtex.render-runtime';
import { useEffect, useState } from 'react';

const SimilarCollections = ({ SliderPerros, SliderGatos, SliderPeces, SliderAves, SliderPeqAnimales, SliderReptiles }) => {

    const { route: { params } } = useRuntime();
    const department = params.department.toLowerCase();
    const [sliderComponent, setSliderComponent] = useState('')

    useEffect(() => {
        switch (department) {
            case "perros":
                setSliderComponent(<SliderPerros />);
                break;
            case 'gatos':
                setSliderComponent(<SliderGatos />);
                break;
            case 'peces':
                setSliderComponent(<SliderPeces />);
                break;
            case 'aves':
                setSliderComponent(<SliderAves />);
                break;
            case 'pequenos-animales':
                setSliderComponent(<SliderPeqAnimales />);
                break;
            case 'reptiles':
                setSliderComponent(<SliderReptiles />);
                break;
            default:
                return null;
        }
    }, [params]);

    if (!params) {
        return null;
    }
    return (
        <div>{sliderComponent}</div>
    )
}
export default SimilarCollections