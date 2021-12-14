import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import InfoInput from './components/InfoInput'
import { ApolloProvider } from '@apollo/client'
import { client } from './network/apollo-client'
ReactDOM.render(
  (
    <div data-app-init=''>
      <ApolloProvider client={client}>
        <InfoInput />
        <AppRouter />
      </ApolloProvider>
    </div>
  ),
  document.getElementById('react-app')
)
