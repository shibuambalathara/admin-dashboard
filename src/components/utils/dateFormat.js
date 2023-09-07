import format from 'date-fns/format'
export const FormatDate = (dateString) => {
    return format(new Date(dateString), 'dd/MM/yy, HH:mm');
  };