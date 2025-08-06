import { Box, Button, Grid, Typography } from "@mui/material";
import resourcePreviewImage from "../../../assets/resource/resourcePreviewImage.png";
import priceTagIcon from "../../../assets/resource/featured/priceTagIcon.png";
import FeaturedBlogCard from "../../../components/resource-components/FeaturedBlogCard";
import { useEffect, useState } from "react";

// import cardImage_1 from "../../../assets/resource/cardImages/cardImage_1.png";
// import cardImage_2 from "../../../assets/resource/cardImages/cardImage_2.png";
// import cardImage_3 from "../../../assets/resource/cardImages/cardImage_3.png";
// import cardImage_4 from "../../../assets/resource/cardImages/cardImage_4.png";
// import cardImage_5 from "../../../assets/resource/cardImages/cardImage_11.jpeg";
// import cardImage_12 from "../../../assets/resource/cardImages/cardImage_12.png";
// import cardImage_13 from "../../../assets/resource/cardImages/cardImage_13.jpeg";
// import cardImage_14 from "../../../assets/resource/cardImages/cardImage_14.jpeg";
// import cardImage_15 from "../../../assets/resource/cardImages/cardImage_15.jpeg";

// import cardImage_1 from "../../../assets/resource/cardImages/BlogPageImages/1.svg";
// import cardImage_2 from "../../../assets/resource/cardImages/BlogPageImages/2.svg";
// import cardImage_3 from "../../../assets/resource/cardImages/BlogPageImages/3.svg";
// import cardImage_4 from "../../../assets/resource/cardImages/BlogPageImages/4.svg";
// import cardImage_5 from "../../../assets/resource/cardImages/BlogPageImages/5.svg";
// import cardImage_6 from "../../../assets/resource/cardImages/BlogPageImages/6.svg";
// import cardImage_7 from "../../../assets/resource/cardImages/BlogPageImages/7.svg";
// import cardImage_8 from "../../../assets/resource/cardImages/BlogPageImages/8.svg";
// import cardImage_9 from "../../../assets/resource/cardImages/BlogPageImages/9.svg";
// import cardImage_10 from "../../../assets/resource/cardImages/BlogPageImages/10.svg";

import RoleTypeCard from "../../../components/resource-components/RoleTypeCard";
import startFreeTrailImage from "../../../assets/resource/startFreeTrailImage.png";
import ReuGradientButton from "../../../components/common-reusable-components/ReuGradientButton";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../../components/LazyImage";
import { blogCardImage } from "../../../utils/ImageContainer";

interface ChildCard {
  date: string;
  content: string;
  badges: Badge[];
  caption: string;
}

interface MainCard {
  img: string;
}

interface Badge {
  badgeLabel: string;
  badgeIcon: string;
}

interface FeaturedBlogCardProps {
  id: number | string;
  mainCard: MainCard;
  childCard: ChildCard;
}

const featuredBlogs: FeaturedBlogCardProps[] = [
  {
    id: "student-information-system-what-it-is-how-it-helps-schools",
    mainCard: {
      img: blogCardImage.cardImage_1,
    },
    childCard: {
      date: "Jan 29, 2025",
      content: "Student Information System: What It Is & How It Helps Schools",
      badges: [
        {
          badgeLabel: "Student",
          badgeIcon: priceTagIcon,
        },
        {
          badgeLabel: "Staff",
          badgeIcon: priceTagIcon,
        },
      ],
      caption: "Read more >",
    },
  },
  {
    id: "the-impact-of-multilingual-erp-software-on-international-schools",
    mainCard: {
      img: blogCardImage.cardImage_2,
    },
    childCard: {
      date: "Dec 12, 2024",
      content:
        "The Impact of Multilingual ERP Software on International Schools",
      badges: [
        {
          badgeLabel: "Student",
          badgeIcon: priceTagIcon,
        },
        {
          badgeLabel: "Staff",
          badgeIcon: priceTagIcon,
        },
      ],
      caption: "Read more >",
    },
  },
  {
    id: "the-role-of-fee-and-financial-management-in-school-success",
    mainCard: {
      img: blogCardImage.cardImage_3,
    },
    childCard: {
      date: "Dec 6, 2024",
      content: "The Role of Fee and Financial Management in School Success",
      badges: [
        {
          badgeLabel: "Student",
          badgeIcon: priceTagIcon,
        },
        {
          badgeLabel: "Staff",
          badgeIcon: priceTagIcon,
        },
      ],
      caption: "Read more >",
    },
  },
  {
    id: "why-your-school-needs-a-student-performance-tracking-system",
    mainCard: {
      img: blogCardImage.cardImage_4,
    },
    childCard: {
      date: "Dec 4, 2024",
      content: "Why Your School Needs a Student Performance Tracking System",
      badges: [
        {
          badgeLabel: "Student",
          badgeIcon: priceTagIcon,
        },
        {
          badgeLabel: "Staff",
          badgeIcon: priceTagIcon,
        },
      ],
      caption: "Read more >",
    },
  },
];

