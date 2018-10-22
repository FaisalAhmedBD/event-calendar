import React from 'react'
import ColorButton from '../ColorPickerButton'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedColor: {
                colorCode: "#ffffff",
                colorId: "3",
                textColor: "#000000"
            }
        }
    }
    render() {
        const { colors, flag, handleAddButton, handleOnChange,selectedColor, handleCancelButton, customValue, handleColorButtonOnClick } = this.props
        const colorIds = Object.keys(colors)
        const { colorCode, colorId, textColor } = this.state.selectedColor
        if (flag) {
            return (
                <React.Fragment>
                    <div className="row" style={{ display: 'flex', alignItems: 'center' }} >
                        <div className="col-sm-10 col-md-8 col-lg-8 col-xl-8" >
                            <Form>
                                <FormGroup >
                                    <Label for="newTask">Add new task</Label>
                                    <Input
                                        type="text"
                                        name="newTask"
                                        id="newTask"
                                        placeholder="New Task"
                                        value={customValue}
                                        onChange={handleOnChange}
                                        style={{ backgroundColor: selectedColor.colorCode, color: selectedColor.textColor, fontWeight: '300' }}
                                    />
                                </FormGroup>
                            </Form>
                        </div>
                        {/* <div>
                            <ColorButton colorCode={colorCode} colorId={colorId} textColor={textColor} />
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-12" >
                            <p>Choose color</p>
                            {
                                colorIds.map(colorId => {
                                    const currentColor = colors[colorId]
                                    const keys = Object.keys(currentColor)
                                    const text = currentColor[keys[0]]
                                    const colorCode = currentColor[keys[1]]
                                    const textColor = currentColor[keys[2]]
                                    return (<ColorButton colorCode={colorCode} colorId={text} textColor={textColor} handleOnClick={handleColorButtonOnClick} />)
                                })
                            }

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6" style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <button onClick={handleAddButton}>Add</button>
                            <button onClick={handleCancelButton}>Cancel</button>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else
            return null
    }
    handleColorButtonOnClick = (...customProps) => {
        console.log('receiver props ', customProps)
        this.setState({
            selectedColor: {
                colorCode: customProps[0],
                colorId: customProps[1],
                textColor: customProps[2]
            }
        })
        console.log('seleceted color : ', this.state.selectedColor)
    }

}

export default AddTask