import { format } from 'date-fns'

const formatTimestampToDate = (timestamp) => {
  return format(new Date(timestamp * 1000), 'dd/MM/yyyy')
}

export { formatTimestampToDate }
