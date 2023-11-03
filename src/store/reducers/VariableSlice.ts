import {createSlice} from "@reduxjs/toolkit";

interface VariableState {
    variables: string[];
    isLoading: boolean;
    error: string;
}

const variablesMock = [
    'Partner Full Name',
    'Partner Address Street',
    'Partner Address ZIP Code',
    'Partner Address City',
    'Partner Short Name',
    'Registration Number'
]

const initialState: VariableState = {
    variables: variablesMock,
    isLoading: false,
    error: ''
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers: {

    }
})

export default variableSlice.reducer;
