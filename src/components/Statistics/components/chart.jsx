// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import moment from "moment";
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import {useSelector} from 'react-redux'
import { selectChekout, selectIsStarted, selectPrevChekout, selectFinishDate, selectStartDate } from '../../../redux/training/selectors'
import { ChartContainer } from '../style/statistic.styled';


export function Chart() {
//   export const selectChekout = state => state.training.checkout;
// export const selectIsStarted = state => state.traning.isStarted;
// export const selectPrevChekout = state => state.traning.prevChekout;
  const isStarted = useSelector(selectIsStarted)
  const timeOfTheFinish = useSelector(selectFinishDate)
  const timeOfTheStart = useSelector(selectStartDate)
  const checkout = useSelector(isStarted ? selectChekout : selectPrevChekout)
  const arrayForSort = [...checkout]

  arrayForSort.sort(function(a, b) {
      // Преобразуем в число для сравнения
      return Number.parseInt(a.unix) - Number.parseInt(b.unix);
    });
    let ourDay = 0; 
    if(isStarted){
    const now = new Date();
        const allDays =  moment.unix(timeOfTheFinish).diff(moment.unix(timeOfTheStart), 'days')
        const start = Date.parse(now)/1000
        const daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(start), 'days')
         ourDay = allDays - daysLeft + 1}

      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
             display: false,
            position: 'left',
          },
           border:{
        width: 810
      },
          title: {
            display: true,
            text: isStarted ? `КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ ${ourDay}` : "СТАТИСТИКА МИНУЛОГО ТРЕНУВАННЯ",
            position: 'top',
            align: 'start',
            padding: 20,
            font: {
              family: "Montserrat",
              size: 12,
              style: "normal"
            }
          },
        }}
      
    //   const labels = ['', '', '', '', '', '', ''];
    // const fakeData = [3, 5, 4, 6, 8, 10, 9];
      
 const data = {
        labels: arrayForSort.map(()=> ''),
        datasets: [
          {
            // label: 'Dataset 1',
            data: arrayForSort.map((chek)=> chek.pages),
            // .map((num) => num ),
            borderColor: ' #FF6B08',
            backgroundColor: '#FF6B08',
          },
        ],
      };
  return <ChartContainer><Line options={options} data={data} style={{width: "760px"}}  /></ChartContainer>;
}