import { FormProviderSearchBillboards } from '@billboards-org/forms'
import { SearchPageTemplate } from '@billboards-org/ui/src/components/templates/SearchTemplate'
import React from 'react'

const Search = () => (
  <FormProviderSearchBillboards>
    <SearchPageTemplate />
  </FormProviderSearchBillboards>
)

export default Search
