// import { AdvertList } from '../../components/AdvertList/AdvertList';
import { Filter } from '../../components/Filter/Filter';
import { Container } from './CatalogPage.styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll } from 'react-scroll';
import { getAllAdverts } from '../../redux/adverts/operations';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from '../../redux/adverts/selectors';
import AdvertListItem from '../../components/AdvertListItem/AdvertListItem';
import { selectFilter } from '../../redux/filter/selectors';
import { getFilteredAdverts } from '../../helpers/getFildered';
import { filterUse } from '../../redux/filter/filterSlise';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const filters = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allAdverts = useSelector(selectAdverts);

  const advertsRef = useRef(null);

  useEffect(() => {
    dispatch(getAllAdverts({ page: currentPage, limit: 12 }));
  }, [currentPage, dispatch]);

  const filteredAdverts = getFilteredAdverts(allAdverts, filters);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);

    const options = {
      duration: 1500,
      smooth: true,
    };

    animateScroll.scrollTo(advertsRef.current.offsetTop, options);
  };
  useEffect(() => {
    if (
      filteredAdverts.length < currentPage * 4 ||
      (filteredAdverts.length % 4 !== 0 &&
        currentPage * 4 >= filteredAdverts.length)
    ) {
      setIsLoadMore(false);
    } else {
      setIsLoadMore(true);
    }
  }, [filteredAdverts, currentPage]);

  useEffect(() => {
    return () => {
      dispatch(filterUse({ location: '', details: {}, forms: '' }));
    };
  }, [dispatch]);
  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <Filter />
      <ul>
        {filteredAdverts.length > 0 ? (
          filteredAdverts.slice(0, currentPage * 4).map(advert => (
            <li key={advert._id}>
              <AdvertListItem advert={advert} ref={advertsRef} />
            </li>
          ))
        ) : (
          <p>Non</p>
        )}
      </ul>

      {isLoadMore && !isLoading && (
        <btn type="button" onClick={handleLoadMore}>
          Load More
        </btn>
      )}
    </Container>
  );
};

export default CatalogPage;
