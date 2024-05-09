// import { AdvertList } from '../../components/AdvertList/AdvertList';
import { Filter } from '../../components/Filter/Filter';
import { Container } from './CatalogPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/operations';
import { selectAdverts } from '../../redux/adverts/selectors';
import AdvertListItem from 'components/AdvertListItem/AdvertListItem';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  // const handleLoadMore = () => {
  //   // setPage(page + 1);
  // };

  return (
    <Container>
      <Filter />
      <ul>
        {adverts.map((advert, index) => (
          <li key={advert._id}>
            <AdvertListItem advert={advert} index={index} />
          </li>
        ))}
      </ul>

      {/* <btn type="button" onClick={handleLoadMore}>
        Load More
      </btn> */}
    </Container>
  );
};
export default CatalogPage;
