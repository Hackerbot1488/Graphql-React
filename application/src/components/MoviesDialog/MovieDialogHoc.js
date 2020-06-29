import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import { moviesQuery } from '../MoviesTable/queries';
import { removeMovieMutation } from './mutation'

const withGraphQlRemove = graphql(removeMovieMutation, {
  props: ({ mutate }) => ({
    removeMovie: id => mutate({
      variables: id,
      refetchQueries: [{ 
        query: moviesQuery,
        variables: { name: '' } }]
    })
  })
})

export default compose(withGraphQlRemove);
