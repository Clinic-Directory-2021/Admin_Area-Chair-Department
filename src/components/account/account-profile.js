import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/static/images/avatars/adrian.jpg',
  city: 'Kahit Saan',
  country: 'USA',
  name: 'Adrian Magpayo',
  timezone: '69'
};

export const AccountProfile = (props) => (
  <Card {...props} style={{boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"}}>
  
    <CardContent>
      <Box
        sx={{
          
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
          
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 272,
            mb: 2,
            width: 272
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions  >
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
