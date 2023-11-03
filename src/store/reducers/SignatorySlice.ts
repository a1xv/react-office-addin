import {createSlice} from "@reduxjs/toolkit";
import {ISignatory} from "../../models/ISignatory";

interface SignatoryState {
    signatories: ISignatory[];
    isLoading: boolean;
    error: string;
}

const variablesWithSignatoryMock = [
    'Name',
    'Salutation',
    'Title'
]

const test = [
    {title: '1st signatory', variables: variablesWithSignatoryMock},
    {title: '2nd signatory', variables: variablesWithSignatoryMock},
    {title: '3d signatory', variables: variablesWithSignatoryMock},
]

const initialState: SignatoryState = {
    signatories: test,
    isLoading: false,
    error: ''
}

export const signatorySlice = createSlice({
    name: 'signatory',
    initialState,
    reducers: {

    }
})

export default signatorySlice.reducer;
