import React from 'react';
import { Button } from 'reactstrap';
const ColorPickerButton = ({ colorCode, colorId, textColor, handleOnClick }) => {

    return <Button
        onClick={() => { handleOnClick(colorCode, colorId, textColor) }}
        style={{
            ...colorPickerButtonStyle,
            backgroundColor: colorCode,
            color: textColor
        }}>
        {colorId}
    </Button>

}
export default ColorPickerButton;

const colorPickerButtonStyle = {
    borderRadius: '20px',
    padding: '8px',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: '10px',
    marginBottom: '7px',
}

