import {
  FilterCampaignFormType,
  filterCampaignsDefaultValues,
} from '@billboards-org/forms/src/filterCampaigns'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Brand } from '../../atoms/Brand'
import { Button } from '../../atoms/Button'
import { IconFilter } from '@tabler/icons-react'
import { Sidebar } from '../Sidebar'
import { FilterHeading } from '../../molecules/FilterHeading'

export interface IFilterCampaignsProps {}

export const FilterCampaigns = ({}: IFilterCampaignsProps) => {
  const [openFilter, setOpenFilter] = useState(false)

  const { control, reset, getValues } = useFormContext<FilterCampaignFormType>()
  return (
    <div>
      <Button size="none" onClick={() => setOpenFilter(true)} variant="text">
        <IconFilter />
      </Button>
      <Sidebar overlayBlur={false} open={openFilter} setOpen={setOpenFilter}>
        <Sidebar.Header>
          <Brand />
        </Sidebar.Header>
        <Sidebar.Body>
          <div className="flex flex-col items-start space-y-1">
            <Controller
              name="status"
              control={control}
              render={({
                field: { value = [], onChange },
                fieldState: { isDirty },
                formState: { defaultValues },
              }) => {
                return (
                  <>
                    <FilterHeading dirty={isDirty} title="Status" />

                    <ToggleButtonGroup
                      value={value}
                      onChange={(event, value) => {
                        onChange(value.sort())
                      }}
                      orientation="vertical"
                      classes={{ root: 'rounded-sm' }}
                    >
                      {defaultValues?.status?.map((value) => {
                        if (!value) return null

                        return (
                          <ToggleButton
                            disableRipple
                            disableTouchRipple
                            disableFocusRipple
                            classes={{
                              root: 'border-2 ',
                              selected:
                                'font-bold  bg-white shadow-lg  border-black',
                              standard: 'bg-gray-50',
                            }}
                            key={value}
                            value={value}
                          >
                            {value}
                          </ToggleButton>
                        )
                      })}
                    </ToggleButtonGroup>
                  </>
                )
              }}
            />
          </div>
        </Sidebar.Body>
        <Sidebar.Footer>
          <Button
            onClick={() =>
              reset({ ...getValues(), ...filterCampaignsDefaultValues })
            }
          >
            Reset
          </Button>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}
