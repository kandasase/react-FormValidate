import { Flex } from "@chakra-ui/react"

function Card({ children }) {
   return (
      <Flex bgColor='white' >
         {children}
      </Flex>
   )
}
export { Card }