import { Container } from '@chakra-ui/react'

/* Components */

import { Home } from './home'
import { ArticlesLanguaje } from './articlesLanguage'
import { ArticlesFrameworks } from './articlesFrameworks'
import { ArticlesBD } from './articlesBD'
import { Questions } from './questions'

export const Render = () => {
  return (
    <Container maxW="container.lg">
      <Home />
      <br />
      <br />
      <Questions />
      <br />
      <br />
      <ArticlesLanguaje />
      <br />
      <br />
      <ArticlesFrameworks />
      <br />
      <br />
      <ArticlesBD />
    </Container>
  )
}
