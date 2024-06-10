import axios from "axios"
import { apiKey } from "../../utils/apiKey"

const baseURL = apiKey
const groupsURL = baseURL + '/' + 'groups'

export const getAreas = () => axios.get(groupsURL + '/getAreas')
