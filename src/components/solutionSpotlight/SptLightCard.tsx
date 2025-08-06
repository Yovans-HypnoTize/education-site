import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LazyBoxImage from "../LazyBoxImage";
import LazyImage from "../LazyImage";

type Variant = "vertical" | "horizontal";
type ImgVariant = "left" | "right";

export interface SpotlightCardItem {
  id: string | number;
  title: string;
  content: string;
  points?: string[];
  img: string;
  variant: Variant;
  imgVariant?: ImgVariant;
}

interface SpotLightCardProps {
  items: SpotlightCardItem[];
}

const SptLightCard: React.FC<SpotLightCardProps> = ({ items }) => {
  return (
    <Box>
      <Grid container spacing={6} justifyContent={"center"}>
        {items.map((item, idx) => (
          <Grid
            key={idx}
            size={
              item.variant === "vertical"
                ? { xs: 12, sm: 6, md: 4 }
                : { xs: 12, md: 8 }
            }
            sx={{ display: "flex" }}
          >
            {item.variant === "horizontal" ? (
              <Grid
                container
                sx={{
                  borderRadius: { xs: 3, sm: 7 },
                  bgcolor: "#daf5fe",
                  minHeight: { xs: 300, md: 350 },
                }}
                spacing={{ xs: 0, sm: 2 }}
              >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LazyBoxImage
                      src={item.img}
                      alt={`${item.img}_${idx}`}
                      sx={{
                        height: { xs: 200, md: 250},
                        width: { xs: "100%", md: "90%" },
                        borderRadius: { xs: 1, sm: 5 },
                        ml:3
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 } }}
                >
                  <Typography sx={{ fontWeight: "bold", mt: { xs: 2, sm: 7 } }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>{item.content}</Typography>
                  {item?.points?.map((point) => (
                    <Box sx={{ display: "flex" }}>
                      <FiberManualRecordIcon
                        sx={{ fontSize: 12, mr: 1, mt: 1 }}
                      />
                      <Typography>{point}</Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            ) : (
              <Box
                sx={{
                  boxShadow: "0px 4px 12px #0000001F",
                  borderRadius: { xs: 3, sm: 7 },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box>
                  <LazyImage
                    src={item.img}
                    alt={`${item.img}_${idx}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box sx={{ px: 3, py: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>{item.content}</Typography>
                  {item?.points?.map((point) => (
                    <Box key={point} sx={{ display: "flex", mt: 0.5 }}>
                      <FiberManualRecordIcon
                        sx={{ fontSize: 12, mr: 1, mt: 1 }}
                      />
                      <Typography>{point}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SptLightCard;
