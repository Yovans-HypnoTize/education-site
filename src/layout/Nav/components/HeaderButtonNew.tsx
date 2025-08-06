import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import icons8explosion from "../../../assets/icons8-firework-explosion.gif";

interface HeaderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: any;
  handleMouseEnterOnNavBtn: (e:any, item:any) => void;
  handleMouseLeaveOnNavBtn: (e:any) => void;
}

const HeaderButtonNew: React.FC<HeaderButtonProps> = ({ item,handleMouseEnterOnNavBtn,handleMouseLeaveOnNavBtn, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useMemo(() => {
    if (item.content && Array.isArray(item.content)) {
      return item.content.some((subItem: any) =>
        location.pathname.includes(subItem.id)
      );
    }

    if (item.path && location.pathname.includes(item.path)) {
      return true;
    }

    return false;
  }, [item, location.pathname]);

  const gradientStyle = {
    background:
      "linear-gradient(115deg, #00B9F1 0%, #EC008B 56%, #FFCB05 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <button
      {...rest}
      className="menu-label-button"
      style={{
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
        padding: "8px 0px",
        backgroundColor: "transparent",
        fontSize: 16,
        position: "relative",
      }}
    //   onMouseOver={(e) => handleMouseEnterOnNavBtn(e, item)}
    //   onMouseLeave={(e) => handleMouseLeaveOnNavBtn(e)}
      
    >
      {/* {item?.type === "directMenu" ? (
        <>
          {item.id === 6 ? (
            <>
              <Box
                component={"img"}
                src={icons8explosion}
                sx={{
                  position: "absolute",
                  zIndex: -1,
                  left: -5,
                  height: 50,
                  width: 50,
                }}
              />
              <Box
                component={"span"}
                sx={{
                  marginTop: "-3px",
                  cursor: "pointer",
                  padding: "6px 12px",
                  border: 2,
                  borderColor: "#1976d2",
                  borderRadius: "8px",
                  color: "#1976d2",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "rgba(219, 219, 219, 0.2)",
                    boxShadow: "1px 2px 2px rgba(0,0,0, 0.2)",
                  },
                }}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.label}
              </Box>
            </>
          ) : (
            <span
              style={
                location.pathname.endsWith(item.path)
                  ? { ...gradientStyle, marginTop: "4px", cursor: "pointer" }
                  : { color: "#000", marginTop: "4px", cursor: "pointer" }
              }
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.label}
            </span>
          )}
        </>
      ) : (
        <span style={isActive ? { ...gradientStyle } : { color: "#000" }}>
          {item.label}
        </span>
      )}
      {(item?.type === "dropDownMenu" || item?.type == "dropDown") && (
        <Box sx={{ mt: 0.6 }}>
          <KeyboardArrowDownIcon
            fontSize="inherit"
            sx={{ color: isActive ? "#EC008B" : "#000" }}
          />
        </Box>
      )} */}

      {item.label} {(item?.type === "dropDownMenu" || item?.type == "dropDown") && (
        <Box sx={{ mt: 0.6 }} component={"span"}>
          <KeyboardArrowDownIcon
            fontSize="inherit"
            sx={{ color: isActive ? "#EC008B" : "#000" }}
          />
        </Box>
      )} 
    </button>
  );
};

export default HeaderButtonNew;
