interface Result {
  code: number
  message: string
  data: object | null
}

import axios from 'axios'


declare module 'axios' {
  interface AxiosResponse extends Result
}
