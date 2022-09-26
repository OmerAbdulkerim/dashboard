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
import { ConfirmationNumber, Http, AttachMoney, AccountBalanceWallet } from '@mui/icons-material/';

const TicketsChart = (props) => {
  Chart.register(ArcElement);
  const data = {
    datasets: [
      {
        data: [10, 10, 10, 15],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.green[600]
        ],
        borderWidth: 3,
        borderColor: '#1e1f24',
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['General', 'Website', 'NFT', 'Wallet Linking']
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
      title: 'General',
      value: 10,
      icon: ConfirmationNumber,
      color: colors.indigo[500]
    },
    {
      title: 'Website',
      value: 10,
      icon: Http,
      color: colors.red[600]
    },
    {
      title: 'NFT',
      value: 10,
      icon: AttachMoney,
      color: colors.orange[600]
    },
    {
      title: 'Wallets',
      value: 15,
      icon: AccountBalanceWallet,
      color: colors.green[600]
    }
  ];

  return (
    <Card {...props} sx={{background: 'rgba(135, 119, 127, 0.15)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}>
      <CardHeader title="Tickets" />
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
            pt: 2,
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

export default TicketsChart;
