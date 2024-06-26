import {useSelector} from 'react-redux'
import { selectChekout } from '../../../redux/training/selectors'
import { Title, StatisticList, Date, Time, PageNumber, Pages, StatisticItem,StatBox   } from '../style/addPages.styled'

export const ViewStatistic = () => {
    const checkout = useSelector(selectChekout)
    const arrayForSort = [...checkout]

    arrayForSort.sort(function(a, b) {
        return Number.parseInt(b.unix) - Number.parseInt(a.unix);
      });

    return <StatBox>
    <Title>Статистика</Title>
    <StatisticList>
        {arrayForSort.map((chek)=>{
            return <StatisticItem key={chek.date}>
                <Date>{chek.date}</Date>
                <Time>{chek.time}</Time>
                <Pages><PageNumber>{chek.pages}</PageNumber> pages</Pages>
            </StatisticItem>
        })}
    </StatisticList>
    </StatBox>
}