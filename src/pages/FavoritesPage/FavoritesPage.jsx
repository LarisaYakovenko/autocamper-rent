import AdvertListItem from 'components/AdvertListItem/AdvertListItem';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/selectors';

export const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(advert => (
            <li key={advert._id}>
              <AdvertListItem advert={advert} />
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't added it to your favorites yet.</p>
      )}
    </div>
  );
};
