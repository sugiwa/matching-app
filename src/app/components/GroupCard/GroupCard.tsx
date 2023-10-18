import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NoImage from "public/no_image.png";

const GroupCard = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <Image src={NoImage} width={200} height={100} alt="no image" />
      <CardContent>
        <Typography gutterBottom variant="body1">
          Group1
        </Typography>
        <Typography variant="body2" className="truncate">
          testtesttestetesttesttesttesttesttestetesttesttest
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">button</Button>
      </CardActions>
    </Card>
  );
};
export default GroupCard;
