import { Container, Grid, Typography } from "@mui/material";
import React from "react";

type BoxTYpes = {
  boxID: string;
};
const GridExercise = () => {
  return (
    <Container maxWidth={"lg"} sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ my: 4 }}>
        Grid 0
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item boxID={"1"} />
        </Grid>
      </Grid>
    </Container>
  );
};

const Item: React.FC<BoxTYpes> = ({ boxID }) => {
  return (
    <Typography
      sx={{
        backgroundColor: "#ccc",
        border: "1px solid #aaa",
        py: 4,
        px: { xs: 1, md: 4 },
        borderRadius: 2,
      }}
    >{`Box ${boxID}`}</Typography>
  );
};

export default GridExercise;
