import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface BankInterface {
    bankName: string;
    description: string;
    age: number;
    url: string;
};

export interface initialStateBanks {
    data: Array<BankInterface>
};

const initialState: initialStateBanks = {
   data: []
}

export const bankSlice = createSlice({
    name: 'banks',
    initialState,
    reducers: {
        saveBanks: (state, action: PayloadAction<Array<BankInterface>>) => {
            state.data = action.payload
        },
    },
  })

// Action creators are generated for each case reducer function
export const { saveBanks } = bankSlice.actions

export default bankSlice.reducer