interface RoleTypeCards {
  id: string | number;
  img: string;
  date: string;
  title: string;
  content: string;
  author: string;
}

const roleTypeCards: RoleTypeCards[] = [
  {
    id: "student-information-system-what-it-is-how-it-helps-schools",
    img: blogCardImage.cardImage_1,
    date: "January 29, 2025",
    title: "Student Information System: What It Is & How It Helps Schools",
    content:
      "Imagine a school day where everything runs seamlessly. Parents are instantly notified of ",
    author: "Harshan Rajendran",
  },
  {
    id: "the-impact-of-multilingual-erp-software-on-international-schools",
    img: blogCardImage.cardImage_2,
    date: "December 12, 2024",
    title: "The Impact of Multilingual ERP Software on International Schools",
    content:
      "Is language diversity creating challenges in your school’s management? In international schools, language diversity",
    author: "Harshan Rajendran",
  },
  {
    id: "the-role-of-fee-and-financial-management-in-school-success",
    img: blogCardImage.cardImage_3,
    date: "December 6, 2024",
    title: "The Role of Fee and Financial Management in School Success",
    content:
      "How well does your school manage its finances, and how does this impact",
    author: "Harshan Rajendran",
  },
  {
    id: "why-your-school-needs-a-student-performance-tracking-system",
    img: blogCardImage.cardImage_4,
    date: "December 4, 2024 ",
    title: "Why Your School Needs a Student Performance Tracking System",
    content:
      "Is your school equipped to truly understand each student’s progress and challenges? In today’s",
    author: "Harshan Rajendran",
  },
  {
    id: "Top-10-Benefits-of-ERP-Software-for-Educational-Institute-Growth-in-2025",
    img: blogCardImage.cardImage_5,
    date: "June 10, 2025 ",
    title:
      "Top 10 Benefits of ERP Software for Educational Institute Growth in 2025",
    content:
      "In 2025, the way schools and colleges operate is changing fast. More institutions are using smart tools",
    author: "Harshan Rajendran",
  },
  {
    id: "Education-ERP-Software",
    img: blogCardImage.cardImage_6,
    date: "June 16, 2025 ",
    title: "Education ERP Software | Manage Students, Staff & Academics Easily",
    content:
      "In most schools and colleges, managing daily tasks still involves a mix of paperwork, spreadsheets, and disconnected systems. This traditional way of working often leads to delays, errors, and staff burnout. As institutions grow, these manual processes become harder to handle and take valuable time away from what matters most: education.",
    author: "Harshan Rajendran",
  },
  {
    id: "best-ERP-software-for-schools",
    img: blogCardImage.cardImage_7,
    date: "June 16, 2025 ",
    title:
      "Best ERP Software for Schools in 2025 | Smart Guide to Choosing the Right Vendor",
    content:
      "Discover the best ERP software for your school in 2025. Learn must-have features, compare vendors, and find the perfect solution to automate your campus with ease.",
    author: "Harshan Rajendran",
  },
  {
    id: "ai-powered-ERP-education",
    img: blogCardImage.cardImage_8,
    date: "July 07, 2025 ",
    title: "AI-Powered ERP for Education: Transforming Schools in 2025",
    content:
      "Discover how AI-powered ERP systems are changing schools in 2025—boosting efficiency, improving learning, and simplifying education management.",
    author: "Harshan Rajendran",
  },
  {
    id: "best-ai-powered-ERP",
    img: blogCardImage.cardImage_9,
    date: "July 11, 2025 ",
    title:
      "Transform Your School in 2025 with the Best AI-Powered ERP | Edumaat",
    content:
      "Discover how AI-powered ERP can help your school save time, improve learning, and stay ahead in 2025. Explore smart features, real benefits, and why Edumaat is the best choice for modern schools.",
    author: "Harshan Rajendran",
  },
  {
    id: "modern-lms-delivers-better-results",
    img: blogCardImage.cardImage_10,
    date: "August 04, 2025 ",
    title:
      "Smarter Learning in 2025: Benefits of a Modern LMS for Schools & Colleges",
    content:
      "See how a smart LMS makes learning easier for students, saves time for teachers, and helps schools grow in 2025. EDUMAAT gives real results that work.",
    author: "Harshan Rajendran",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [loadMore, setLoadMore] = useState(false);

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredBlogs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredBlogs.length]);

  return (
    <>
      <title>
        Edumaat Blog – Insights on Education ERP, Trends & Technology
      </title>
      <meta
        name="description"
        content="Explore Edumaat blogs for expert insights on education ERP software, digital transformation in institutions, smart management tips, and more."
      />
      <meta
        name="keywords"
        content="education ERP blog, school management software articles, Edumaat updates, smart education systems, institutional ERP insights"
      />
      <meta name="author" content="Edumaat" />

      <Box sx={{ pl: { lg: 8, xs: 4 }, pr: { lg: 8, xs: 4 } }}>
        <div className="resource-container">
          <div>
            <Grid container spacing={8}>
              <Grid
                size={{ sm: 6, xs: 12 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", fontSize: { xs: 25, md: 55 } }}
                  >
                    Know more about Edumaat & our working system
                  </Typography>
                  <Typography variant="body1" color="initial" sx={{ mt: 5 }}>
                    Discover how Edumaat empowers educational institutions with
                    intelligent, flexible, and future-ready ERP
                    solutions—designed to simplify workflows, enhance
                    transparency, and drive smarter decision-making across every
                    level of academic and administrative operations.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ sm: 6, xs: 12 }}>
                <LazyImage
                  src={resourcePreviewImage}
                  alt="resourcePreviewImage "
                  className="resource-preview-img"
                />
              </Grid>
            </Grid>
          </div>

          <section>
            <Box
              sx={{
                mt: 10,
                mb: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Featured blogs
              </Typography>
              <Box sx={{ mr: { sm: 10 } }}>
                {featuredBlogs.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      mx: 0.5,
                      minWidth: 20,
                      height: 10,
                      borderRadius: 3,
                      backgroundColor:
                        activeIndex === index ? "#5580FF" : "#EDF2FF",
                      "&:hover": {
                        backgroundColor: "#5580FF",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box>
              <FeaturedBlogCard item={featuredBlogs[activeIndex]} />
            </Box>
          </section>

          <section>
            <Box sx={{ py: 3, px: { lg: 12 }, mt: { xs: 8, sm: 0 } }}>
              <Typography
                sx={{
                  textAlign: "center",
                  my: 5,
                  fontWeight: 700,
                  fontSize: 32,
                }}
              >
                Insights & Updates
              </Typography>

              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid size={{ xs: 12 }}>
                  <RoleTypeCard
                    cardItems={[...roleTypeCards]
                      .reverse()
                      .slice(0, loadMore ? roleTypeCards.length - 1 : 6)}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => setLoadMore(!loadMore)}
              >
                <Typography>
                  {loadMore ? (
                    <Box
                      component={"span"}
                      sx={{ textDecoration: "underline" }}
                    >
                      Load less
                    </Box>
                  ) : (
                    " Load More..."
                  )}
                </Typography>
              </Box>
            </Box>
          </section>

          <Box sx={{ my: 3, position: "relative" }}>
            <Box
              component={"img"}
              src={startFreeTrailImage}
              alt="start free trail image"
              sx={{
                width: { xs: "100%" },
                height: { xs: "320px", md: "370px", lg: "450px", xl: "570px" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { xl: 140, sm: 85, xs: 75 },
                left: { lg: 60, sm: 40, xs: 15 },
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ fontSize: { lg: 28, sm: 22, xs: 16 }, mt: { lg: 4 } }}
              >
                Ready to start your free trail?
              </Typography>
              <Box
                sx={{ width: { xs: "55%", sm: "65%", md: "70%", xl: "100%" } }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      md: 20,
                      sm: 14,
                      xs: 12,
                      fontWeight: { md: 600, xs: 300 },
                    },
                    mt: 2,
                  }}
                >
                  Let your team explore Edumaat’s full potential — from smart
                  analytics to seamless
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      md: 20,
                      sm: 14,
                      xs: 12,
                      fontWeight: { md: 600, xs: 300 },
                    },
                  }}
                >
                  communication — and start simplifying your operations today.
                </Typography>
              </Box>
              <Box mt={{ md: 4, xs: 2 }}>
                <ReuGradientButton
                  key={"Blogs Book Now"}
                  variant="contained"
                  sx={{ px: { sm: 9, xs: 1 }, py: { sm: 1, xs: 0.3 } }}
                  type="submit"
                  onClick={handleBookFreeDemo}
                >
                  Book Now
                </ReuGradientButton>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Blogs;
