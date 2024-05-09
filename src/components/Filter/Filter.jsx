// import React, { useState } from 'react';
import sprite from '../../image/icons.svg';
import {
  Container,
  Label,
  Form,
  P,
  H2,
  Wrapper,
  Input,
  Icon,
  Btn,
} from './Filter.styled';

export const Filter = () => {
  // const [location, setLocation] = useState('');
  // const [detalis, setDetalis] = useState({
  //   ac: false,
  //   automatic: false,
  //   kitchen: false,
  //   tv: false,
  //   shower: false,
  // });
  const vehicleEquipment = [
    {
      value: 'ac',
      icon: 'icon-ac',
      text: 'AC',
    },
    {
      value: 'automatic',
      icon: 'icon-automatic',
      text: 'Automatic',
    },
    {
      value: 'kitchen',
      icon: 'icon-kitchen',
      text: 'Kitchen',
    },
    {
      value: 'tv',
      icon: 'icon-tv',
      text: 'TV',
    },
    {
      value: 'shower',
      icon: 'icon-shower',
      text: 'Shower/WC',
    },
  ];

  const vehicleType = [
    {
      value: 'van',
      icon: 'icon-van',
      text: 'Van',
    },
    {
      value: 'fullyIntegrated',
      icon: 'icon-fully',
      text: 'Fully Integrated',
    },
    {
      value: 'alcove',
      icon: 'icon-alcove',
      text: 'Alcove',
    },
  ];

  return (
    <Container>
      <Form>
        <Label>
          Location
          <svg width="32" height="32" fill="none" stroke="currentColor">
            <use href={`${sprite}#icon-location`} />
          </svg>
          <input
            type="text"
            name="location"
            // value={location}
            placeholder="City"
          />
        </Label>
        <P>Filters</P>
        <H2>Vehicle equipment</H2>
        <hr />
        <Wrapper>
          {vehicleEquipment.map(({ value, icon, text }) => (
            <Input key={value}>
              <input
                type="checkbox"
                name={value}
                value={value}
                // checked={detalis[value]}
              />
              <Icon>
                <svg width="32" fill="none" stroke="currentColor">
                  <use href={`${sprite}#${icon}`} />
                </svg>
                {text}
              </Icon>
            </Input>
          ))}
        </Wrapper>
        <H2>Vehicle type</H2>
        <hr />
        <div>
          <Wrapper>
            {vehicleType.map(({ value, icon, text }) => (
              <Input key={value}>
                <input
                  type="checkbox"
                  name={value}
                  value={value}
                  // checked={detalis[value]}
                />
                <Icon>
                  <svg width="32" fill="none" stroke="currentColor">
                    <use href={`${sprite}#${icon}`} />
                  </svg>
                  {text}
                </Icon>
              </Input>
            ))}
          </Wrapper>
        </div>
        <Btn>Search</Btn>
      </Form>
    </Container>
  );
};
