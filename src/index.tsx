import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { rootStore } from './stores'
import App from './routes/index'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const MAX_RETRIES = 1
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      retry: MAX_RETRIES
    }
  }
})

root.render(
  <StrictMode>
    <Provider store={rootStore}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
