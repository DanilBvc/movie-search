import DetailsComponent from '@/component/detailsPageComponent/DetailsComponent'
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

function details() {

  return (
    <Provider store={store}>
      <DetailsComponent />
    </Provider>
  )
}

export default details
