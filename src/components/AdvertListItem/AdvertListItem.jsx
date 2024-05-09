import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/selectors';
import sprite from '../../image/icons.svg';
import { addFavorite, removeFavorite } from '../../redux/adverts/advertsSlise';
import {
  Btn,
  Button,
  Container,
  Content,
  Hed,
  Img,
  Item,
  List,
  Location,
  P,
  Price,
} from './AdvertListItem.styled';

const AdvertListItem = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites?.some(car => car.id === advert._id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, advert._id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(advert.id));
    } else {
      dispatch(addFavorite(advert));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <Container>
      <Img src={advert.gallery[0]} alt={`${advert.name}`} />
      <Content>
        <Hed>
          <h2>{advert.name}</h2>
          <Price>
            <p>€{advert.price.toFixed(2)}</p>

            <Btn onClick={toggleFavorite}>
              {!isFavorite ? (
                <svg width="24" height="24" fill="none" stroke="currentColor">
                  <use href={`${sprite}#icon-default_like`} />
                </svg>
              ) : (
                <svg width="24" height="24" fill="#e44848" stroke="#e44848">
                  <use href={`${sprite}#icon-default_like`} />
                </svg>
              )}
            </Btn>
          </Price>
        </Hed>
        <Location>
          <p style={{ textDecorationLine: 'underline' }}>
            <svg width="16" height="16" fill="#FFC531">
              <use href={`${sprite}#icon-Rating`} />
            </svg>
            {advert.rating} ({advert.reviews.length} Reviews)
          </p>
          <p>
            <svg svg width="16" height="16" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-location`} />
            </svg>
            {advert.location.split(',').reverse().join(', ')}
          </p>
        </Location>

        <P>{advert.description}</P>
        <div>
          <List>
            <Item>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-user`} />
              </svg>
              {advert.adults} adults
            </Item>
            <Item style={{ textTransform: 'capitalize' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              {advert.transmission}
            </Item>
            <Item style={{ textTransform: 'capitalize' }}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              {advert.engine}
            </Item>
            <Item>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              Kitchen
            </Item>
            <Item>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use href={`${sprite}#icon-beds`} />
              </svg>
              {advert.details.beds} beds
            </Item>
            <Item>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-ac`} />
              </svg>
              AC
            </Item>
          </List>
        </div>
        <Button type="button">Show more</Button>
      </Content>
    </Container>
  );
};

export default AdvertListItem;
