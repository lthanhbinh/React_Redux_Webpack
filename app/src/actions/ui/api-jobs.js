import { wrapAsyncThunk } from './utilities'
import { createAction } from 'redux-actions'
import {SET_ROW_SELECTION} from '../types'
import {
    execGetJobs,
    execGetCompany,
    execGetExportData
} from '../services/api-jobs'

export const setRowSelection = createAction(SET_ROW_SELECTION)

export const execShadedGetJobs = () =>
    wrapAsyncThunk(execGetJobs(), { name: 'shaded-get-jobs' })

export const execShadedGetCompany = () =>
    wrapAsyncThunk(execGetCompany(), { name: 'shaded-get-company' })

export const execShadedGetExportData = () =>
    wrapAsyncThunk(execGetExportData(), { name: 'shaded-get-export-data' })
