import { Box, Grid, Card, CardContent, Typography, CardActions, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const dummyData = {
    userStats: {
      users: 1250,
      activeUsers: 800,
      newUsers: 120,
    },
    revenue: {
      totalRevenue: '$35,000',
      monthlyRevenue: '$2,500',
    },
    recentActivities: [
      { id: 1, activity: 'User John Doe signed up', time: '2 hours ago' },
      { id: 2, activity: 'User Jane Smith purchased a product', time: '1 day ago' },
      { id: 3, activity: 'New blog post published', time: '3 days ago' },
    ],
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/'); 
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleLogout}
        sx={{ marginBottom: 2 }}
      >
        Log Out
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">User Statistics</Typography>
              <Typography variant="body1">Total Users: {dummyData.userStats.users}</Typography>
              <Typography variant="body1">Active Users: {dummyData.userStats.activeUsers}</Typography>
              <Typography variant="body1">New Users: {dummyData.userStats.newUsers}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">View Details</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="body1">Total Revenue: {dummyData.revenue.totalRevenue}</Typography>
              <Typography variant="body1">Monthly Revenue: {dummyData.revenue.monthlyRevenue}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">View Details</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Recent Activities</Typography>
              {dummyData.recentActivities.map(activity => (
                <Box key={activity.id} sx={{ marginBottom: 2 }}>
                  <Typography variant="body2">{activity.activity}</Typography>
                  <Typography variant="caption" color="textSecondary">{activity.time}</Typography>
                  <Divider sx={{ marginY: 1 }} />
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">View All</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
