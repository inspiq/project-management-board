<<<<<<< Updated upstream
export const App = () => {
  return <div>App</div>
=======
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { router } from './providers/router'
import { persistor, store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={router}></RouterProvider>
        </DndProvider>
      </PersistGate>
    </Provider>
  )
>>>>>>> Stashed changes
}
