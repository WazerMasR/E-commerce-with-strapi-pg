import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../Redux/Product";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    setData(newValue);
  };

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProducts = "products?populate=*";
  const menCategoryApi = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryApi = "products?populate=*&filters[category][$eq]=women";

  const [mydata, setData] = useState(allProducts);
  const { data, error, isLoading } = useGetProductByNameQuery(
    mydata
  );

  if (isLoading) {
    return <Typography variant="h6">LOADING....</Typography>;
  }

  if (error) {
    return (
      <Typography variant="h6">
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }


  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            value={mydata}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "2px solid #1f2937 !important",
                borderRadius: "8px !important",
                color: "#E9EDF8 !important",
                backgroundColor: "#1f2937 !important",
              },
            }}
          >
            <ToggleButton
              sx={{
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={allProducts}
              aria-label="left aligned"
            >
              all products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menCategoryApi}
              aria-label="centered"
            >
              men category
            </ToggleButton>
            <ToggleButton
              sx={{
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={womenCategoryApi}
              aria-label="right aligned"
            >
              women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  position: "relative",
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.3s",
                  },
                  ":hover .MuiBox-root": {
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 277,
                  }}
                  // @ts-ignore
                  image={`${
                    item.productImage[0].url
                  }`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mt={3}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      {item.productPrice} $
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.productDescription}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "capitalize",
                    }}
                    size="large"
                  >
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    add to cart
                  </Button>

                  <Rating
                    name="read-only"
                    value={item.productRating}
                    readOnly
                    precision={0.1}
                  />
                </CardActions>

                <Box sx={{ display: "none" }} className="eyeIcon">
                  <IconButton onClick={handleClickOpen}>
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
              color: "#000",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
