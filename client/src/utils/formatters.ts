import { format } from 'date-fns'

const formatTimestampToDate = (timestamp) => {
  return format(new Date(timestamp * 1000), 'dd/MM/yyyy')
}

const formatAuctionBidsTuple = (tupleArray) => {
  const formattedTuple = tupleArray.map(([value, address]) => ({
    value,
    address,
  }))
  return formattedTuple
}

export { formatTimestampToDate, formatAuctionBidsTuple }
