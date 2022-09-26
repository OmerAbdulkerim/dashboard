import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
} from '@mui/material';
import { Chat, Mic, Folder } from '@mui/icons-material';

const ChannelsChart = (props) => {
  Chart.register(ArcElement);
  const data = {
    datasets: [
      {
        data: [109, 23, 18],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 2,
        borderColor: '#1e1f24',
        hoverBorderColor: colors.common.white,
      }
    ],
    labels: ['Text', 'Voice', 'Category']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    color: 'white',
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: 'background.paper',
      bodyFontColor: 'text.secondary',
      borderColor: 'palette.divider',
      borderWidth: 1,
      enabled: true,
      footerFontColor: 'text.secondary',
      intersect: false,
      mode: 'index',
      titleFontColor: 'text.primary'
    }
  };

  const devices = [
    {
      title: 'Text',
      value: 109,
      icon: Chat,
      color: colors.indigo[500]
    },
    {
      title: 'Voice',
      value: 23,
      icon: Mic,
      color: colors.red[600]
    },
    {
      title: 'Category',
      value: 18,
      icon: Folder,
      color: colors.orange[600]
    }
  ];

  return (
    <Card {...props} sx={{background: 'rgba(135, 119, 127, 0.15)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}>
      <CardHeader title="Channels" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center',
                paddingLeft: '2rem',
                paddingRight: '2rem'
              }}
            >
              <Icon color="white" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChannelsChart;
