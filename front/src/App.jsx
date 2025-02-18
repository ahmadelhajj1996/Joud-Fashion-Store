import { Provider } from 'react-redux'
import { QueryClientProvider , QueryClient } from 'react-query'
import {store } from './redux/store'
import Site from './layouts/site'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <Site />
      </Provider>
    </QueryClientProvider>  
    </>
  )
}

export default App




// The full Seeder  
// Handle The InfiniteQueries in the Category Page
// translations  && The animation fully
// the scroll behavior when clicking on buttons and the current position when clicking on the button (the browser scroll)
// share the url via whatsapp , // the route search params how to read the query search params 
// for responsive design { phone: 600px ; tablet: 768px  ;  laptop: 992; desktop: 1200px }
