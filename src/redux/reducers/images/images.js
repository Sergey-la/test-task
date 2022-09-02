import img1 from '../../../assets/images/slide-1.jpg';
import img2 from '../../../assets/images/slide-2.jpg';
import img3 from '../../../assets/images/slide-3.jpg';

const initial = {
    images: [img1, img2, img3],
};

export default function images(state = initial, action) {
    switch (action.type) {
        case 'SET_IMAGES': {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
