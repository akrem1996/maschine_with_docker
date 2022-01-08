import axios from "axios";

export const machinesActionsTypes = {
    FETCH_START:"FETCH_START",
    FETCH_ERROR:"FETCH_ERROR",
    FETCH_LIVE_MACHINE:"FETCH_LIVE_MACHINE",
}

export const fetchStart = () => ({
    type: machinesActionsTypes.FETCH_START
}); 

export const fetchLiveMachine = (data) => ({
    type: machinesActionsTypes.FETCH_LIVE_MACHINE,
    data
}); 

export const fetchError = () => ({
    type: machinesActionsTypes.FETCH_ERROR
}); 


 