import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

interface ThProps {
  dateToConvert: string;
}

const Th: React.FC<ThProps> = ({ dateToConvert }) => {
  const [finishedDate, setFinishedDate] = useState('');

  useEffect(() => {
    function loadDate() {
      const parsedDate = parseISO(dateToConvert);

      const formatDate = format(parsedDate, 'd MMM yyyy', { locale: pt })
      setFinishedDate(formatDate);
    }

    loadDate();
  }, [dateToConvert])
  
  return (
    <>
    <td data-label="Previsão de Conclusão">
      {finishedDate}
    </td>
    </>
  );
}

export default Th;