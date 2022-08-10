import { useState } from 'react';
import {
    Input,
    Button,
    FormGroup,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';


export default function Form({ onSubmit }) {
    const [state, setState] = useState({
        itemValue: 114,
        username: '',
        password: ''
    });
    const handleSubmit = (event) => {
        onSubmit(state);
    }
    const onFormChange = (id) => (event) => {
        setState({ ...state, [id]: event.target.value });
    };
    const onSelection = (e) => {
        setState({ ...state, itemValue: e.target.value });
    }
    return (
        <FormGroup onSubmit={(e) => e.preventDefault()}>
            <FormControl>
                <InputLabel id='hg-token'>Enter your Username</InputLabel>
                <Input placeholder='Username' name='username' value={state.username} onChange={onFormChange('username')} />
            </FormControl>
            <br />
            <FormControl>
                <InputLabel id='hg-token'>Enter your Password</InputLabel>
                <Input name='password' type="password" value={state.password} onChange={onFormChange('password')} />
            </FormControl>
            <br />
            <FormControl fullWidth  >
                <InputLabel id="item-selection">Item</InputLabel>
                <Select
                    onChange={onSelection}
                    label="Item"
                    style={{ fontColor: 'black' }}
                    labelId="item-selection"
                    value={state.itemValue}
                >
                    <MenuItem value={114}>SuperBrie</MenuItem>
                    <MenuItem value={423}>Empowered Anchor Charm</MenuItem>
                    <MenuItem value={498}>Super Rotten Charm</MenuItem>
                    <MenuItem value={1426}>Magical String Cheese</MenuItem>
                    <MenuItem value={2248}>Festive Anchor Charm</MenuItem>
                </Select>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </FormGroup >

    )
}