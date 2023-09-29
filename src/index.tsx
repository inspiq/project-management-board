import './shared/themes/theme.css'
import './app/styles/global.css'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/providers/router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
