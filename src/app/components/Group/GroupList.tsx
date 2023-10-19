import { Box } from "@mui/material";
import GroupCard from "./GroupCard";

const groupList = [
  {
    name: "Group1",
    description: "testtesttesttesttesttesttesttest",
  },
  {
    name: "Group2",
    description: "testtesttesttesttesttesttesttest",
  },
  {
    name: "Group3",
    description: "testtesttesttesttesttesttesttest",
  },
];

const GroupList = () => {
  return (
    <Box
      sx={{
        padding: "0 20px",
        display: "flex",
        flex: "1",
        backgroundColor: "#DDFFFF",
        border: "1px #EEEEEE solid",
      }}
    >
      {groupList.map((group, i) => (
        <GroupCard key={i} name={group.name} description={group.description} />
      ))}
    </Box>
  );
};
export default GroupList;
