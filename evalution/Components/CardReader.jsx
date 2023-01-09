import { Box } from '@chakra-ui/react'
import React from 'react'

const CardReader = (props) => {
   console.log(props,"therse awre ")
  return (
    <div style={{padding:"30px"}}>
<Box fontSize={"30px"}>
    {props.name}
</Box>
<Box>
    {props.description}
</Box>
<Box>
    Count:{props.open_issues_count} Size: {props.size}
</Box>
<Box>
   
</Box>
    </div>
  )
}

export default CardReader