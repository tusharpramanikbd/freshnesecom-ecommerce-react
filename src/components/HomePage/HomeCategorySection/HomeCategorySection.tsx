import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material'
import Banner from '../Banner/Banner'
import CategoryListSection from '../CategoryListSection/CategoryListSection'

const generateStyle = (matchesMD: boolean, matchesSM: boolean) => {
  return {
    rootComponentStyle: {
      width: '100%',
      padding: !matchesMD ? '64px 0' : !matchesSM ? '0' : '0 16px',
    },
    boxStyle: {
      width: '100%',
      height: '100%',
    },
  }
}

const HomeCategorySection = () => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(matchesMD, matchesSM)

  return (
    <Container sx={classes.rootComponentStyle}>
      <Grid
        container
        columnSpacing={{ md: 4 }}
        rowSpacing={{ xs: 2, md: 0 }}
        sx={{ height: '100%' }}
      >
        <Grid item xs={12} md={3} order={{ xs: 3, md: 1 }}>
          <Box sx={classes.boxStyle}>
            <CategoryListSection />
          </Box>
        </Grid>
        <Grid item xs={12} md={4.5} order={{ xs: 1, md: 2 }}>
          <Box sx={classes.boxStyle}>
            <Banner
              bannerNo={1}
              imgUrl={null}
              subHeading='SubHeading 1'
              heading='This is Heading 1'
              route=''
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4.5} order={{ xs: 2, md: 3 }}>
          <Box sx={classes.boxStyle}>
            <Banner
              bannerNo={2}
              imgUrl={null}
              subHeading='SubHeading 2'
              heading='This is Heading 2'
              route=''
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeCategorySection
