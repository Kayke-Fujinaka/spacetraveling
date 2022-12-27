const { format } = require('date-fns');

export const formattedDate = date => format(new Date(date), 'dd MMM Y');
