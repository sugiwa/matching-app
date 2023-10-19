import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NoImage from "public/no_image.png";

type Props = {
  name: string;
  description: string;
};

const GroupCard = ({ name, description }: Props) => {
  return (
    <Card sx={{ maxWidth: 200, margin:"10px" }}>
      <Image src={NoImage} width={200} height={100} alt="no image" />
      <CardContent>
        <Typography gutterBottom variant="body1">
          {name}
        </Typography>
        <Typography variant="body2" className="truncate">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">button</Button>
      </CardActions>
    </Card>
  );
};
export default GroupCard;
