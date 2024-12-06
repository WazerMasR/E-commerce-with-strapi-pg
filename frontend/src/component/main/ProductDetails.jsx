import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs: "column", sm: "row"},
        alignItems: "center",
        gap: 2.5,
      }}
    >
      <Box
      sx={{
        display: "flex"
      }}
      >
        <img width={400} src="src/imges/final.png" alt="" />
      </Box>
      <Box
      sx={{
        textAlign: {xs: "center", sm: "left"}
        }}
      >
        <Typography variant="h5">WOMEN&apos;S FASHION</Typography>
        <Typography
          my={0.4}
          variant="body1"
          fontSize={"22px"}
          color={"crimson"}
        >
          12.99$
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          tempora cupiditate reprehenderit blanditiis dolores laudantium invmodi
          ipsum?
        </Typography>

        <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} alignItems={"center"} gap={1} my={2}>
          {["src/imges/final.png", "src/imges/images.jpg"].map((item) => {
            return( 

              <img style={{borderRadius: 3}} key={item} width={90} height={100} src={item} alt="" />
            )
          })}
        </Stack>

        <Button 
        sx={{
          mb: {xs: 1, sm: 0},
          textTransform: "capitalize",
        }}
        variant="contained"
        >
          <AddShoppingCartOutlined 
          sx={{mr: 1}}
          fontSize="small"
          />
          buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
