const express = require('express');
const router = express.Router();

router.get('/view-info', (req, res) => {
  res.status(200).json({
    payload: {
      address: {
        phone: '733233445',
        cellPhone: '4746574',
        email: 'example@gmail.com',
        location: '',
      },
      schedule: [
        { day: 'Lunes', time: '' },
        { day: 'Martes', time: '' },
        { day: 'Miercoles', time: '' },
        { day: 'Jueves', time: '' },
        { day: 'Viernes', time: '' },
      ],
      map: {},
      socialMedia: [
        {
          name: 'Facebook',
          link: '',
          icon: '',
        },
        {
          name: 'WhatsApp',
          link: '',
          icon: '',
        },
        {
          name: 'Instagram',
          link: '',
          icon: '',
        },
      ],
    },
  });
});

module.exports = router;
