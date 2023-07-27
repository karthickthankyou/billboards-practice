import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '../../atoms/Button'
import { IconFilter } from '@tabler/icons-react'
import { Sidebar } from '../Sidebar'
import {
  FilterBillboardFormType,
  filterBillboardsDefaultValues,
} from '@billboards-org/forms/src/filterBillboards'
import { Brand } from '../../atoms/Brand'
import { FilterHeading } from '../../molecules/FilterHeading'
import { Controller, useFormContext } from 'react-hook-form'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { BillboardTypeText } from '@billboards-org/forms'

export interface IFilterOwnerBillboardsProps {}

export const FilterOwnerBillboards = ({}) => {
  const [openFilter, setOpenFilter] = useState(false)

  const { control, reset, getValues } =
    useFormContext<FilterBillboardFormType>()

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
              name="type"
              control={control}
              render={({
                field: { value = [], onChange },
                fieldState: { isDirty },
                formState: { defaultValues, errors },
              }) => {
                return (
                  <>
                    <FilterHeading dirty={isDirty} title="Board type" />

                    <ToggleButtonGroup
                      value={value}
                      onChange={(event, value) => {
                        onChange(value.sort())
                      }}
                      classes={{ root: 'block flex rounded-sm' }}
                    >
                      {defaultValues?.type?.map((value) => {
                        if (!value) return null

                        return (
                          <ToggleButton
                            disableRipple
                            disableTouchRipple
                            disableFocusRipple
                            classes={{
                              root: 'border-2 ',
                              selected:
                                'font-bold  bg-white shadow-lg border-black',
                              standard: 'bg-gray-25',
                            }}
                            key={value}
                            value={value}
                          >
                            {BillboardTypeText[value]}
                          </ToggleButton>
                        )
                      })}
                    </ToggleButtonGroup>
                  </>
                )
              }}
            />
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
              reset({ ...getValues(), ...filterBillboardsDefaultValues })
            }
          >
            Reset
          </Button>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}
