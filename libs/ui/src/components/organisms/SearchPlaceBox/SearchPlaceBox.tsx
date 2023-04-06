import { useAppSelector } from '@billboards-org/store'
import {
  LocationInfo,
  useSearchLocation,
} from '@billboards-org/hooks/src/location'

import { Autocomplete } from '../../atoms/Autocomplete'
import { selectRecentSearches } from '@billboards-org/store/search'

export interface ISearchPlaceBoxProps {
  setLocationInfo: (locationInfo: LocationInfo) => void
}

const SearchPlaceBox = ({ setLocationInfo }: ISearchPlaceBoxProps) => {
  const recentSearches = useAppSelector(selectRecentSearches)
  //   console.log('Recent searches', recentSearches)
  const { loading, setLoading, searchText, locationInfo, setSearchText } =
    useSearchLocation()

  return (
    <Autocomplete<LocationInfo, false, false, false>
      options={locationInfo.length ? locationInfo : recentSearches}
      noOptionsText={searchText ? 'No options.' : 'Type something...'}
      placeholder="Type something..."
      getOptionLabel={(x) => x.placeName}
      onInputChange={(_, v) => {
        setLoading(true)
        setSearchText(v)
      }}
      loading={loading}
      isOptionEqualToValue={(option, value) =>
        option.placeName === value.placeName
      }
      onChange={(_, v) => {
        if (v) {
          const { latLng, placeName } = v
          setLocationInfo({ latLng: latLng, placeName: placeName })
        }
      }}
    />
  )
}

export { SearchPlaceBox }
