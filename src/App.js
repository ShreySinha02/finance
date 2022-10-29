
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem,Center } from '@chakra-ui/react'
import Dashboard from './Component/Dashboard'
import Search from './Component/Search'
import Main from './Component/Main'
function App() {
  return (
    <ChakraProvider>
   
   <Grid
  templateAreas={`"nav header"
                  "nav main"
                  "nav main"`}
  gridTemplateRows={'85px 1fr 30px'}
  gridTemplateColumns={'250px 1fr'}
  h='100vh'
  // gap='0.5'
>
  <GridItem pl='2' bg='#e9eff2' area={'header'}>
   <Search/>
  </GridItem>
  <GridItem pl='2' bg='#e9eff2' area={'nav'} padding='10px'>
    <Center>
   <Dashboard/>
    </Center>
  </GridItem>
  <GridItem pl='2' bg='#e9eff2' area={'main'}>
    <Main/>
  </GridItem>
</Grid>
    </ChakraProvider>
  );
}

export default App;
