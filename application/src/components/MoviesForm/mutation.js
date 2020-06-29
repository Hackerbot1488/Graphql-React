import { gql } from 'apollo-boost'

export const addMovieMutation = gql`
  mutation addMovie($name: String!, $genre: String!, $watched: Boolean!, $rate: Int,  $directorId: String) {
    addMovie(name: $name , genre: $genre, rate: $rate, watched: $watched, directorId: $directorId) {
      name
    }
  }
`

export const updateMovieMutation = gql`
  mutation updateMovie($id: ID, $name: String!, $genre: String!, $watched: Boolean!, $rate: Int,  $directorId: ID) {
    updateMovie(id: $id, name: $name , genre: $genre, rate: $rate, watched: $watched, directorId: $directorId) {
      name
    }
  }
`