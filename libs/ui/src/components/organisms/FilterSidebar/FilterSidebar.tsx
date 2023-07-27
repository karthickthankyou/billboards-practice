import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Brand } from '../../atoms/Brand'
import { Button } from '../../atoms/Button'
import { RangeSlider } from '../../molecules/RangeSlider'
import { FilterHeading } from '../../molecules/FilterHeading'

import { Sidebar } from '../Sidebar'
import {
  BillboardTypeText,
  SearchBillboardFormType,
  searchBillboardsDefaultValues,
} from '@billboards-org/forms'
import { IconFilter } from '@tabler/icons-react'
import { PulsingDot } from '../../atoms/Dot'

export interface IFilterSidebarProps {}

const FilterSidebar = () => {
  const [open, setOpen] = useState(false)

  const {
    control,
    reset,
    getValues,
    formState: { dirtyFields },
  } = useFormContext<SearchBillboardFormType>()
  return (
    <div>
      <Button
        variant="text"
        onClick={() => setOpen(true)}
        className=" hover:bg-gray-200"
      >
        <IconFilter className="stroke-1.5 " />
        {Object.keys(dirtyFields).length ? <PulsingDot /> : null}
      </Button>
      <Sidebar overlayBlur={false} open={open} setOpen={setOpen}>
        <Sidebar.Header>
          <Brand />
        </Sidebar.Header>
        <Sidebar.Body>
          <div className="flex flex-col items-start space-y-1">
            <Controller
              name="pricePerHour"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { isDirty },
                formState: { defaultValues },
              }) => {
                return (
                  <>
                    <FilterHeading dirty={isDirty} title="Price per hour" />
                    <RangeSlider
                      min={defaultValues?.pricePerHour?.[0]}
                      max={defaultValues?.pricePerHour?.[1]}
                      value={value}
                      onChange={onChange}
                      valueLabelFormat={(sliderValue) =>
                        `Rs.${sliderValue.toLocaleString()}`
                      }
                      step={5}
                    />
                  </>
                )
              }}
            />
            <Controller
              name="width"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { isDirty },
                formState: { defaultValues },
              }) => {
                return (
                  <>
                    <FilterHeading dirty={isDirty} title="Width" />
                    <RangeSlider
                      min={defaultValues?.width?.[0]}
                      max={defaultValues?.width?.[1]}
                      value={value}
                      onChange={onChange}
                      valueLabelFormat={(sliderValue) =>
                        `${sliderValue.toLocaleString()} ft`
                      }
                      step={10}
                    />
                  </>
                )
              }}
            />
            <Controller
              name="height"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { isDirty },
                formState: { defaultValues },
              }) => {
                return (
                  <>
                    <FilterHeading dirty={isDirty} title="Height" />
                    <RangeSlider
                      min={defaultValues?.height?.[0]}
                      max={defaultValues?.height?.[1]}
                      value={value}
                      onChange={onChange}
                      valueLabelFormat={(sliderValue) =>
                        `${sliderValue.toLocaleString()} ft`
                      }
                      step={10}
                    />
                  </>
                )
              }}
            />
            <Controller
              name="impressionsPerDay"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { isDirty },
                formState: { defaultValues },
              }) => {
                return (
                  <>
                    <FilterHeading
                      dirty={isDirty}
                      title="Impressions per day"
                    />
                    <RangeSlider
                      min={defaultValues?.impressionsPerDay?.[0]}
                      max={defaultValues?.impressionsPerDay?.[1]}
                      value={value}
                      onChange={onChange}
                      valueLabelFormat={(sliderValue) =>
                        `${sliderValue.toLocaleString()}`
                      }
                      step={5000}
                    />
                  </>
                )
              }}
            />
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
                                'font-bold  bg-white shadow-lg  border-black',
                              standard: 'bg-gray-200',
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
          </div>
        </Sidebar.Body>
        <Sidebar.Footer>
          <Button
            onClick={() =>
              reset({ ...getValues(), ...searchBillboardsDefaultValues })
            }
          >
            Reset
          </Button>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

export { FilterSidebar }
