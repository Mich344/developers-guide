import React from 'react'
import { screen, render } from '@testing-library/react'
import { ArticlesLanguaje } from './components/articlesLanguage'

describe('Articles', () => {
  it('Tiene que mostrar un titulo', () => {
    render(<ArticlesLanguaje />)
    // eslint-disable-next-line jest/valid-expect, testing-library/prefer-presence-queries
    expect(screen.queryByText(/articles/i)).toBeInTheDocument()
  })
})
