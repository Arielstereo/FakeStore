import { useId } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FormControl, Grid, InputLabel, Slider, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Filters = ({ onChange }) => {
  const minPriceId = useId()
  const categoryId = useId()

  const handlePrice = (e) => {
    onChange(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <Grid container direction={{ xs: 'row', md: 'column' }} sx={{ alignItems: 'center', justifyContent: 'center', gap: 6 }}>
      <Grid item>
        <FormControl sx={{ mt: 20, minWidth: 150 }} size='small'>
          <InputLabel>select</InputLabel>
          <Select id={categoryId} labelId='category' onChange={handleCategory}>
            <MenuItem value='all'>all</MenuItem>
            <MenuItem value='jewelery'>jewelery</MenuItem>
            <MenuItem value='electronics'>electronics</MenuItem>
            <MenuItem value="men's clothing">mens</MenuItem>
            <MenuItem value="women's clothing">womens</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Typography sx={{ mt: 20, textAlign: 'center' }}>
          Filter price
        </Typography>
        <Slider valueLabelDisplay='on' min={0} max={900} onChange={handlePrice} id={minPriceId} sx={{ width: 200 }} />
      </Grid>
    </Grid>
  )
}

export default Filters
