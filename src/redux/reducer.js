import axios from 'axios';


const initialState = {
    list: [],
    fetching: false, 
    fetched: false, 
    error: null
}


const POST_TASK = 'POSt_TASK';
const POST_TASK_PENDING = 'POST_TASK_PENDING';
const POST_TASK_FULFILLED = 'POST_TASK_FULFILLED';
const POST_TASK_REJECTED = 'POST_TASK_REJECTED';


const GET_TASK = 'GET_TASK';
const GET_TASK_PENDING = 'GET_TASK_PENDING';
const GET_TASK_FULFILLED = 'GET_TASK_FULFILLED';
const GET_TASK_REJECTED = 'GET_TASK_REJECTED';

const PATCH_TASK = 'PATCH_TASK';
const PATCH_TASK_PENDING = 'PATCH_TASK_PENDING';
const PATCH_TASK_FULFILLED = 'PATCH_TASK_FULFILLED';
const PATCH_TASK_REJECTED = 'PATCH_TASK_REJECTED';

const PUT_TASK = 'PUT_TASK';
const PUT_TASK_PENDING = 'PUT_TASK_PENDING';
const PUT_TASK_FULFILLED = 'PUT_TASK_FULFILLED';
const PUT_TASK_REJECTED = 'PUT_TASK_REJECTED';

const DELETE_TASK = 'DELETE_TASK';
const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING';
const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED';
const DELETE_TASK_REJECTED = 'DELETE_TASK_REJECTED';


export default function reducer(state = initialState, action) {
    switch(action.type) {

        case POST_TASK_PENDING: 
        return Object.assign({}, state, {fetching: true})

        case POST_TASK_FULFILLED:
        console.log('action.payload',action.payload)
        return Object.assign({}, state, {fetching: false, fetched: true, list: action.payload})

        case POST_TASK_REJECTED: 
        return Object.assign({}, state, {fetching: false, error: action.payload})

        case GET_TASK_PENDING: 
        return Object.assign({}, state, {fetching: true})

        case GET_TASK_FULFILLED:
        console.log('action.payload',action.payload)
        return Object.assign({}, state, {fetching: false, fetched: true, list: action.payload})

        case GET_TASK_REJECTED: 
        return Object.assign({}, state, {fetching: false, error: action.payload})

        case PATCH_TASK_PENDING: 
        return Object.assign({}, state, {fetching: true})

        case PATCH_TASK_FULFILLED:
        console.log('action.payload',action.payload)
        return Object.assign({}, state, {fetching: false, fetched: true, list: action.payload})

        case PATCH_TASK_REJECTED: 
        return Object.assign({}, state, {fetching: false, error: action.payload})

        case PUT_TASK_PENDING: 
        return Object.assign({}, state, {fetching: true})

        case PUT_TASK_FULFILLED:
        console.log('action.payload',action.payload)
        return Object.assign({}, state, {fetching: false, fetched: true, list: action.payload})

        case PUT_TASK_REJECTED: 
        return Object.assign({}, state, {fetching: false, error: action.payload})

        case DELETE_TASK_PENDING: 
        return Object.assign({}, state, {fetching: true})

        case DELETE_TASK_FULFILLED:
        console.log('action.payload',action.payload)
        return Object.assign({}, state, {fetching: false, fetched: true, list: action.payload})

        case DELETE_TASK_REJECTED: 
        return Object.assign({}, state, {fetching: false, error: action.payload})


        default: return state
    }
}


export function getTask() {
    const fetchTask = function() {
        return axios.get('https://practiceapi.devmountain.com/api/tasks').then(response => response.data)}
    return {
    type: GET_TASK, 
    payload: fetchTask()
    }
}

export function patchTask(id, title, description, completed) {
    const patchTask = function() {
        return axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title, description, completed}).then(response => response.data)
    }
    return {
        type: PATCH_TASK,
        payload: patchTask()
    }
}

export function putTask(id) {
    const putTask = function() {
        return axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(response => response.data)
    }
    return {
        type: PUT_TASK, 
        payload: putTask()
    }
}

export function deleteTask(id) {
    const deleteTask = function() {
        return axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(response => response.data)
    }
    return {
        type: DELETE_TASK,
        payload: deleteTask() 
    }
}


export function postTask(title) {
    const postTask = function() {
        return axios.post('https://practiceapi.devmountain.com/api/tasks', {title}).then(response => response.data)
    }
    return {
        type: POST_TASK, 
        payload: postTask()
    }
}



