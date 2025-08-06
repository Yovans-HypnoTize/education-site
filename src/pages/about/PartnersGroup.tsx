import { Box, Typography } from "@mui/material";
import ReuTabs from "../../components/common-reusable-components/ReuTabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersSlider from "../../components/PartnersSlider";

const PartnersGroup = () => {
  const partnersGroupTabItems = [
    {
      id: 1,
      title: "Indian Clients",
      children: {
        left: {
          img: "",
        },
        right: {
          heading: "",
          points: [
            { id: "Veda Niketan", title: "Veda Niketan" },
            { id: "Queen School", title: "Queen School" },
            { id: "Don Bosco", title: "Don Bosco" },
            { id: "Maya College", title: "Maya College" },
            { id: "Mount Zion School", title: "Mount Zion School" },
            { id: "Gestro Hotel Management", title: "Gestro Hotel Management" },
            {
              id: "St.Antony Group of school",
              title: "St.Antony Group of school",
            },
            { id: "C.M Annamalaiyar", title: "C.M Annamalaiyar" },
            {
              id: "Jagriti School for Blind Girls",
              title: "Jagriti School for Blind Girls",
            },
            { id: "Pelicans experts ", title: "Pelicans experts " },
            {
              id: "IIFA Lancaster Degree College ",
              title: "IIFA Lancaster Degree College ",
            },
            {
              id: "Jaycee Higher Primary School ",
              title: "Jaycee Higher Primary School ",
            },
            { id: "Jagran Prakshan", title: "Jagran Prakshan" },
            {
              id: "Reserve Bank STAFF Quarters",
              title: "Reserve Bank STAFF Quarters",
            },
            { id: "Jack & Jill", title: "Jack & Jill" },
            {
              id: "Queen College of Food Technology",
              title: "Queen College of Food Technology",
            },
            { id: "Akankksha Academy", title: "Akankksha Academy" },
            { id: "Balakrishna High School", title: "Balakrishna High School" },
            { id: "Sri Ranga Boopathy", title: "Sri Ranga Boopathy" },
            {
              id: "Entrepreneurship Development Institute of India",
              title: "Entrepreneurship Development Institute of India",
            },
            {
              id: "Maheshwara Medical College and Hospital",
              title: "Maheshwara Medical College and Hospital",
            },
            {
              id: "Apple Valley Special School For Special Children",
              title: "Apple Valley Special School For Special Children",
            },
            {
              id: "Jaya Vasavi Matriculation School",
              title: "Jaya Vasavi Matriculation School",
            },
            {
              id: "Thirukovilur College of Arts and Science",
              title: "Thirukovilur College of Arts and Science",
            },
            { id: "Green Valley School", title: "Green Valley School" },
            {
              id: "BGS Science Academy and Research centre",
              title: "BGS Science Academy and Research centre",
            },
            {
              id: "Exterior & Interior Traning Institution",
              title: "Exterior & Interior Traning Institution",
            },
            { id: "Islamic Welfare society", title: "Islamic Welfare society" },
            {
              id: "Indian Institute of Food Processing Technology",
              title: "Indian Institute of Food Processing Technology",
            },
            {
              id: "Quest International School",
              title: "Quest International School",
            },
            {
              id: "Creative Multimedia Educational Society",
              title: "Creative Multimedia Educational Society",
            },
            { id: "GSL Medical College", title: "GSL Medical College" },
            {
              id: "Regenesys Business School",
              title: "Regenesys Business School",
            },
            {
              id: "Ananth Centre For Learning And Development",
              title: "Ananth Centre For Learning And Development",
            },
            { id: "Carmel Hign school", title: "Carmel Hign school" },
            {
              id: "Sri Maruthi Vidyalaya Nursery and Primary school",
              title: "Sri Maruthi Vidyalaya Nursery and Primary school",
            },
            { id: "Ion tach academy", title: "Ion tach academy" },
            { id: "Kidzee School", title: "Kidzee School" },
            { id: "Chettinad Vidyashram", title: "Chettinad Vidyashram" },
            {
              id: "Vetri Polytechnic College",
              title: "Vetri Polytechnic College",
            },
            {
              id: "Sree Abirami College of Nursing & Hospital",
              title: "Sree Abirami College of Nursing & Hospital",
            },
            {
              id: "Shraddha Institute Of Career Development",
              title: "Shraddha Institute Of Career Development",
            },
            { id: "Modern High School", title: "Modern High School" },
            {
              id: "Asian Institute of Event Management Private Limited",
              title: "Asian Institute of Event Management Private Limited",
            },
            { id: "Little Flower School", title: "Little Flower School" },
            {
              id: "Sri Krish International School",
              title: "Sri Krish International School",
            },
            {
              id: "Sri Sairam Public school",
              title: "Sri Sairam Public school",
            },
            {
              id: "Bhaktanandji Institute Of Medical Science (Nursing)",
              title: "Bhaktanandji Institute Of Medical Science (Nursing)",
            },
            { id: "Mount Litera School", title: "Mount Litera School" },
            {
              id: "Uttaranchal Dental And Medical Research Institute",
              title: "Uttaranchal Dental And Medical Research Institute",
            },
            {
              id: "StonePille online Construction",
              title: "StonePille online Construction",
            },
            {
              id: "Uttaranchal Dental And Medical Research Institute",
              title: "Uttaranchal Dental And Medical Research Institute",
            },
            {
              id: "Proudha Devaraya Institute of Technology (P.D.I.T) Engineering College",
              title:
                "Proudha Devaraya Institute of Technology (P.D.I.T) Engineering College",
            },
            {
              id: "ADAB Internation English Public School",
              title: "ADAB Internation English Public School",
            },
            {
              id: "Pyramid College of business and Technology",
              title: "Pyramid College of business and Technology",
            },
            // "Veda Niketan",
            // "Queen School",
            // "Don Bosco",
            // "Maya College",
            // "Mount Zion School ",
            // "Gestro Hotel Management",
            // "St.Antony Group of school",
            // "C.M Annamalaiyar",
            // "Jagriti School for Blind Girls ",
            // "Pelicans experts ",
            // "IIFA Lancaster Degree College",
            // "Jaycee Higher Primary School",
            // "Jagran Prakshan",
            // "Reserve Bank STAFF Quarters",
            // "Jack & Jill",
            // "Queen College of Food Technology",
            // "Akankksha Academy",
            // "Balakrishna High School",

            // "Sri Ranga Boopathy",
            // "Entrepreneurship Development Institute of India",
            // "Maheshwara Medical College and Hospital",
            // "Apple Valley Special School For Special Children",
            // "Jaya Vasavi Matriculation School",
            // "Thirukovilur College of Arts and Science",
            // "Green Valley School",
            // "BGS Science Academy and Research centre",
            // "Exterior & Interior Traning Institution",
            // "Islamic Welfare society",
            // "Indian Institute of Food Processing Technology",
            // "Quest International School",
            // "Creative Multimedia Educational Society",
            // "GSL Medical College",
            // "Regenesys Business School",
            // "Ananth Centre For Learning And Development",
            // "Carmel Hign school",
            // "Sri Maruthi Vidyalaya Nursery and Primary school",
            // "Ion tach academy",
            // "Kidzee School",
            // "Chettinad Vidyashram",
            // "Vetri Polytechnic College",
            // "Sree Abirami College of Nursing & Hospital",
            // "Shraddha Institute Of Career Development",
            // "Modern High School",
            // "Asian Institute of Event Management Private Limited",
            // "Little Flower School",
            // "Sri Krish International School",
            // "Sri Sairam Public school",
            // "Bhaktanandji Institute Of Medical Science (Nursing)",
            // "Mount Litera School",
            // "StonePille online Construction",
            // "Uttaranchal Dental And Medical Research Institute",
            // "Proudha Devaraya Institute of Technology (P.D.I.T) Engineering College",
            // "ADAB Internation English Public School",
            // "Pyramid College of business and Technology",
          ],
        },
      },
    },
    {
      id: 2,
      title: "Global Clients",
      children: {
        left: {
          img: "",
        },
        right: {
          heading: "",
          points: [
            {
              id: "Al raneem private school",
              title: "Al raneem private school",
            },
            { id: "Disley Private school", title: "Disley Private school" },
            {
              id: "Kibidula_Agricultural_Training_Center",
              title: "Kibidula Agricultural Training Center",
            },
            {
              id: "Monika Kindergarden & Elementary School",
              title: "Monika Kindergarden & Elementary School",
            },
            {
              id: "Young Gemynds Primary school & Kindergarden",
              title: "Young Gemynds Primary school & Kindergarden",
            },
            { id: "Century Park College", title: "Century Park College" },
            {
              id: "Shwe Lar Ngwe Lar Co Ltd",
              title: "Shwe Lar Ngwe Lar Co Ltd",
            },
            {
              id: "Mindanao Arts and Technological Institute",
              title: "Mindanao Arts and Technological Institute",
            },
            {
              id: "Cromwell International Education UK",
              title: "Cromwell International Education UK",
            },
            {
              id: "Woodrose Internation School",
              title: "Woodrose Internation School",
            },
            {
              id: "National Institute of Technology",
              title: "National Institute of Technology",
            },
            {
              id: "Child Bilingual Institute",
              title: "Child Bilingual Institute",
            },
            { id: "Zan coastal academy", title: "Zan coastal academy" },
            { id: "Happy Haitian Haiti", title: "Happy Haitian Haiti" },
            {
              id: "Bethlehem Bible College ",
              title: "Bethlehem Bible College ",
            },
            { id: "St. Paul Academy", title: "St. Paul Academy" },
            {
              id: "DANBO International Schools",
              title: "DANBO International Schools",
            },
            {
              id: "Dbase Technologies Limited",
              title: "Dbase Technologies Limited",
            },
            {
              id: "MARYLAND PRESTIGIOUS INT'LSCHOOL",
              title: "MARYLAND PRESTIGIOUS INT'LSCHOOL",
            },
            { id: "COLÉGIO SHALOM", title: "COLÉGIO SHALOM" },
            { id: "KAG University", title: "KAG University" },
            {
              id: "Experiential Higher Institute of Science and Technology EXHIST ",
              title:
                "Experiential Higher Institute of Science and Technology EXHIST ",
            },
            // "Al raneem private school",
            // "Disley Private school",
            // "Kibidula_Agricultural_Training_Center",
            // "Monika Kindergarden & Elementary School",
            // "Young Gemynds Primary school & Kindergarden",
            // "Century Park College",
            // "Shwe Lar Ngwe Lar Co Ltd",
            // "Mindanao Arts and Technological Institute",
            // "Cromwell International Education UK",
            // "Woodrose Internation School",
            // "National Institute of Technology",
            // "Child Bilingual Institute",
            // "Zan coastal academy",
            // "Happy Haitian Haiti",
            // "Bethlehem Bible College",
            // "St. Paul Academy",
            // "DANBO International Schools",
            // "Dbase Technologies Limited",
            // "MARYLAND PRESTIGIOUS INT'LSCHOOL",
            // "COLÉGIO SHALOM",
            // "KAG University",
            // "Experiential Higher Institute of Science and Technology EXHIST",
          ],
        },
      },
    },
  ];

  return (
    <Box>
      <title>Partners Group | Edumaat</title>
      <meta
        name="description"
        content="Discover Edumaat’s vast network of Indian and global education partners and institutions. Explore how we collaborate for impactful solutions."
      />
      <meta
        name="keywords"
        content="Edumaat partners, Indian clients, global clients, educational partners, technology collaboration, Edumaat partnerships"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/partners-group" />

      <Box sx={{ px: { xs: 2, lg: 22 }, mt: { xs: 3 }, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 30, mb: 3 }}>
            Our Partners Group
          </Typography>
          <Typography>
            Together, we create powerful ecosystems. We collaborate with leading
            technology providers and integrators to deliver seamless,
            future-ready solutions.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#f6f7f9", p: 3 }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: 30, mb: 3, textAlign: "center" }}
        >
          Trusted by
        </Typography>
        <PartnersSlider />
      </Box>

      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: 20,
          textAlign: "center",
        }}
      >
        <ReuTabs
          tabItems={partnersGroupTabItems}
          variant="custom-card-box"
          showClickableCursor={false}
        />
      </div>
    </Box>
  );
};

export default PartnersGroup;
