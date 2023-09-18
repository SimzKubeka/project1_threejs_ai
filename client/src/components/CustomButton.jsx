import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({type, title, handleClick, customStyle}) => 
{   
    const snap = useSnapshot(state); 
    const generateStyle = (type) =>{
        if(type === 'filled'){
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if(type === 'outline'){
            return {
                backgroundColor: 'transparent',
                color: snap.color,
                border: `1px solid ${snap.color}`
            }
        }
    }

  return (
    <button 
        className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton