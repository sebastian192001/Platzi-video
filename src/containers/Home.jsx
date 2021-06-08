import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
import Header from '../components/Header';


const Home = ({ myList, trends, originals }) => {
  return(
    <>
      <Header/>
      <Search isHome/>
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item,id) =>
              <CarouselItem 
              key={id} 
              {...item} 
               isList 
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item,id) =>
            <CarouselItem key={id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item,id) =>
            <CarouselItem key={id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}


const mapStateToProps = state => {
   return {
     myList: state.myList,
     trends: state.trends,
     originals: state.originals,
   }
}

export default connect(mapStateToProps, null)(Home)