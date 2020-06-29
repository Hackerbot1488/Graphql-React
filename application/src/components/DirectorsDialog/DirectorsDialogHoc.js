import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import { removeDirectorMutation } from './mutation'
import { directorsQuery } from '../MoviesForm/queries';

const withGraphQlRemove = graphql(removeDirectorMutation, {
  props: ({ mutate }) => ({
    removeDirector: id => mutate({
      variables: id,
      refetchQueries: [{ 
        query: directorsQuery,
        variables: { name: '' }
      }]
    })
  })
})

export default compose(withGraphQlRemove);