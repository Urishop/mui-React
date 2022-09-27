import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { DataGrid } from '@mui/x-data-grid';
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      featured: true,
    },
   
  ];

const RasmList = () => {
    return (
        <Box sx={{margin:'50px', marginTop:'100px'}}>
        <ImageList sx={{ width: '95%', height: 450 }} cols={3}>
        {itemData.map((image, index)=>(
          <ImageListItem key={index}>
          <img src={image.img} alt={image.title} loading='lazy'/>
          <ImageListItemBar position='below' title={image.title}/>
          </ImageListItem>
        ))}           
        </ImageList>    
        <Box>
                    
        </Box>
    

    </Box>
    


    );
};


RasmList.propTypes = {};

export default RasmList;